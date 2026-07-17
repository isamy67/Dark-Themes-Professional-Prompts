import type { FlashcardDeck } from "@/lib/types";

/**
 * Chem/Phys deck: high-yield general chemistry facts (FC5, chem-phys).
 * Original content.
 */
export const genChemEssentialsDeck: FlashcardDeck = {
  id: "gen-chem-essentials",
  title: "General Chemistry Essentials",
  description:
    "Acid–base, thermodynamics, kinetics, and periodic trends the MCAT loves to test.",
  sectionKey: "chem-phys",
  foundationalConcept: "fc5",
  cards: [
    {
      id: "gc-ph-def",
      deckId: "gen-chem-essentials",
      front: "Define pH and give the pH of a solution with [H⁺] = 1 × 10⁻⁴ M.",
      back: "pH = −log[H⁺]. For [H⁺] = 1 × 10⁻⁴ M, pH = 4.",
      hint: "Take the negative log of the exponent.",
      foundationalConcept: "fc5",
    },
    {
      id: "gc-henderson",
      deckId: "gen-chem-essentials",
      front:
        "Write the Henderson–Hasselbalch equation. What is the pH when [A⁻] = [HA]?",
      back: "pH = pKa + log([A⁻]/[HA]). When [A⁻] = [HA], the log term is log(1) = 0, so pH = pKa — the point of maximum buffering.",
      hint: "log(1) = 0.",
      foundationalConcept: "fc5",
    },
    {
      id: "gc-gibbs",
      deckId: "gen-chem-essentials",
      front:
        "Write the Gibbs free energy equation and state what sign of ΔG makes a reaction spontaneous.",
      back: "ΔG = ΔH − TΔS. A reaction is spontaneous (thermodynamically favorable) when ΔG < 0.",
      hint: "Negative ΔG is spontaneous.",
      foundationalConcept: "fc5",
    },
    {
      id: "gc-entropy",
      deckId: "gen-chem-essentials",
      front:
        "Which phase changes increase entropy (ΔS > 0)?",
      back: "Processes that increase molecular disorder/freedom: melting (solid→liquid), vaporization (liquid→gas), and sublimation (solid→gas). Gas formation gives the largest entropy increase.",
      hint: "More freedom of motion = more entropy.",
      foundationalConcept: "fc5",
    },
    {
      id: "gc-le-chatelier",
      deckId: "gen-chem-essentials",
      front:
        "By Le Châtelier's principle, which way does an equilibrium shift when you add more product?",
      back: "It shifts toward the reactants (to the left) to consume the added product and relieve the stress.",
      hint: "The system opposes the change you imposed.",
      foundationalConcept: "fc5",
    },
    {
      id: "gc-rate-catalyst",
      deckId: "gen-chem-essentials",
      front:
        "How does a catalyst change a reaction's rate and its equilibrium position?",
      back: "A catalyst lowers the activation energy, speeding both forward and reverse rates equally. It does NOT change the equilibrium position or ΔG — only how fast equilibrium is reached.",
      hint: "It speeds arrival at equilibrium, not where equilibrium lies.",
      foundationalConcept: "fc5",
    },
    {
      id: "gc-electroneg-trend",
      deckId: "gen-chem-essentials",
      front:
        "Describe the periodic trend in electronegativity across a period and down a group.",
      back: "Electronegativity increases left→right across a period (greater nuclear charge, smaller radius) and decreases down a group (electrons farther from the nucleus). Fluorine is the most electronegative element.",
      hint: "Peaks at the top-right (excluding noble gases).",
      foundationalConcept: "fc5",
    },
    {
      id: "gc-oxidation",
      deckId: "gen-chem-essentials",
      front: "Define oxidation and reduction in terms of electrons (use a mnemonic).",
      back: "OIL RIG: Oxidation Is Loss of electrons, Reduction Is Gain of electrons. The oxidizing agent is itself reduced; the reducing agent is itself oxidized.",
      hint: "OIL RIG.",
      foundationalConcept: "fc5",
    },
    {
      id: "gc-ideal-gas",
      deckId: "gen-chem-essentials",
      front:
        "State the ideal gas law and what happens to volume if temperature (in K) doubles at constant pressure.",
      back: "PV = nRT. At constant P and n, V ∝ T, so doubling the absolute temperature doubles the volume (Charles's law).",
      hint: "Volume is proportional to absolute temperature.",
      foundationalConcept: "fc5",
    },
  ],
};
