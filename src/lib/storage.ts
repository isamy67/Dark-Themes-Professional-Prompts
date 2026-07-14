import type { StateStorage } from "zustand/middleware";

/**
 * SSR-safe localStorage adapter for Zustand's persist middleware. Next.js
 * renders route components on the server first, where `localStorage` does
 * not exist — reads/writes there are silently no-ops, and the client
 * rehydrates from real localStorage after mount (standard zustand+Next.js
 * pattern, avoids hydration mismatches since both the server render and the
 * client's first render start from the same default state).
 */
export const safeLocalStorage: StateStorage = {
  getItem: (name) => {
    if (typeof window === "undefined") return null;
    return window.localStorage.getItem(name);
  },
  setItem: (name, value) => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(name, value);
  },
  removeItem: (name) => {
    if (typeof window === "undefined") return;
    window.localStorage.removeItem(name);
  },
};

// Persisted state now lives in IndexedDB (async). Re-exported here so stores
// keep importing their storage adapter from this module; the localStorage
// adapter above stays available for the one-time migration of legacy data.
export { idbStorage } from "./idbStorage";

/** Bump whenever a persisted store's shape changes incompatibly. */
export const EXAM_SESSION_STORAGE_VERSION = 1;
export const RESULTS_STORAGE_VERSION = 1;

export const EXAM_SESSION_STORAGE_KEY = "mcat-prep.exam-session.v1";
export const RESULTS_STORAGE_KEY = "mcat-prep.results.v1";
