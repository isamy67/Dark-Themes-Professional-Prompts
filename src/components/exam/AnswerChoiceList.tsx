"use client";

import { clsx } from "clsx";
import { Strikethrough } from "lucide-react";
import type { AnswerChoice } from "@/lib/types";

export interface AnswerChoiceListProps {
  choices: AnswerChoice[];
  selectedChoiceId: string | null;
  struckChoiceIds: string[];
  onSelect: (choiceId: string) => void;
  onToggleStrike: (choiceId: string) => void;
  /** When set (review/tutor mode), reveals correct/incorrect styling instead of plain selection. */
  revealCorrectChoiceId?: string;
  disabled?: boolean;
}

export function AnswerChoiceList({
  choices,
  selectedChoiceId,
  struckChoiceIds,
  onSelect,
  onToggleStrike,
  revealCorrectChoiceId,
  disabled,
}: AnswerChoiceListProps) {
  return (
    <div role="radiogroup" aria-label="Answer choices" className="flex flex-col gap-2">
      {choices.map((choice) => {
        const struck = struckChoiceIds.includes(choice.id);
        const selected = selectedChoiceId === choice.id;
        const isCorrect = revealCorrectChoiceId === choice.id;
        const isWrongSelected = Boolean(revealCorrectChoiceId) && selected && !isCorrect;

        return (
          <div
            key={choice.id}
            className={clsx(
              "flex items-center gap-1 rounded-lg border p-1 transition-colors duration-200",
              selected && !revealCorrectChoiceId && "border-accent/40 bg-accent-muted",
              !selected && !revealCorrectChoiceId && "border-border hover:border-border-hover",
              isCorrect && "border-success/50 bg-success-muted",
              isWrongSelected && "border-danger/50 bg-danger-muted",
              !isCorrect && !isWrongSelected && revealCorrectChoiceId && "border-border opacity-70",
            )}
          >
            <button
              type="button"
              role="radio"
              aria-checked={selected}
              disabled={disabled}
              onClick={() => onSelect(choice.id)}
              className="flex flex-1 items-start gap-3 rounded-md p-2 text-left text-sm disabled:cursor-default"
            >
              <span
                className={clsx(
                  "mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border font-mono text-xs tracking-wide",
                  selected
                    ? "border-accent bg-accent text-accent-foreground"
                    : "border-border text-muted-foreground",
                  isCorrect && "border-success bg-success text-background",
                )}
              >
                {choice.id}
              </span>
              <span
                className={clsx(
                  "leading-relaxed text-foreground",
                  struck && "text-muted-foreground line-through decoration-2",
                )}
              >
                {choice.text}
              </span>
            </button>
            {!revealCorrectChoiceId && (
              <button
                type="button"
                aria-label={
                  struck ? `Restore choice ${choice.id}` : `Strike out choice ${choice.id}`
                }
                aria-pressed={struck}
                disabled={disabled}
                onClick={() => onToggleStrike(choice.id)}
                className={clsx(
                  "shrink-0 rounded-md p-2 text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground",
                  struck && "text-accent",
                )}
              >
                <Strikethrough size={16} strokeWidth={1.5} />
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}
