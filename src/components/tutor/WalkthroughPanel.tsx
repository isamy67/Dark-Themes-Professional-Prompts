"use client";

import { useState } from "react";
import { Compass, Lightbulb } from "lucide-react";
import { Card } from "@/components/ui/Card";
import type { QuestionWalkthrough } from "@/lib/types";

export interface WalkthroughPanelProps {
  walkthrough: QuestionWalkthrough;
  /** Full reveal (explanationOverall + all steps at once) once the user has answered. */
  explanationOverall?: string;
}

export function WalkthroughPanel({
  walkthrough,
  explanationOverall,
}: WalkthroughPanelProps) {
  const revealed = Boolean(explanationOverall);
  const [stepsShown, setStepsShown] = useState(revealed ? walkthrough.steps.length : 1);

  const visibleSteps = walkthrough.steps.slice(0, stepsShown);
  const hasMore = stepsShown < walkthrough.steps.length;

  return (
    <Card className="flex flex-col gap-4 p-5">
      <div className="flex items-start gap-2">
        <Compass size={16} strokeWidth={1.5} className="mt-0.5 shrink-0 text-accent" />
        <p className="text-sm leading-relaxed text-muted-foreground">
          {walkthrough.approachNotes}
        </p>
      </div>

      <ol className="flex flex-col gap-2 border-t border-border pt-4">
        {visibleSteps.map((step, i) => (
          <li key={i} className="flex gap-3 text-sm leading-relaxed text-foreground">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-muted font-mono text-[11px] text-accent">
              {i + 1}
            </span>
            <span>{step}</span>
          </li>
        ))}
      </ol>

      {hasMore && (
        <button
          type="button"
          onClick={() => setStepsShown((n) => Math.min(walkthrough.steps.length, n + 1))}
          className="self-start rounded-md px-2 py-1 text-xs font-medium text-accent hover:bg-accent-muted"
        >
          Show next step
        </button>
      )}

      {explanationOverall && (
        <div className="flex items-start gap-2 border-t border-border pt-4">
          <Lightbulb size={16} strokeWidth={1.5} className="mt-0.5 shrink-0 text-accent" />
          <p className="text-sm leading-relaxed text-foreground">{explanationOverall}</p>
        </div>
      )}
    </Card>
  );
}
