import type { Passage, Question } from "@/lib/types";

export const passages: Passage[] = [
  {
    id: "cp-p10",
    sectionId: "chem-phys",
    order: 9,
    kind: "passage",
    title: "Calcium Oxalate Solubility and Urine Osmolarity",
    bodyMarkdown: `Most kidney stones consist of calcium oxalate, a sparingly soluble salt that dissolves according to

$$CaC_2O_4(s) \\rightleftharpoons Ca^{2+}(aq) + C_2O_4^{2-}(aq) \\qquad K_{sp} = 2.7 \\times 10^{-9} \\text{ at } 37^\\circ C$$

Oxalate is the conjugate base of oxalic acid, a diprotic acid with $pK_{a1} = 1.3$ and $pK_{a2} = 4.3$. A crystallization is expected whenever the ion product $Q = [Ca^{2+}][C_2O_4^{2-}]$ exceeds $K_{sp}$.

A nephrology laboratory first measured the equilibrium solubility of $CaC_2O_4$ in buffered solutions at 37 °C (Table 1). It then analyzed free ion concentrations in three fresh urine samples (Table 2).

**Table 1.** Solubility of $CaC_2O_4$ versus pH

| pH | Solubility (M) |
|----|----------------|
| 7.0 | $5.2 \\times 10^{-5}$ |
| 5.0 | $5.7 \\times 10^{-5}$ |
| 3.0 | $2.3 \\times 10^{-4}$ |
| 1.0 | $3.7 \\times 10^{-3}$ |

**Table 2.** Free ion concentrations in urine samples

| Sample | $[Ca^{2+}]$ (mM) | $[C_2O_4^{2-}]$ (µM) |
|--------|------------------|----------------------|
| A | 3.0 | 3.0 |
| B | 1.0 | 1.0 |
| C | 2.0 | 1.0 |

Finally, the team estimated the osmotic pressure of a concentrated urine specimen from a dehydrated patient. This specimen contained 0.15 M NaCl (assume complete dissociation) and 0.30 M urea (a nonelectrolyte). Osmotic pressure follows $\\Pi = iMRT$, and the specimen was considered at body temperature (310 K) against pure water across a membrane permeable only to water. Use $R = 0.0821$ L·atm/(mol·K).`,
    questionIds: ["cp-q49", "cp-q50", "cp-q51", "cp-q52", "cp-q53"],
  },
];

export const questions: Question[] = [
  {
    id: "cp-q49",
    passageId: "cp-p10",
    sectionId: "chem-phys",
    order: 48,
    stem: "What is the approximate molar solubility of $CaC_2O_4$ in a solution that already contains 0.010 M $CaCl_2$ at 37 °C (assume pH is high enough that oxalate is not protonated)?",
    choices: [
      { id: "A", text: "$5.2 \\times 10^{-5}$ M", explanation: "This is the solubility in pure water, sqrt(Ksp). It ignores the common-ion effect of the 0.010 M Ca²⁺ already present." },
      { id: "B", text: "$2.7 \\times 10^{-7}$ M", explanation: "Correct. Because the added Ca²⁺ is ~0.010 M, s << 0.010, so [Ca²⁺] ≈ 0.010 M and s = [C₂O₄²⁻] = Ksp/0.010 = 2.7×10⁻⁹/10⁻² = 2.7×10⁻⁷ M." },
      { id: "C", text: "$2.7 \\times 10^{-9}$ M", explanation: "This simply equals Ksp. It would result from dividing Ksp by 1 M rather than by 0.010 M." },
      { id: "D", text: "$2.7 \\times 10^{-11}$ M", explanation: "This divides Ksp by 100 M instead of 0.010 M, a power-of-ten error in the denominator." },
    ],
    correctChoiceId: "B",
    explanationOverall:
      "The common-ion effect lowers a salt's solubility when one of its ions is already in solution. With 0.010 M Ca²⁺ supplied by CaCl₂, the dissolved oxalate concentration equals the solubility s, and Ksp = (0.010)(s). Solving gives s = 2.7×10⁻⁷ M, roughly 200-fold lower than in pure water (5.2×10⁻⁵ M).",
    walkthrough: {
      approachNotes:
        "When a problem adds a soluble salt sharing an ion with the sparingly soluble solid, set up an ICE-style expression and check whether the unknown s is negligible compared with the pre-existing ion concentration.",
      steps: [
        "Write Ksp = [Ca²⁺][C₂O₄²⁻] = 2.7×10⁻⁹.",
        "Identify the common ion: CaCl₂ supplies 0.010 M Ca²⁺.",
        "Let s be the oxalate concentration; then [Ca²⁺] = 0.010 + s ≈ 0.010 because s is tiny.",
        "Solve s = Ksp/0.010 = 2.7×10⁻⁷ M.",
        "Sanity check: the value is lower than the pure-water solubility (5.2×10⁻⁵ M), as the common-ion effect predicts.",
      ],
    },
    category: { foundationalConcept: "FC5", contentCategory: "5A", skill: "quantitative reasoning" },
    difficulty: "medium",
  },
  {
    id: "cp-q50",
    passageId: "cp-p10",
    sectionId: "chem-phys",
    order: 49,
    stem: "Based on Table 2 and the given $K_{sp}$, which urine sample(s) are supersaturated with respect to calcium oxalate and therefore expected to deposit crystals?",
    choices: [
      { id: "A", text: "Sample A only", explanation: "Correct. Q(A) = (3.0×10⁻³)(3.0×10⁻⁶) = 9.0×10⁻⁹ > 2.7×10⁻⁹. Q(B) = 1.0×10⁻⁹ and Q(C) = 2.0×10⁻⁹ are both below Ksp." },
      { id: "B", text: "Samples A and C", explanation: "Sample C has Q = (2.0×10⁻³)(1.0×10⁻⁶) = 2.0×10⁻⁹, which is less than Ksp. Its Ca²⁺ is high, but the oxalate is too low." },
      { id: "C", text: "Samples B and C", explanation: "Both have Q below Ksp (1.0×10⁻⁹ and 2.0×10⁻⁹), so neither is supersaturated; this choice also wrongly excludes A." },
      { id: "D", text: "All three samples", explanation: "Only a sample with Q > 2.7×10⁻⁹ is supersaturated; B and C fall short. Remember concentrations in the table are in mM and µM, which must be converted to molar before multiplying." },
    ],
    correctChoiceId: "A",
    explanationOverall:
      "Compare Q with Ksp. After converting to molar units, the ion products are 9.0×10⁻⁹ (A), 1.0×10⁻⁹ (B), and 2.0×10⁻⁹ (C). Only A exceeds Ksp = 2.7×10⁻⁹, so only A is supersaturated and can nucleate crystals.",
    walkthrough: {
      approachNotes:
        "Q-versus-Ksp questions are fastest if you convert units first, then compute each product in scientific notation and compare exponents and coefficients.",
      steps: [
        "Convert mM to M (×10⁻³) and µM to M (×10⁻⁶).",
        "Compute Q(A) = (3.0×10⁻³)(3.0×10⁻⁶) = 9.0×10⁻⁹.",
        "Compute Q(B) = 1.0×10⁻⁹ and Q(C) = 2.0×10⁻⁹.",
        "Compare each with Ksp = 2.7×10⁻⁹: only Q(A) is larger.",
        "Conclude only sample A is supersaturated.",
      ],
    },
    category: { foundationalConcept: "FC5", contentCategory: "5A", skill: "data-based reasoning" },
    difficulty: "easy",
  },
  {
    id: "cp-q51",
    passageId: "cp-p10",
    sectionId: "chem-phys",
    order: 50,
    stem: "Table 1 shows that the solubility of $CaC_2O_4$ rises sharply as pH falls below about 4. Which explanation best accounts for this trend?",
    choices: [
      { id: "A", text: "H⁺ increases the ionic strength enough to lower Ksp at low pH.", explanation: "Ionic strength effects on activity coefficients are small compared with the thousand-fold change seen, and Ksp is a constant at fixed temperature." },
      { id: "B", text: "H⁺ reacts with Ca²⁺ to form soluble calcium hydride species.", explanation: "Ca²⁺ does not react with H⁺; calcium hydride is not formed in aqueous acid." },
      { id: "C", text: "Lowering pH raises the temperature of the solution, increasing Ksp.", explanation: "The experiment was run at constant 37 °C; pH changes do not alter temperature." },
      { id: "D", text: "H⁺ protonates oxalate to HC₂O₄⁻ and H₂C₂O₄, lowering free [C₂O₄²⁻] and pulling the dissolution equilibrium to the right.", explanation: "Correct. Oxalate is the conjugate base of a weak acid (pKa2 = 4.3). When pH approaches and drops below this value, much of it is protonated, so more solid must dissolve to restore Q = Ksp (Le Chatelier)." },
    ],
    correctChoiceId: "D",
    explanationOverall:
      "The anion of a sparingly soluble salt that is a weak-acid conjugate base is removed from solution by protonation as pH falls. Because free C₂O₄²⁻ drops, the system dissolves more CaC₂O₄ to re-establish Ksp, so the apparent solubility rises. The effect becomes large once pH is below pKa2 = 4.3, as in the table.",
    walkthrough: {
      approachNotes:
        "Whenever solubility changes with pH, ask whether the anion (or cation) is a weak acid or base. If so, think about speciation and Le Chatelier's principle rather than a change in Ksp.",
      steps: [
        "Note that Ksp is constant at fixed temperature, so the change must come from free ion concentrations.",
        "Identify oxalate as a weak diprotic acid's conjugate base (pKa1 = 1.3, pKa2 = 4.3).",
        "At pH < 4.3, oxalate is increasingly protonated, lowering [C₂O₄²⁻].",
        "With Q below Ksp, more solid dissolves (equilibrium shifts right).",
        "Match to the choice describing protonation and a rightward shift.",
      ],
    },
    category: { foundationalConcept: "FC5", contentCategory: "5A", skill: "concept application" },
    difficulty: "medium",
  },
  {
    id: "cp-q52",
    passageId: "cp-p10",
    sectionId: "chem-phys",
    order: 51,
    stem: "What is the approximate osmotic pressure of the concentrated urine specimen at 310 K relative to pure water?",
    choices: [
      { id: "A", text: "7.6 atm", explanation: "This counts only the 0.30 osmol/L contributed by dissociated NaCl and omits the urea." },
      { id: "B", text: "11.5 atm", explanation: "This uses 0.45 M (0.15 + 0.30) and treats NaCl as a single particle (i = 1), ignoring its dissociation into Na⁺ and Cl⁻." },
      { id: "C", text: "15.3 atm", explanation: "Correct. Osmolarity = (2)(0.15) + (1)(0.30) = 0.60 osmol/L. Π = 0.60 × 0.0821 × 310 ≈ 15.3 atm." },
      { id: "D", text: "30.5 atm", explanation: "This doubles the total osmolarity (1.2 osmol/L), likely by applying the van't Hoff factor of 2 to urea as well." },
    ],
    correctChoiceId: "C",
    explanationOverall:
      "Osmotic pressure depends on total solute particle concentration. NaCl contributes 2 × 0.15 = 0.30 osmol/L and urea contributes 0.30 osmol/L, so iM totals 0.60 osmol/L. Π = (0.60)(0.0821)(310) ≈ 15.3 atm.",
    walkthrough: {
      approachNotes:
        "Colligative property questions hinge on counting particles: apply the van't Hoff factor to each solute separately, then add before multiplying by RT.",
      steps: [
        "Determine i for each solute: NaCl dissociates completely (i = 2); urea is a nonelectrolyte (i = 1).",
        "Compute osmolarity: 2(0.15) + 1(0.30) = 0.60 osmol/L.",
        "Compute RT = 0.0821 × 310 ≈ 25.5 L·atm/mol.",
        "Multiply: Π = 0.60 × 25.5 ≈ 15.3 atm.",
        "Check that it exceeds the 11.5 atm obtained when NaCl dissociation is ignored.",
      ],
    },
    category: { foundationalConcept: "FC5", contentCategory: "5A", skill: "quantitative reasoning" },
    difficulty: "medium",
  },
  {
    id: "cp-q53",
    passageId: "cp-p10",
    sectionId: "chem-phys",
    order: 52,
    stem: "The patient who produced Sample A is advised to double daily fluid intake so that urine volume doubles while the total amounts of calcium and oxalate excreted stay the same. Assuming no other changes, how would the ion product $Q$ and the supersaturation status compare with Sample A?",
    choices: [
      { id: "A", text: "Q falls by a factor of 2 to 4.5×10⁻⁹, so the urine remains supersaturated.", explanation: "Both ion concentrations are halved, and Q is a product of the two, so it drops by a factor of 4, not 2." },
      { id: "B", text: "Q falls by a factor of 4 to 2.25×10⁻⁹, which is below Ksp, so the urine is no longer supersaturated.", explanation: "Correct. Halving [Ca²⁺] and [C₂O₄²⁻] gives Q = (1.5×10⁻³)(1.5×10⁻⁶) = 2.25×10⁻⁹ < 2.7×10⁻⁹, so crystallization is no longer favored." },
      { id: "C", text: "Q is unchanged because Ksp is a constant.", explanation: "Ksp is constant, but Q depends on the actual ion concentrations, which change on dilution." },
      { id: "D", text: "Q rises because dilution increases the solubility of calcium oxalate beyond Ksp.", explanation: "Dilution lowers ion concentrations and therefore Q; Ksp itself does not change with volume." },
    ],
    correctChoiceId: "B",
    explanationOverall:
      "Doubling the urine volume halves each ion concentration, and because Q is the product of two concentrations it falls fourfold: 9.0×10⁻⁹ / 4 = 2.25×10⁻⁹. This is below Ksp = 2.7×10⁻⁹, so the urine would no longer be supersaturated, rationalizing high fluid intake as stone prevention.",
    walkthrough: {
      approachNotes:
        "When two concentrations in a product are both diluted by the same factor, the product changes by that factor squared. Compare the new Q with Ksp rather than assuming the direction.",
      steps: [
        "Recall Sample A: Q = 9.0×10⁻⁹ (from Table 2).",
        "Doubling urine volume halves both [Ca²⁺] (to 1.5 mM) and [C₂O₄²⁻] (to 1.5 µM).",
        "New Q = (1.5×10⁻³)(1.5×10⁻⁶) = 2.25×10⁻⁹, a fourfold decrease.",
        "Compare with Ksp = 2.7×10⁻⁹: Q < Ksp.",
        "Conclude the urine is undersaturated and crystals would tend to dissolve rather than grow.",
      ],
    },
    category: { foundationalConcept: "FC5", contentCategory: "5A", skill: "data-based reasoning" },
    difficulty: "hard",
  },
  {
    id: "cp-q54",
    passageId: null,
    sectionId: "chem-phys",
    order: 53,
    stem: "A pipe of length 0.85 m is closed at one end and open at the other. If the speed of sound in air is 340 m/s, what is the frequency of the second-lowest resonant frequency (the first overtone) of the pipe?",
    choices: [
      { id: "A", text: "100 Hz", explanation: "This is the fundamental frequency, f₁ = v/4L = 340/3.4 = 100 Hz, not the first overtone." },
      { id: "B", text: "200 Hz", explanation: "This would be the second harmonic of an open-open pipe or a string, but a closed-open pipe supports only odd harmonics." },
      { id: "C", text: "400 Hz", explanation: "This is the fourth multiple of the fundamental, an even harmonic that cannot exist in a pipe with one closed end." },
      { id: "D", text: "300 Hz", explanation: "Correct. A closed-open pipe has only odd harmonics, so the first overtone is the third harmonic: 3 × 100 Hz = 300 Hz." },
    ],
    correctChoiceId: "D",
    explanationOverall:
      "A pipe closed at one end has a displacement node at the closed end and an antinode at the open end, so L = (2n − 1)λ/4 and f = (2n − 1)v/4L. The fundamental is 340/(4 × 0.85) = 100 Hz, and the next allowed frequency is the third harmonic, 300 Hz.",
    walkthrough: {
      approachNotes:
        "For resonance in pipes, first decide whether the ends are open or closed; this sets which harmonics exist. Closed-open means only odd multiples of the fundamental.",
      steps: [
        "Recognize closed-open boundary conditions: node at closed end, antinode at open end.",
        "Compute the fundamental: f₁ = v/4L = 340/(4 × 0.85) = 100 Hz.",
        "List allowed frequencies: 100, 300, 500 Hz (odd multiples).",
        "The first overtone is the second allowed frequency: 300 Hz.",
      ],
    },
    category: { foundationalConcept: "FC4", contentCategory: "4D", skill: "quantitative reasoning" },
    difficulty: "medium",
  },
  {
    id: "cp-q55",
    passageId: null,
    sectionId: "chem-phys",
    order: 54,
    stem: "In a mass spectrometer, a singly charged ion of mass $m$ is accelerated from rest through a potential difference $V$ and then enters a uniform magnetic field $B$ perpendicular to its velocity, moving in a circular path of radius $r$. If the accelerating potential is increased to $4V$ with all else unchanged, the new radius will be:",
    choices: [
      { id: "A", text: "2r", explanation: "Correct. qV = ½mv² gives v ∝ √V, so quadrupling V doubles v. Since r = mv/(qB), r also doubles." },
      { id: "B", text: "4r", explanation: "This assumes v is directly proportional to V, but kinetic energy (not speed) is proportional to V, so speed scales as the square root." },
      { id: "C", text: "r", explanation: "The magnetic force does no work, but the accelerating potential still sets the entry speed, and the radius depends on that speed." },
      { id: "D", text: "r/2", explanation: "A larger accelerating potential raises the speed and therefore the radius; the radius does not shrink." },
    ],
    correctChoiceId: "A",
    explanationOverall:
      "The ion gains kinetic energy qV, so v = √(2qV/m). In the magnetic field, qvB = mv²/r, giving r = mv/(qB) = (1/B)√(2mV/q). Quadrupling V multiplies r by √4 = 2.",
    walkthrough: {
      approachNotes:
        "Mass spectrometer problems chain two ideas: energy gain in the electric field sets speed, and the magnetic force provides the centripetal force. Combine them into one expression for r before comparing cases.",
      steps: [
        "Energy conservation: qV = ½mv², so v = √(2qV/m).",
        "Magnetic force supplies centripetal force: qvB = mv²/r, so r = mv/(qB).",
        "Substitute: r = (1/B)√(2mV/q), so r ∝ √V.",
        "Quadrupling V multiplies r by √4 = 2.",
      ],
    },
    category: { foundationalConcept: "FC4", contentCategory: "4C", skill: "quantitative reasoning" },
    difficulty: "hard",
  },
  {
    id: "cp-q56",
    passageId: null,
    sectionId: "chem-phys",
    order: 55,
    stem: "In acidic solution, permanganate oxidizes iron(II) according to: $MnO_4^- + 5Fe^{2+} + 8H^+ \\rightarrow Mn^{2+} + 5Fe^{3+} + 4H_2O$. Which statement correctly describes this reaction?",
    choices: [
      { id: "A", text: "Fe²⁺ is the oxidizing agent because it loses electrons.", explanation: "A species that loses electrons is oxidized and is therefore the reducing agent, not the oxidizing agent." },
      { id: "B", text: "Manganese is oxidized from +2 to +7.", explanation: "This reverses the direction: Mn goes from +7 in MnO₄⁻ to +2 in Mn²⁺." },
      { id: "C", text: "Manganese is reduced from +7 to +2, and MnO₄⁻ is the oxidizing agent.", explanation: "Correct. In MnO₄⁻, Mn is +7 (4 × −2 = −8, net −1). It gains 5 electrons to become Mn²⁺, so it is reduced and the species acts as the oxidizing agent." },
      { id: "D", text: "Oxygen is reduced from −2 to 0 as water is formed.", explanation: "Oxygen stays at −2 in both MnO₄⁻ and H₂O; its oxidation state does not change." },
    ],
    correctChoiceId: "C",
    explanationOverall:
      "Assign oxidation states: Mn is +7 in MnO₄⁻ and +2 in Mn²⁺, a gain of 5 electrons per Mn (reduction). Fe²⁺ → Fe³⁺ loses one electron each (oxidation), balancing 5 Fe per Mn. The species that is reduced, MnO₄⁻, is the oxidizing agent.",
    walkthrough: {
      approachNotes:
        "Assign oxidation numbers to every element that might change, then remember: reduction is gain of electrons (oxidation number decreases), and the oxidizing agent is the species that is reduced.",
      steps: [
        "Assign O = −2 and H = +1, which do not change.",
        "In MnO₄⁻: Mn + 4(−2) = −1, so Mn = +7; in Mn²⁺, Mn = +2.",
        "Mn decreases from +7 to +2, so it is reduced; MnO₄⁻ is the oxidizing agent.",
        "Fe²⁺ → Fe³⁺ increases, so Fe is oxidized (reducing agent).",
        "Select the choice consistent with these assignments.",
      ],
    },
    category: { foundationalConcept: "FC4", contentCategory: "4C", skill: "concept application" },
    difficulty: "easy",
  },
  {
    id: "cp-q57",
    passageId: null,
    sectionId: "chem-phys",
    order: 56,
    stem: "A rigid 4.1 L container holds an ideal gas at 6.0 atm and 27 °C. Approximately how many moles of gas are present? ($R = 0.0821$ L·atm/(mol·K))",
    choices: [
      { id: "A", text: "0.25 mol", explanation: "This would correspond to a pressure of 1.5 atm in the same volume at 300 K." },
      { id: "B", text: "0.50 mol", explanation: "This would correspond to a pressure of 3.0 atm in the same volume at 300 K." },
      { id: "C", text: "2.0 mol", explanation: "This would require 12 atm at 300 K in 4.1 L; it likely results from doubling the product or mishandling the temperature conversion." },
      { id: "D", text: "1.0 mol", explanation: "Correct. T = 27 + 273 = 300 K, so n = PV/RT = (6.0)(4.1)/(0.0821 × 300) = 24.6/24.6 ≈ 1.0 mol." },
    ],
    correctChoiceId: "D",
    explanationOverall:
      "Convert the temperature to kelvin (300 K), then rearrange PV = nRT to n = PV/RT. The numerator is 6.0 × 4.1 = 24.6 and the denominator is 0.0821 × 300 ≈ 24.6, so n ≈ 1.0 mol.",
    walkthrough: {
      approachNotes:
        "Ideal gas law problems demand consistent units: use kelvin and match the pressure and volume units to the units of R before calculating.",
      steps: [
        "Convert temperature: 27 °C + 273 = 300 K.",
        "Rearrange PV = nRT to n = PV/(RT).",
        "Compute PV = 6.0 × 4.1 = 24.6 L·atm.",
        "Compute RT = 0.0821 × 300 ≈ 24.6 L·atm/mol.",
        "n ≈ 24.6/24.6 ≈ 1.0 mol.",
      ],
    },
    category: { foundationalConcept: "FC4", contentCategory: "4A", skill: "quantitative reasoning" },
    difficulty: "easy",
  },
  {
    id: "cp-q58",
    passageId: null,
    sectionId: "chem-phys",
    order: 57,
    stem: "A 2.0 kg cart moving at 3.0 m/s on a frictionless track collides with a stationary 1.0 kg cart, and the two carts stick together. What fraction of the system's initial kinetic energy is lost in the collision?",
    choices: [
      { id: "A", text: "One-third", explanation: "Correct. Momentum: (2.0)(3.0) = (3.0)v, so v = 2.0 m/s. KEᵢ = ½(2.0)(3.0)² = 9 J; KE_f = ½(3.0)(2.0)² = 6 J. Lost = 3 J, i.e., 3/9 = 1/3." },
      { id: "B", text: "One-half", explanation: "This is the fraction lost for equal masses colliding inelastically with one initially at rest, not for a 2:1 mass ratio." },
      { id: "C", text: "None, because momentum is conserved", explanation: "Momentum is conserved in all isolated collisions, but kinetic energy is conserved only in elastic collisions; sticking together is perfectly inelastic." },
      { id: "D", text: "Two-thirds", explanation: "Two-thirds (6 J of 9 J) is the fraction of kinetic energy that remains, not the fraction lost." },
    ],
    correctChoiceId: "A",
    explanationOverall:
      "Conservation of momentum gives the final shared speed, 2.0 m/s. Initial KE is 9 J and final KE is 6 J, so 3 J (one-third) is dissipated as heat, sound, and deformation, which is characteristic of a perfectly inelastic collision.",
    walkthrough: {
      approachNotes:
        "For collisions, apply momentum conservation first to find velocities, then compare kinetic energies to find what was lost. Do not assume KE is conserved unless the collision is stated to be elastic.",
      steps: [
        "Conserve momentum: m₁v₁ = (m₁ + m₂)v_f, so v_f = (2.0 × 3.0)/3.0 = 2.0 m/s.",
        "Initial KE = ½(2.0)(3.0)² = 9 J.",
        "Final KE = ½(3.0)(2.0)² = 6 J.",
        "Energy lost = 9 − 6 = 3 J.",
        "Fraction lost = 3/9 = 1/3.",
      ],
    },
    category: { foundationalConcept: "FC4", contentCategory: "4A", skill: "quantitative reasoning" },
    difficulty: "medium",
  },
  {
    id: "cp-q59",
    passageId: null,
    sectionId: "chem-phys",
    order: 58,
    stem: "Aspartic acid has pKa values of 2.0 (α-carboxyl), 3.9 (side-chain carboxyl), and 10.0 (α-amino). In gel electrophoresis at pH 7.0, how will aspartic acid behave?",
    choices: [
      { id: "A", text: "It will migrate toward the cathode with a net charge of +1.", explanation: "A positive net charge would occur only at pH well below the pI (about 3.0), where both carboxyl groups are mostly protonated." },
      { id: "B", text: "It will remain stationary because it exists as a zwitterion at every pH.", explanation: "A zwitterion with zero net charge exists only near the pI (about 3.0). At pH 7.0 the side chain is also deprotonated, giving a net negative charge." },
      { id: "C", text: "It will migrate toward the anode with a net charge of −1.", explanation: "Correct. At pH 7.0 both carboxyl groups (pKa 2.0 and 3.9) are deprotonated (−2) and the amino group (pKa 10.0) is still protonated (+1), giving a net charge of −1." },
      { id: "D", text: "It will migrate toward the anode with a net charge of −2.", explanation: "A net charge of −2 would require the amino group also to be deprotonated, which occurs only at pH values above its pKa of 10.0." },
    ],
    correctChoiceId: "C",
    explanationOverall:
      "The pI of aspartic acid is the average of the two acidic pKa values, (2.0 + 3.9)/2 ≈ 3.0. At pH 7.0, well above the pI, the molecule carries a net negative charge: two deprotonated carboxylates and one protonated ammonium give −1. Negatively charged species migrate toward the positive electrode (anode).",
    walkthrough: {
      approachNotes:
        "Compare the solution pH with each pKa: a group is mostly protonated when pH < pKa and mostly deprotonated when pH > pKa. Then sum the charges.",
      steps: [
        "At pH 7.0, α-COOH (pKa 2.0) is deprotonated: −1.",
        "Side-chain COOH (pKa 3.9) is deprotonated: −1.",
        "α-NH₃⁺ (pKa 10.0) is still protonated: +1.",
        "Net charge = −1 − 1 + 1 = −1.",
        "Negative species migrate toward the anode (positive electrode).",
      ],
    },
    category: { foundationalConcept: "FC5", contentCategory: "5D", skill: "concept application" },
    difficulty: "medium",
  },
];
