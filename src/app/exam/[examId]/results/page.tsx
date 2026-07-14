import { EXAMS } from "@/lib/examConfig";
import { ResultsPageClient } from "./ResultsPageClient";

export function generateStaticParams() {
  return Object.keys(EXAMS).map((examId) => ({ examId }));
}

export default async function ResultsPage({
  params,
}: {
  params: Promise<{ examId: string }>;
}) {
  const { examId } = await params;
  return <ResultsPageClient examId={examId} />;
}
