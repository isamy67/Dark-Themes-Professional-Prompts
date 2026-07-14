import { ResultsPageClient } from "./ResultsPageClient";

export default async function ResultsPage({
  params,
}: {
  params: Promise<{ examId: string }>;
}) {
  const { examId } = await params;
  return <ResultsPageClient examId={examId} />;
}
