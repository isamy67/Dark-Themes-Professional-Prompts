"use client";

import { BreakScreen } from "@/components/exam/BreakScreen";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { useExamRouteGuard } from "@/components/exam/useExamRouteGuard";
import { getExam } from "@/lib/content";
import { useExamSessionStore } from "@/store/examSessionStore";

export function BreakPageClient({ examId }: { examId: string }) {
  const { attempt, hasHydrated } = useExamRouteGuard(examId);
  const endBreak = useExamSessionStore((s) => s.endBreak);

  if (!hasHydrated || !attempt) return <LoadingScreen />;

  const exam = getExam(examId);
  const priorSection = exam.sections[attempt.currentSectionIndex - 1];
  const priorSectionAttempt = attempt.sections[attempt.currentSectionIndex - 1];
  const breakConfig = priorSection
    ? exam.breaks.find((b) => b.afterSectionId === priorSection.id)
    : undefined;

  if (!breakConfig || !priorSectionAttempt?.submittedAt) {
    return <LoadingScreen />;
  }

  return (
    <BreakScreen
      type={breakConfig.type}
      startedAt={priorSectionAttempt.submittedAt}
      durationSec={breakConfig.durationSec}
      onResumeNow={endBreak}
      onExpire={endBreak}
    />
  );
}
