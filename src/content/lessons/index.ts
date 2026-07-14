import type { ComponentType } from "react";
import type { FoundationalConcept, LessonTopic, SectionKey } from "@/lib/types";
import * as bioBiochem from "./bio-biochem/manifest";
import * as chemPhys from "./chem-phys/manifest";
import * as psychSoc from "./psych-soc/manifest";
import * as cars from "./cars/manifest";

const SECTIONS = [bioBiochem, chemPhys, psychSoc, cars];

export const ALL_FOUNDATIONAL_CONCEPTS: FoundationalConcept[] = SECTIONS.flatMap(
  (s) => s.foundationalConcepts,
).sort((a, b) => a.number - b.number);

export const ALL_LESSON_TOPICS: LessonTopic[] = SECTIONS.flatMap(
  (s) => s.lessonTopics,
);

export const ALL_MDX_REGISTRY: Record<string, ComponentType> = Object.assign(
  {},
  ...SECTIONS.map((s) => s.mdxRegistry),
);

export const LEARN_SECTION_ORDER: SectionKey[] = [
  "bio-biochem",
  "chem-phys",
  "psych-soc",
  "cars",
];

export const SECTION_DISPLAY_NAMES: Record<SectionKey, string> = {
  "bio-biochem": "Biological and Biochemical Foundations of Living Systems",
  "chem-phys": "Chemical and Physical Foundations of Biological Systems",
  "psych-soc": "Psychological, Social, and Biological Foundations of Behavior",
  cars: "Critical Analysis and Reasoning Skills",
};
