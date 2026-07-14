import { BreakPageClient } from "./BreakPageClient";

export default async function BreakPage({
  params,
}: {
  params: Promise<{ examId: string }>;
}) {
  const { examId } = await params;
  return <BreakPageClient examId={examId} />;
}
