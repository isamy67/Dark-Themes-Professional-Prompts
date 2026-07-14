"use client";

import { VoidScreen } from "@/components/exam/VoidScreen";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { useExamRouteGuard } from "@/components/exam/useExamRouteGuard";
import { buildExamResult } from "@/lib/results";
import { useExamSessionStore } from "@/store/examSessionStore";
import { useResultsStore } from "@/store/resultsStore";

export function VoidPageClient({ examId }: { examId: string }) {
  const { attempt, hasHydrated } = useExamRouteGuard(examId);
  const proceedFromVoidDecision = useExamSessionStore(
    (s) => s.proceedFromVoidDecision,
  );
  const addResult = useResultsStore((s) => s.addResult);

  if (!hasHydrated || !attempt) return <LoadingScreen />;

  function finalize(voided: boolean) {
    if (!attempt) return;
    addResult(buildExamResult(attempt, voided));
    proceedFromVoidDecision(voided);
  }

  return (
    <VoidScreen onKeepScore={() => finalize(false)} onVoid={() => finalize(true)} />
  );
}
