import { EXAMS } from "@/lib/examConfig";
import { VoidPageClient } from "./VoidPageClient";

export function generateStaticParams() {
  return Object.keys(EXAMS).map((examId) => ({ examId }));
}

export default async function VoidPage({
  params,
}: {
  params: Promise<{ examId: string }>;
}) {
  const { examId } = await params;
  return <VoidPageClient examId={examId} />;
}
