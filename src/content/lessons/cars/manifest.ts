import type { ComponentType } from "react";
import type { FoundationalConcept, LessonTopic } from "@/lib/types";
import ReadingStrategy from "./foundations-of-comprehension/reading-strategy.mdx";
import ReasoningStrategy from "./reasoning-within-the-text/reasoning-strategy.mdx";
import StrengthenWeakenStrategy from "./reasoning-beyond-the-text/strengthen-weaken-strategy.mdx";

/**
 * CARS has no content knowledge to test — AAMC organizes it into three
 * reading/reasoning SKILL areas instead of numbered Foundational Concepts.
 * Modeled with the same FoundationalConcept shape (number 1-3, used only
 * for display order) so the Learn section's routing/rendering is uniform
 * across all four tested sections.
 */
export const foundationalConcepts: FoundationalConcept[] = [
  {
    id: "foundations-of-comprehension",
    sectionKey: "cars",
    number: 1,
    title: "Foundations of Comprehension",
    description:
      "Understanding what a passage states directly, and the most immediate, direct implications of that stated information.",
    topicIds: ["foundations-of-comprehension-reading-strategy"],
  },
  {
    id: "reasoning-within-the-text",
    sectionKey: "cars",
    number: 2,
    title: "Reasoning Within the Text",
    description:
      "Integrating information across a passage — tone, argument structure, and the function of specific details — to reason beyond a single stated sentence.",
    topicIds: ["reasoning-within-the-text-strategy"],
  },
  {
    id: "reasoning-beyond-the-text",
    sectionKey: "cars",
    number: 3,
    title: "Reasoning Beyond the Text",
    description:
      "Applying the passage's ideas to new situations, and evaluating how new information would strengthen or weaken the author's argument.",
    topicIds: ["reasoning-beyond-the-text-strategy"],
  },
];

export const lessonTopics: LessonTopic[] = [
  {
    id: "foundations-of-comprehension-reading-strategy",
    sectionKey: "cars",
    foundationalConceptId: "foundations-of-comprehension",
    slug: "reading-strategy",
    title: "Reading for Structure and Stated Meaning",
    summary:
      "How to read a dense CARS passage efficiently the first time, tracking structure and the author's stated claims before questions demand it.",
    highYield: [
      "Read for the passage's ARGUMENT, not every fact — track what the author claims and why, paragraph by paragraph.",
      "Identify the thesis early; most CARS passages state or strongly imply it in the first or second paragraph.",
      "Watch for structural signal words (however, moreover, in contrast) — they mark shifts in the argument.",
      "A 'detail' question's answer is almost always directly stated; don't outside-knowledge yourself into a wrong answer.",
    ],
    mdxPath: "cars/foundations-of-comprehension/reading-strategy.mdx",
    clinicalCorrelation: {
      title: "Why this matters: reading a dense consult note under time pressure",
      vignette:
        "A physician reading a subspecialist's consult note has to extract the actual clinical recommendation and its stated rationale from dense, qualification-heavy prose, often under real time pressure between patients.",
      tieIn:
        "The same skill CARS is testing — separating an author's core claim from supporting detail and hedge language, quickly and accurately — is a literal, transferable clinical-reading skill, not just a test-taking trick.",
    },
    expandable: false,
  },
  {
    id: "reasoning-within-the-text-strategy",
    sectionKey: "cars",
    foundationalConceptId: "reasoning-within-the-text",
    slug: "reasoning-strategy",
    title: "Inference, Tone, and Argument Structure",
    summary:
      "How to answer main-point, function, and inference questions by reasoning about the passage's structure rather than isolated sentences.",
    highYield: [
      "A 'main point' answer must be broad enough to cover the WHOLE passage's arc, not just one paragraph's detail.",
      "'Function' questions ask why the author included something — look at the sentence right before and after it.",
      "Inference questions require a claim that MUST be true given the passage, not merely a plausible or likely one.",
      "Author tone (skeptical, sympathetic, neutral) is usually signaled by word choice and hedging, not stated outright.",
    ],
    mdxPath: "cars/reasoning-within-the-text/reasoning-strategy.mdx",
    clinicalCorrelation: {
      title: "Why this matters: evaluating a colleague's clinical argument",
      vignette:
        "When a colleague argues for a particular treatment approach in a case discussion, evaluating that argument well means identifying its actual claim, the evidence offered for it, and any hedges or qualifications — not just agreeing or disagreeing on gut instinct.",
      tieIn:
        "This lesson's approach to identifying an author's main point and the function of their supporting details is the same critical-reasoning skill applied to any argumentative text, clinical or academic.",
    },
    expandable: false,
  },
  {
    id: "reasoning-beyond-the-text-strategy",
    sectionKey: "cars",
    foundationalConceptId: "reasoning-beyond-the-text",
    slug: "strengthen-weaken-strategy",
    title: "Applying, Strengthening, and Weakening Arguments",
    summary:
      "How to evaluate hypothetical new information against an author's argument, and apply the passage's logic to an unfamiliar scenario.",
    highYield: [
      "A 'strengthen' answer must make the author's ACTUAL conclusion more likely to be true — not just be generally supportive.",
      "A 'weaken' answer attacks a premise or the link between premise and conclusion, not a straw-man version of the argument.",
      "'Apply' questions ask you to find the situation that best matches the passage's underlying principle, not just its topic.",
      "Answer choices that are true but irrelevant to the argument's logic are a common trap — relevance matters as much as truth.",
    ],
    mdxPath: "cars/reasoning-beyond-the-text/strengthen-weaken-strategy.mdx",
    clinicalCorrelation: {
      title: "Why this matters: evaluating whether new evidence changes a diagnosis",
      vignette:
        "When a new lab result or imaging finding comes back, a clinician has to decide whether it strengthens, weakens, or is simply irrelevant to the leading diagnosis — not every new piece of information changes the picture.",
      tieIn:
        "That is exactly the skill 'strengthen/weaken' CARS questions are testing in the abstract: judging whether a new piece of information actually bears on a specific claim's truth, a core piece of clinical and scientific reasoning.",
    },
    expandable: false,
  },
];

export const mdxRegistry: Record<string, ComponentType> = {
  "foundations-of-comprehension-reading-strategy": ReadingStrategy,
  "reasoning-within-the-text-strategy": ReasoningStrategy,
  "reasoning-beyond-the-text-strategy": StrengthenWeakenStrategy,
};
