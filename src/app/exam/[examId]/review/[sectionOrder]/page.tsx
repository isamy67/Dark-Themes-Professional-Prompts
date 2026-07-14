import { ReviewPageClient } from "./ReviewPageClient";

export default async function ReviewPage({
  params,
}: {
  params: Promise<{ examId: string; sectionOrder: string }>;
}) {
  const { examId, sectionOrder } = await params;
  return <ReviewPageClient examId={examId} sectionOrder={Number(sectionOrder)} />;
}
