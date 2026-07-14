"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, Layers } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { listDecks } from "@/lib/content";
import { countDue } from "@/lib/srs";
import { useSrsStore } from "@/store/srsStore";

// Referentially-stable empty fallback so the Zustand selector doesn't allocate
// a new object each render (which would loop useSyncExternalStore forever).
const EMPTY_PROGRESS = {};

export function FlashcardsIndexClient() {
  const decks = listDecks();
  const progress = useSrsStore((s) => s.progress);
  const hasHydrated = useSrsStore((s) => s.hasHydrated);
  // Lazy initializer keeps the clock read out of the render body (pure). Due
  // counts are only shown after hydration, so the fixed anchor is fine.
  const [now] = useState(() => Date.now());
  const ready = hasHydrated;

  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-2xl flex-col gap-6 px-6 py-16">
      <Link
        href="/"
        className="inline-flex w-fit items-center gap-1.5 rounded-md font-mono text-xs tracking-wide text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        <ArrowLeft size={14} strokeWidth={1.5} />
        HOME
      </Link>

      <div>
        <p className="font-mono text-xs tracking-wide text-muted-foreground">
          FLASHCARDS
        </p>
        <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight text-foreground">
          Spaced Repetition
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Review decks scheduled with the SuperMemo-2 algorithm — cards you find
          hard come back sooner, cards you know are spaced further out. All
          progress is saved on this device.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {decks.map((deck) => {
          const deckProgress = progress[deck.id] ?? EMPTY_PROGRESS;
          const dueCount = countDue(deck.cards, deckProgress, now);
          return (
            <Link key={deck.id} href={`/flashcards/${deck.id}`}>
              <Card interactive className="flex items-center gap-4 p-6">
                <Layers
                  size={20}
                  strokeWidth={1.5}
                  className="shrink-0 text-accent"
                />
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="font-display text-base font-semibold text-foreground">
                      {deck.title}
                    </p>
                    <Badge tone="neutral">{deck.sectionKey.toUpperCase()}</Badge>
                    {deck.foundationalConcept && (
                      <Badge tone="accent">
                        {deck.foundationalConcept.toUpperCase()}
                      </Badge>
                    )}
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {deck.description}
                  </p>
                  <p className="mt-2 font-mono text-xs text-muted-foreground">
                    {deck.cards.length} cards
                    {ready && (
                      <>
                        {" · "}
                        <span
                          className={
                            dueCount > 0 ? "text-accent" : "text-muted-foreground"
                          }
                        >
                          {dueCount > 0 ? `${dueCount} due` : "all caught up"}
                        </span>
                      </>
                    )}
                  </p>
                </div>
              </Card>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
