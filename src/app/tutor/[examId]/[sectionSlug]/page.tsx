import { TutorSectionListClient } from "./TutorSectionListClient";

export default async function TutorSectionListPage({
  params,
}: {
  params: Promise<{ examId: string; sectionSlug: string }>;
}) {
  const { examId, sectionSlug } = await params;
  return <TutorSectionListClient examId={examId} sectionSlug={sectionSlug} />;
}
