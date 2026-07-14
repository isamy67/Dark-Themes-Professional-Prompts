"use client";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { idbStorage } from "@/lib/storage";
import { initialCardState, reviewByRating, type ReviewRating } from "@/lib/srs";
import type { CardSrsState } from "@/lib/types";

interface SrsState {
  /** deckId -> cardId -> SM-2 scheduling state */
  progress: Record<string, Record<string, CardSrsState>>;
  hasHydrated: boolean;
  setHasHydrated: (hydrated: boolean) => void;
  /** Apply one self-graded review to a card and reschedule it. */
  recordReview: (deckId: string, cardId: string, rating: ReviewRating) => void;
}

export const useSrsStore = create<SrsState>()(
  persist(
    (set) => ({
      progress: {},
      hasHydrated: false,
      setHasHydrated: (hydrated) => set({ hasHydrated: hydrated }),
      recordReview: (deckId, cardId, rating) =>
        set((state) => {
          const now = Date.now();
          const current =
            state.progress[deckId]?.[cardId] ?? initialCardState(now);
          const next = reviewByRating(current, rating, now);
          return {
            progress: {
              ...state.progress,
              [deckId]: {
                ...state.progress[deckId],
                [cardId]: next,
              },
            },
          };
        }),
    }),
    {
      name: "mcat-prep.srs.v1",
      version: 1,
      storage: createJSONStorage(() => idbStorage),
      partialize: (state) => ({ progress: state.progress }),
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    },
  ),
);
