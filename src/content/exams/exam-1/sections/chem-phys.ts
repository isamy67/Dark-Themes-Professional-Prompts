import type { SectionContent } from "@/lib/types";

/**
 * FIXTURE CONTENT — placeholder questions used to build/test the exam engine
 * before the full starter-exam authoring pass. Replaced with the full
 * ~12-question chem-phys set in that pass; do not treat as final content.
 */
const chemPhysContent: SectionContent = {
  sectionId: "chem-phys",
  passages: [
    {
      id: "cp-p1",
      sectionId: "chem-phys",
      order: 0,
      kind: "passage",
      title: "Buffer Capacity in Blood Plasma",
      bodyMarkdown: `Blood plasma pH is tightly maintained near 7.4 by the carbonic acid–bicarbonate buffer system:

$$CO_2 + H_2O \\rightleftharpoons H_2CO_3 \\rightleftharpoons H^+ + HCO_3^-$$

A researcher titrates a 1.0 L sample of plasma-like buffer (initial [HCO₃⁻] = 24 mM, [H₂CO₃] = 1.2 mM, pKa = 6.1) with small aliquots of strong acid while monitoring pH with a calibrated electrode. The buffer's capacity is greatest when the concentrations of conjugate acid and base are approximately equal, and capacity falls off sharply once the ratio of the two species exceeds roughly 10:1 in either direction.`,
      questionIds: ["cp-q1", "cp-q2"],
    },
  ],
  questions: [
    {
      id: "cp-q1",
      passageId: "cp-p1",
      sectionId: "chem-phys",
      order: 0,
      stem: "Using the Henderson–Hasselbalch equation, what is the pH of the plasma sample described in the passage before any acid is added?",
      choices: [
        { id: "A", text: "6.1", explanation: "This is pKa itself, which would only be the pH if [HCO₃⁻] = [H₂CO₃] (a 1:1 ratio) — not the case here." },
        { id: "B", text: "7.4", explanation: "Correct. pH = pKa + log([HCO₃⁻]/[H₂CO₃]) = 6.1 + log(24/1.2) = 6.1 + log(20) ≈ 6.1 + 1.3 = 7.4." },
        { id: "C", text: "8.3", explanation: "This overshoots the log term; log(20) is approximately 1.3, not 2.2, so this answer likely came from mis-multiplying rather than taking a log." },
        { id: "D", text: "5.3", explanation: "This subtracts the log term instead of adding it, inverting the ratio's effect on pH." },
      ],
      correctChoiceId: "B",
      explanationOverall:
        "The Henderson–Hasselbalch equation, pH = pKa + log([A⁻]/[HA]), converts a known conjugate base/acid ratio directly into pH. Here [HCO₃⁻]/[H₂CO₃] = 24/1.2 = 20, and log(20) ≈ 1.3, giving pH ≈ 7.4 — consistent with normal physiologic plasma pH, which is a useful sanity check on any buffer calculation involving blood.",
      walkthrough: {
        approachNotes:
          "Whenever a passage hands you a conjugate acid/base pair with concentrations and a pKa, expect a Henderson–Hasselbalch calculation. Before computing anything, note that the answer should land near a physiologically sane pH (roughly 6.8–7.8 for blood) — that lets you eliminate outliers immediately.",
        steps: [
          "Identify the conjugate base (HCO₃⁻, 24 mM) and conjugate acid (H₂CO₃, 1.2 mM) from the passage.",
          "Write the Henderson–Hasselbalch equation: pH = pKa + log([base]/[acid]).",
          "Compute the ratio: 24/1.2 = 20.",
          "Estimate log(20): log(20) = log(2) + log(10) ≈ 0.3 + 1 = 1.3.",
          "Add to pKa: 6.1 + 1.3 = 7.4, which matches normal plasma pH and confirms the answer is reasonable.",
        ],
      },
      category: { foundationalConcept: "FC5", contentCategory: "5A", skill: "quantitative reasoning" },
      difficulty: "medium",
    },
    {
      id: "cp-q2",
      passageId: "cp-p1",
      sectionId: "chem-phys",
      order: 1,
      stem: "According to the passage, the buffer will resist further pH change LEAST effectively once the acid titration has consumed enough HCO₃⁻ to bring the [HCO₃⁻]:[H₂CO₃] ratio to approximately:",
      choices: [
        { id: "A", text: "1:1", explanation: "A 1:1 ratio is where buffer capacity is greatest, not least — this is the point of maximum resistance to pH change." },
        { id: "B", text: "3:1", explanation: "This ratio is still well within the effective buffering range described in the passage." },
        { id: "C", text: "15:1", explanation: "Correct. The passage states capacity falls off sharply once the ratio exceeds roughly 10:1, and 15:1 is beyond that threshold." },
        { id: "D", text: "1:3", explanation: "This is the inverse extreme (excess acid) and, while also outside the ideal range, is farther from the ratio produced by titrating with acid starting from 20:1, which passes through values like 15:1 first." },
      ],
      correctChoiceId: "C",
      explanationOverall:
        "The passage directly states that buffer capacity is greatest near a 1:1 ratio and falls off sharply beyond roughly a 10:1 ratio in either direction. Adding acid converts HCO₃⁻ to H₂CO₃, shrinking the ratio from its initial 20:1 toward 1:1 — so it passes through 15:1, which is still outside the effective buffering range and represents comparatively weak buffering.",
      walkthrough: {
        approachNotes:
          "This is a passage-based reasoning question, not a calculation — the answer is stated directly in the passage text. Reread the relevant sentence carefully before choosing, and watch for answer choices that invert the described relationship.",
        steps: [
          "Locate the sentence describing when buffer capacity is weakest: ratio exceeding ~10:1 in either direction.",
          "Compare each answer choice's ratio against that 10:1 threshold.",
          "Eliminate 1:1 (this is the strongest buffering point, the opposite of what's asked).",
          "Eliminate 3:1 (still inside the effective range).",
          "15:1 exceeds the 10:1 threshold, matching the passage's description of weak buffering.",
        ],
      },
      category: { foundationalConcept: "FC5", contentCategory: "5A", skill: "passage-based reasoning" },
      difficulty: "medium",
    },
  ],
};

export default chemPhysContent;
