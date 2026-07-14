import { Zap } from "lucide-react";
import { Card } from "@/components/ui/Card";

export interface HighYieldCalloutProps {
  points: string[];
}

export function HighYieldCallout({ points }: HighYieldCalloutProps) {
  if (points.length === 0) return null;
  return (
    <Card className="mb-8 border-accent/20 p-5">
      <div className="mb-3 flex items-center gap-2">
        <Zap size={15} strokeWidth={1.5} className="text-accent" />
        <p className="font-mono text-xs font-medium tracking-wide text-accent">
          HIGH-YIELD
        </p>
      </div>
      <ul className="flex flex-col gap-2">
        {points.map((point, i) => (
          <li key={i} className="flex gap-2 text-sm leading-relaxed text-foreground">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}
