import { EXAMS } from "@/lib/examConfig";
import { ReviewPageClient } from "./ReviewPageClient";

export function generateStaticParams() {
  return Object.entries(EXAMS).flatMap(([examId, exam]) =>
    exam.sections.map((_, i) => ({ examId, sectionOrder: String(i) })),
  );
}

export default async function ReviewPage({
  params,
}: {
  params: Promise<{ examId: string; sectionOrder: string }>;
}) {
  const { examId, sectionOrder } = await params;
  return <ReviewPageClient examId={examId} sectionOrder={Number(sectionOrder)} />;
}
