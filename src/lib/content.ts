import type { ComponentType } from "react";
import { sectionContentSchema, type Passage, type Question, type SectionContent } from "@/lib/types";
import { EXAMS, getExamMeta } from "@/lib/examConfig";
import type { ExamMeta, ExamSectionConfig, FoundationalConcept, LessonTopic, SectionKey } from "@/lib/types";

import chemPhysContent from "@/content/exams/exam-1/sections/chem-phys";
import carsContent from "@/content/exams/exam-1/sections/cars";
import bioBiochemContent from "@/content/exams/exam-1/sections/bio-biochem";
import psychSocContent from "@/content/exams/exam-1/sections/psych-soc";

import {
  ALL_FOUNDATIONAL_CONCEPTS,
  ALL_LESSON_TOPICS,
  ALL_MDX_REGISTRY,
} from "@/content/lessons";

/**
 * Raw (unvalidated) content modules, keyed by ExamSectionConfig.contentModuleId.
 * Adding a new exam's content = add its section files here under a new
 * contentModuleId — no other app code changes needed.
 */
const rawSectionContent: Record<string, unknown> = {
  "chem-phys": chemPhysContent,
  cars: carsContent,
  "bio-biochem": bioBiochemContent,
  "psych-soc": psychSocContent,
};

const validatedSectionContentCache = new Map<string, SectionContent>();

/** Validates (once, cached) and returns a section's passages + questions. */
export function getSectionContent(contentModuleId: string): SectionContent {
  const cached = validatedSectionContentCache.get(contentModuleId);
  if (cached) return cached;

  const raw = rawSectionContent[contentModuleId];
  if (!raw) {
    throw new Error(`No content module registered for id "${contentModuleId}"`);
  }
  const parsed = sectionContentSchema.parse(raw);
  validatedSectionContentCache.set(contentModuleId, parsed);
  return parsed;
}

export function getExam(examId: string): ExamMeta {
  const meta = getExamMeta(examId);
  if (!meta) throw new Error(`No exam registered with id "${examId}"`);
  return meta;
}

export function listExams(): ExamMeta[] {
  return Object.values(EXAMS);
}

export function getExamSection(
  examId: string,
  sectionId: string,
): ExamSectionConfig {
  const exam = getExam(examId);
  const section = exam.sections.find((s) => s.id === sectionId);
  if (!section) {
    throw new Error(`Exam "${examId}" has no section with id "${sectionId}"`);
  }
  return section;
}

export function getExamSectionByOrder(
  examId: string,
  sectionOrder: number,
): ExamSectionConfig {
  const exam = getExam(examId);
  const section = exam.sections[sectionOrder];
  if (!section) {
    throw new Error(`Exam "${examId}" has no section at order ${sectionOrder}`);
  }
  return section;
}

export function getPassagesForSection(contentModuleId: string): Passage[] {
  return [...getSectionContent(contentModuleId).passages].sort(
    (a, b) => a.order - b.order,
  );
}

export function getQuestionsForSection(contentModuleId: string): Question[] {
  return [...getSectionContent(contentModuleId).questions].sort(
    (a, b) => a.order - b.order,
  );
}

export function getQuestion(
  contentModuleId: string,
  questionId: string,
): Question | undefined {
  return getSectionContent(contentModuleId).questions.find(
    (q) => q.id === questionId,
  );
}

export function getPassage(
  contentModuleId: string,
  passageId: string,
): Passage | undefined {
  return getSectionContent(contentModuleId).passages.find(
    (p) => p.id === passageId,
  );
}

/** Ordered list of "items" (passage groups + standalone discretes) for section navigation. */
export interface SectionItem {
  passage: Passage | null;
  questions: Question[];
}

export function getSectionItems(contentModuleId: string): SectionItem[] {
  const { passages, questions } = getSectionContent(contentModuleId);
  const byPassageId = new Map<string | null, Question[]>();
  for (const q of questions) {
    const key = q.passageId;
    const list = byPassageId.get(key) ?? [];
    list.push(q);
    byPassageId.set(key, list);
  }

  const items: SectionItem[] = [];
  for (const passage of [...passages].sort((a, b) => a.order - b.order)) {
    const qs = (byPassageId.get(passage.id) ?? []).sort(
      (a, b) => a.order - b.order,
    );
    items.push({ passage, questions: qs });
  }
  const discretes = (byPassageId.get(null) ?? []).sort(
    (a, b) => a.order - b.order,
  );
  if (discretes.length > 0) {
    items.push({ passage: null, questions: discretes });
  }
  return items;
}

// ---------------------------------------------------------------------------
// Learn section: Foundational Concepts / CARS skill areas + lesson topics
// ---------------------------------------------------------------------------

export function getFoundationalConceptsForSection(
  sectionKey: SectionKey,
): FoundationalConcept[] {
  return ALL_FOUNDATIONAL_CONCEPTS.filter((fc) => fc.sectionKey === sectionKey).sort(
    (a, b) => a.number - b.number,
  );
}

export function getFoundationalConcept(
  fcId: string,
): FoundationalConcept | undefined {
  return ALL_FOUNDATIONAL_CONCEPTS.find((fc) => fc.id === fcId);
}

export function getLessonTopicsForConcept(fcId: string): LessonTopic[] {
  const fc = getFoundationalConcept(fcId);
  if (!fc) return [];
  return fc.topicIds
    .map((id) => ALL_LESSON_TOPICS.find((t) => t.id === id))
    .filter((t): t is LessonTopic => t !== undefined);
}

export function getLessonTopic(topicId: string): LessonTopic | undefined {
  return ALL_LESSON_TOPICS.find((t) => t.id === topicId);
}

export function getLessonTopicBySlug(
  sectionKey: SectionKey,
  fcId: string,
  topicSlug: string,
): LessonTopic | undefined {
  return ALL_LESSON_TOPICS.find(
    (t) =>
      t.sectionKey === sectionKey &&
      t.foundationalConceptId === fcId &&
      t.slug === topicSlug,
  );
}

export function getLessonMdxComponent(topicId: string): ComponentType | undefined {
  return ALL_MDX_REGISTRY[topicId];
}
