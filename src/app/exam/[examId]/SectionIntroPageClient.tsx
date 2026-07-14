"use client";

import { BookOpen } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { useExamRouteGuard } from "@/components/exam/useExamRouteGuard";
import { getExam } from "@/lib/content";
import { formatDuration } from "@/lib/timer";
import { useExamSessionStore } from "@/store/examSessionStore";

export function SectionIntroPageClient({ examId }: { examId: string }) {
  const { attempt, hasHydrated } = useExamRouteGuard(examId);
  const beginSection = useExamSessionStore((s) => s.beginSection);

  if (!hasHydrated || !attempt) return <LoadingScreen />;

  const exam = getExam(examId);
  const sectionConfig = exam.sections[attempt.currentSectionIndex];
  const sectionAttempt = attempt.sections[attempt.currentSectionIndex];
  if (!sectionConfig || !sectionAttempt) return <LoadingScreen />;

  const isScaled = sectionConfig.durationSec !== sectionConfig.fullDurationSec;

  return (
    <div className="flex h-dvh flex-col items-center justify-center gap-6 bg-background px-6 py-12 text-center">
      <Card className="flex max-w-xl flex-col items-center gap-6 p-10">
        <BookOpen size={28} strokeWidth={1.5} className="text-accent" />
        <div>
          <p className="font-mono text-xs tracking-wide text-muted-foreground">
            SECTION {attempt.currentSectionIndex + 1} OF {exam.sections.length}
          </p>
          <h1 className="mt-2 font-display text-2xl font-semibold tracking-tight text-foreground">
            {sectionConfig.title}
          </h1>
        </div>
        <div className="grid w-full grid-cols-2 gap-4 text-sm">
          <div className="rounded-lg border border-border p-4">
            <p className="font-mono text-[10px] uppercase tracking-wide text-muted-foreground">
              Questions
            </p>
            <p className="mt-1 font-display text-xl font-semibold tabular-nums text-foreground">
              {sectionConfig.questionCount}
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <p className="font-mono text-[10px] uppercase tracking-wide text-muted-foreground">
              {sectionAttempt.timed ? "Time Limit" : "Timing"}
            </p>
            <p className="mt-1 font-display text-xl font-semibold tabular-nums text-foreground">
              {sectionAttempt.timed
                ? formatDuration(sectionConfig.durationSec * 1000)
                : "Untimed"}
            </p>
          </div>
        </div>
        {isScaled && sectionAttempt.timed && (
          <p className="text-xs text-muted-foreground">
            Real MCAT: {sectionConfig.fullQuestionCount} questions in{" "}
            {formatDuration(sectionConfig.fullDurationSec * 1000)}. This
            starter exam&apos;s timer is scaled to the same real per-question
            pace for its shorter question set.
          </p>
        )}
        <p className="text-sm text-muted-foreground">
          {sectionAttempt.timed
            ? "Once you begin, the timer starts immediately and cannot be paused. "
            : "This is untimed practice — an elapsed-time clock will count up, but nothing will auto-submit. "}
          You will not be able to return to this section after submitting it.
        </p>
        <Button onClick={() => beginSection(attempt.currentSectionIndex)}>
          Begin Section
        </Button>
      </Card>
    </div>
  );
}
