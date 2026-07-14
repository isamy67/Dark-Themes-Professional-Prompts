import { TutorQuestionPageClient } from "./TutorQuestionPageClient";

export default async function TutorQuestionPage({
  params,
}: {
  params: Promise<{ examId: string; sectionSlug: string; questionOrder: string }>;
}) {
  const { examId, sectionSlug, questionOrder } = await params;
  return (
    <TutorQuestionPageClient
      examId={examId}
      sectionSlug={sectionSlug}
      questionOrder={Number(questionOrder)}
    />
  );
}
