import { VoidPageClient } from "./VoidPageClient";

export default async function VoidPage({
  params,
}: {
  params: Promise<{ examId: string }>;
}) {
  const { examId } = await params;
  return <VoidPageClient examId={examId} />;
}
