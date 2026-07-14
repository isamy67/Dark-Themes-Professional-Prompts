import { ResultsReviewPageClient } from "./ResultsReviewPageClient";

export default async function ResultsReviewPage({
  params,
}: {
  params: Promise<{ examId: string }>;
}) {
  const { examId } = await params;
  return <ResultsReviewPageClient examId={examId} />;
}
