import { describe, expect, it } from "vitest";
import {
  DAY_MS,
  DEFAULT_EASE_FACTOR,
  MIN_EASE_FACTOR,
  buildReviewQueue,
  countDue,
  initialCardState,
  isDue,
  review,
  reviewByRating,
} from "@/lib/srs";
import type { CardSrsState } from "@/lib/types";

const NOW = 1_000_000_000_000; // fixed epoch-ms anchor

describe("initialCardState", () => {
  it("starts due immediately with the default ease factor", () => {
    const s = initialCardState(NOW);
    expect(s.repetitions).toBe(0);
    expect(s.intervalDays).toBe(0);
    expect(s.easeFactor).toBe(DEFAULT_EASE_FACTOR);
    expect(s.dueAt).toBe(NOW);
    expect(isDue(s, NOW)).toBe(true);
  });
});

describe("review — interval progression on passing grades", () => {
  it("follows the classic 1 → 6 → interval*EF schedule", () => {
    let s = initialCardState(NOW);

    // First good review: interval 1 day.
    s = review(s, 4, NOW);
    expect(s.repetitions).toBe(1);
    expect(s.intervalDays).toBe(1);
    expect(s.dueAt).toBe(NOW + 1 * DAY_MS);

    // Second good review: interval 6 days.
    s = review(s, 4, NOW);
    expect(s.repetitions).toBe(2);
    expect(s.intervalDays).toBe(6);
    expect(s.dueAt).toBe(NOW + 6 * DAY_MS);

    // Grade 4 leaves EF unchanged at 2.5, so third interval = round(6 * 2.5) = 15.
    expect(s.easeFactor).toBeCloseTo(2.5, 10);
    s = review(s, 4, NOW);
    expect(s.repetitions).toBe(3);
    expect(s.intervalDays).toBe(15);
  });

  it("grows intervals monotonically across a long streak of good reviews", () => {
    let s = initialCardState(NOW);
    let prev = 0;
    for (let i = 0; i < 8; i++) {
      s = review(s, 5, NOW);
      expect(s.intervalDays).toBeGreaterThanOrEqual(prev);
      prev = s.intervalDays;
    }
    expect(s.intervalDays).toBeGreaterThan(6);
  });
});

describe("review — ease factor", () => {
  it("increases the ease factor on a perfect grade", () => {
    const s = review(initialCardState(NOW), 5, NOW);
    expect(s.easeFactor).toBeGreaterThan(DEFAULT_EASE_FACTOR);
  });

  it("leaves the ease factor unchanged on grade 4", () => {
    const s = review(initialCardState(NOW), 4, NOW);
    expect(s.easeFactor).toBeCloseTo(DEFAULT_EASE_FACTOR, 10);
  });

  it("never drops the ease factor below the 1.3 floor", () => {
    let s = initialCardState(NOW);
    for (let i = 0; i < 20; i++) {
      s = review(s, 0, NOW);
    }
    expect(s.easeFactor).toBe(MIN_EASE_FACTOR);
    expect(s.easeFactor).toBeGreaterThanOrEqual(MIN_EASE_FACTOR);
  });
});

describe("review — reset on failing grade", () => {
  it("resets repetitions and interval to a 1-day relearn on failure", () => {
    let s = initialCardState(NOW);
    s = review(s, 5, NOW);
    s = review(s, 5, NOW);
    s = review(s, 5, NOW);
    expect(s.repetitions).toBeGreaterThan(1);
    const easeBefore = s.easeFactor;

    s = review(s, 1, NOW);
    expect(s.repetitions).toBe(0);
    expect(s.intervalDays).toBe(1);
    expect(s.dueAt).toBe(NOW + DAY_MS);
    // Ease factor is still adjusted (downward) on failure, not left frozen.
    expect(s.easeFactor).toBeLessThan(easeBefore);
  });
});

describe("reviewByRating", () => {
  it("maps 'again' to a failing grade that resets the card", () => {
    let s = review(initialCardState(NOW), 5, NOW);
    s = review(s, 5, NOW);
    s = reviewByRating(s, "again", NOW);
    expect(s.repetitions).toBe(0);
    expect(s.intervalDays).toBe(1);
  });

  it("maps 'good' and 'easy' to passing grades that advance the card", () => {
    expect(reviewByRating(initialCardState(NOW), "good", NOW).repetitions).toBe(1);
    expect(reviewByRating(initialCardState(NOW), "easy", NOW).repetitions).toBe(1);
  });
});

describe("isDue", () => {
  it("is due exactly at and after dueAt, not before", () => {
    const s: CardSrsState = {
      repetitions: 1,
      easeFactor: 2.5,
      intervalDays: 1,
      dueAt: NOW,
    };
    expect(isDue(s, NOW - 1)).toBe(false);
    expect(isDue(s, NOW)).toBe(true);
    expect(isDue(s, NOW + 1)).toBe(true);
  });
});

describe("buildReviewQueue", () => {
  const cards = [{ id: "a" }, { id: "b" }, { id: "c" }, { id: "d" }];

  it("returns due cards first (most overdue first), then new cards in order", () => {
    const progress: Record<string, CardSrsState> = {
      // 'a' due 2 days ago, 'b' due 5 days ago (more overdue), 'c' not yet due.
      a: { repetitions: 1, easeFactor: 2.5, intervalDays: 1, dueAt: NOW - 2 * DAY_MS },
      b: { repetitions: 2, easeFactor: 2.5, intervalDays: 6, dueAt: NOW - 5 * DAY_MS },
      c: { repetitions: 3, easeFactor: 2.5, intervalDays: 15, dueAt: NOW + 5 * DAY_MS },
    };
    const queue = buildReviewQueue(cards, progress, NOW);
    // b (most overdue), then a, then new card d. c is excluded (future due).
    expect(queue.map((q) => q.id)).toEqual(["b", "a", "d"]);
  });

  it("treats an empty progress map as all-new", () => {
    const queue = buildReviewQueue(cards, {}, NOW);
    expect(queue.map((q) => q.id)).toEqual(["a", "b", "c", "d"]);
  });

  it("countDue matches queue length", () => {
    const progress: Record<string, CardSrsState> = {
      a: { repetitions: 1, easeFactor: 2.5, intervalDays: 1, dueAt: NOW + DAY_MS },
    };
    expect(countDue(cards, progress, NOW)).toBe(buildReviewQueue(cards, progress, NOW).length);
    expect(countDue(cards, progress, NOW)).toBe(3); // a not due; b,c,d new
  });
});
