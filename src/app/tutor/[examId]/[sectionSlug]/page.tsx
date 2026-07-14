import { EXAMS } from "@/lib/examConfig";
import { TutorSectionListClient } from "./TutorSectionListClient";

export function generateStaticParams() {
  return Object.entries(EXAMS).flatMap(([examId, exam]) =>
    exam.sections.map((s) => ({ examId, sectionSlug: s.id })),
  );
}

export default async function TutorSectionListPage({
  params,
}: {
  params: Promise<{ examId: string; sectionSlug: string }>;
}) {
  const { examId, sectionSlug } = await params;
  return <TutorSectionListClient examId={examId} sectionSlug={sectionSlug} />;
}
