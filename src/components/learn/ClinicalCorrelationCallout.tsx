import { Stethoscope } from "lucide-react";
import { Card } from "@/components/ui/Card";
import type { ClinicalCorrelation } from "@/lib/types";

export interface ClinicalCorrelationCalloutProps {
  correlation: ClinicalCorrelation;
}

export function ClinicalCorrelationCallout({
  correlation,
}: ClinicalCorrelationCalloutProps) {
  return (
    <Card className="my-8 border-success/20 bg-success-muted/40 p-5">
      <div className="mb-3 flex items-center gap-2">
        <Stethoscope size={15} strokeWidth={1.5} className="text-success" />
        <p className="font-mono text-xs font-medium tracking-wide text-success">
          {correlation.title}
        </p>
      </div>
      <p className="mb-3 text-sm leading-relaxed text-foreground">
        {correlation.vignette}
      </p>
      <p className="text-sm leading-relaxed text-muted-foreground">
        {correlation.tieIn}
      </p>
    </Card>
  );
}
