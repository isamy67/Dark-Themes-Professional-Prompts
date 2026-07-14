/**
 * Pure timer math, deliberately free of React/Zustand so it's trivial to
 * unit test and impossible to accidentally make stateful.
 *
 * The core invariant: remaining time is always DERIVED from a wall-clock
 * startedAt anchor, never stored directly. A setInterval tick only forces a
 * re-render elsewhere — it is never the source of truth — so a page reload,
 * a throttled background tab, or a slow render can't cause the clock to
 * drift or "gain back" time.
 */

export interface TimerInput {
  /** ISO timestamp when the section/break was entered. */
  startedAt: string;
  timeLimitSec: number;
  /** Time already excluded from elapsed (reserved for future pause support). */
  pausedAccumMs?: number;
  /** Defaults to Date.now(); override only in tests. */
  now?: number;
}

/** Milliseconds remaining, possibly negative once time has run out. */
export function computeRemainingMs(input: TimerInput): number {
  const now = input.now ?? Date.now();
  const startedAtMs = new Date(input.startedAt).getTime();
  const elapsedMs = now - startedAtMs - (input.pausedAccumMs ?? 0);
  return input.timeLimitSec * 1000 - elapsedMs;
}

/** Milliseconds elapsed since startedAt — used for untimed count-up displays. */
export function computeElapsedMs(input: Omit<TimerInput, "timeLimitSec">): number {
  const now = input.now ?? Date.now();
  const startedAtMs = new Date(input.startedAt).getTime();
  return now - startedAtMs - (input.pausedAccumMs ?? 0);
}

export function isExpired(input: TimerInput): boolean {
  return computeRemainingMs(input) <= 0;
}

/**
 * Formats a millisecond duration as "H:MM:SS" (hours omitted under an hour),
 * clamped to zero. Negative/overflowed durations never render as negative.
 */
export function formatDuration(ms: number): string {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const mm = minutes.toString().padStart(2, "0");
  const ss = seconds.toString().padStart(2, "0");

  return hours > 0 ? `${hours}:${mm}:${ss}` : `${mm}:${ss}`;
}

export type TimerUrgency = "normal" | "warning" | "critical";

/** Warning under 10 minutes remaining, critical under 5 — matches AAMC's own on-screen warnings. */
export function getTimerUrgency(remainingMs: number): TimerUrgency {
  const remainingMin = remainingMs / 60000;
  if (remainingMin <= 5) return "critical";
  if (remainingMin <= 10) return "warning";
  return "normal";
}
