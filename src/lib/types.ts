import { z } from "zod";

/**
 * Single source of truth for both content and runtime-state shapes.
 * Zod schemas validate data at load time (content authored in TS/JSON
 * files, and attempt state rehydrated from localStorage); TS types are
 * inferred from the schemas so the two can never drift apart.
 */

export const SECTION_KEYS = [
  "chem-phys",
  "cars",
  "bio-biochem",
  "psych-soc",
] as const;
export const sectionKeySchema = z.enum(SECTION_KEYS);
export type SectionKey = z.infer<typeof sectionKeySchema>;

// ---------------------------------------------------------------------------
// Exam structure / configuration
// ---------------------------------------------------------------------------

export const examSectionConfigSchema = z.object({
  id: z.string(),
  key: sectionKeySchema,
  title: z.string(),
  /** Real AAMC value in seconds (e.g. 95 * 60) — shown as a reference in the tutorial/UI copy. */
  fullDurationSec: z.number().positive(),
  /** Duration actually used by this exam's timer (scaled to real pace for a shorter starter exam). */
  durationSec: z.number().positive(),
  /** Real AAMC question count for this section (59 / 53 / 59 / 59). */
  fullQuestionCount: z.number().int().positive(),
  /** Actual question count in this exam's content. */
  questionCount: z.number().int().positive(),
  /** Key into the exam's content module map (see exams/<id>/sections). */
  contentModuleId: z.string(),
});
export type ExamSectionConfig = z.infer<typeof examSectionConfigSchema>;

export const examBreakConfigSchema = z.object({
  afterSectionId: z.string(),
  type: z.enum(["short", "lunch"]),
  durationSec: z.number().positive(),
});
export type ExamBreakConfig = z.infer<typeof examBreakConfigSchema>;

export const examMetaSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  /**
   * When true, section timers use fullDurationSec instead of durationSec —
   * the switch a later, fully-populated exam flips once it no longer needs
   * a pace-scaled starter clock.
   */
  usesFullAAMCDurations: z.boolean(),
  tutorial: z.object({
    enabled: z.boolean(),
    durationSec: z.number().nonnegative(),
  }),
  sections: z.array(examSectionConfigSchema).min(1),
  breaks: z.array(examBreakConfigSchema),
});
export type ExamMeta = z.infer<typeof examMetaSchema>;

// ---------------------------------------------------------------------------
// Content: passages, questions, choices
// ---------------------------------------------------------------------------

export const passageFigureSchema = z.object({
  id: z.string(),
  caption: z.string(),
  altText: z.string(),
  imageUrl: z.string().optional(),
});
export type PassageFigure = z.infer<typeof passageFigureSchema>;

export const passageSchema = z.object({
  id: z.string(),
  sectionId: z.string(),
  order: z.number().int().nonnegative(),
  kind: z.enum(["passage", "discrete-set"]),
  title: z.string().optional(),
  /** Markdown body. For a discrete-set, this may be empty/short intro text. */
  bodyMarkdown: z.string(),
  figures: z.array(passageFigureSchema).optional(),
  questionIds: z.array(z.string()).min(1),
});
export type Passage = z.infer<typeof passageSchema>;

export const answerChoiceSchema = z.object({
  id: z.string(),
  text: z.string(),
  /** Why this choice is correct or incorrect — doubles as the elimination note in Tutor Mode. */
  explanation: z.string(),
});
export type AnswerChoice = z.infer<typeof answerChoiceSchema>;

export const questionCategorySchema = z.object({
  foundationalConcept: z.string().optional(),
  contentCategory: z.string().optional(),
  skill: z.string().optional(),
});
export type QuestionCategory = z.infer<typeof questionCategorySchema>;

export const questionWalkthroughSchema = z.object({
  /** How to read/attack this passage or stem before even looking at choices. */
  approachNotes: z.string(),
  /** Ordered reasoning steps from the stem to the correct choice. */
  steps: z.array(z.string()).min(1),
});
export type QuestionWalkthrough = z.infer<typeof questionWalkthroughSchema>;

export const questionSchema = z
  .object({
    id: z.string(),
    passageId: z.string().nullable(),
    sectionId: z.string(),
    order: z.number().int().nonnegative(),
    /** Markdown question stem. */
    stem: z.string(),
    choices: z.array(answerChoiceSchema).min(2).max(5),
    correctChoiceId: z.string(),
    explanationOverall: z.string(),
    walkthrough: questionWalkthroughSchema,
    category: questionCategorySchema,
    difficulty: z.enum(["easy", "medium", "hard"]).optional(),
  })
  .superRefine((q, ctx) => {
    if (!q.choices.some((c) => c.id === q.correctChoiceId)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: `correctChoiceId "${q.correctChoiceId}" does not match any choice id on question "${q.id}"`,
        path: ["correctChoiceId"],
      });
    }
    const choiceIds = new Set(q.choices.map((c) => c.id));
    if (choiceIds.size !== q.choices.length) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: `question "${q.id}" has duplicate choice ids`,
        path: ["choices"],
      });
    }
  });
export type Question = z.infer<typeof questionSchema>;

export const sectionContentSchema = z
  .object({
    sectionId: z.string(),
    passages: z.array(passageSchema),
    questions: z.array(questionSchema),
  })
  .superRefine((content, ctx) => {
    const questionIds = new Set(content.questions.map((q) => q.id));
    for (const passage of content.passages) {
      for (const qid of passage.questionIds) {
        if (!questionIds.has(qid)) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: `passage "${passage.id}" references unknown question id "${qid}"`,
            path: ["passages"],
          });
        }
      }
    }
    for (const q of content.questions) {
      if (q.passageId && !content.passages.some((p) => p.id === q.passageId)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: `question "${q.id}" references unknown passage id "${q.passageId}"`,
          path: ["questions"],
        });
      }
    }
  });
export type SectionContent = z.infer<typeof sectionContentSchema>;

// ---------------------------------------------------------------------------
// Content: lessons / foundational concepts
// ---------------------------------------------------------------------------

export const foundationalConceptSchema = z.object({
  id: z.string(),
  sectionKey: sectionKeySchema,
  /** FC number per AAMC (1-8). CARS skill areas use 0 since they aren't numbered FCs. */
  number: z.number().int().nonnegative(),
  title: z.string(),
  description: z.string(),
  topicIds: z.array(z.string()),
});
export type FoundationalConcept = z.infer<typeof foundationalConceptSchema>;

export const clinicalCorrelationSchema = z.object({
  title: z.string(),
  vignette: z.string(),
  tieIn: z.string(),
});
export type ClinicalCorrelation = z.infer<typeof clinicalCorrelationSchema>;

export const lessonTopicSchema = z.object({
  id: z.string(),
  sectionKey: sectionKeySchema,
  foundationalConceptId: z.string(),
  slug: z.string(),
  title: z.string(),
  summary: z.string(),
  highYield: z.array(z.string()).optional(),
  /** Path to the .mdx source under src/content/lessons, resolved by lib/content.ts. */
  mdxPath: z.string(),
  clinicalCorrelation: clinicalCorrelationSchema,
  /** True if this page doesn't yet cover every AAMC sub-topic — shown visibly, not hidden. */
  expandable: z.boolean().optional(),
});
export type LessonTopic = z.infer<typeof lessonTopicSchema>;

// ---------------------------------------------------------------------------
// Runtime attempt state (persisted via Zustand, not content)
// ---------------------------------------------------------------------------

export const highlightRangeSchema = z.object({
  start: z.number().int().nonnegative(),
  end: z.number().int().nonnegative(),
  kind: z.enum(["highlight", "strikethrough"]),
});
export type HighlightRange = z.infer<typeof highlightRangeSchema>;

export const answerStateSchema = z.object({
  choiceId: z.string().nullable(),
  flagged: z.boolean(),
  visited: z.boolean(),
});
export type AnswerState = z.infer<typeof answerStateSchema>;

export const sectionAttemptStatusSchema = z.enum([
  "locked",
  "active",
  "submitted",
]);
export type SectionAttemptStatus = z.infer<typeof sectionAttemptStatusSchema>;

export const sectionAttemptStateSchema = z.object({
  sectionId: z.string(),
  status: sectionAttemptStatusSchema,
  /** Wall-clock ISO timestamp anchor — the timer's source of truth, never derived remaining-time. */
  startedAt: z.string().optional(),
  /**
   * False for untimed standalone practice. Kept as an explicit flag (rather
   * than an Infinity sentinel in timeLimitSec) because JSON.stringify turns
   * Infinity into null, which would break localStorage persistence.
   */
  timed: z.boolean(),
  timeLimitSec: z.number().positive(),
  pausedAccumMs: z.number().nonnegative().optional(),
  answers: z.record(z.string(), answerStateSchema),
  highlights: z.record(z.string(), z.array(highlightRangeSchema)),
  strikethroughs: z.record(z.string(), z.array(z.string())),
  submittedAt: z.string().optional(),
});
export type SectionAttemptState = z.infer<typeof sectionAttemptStateSchema>;

export const examAttemptStatusSchema = z.enum([
  "not-started",
  "tutorial",
  "section-intro",
  "in-section",
  "on-break",
  "reviewing-section",
  "void-decision",
  "completed",
  "voided",
]);
export type ExamAttemptStatus = z.infer<typeof examAttemptStatusSchema>;

export const examAttemptModeSchema = z.enum(["full-sim", "section-practice"]);
export type ExamAttemptMode = z.infer<typeof examAttemptModeSchema>;

export const examAttemptSchema = z.object({
  id: z.string(),
  examId: z.string(),
  mode: examAttemptModeSchema,
  status: examAttemptStatusSchema,
  currentSectionIndex: z.number().int().nonnegative(),
  sections: z.array(sectionAttemptStateSchema),
  startedAt: z.string(),
  completedAt: z.string().optional(),
});
export type ExamAttempt = z.infer<typeof examAttemptSchema>;

// ---------------------------------------------------------------------------
// Results history (summary rows shown on the dashboard)
// ---------------------------------------------------------------------------

export const sectionScoreSchema = z.object({
  sectionId: z.string(),
  sectionKey: sectionKeySchema,
  correctCount: z.number().int().nonnegative(),
  totalCount: z.number().int().positive(),
  scaledScore: z.number().int(),
});
export type SectionScore = z.infer<typeof sectionScoreSchema>;

export const examResultSchema = z.object({
  attemptId: z.string(),
  examId: z.string(),
  mode: examAttemptModeSchema,
  completedAt: z.string(),
  voided: z.boolean(),
  sectionScores: z.array(sectionScoreSchema),
  totalScaledScore: z.number().int().optional(),
});
export type ExamResult = z.infer<typeof examResultSchema>;
