import type { ReactNode } from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { HighYieldCallout } from "./HighYieldCallout";
import { ClinicalCorrelationCallout } from "./ClinicalCorrelationCallout";
import type { LessonTopic } from "@/lib/types";

export interface LessonLayoutProps {
  topic: LessonTopic;
  sectionSlug: string;
  fcSlug: string;
  sidebar: ReactNode;
  children: ReactNode;
}

export function LessonLayout({
  topic,
  sectionSlug,
  fcSlug,
  sidebar,
  children,
}: LessonLayoutProps) {
  return (
    <div className="mx-auto flex max-w-5xl gap-12 px-6 py-16">
      <aside className="hidden w-56 shrink-0 lg:block">
        <div className="sticky top-16">{sidebar}</div>
      </aside>
      <article className="min-w-0 max-w-2xl flex-1">
        <Link
          href={`/learn/${sectionSlug}/${fcSlug}`}
          className="mb-6 flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground"
        >
          <ChevronLeft size={14} strokeWidth={1.5} /> Back to topics
        </Link>
        <div className="mb-8">
          {topic.expandable && (
            <Badge tone="neutral" className="mb-3">
              More AAMC sub-topics coming soon
            </Badge>
          )}
          <h1 className="font-display text-3xl font-semibold tracking-tight text-foreground">
            {topic.title}
          </h1>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            {topic.summary}
          </p>
        </div>
        {topic.highYield && <HighYieldCallout points={topic.highYield} />}
        <div>{children}</div>
        <ClinicalCorrelationCallout correlation={topic.clinicalCorrelation} />
      </article>
    </div>
  );
}
