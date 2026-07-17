import type { FlashcardDeck } from "@/lib/types";

/**
 * Bio/Biochem deck: enzyme kinetics and core metabolism (FC1, bio-biochem).
 * Original content.
 */
export const metabolismEnzymesDeck: FlashcardDeck = {
  id: "metabolism-enzymes",
  title: "Metabolism & Enzymes",
  description:
    "Enzyme kinetics, inhibition patterns, and the key steps of central metabolism.",
  sectionKey: "bio-biochem",
  foundationalConcept: "fc1",
  cards: [
    {
      id: "me-km-meaning",
      deckId: "metabolism-enzymes",
      front: "In Michaelis–Menten kinetics, what does Km represent?",
      back: "Km is the substrate concentration at which the reaction runs at half of Vmax. A low Km means high affinity (little substrate needed to reach half-max velocity).",
      hint: "It's a substrate concentration, and lower = tighter binding.",
      foundationalConcept: "fc1",
    },
    {
      id: "me-competitive",
      deckId: "metabolism-enzymes",
      front:
        "How does a competitive inhibitor affect Vmax and apparent Km?",
      back: "Vmax is unchanged (excess substrate can outcompete the inhibitor) while apparent Km increases (more substrate needed to reach half-max). Competitive inhibitors bind the active site.",
      hint: "Overcome by adding more substrate.",
      foundationalConcept: "fc1",
    },
    {
      id: "me-noncompetitive",
      deckId: "metabolism-enzymes",
      front:
        "How does a pure noncompetitive inhibitor affect Vmax and Km?",
      back: "Vmax decreases (functional enzyme is effectively removed) while Km is unchanged. Noncompetitive inhibitors bind an allosteric site, not the active site, so more substrate can't reverse them.",
      hint: "Binds away from the active site; can't be outcompeted.",
      foundationalConcept: "fc1",
    },
    {
      id: "me-glycolysis-net",
      deckId: "metabolism-enzymes",
      front:
        "What is the net ATP and NADH yield of glycolysis per glucose, and where does it occur?",
      back: "Per glucose: net 2 ATP (4 produced − 2 invested) and 2 NADH, plus 2 pyruvate. Glycolysis occurs in the cytoplasm and does not require oxygen.",
      hint: "Cytoplasmic; net 2 ATP.",
      foundationalConcept: "fc1",
    },
    {
      id: "me-rate-limiting-glyc",
      deckId: "metabolism-enzymes",
      front: "What is the committed, rate-limiting enzyme of glycolysis, and how is it regulated?",
      back: "Phosphofructokinase-1 (PFK-1). It is inhibited by ATP and citrate (energy abundance) and activated by AMP and fructose-2,6-bisphosphate (energy demand).",
      hint: "It phosphorylates fructose-6-phosphate.",
      foundationalConcept: "fc1",
    },
    {
      id: "me-etc-location",
      deckId: "metabolism-enzymes",
      front:
        "Where does the electron transport chain occur, and what is the final electron acceptor?",
      back: "The inner mitochondrial membrane. Oxygen is the final electron acceptor, being reduced to water. The chain builds the proton gradient that drives ATP synthase.",
      hint: "Think of what you breathe in.",
      foundationalConcept: "fc1",
    },
    {
      id: "me-cofactor-vitamins",
      deckId: "metabolism-enzymes",
      front:
        "NAD⁺ and FAD are electron carriers derived from which vitamins?",
      back: "NAD⁺ is derived from niacin (vitamin B3); FAD is derived from riboflavin (vitamin B2). Both shuttle electrons to the electron transport chain.",
      hint: "Both are B vitamins.",
      foundationalConcept: "fc1",
    },
    {
      id: "me-allosteric",
      deckId: "metabolism-enzymes",
      front: "What is feedback inhibition in a metabolic pathway?",
      back: "The pathway's end product allosterically inhibits an early, committed enzyme, preventing overproduction. It's a negative-feedback control common at rate-limiting steps.",
      hint: "The product shuts off its own production line.",
      foundationalConcept: "fc1",
    },
    {
      id: "me-cooperativity",
      deckId: "metabolism-enzymes",
      front:
        "What does a sigmoidal (S-shaped) velocity-vs-substrate curve indicate about an enzyme?",
      back: "Cooperative binding among multiple subunits (like hemoglobin's O₂ binding). Substrate binding at one site increases affinity at others, unlike the hyperbolic curve of a simple Michaelis–Menten enzyme.",
      hint: "Think hemoglobin, not myoglobin.",
      foundationalConcept: "fc1",
    },
  ],
};
