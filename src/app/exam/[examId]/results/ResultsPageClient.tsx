"use client";

import Link from "next/link";
import { useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { ScoreReport } from "@/components/exam/ScoreReport";
import { useExamRouteGuard } from "@/components/exam/useExamRouteGuard";
import { buildExamResult } from "@/lib/results";
import { useExamSessionStore } from "@/store/examSessionStore";
import { useResultsStore } from "@/store/resultsStore";

export function ResultsPageClient({ examId }: { examId: string }) {
  const { attempt, hasHydrated } = useExamRouteGuard(examId);
  const abandonAttempt = useExamSessionStore((s) => s.abandonAttempt);
  const results = useResultsStore((s) => s.results);
  const addResult = useResultsStore((s) => s.addResult);

  const existingResult = attempt
    ? results.find((r) => r.attemptId === attempt.id)
    : undefined;

  useEffect(() => {
    if (!attempt || existingResult) return;
    if (attempt.status !== "completed" && attempt.status !== "voided") return;
    addResult(buildExamResult(attempt, attempt.status === "voided"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [attempt?.id, attempt?.status, existingResult]);

  if (!hasHydrated || !attempt) return <LoadingScreen />;
  if (!existingResult) return <LoadingScreen />;

  return (
    <div className="mx-auto flex min-h-dvh max-w-3xl flex-col gap-6 px-6 py-16">
      <div>
        <p className="font-mono text-xs tracking-wide text-muted-foreground">
          {attempt.mode === "full-sim" ? "FULL EXAM COMPLETE" : "SECTION PRACTICE COMPLETE"}
        </p>
        <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight text-foreground">
          Your results
        </h1>
      </div>
      <ScoreReport result={existingResult} />
      <div className="flex flex-wrap gap-3">
        {!existingResult.voided && (
          <Link href={`/exam/${examId}/results/review`}>
            <Button variant="secondary">Review Answers</Button>
          </Link>
        )}
        <Link href="/">
          <Button onClick={abandonAttempt}>Back to Dashboard</Button>
        </Link>
      </div>
    </div>
  );
}
