import Link from "next/link";
import { clsx } from "clsx";
import type { LessonTopic } from "@/lib/types";

export interface TopicSidebarNavProps {
  sectionSlug: string;
  fcSlug: string;
  fcTitle: string;
  topics: LessonTopic[];
  currentTopicSlug: string;
}

export function TopicSidebarNav({
  sectionSlug,
  fcSlug,
  fcTitle,
  topics,
  currentTopicSlug,
}: TopicSidebarNavProps) {
  return (
    <nav aria-label={`${fcTitle} topics`} className="flex flex-col gap-1">
      <p className="mb-2 font-mono text-xs tracking-wide text-muted-foreground">
        {fcTitle.toUpperCase()}
      </p>
      {topics.map((topic) => {
        const isCurrent = topic.slug === currentTopicSlug;
        return (
          <Link
            key={topic.id}
            href={`/learn/${sectionSlug}/${fcSlug}/${topic.slug}`}
            aria-current={isCurrent || undefined}
            className={clsx(
              "rounded-md px-3 py-2 text-sm transition-colors",
              isCurrent
                ? "bg-accent-muted font-medium text-accent"
                : "text-muted-foreground hover:bg-white/5 hover:text-foreground",
            )}
          >
            {topic.title}
          </Link>
        );
      })}
    </nav>
  );
}
