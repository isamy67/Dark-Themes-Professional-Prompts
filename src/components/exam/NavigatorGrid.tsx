"use client";

import { clsx } from "clsx";
import { Check, Flag } from "lucide-react";
import type { Question } from "@/lib/types";

export interface NavigatorGridProps {
  questions: Question[];
  currentQuestionId: string | null;
  answeredIds: Set<string>;
  flaggedIds: Set<string>;
  onSelect: (questionId: string) => void;
}

export function NavigatorGrid({
  questions,
  currentQuestionId,
  answeredIds,
  flaggedIds,
  onSelect,
}: NavigatorGridProps) {
  return (
    <div
      role="group"
      aria-label="Question navigator"
      className="grid grid-cols-6 gap-2 sm:grid-cols-8 md:grid-cols-10"
    >
      {questions.map((q, i) => {
        const isCurrent = q.id === currentQuestionId;
        const isAnswered = answeredIds.has(q.id);
        const isFlagged = flaggedIds.has(q.id);

        return (
          <button
            key={q.id}
            type="button"
            onClick={() => onSelect(q.id)}
            aria-current={isCurrent || undefined}
            aria-label={`Question ${i + 1}${isAnswered ? ", answered" : ", unanswered"}${isFlagged ? ", flagged" : ""}`}
            className={clsx(
              "relative flex h-10 w-10 items-center justify-center rounded-md border font-mono text-sm tabular-nums transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
              isCurrent
                ? "border-accent bg-accent text-accent-foreground"
                : isAnswered
                  ? "border-success/40 bg-success-muted text-foreground"
                  : "border-border text-muted-foreground hover:border-border-hover",
            )}
          >
            {i + 1}
            {isFlagged && (
              <Flag
                size={11}
                className="absolute -right-1.5 -top-1.5 text-accent drop-shadow"
                fill="currentColor"
                strokeWidth={0}
              />
            )}
            {isAnswered && !isCurrent && (
              <Check
                size={10}
                strokeWidth={3}
                className="absolute -bottom-1.5 -right-1.5 rounded-full bg-success text-background"
              />
            )}
          </button>
        );
      })}
    </div>
  );
}
