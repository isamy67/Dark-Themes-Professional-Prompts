import { describe, expect, it } from "vitest";
import {
  SCALED_SCORE_MAX,
  SCALED_SCORE_MIDPOINT,
  SCALED_SCORE_MIN,
  scaledScoreForSection,
  scoreSections,
} from "@/lib/scoring";

describe("scaledScoreForSection", () => {
  it("floors at the minimum for zero correct", () => {
    expect(scaledScoreForSection(0, 12)).toBe(SCALED_SCORE_MIN);
  });

  it("floors at the minimum for any score at or below 25%", () => {
    expect(scaledScoreForSection(3, 12)).toBe(SCALED_SCORE_MIN); // 25%
  });

  it("returns the midpoint at 50% correct", () => {
    expect(scaledScoreForSection(6, 12)).toBe(SCALED_SCORE_MIDPOINT);
  });

  it("ceilings at the maximum at or above 90% correct", () => {
    expect(scaledScoreForSection(11, 12)).toBeGreaterThanOrEqual(
      SCALED_SCORE_MAX - 1,
    );
    expect(scaledScoreForSection(59, 59)).toBe(SCALED_SCORE_MAX);
  });

  it("is monotonically non-decreasing as accuracy improves", () => {
    const scores = Array.from({ length: 13 }, (_, correct) =>
      scaledScoreForSection(correct, 12),
    );
    for (let i = 1; i < scores.length; i++) {
      expect(scores[i]).toBeGreaterThanOrEqual(scores[i - 1]);
    }
  });

  it("stays within the real AAMC scaled range regardless of question count", () => {
    for (const total of [10, 12, 53, 59]) {
      for (const correct of [0, Math.floor(total / 2), total]) {
        const score = scaledScoreForSection(correct, total);
        expect(score).toBeGreaterThanOrEqual(SCALED_SCORE_MIN);
        expect(score).toBeLessThanOrEqual(SCALED_SCORE_MAX);
      }
    }
  });

  it("throws for a non-positive total", () => {
    expect(() => scaledScoreForSection(0, 0)).toThrow();
  });
});

describe("scoreSections", () => {
  it("sums per-section scaled scores into a total", () => {
    const { sections, totalScaledScore } = scoreSections([
      { sectionKey: "chem-phys", correctCount: 6, totalCount: 12 },
      { sectionKey: "cars", correctCount: 5, totalCount: 10 },
      { sectionKey: "bio-biochem", correctCount: 6, totalCount: 12 },
      { sectionKey: "psych-soc", correctCount: 6, totalCount: 12 },
    ]);
    expect(sections).toHaveLength(4);
    const expectedTotal = sections.reduce((sum, s) => sum + s.scaledScore, 0);
    expect(totalScaledScore).toBe(expectedTotal);
    expect(totalScaledScore).toBeGreaterThanOrEqual(4 * SCALED_SCORE_MIN);
    expect(totalScaledScore).toBeLessThanOrEqual(4 * SCALED_SCORE_MAX);
  });
});
