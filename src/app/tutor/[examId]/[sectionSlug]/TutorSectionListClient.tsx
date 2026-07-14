"use client";

import Link from "next/link";
import { CheckCircle2, Circle, XCircle } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { getExamSection, getQuestionsForSection } from "@/lib/content";
import { useTutorProgressStore } from "@/store/tutorProgressStore";

// Module-level so the fallback is referentially stable across renders —
// `?? {}` inline would allocate a new object every call, and since Zustand's
// useSyncExternalStore compares by reference, that reads as "changed" on
// every render and causes an infinite update loop.
const EMPTY_PROGRESS = {};

export function TutorSectionListClient({
  examId,
  sectionSlug,
}: {
  examId: string;
  sectionSlug: string;
}) {
  const sectionConfig = getExamSection(examId, sectionSlug);
  const questions = getQuestionsForSection(sectionConfig.contentModuleId);
  const progress = useTutorProgressStore(
    (s) => s.progress[sectionConfig.contentModuleId] ?? EMPTY_PROGRESS,
  );

  return (
    <div className="mx-auto flex min-h-dvh max-w-2xl flex-col gap-6 px-6 py-16">
      <div>
        <p className="font-mono text-xs tracking-wide text-muted-foreground">
          TUTOR MODE
        </p>
        <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight text-foreground">
          {sectionConfig.title}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Untimed, guided walkthroughs of this section&apos;s questions —
          answer at your own pace, or ask for the approach before you commit
          to a choice.
        </p>
      </div>
      <div className="flex flex-col gap-2">
        {questions.map((q, i) => {
          const attempted = progress[q.id];
          return (
            <Link key={q.id} href={`/tutor/${examId}/${sectionSlug}/${i}`}>
              <Card interactive className="flex items-center justify-between p-4">
                <div className="flex items-center gap-3">
                  {attempted === undefined ? (
                    <Circle size={16} strokeWidth={1.5} className="text-muted-foreground" />
                  ) : attempted.correct ? (
                    <CheckCircle2 size={16} strokeWidth={1.5} className="text-success" />
                  ) : (
                    <XCircle size={16} strokeWidth={1.5} className="text-danger" />
                  )}
                  <span className="font-mono text-sm text-muted-foreground">
                    Question {i + 1}
                  </span>
                </div>
                <span className="line-clamp-1 max-w-sm text-right text-sm text-muted-foreground">
                  {q.category.foundationalConcept ?? q.category.skill}
                </span>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
