import Link from "next/link";
import { notFound } from "next/navigation";
import { Card } from "@/components/ui/Card";
import { SECTION_DISPLAY_NAMES } from "@/content/lessons";
import { getFoundationalConceptsForSection } from "@/lib/content";
import { sectionKeySchema } from "@/lib/types";

export default async function LearnSectionPage({
  params,
}: {
  params: Promise<{ sectionSlug: string }>;
}) {
  const { sectionSlug } = await params;
  const parsed = sectionKeySchema.safeParse(sectionSlug);
  if (!parsed.success) notFound();
  const sectionKey = parsed.data;

  const concepts = getFoundationalConceptsForSection(sectionKey);

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-8 px-6 py-16">
      <div>
        <Link href="/learn" className="text-xs font-medium text-muted-foreground hover:text-foreground">
          ← All sections
        </Link>
        <p className="mt-4 font-mono text-xs tracking-wide text-muted-foreground">
          {sectionKey.toUpperCase()}
        </p>
        <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight text-foreground">
          {SECTION_DISPLAY_NAMES[sectionKey]}
        </h1>
      </div>
      <div className="flex flex-col gap-3">
        {concepts.map((fc) => (
          <Link key={fc.id} href={`/learn/${sectionKey}/${fc.id}`}>
            <Card interactive className="flex flex-col gap-1 p-5">
              <p className="font-mono text-xs tracking-wide text-muted-foreground">
                {sectionKey === "cars" ? "SKILL AREA" : `FOUNDATIONAL CONCEPT ${fc.number}`}
              </p>
              <p className="font-display text-base font-semibold text-foreground">
                {fc.title}
              </p>
              <p className="text-sm text-muted-foreground">{fc.description}</p>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
