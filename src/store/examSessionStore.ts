"use client";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { getExam } from "@/lib/content";
import {
  EXAM_SESSION_STORAGE_KEY,
  EXAM_SESSION_STORAGE_VERSION,
  safeLocalStorage,
} from "@/lib/storage";
import type {
  ExamAttempt,
  ExamAttemptMode,
  HighlightRange,
  SectionAttemptState,
} from "@/lib/types";

function nowIso(): string {
  return new Date().toISOString();
}

function newAttemptId(): string {
  return typeof crypto !== "undefined" && "randomUUID" in crypto
    ? crypto.randomUUID()
    : `attempt-${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

function emptySectionAttempt(
  sectionId: string,
  timeLimitSec: number,
  timed: boolean,
): SectionAttemptState {
  return {
    sectionId,
    status: "locked",
    timed,
    timeLimitSec,
    answers: {},
    highlights: {},
    strikethroughs: {},
  };
}

interface ExamSessionState {
  attempt: ExamAttempt | null;
  hasHydrated: boolean;
  setHasHydrated: (hydrated: boolean) => void;

  startFullExam: (examId: string) => void;
  startSectionPractice: (
    examId: string,
    sectionId: string,
    timed: boolean,
  ) => void;

  skipTutorial: () => void;
  completeTutorial: () => void;

  beginSection: (sectionIndex: number) => void;
  setAnswer: (
    sectionIndex: number,
    questionId: string,
    choiceId: string | null,
  ) => void;
  markVisited: (sectionIndex: number, questionId: string) => void;
  toggleFlag: (sectionIndex: number, questionId: string) => void;
  addHighlight: (
    sectionIndex: number,
    targetId: string,
    range: HighlightRange,
  ) => void;
  removeHighlightAt: (
    sectionIndex: number,
    targetId: string,
    rangeIndex: number,
  ) => void;
  toggleStrikethrough: (
    sectionIndex: number,
    questionId: string,
    choiceId: string,
  ) => void;

  goToReview: (sectionIndex: number) => void;
  submitSection: (sectionIndex: number) => void;
  endBreak: () => void;
  proceedFromVoidDecision: (voided: boolean) => void;

  abandonAttempt: () => void;
}

function buildFreshAttempt(
  examId: string,
  mode: ExamAttemptMode,
  sectionIds: string[] | null,
  timed: boolean,
): ExamAttempt {
  const exam = getExam(examId);
  const sourceSections = sectionIds
    ? exam.sections.filter((s) => sectionIds.includes(s.id))
    : exam.sections;

  const sections = sourceSections.map((s) =>
    emptySectionAttempt(s.id, s.durationSec, timed),
  );

  const initialStatus =
    mode === "full-sim" && exam.tutorial.enabled ? "tutorial" : "section-intro";

  return {
    id: newAttemptId(),
    examId,
    mode,
    status: initialStatus,
    currentSectionIndex: 0,
    sections,
    startedAt: nowIso(),
  };
}

export const useExamSessionStore = create<ExamSessionState>()(
  persist(
    (set, get) => ({
      attempt: null,
      hasHydrated: false,
      setHasHydrated: (hydrated) => set({ hasHydrated: hydrated }),

      startFullExam: (examId) => {
        set({ attempt: buildFreshAttempt(examId, "full-sim", null, true) });
      },

      startSectionPractice: (examId, sectionId, timed) => {
        set({
          attempt: buildFreshAttempt(
            examId,
            "section-practice",
            [sectionId],
            timed,
          ),
        });
      },

      skipTutorial: () => {
        const attempt = get().attempt;
        if (!attempt || attempt.status !== "tutorial") return;
        set({ attempt: { ...attempt, status: "section-intro" } });
      },
      completeTutorial: () => {
        const attempt = get().attempt;
        if (!attempt || attempt.status !== "tutorial") return;
        set({ attempt: { ...attempt, status: "section-intro" } });
      },

      beginSection: (sectionIndex) => {
        const attempt = get().attempt;
        if (!attempt) return;
        const sections = attempt.sections.map((s, i) =>
          i === sectionIndex
            ? {
                ...s,
                status: s.status === "locked" ? ("active" as const) : s.status,
                startedAt: s.startedAt ?? nowIso(),
              }
            : s,
        );
        set({
          attempt: {
            ...attempt,
            sections,
            status: "in-section",
            currentSectionIndex: sectionIndex,
          },
        });
      },

      setAnswer: (sectionIndex, questionId, choiceId) => {
        const attempt = get().attempt;
        if (!attempt) return;
        const sections = attempt.sections.map((s, i) => {
          if (i !== sectionIndex) return s;
          const prev = s.answers[questionId] ?? {
            choiceId: null,
            flagged: false,
            visited: false,
          };
          return {
            ...s,
            answers: {
              ...s.answers,
              [questionId]: { ...prev, choiceId, visited: true },
            },
          };
        });
        set({ attempt: { ...attempt, sections } });
      },

      markVisited: (sectionIndex, questionId) => {
        const attempt = get().attempt;
        if (!attempt) return;
        const sections = attempt.sections.map((s, i) => {
          if (i !== sectionIndex) return s;
          const prev = s.answers[questionId];
          if (prev?.visited) return s;
          return {
            ...s,
            answers: {
              ...s.answers,
              [questionId]: prev
                ? { ...prev, visited: true }
                : { choiceId: null, flagged: false, visited: true },
            },
          };
        });
        set({ attempt: { ...attempt, sections } });
      },

      toggleFlag: (sectionIndex, questionId) => {
        const attempt = get().attempt;
        if (!attempt) return;
        const sections = attempt.sections.map((s, i) => {
          if (i !== sectionIndex) return s;
          const prev = s.answers[questionId] ?? {
            choiceId: null,
            flagged: false,
            visited: false,
          };
          return {
            ...s,
            answers: {
              ...s.answers,
              [questionId]: { ...prev, flagged: !prev.flagged },
            },
          };
        });
        set({ attempt: { ...attempt, sections } });
      },

      addHighlight: (sectionIndex, targetId, range) => {
        const attempt = get().attempt;
        if (!attempt) return;
        const sections = attempt.sections.map((s, i) => {
          if (i !== sectionIndex) return s;
          const existing = s.highlights[targetId] ?? [];
          return {
            ...s,
            highlights: { ...s.highlights, [targetId]: [...existing, range] },
          };
        });
        set({ attempt: { ...attempt, sections } });
      },

      removeHighlightAt: (sectionIndex, targetId, rangeIndex) => {
        const attempt = get().attempt;
        if (!attempt) return;
        const sections = attempt.sections.map((s, i) => {
          if (i !== sectionIndex) return s;
          const existing = s.highlights[targetId] ?? [];
          return {
            ...s,
            highlights: {
              ...s.highlights,
              [targetId]: existing.filter((_, idx) => idx !== rangeIndex),
            },
          };
        });
        set({ attempt: { ...attempt, sections } });
      },

      toggleStrikethrough: (sectionIndex, questionId, choiceId) => {
        const attempt = get().attempt;
        if (!attempt) return;
        const sections = attempt.sections.map((s, i) => {
          if (i !== sectionIndex) return s;
          const existing = s.strikethroughs[questionId] ?? [];
          const next = existing.includes(choiceId)
            ? existing.filter((id) => id !== choiceId)
            : [...existing, choiceId];
          return {
            ...s,
            strikethroughs: { ...s.strikethroughs, [questionId]: next },
          };
        });
        set({ attempt: { ...attempt, sections } });
      },

      goToReview: (sectionIndex) => {
        const attempt = get().attempt;
        if (!attempt) return;
        set({
          attempt: {
            ...attempt,
            status: "reviewing-section",
            currentSectionIndex: sectionIndex,
          },
        });
      },

      submitSection: (sectionIndex) => {
        const attempt = get().attempt;
        if (!attempt) return;
        const exam = getExam(attempt.examId);
        const sections = attempt.sections.map((s, i) =>
          i === sectionIndex
            ? { ...s, status: "submitted" as const, submittedAt: nowIso() }
            : s,
        );

        const isLastSection = sectionIndex === attempt.sections.length - 1;

        if (isLastSection) {
          set({
            attempt: {
              ...attempt,
              sections,
              status:
                attempt.mode === "full-sim" ? "void-decision" : "completed",
              completedAt:
                attempt.mode === "full-sim" ? undefined : nowIso(),
            },
          });
          return;
        }

        const submittedExamSection = exam.sections.find(
          (s) => s.id === sections[sectionIndex].sectionId,
        );
        const hasBreakAfter =
          submittedExamSection &&
          exam.breaks.some((b) => b.afterSectionId === submittedExamSection.id);

        set({
          attempt: {
            ...attempt,
            sections,
            status: hasBreakAfter ? "on-break" : "section-intro",
            currentSectionIndex: sectionIndex + 1,
          },
        });
      },

      endBreak: () => {
        const attempt = get().attempt;
        if (!attempt || attempt.status !== "on-break") return;
        set({ attempt: { ...attempt, status: "section-intro" } });
      },

      proceedFromVoidDecision: (voided) => {
        const attempt = get().attempt;
        if (!attempt || attempt.status !== "void-decision") return;
        set({
          attempt: {
            ...attempt,
            status: voided ? "voided" : "completed",
            completedAt: nowIso(),
          },
        });
      },

      abandonAttempt: () => set({ attempt: null }),
    }),
    {
      name: EXAM_SESSION_STORAGE_KEY,
      version: EXAM_SESSION_STORAGE_VERSION,
      storage: createJSONStorage(() => safeLocalStorage),
      partialize: (state) => ({ attempt: state.attempt }),
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    },
  ),
);
