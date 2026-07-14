"use client";

import { useEffect, useState } from "react";
import { clsx } from "clsx";
import { Clock } from "lucide-react";
import {
  computeElapsedMs,
  computeRemainingMs,
  formatDuration,
  getTimerUrgency,
} from "@/lib/timer";

export interface TimerProps {
  startedAt: string;
  timeLimitSec: number;
  timed: boolean;
  pausedAccumMs?: number;
  onExpire?: () => void;
  className?: string;
}

const urgencyClasses = {
  normal: "text-foreground border-border",
  warning: "text-accent border-accent/30 bg-accent-muted",
  critical: "text-danger border-danger/30 bg-danger-muted animate-pulse",
};

export function Timer({
  startedAt,
  timeLimitSec,
  timed,
  pausedAccumMs,
  onExpire,
  className,
}: TimerProps) {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    const onVisible = () => setNow(Date.now());
    document.addEventListener("visibilitychange", onVisible);
    window.addEventListener("focus", onVisible);
    return () => {
      clearInterval(id);
      document.removeEventListener("visibilitychange", onVisible);
      window.removeEventListener("focus", onVisible);
    };
  }, []);

  const remainingMs = computeRemainingMs({
    startedAt,
    timeLimitSec,
    pausedAccumMs,
    now,
  });
  const elapsedMs = computeElapsedMs({ startedAt, pausedAccumMs, now });
  const expired = timed && remainingMs <= 0;

  useEffect(() => {
    if (expired) onExpire?.();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [expired]);

  const urgency = timed ? getTimerUrgency(remainingMs) : "normal";

  return (
    <div
      role="timer"
      aria-live="off"
      className={clsx(
        "inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 font-mono text-sm tracking-wide tabular-nums transition-colors duration-300",
        urgencyClasses[urgency],
        className,
      )}
    >
      <Clock size={16} strokeWidth={1.5} />
      <span>
        {timed
          ? formatDuration(Math.max(0, remainingMs))
          : formatDuration(elapsedMs)}
      </span>
      {!timed && (
        <span className="text-xs text-muted-foreground">elapsed</span>
      )}
    </div>
  );
}
