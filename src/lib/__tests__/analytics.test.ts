import { describe, expect, it } from "vitest";
import {
  MATURE_INTERVAL_DAYS,
  accuracyByConcept,
  accuracyBySection,
  buildScoreHistory,
  flashcardTallies,
  scoreSummary,
  selectWeakAreas,
  totalQuestionsAnswered,
  type TutorAnswerDatum,
} from "@/lib/analytics";
import { SECTION_KEYS } from "@/lib/types";
import type { CardSrsState, ExamResult } from "@/lib/types";

function ans(
  sectionKey: TutorAnswerDatum["sectionKey"],
  conceptKey: string,
  correct: boolean,
): TutorAnswerDatum {
  return { sectionKey, conceptKey, conceptLabel: conceptKey.toUpperCase(), correct };
}

describe("accuracyBySection", () => {
  it("returns all four sections in canonical order even with no data", () => {
    const rows = accuracyBySection([]);
    expect(rows.map((r) => r.sectionKey)).toEqual([...SECTION_KEYS]);
    for (const r of rows) {
      expect(r.answered).toBe(0);
      expect(r.pct).toBeNull();
    }
  });

  it("computes rounded percent correct per section", () => {
    const data: TutorAnswerDatum[] = [
      ans("bio-biochem", "fc1", true),
      ans("bio-biochem", "fc1", true),
      ans("bio-biochem", "fc2", false),
      ans("cars", "reasoning", true),
    ];
    const bySection = Object.fromEntries(
      accuracyBySection(data).map((r) => [r.sectionKey, r]),
    );
    expect(bySection["bio-biochem"].answered).toBe(3);
    expect(bySection["bio-biochem"].correct).toBe(2);
    expect(bySection["bio-biochem"].pct).toBe(67); // 2/3 rounded
    expect(bySection["cars"].pct).toBe(100);
    expect(bySection["chem-phys"].pct).toBeNull();
  });
});

describe("accuracyByConcept", () => {
  it("groups by concept key and is empty-input safe", () => {
    expect(accuracyByConcept([])).toEqual([]);
  });

  it("aggregates per concept and orders by section then label", () => {
    const data: TutorAnswerDatum[] = [
      ans("psych-soc", "fc7", false),
      ans("chem-phys", "fc4", true),
      ans("chem-phys", "fc4", false),
      ans("chem-phys", "fc5", true),
    ];
    const groups = accuracyByConcept(data);
    // chem-phys (index 0) concepts come before psych-soc (index 3)
    expect(groups[0].sectionKey).toBe("chem-phys");
    expect(groups[groups.length - 1].sectionKey).toBe("psych-soc");
    const fc4 = groups.find((g) => g.key === "fc4")!;
    expect(fc4.answered).toBe(2);
    expect(fc4.correct).toBe(1);
    expect(fc4.pct).toBe(50);
  });
});

describe("selectWeakAreas", () => {
  it("returns nothing for empty input", () => {
    expect(selectWeakAreas([])).toEqual([]);
  });

  it("returns lowest-accuracy groups first and never flags a perfect group", () => {
    const groups = accuracyByConcept([
      ans("chem-phys", "fc4", false), // 0%
      ans("chem-phys", "fc5", true), // 100%
      ans("bio-biochem", "fc1", true),
      ans("bio-biochem", "fc1", false), // 50%
    ]);
    const weak = selectWeakAreas(groups, { limit: 5 });
    expect(weak.map((g) => g.key)).toEqual(["fc4", "fc1"]);
    expect(weak.find((g) => g.key === "fc5")).toBeUndefined();
  });

  it("respects minAnswered so tiny samples aren't flagged", () => {
    const groups = accuracyByConcept([ans("cars", "skill", false)]);
    expect(selectWeakAreas(groups, { minAnswered: 2 })).toEqual([]);
  });
});

function result(
  overrides: Partial<ExamResult> & Pick<ExamResult, "attemptId">,
): ExamResult {
  return {
    examId: "exam-1",
    mode: "full-sim",
    completedAt: "2026-01-01T00:00:00.000Z",
    voided: false,
    sectionScores: [
      { sectionId: "s1", sectionKey: "chem-phys", correctCount: 6, totalCount: 12, scaledScore: 125 },
      { sectionId: "s2", sectionKey: "cars", correctCount: 5, totalCount: 10, scaledScore: 125 },
      { sectionId: "s3", sectionKey: "bio-biochem", correctCount: 6, totalCount: 12, scaledScore: 125 },
      { sectionId: "s4", sectionKey: "psych-soc", correctCount: 6, totalCount: 12, scaledScore: 125 },
    ],
    totalScaledScore: 500,
    ...overrides,
  };
}

describe("buildScoreHistory", () => {
  it("is empty-input safe", () => {
    expect(buildScoreHistory([])).toEqual([]);
  });

  it("keeps only completed non-voided full exams, sorted oldest-first", () => {
    const history = buildScoreHistory([
      result({ attemptId: "b", completedAt: "2026-03-01T00:00:00Z", totalScaledScore: 510 }),
      result({ attemptId: "a", completedAt: "2026-01-01T00:00:00Z", totalScaledScore: 495 }),
      result({ attemptId: "voided", voided: true, totalScaledScore: undefined }),
      result({ attemptId: "sect", mode: "section-practice" }),
    ]);
    expect(history.map((h) => h.attemptId)).toEqual(["a", "b"]);
    expect(history[0].total).toBe(495);
    expect(history[1].sections["chem-phys"]).toBe(125);
  });

  it("summarizes latest and best", () => {
    const history = buildScoreHistory([
      result({ attemptId: "a", completedAt: "2026-01-01T00:00:00Z", totalScaledScore: 495 }),
      result({ attemptId: "b", completedAt: "2026-02-01T00:00:00Z", totalScaledScore: 520 }),
      result({ attemptId: "c", completedAt: "2026-03-01T00:00:00Z", totalScaledScore: 505 }),
    ]);
    expect(scoreSummary(history)).toEqual({ latest: 505, best: 520 });
    expect(scoreSummary([])).toEqual({ latest: null, best: null });
  });
});

describe("totalQuestionsAnswered", () => {
  it("sums tutor answers plus non-voided exam question totals", () => {
    const results = [
      result({ attemptId: "a" }), // 12+10+12+12 = 46
      result({ attemptId: "v", voided: true }), // excluded
    ];
    expect(totalQuestionsAnswered(7, results)).toBe(7 + 46);
    expect(totalQuestionsAnswered(0, [])).toBe(0);
  });
});

describe("flashcardTallies", () => {
  const now = 1_000_000_000_000;
  const day = 24 * 60 * 60 * 1000;

  function state(intervalDays: number, dueAt: number): CardSrsState {
    return { repetitions: 1, easeFactor: 2.5, intervalDays, dueAt };
  }

  it("is empty-input safe", () => {
    expect(flashcardTallies([], now)).toEqual({
      total: 0,
      seen: 0,
      unseen: 0,
      due: 0,
      learning: 0,
      mature: 0,
      dueToday: 0,
    });
  });

  it("classifies unseen, due, learning, and mature cards", () => {
    const cards = [
      {}, // unseen -> counts toward dueToday
      { state: state(1, now - day) }, // seen, due, learning
      { state: state(3, now + 5 * day) }, // seen, not due, learning
      { state: state(MATURE_INTERVAL_DAYS, now + 40 * day) }, // seen, mature
    ];
    const t = flashcardTallies(cards, now);
    expect(t.total).toBe(4);
    expect(t.seen).toBe(3);
    expect(t.unseen).toBe(1);
    expect(t.due).toBe(1);
    expect(t.learning).toBe(2);
    expect(t.mature).toBe(1);
    expect(t.dueToday).toBe(1 + 1); // due + unseen
  });
});
