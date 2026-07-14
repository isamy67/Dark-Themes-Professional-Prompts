"use client";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export interface VoidScreenProps {
  onKeepScore: () => void;
  onVoid: () => void;
}

export function VoidScreen({ onKeepScore, onVoid }: VoidScreenProps) {
  return (
    <div className="flex h-dvh flex-col items-center justify-center gap-6 bg-background px-6 text-center">
      <Card className="flex max-w-lg flex-col items-center gap-6 p-10">
        <p className="font-mono text-xs tracking-wide text-muted-foreground">
          END OF EXAM
        </p>
        <h1 className="font-display text-2xl font-semibold tracking-tight text-foreground">
          Complete or void this exam?
        </h1>
        <p className="text-sm text-muted-foreground">
          Voiding discards your answers permanently — no score will be
          calculated or saved. This mirrors the real MCAT&apos;s end-of-exam
          choice, so you can practice deciding under the same conditions.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button variant="danger" onClick={onVoid}>
            Void This Exam
          </Button>
          <Button variant="primary" onClick={onKeepScore}>
            Complete Exam and See My Score
          </Button>
        </div>
      </Card>
    </div>
  );
}
