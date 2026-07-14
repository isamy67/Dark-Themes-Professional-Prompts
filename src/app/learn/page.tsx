import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { LEARN_SECTION_ORDER, SECTION_DISPLAY_NAMES } from "@/content/lessons";
import { getFoundationalConceptsForSection } from "@/lib/content";

export default function LearnPage() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-8 px-6 py-16">
      <div>
        <p className="font-mono text-xs tracking-wide text-muted-foreground">
          LEARN
        </p>
        <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight text-foreground">
          Subject Review
        </h1>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          Written lessons organized by AAMC&apos;s tested content, with
          clinical correlations tying each concept to real medicine.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {LEARN_SECTION_ORDER.map((sectionKey) => {
          const concepts = getFoundationalConceptsForSection(sectionKey);
          const topicCount = concepts.reduce((n, fc) => n + fc.topicIds.length, 0);
          return (
            <Link key={sectionKey} href={`/learn/${sectionKey}`}>
              <Card interactive className="flex h-full flex-col gap-2 p-6">
                <p className="font-mono text-xs tracking-wide text-muted-foreground">
                  {sectionKey.toUpperCase()}
                </p>
                <p className="font-display text-base font-semibold text-foreground">
                  {SECTION_DISPLAY_NAMES[sectionKey]}
                </p>
                <p className="mt-auto text-xs text-muted-foreground">
                  {concepts.length} {sectionKey === "cars" ? "skill areas" : "foundational concepts"}
                  {" · "}
                  {topicCount} lessons
                </p>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
