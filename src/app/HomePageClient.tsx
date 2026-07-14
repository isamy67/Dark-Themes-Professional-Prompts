"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BookOpen, CheckCircle2, GraduationCap, PlayCircle, XCircle } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { getCanonicalExamPath } from "@/lib/examRouting";
import { exam1Meta } from "@/lib/examConfig";
import { useExamSessionStore } from "@/store/examSessionStore";
import { useResultsStore } from "@/store/resultsStore";

const IN_PROGRESS_STATUSES = new Set([
  "tutorial",
  "section-intro",
  "in-section",
  "on-break",
  "reviewing-section",
  "void-decision",
]);

export function HomePageClient() {
  const router = useRouter();
  const startFullExam = useExamSessionStore((s) => s.startFullExam);
  const startSectionPractice = useExamSessionStore(
    (s) => s.startSectionPractice,
  );
  const attempt = useExamSessionStore((s) => s.attempt);
  const hasHydrated = useExamSessionStore((s) => s.hasHydrated);
  const results = useResultsStore((s) => s.results);
  const [timedBySection, setTimedBySection] = useState<Record<string, boolean>>(
    () =>
      Object.fromEntries(exam1Meta.sections.map((s) => [s.id, true])),
  );

  function practice(sectionId: string) {
    startSectionPractice("exam-1", sectionId, timedBySection[sectionId]);
    router.push("/exam/exam-1");
  }

  const resumableAttempt =
    hasHydrated && attempt && IN_PROGRESS_STATUSES.has(attempt.status)
      ? attempt
      : null;

  return (
    <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col items-center gap-12 px-6 py-16">
      <div className="text-center">
        <p className="font-mono text-sm tracking-wide text-muted-foreground">
          MCAT PREP
        </p>
        <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          {exam1Meta.title}
        </h1>
      </div>

      {resumableAttempt && (
        <Card highlighted className="flex w-full max-w-md items-center gap-4 p-6">
          <PlayCircle size={22} strokeWidth={1.5} className="shrink-0 text-accent" />
          <div className="flex-1 text-left">
            <p className="font-display text-sm font-semibold text-foreground">
              Resume your {resumableAttempt.mode === "full-sim" ? "exam" : "practice session"}
            </p>
            <p className="text-xs text-muted-foreground">
              You have an attempt in progress.
            </p>
          </div>
          <Button
            size="sm"
            onClick={() => router.push(getCanonicalExamPath(resumableAttempt))}
          >
            Resume
          </Button>
        </Card>
      )}

      <Card className="w-full max-w-md p-8 text-center">
        <p className="mb-6 text-sm text-muted-foreground">
          {exam1Meta.description}
        </p>
        <Button
          onClick={() => {
            startFullExam("exam-1");
            router.push("/exam/exam-1");
          }}
        >
          Start Full Exam
        </Button>
      </Card>

      <div className="w-full">
        <h2 className="mb-4 font-display text-lg font-semibold tracking-tight text-foreground">
          Practice a Section
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {exam1Meta.sections.map((section) => {
            const timed = timedBySection[section.id];
            return (
              <Card key={section.id} className="flex flex-col gap-4 p-6">
                <div>
                  <p className="font-mono text-xs tracking-wide text-muted-foreground">
                    {section.key.toUpperCase()}
                  </p>
                  <p className="mt-1 font-display text-sm font-semibold text-foreground">
                    {section.title}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {section.questionCount} questions
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <div
                    role="group"
                    aria-label={`Timing for ${section.title}`}
                    className="inline-flex rounded-lg border border-border p-0.5 text-xs"
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setTimedBySection((prev) => ({ ...prev, [section.id]: true }))
                      }
                      aria-pressed={timed}
                      className={`rounded-md px-3 py-1.5 font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                        timed
                          ? "bg-accent text-accent-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      Timed
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setTimedBySection((prev) => ({ ...prev, [section.id]: false }))
                      }
                      aria-pressed={!timed}
                      className={`rounded-md px-3 py-1.5 font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                        !timed
                          ? "bg-accent text-accent-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      Untimed
                    </button>
                  </div>
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={() => practice(section.id)}
                  >
                    Practice
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      <div className="w-full">
        <h2 className="mb-1 font-display text-lg font-semibold tracking-tight text-foreground">
          Tutor Mode
        </h2>
        <p className="mb-4 text-sm text-muted-foreground">
          Untimed, guided walkthroughs of the same questions — get the
          approach before or after you answer.
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {exam1Meta.sections.map((section) => (
            <Link key={section.id} href={`/tutor/exam-1/${section.id}`}>
              <Card interactive className="flex items-center gap-3 p-6">
                <GraduationCap size={18} strokeWidth={1.5} className="text-accent" />
                <div>
                  <p className="font-mono text-xs tracking-wide text-muted-foreground">
                    {section.key.toUpperCase()}
                  </p>
                  <p className="mt-1 font-display text-sm font-semibold text-foreground">
                    {section.title}
                  </p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      <Link href="/learn" className="w-full">
        <Card interactive className="flex items-center gap-3 p-6">
          <BookOpen size={18} strokeWidth={1.5} className="text-accent" />
          <div>
            <p className="font-display text-sm font-semibold text-foreground">
              Review Lessons
            </p>
            <p className="text-xs text-muted-foreground">
              Written subject-review lessons with clinical correlations,
              organized by AAMC content category.
            </p>
          </div>
        </Card>
      </Link>

      {hasHydrated && results.length > 0 && (
        <div className="w-full">
          <h2 className="mb-4 font-display text-lg font-semibold tracking-tight text-foreground">
            Your Results
          </h2>
          <div className="flex flex-col gap-2">
            {results.map((result) => (
              <Card
                key={result.attemptId}
                className="flex items-center justify-between gap-4 p-4"
              >
                <div className="flex items-center gap-3">
                  {result.voided ? (
                    <XCircle size={16} strokeWidth={1.5} className="text-muted-foreground" />
                  ) : (
                    <CheckCircle2 size={16} strokeWidth={1.5} className="text-success" />
                  )}
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {result.mode === "full-sim" ? "Full Exam" : "Section Practice"}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {new Date(result.completedAt).toLocaleDateString(undefined, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                </div>
                {result.voided ? (
                  <Badge tone="neutral">Voided</Badge>
                ) : (
                  <Badge tone="accent">{result.totalScaledScore}</Badge>
                )}
              </Card>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}
