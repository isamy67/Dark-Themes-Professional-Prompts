import { SECTION_KEYS } from "@/lib/types";
import type { CardSrsState, ExamResult, SectionKey } from "@/lib/types";

/**
 * Pure, framework-free aggregation for the Performance Dashboard. Nothing here
 * touches React, Zustand, IndexedDB, or the content loader — callers flatten
 * their stores + content into the small input shapes below, and these
 * functions do the grouping/derivation so the math stays trivially testable.
 */

// ---------------------------------------------------------------------------
// Tutor accuracy (per-question correctness -> grouped %)
// ---------------------------------------------------------------------------

/** One answered Tutor-Mode question, pre-resolved with its taxonomy. */
export interface TutorAnswerDatum {
  sectionKey: SectionKey;
  /** Stable grouping key: normalized FC id (e.g. "fc4") or a CARS skill slug. */
  conceptKey: string;
  /** Human-readable label for the concept/skill. */
  conceptLabel: string;
  correct: boolean;
}

export interface GroupAccuracy {
  key: string;
  label: string;
  sectionKey: SectionKey;
  answered: number;
  correct: number;
  /** Percent correct 0-100, or null when nothing has been answered. */
  pct: number | null;
}

/** Short labels for the four MCAT sections, used on axes/tiles. */
export const SECTION_LABELS: Record<SectionKey, string> = {
  "chem-phys": "Chem/Phys",
  cars: "CARS",
  "bio-biochem": "Bio/Biochem",
  "psych-soc": "Psych/Soc",
};

function pctOf(correct: number, answered: number): number | null {
  return answered === 0 ? null : Math.round((correct / answered) * 100);
}

/**
 * Accuracy for all four sections, always returned in canonical section order
 * (unanswered sections come back with answered=0, pct=null so the chart can
 * render a graceful "not attempted" state rather than dropping the bar).
 */
export function accuracyBySection(data: TutorAnswerDatum[]): GroupAccuracy[] {
  return SECTION_KEYS.map((sk) => {
    const rows = data.filter((d) => d.sectionKey === sk);
    const correct = rows.filter((d) => d.correct).length;
    return {
      key: sk,
      label: SECTION_LABELS[sk],
      sectionKey: sk,
      answered: rows.length,
      correct,
      pct: pctOf(correct, rows.length),
    };
  });
}

/**
 * Accuracy grouped by Foundational Concept (or CARS skill). Only concepts that
 * have at least one answered question appear. Ordered by section, then label,
 * for a stable, readable chart.
 */
export function accuracyByConcept(data: TutorAnswerDatum[]): GroupAccuracy[] {
  const map = new Map<string, GroupAccuracy>();
  for (const d of data) {
    let g = map.get(d.conceptKey);
    if (!g) {
      g = {
        key: d.conceptKey,
        label: d.conceptLabel,
        sectionKey: d.sectionKey,
        answered: 0,
        correct: 0,
        pct: null,
      };
      map.set(d.conceptKey, g);
    }
    g.answered += 1;
    if (d.correct) g.correct += 1;
  }

  const sectionOrder = new Map<SectionKey, number>(
    SECTION_KEYS.map((s, i) => [s, i]),
  );

  return [...map.values()]
    .map((g) => ({ ...g, pct: pctOf(g.correct, g.answered) }))
    .sort((a, b) => {
      const so =
        (sectionOrder.get(a.sectionKey) ?? 0) -
        (sectionOrder.get(b.sectionKey) ?? 0);
      return so !== 0 ? so : a.label.localeCompare(b.label);
    });
}

export interface WeakAreaOptions {
  /** Ignore groups with fewer than this many answered questions. Default 1. */
  minAnswered?: number;
  /** How many weak areas to return. Default 2. */
  limit?: number;
  /** Only flag groups strictly below this percent. Default 100. */
  threshold?: number;
}

/**
 * Lowest-accuracy groups, weakest first. A group at or above `threshold`
 * (default 100 => nothing perfect is ever flagged) is never returned, so a
 * flawless learner sees an encouraging empty state instead of a false weakness.
 */
export function selectWeakAreas(
  groups: GroupAccuracy[],
  opts: WeakAreaOptions = {},
): GroupAccuracy[] {
  const minAnswered = opts.minAnswered ?? 1;
  const limit = opts.limit ?? 2;
  const threshold = opts.threshold ?? 100;
  return groups
    .filter(
      (g) => g.answered >= minAnswered && g.pct !== null && g.pct < threshold,
    )
    .sort((a, b) => (a.pct ?? 0) - (b.pct ?? 0) || b.answered - a.answered)
    .slice(0, limit);
}

// ---------------------------------------------------------------------------
// Score history (completed full-length exams over time)
// ---------------------------------------------------------------------------

export interface ScorePoint {
  attemptId: string;
  /** ISO completion timestamp. */
  date: string;
  /** Total scaled score, 472-528. */
  total: number;
  /** Per-section scaled score (118-132) keyed by section. */
  sections: Partial<Record<SectionKey, number>>;
}

/**
 * Chronological (oldest-first) history of completed, non-voided full-length
 * exams. Section practice and voided attempts are excluded because they don't
 * produce a comparable total scaled score.
 */
export function buildScoreHistory(results: ExamResult[]): ScorePoint[] {
  return results
    .filter(
      (r) =>
        r.mode === "full-sim" &&
        !r.voided &&
        typeof r.totalScaledScore === "number",
    )
    .map((r) => ({
      attemptId: r.attemptId,
      date: r.completedAt,
      total: r.totalScaledScore as number,
      sections: Object.fromEntries(
        r.sectionScores.map((s) => [s.sectionKey, s.scaledScore]),
      ) as Partial<Record<SectionKey, number>>,
    }))
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}

/** Latest and best total scaled score from a score history. */
export function scoreSummary(history: ScorePoint[]): {
  latest: number | null;
  best: number | null;
} {
  if (history.length === 0) return { latest: null, best: null };
  return {
    latest: history[history.length - 1].total,
    best: Math.max(...history.map((h) => h.total)),
  };
}

/**
 * Total practice questions answered across modes: per-question Tutor answers
 * plus every question in each non-voided exam result (exams keep only
 * per-section totals, so we sum those).
 */
export function totalQuestionsAnswered(
  tutorAnswered: number,
  results: ExamResult[],
): number {
  const examQuestions = results
    .filter((r) => !r.voided)
    .reduce(
      (n, r) => n + r.sectionScores.reduce((m, s) => m + s.totalCount, 0),
      0,
    );
  return tutorAnswered + examQuestions;
}

// ---------------------------------------------------------------------------
// Flashcards (SM-2 scheduling state -> learning-stage tallies)
// ---------------------------------------------------------------------------

/** SM-2 interval (days) at/above which a card is considered "mature". */
export const MATURE_INTERVAL_DAYS = 21;

export interface FlashcardTallies {
  total: number;
  /** Cards with any review history. */
  seen: number;
  /** Cards never reviewed. */
  unseen: number;
  /** Reviewed cards whose next review is due now. */
  due: number;
  /** Reviewed but still short-interval (< MATURE_INTERVAL_DAYS). */
  learning: number;
  /** Reviewed with a long interval (>= MATURE_INTERVAL_DAYS). */
  mature: number;
  /** Cards to study today: due reviews + never-seen new cards. */
  dueToday: number;
}

/**
 * Tallies flashcards by learning stage. Each entry is a card's SM-2 state
 * (undefined = never reviewed). `now` is epoch-ms.
 */
export function flashcardTallies(
  cards: { state?: CardSrsState }[],
  now: number,
): FlashcardTallies {
  let seen = 0;
  let due = 0;
  let learning = 0;
  let mature = 0;

  for (const c of cards) {
    if (!c.state) continue;
    seen += 1;
    if (c.state.dueAt <= now) due += 1;
    if (c.state.intervalDays >= MATURE_INTERVAL_DAYS) mature += 1;
    else learning += 1;
  }

  const total = cards.length;
  const unseen = total - seen;
  return { total, seen, unseen, due, learning, mature, dueToday: due + unseen };
}
