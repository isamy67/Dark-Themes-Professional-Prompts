"use client";

import type { ReactNode } from "react";
import { AnswerChoiceList } from "./AnswerChoiceList";
import { FlagButton } from "./FlagButton";
import { markdownToPlainText } from "@/lib/text";
import type { Question } from "@/lib/types";

export interface QuestionPanelProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  selectedChoiceId: string | null;
  struckChoiceIds: string[];
  flagged: boolean;
  onSelect: (choiceId: string) => void;
  onToggleStrike: (choiceId: string) => void;
  onToggleFlag: () => void;
  revealCorrectChoiceId?: string;
  disabled?: boolean;
  /** Slot for an explanation panel (results review) or WalkthroughPanel (tutor mode). */
  children?: ReactNode;
}

export function QuestionPanel({
  question,
  questionNumber,
  totalQuestions,
  selectedChoiceId,
  struckChoiceIds,
  flagged,
  onSelect,
  onToggleStrike,
  onToggleFlag,
  revealCorrectChoiceId,
  disabled,
  children,
}: QuestionPanelProps) {
  return (
    <div className="flex h-full flex-col gap-5 overflow-y-auto p-6">
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs tracking-wide text-muted-foreground">
          QUESTION {questionNumber} OF {totalQuestions}
        </span>
        {!revealCorrectChoiceId && (
          <FlagButton flagged={flagged} onToggle={onToggleFlag} />
        )}
      </div>
      <p className="whitespace-pre-wrap text-[15px] leading-relaxed text-foreground">
        {markdownToPlainText(question.stem)}
      </p>
      <AnswerChoiceList
        choices={question.choices}
        selectedChoiceId={selectedChoiceId}
        struckChoiceIds={struckChoiceIds}
        onSelect={onSelect}
        onToggleStrike={onToggleStrike}
        revealCorrectChoiceId={revealCorrectChoiceId}
        disabled={disabled}
      />
      {children}
    </div>
  );
}
