import { EXAMS } from "@/lib/examConfig";
import { SectionIntroPageClient } from "./SectionIntroPageClient";

export function generateStaticParams() {
  return Object.keys(EXAMS).map((examId) => ({ examId }));
}

export default async function ExamRootPage({
  params,
}: {
  params: Promise<{ examId: string }>;
}) {
  const { examId } = await params;
  return <SectionIntroPageClient examId={examId} />;
}
