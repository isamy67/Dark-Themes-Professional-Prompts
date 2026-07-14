"use client";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import {
  RESULTS_STORAGE_KEY,
  RESULTS_STORAGE_VERSION,
  safeLocalStorage,
} from "@/lib/storage";
import type { ExamResult } from "@/lib/types";

interface ResultsState {
  results: ExamResult[];
  addResult: (result: ExamResult) => void;
}

export const useResultsStore = create<ResultsState>()(
  persist(
    (set) => ({
      results: [],
      addResult: (result) =>
        set((state) => ({ results: [result, ...state.results] })),
    }),
    {
      name: RESULTS_STORAGE_KEY,
      version: RESULTS_STORAGE_VERSION,
      storage: createJSONStorage(() => safeLocalStorage),
    },
  ),
);
