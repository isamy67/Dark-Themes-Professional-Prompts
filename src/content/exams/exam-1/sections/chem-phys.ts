import type { SectionContent } from "@/lib/types";

/**
 * Full ~12-question chem-phys starter-exam set: buffer chemistry (cp-p1),
 * respiratory gas laws/fluids (cp-p2), electrochemistry (cp-p3), and three
 * standalone discretes spanning thermodynamics, periodic trends, and circuits.
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
    {
      id: "cp-p2",
      sectionId: "chem-phys",
      order: 1,
      kind: "passage",
      title: "Airway Pressure and Flow During Simulated Respiration",
      bodyMarkdown: `During normal quiet inspiration, contraction of the diaphragm increases thoracic cavity volume, which — per Boyle's law — decreases intrapulmonic pressure below atmospheric pressure (760 mmHg at sea level), drawing air into the alveoli. A pulmonology lab modeled this process with a rigid bell jar apparatus containing a balloon (representing a single alveolus) connected to a narrow tube (representing an airway) open to the atmosphere.

In the first trial, the balloon's volume was expanded from 500 mL to 600 mL at constant temperature by slowly lowering a piston, while pressure was recorded with a manometer. In a second trial, the researchers varied airway tube radius while holding the pressure gradient ($\\Delta P$) and airway length constant, and measured the volumetric flow rate ($Q$) of air moving through the tube with a pneumotachograph. The flow data closely followed the relationship predicted by Poiseuille's law,

$$Q = \\frac{\\pi \\Delta P r^4}{8 \\eta L}$$

where $\\eta$ is the viscosity of air and $L$ is airway length. Doubling the tube radius increased flow by a factor of approximately 16, consistent with the fourth-power dependence on radius. The researchers concluded that small reductions in airway radius, such as those caused by bronchoconstriction or mucus accumulation, disproportionately raise resistance to airflow and impair ventilation.`,
      questionIds: ["cp-q3", "cp-q4", "cp-q5", "cp-q6"],
    },
    {
      id: "cp-p3",
      sectionId: "chem-phys",
      order: 2,
      kind: "passage",
      title: "A Galvanic Cell for Studying Concentration Effects on Cell Potential",
      bodyMarkdown: `A galvanic cell was constructed with a zinc electrode immersed in 1.0 M $ZnSO_4(aq)$ and a copper electrode immersed in 1.0 M $CuSO_4(aq)$, connected by a salt bridge and an external wire through a voltmeter. Using standard reduction potentials,

$$Cu^{2+} + 2e^- \\rightarrow Cu \\quad E^\\circ = +0.34\\text{ V}$$
$$Zn^{2+} + 2e^- \\rightarrow Zn \\quad E^\\circ = -0.76\\text{ V}$$

the researchers calculated a standard cell potential and confirmed it matched the voltmeter's initial reading of +1.10 V. In a second trial, the $CuSO_4$ concentration was reduced to 0.010 M while the $ZnSO_4$ concentration was held at 1.0 M and temperature was maintained at 298 K. The measured cell potential in this trial dropped to approximately +1.04 V, consistent with the Nernst equation,

$$E = E^\\circ - \\frac{RT}{nF}\\ln Q$$

where $Q = [Zn^{2+}]/[Cu^{2+}]$ for this two-electron transfer reaction. The researchers noted that as the reaction proceeded, $[Cu^{2+}]$ continued to decrease and $[Zn^{2+}]$ continued to increase, further lowering the measured potential over time as the cell approached equilibrium ($E = 0$).`,
      questionIds: ["cp-q7", "cp-q8", "cp-q9"],
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
    {
      id: "cp-q3",
      passageId: "cp-p2",
      sectionId: "chem-phys",
      order: 2,
      stem: "In the first trial, the balloon (initially at atmospheric pressure, 760 mmHg) was expanded from 500 mL to 600 mL at constant temperature. Assuming the trapped air behaves as an ideal gas, what is the pressure inside the balloon at the new volume?",
      choices: [
        { id: "A", text: "≈ 633 mmHg", explanation: "Correct. By Boyle's law, P₁V₁ = P₂V₂ at constant temperature, so P₂ = (760 mmHg × 500 mL) / 600 mL ≈ 633 mmHg — pressure falls as volume increases." },
        { id: "B", text: "760 mmHg", explanation: "This assumes pressure stays constant as volume changes, which contradicts Boyle's law for a fixed amount of gas at constant temperature." },
        { id: "C", text: "≈ 912 mmHg", explanation: "This results from inverting the volume ratio (760 × 600/500) rather than applying P₁V₁ = P₂V₂ correctly, producing an increase in pressure instead of the expected decrease." },
        { id: "D", text: "500 mmHg", explanation: "This mistakes the new volume value for a pressure reading rather than solving Boyle's law algebraically." },
      ],
      correctChoiceId: "A",
      explanationOverall:
        "Boyle's law states that for a fixed quantity of gas at constant temperature, pressure and volume are inversely proportional (P₁V₁ = P₂V₂). Solving for the final pressure gives P₂ = (760 mmHg)(500 mL)/(600 mL) ≈ 633 mmHg, confirming that expanding the balloon's volume lowers the pressure inside it — the same mechanism that drives inspiration in the lungs.",
      walkthrough: {
        approachNotes:
          "Gas law problems on the MCAT almost always reduce to plugging values into PV = nRT or one of its two-state forms (Boyle's, Charles's, combined gas law); identify which variables are held constant to pick the right form before touching a calculator.",
        steps: [
          "Recognize that temperature and amount of gas are constant, so Boyle's law (P₁V₁ = P₂V₂) applies.",
          "List the knowns: P₁ = 760 mmHg, V₁ = 500 mL, V₂ = 600 mL.",
          "Rearrange to solve for P₂: P₂ = P₁V₁/V₂.",
          "Substitute: P₂ = (760)(500)/600 ≈ 633 mmHg.",
          "Check direction: volume increased, so pressure should decrease — 633 < 760 confirms the answer is physically sensible.",
        ],
      },
      category: { foundationalConcept: "FC4", contentCategory: "4A", skill: "quantitative reasoning" },
      difficulty: "easy",
    },
    {
      id: "cp-q4",
      passageId: "cp-p2",
      sectionId: "chem-phys",
      order: 3,
      stem: "If bronchoconstriction reduces an airway's radius to half its original value while ΔP, air viscosity, and airway length remain unchanged, how does the volumetric flow rate predicted by Poiseuille's law change?",
      choices: [
        { id: "A", text: "It increases by a factor of 2.", explanation: "This treats flow as directly (linearly) proportional to radius, ignoring the fourth-power relationship shown in the passage's equation." },
        { id: "B", text: "It decreases to about 1/16 of its original value.", explanation: "Correct. Since Q ∝ r⁴, halving r multiplies Q by (1/2)⁴ = 1/16, matching the passage's observation that flow scales with the fourth power of radius." },
        { id: "C", text: "It decreases to about 1/2 of its original value.", explanation: "This applies only a first-power relationship between flow and radius, not the fourth-power dependence Poiseuille's law describes." },
        { id: "D", text: "It decreases to about 1/4 of its original value.", explanation: "This applies a second-power (area-based) relationship, which would be correct for cross-sectional area but not for volumetric flow rate under Poiseuille's law." },
      ],
      correctChoiceId: "B",
      explanationOverall:
        "Poiseuille's law shows Q is proportional to r⁴ when ΔP, η, and L are held constant. Halving the radius therefore multiplies flow by (0.5)⁴ = 0.0625, i.e., flow drops to roughly 1/16 of its original value — the same fourth-power sensitivity the passage reports for doubling the radius (a ~16-fold increase).",
      walkthrough: {
        approachNotes:
          "When a variable in a physics equation is raised to a power, compute the effect of a proportional change by raising that same fraction to the power — don't default to a linear (first-power) assumption.",
        steps: [
          "Identify which variable changed (radius) and note that ΔP, η, and L are held constant.",
          "Isolate the radius dependence in Poiseuille's law: Q ∝ r⁴.",
          "Express the change as a fraction: new r = (1/2) × original r.",
          "Raise that fraction to the fourth power: (1/2)⁴ = 1/16.",
          "Conclude that Q falls to about 1/16 of its original value, consistent with the passage's reciprocal 16-fold change when radius was doubled.",
        ],
      },
      category: { foundationalConcept: "FC4", contentCategory: "4B", skill: "quantitative reasoning" },
      difficulty: "medium",
    },
    {
      id: "cp-q5",
      passageId: "cp-p2",
      sectionId: "chem-phys",
      order: 4,
      stem: "A patient with an asthma exacerbation develops mucus plugging that narrows small airways. If the patient's respiratory muscles generate the same pressure gradient (ΔP) as before the exacerbation, which outcome is best supported by the passage's second trial?",
      choices: [
        { id: "A", text: "Flow rate is unaffected, since ΔP determines flow independently of airway radius.", explanation: "This ignores the r⁴ term in Poiseuille's law; the passage shows flow is highly sensitive to radius even when ΔP is unchanged." },
        { id: "B", text: "Flow rate decreases only slightly, since airway length is the dominant factor in resistance.", explanation: "The passage's second trial varied radius, not length, and showed flow changes far too large to be explained by a length-dominant model; radius has the strongest (fourth-power) effect." },
        { id: "C", text: "Flow rate decreases markedly, so the patient must generate a much larger pressure gradient to maintain adequate ventilation, increasing the work of breathing.", explanation: "Correct. Because Q ∝ r⁴, even a modest reduction in radius sharply reduces flow at a fixed ΔP; restoring flow requires a disproportionately larger ΔP, which manifests clinically as increased work of breathing." },
        { id: "D", text: "Flow rate increases because narrower airways speed up airflow.", explanation: "This confuses linear flow velocity (which can rise in a narrowed segment per the continuity equation) with volumetric flow rate, which is what Poiseuille's law describes and what falls sharply as radius decreases." },
      ],
      correctChoiceId: "C",
      explanationOverall:
        "The passage's second trial demonstrates that volumetric flow through an airway is proportional to the fourth power of its radius. A modest narrowing from mucus plugging therefore produces a disproportionately large drop in flow at constant ΔP, meaning the patient must generate substantially higher pressure gradients (more respiratory effort) to move the same volume of air, which is experienced as increased work of breathing.",
      walkthrough: {
        approachNotes:
          "For 'apply the passage's principle to a new clinical scenario' questions, first identify exactly which relationship the passage established, then trace its consequence forward rather than relying on outside physiology intuition alone.",
        steps: [
          "Recall the key relationship from the passage: Q ∝ r⁴ under constant ΔP, η, and L.",
          "Recognize that mucus plugging reduces airway radius r.",
          "Apply the fourth-power relationship: even a small decrease in r causes a large decrease in Q.",
          "Consider what must happen for flow (ventilation) to be restored: ΔP must increase substantially.",
          "Connect a required larger ΔP to the clinical concept of increased work of breathing.",
          "Eliminate choices that assume a linear relationship (A, B) or confuse velocity with flow rate (D).",
        ],
      },
      category: { foundationalConcept: "FC4", contentCategory: "4B", skill: "data-based reasoning" },
      difficulty: "hard",
    },
    {
      id: "cp-q6",
      passageId: "cp-p2",
      sectionId: "chem-phys",
      order: 5,
      stem: "Which of the following correctly identifies the mechanical change that lowers intrapulmonic pressure below atmospheric pressure during normal quiet inspiration, consistent with the physics described in the passage?",
      choices: [
        { id: "A", text: "Contraction of the diaphragm decreases thoracic cavity volume.", explanation: "Diaphragmatic contraction flattens the diaphragm and increases, not decreases, thoracic cavity volume; this choice reverses the actual mechanical effect." },
        { id: "B", text: "Atmospheric pressure outside the body transiently increases.", explanation: "Atmospheric pressure is treated as constant in this scenario; inspiration is driven by a change inside the thorax, not an external pressure change." },
        { id: "C", text: "Surfactant reduces alveolar surface tension during inspiration.", explanation: "Surfactant is physiologically important for keeping alveoli open and reducing the work of breathing, but it is not the Boyle's law mechanism described in the passage that directly lowers intrapulmonic pressure to drive airflow." },
        { id: "D", text: "Thoracic cavity volume increases, which by Boyle's law lowers the pressure of the gas confined within the lungs.", explanation: "Correct. Diaphragm and external intercostal muscle contraction increases thoracic (and thus lung) volume; per Boyle's law, at constant temperature this decreases intrapulmonic pressure below atmospheric pressure, so air flows in." },
      ],
      correctChoiceId: "D",
      explanationOverall:
        "Boyle's law (P₁V₁ = P₂V₂ at constant T) predicts that increasing the volume of a fixed amount of gas decreases its pressure. During inspiration, diaphragmatic contraction increases thoracic and lung volume, which by this relationship lowers intrapulmonic pressure below atmospheric pressure, creating the pressure gradient that draws air into the alveoli.",
      walkthrough: {
        approachNotes:
          "For conceptual physiology-physics questions, translate the biological description ('the diaphragm contracts') into the physical variable it changes ('volume increases') before matching it to the relevant gas law.",
        steps: [
          "Identify the physical principle at play: Boyle's law relates pressure and volume inversely at constant temperature.",
          "Translate the biological event (diaphragm contraction) into its mechanical effect (thoracic volume increases).",
          "Apply Boyle's law: increased volume at constant temperature means decreased pressure.",
          "Match this to the correct choice describing increased thoracic volume lowering intrapulmonic pressure.",
          "Eliminate choices describing the opposite volume change, an external pressure change, or an unrelated mechanism (surfactant).",
        ],
      },
      category: { foundationalConcept: "FC4", contentCategory: "4B", skill: "concept application" },
      difficulty: "easy",
    },
    {
      id: "cp-q7",
      passageId: "cp-p3",
      sectionId: "chem-phys",
      order: 6,
      stem: "In the galvanic cell described in the passage, which half-reaction occurs at the anode, and in which direction do electrons flow through the external circuit?",
      choices: [
        { id: "A", text: "Zn is oxidized at the anode (Zn → Zn²⁺ + 2e⁻); electrons flow through the external circuit from the zinc electrode to the copper electrode.", explanation: "Correct. Zinc has the more negative (less favorable) reduction potential, so it is oxidized at the anode; the released electrons travel through the external wire to the copper cathode, where Cu²⁺ is reduced." },
        { id: "B", text: "Cu is oxidized at the anode (Cu → Cu²⁺ + 2e⁻); electrons flow through the external circuit from the copper electrode to the zinc electrode.", explanation: "This reverses the actual roles; copper has the more positive reduction potential and is preferentially reduced, not oxidized, in this cell." },
        { id: "C", text: "Zn is reduced at the cathode (Zn²⁺ + 2e⁻ → Zn); electrons flow through the external circuit from the copper electrode to the zinc electrode.", explanation: "This misassigns zinc to the cathode; with E° = -0.76 V, zinc's reduction is far less favorable than copper's, so zinc is oxidized (anode), not reduced (cathode)." },
        { id: "D", text: "Cu is reduced at the anode (Cu²⁺ + 2e⁻ → Cu); electrons flow through the external circuit from the zinc electrode to the copper electrode.", explanation: "This correctly identifies the electron flow direction but incorrectly labels copper's reduction as occurring at the anode; by definition, reduction always occurs at the cathode, regardless of which metal is involved." },
      ],
      correctChoiceId: "A",
      explanationOverall:
        "Comparing the standard reduction potentials, Cu²⁺/Cu (+0.34 V) is more positive than Zn²⁺/Zn (-0.76 V), so copper is reduced (cathode) and zinc is oxidized (anode). By convention, electrons released at the anode travel through the external circuit toward the cathode, so electrons flow from the zinc electrode to the copper electrode, generating the +1.10 V standard cell potential given in the passage.",
      walkthrough: {
        approachNotes:
          "For galvanic cell questions, first rank the two half-reactions by standard reduction potential — the more positive one is reduced (cathode), the more negative one is oxidized (anode) — then use anode-to-cathode electron flow to answer any direction question.",
        steps: [
          "List the two standard reduction potentials given in the passage: Cu²⁺/Cu = +0.34 V, Zn²⁺/Zn = -0.76 V.",
          "Identify the reaction with the higher (more positive) reduction potential as the one that proceeds as written (reduction, cathode): copper.",
          "Identify the reaction with the lower reduction potential as the one that runs in reverse (oxidation, anode): zinc.",
          "Apply the definition that oxidation occurs at the anode and reduction at the cathode.",
          "Recall that electrons flow from the anode to the cathode through the external circuit, i.e., from Zn to Cu.",
        ],
      },
      category: { foundationalConcept: "FC4", contentCategory: "4C", skill: "concept application" },
      difficulty: "medium",
    },
    {
      id: "cp-q8",
      passageId: "cp-p3",
      sectionId: "chem-phys",
      order: 7,
      stem: "Which of the following best explains, in terms of the Nernst equation, why decreasing $[Cu^{2+}]$ from 1.0 M to 0.010 M (with $[Zn^{2+}]$ held at 1.0 M) caused the measured cell potential to drop from +1.10 V toward +1.04 V?",
      choices: [
        { id: "A", text: "Decreasing [Cu²⁺] decreases Q, making the ln Q term less negative and increasing E.", explanation: "This gets the direction of change in Q backward: since Q = [Zn²⁺]/[Cu²⁺], a smaller [Cu²⁺] makes Q larger, not smaller." },
        { id: "B", text: "Decreasing [Cu²⁺] increases Q = [Zn²⁺]/[Cu²⁺]; the larger, more positive ln Q term is subtracted from E°, which lowers E.", explanation: "Correct. With [Cu²⁺] in the denominator, reducing it raises Q; because E = E° - (RT/nF)ln Q, a larger positive ln Q subtracts more from E°, producing a lower measured potential, consistent with the passage's data." },
        { id: "C", text: "Reducing the concentration of a reactant always shifts the reaction toward products, which increases the cell's driving force and therefore E.", explanation: "This applies a Le Chatelier-style intuition about equilibrium position but does not correctly predict the effect on cell potential; the passage's own data show E decreased, not increased, when [Cu²⁺] was lowered." },
        { id: "D", text: "The standard reduction potential of the Cu²⁺/Cu half-reaction itself becomes less positive at lower concentration.", explanation: "E° is defined under standard (1 M, 298 K) conditions and is a fixed reference value; it does not change with concentration. Only the actual cell potential E, via the Nernst equation, depends on concentration." },
      ],
      correctChoiceId: "B",
      explanationOverall:
        "The Nernst equation, E = E° - (RT/nF)ln Q, shows that cell potential decreases as the reaction quotient Q increases. Because Q = [Zn²⁺]/[Cu²⁺] for this reaction, lowering [Cu²⁺] while holding [Zn²⁺] constant increases Q, which increases the magnitude of the term subtracted from E° and therefore lowers the measured cell potential — exactly the drop from +1.10 V to +1.04 V reported in the passage.",
      walkthrough: {
        approachNotes:
          "When a question asks 'why did E change,' identify how the manipulated concentration affects Q first, then track the sign of the ln Q term in the Nernst equation rather than reasoning from general equilibrium intuition alone.",
        steps: [
          "Write the reaction quotient as given in the passage: Q = [Zn²⁺]/[Cu²⁺].",
          "Determine how decreasing [Cu²⁺] affects Q: since it's in the denominator, Q increases.",
          "Recall the Nernst equation: E = E° - (RT/nF)ln Q.",
          "Recognize that a larger Q means a larger ln Q, which is subtracted from E°, lowering E.",
          "Confirm this matches the passage's reported drop in potential, and eliminate choices with the wrong direction (A, C) or a mischaracterized E° (D).",
        ],
      },
      category: { foundationalConcept: "FC4", contentCategory: "4C", skill: "data-based reasoning" },
      difficulty: "hard",
    },
    {
      id: "cp-q9",
      passageId: "cp-p3",
      sectionId: "chem-phys",
      order: 8,
      stem: "Using the Nernst equation in the form $E = E^\\circ - \\frac{0.0592}{n}\\log Q$ at 298 K, which calculation correctly reproduces the approximate cell potential measured in the second trial ($[Zn^{2+}] = 1.0$ M, $[Cu^{2+}] = 0.010$ M, $E^\\circ = 1.10$ V, $n = 2$)?",
      choices: [
        { id: "A", text: "$E = 1.10 + \\frac{0.0592}{2}\\log(100) = 1.16$ V", explanation: "This adds the correction term instead of subtracting it, reversing the sign convention in the Nernst equation and predicting an increase in potential instead of the observed decrease." },
        { id: "B", text: "$E = 1.10 - \\frac{0.0592}{2}\\log(0.01) = 1.16$ V", explanation: "This uses Q = 0.01 (the inverse of the correct reaction quotient), which would apply if Q were defined as [Cu²⁺]/[Zn²⁺] rather than the [Zn²⁺]/[Cu²⁺] ratio specified in the passage." },
        { id: "C", text: "$E = 1.10 - \\frac{0.0592}{2}\\log(100) = 1.04$ V", explanation: "Correct. Q = [Zn²⁺]/[Cu²⁺] = 1.0/0.010 = 100, so E = 1.10 - (0.0592/2)(2) = 1.10 - 0.0592 ≈ 1.04 V, matching the passage's reported measurement." },
        { id: "D", text: "$E = 1.10 - 0.0592\\log(100) = 0.94$ V", explanation: "This omits the division by n = 2, over-correcting the potential and yielding a value well below what the passage reports." },
      ],
      correctChoiceId: "C",
      explanationOverall:
        "The reaction quotient is Q = [Zn²⁺]/[Cu²⁺] = 1.0 M / 0.010 M = 100. Substituting into E = E° - (0.0592/n)log Q with n = 2 gives E = 1.10 - (0.0592/2)(log 100) = 1.10 - (0.0296)(2) = 1.10 - 0.0592 ≈ 1.04 V, matching the passage's reported second-trial measurement and confirming the correct setup of both Q and the n-scaling of the correction term.",
      walkthrough: {
        approachNotes:
          "For Nernst equation calculations, first nail down Q using the reaction's actual stoichiometric definition, then carefully track n in the denominator and the subtraction sign before evaluating the logarithm.",
        steps: [
          "Determine Q from the passage's definition: Q = [Zn²⁺]/[Cu²⁺] = 1.0/0.010 = 100.",
          "Take the log: log(100) = 2.",
          "Divide 0.0592 by n = 2 to get the coefficient: 0.0592/2 = 0.0296.",
          "Multiply by log Q: 0.0296 × 2 = 0.0592.",
          "Subtract from E°: 1.10 - 0.0592 ≈ 1.04 V, matching the passage's data and eliminating choices with sign, inversion, or n errors.",
        ],
      },
      category: { foundationalConcept: "FC4", contentCategory: "4C", skill: "quantitative reasoning" },
      difficulty: "hard",
    },
    {
      id: "cp-q10",
      passageId: null,
      sectionId: "chem-phys",
      order: 9,
      stem: "A reaction has $\\Delta H^\\circ = +45$ kJ/mol and $\\Delta S^\\circ = +150$ J/(mol·K). Assuming both quantities are approximately temperature-independent, at what approximate temperature does this reaction become spontaneous under standard conditions?",
      choices: [
        { id: "A", text: "30 K", explanation: "This is off by a factor of 10 from the correct temperature, likely from a units or arithmetic slip in dividing ΔH° by ΔS°." },
        { id: "B", text: "3000 K", explanation: "This is off by a factor of 10 in the opposite direction from the correct answer, likely from misplacing a decimal point when converting units." },
        { id: "C", text: "The reaction is spontaneous at all temperatures because ΔS° is positive.", explanation: "This ignores the positive ΔH°; a reaction is spontaneous at all temperatures only when ΔH° is negative and ΔS° is positive. Here, the positive ΔH° makes the reaction non-spontaneous at low temperature." },
        { id: "D", text: "300 K", explanation: "Correct. Spontaneity requires ΔG° = ΔH° - TΔS° < 0. Setting ΔG° = 0 and solving gives T = ΔH°/ΔS° = 45,000 J/mol ÷ 150 J/(mol·K) = 300 K; the reaction becomes spontaneous above this temperature since ΔH° and ΔS° are both positive." },
      ],
      correctChoiceId: "D",
      explanationOverall:
        "Because ΔH° > 0 and ΔS° > 0, the reaction is endothermic but entropy-favored, so it is spontaneous only above a threshold temperature where the TΔS° term outweighs ΔH°. Setting ΔG° = ΔH° - TΔS° = 0 and solving for T (after converting ΔH° to joules) gives T = 45,000/150 = 300 K, the temperature above which ΔG° becomes negative and the reaction proceeds spontaneously.",
      walkthrough: {
        approachNotes:
          "For 'spontaneous above/below what temperature' questions, first check the signs of ΔH° and ΔS° to classify the reaction (always spontaneous, never spontaneous, or temperature-dependent), then solve ΔG° = 0 for the threshold T only in the temperature-dependent case.",
        steps: [
          "Check the signs: ΔH° = +45 kJ/mol (unfavorable) and ΔS° = +150 J/(mol·K) (favorable) — this is the temperature-dependent case (spontaneous only above some T).",
          "Set ΔG° = 0 at the threshold temperature: ΔH° - TΔS° = 0.",
          "Convert units so both terms match: ΔH° = 45,000 J/mol.",
          "Solve for T: T = ΔH°/ΔS° = 45,000 / 150 = 300 K.",
          "Confirm the reaction is spontaneous for T > 300 K, since the entropy term then dominates and ΔG° becomes negative.",
        ],
      },
      category: { foundationalConcept: "FC5", contentCategory: "5E", skill: "quantitative reasoning" },
      difficulty: "medium",
    },
    {
      id: "cp-q11",
      passageId: null,
      sectionId: "chem-phys",
      order: 10,
      stem: "Which of the following correctly ranks Na, Al, and Cl (all period 3 elements) in order of INCREASING first ionization energy?",
      choices: [
        { id: "A", text: "Na < Al < Cl", explanation: "Correct. Effective nuclear charge increases from left to right across period 3 while electrons are added to the same principal shell, so first ionization energy generally increases from Na (group 1) to Al (group 13) to Cl (group 17)." },
        { id: "B", text: "Cl < Al < Na", explanation: "This is the reverse of the correct trend; it would apply to atomic radius (which decreases left to right) rather than ionization energy (which increases left to right)." },
        { id: "C", text: "Al < Na < Cl", explanation: "This incorrectly places Al below Na; despite a small dip in ionization energy between groups 2 and 13 due to the start of p-subshell filling, Al's ionization energy is still higher than Na's because Al has a much greater effective nuclear charge than Na." },
        { id: "D", text: "Na < Cl < Al", explanation: "This incorrectly swaps Al and Cl; chlorine, near the right edge of the period with a nearly full p subshell and high effective nuclear charge, has a substantially higher first ionization energy than aluminum." },
      ],
      correctChoiceId: "A",
      explanationOverall:
        "First ionization energy generally increases across a period as effective nuclear charge increases while electrons are added to the same shell, making them more tightly bound. Na, Al, and Cl fall in period 3 left to right in that order, so their first ionization energies increase in the same order: Na (~496 kJ/mol) < Al (~577 kJ/mol) < Cl (~1251 kJ/mol).",
      walkthrough: {
        approachNotes:
          "For periodic trend ranking questions, locate each element's position on the periodic table first, then apply the general left-to-right-increases, top-to-bottom-decreases rule for ionization energy, checking only afterward whether a known anomaly (like the group 2/13 or 15/16 dips) applies to the specific elements given.",
        steps: [
          "Locate each element in period 3: Na (group 1), Al (group 13), Cl (group 17).",
          "Recall the general trend: first ionization energy increases left to right across a period.",
          "Apply the trend directly: Na < Al < Cl.",
          "Check for relevant anomalies: the group 2→13 ionization energy dip applies to Mg vs. Al, not Na vs. Al, so it doesn't reverse this particular ranking.",
          "Select the choice matching the increasing order Na < Al < Cl.",
        ],
      },
      category: { foundationalConcept: "FC5", contentCategory: "5B", skill: "concept application" },
      difficulty: "easy",
    },
    {
      id: "cp-q12",
      passageId: null,
      sectionId: "chem-phys",
      order: 11,
      stem: "A 12 V battery is connected in series with two resistors, $R_1 = 4\\ \\Omega$ and $R_2 = 8\\ \\Omega$. What is the current flowing through $R_1$?",
      choices: [
        { id: "A", text: "3 A", explanation: "This computes I = V/R1 using only R1 (12/4 = 3 A), ignoring R2's contribution to the circuit's total resistance." },
        { id: "B", text: "1 A", explanation: "Correct. In a series circuit, the same current flows through every element, and the total resistance is the sum of individual resistances: R_total = R1 + R2 = 12 Ω. By Ohm's law, I = V/R_total = 12 V / 12 Ω = 1 A." },
        { id: "C", text: "2 A", explanation: "This uses an incorrect average of the two resistances ((4+8)/2 = 6 Ω) rather than their sum, which is not how resistances combine in series." },
        { id: "D", text: "1.5 A", explanation: "This computes I = V/R2 using only R2 (12/8 = 1.5 A), ignoring R1's contribution to the circuit's total resistance." },
      ],
      correctChoiceId: "B",
      explanationOverall:
        "Resistors in series add directly, so the circuit's total resistance is R1 + R2 = 4 Ω + 8 Ω = 12 Ω. Ohm's law (V = IR) then gives I = V/R_total = 12 V / 12 Ω = 1 A, and because series elements share a single current path, this same 1 A flows through R1, R2, and the battery.",
      walkthrough: {
        approachNotes:
          "For series circuit problems, always combine resistances into a single total resistance first (sum for series, reciprocal sum for parallel) before applying Ohm's law — never apply V = IR to one resistor's value while ignoring the rest of the circuit.",
        steps: [
          "Recognize the circuit is a simple series loop: battery, R1, and R2 in one path.",
          "Recall that series resistances add: R_total = R1 + R2.",
          "Compute R_total = 4 Ω + 8 Ω = 12 Ω.",
          "Apply Ohm's law to the whole loop: I = V/R_total = 12 V / 12 Ω = 1 A.",
          "Recall that current is the same at every point in a series circuit, so this 1 A also flows through R1.",
        ],
      },
      category: { foundationalConcept: "FC4", contentCategory: "4C", skill: "quantitative reasoning" },
      difficulty: "easy",
    },
  ],
};

export default chemPhysContent;
