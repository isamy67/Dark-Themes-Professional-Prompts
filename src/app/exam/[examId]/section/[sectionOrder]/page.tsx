import { SectionPageClient } from "./SectionPageClient";

export default async function SectionPage({
  params,
}: {
  params: Promise<{ examId: string; sectionOrder: string }>;
}) {
  const { examId, sectionOrder } = await params;
  return <SectionPageClient examId={examId} sectionOrder={Number(sectionOrder)} />;
}
