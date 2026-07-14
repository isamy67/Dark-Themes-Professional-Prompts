import { notFound } from "next/navigation";
import { LessonLayout } from "@/components/learn/LessonLayout";
import { TopicSidebarNav } from "@/components/learn/TopicSidebarNav";
import {
  getFoundationalConcept,
  getLessonMdxComponent,
  getLessonTopicBySlug,
  getLessonTopicsForConcept,
} from "@/lib/content";
import { sectionKeySchema } from "@/lib/types";

export default async function LearnTopicPage({
  params,
}: {
  params: Promise<{ sectionSlug: string; fcSlug: string; topicSlug: string }>;
}) {
  const { sectionSlug, fcSlug, topicSlug } = await params;
  const parsed = sectionKeySchema.safeParse(sectionSlug);
  if (!parsed.success) notFound();
  const sectionKey = parsed.data;

  const fc = getFoundationalConcept(fcSlug);
  if (!fc || fc.sectionKey !== sectionKey) notFound();

  const topic = getLessonTopicBySlug(sectionKey, fcSlug, topicSlug);
  if (!topic) notFound();

  const siblingTopics = getLessonTopicsForConcept(fcSlug);
  const MdxContent = getLessonMdxComponent(topic.id);

  return (
    <LessonLayout
      topic={topic}
      sectionSlug={sectionSlug}
      fcSlug={fcSlug}
      sidebar={
        <TopicSidebarNav
          sectionSlug={sectionSlug}
          fcSlug={fcSlug}
          fcTitle={fc.title}
          topics={siblingTopics}
          currentTopicSlug={topicSlug}
        />
      }
    >
      {MdxContent ? (
        // Resolved from a static per-topic registry (content/lessons/*/manifest.ts) —
        // a stable existing component reference, not one created during render.
        // eslint-disable-next-line react-hooks/static-components
        <MdxContent />
      ) : (
        <p className="text-sm italic text-muted-foreground">
          Full lesson content for this topic is being written — check back
          soon.
        </p>
      )}
    </LessonLayout>
  );
}
