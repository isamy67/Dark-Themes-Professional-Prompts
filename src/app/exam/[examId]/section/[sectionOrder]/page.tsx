import { Suspense } from "react";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { EXAMS } from "@/lib/examConfig";
import { SectionPageClient } from "./SectionPageClient";

export function generateStaticParams() {
  return Object.entries(EXAMS).flatMap(([examId, exam]) =>
    exam.sections.map((_, i) => ({ examId, sectionOrder: String(i) })),
  );
}

export default async function SectionPage({
  params,
}: {
  params: Promise<{ examId: string; sectionOrder: string }>;
}) {
  const { examId, sectionOrder } = await params;
  // useSearchParams() inside SectionPageClient must sit under a Suspense
  // boundary so static export (output: 'export') can prerender the shell.
  return (
    <Suspense fallback={<LoadingScreen />}>
      <SectionPageClient examId={examId} sectionOrder={Number(sectionOrder)} />
    </Suspense>
  );
}
