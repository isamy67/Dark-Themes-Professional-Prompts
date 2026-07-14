import { TutorialPageClient } from "./TutorialPageClient";

export default async function TutorialPage({
  params,
}: {
  params: Promise<{ examId: string }>;
}) {
  const { examId } = await params;
  return <TutorialPageClient examId={examId} />;
}
