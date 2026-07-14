"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { exam1Meta } from "@/lib/examConfig";
import { useExamSessionStore } from "@/store/examSessionStore";

export function HomePageClient() {
  const router = useRouter();
  const startFullExam = useExamSessionStore((s) => s.startFullExam);

  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-8 px-6 py-16 text-center">
      <div>
        <p className="font-mono text-sm tracking-wide text-muted-foreground">
          MCAT PREP
        </p>
        <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          {exam1Meta.title}
        </h1>
      </div>
      <Card className="max-w-md p-8">
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
    </main>
  );
}
