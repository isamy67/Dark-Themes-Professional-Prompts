"use client";

import { Coffee } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Timer } from "./Timer";

export interface BreakScreenProps {
  type: "short" | "lunch";
  startedAt: string;
  durationSec: number;
  onResumeNow: () => void;
  onExpire: () => void;
}

export function BreakScreen({
  type,
  startedAt,
  durationSec,
  onResumeNow,
  onExpire,
}: BreakScreenProps) {
  return (
    <div className="flex h-dvh flex-col items-center justify-center gap-6 bg-background px-6 text-center">
      <Card className="flex max-w-md flex-col items-center gap-6 p-10">
        <Coffee size={28} strokeWidth={1.5} className="text-accent" />
        <div>
          <p className="font-mono text-xs tracking-wide text-muted-foreground">
            {type === "lunch" ? "LUNCH BREAK" : "BREAK"}
          </p>
          <h1 className="mt-2 font-display text-2xl font-semibold tracking-tight text-foreground">
            Take a breather.
          </h1>
        </div>
        <p className="text-sm text-muted-foreground">
          Your next section begins automatically when the break ends, or you
          can resume early.
        </p>
        <Timer
          startedAt={startedAt}
          timeLimitSec={durationSec}
          timed
          onExpire={onExpire}
          className="text-lg"
        />
        <Button onClick={onResumeNow} variant="secondary">
          Resume Now
        </Button>
      </Card>
    </div>
  );
}
