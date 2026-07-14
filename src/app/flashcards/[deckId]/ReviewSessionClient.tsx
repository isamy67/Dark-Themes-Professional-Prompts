"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowLeft, Check, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { getDeck } from "@/lib/content";
import {
  buildReviewQueue,
  initialCardState,
  reviewByRating,
  REVIEW_RATINGS,
  type ReviewRating,
} from "@/lib/srs";
import { useSrsStore } from "@/store/srsStore";

const EMPTY_TALLY: Record<ReviewRating, number> = {
  again: 0,
  hard: 0,
  good: 0,
  easy: 0,
};

const RATING_META: Record<
  ReviewRating,
  { label: string; variant: "primary" | "secondary" | "danger" }
> = {
  again: { label: "Again", variant: "danger" },
  hard: { label: "Hard", variant: "secondary" },
  good: { label: "Good", variant: "primary" },
  easy: { label: "Easy", variant: "secondary" },
};

function formatInterval(days: number): string {
  if (days < 1) return "<1d";
  if (days < 30) return `${days}d`;
  if (days < 365) return `${Math.round(days / 30)}mo`;
  return `${(days / 365).toFixed(1)}y`;
}

export function ReviewSessionClient({ deckId }: { deckId: string }) {
  const deck = getDeck(deckId);
  const hasHydrated = useSrsStore((s) => s.hasHydrated);
  const recordReview = useSrsStore((s) => s.recordReview);

  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [tally, setTally] = useState<Record<ReviewRating, number>>(EMPTY_TALLY);
  // Lazy initializer keeps the clock read out of the render body (pure). The
  // queue is rebuilt only when this anchor changes (mount + restart), so a
  // point-in-time snapshot of progress is frozen for the whole session and
  // grading a card never reshuffles the running queue.
  const [nowAnchor, setNowAnchor] = useState(() => Date.now());

  const queue = useMemo(() => {
    if (!hasHydrated || !deck) return null;
    const snapshot = useSrsStore.getState().progress[deck.id] ?? {};
    return buildReviewQueue(deck.cards, snapshot, nowAnchor);
  }, [hasHydrated, deck, nowAnchor]);

  if (!deck) {
    return (
      <main className="mx-auto flex min-h-dvh max-w-2xl flex-col items-center justify-center gap-4 px-6 text-center">
        <h1 className="font-display text-2xl font-semibold text-foreground">
          Deck not found
        </h1>
        <Link href="/flashcards">
          <Button variant="secondary">Back to decks</Button>
        </Link>
      </main>
    );
  }

  if (!hasHydrated || queue === null) {
    return <LoadingScreen />;
  }

  const activeDeck = deck;
  const total = queue.length;
  const done = index >= total;

  // Bumping the anchor re-runs the useMemo, rebuilding from freshly-persisted
  // progress and the current clock.
  const restart = () => {
    setIndex(0);
    setFlipped(false);
    setTally(EMPTY_TALLY);
    setNowAnchor(Date.now());
  };

  // Empty queue: nothing due and no new cards.
  if (total === 0 || done) {
    const reviewed = tally.again + tally.hard + tally.good + tally.easy;
    return (
      <main className="mx-auto flex min-h-dvh max-w-2xl flex-col gap-6 px-6 py-16">
        <Link
          href="/flashcards"
          className="inline-flex w-fit items-center gap-1.5 rounded-md font-mono text-xs tracking-wide text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <ArrowLeft size={14} strokeWidth={1.5} />
          FLASHCARDS
        </Link>
        <Card highlighted className="flex flex-col items-center gap-4 p-8 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-muted text-accent">
            <Check size={24} strokeWidth={2} />
          </div>
          <div>
            <h1 className="font-display text-2xl font-semibold text-foreground">
              {total === 0 ? "All caught up" : "Session complete"}
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              {total === 0
                ? `No cards are due in ${deck.title} right now. Come back later.`
                : `You reviewed ${reviewed} ${reviewed === 1 ? "card" : "cards"} in ${deck.title}.`}
            </p>
          </div>
          {reviewed > 0 && (
            <div className="flex flex-wrap justify-center gap-2 font-mono text-xs">
              {REVIEW_RATINGS.map((r) => (
                <span
                  key={r}
                  className="rounded-full border border-border px-2.5 py-0.5 text-muted-foreground"
                >
                  {RATING_META[r].label}: {tally[r]}
                </span>
              ))}
            </div>
          )}
          <div className="flex gap-3">
            <Link href="/flashcards">
              <Button variant="secondary">Back to decks</Button>
            </Link>
            <Button onClick={restart} className="gap-2">
              <RotateCcw size={16} strokeWidth={1.5} />
              Review again
            </Button>
          </div>
        </Card>
      </main>
    );
  }

  const card = queue[index];
  // Display-only: we render preview.intervalDays, which is independent of the
  // clock, so a fixed 0 anchor here keeps render pure (lint react-hooks/purity).
  const currentState =
    useSrsStore.getState().progress[activeDeck.id]?.[card.id] ??
    initialCardState(0);

  const grade = (rating: ReviewRating) => {
    recordReview(activeDeck.id, card.id, rating);
    setTally((t) => ({ ...t, [rating]: t[rating] + 1 }));
    setFlipped(false);
    setIndex((i) => i + 1);
  };

  return (
    <main className="mx-auto flex min-h-dvh max-w-2xl flex-col gap-6 px-6 py-16">
      <Link
        href="/flashcards"
        className="inline-flex w-fit items-center gap-1.5 rounded-md font-mono text-xs tracking-wide text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        <ArrowLeft size={14} strokeWidth={1.5} />
        {deck.title.toUpperCase()}
      </Link>

      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between font-mono text-xs text-muted-foreground">
          <span>
            Card {index + 1} of {total}
          </span>
          <span>{deck.sectionKey.toUpperCase()}</span>
        </div>
        <ProgressBar value={index} max={total} label="Session progress" />
      </div>

      <Card className="flex min-h-[16rem] flex-col p-8">
        <p className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
          Prompt
        </p>
        <p className="mt-3 font-display text-xl font-medium text-foreground">
          {card.front}
        </p>

        {!flipped && card.hint && (
          <p className="mt-4 text-sm italic text-muted-foreground">
            Hint: {card.hint}
          </p>
        )}

        {flipped && (
          <div className="mt-6 border-t border-border pt-6">
            <p className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
              Answer
            </p>
            <p className="mt-3 text-base leading-relaxed text-foreground">
              {card.back}
            </p>
          </div>
        )}

        <div className="mt-auto pt-8">
          {!flipped ? (
            <Button className="w-full" onClick={() => setFlipped(true)}>
              Show Answer
            </Button>
          ) : (
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {REVIEW_RATINGS.map((rating) => {
                const preview = reviewByRating(currentState, rating, 0);
                return (
                  <Button
                    key={rating}
                    variant={RATING_META[rating].variant}
                    onClick={() => grade(rating)}
                    className="flex-col !h-auto py-2.5"
                  >
                    <span>{RATING_META[rating].label}</span>
                    <span className="font-mono text-[10px] font-normal opacity-70">
                      {formatInterval(preview.intervalDays)}
                    </span>
                  </Button>
                );
              })}
            </div>
          )}
        </div>
      </Card>
    </main>
  );
}
