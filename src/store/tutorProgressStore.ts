"use client";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { idbStorage } from "@/lib/storage";

interface TutorQuestionProgress {
  choiceId: string | null;
  correct: boolean;
}

interface TutorProgressState {
  /** contentModuleId -> questionId -> progress */
  progress: Record<string, Record<string, TutorQuestionProgress>>;
  recordAnswer: (
    contentModuleId: string,
    questionId: string,
    choiceId: string | null,
    correct: boolean,
  ) => void;
}

export const useTutorProgressStore = create<TutorProgressState>()(
  persist(
    (set) => ({
      progress: {},
      recordAnswer: (contentModuleId, questionId, choiceId, correct) =>
        set((state) => ({
          progress: {
            ...state.progress,
            [contentModuleId]: {
              ...state.progress[contentModuleId],
              [questionId]: { choiceId, correct },
            },
          },
        })),
    }),
    {
      name: "mcat-prep.tutor-progress.v1",
      version: 1,
      storage: createJSONStorage(() => idbStorage),
    },
  ),
);
