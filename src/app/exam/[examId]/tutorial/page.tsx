import { EXAMS } from "@/lib/examConfig";
import { TutorialPageClient } from "./TutorialPageClient";

export function generateStaticParams() {
  return Object.keys(EXAMS).map((examId) => ({ examId }));
}

export default async function TutorialPage({
  params,
}: {
  params: Promise<{ examId: string }>;
}) {
  const { examId } = await params;
  return <TutorialPageClient examId={examId} />;
}
