import type { CardSrsState } from "@/lib/types";

/**
 * Pure implementation of the classic SuperMemo-2 (SM-2) spaced-repetition
 * scheduling algorithm. No React / no persistence here — the store layers
 * IndexedDB persistence on top, and the UI maps its four self-grade buttons
 * onto the 0-5 grade scale via {@link RATING_TO_GRADE}.
 */

/** SM-2 never lets the ease factor drop below this floor. */
export const MIN_EASE_FACTOR = 1.3;
/** Ease factor a brand-new card starts with. */
export const DEFAULT_EASE_FACTOR = 2.5;
export const DAY_MS = 24 * 60 * 60 * 1000;

/** The four self-grade buttons shown in a review session. */
export type ReviewRating = "again" | "hard" | "good" | "easy";

/**
 * Maps each button to an SM-2 quality grade (0-5). Only "again" falls below 3,
 * so only "again" counts as a failing recall that resets the repetition count.
 */
export const RATING_TO_GRADE: Record<ReviewRating, number> = {
  again: 1,
  hard: 3,
  good: 4,
  easy: 5,
};

export const REVIEW_RATINGS: ReviewRating[] = ["again", "hard", "good", "easy"];

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

/** Fresh scheduling state for a card that has never been reviewed (due now). */
export function initialCardState(now: number): CardSrsState {
  return {
    repetitions: 0,
    easeFactor: DEFAULT_EASE_FACTOR,
    intervalDays: 0,
    dueAt: now,
  };
}

/**
 * Applies one SM-2 review to a card's state and returns the next state.
 *
 * @param state current scheduling state
 * @param gradeInput quality of recall, 0 (blackout) - 5 (perfect); clamped/rounded
 * @param now epoch-ms timestamp of the review
 */
export function review(
  state: CardSrsState,
  gradeInput: number,
  now: number,
): CardSrsState {
  const grade = clamp(Math.round(gradeInput), 0, 5);
  const passed = grade >= 3;

  let repetitions: number;
  let intervalDays: number;

  if (!passed) {
    // Failed recall: relearn from scratch, but keep (adjusted) ease factor.
    repetitions = 0;
    intervalDays = 1;
  } else {
    if (state.repetitions === 0) {
      intervalDays = 1;
    } else if (state.repetitions === 1) {
      intervalDays = 6;
    } else {
      intervalDays = Math.round(state.intervalDays * state.easeFactor);
    }
    repetitions = state.repetitions + 1;
  }

  // Standard SM-2 ease-factor update, applied on every review, floored at 1.3.
  const delta = 0.1 - (5 - grade) * (0.08 + (5 - grade) * 0.02);
  const easeFactor = Math.max(MIN_EASE_FACTOR, state.easeFactor + delta);

  return {
    repetitions,
    easeFactor,
    intervalDays,
    dueAt: now + intervalDays * DAY_MS,
  };
}

/** Convenience wrapper that grades from one of the four UI ratings. */
export function reviewByRating(
  state: CardSrsState,
  rating: ReviewRating,
  now: number,
): CardSrsState {
  return review(state, RATING_TO_GRADE[rating], now);
}

/** A card is due when its next-review timestamp has arrived. */
export function isDue(state: CardSrsState, now: number): boolean {
  return state.dueAt <= now;
}

/**
 * Builds an ordered review queue for a deck: cards already due (most overdue
 * first) followed by never-seen "new" cards in authored order. Cards that are
 * seen but not yet due are excluded.
 */
export function buildReviewQueue<T extends { id: string }>(
  cards: readonly T[],
  progress: Record<string, CardSrsState>,
  now: number,
): T[] {
  const due: { card: T; dueAt: number }[] = [];
  const fresh: T[] = [];

  for (const card of cards) {
    const state = progress[card.id];
    if (!state) {
      fresh.push(card);
    } else if (isDue(state, now)) {
      due.push({ card, dueAt: state.dueAt });
    }
  }

  due.sort((a, b) => a.dueAt - b.dueAt);
  return [...due.map((d) => d.card), ...fresh];
}

/** How many of a deck's cards are due or new right now (for the deck-list badge). */
export function countDue<T extends { id: string }>(
  cards: readonly T[],
  progress: Record<string, CardSrsState>,
  now: number,
): number {
  return buildReviewQueue(cards, progress, now).length;
}
