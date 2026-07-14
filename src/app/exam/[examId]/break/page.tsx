import { EXAMS } from "@/lib/examConfig";
import { BreakPageClient } from "./BreakPageClient";

export function generateStaticParams() {
  return Object.keys(EXAMS).map((examId) => ({ examId }));
}

export default async function BreakPage({
  params,
}: {
  params: Promise<{ examId: string }>;
}) {
  const { examId } = await params;
  return <BreakPageClient examId={examId} />;
}
