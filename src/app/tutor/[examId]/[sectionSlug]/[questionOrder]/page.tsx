import { EXAMS } from "@/lib/examConfig";
import { getQuestionsForSection } from "@/lib/content";
import { TutorQuestionPageClient } from "./TutorQuestionPageClient";

export function generateStaticParams() {
  return Object.entries(EXAMS).flatMap(([examId, exam]) =>
    exam.sections.flatMap((s) => {
      const count = getQuestionsForSection(s.contentModuleId).length;
      return Array.from({ length: count }, (_, i) => ({
        examId,
        sectionSlug: s.id,
        questionOrder: String(i),
      }));
    }),
  );
}

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
