import Link from "next/link";
import { notFound } from "next/navigation";
import { Card } from "@/components/ui/Card";
import { ALL_FOUNDATIONAL_CONCEPTS } from "@/content/lessons";
import { getFoundationalConcept, getLessonTopicsForConcept } from "@/lib/content";
import { sectionKeySchema } from "@/lib/types";

export function generateStaticParams() {
  return ALL_FOUNDATIONAL_CONCEPTS.map((fc) => ({
    sectionSlug: fc.sectionKey,
    fcSlug: fc.id,
  }));
}

export default async function LearnConceptPage({
  params,
}: {
  params: Promise<{ sectionSlug: string; fcSlug: string }>;
}) {
  const { sectionSlug, fcSlug } = await params;
  const parsed = sectionKeySchema.safeParse(sectionSlug);
  if (!parsed.success) notFound();
  const sectionKey = parsed.data;

  const fc = getFoundationalConcept(fcSlug);
  if (!fc || fc.sectionKey !== sectionKey) notFound();

  const topics = getLessonTopicsForConcept(fcSlug);

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-8 px-6 py-16">
      <div>
        <Link
          href={`/learn/${sectionKey}`}
          className="text-xs font-medium text-muted-foreground hover:text-foreground"
        >
          ← Back
        </Link>
        <p className="mt-4 font-mono text-xs tracking-wide text-muted-foreground">
          {sectionKey === "cars" ? "SKILL AREA" : `FOUNDATIONAL CONCEPT ${fc.number}`}
        </p>
        <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight text-foreground">
          {fc.title}
        </h1>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          {fc.description}
        </p>
      </div>
      <div className="flex flex-col gap-3">
        {topics.map((topic) => (
          <Link key={topic.id} href={`/learn/${sectionKey}/${fcSlug}/${topic.slug}`}>
            <Card interactive className="flex flex-col gap-1 p-5">
              <p className="font-display text-base font-semibold text-foreground">
                {topic.title}
              </p>
              <p className="text-sm text-muted-foreground">{topic.summary}</p>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
