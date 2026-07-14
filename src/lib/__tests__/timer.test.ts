import { describe, expect, it } from "vitest";
import {
  computeElapsedMs,
  computeRemainingMs,
  formatDuration,
  getTimerUrgency,
  isExpired,
} from "@/lib/timer";

describe("computeRemainingMs", () => {
  it("returns the full duration at the instant a section starts", () => {
    const startedAt = "2026-01-01T00:00:00.000Z";
    const now = new Date(startedAt).getTime();
    const remaining = computeRemainingMs({ startedAt, timeLimitSec: 600, now });
    expect(remaining).toBe(600_000);
  });

  it("derives remaining time purely from the wall-clock anchor, unaffected by intermediate ticks", () => {
    const startedAt = "2026-01-01T00:00:00.000Z";
    const startMs = new Date(startedAt).getTime();
    // Simulate a page refresh: only startedAt + timeLimitSec persisted, "now" jumps forward directly.
    const nowAfterRefresh = startMs + 250_000;
    const remaining = computeRemainingMs({
      startedAt,
      timeLimitSec: 600,
      now: nowAfterRefresh,
    });
    expect(remaining).toBe(350_000);
  });

  it("goes negative once time has run out rather than clamping", () => {
    const startedAt = "2026-01-01T00:00:00.000Z";
    const startMs = new Date(startedAt).getTime();
    const remaining = computeRemainingMs({
      startedAt,
      timeLimitSec: 60,
      now: startMs + 90_000,
    });
    expect(remaining).toBe(-30_000);
  });

  it("subtracts pausedAccumMs from elapsed time", () => {
    const startedAt = "2026-01-01T00:00:00.000Z";
    const startMs = new Date(startedAt).getTime();
    const remaining = computeRemainingMs({
      startedAt,
      timeLimitSec: 600,
      pausedAccumMs: 30_000,
      now: startMs + 100_000,
    });
    // 100s elapsed wall-clock, minus 30s excluded = 70s counted against the limit.
    expect(remaining).toBe(600_000 - 70_000);
  });
});

describe("isExpired", () => {
  it("is false while time remains and true once it runs out", () => {
    const startedAt = "2026-01-01T00:00:00.000Z";
    const startMs = new Date(startedAt).getTime();
    expect(
      isExpired({ startedAt, timeLimitSec: 60, now: startMs + 30_000 }),
    ).toBe(false);
    expect(
      isExpired({ startedAt, timeLimitSec: 60, now: startMs + 60_000 }),
    ).toBe(true);
    expect(
      isExpired({ startedAt, timeLimitSec: 60, now: startMs + 61_000 }),
    ).toBe(true);
  });
});

describe("computeElapsedMs", () => {
  it("counts up from startedAt for untimed practice", () => {
    const startedAt = "2026-01-01T00:00:00.000Z";
    const startMs = new Date(startedAt).getTime();
    expect(computeElapsedMs({ startedAt, now: startMs + 45_000 })).toBe(
      45_000,
    );
  });
});

describe("formatDuration", () => {
  it("formats under an hour as MM:SS", () => {
    expect(formatDuration(0)).toBe("00:00");
    expect(formatDuration(5_000)).toBe("00:05");
    expect(formatDuration(65_000)).toBe("01:05");
    expect(formatDuration(59 * 60_000 + 59_000)).toBe("59:59");
  });

  it("formats an hour or more as H:MM:SS", () => {
    expect(formatDuration(60 * 60_000)).toBe("1:00:00");
    expect(formatDuration(95 * 60_000 + 3_000)).toBe("1:35:03");
  });

  it("clamps negative durations to zero instead of rendering negative", () => {
    expect(formatDuration(-5_000)).toBe("00:00");
  });
});

describe("getTimerUrgency", () => {
  it("is normal above 10 minutes remaining", () => {
    expect(getTimerUrgency(11 * 60_000)).toBe("normal");
  });
  it("is warning at or under 10 minutes but above 5", () => {
    expect(getTimerUrgency(10 * 60_000)).toBe("warning");
    expect(getTimerUrgency(6 * 60_000)).toBe("warning");
  });
  it("is critical at or under 5 minutes", () => {
    expect(getTimerUrgency(5 * 60_000)).toBe("critical");
    expect(getTimerUrgency(0)).toBe("critical");
  });
});
