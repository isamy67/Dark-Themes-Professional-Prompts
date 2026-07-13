import type { ExamMeta, ExamSectionConfig, SectionKey } from "@/lib/types";
import { examMetaSchema } from "@/lib/types";

/**
 * Canonical real-AAMC structure. Every exam's ExamSectionConfig.fullDurationSec /
 * fullQuestionCount should come from here so section labels ("Real exam: 95 min,
 * 59 questions") stay accurate regardless of how many questions this exam's
 * content actually contains.
 */
export const REAL_AAMC_SECTIONS: Record<
  SectionKey,
  { title: string; fullDurationSec: number; fullQuestionCount: number }
> = {
  "chem-phys": {
    title: "Chemical and Physical Foundations of Biological Systems",
    fullDurationSec: 95 * 60,
    fullQuestionCount: 59,
  },
  cars: {
    title: "Critical Analysis and Reasoning Skills",
    fullDurationSec: 90 * 60,
    fullQuestionCount: 53,
  },
  "bio-biochem": {
    title: "Biological and Biochemical Foundations of Living Systems",
    fullDurationSec: 95 * 60,
    fullQuestionCount: 59,
  },
  "psych-soc": {
    title: "Psychological, Social, and Biological Foundations of Behavior",
    fullDurationSec: 95 * 60,
    fullQuestionCount: 59,
  },
};

export const REAL_AAMC_SECTION_ORDER: SectionKey[] = [
  "chem-phys",
  "cars",
  "bio-biochem",
  "psych-soc",
];

export const REAL_AAMC_TUTORIAL_DURATION_SEC = 10 * 60;
export const REAL_AAMC_SHORT_BREAK_SEC = 10 * 60;
export const REAL_AAMC_LUNCH_BREAK_SEC = 30 * 60;

/**
 * Builds an ExamSectionConfig whose durationSec is scaled to the real AAMC
 * per-question pace for that section, given a (usually smaller) starter
 * question count. If usesFullAAMCDurations is true, durationSec equals the
 * real full duration regardless of questionCount.
 */
function buildSectionConfig(
  sectionKey: SectionKey,
  id: string,
  questionCount: number,
  contentModuleId: string,
  usesFullAAMCDurations: boolean,
): ExamSectionConfig {
  const real = REAL_AAMC_SECTIONS[sectionKey];
  const paceSecPerQuestion = real.fullDurationSec / real.fullQuestionCount;
  const durationSec = usesFullAAMCDurations
    ? real.fullDurationSec
    : Math.round(questionCount * paceSecPerQuestion);

  return {
    id,
    key: sectionKey,
    title: real.title,
    fullDurationSec: real.fullDurationSec,
    durationSec,
    fullQuestionCount: real.fullQuestionCount,
    questionCount,
    contentModuleId,
  };
}

// ---------------------------------------------------------------------------
// exam-1: the starter exam. ~10-15 questions per section, real AAMC order,
// structure, and break screens; per-section timers scaled to real pace.
// ---------------------------------------------------------------------------

const EXAM_1_USES_FULL_AAMC_DURATIONS = false;

const EXAM_1_QUESTION_COUNTS: Record<SectionKey, number> = {
  "chem-phys": 12,
  cars: 10,
  "bio-biochem": 12,
  "psych-soc": 12,
};

const exam1Sections: ExamSectionConfig[] = REAL_AAMC_SECTION_ORDER.map(
  (key) =>
    buildSectionConfig(
      key,
      `exam-1-${key}`,
      EXAM_1_QUESTION_COUNTS[key],
      key,
      EXAM_1_USES_FULL_AAMC_DURATIONS,
    ),
);

export const exam1Meta: ExamMeta = examMetaSchema.parse({
  id: "exam-1",
  title: "Full-Length Practice Exam 1",
  description:
    "A full 1:1 replica of the real MCAT day: same section order, break screens, and navigation rules. Per-section timers are scaled to the real AAMC pace for this exam's shorter starter question set.",
  usesFullAAMCDurations: EXAM_1_USES_FULL_AAMC_DURATIONS,
  tutorial: {
    enabled: true,
    durationSec: REAL_AAMC_TUTORIAL_DURATION_SEC,
  },
  sections: exam1Sections,
  breaks: [
    {
      afterSectionId: "exam-1-chem-phys",
      type: "short",
      durationSec: REAL_AAMC_SHORT_BREAK_SEC,
    },
    {
      afterSectionId: "exam-1-cars",
      type: "lunch",
      durationSec: REAL_AAMC_LUNCH_BREAK_SEC,
    },
    {
      afterSectionId: "exam-1-bio-biochem",
      type: "short",
      durationSec: REAL_AAMC_SHORT_BREAK_SEC,
    },
  ],
});

export const EXAMS: Record<string, ExamMeta> = {
  "exam-1": exam1Meta,
};

export function getExamMeta(examId: string): ExamMeta | undefined {
  return EXAMS[examId];
}
