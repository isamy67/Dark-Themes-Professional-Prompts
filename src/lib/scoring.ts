/**
 * Approximate raw-percent -> scaled-score conversion. AAMC's real equating
 * tables aren't public and vary by test administration, so this is a
 * labeled ESTIMATE, not a claim of AAMC-equivalence — every UI surface that
 * shows a scaled score must carry an "Estimated Score" label.
 *
 * Operates on percentage correct (not raw count) so the same curve applies
 * unchanged whether a section has 12 starter questions or the real 59.
 */

export const SCALED_SCORE_MIN = 118;
export const SCALED_SCORE_MAX = 132;
export const SCALED_SCORE_MIDPOINT = 125;

/**
 * Piecewise-linear approximation: performance below chance-ish (25%) floors
 * at the minimum, performance at/above ~90% ceilings at the maximum, and the
 * middle of the range maps roughly linearly with a slightly steeper slope
 * around the median (typical AAMC score distributions cluster near 125).
 */
export function scaledScoreForSection(
  correctCount: number,
  totalCount: number,
): number {
  if (totalCount <= 0) {
    throw new Error("totalCount must be positive");
  }
  const pct = clamp(correctCount / totalCount, 0, 1);

  const breakpoints: Array<[pct: number, scaled: number]> = [
    [0, SCALED_SCORE_MIN],
    [0.25, SCALED_SCORE_MIN],
    [0.5, SCALED_SCORE_MIDPOINT],
    [0.9, SCALED_SCORE_MAX],
    [1, SCALED_SCORE_MAX],
  ];

  for (let i = 0; i < breakpoints.length - 1; i++) {
    const [p0, s0] = breakpoints[i];
    const [p1, s1] = breakpoints[i + 1];
    if (pct >= p0 && pct <= p1) {
      const t = p1 === p0 ? 0 : (pct - p0) / (p1 - p0);
      return Math.round(s0 + t * (s1 - s0));
    }
  }
  return SCALED_SCORE_MAX;
}

export interface SectionRawScore {
  sectionKey: string;
  correctCount: number;
  totalCount: number;
}

export interface SectionScaledScore extends SectionRawScore {
  scaledScore: number;
}

export function scoreSections(
  sections: SectionRawScore[],
): { sections: SectionScaledScore[]; totalScaledScore: number } {
  const scored = sections.map((s) => ({
    ...s,
    scaledScore: scaledScoreForSection(s.correctCount, s.totalCount),
  }));
  const totalScaledScore = scored.reduce((sum, s) => sum + s.scaledScore, 0);
  return { sections: scored, totalScaledScore };
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}
