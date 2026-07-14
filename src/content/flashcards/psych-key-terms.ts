import type { FlashcardDeck } from "@/lib/types";

/**
 * Psychology & Sociology deck: high-yield term definitions spanning learning,
 * cognition, social behavior, and stratification (psych-soc). Original content.
 */
export const psychKeyTermsDeck: FlashcardDeck = {
  id: "psych-key-terms",
  title: "Psych/Soc Key Terms",
  description:
    "Definitions of high-yield psychology and sociology terms tested on the MCAT.",
  sectionKey: "psych-soc",
  foundationalConcept: "fc7",
  cards: [
    {
      id: "ps-fae",
      deckId: "psych-key-terms",
      front: "Define the fundamental attribution error.",
      back: "The tendency to over-attribute other people's behavior to their disposition (personality) while underweighting the situational forces acting on them.",
      hint: "It is a bias in attribution theory.",
      foundationalConcept: "fc7",
    },
    {
      id: "ps-dissonance",
      deckId: "psych-key-terms",
      front: "What is cognitive dissonance?",
      back: "The mental discomfort of holding contradictory attitudes, or acting in a way that conflicts with one's beliefs, which motivates a change in attitude or behavior to reduce the tension.",
      hint: "Associated with Leon Festinger.",
      foundationalConcept: "fc7",
    },
    {
      id: "ps-operant",
      deckId: "psych-key-terms",
      front: "Define operant conditioning and name the researcher most associated with it.",
      back: "Learning in which the frequency of a voluntary behavior is shaped by its consequences — reinforcement increases it, punishment decreases it. B. F. Skinner is its central figure.",
      hint: "Behavior is driven by its consequences.",
      foundationalConcept: "fc6",
    },
    {
      id: "ps-assim-accom",
      deckId: "psych-key-terms",
      front: "Distinguish assimilation from accommodation in Piaget's theory.",
      back: "Assimilation interprets new information using an existing schema; accommodation modifies or creates a schema when new information does not fit.",
      hint: "One changes the schema; one does not.",
      foundationalConcept: "fc6",
    },
    {
      id: "ps-social-facilitation",
      deckId: "psych-key-terms",
      front: "What is social facilitation?",
      back: "The effect whereby the presence of others improves performance on simple or well-practiced tasks but worsens performance on complex or unfamiliar ones.",
      hint: "It depends on how well-learned the task is.",
      foundationalConcept: "fc7",
    },
    {
      id: "ps-stereotype-threat",
      deckId: "psych-key-terms",
      front: "Define stereotype threat.",
      back: "The anxiety of potentially confirming a negative stereotype about one's own group, which can itself depress performance on a stereotype-relevant task.",
      hint: "Studied extensively by Claude Steele.",
      foundationalConcept: "fc7",
    },
    {
      id: "ps-ses",
      deckId: "psych-key-terms",
      front: "What does socioeconomic status (SES) comprise?",
      back: "A composite measure of a person's or group's social position, combining income, educational attainment, and occupational prestige — not income alone.",
      hint: "It has three main components.",
      foundationalConcept: "fc8",
    },
    {
      id: "ps-ascribed-achieved",
      deckId: "psych-key-terms",
      front: "Distinguish ascribed status from achieved status.",
      back: "Ascribed status is assigned involuntarily, usually at birth (e.g., sex, race, family of origin); achieved status is earned through one's own actions or choices (e.g., physician, spouse).",
      hint: "One is beyond your control; one is earned.",
      foundationalConcept: "fc8",
    },
    {
      id: "ps-sick-role",
      deckId: "psych-key-terms",
      front: "Describe Parsons's 'sick role.'",
      back: "A functionalist concept: a sick person is temporarily exempt from normal duties and not blamed for being ill, but in exchange is expected to want to recover and to seek competent help.",
      hint: "It comes with both rights and obligations.",
      foundationalConcept: "fc8",
    },
  ],
};
