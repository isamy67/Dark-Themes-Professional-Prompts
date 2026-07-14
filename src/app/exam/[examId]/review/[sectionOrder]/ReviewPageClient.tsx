"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Dialog } from "@/components/ui/Dialog";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { SectionReviewTable } from "@/components/exam/SectionReviewTable";
import { Timer } from "@/components/exam/Timer";
import { useExamRouteGuard } from "@/components/exam/useExamRouteGuard";
import { getExam, getQuestionsForSection } from "@/lib/content";
import { useExamSessionStore } from "@/store/examSessionStore";

export function ReviewPageClient({
  examId,
  sectionOrder,
}: {
  examId: string;
  sectionOrder: number;
}) {
  const { attempt, hasHydrated } = useExamRouteGuard(examId);
  const beginSection = useExamSessionStore((s) => s.beginSection);
  const submitSection = useExamSessionStore((s) => s.submitSection);
  const router = useRouter();
  const [confirmOpen, setConfirmOpen] = useState(false);

  const sectionAttempt = attempt?.sections[sectionOrder] ?? null;
  const exam = hasHydrated ? getExam(examId) : null;
  const sectionConfig = exam?.sections[sectionOrder] ?? null;

  if (!hasHydrated || !attempt || !sectionConfig || !sectionAttempt) {
    return <LoadingScreen />;
  }

  const questions = getQuestionsForSection(sectionConfig.contentModuleId);
  const answeredIds = new Set(
    Object.entries(sectionAttempt.answers)
      .filter(([, a]) => a.choiceId !== null)
      .map(([id]) => id),
  );
  const flaggedIds = new Set(
    Object.entries(sectionAttempt.answers)
      .filter(([, a]) => a.flagged)
      .map(([id]) => id),
  );
  const unansweredCount = questions.length - answeredIds.size;

  function goToQuestion(questionId: string) {
    beginSection(sectionOrder);
    router.push(`/exam/${examId}/section/${sectionOrder}?q=${questionId}`);
  }

  function handleSubmitClick() {
    if (unansweredCount > 0) {
      setConfirmOpen(true);
      return;
    }
    submitSection(sectionOrder);
  }

  return (
    <div className="flex h-dvh flex-col bg-background">
      <header className="flex items-center justify-between border-b border-border px-6 py-3">
        <div>
          <p className="font-mono text-xs tracking-wide text-muted-foreground">
            REVIEW SECTION {sectionOrder + 1}
          </p>
          <p className="font-display text-sm font-semibold text-foreground">
            {sectionConfig.title}
          </p>
        </div>
        {sectionAttempt.startedAt && (
          <Timer
            startedAt={sectionAttempt.startedAt}
            timeLimitSec={sectionAttempt.timeLimitSec}
            timed={sectionAttempt.timed}
            onExpire={() => submitSection(sectionOrder)}
          />
        )}
      </header>
      <main className="flex flex-1 items-center justify-center overflow-y-auto px-6 py-10">
        <Card className="w-full max-w-2xl p-8">
          <h1 className="mb-2 font-display text-xl font-semibold tracking-tight text-foreground">
            Review your answers
          </h1>
          <p className="mb-6 text-sm text-muted-foreground">
            Select any question to jump back to it. This is your last chance
            to change answers in this section — once submitted, you cannot
            return.
          </p>
          <SectionReviewTable
            questions={questions}
            answeredIds={answeredIds}
            flaggedIds={flaggedIds}
            onSelectQuestion={goToQuestion}
          />
          <div className="mt-8 flex justify-end">
            <Button onClick={handleSubmitClick}>Submit Section</Button>
          </div>
        </Card>
      </main>

      <Dialog
        open={confirmOpen}
        onClose={() => setConfirmOpen(false)}
        title="Submit with unanswered questions?"
        footer={
          <>
            <Button variant="secondary" onClick={() => setConfirmOpen(false)}>
              Go Back
            </Button>
            <Button
              variant="danger"
              onClick={() => {
                setConfirmOpen(false);
                submitSection(sectionOrder);
              }}
            >
              Submit Anyway
            </Button>
          </>
        }
      >
        You have {unansweredCount} unanswered{" "}
        {unansweredCount === 1 ? "question" : "questions"} in this section.
        Once submitted you cannot come back to answer them.
      </Dialog>
    </div>
  );
}
