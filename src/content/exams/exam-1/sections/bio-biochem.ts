import type { SectionContent } from "@/lib/types";

/**
 * FIXTURE CONTENT — placeholder questions used to build/test the exam engine
 * before the full starter-exam authoring pass. Replaced with the full
 * ~12-question bio-biochem set in that pass; do not treat as final content.
 */
const bioBiochemContent: SectionContent = {
  sectionId: "bio-biochem",
  passages: [
    {
      id: "bb-p1",
      sectionId: "bio-biochem",
      order: 0,
      kind: "passage",
      title: "Competitive Inhibition of Hexokinase",
      bodyMarkdown: `Hexokinase catalyzes the first committed step of glycolysis, phosphorylating glucose to glucose-6-phosphate using ATP. Researchers studied the enzyme's kinetics in the presence of 2-deoxyglucose (2-DG), a glucose analog that binds the hexokinase active site but is phosphorylated far more slowly than glucose itself.

In a series of in vitro assays, initial reaction velocity was measured across a range of glucose concentrations, both with and without a fixed concentration of 2-DG present. Without 2-DG, the enzyme displayed a Vmax of 100 μmol/min and a Km of 0.05 mM for glucose. With 2-DG present, the measured Vmax was unchanged at 100 μmol/min, but the apparent Km for glucose increased to 0.20 mM. Doubling the glucose concentration in the presence of 2-DG was sufficient to restore velocity to near the level seen without inhibitor at that same glucose concentration.`,
      questionIds: ["bb-q1", "bb-q2"],
    },
  ],
  questions: [
    {
      id: "bb-q1",
      passageId: "bb-p1",
      sectionId: "bio-biochem",
      order: 0,
      stem: "The kinetic data described in the passage are most consistent with 2-deoxyglucose acting as which type of enzyme inhibitor?",
      choices: [
        { id: "A", text: "Competitive inhibitor", explanation: "Correct. An unchanged Vmax with an increased apparent Km, overcome by adding more substrate, is the classic signature of competitive inhibition." },
        { id: "B", text: "Noncompetitive inhibitor", explanation: "Noncompetitive inhibition lowers Vmax while leaving Km unchanged — the opposite pattern from what's described." },
        { id: "C", text: "Uncompetitive inhibitor", explanation: "Uncompetitive inhibition lowers both Vmax and Km proportionally; here Vmax is unchanged, ruling this out." },
        { id: "D", text: "Irreversible inhibitor", explanation: "Irreversible inhibition permanently inactivates enzyme molecules, which would lower Vmax and could not be overcome by adding more substrate." },
      ],
      correctChoiceId: "A",
      explanationOverall:
        "Competitive inhibitors bind the active site and compete directly with substrate, so their effect can be outcompeted by raising substrate concentration — this raises the apparent Km (more substrate needed to reach half-maximal velocity) while Vmax stays the same, since enough substrate can still eventually saturate the enzyme. Both the unchanged Vmax/increased Km pattern and the passage's statement that doubling glucose largely restored velocity match this mechanism exactly.",
      walkthrough: {
        approachNotes:
          "Enzyme inhibition questions almost always reduce to reading off two numbers, Vmax and Km, and matching their pattern of change to one of four inhibitor types. Memorize the pattern table before test day: competitive (Km↑, Vmax same), noncompetitive (Km same, Vmax↓), uncompetitive (both ↓), mixed (both change, not proportionally).",
        steps: [
          "Extract the two key facts: Vmax unchanged (100 → 100), Km increased (0.05 → 0.20 mM).",
          "Recall the inhibitor-type pattern table: unchanged Vmax + increased Km = competitive inhibition.",
          "Cross-check with the passage's extra clue: velocity was restored by adding more substrate — exactly what you'd expect if the inhibitor is competing with substrate for the same site.",
          "Confirm this rules out noncompetitive (would lower Vmax) and uncompetitive (would lower both).",
        ],
      },
      category: { foundationalConcept: "FC1", contentCategory: "1D", skill: "data-based reasoning" },
      difficulty: "medium",
    },
    {
      id: "bb-q2",
      passageId: "bb-p1",
      sectionId: "bio-biochem",
      order: 1,
      stem: "Given that 2-DG binds the hexokinase active site but is phosphorylated far more slowly than glucose, which structural feature of 2-DG most plausibly explains this difference in reaction rate?",
      choices: [
        { id: "A", text: "2-DG lacks the hydroxyl group at the second carbon that is normally positioned for the phosphoryl transfer step.", explanation: "Correct. 2-deoxyglucose is missing the C2 hydroxyl group present in glucose; since hexokinase phosphorylates the C6 hydroxyl (not C2), the relevant structural difference instead alters active-site fit/orientation enough to slow, but not prevent, catalysis — consistent with 2-DG still binding but reacting slowly." },
        { id: "B", text: "2-DG is phosphorylated at a different carbon than glucose, requiring a distinct catalytic mechanism.", explanation: "Hexokinase phosphorylates the same C6 position on 2-DG as it does on glucose; the mechanism used is the same, just slower." },
        { id: "C", text: "2-DG has a molecular weight too large to fit the hexokinase active site.", explanation: "The passage states 2-DG does bind the active site, and removing one hydroxyl group makes 2-DG smaller than glucose, not larger." },
        { id: "D", text: "2-DG forms a covalent bond with hexokinase that permanently blocks the active site.", explanation: "This would describe irreversible inhibition, which contradicts the passage's kinetic evidence (Vmax unaffected, effect overcome by excess substrate)." },
      ],
      correctChoiceId: "A",
      explanationOverall:
        "2-deoxyglucose differs from glucose only by the absence of the hydroxyl group at carbon 2. Because it still binds the active site but is processed much more slowly, the missing hydroxyl must subtly disrupt the precise positioning/transition-state stabilization the enzyme relies on for efficient catalysis, without preventing binding altogether — a useful reminder that competitive inhibitors are often substrate analogs that fit but don't react well.",
      walkthrough: {
        approachNotes:
          "When a passage describes a 'glucose analog,' expect the question to test whether you can reason about how a small structural change affects binding versus catalysis. Binding and catalysis are separable — a molecule can bind well but react poorly if the change affects the transition state rather than the initial fit.",
        steps: [
          "Recall that 2-deoxyglucose is glucose missing the C2 hydroxyl (this is testable background knowledge the passage assumes).",
          "Note the passage's clue: 2-DG binds the active site (so gross steric fit isn't the issue) but is phosphorylated slowly (so catalysis, not binding, is impaired).",
          "Eliminate choices describing binding failure (C) or irreversible/covalent blockage (D), since both contradict 'binds the active site' and the competitive kinetic pattern.",
          "Eliminate B, since hexokinase's phosphorylation site is C6 on both molecules — the mechanism itself isn't different.",
          "A is the only choice that explains slowed catalysis without contradicting the passage's binding and kinetic evidence.",
        ],
      },
      category: { foundationalConcept: "FC1", contentCategory: "1A", skill: "structure-function reasoning" },
      difficulty: "hard",
    },
  ],
};

export default bioBiochemContent;
