import { EXAMS } from "@/lib/examConfig";
import { ResultsReviewPageClient } from "./ResultsReviewPageClient";

export function generateStaticParams() {
  return Object.keys(EXAMS).map((examId) => ({ examId }));
}

export default async function ResultsReviewPage({
  params,
}: {
  params: Promise<{ examId: string }>;
}) {
  const { examId } = await params;
  return <ResultsReviewPageClient examId={examId} />;
}
