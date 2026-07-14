import { NavigatorGrid } from "./NavigatorGrid";
import type { Question } from "@/lib/types";

export interface SectionReviewTableProps {
  questions: Question[];
  answeredIds: Set<string>;
  flaggedIds: Set<string>;
  onSelectQuestion: (questionId: string) => void;
}

export function SectionReviewTable({
  questions,
  answeredIds,
  flaggedIds,
  onSelectQuestion,
}: SectionReviewTableProps) {
  const unansweredCount = questions.length - answeredIds.size;

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs tracking-wide text-muted-foreground">
        <span>
          {answeredIds.size} / {questions.length} ANSWERED
        </span>
        <span>{flaggedIds.size} FLAGGED</span>
        {unansweredCount > 0 && (
          <span className="text-danger">{unansweredCount} UNANSWERED</span>
        )}
      </div>
      <NavigatorGrid
        questions={questions}
        currentQuestionId={null}
        answeredIds={answeredIds}
        flaggedIds={flaggedIds}
        onSelect={onSelectQuestion}
      />
    </div>
  );
}
