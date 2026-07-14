"use client";

import { ListChecks } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { useExamRouteGuard } from "@/components/exam/useExamRouteGuard";
import { getExam } from "@/lib/content";
import { useExamSessionStore } from "@/store/examSessionStore";

export function TutorialPageClient({ examId }: { examId: string }) {
  const { attempt, hasHydrated } = useExamRouteGuard(examId);
  const skipTutorial = useExamSessionStore((s) => s.skipTutorial);

  if (!hasHydrated || !attempt) return <LoadingScreen />;

  const exam = getExam(examId);

  return (
    <div className="flex h-dvh flex-col items-center justify-center gap-6 bg-background px-6 py-12 text-center">
      <Card className="flex max-w-xl flex-col items-center gap-6 p-10">
        <ListChecks size={28} strokeWidth={1.5} className="text-accent" />
        <div>
          <p className="font-mono text-xs tracking-wide text-muted-foreground">
            TUTORIAL
          </p>
          <h1 className="mt-2 font-display text-2xl font-semibold tracking-tight text-foreground">
            {exam.title}
          </h1>
        </div>
        <ul className="w-full space-y-3 text-left text-sm text-muted-foreground">
          <li>
            • This exam has {exam.sections.length} sections, taken in a fixed
            order with locked navigation — once a section is submitted, you
            cannot return to it.
          </li>
          <li>
            • Each question has a flag-for-review option and a question
            navigator so you can jump between questions within the current
            section.
          </li>
          <li>
            • Select and drag over passage text to highlight it or strike it
            through. Individual answer choices can be struck out too.
          </li>
          <li>
            • Breaks are offered between sections. You can resume early or
            wait for the break timer to end.
          </li>
          <li>
            • At the end of the exam you&apos;ll choose to keep or void your
            score, just like the real exam day.
          </li>
        </ul>
        <Button onClick={skipTutorial}>Skip Tutorial and Begin</Button>
      </Card>
    </div>
  );
}
