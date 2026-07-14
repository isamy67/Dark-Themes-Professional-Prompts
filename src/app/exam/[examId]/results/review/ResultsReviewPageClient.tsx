"use client";

import Link from "next/link";
import { CheckCircle2, XCircle } from "lucide-react";
import { clsx } from "clsx";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { AnswerChoiceList } from "@/components/exam/AnswerChoiceList";
import { useExamRouteGuard } from "@/components/exam/useExamRouteGuard";
import { getExam, getQuestionsForSection } from "@/lib/content";
import { markdownToPlainText } from "@/lib/text";
import { useExamSessionStore } from "@/store/examSessionStore";

export function ResultsReviewPageClient({ examId }: { examId: string }) {
  const { attempt, hasHydrated } = useExamRouteGuard(examId);
  const abandonAttempt = useExamSessionStore((s) => s.abandonAttempt);

  if (!hasHydrated || !attempt) return <LoadingScreen />;

  const exam = getExam(examId);

  return (
    <div className="mx-auto flex min-h-dvh max-w-3xl flex-col gap-8 px-6 py-16">
      <div>
        <p className="font-mono text-xs tracking-wide text-muted-foreground">
          ANSWER REVIEW
        </p>
        <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight text-foreground">
          {exam.title}
        </h1>
      </div>

      {attempt.sections.map((sectionAttempt) => {
        const sectionConfig = exam.sections.find(
          (s) => s.id === sectionAttempt.sectionId,
        );
        if (!sectionConfig) return null;
        const questions = getQuestionsForSection(sectionConfig.contentModuleId);

        return (
          <section key={sectionAttempt.sectionId} className="flex flex-col gap-4">
            <h2 className="font-display text-lg font-semibold tracking-tight text-foreground">
              {sectionConfig.title}
            </h2>
            {questions.map((question, qIndex) => {
              const answer = sectionAttempt.answers[question.id];
              const isCorrect = answer?.choiceId === question.correctChoiceId;
              return (
                <Card key={question.id} className="p-6">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="font-mono text-xs tracking-wide text-muted-foreground">
                      {sectionConfig.key.toUpperCase()} · QUESTION {qIndex + 1}
                    </span>
                    <Badge tone={isCorrect ? "success" : "danger"}>
                      {isCorrect ? (
                        <CheckCircle2 size={12} />
                      ) : (
                        <XCircle size={12} />
                      )}
                      {isCorrect ? "Correct" : "Incorrect"}
                    </Badge>
                  </div>
                  <p className="mb-4 whitespace-pre-wrap text-[15px] leading-relaxed text-foreground">
                    {markdownToPlainText(question.stem)}
                  </p>
                  <AnswerChoiceList
                    choices={question.choices}
                    selectedChoiceId={answer?.choiceId ?? null}
                    struckChoiceIds={[]}
                    onSelect={() => {}}
                    onToggleStrike={() => {}}
                    revealCorrectChoiceId={question.correctChoiceId}
                    disabled
                  />
                  <p
                    className={clsx(
                      "mt-4 rounded-lg border border-border bg-muted/40 p-4 text-sm leading-relaxed text-muted-foreground",
                    )}
                  >
                    {question.explanationOverall}
                  </p>
                </Card>
              );
            })}
          </section>
        );
      })}

      <div className="flex justify-center pb-8">
        <Link href="/">
          <Button onClick={abandonAttempt}>Back to Dashboard</Button>
        </Link>
      </div>
    </div>
  );
}
