import { Info } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Tooltip } from "@/components/ui/Tooltip";
import type { ExamResult } from "@/lib/types";

export interface ScoreReportProps {
  result: ExamResult;
}

export function ScoreReport({ result }: ScoreReportProps) {
  if (result.voided) {
    return (
      <Card className="p-8 text-center">
        <p className="font-mono text-xs tracking-wide text-muted-foreground">
          VOIDED
        </p>
        <h2 className="mt-2 font-display text-xl font-semibold text-foreground">
          This exam was voided
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          No score was calculated or saved for this attempt.
        </p>
      </Card>
    );
  }

  return (
    <Card className="p-8">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="font-mono text-xs tracking-wide text-muted-foreground">
            TOTAL SCORE
          </p>
          <p className="font-display text-5xl font-semibold tracking-tight tabular-nums text-accent">
            {result.totalScaledScore}
          </p>
        </div>
        <Tooltip content="AAMC's real score-equating tables aren't public, so this is an approximate estimate based on percent correct — not an official AAMC-equivalent score.">
          <Badge tone="accent" className="cursor-help">
            <Info size={12} /> Estimated Score
          </Badge>
        </Tooltip>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {result.sectionScores.map((s) => (
          <div key={s.sectionId} className="rounded-lg border border-border p-4">
            <p className="font-mono text-[10px] uppercase tracking-wide text-muted-foreground">
              {s.sectionKey}
            </p>
            <p className="mt-1 font-display text-2xl font-semibold tabular-nums text-foreground">
              {s.scaledScore}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              {s.correctCount}/{s.totalCount} correct
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
}
