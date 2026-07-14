import { SectionIntroPageClient } from "./SectionIntroPageClient";

export default async function ExamRootPage({
  params,
}: {
  params: Promise<{ examId: string }>;
}) {
  const { examId } = await params;
  return <SectionIntroPageClient examId={examId} />;
}
