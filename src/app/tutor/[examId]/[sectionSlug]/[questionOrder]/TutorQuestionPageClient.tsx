"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ChevronLeft, ChevronRight, List } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { AnswerChoiceList } from "@/components/exam/AnswerChoiceList";
import { PassageViewer } from "@/components/exam/PassageViewer";
import { TutorShell } from "@/components/tutor/TutorShell";
import { WalkthroughPanel } from "@/components/tutor/WalkthroughPanel";
import {
  getExamSection,
  getPassage,
  getQuestionsForSection,
} from "@/lib/content";
import { markdownToPlainText } from "@/lib/text";
import type { ExamSectionConfig, Passage, Question } from "@/lib/types";
import { useTutorProgressStore } from "@/store/tutorProgressStore";

export function TutorQuestionPageClient({
  examId,
  sectionSlug,
  questionOrder,
}: {
  examId: string;
  sectionSlug: string;
  questionOrder: number;
}) {
  const router = useRouter();
  const sectionConfig = getExamSection(examId, sectionSlug);
  const questions = getQuestionsForSection(sectionConfig.contentModuleId);
  const question = questions[questionOrder];

  if (!question) {
    return (
      <div className="flex min-h-dvh items-center justify-center bg-background px-6 text-center text-sm text-muted-foreground">
        No question at this position.
      </div>
    );
  }

  const passage = question.passageId
    ? getPassage(sectionConfig.contentModuleId, question.passageId)
    : null;

  return (
    <TutorQuestionBody
      key={question.id}
      examId={examId}
      sectionSlug={sectionSlug}
      sectionConfig={sectionConfig}
      questions={questions}
      questionOrder={questionOrder}
      question={question}
      passage={passage ?? null}
      router={router}
    />
  );
}

function TutorQuestionBody({
  examId,
  sectionSlug,
  sectionConfig,
  questions,
  questionOrder,
  question,
  passage,
  router,
}: {
  examId: string;
  sectionSlug: string;
  sectionConfig: ExamSectionConfig;
  questions: Question[];
  questionOrder: number;
  question: Question;
  passage: Passage | null;
  router: ReturnType<typeof useRouter>;
}) {
  const recordAnswer = useTutorProgressStore((s) => s.recordAnswer);
  const priorProgress = useTutorProgressStore(
    (s) => s.progress[sectionConfig.contentModuleId]?.[question.id],
  );

  const [selectedChoiceId, setSelectedChoiceId] = useState<string | null>(
    priorProgress?.choiceId ?? null,
  );
  const [struckChoiceIds, setStruckChoiceIds] = useState<string[]>([]);
  const [answered, setAnswered] = useState(priorProgress !== undefined);
  const [walkthroughRequested, setWalkthroughRequested] = useState(false);

  function checkAnswer() {
    setAnswered(true);
    recordAnswer(
      sectionConfig.contentModuleId,
      question.id,
      selectedChoiceId,
      selectedChoiceId === question.correctChoiceId,
    );
  }

  const isLast = questionOrder === questions.length - 1;
  const isFirst = questionOrder === 0;

  return (
    <TutorShell
      header={
        <>
          <Link
            href={`/tutor/${examId}/${sectionSlug}`}
            className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground"
          >
            <List size={14} strokeWidth={1.5} /> All questions
          </Link>
          <p className="font-mono text-xs tracking-wide text-muted-foreground">
            {sectionConfig.title.toUpperCase()} · QUESTION {questionOrder + 1} OF{" "}
            {questions.length}
          </p>
        </>
      }
      footer={
        <>
          <Button
            variant="secondary"
            disabled={isFirst}
            onClick={() =>
              router.push(`/tutor/${examId}/${sectionSlug}/${questionOrder - 1}`)
            }
          >
            <ChevronLeft size={16} /> Previous
          </Button>
          <Button
            disabled={isLast}
            onClick={() =>
              router.push(`/tutor/${examId}/${sectionSlug}/${questionOrder + 1}`)
            }
          >
            Next <ChevronRight size={16} />
          </Button>
        </>
      }
    >
      <div className="grid grid-cols-1 gap-0 md:grid-cols-2">
        <div className="border-b border-border md:border-b-0 md:border-r">
          {passage ? (
            <PassageViewer
              passage={passage}
              ranges={[]}
              onAddRange={() => {}}
              onRemoveRangeAt={() => {}}
            />
          ) : (
            <div className="flex h-full items-center justify-center p-6 text-center text-sm text-muted-foreground">
              This is a standalone question with no associated passage.
            </div>
          )}
        </div>
        <div className="flex flex-col gap-5 p-6">
          <p className="whitespace-pre-wrap text-[15px] leading-relaxed text-foreground">
            {markdownToPlainText(question.stem)}
          </p>
          <AnswerChoiceList
            choices={question.choices}
            selectedChoiceId={selectedChoiceId}
            struckChoiceIds={struckChoiceIds}
            onSelect={(id) => !answered && setSelectedChoiceId(id)}
            onToggleStrike={(id) =>
              setStruckChoiceIds((prev) =>
                prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id],
              )
            }
            revealCorrectChoiceId={answered ? question.correctChoiceId : undefined}
            disabled={answered}
          />

          {!answered && (
            <div className="flex flex-wrap items-center gap-3">
              <Button onClick={checkAnswer} disabled={!selectedChoiceId}>
                Check Answer
              </Button>
              {!walkthroughRequested && (
                <button
                  type="button"
                  onClick={() => setWalkthroughRequested(true)}
                  className="rounded-md text-sm font-medium text-accent hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  Walk me through it
                </button>
              )}
            </div>
          )}

          {(answered || walkthroughRequested) && (
            <WalkthroughPanel
              walkthrough={question.walkthrough}
              explanationOverall={answered ? question.explanationOverall : undefined}
            />
          )}
        </div>
      </div>
    </TutorShell>
  );
}
