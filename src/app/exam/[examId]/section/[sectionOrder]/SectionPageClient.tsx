"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { ExamShell } from "@/components/exam/ExamShell";
import { NavigatorGrid } from "@/components/exam/NavigatorGrid";
import { PassageViewer } from "@/components/exam/PassageViewer";
import { QuestionPanel } from "@/components/exam/QuestionPanel";
import { Timer } from "@/components/exam/Timer";
import { useExamRouteGuard } from "@/components/exam/useExamRouteGuard";
import { getExam, getPassage, getQuestionsForSection } from "@/lib/content";
import { useExamSessionStore } from "@/store/examSessionStore";

export function SectionPageClient({
  examId,
  sectionOrder,
}: {
  examId: string;
  sectionOrder: number;
}) {
  const { attempt, hasHydrated } = useExamRouteGuard(examId);
  const setAnswer = useExamSessionStore((s) => s.setAnswer);
  const markVisited = useExamSessionStore((s) => s.markVisited);
  const toggleFlag = useExamSessionStore((s) => s.toggleFlag);
  const toggleStrikethrough = useExamSessionStore((s) => s.toggleStrikethrough);
  const addHighlight = useExamSessionStore((s) => s.addHighlight);
  const removeHighlightAt = useExamSessionStore((s) => s.removeHighlightAt);
  const goToReview = useExamSessionStore((s) => s.goToReview);
  const submitSection = useExamSessionStore((s) => s.submitSection);

  const sectionAttempt = attempt?.sections[sectionOrder] ?? null;

  const exam = hasHydrated ? getExam(examId) : null;
  const sectionConfig = exam?.sections[sectionOrder] ?? null;
  const questions = useMemo(
    () => (sectionConfig ? getQuestionsForSection(sectionConfig.contentModuleId) : []),
    [sectionConfig],
  );

  const searchParams = useSearchParams();

  // currentIndex is deliberately plain state, not derived from live answer
  // data: it must NOT shift just because the answers map changes (e.g.
  // selecting a choice on the current question would otherwise change
  // "first unanswered question" out from under the user mid-interaction).
  // It's positioned once — to a ?q= target, or the first unanswered
  // question — as soon as attempt data is available, then only moves via
  // explicit navigation (Previous/Next/NavigatorGrid).
  const [currentIndex, setCurrentIndex] = useState(0);
  const initializedRef = useRef(false);

  useEffect(() => {
    if (initializedRef.current) return;
    if (!sectionAttempt || questions.length === 0) return;
    initializedRef.current = true;

    const targetQuestionId = searchParams.get("q");
    const targetIndex = targetQuestionId
      ? questions.findIndex((q) => q.id === targetQuestionId)
      : -1;
    const firstUnanswered = questions.findIndex(
      (q) => !sectionAttempt.answers[q.id]?.choiceId,
    );
    const initialIndex =
      targetIndex >= 0 ? targetIndex : firstUnanswered === -1 ? 0 : firstUnanswered;

    // One-time positioning once data is ready, guarded by initializedRef
    // above; deliberately not re-run on every sectionAttempt/questions
    // change (see comment on currentIndex's declaration).
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCurrentIndex(initialIndex);
  }, [sectionAttempt, questions, searchParams]);

  const currentQuestion = questions[currentIndex];

  useEffect(() => {
    if (!currentQuestion) return;
    markVisited(sectionOrder, currentQuestion.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentQuestion?.id]);

  if (!hasHydrated || !attempt || !sectionConfig || !sectionAttempt) {
    return <LoadingScreen />;
  }
  if (!currentQuestion) return <LoadingScreen />;

  const passage = currentQuestion.passageId
    ? getPassage(sectionConfig.contentModuleId, currentQuestion.passageId)
    : null;
  const passageRanges = passage
    ? (sectionAttempt.highlights[passage.id] ?? [])
    : [];

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

  const isLastQuestion = currentIndex === questions.length - 1;

  return (
    <ExamShell
      header={
        <>
          <div>
            <p className="font-mono text-xs tracking-wide text-muted-foreground">
              SECTION {sectionOrder + 1} OF {exam?.sections.length}
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
        </>
      }
      sidebar={
        <div className="flex flex-col gap-4">
          <p className="font-mono text-xs tracking-wide text-muted-foreground">
            QUESTION NAVIGATOR
          </p>
          <NavigatorGrid
            questions={questions}
            currentQuestionId={currentQuestion.id}
            answeredIds={answeredIds}
            flaggedIds={flaggedIds}
            onSelect={(id) => {
              const idx = questions.findIndex((q) => q.id === id);
              if (idx >= 0) setCurrentIndex(idx);
            }}
          />
        </div>
      }
      footer={
        <>
          <Button
            variant="secondary"
            onClick={() => setCurrentIndex((i) => Math.max(0, i - 1))}
            disabled={currentIndex === 0}
          >
            <ChevronLeft size={16} /> Previous
          </Button>
          {isLastQuestion ? (
            <Button onClick={() => goToReview(sectionOrder)}>
              Review Section
            </Button>
          ) : (
            <Button
              onClick={() =>
                setCurrentIndex((i) => Math.min(questions.length - 1, i + 1))
              }
            >
              Next <ChevronRight size={16} />
            </Button>
          )}
        </>
      }
    >
      <div className="grid h-full grid-cols-1 md:grid-cols-2">
        <div className="hidden h-full border-r border-border md:block">
          {passage ? (
            <PassageViewer
              passage={passage}
              ranges={passageRanges}
              onAddRange={(range) =>
                addHighlight(sectionOrder, passage.id, range)
              }
              onRemoveRangeAt={(idx) =>
                removeHighlightAt(sectionOrder, passage.id, idx)
              }
            />
          ) : (
            <div className="flex h-full items-center justify-center p-6 text-center text-sm text-muted-foreground">
              This is a standalone question with no associated passage.
            </div>
          )}
        </div>
        <QuestionPanel
          question={currentQuestion}
          questionNumber={currentIndex + 1}
          totalQuestions={questions.length}
          selectedChoiceId={sectionAttempt.answers[currentQuestion.id]?.choiceId ?? null}
          struckChoiceIds={sectionAttempt.strikethroughs[currentQuestion.id] ?? []}
          flagged={sectionAttempt.answers[currentQuestion.id]?.flagged ?? false}
          onSelect={(choiceId) =>
            setAnswer(sectionOrder, currentQuestion.id, choiceId)
          }
          onToggleStrike={(choiceId) =>
            toggleStrikethrough(sectionOrder, currentQuestion.id, choiceId)
          }
          onToggleFlag={() => toggleFlag(sectionOrder, currentQuestion.id)}
        />
      </div>
    </ExamShell>
  );
}
