import type { Passage, Question } from "@/lib/types";

export const passages: Passage[] = [
  {
    id: "cp-p4",
    sectionId: "chem-phys",
    order: 3,
    kind: "passage",
    title: "Thermal Degradation of an Injectable Drug in Solution",
    bodyMarkdown: `A formulation team is studying the stability of a drug, D, dissolved in a pH 7.4 phosphate buffer (total buffer concentration = [B]). To establish the rate law, the team measured the initial rate of loss of D at 310 K for four starting mixtures (Table 1).

**Table 1.** Initial rates at 310 K

| Experiment | [D] (mM) | [B] (mM) | Initial rate (µM/h) |
|---|---|---|---|
| 1 | 5.0 | 50 | 14.5 |
| 2 | 10.0 | 50 | 29 |
| 3 | 10.0 | 150 | 29 |
| 4 | 20.0 | 150 | 58 |

Next, the team monitored $\\ln[D]$ versus time at three temperatures and found a straight line at each temperature. The slope magnitudes gave the rate constants in Table 2.

**Table 2.** Observed rate constants

| T (K) | $k$ (h⁻¹) |
|---|---|
| 300 | $1.0 \\times 10^{-3}$ |
| 310 | $2.9 \\times 10^{-3}$ |
| 320 | $8.0 \\times 10^{-3}$ |

The temperature dependence was analyzed with the Arrhenius equation,

$$k = A e^{-E_a/RT}$$

where $R = 8.31$ J/(mol·K). Use $\\ln 2 = 0.69$ and $\\ln 8 = 2.08$ where helpful.

Finally, the team suspected that trace $Cu^{2+}$ leaching from vial stoppers catalyzes the degradation. When 1.0 mM EDTA, a chelator that binds $Cu^{2+}$ tightly, was added to the buffer, the rate constant at 310 K fell from $2.9 \\times 10^{-3}$ h⁻¹ to $1.2 \\times 10^{-3}$ h⁻¹. The rate constant did not fall to zero even at higher EDTA concentrations.`,
    questionIds: ["cp-q13", "cp-q14", "cp-q15", "cp-q16", "cp-q17"],
  },
  {
    id: "cp-p5",
    sectionId: "chem-phys",
    order: 4,
    kind: "passage",
    title: "Geometric Optics of the Human Eye",
    bodyMarkdown: `Optometry students model the eye as a single thin converging lens located 2.0 cm in front of the retina. The lens equation relates the object distance $o$, image distance $i$, and focal length $f$:

$$\\frac{1}{f} = \\frac{1}{o} + \\frac{1}{i}$$

Refractive power is $P = 1/f$, expressed in diopters (D) when $f$ is in meters. By convention, converging lenses have $f > 0$, and a virtual image has $i < 0$. The ciliary muscle changes the curvature of the lens (accommodation), which changes its power so that images of objects at different distances land on the fixed retinal plane. A corrective lens worn directly against the eye is treated as a thin lens in contact with the eye lens, so that their powers add.

Three patients were examined without correction (Table 1). The far point is the greatest distance at which an object can be seen clearly, and the near point is the least.

**Table 1.** Uncorrected vision

| Patient | Diagnosis | Far point | Near point |
|---|---|---|---|
| A | Myopia | 50 cm | 10 cm |
| B | Hyperopia | ∞ | 80 cm |
| C | Normal | ∞ | 25 cm |

In the real eye, most of the focusing occurs where light passes from air into the cornea. The indices of refraction are approximately 1.00 for air, 1.38 for the cornea, 1.34 for the aqueous humor, and 1.41 for the crystalline lens. The students also reviewed a form of laser surgery in which tissue is removed from the cornea so that its surface curvature is reshaped.`,
    questionIds: ["cp-q18", "cp-q19", "cp-q20", "cp-q21", "cp-q22"],
  },
];

export const questions: Question[] = [
  {
    id: "cp-q13",
    passageId: "cp-p4",
    sectionId: "chem-phys",
    order: 12,
    stem: "Based on Table 1, which rate law describes the degradation of D at 310 K?",
    choices: [
      { id: "A", text: "rate = k[D][B]", explanation: "This would require the rate to triple when [B] triples (Experiment 2 vs. 3). The rate was unchanged at 29 µM/h, so the reaction is not first order in B." },
      { id: "B", text: "rate = k[D]²", explanation: "Doubling [D] from 10.0 to 20.0 mM (Experiments 3 and 4) doubled the rate from 29 to 58 µM/h. A second-order dependence would have quadrupled the rate." },
      { id: "C", text: "rate = k[D]", explanation: "Correct. Rate doubles whenever [D] doubles (Experiments 1 to 2 and 3 to 4) and is unaffected by tripling [B] (Experiments 2 to 3), so the reaction is first order in D and zero order in B." },
      { id: "D", text: "rate = k[B]", explanation: "Experiments 2 and 3 show no dependence on [B], while Experiments 1 and 2 show a clear dependence on [D]. The rate law cannot depend on B alone." },
    ],
    correctChoiceId: "C",
    explanationOverall:
      "The method of initial rates compares pairs of experiments in which only one concentration changes. Doubling [D] at constant [B] doubles the rate (first order in D), and tripling [B] at constant [D] leaves the rate unchanged (zero order in B). The rate law is therefore rate = k[D], which is also consistent with the linear ln[D] versus time plots described in the passage.",
    walkthrough: {
      approachNotes:
        "For an initial-rates table, always look for pairs of experiments where only one reactant concentration changes, and compare the ratio of rates to the ratio of concentrations.",
      steps: [
        "Compare Experiments 1 and 2: [D] doubles while [B] is constant, and the rate doubles from 14.5 to 29, so the order in D is 1.",
        "Compare Experiments 2 and 3: [B] triples while [D] is constant, and the rate does not change, so the order in B is 0.",
        "Check with Experiments 3 and 4: [D] doubles at constant [B], and the rate doubles again, confirming first order in D.",
        "Write the rate law, rate = k[D], and eliminate choices with a [B] term or a squared [D] term.",
      ],
    },
    category: { foundationalConcept: "FC5", contentCategory: "5E", skill: "data-based reasoning" },
    difficulty: "easy",
  },
  {
    id: "cp-q14",
    passageId: "cp-p4",
    sectionId: "chem-phys",
    order: 13,
    stem: "What is the approximate half-life of D at 310 K in the absence of EDTA?",
    choices: [
      { id: "A", text: "240 h", explanation: "Correct. For a first-order reaction, t½ = ln 2 / k = 0.69 / (2.9 × 10⁻³ h⁻¹) ≈ 240 h." },
      { id: "B", text: "345 h", explanation: "This equals 1/k, the mean lifetime (time for the concentration to fall to 1/e), not the half-life. It omits the factor of ln 2." },
      { id: "C", text: "170 h", explanation: "This results from using 0.5/k, which treats the half-life as if it were simply 0.5 divided by the rate constant. The correct constant is ln 2 = 0.69." },
      { id: "D", text: "24 h", explanation: "This is off by a factor of ten from the correct value, a decimal-place error in dividing 0.69 by 2.9 × 10⁻³." },
    ],
    correctChoiceId: "A",
    explanationOverall:
      "The reaction is first order in D (ln[D] versus time is linear), so the half-life is independent of concentration and equals ln 2 / k. With k = 2.9 × 10⁻³ h⁻¹ at 310 K, t½ = 0.69 / 0.0029 ≈ 240 h.",
    walkthrough: {
      approachNotes:
        "Match the half-life formula to the reaction order before computing. First-order half-lives are concentration independent and depend only on k.",
      steps: [
        "Recognize from Question 13 and the linear ln[D] plots that the reaction is first order.",
        "Recall the first-order half-life: t½ = ln 2 / k.",
        "Read k at 310 K from Table 2: 2.9 × 10⁻³ h⁻¹.",
        "Compute 0.69 / 0.0029 ≈ 238, which rounds to about 240 h.",
      ],
    },
    category: { foundationalConcept: "FC5", contentCategory: "5E", skill: "quantitative reasoning" },
    difficulty: "medium",
  },
  {
    id: "cp-q15",
    passageId: "cp-p4",
    sectionId: "chem-phys",
    order: 14,
    stem: "Using the rate constants at 300 K and 320 K in Table 2, what is the approximate activation energy for the degradation of D?",
    choices: [
      { id: "A", text: "36 kJ/mol", explanation: "This is what results from using log₁₀(8) = 0.90 in place of ln(8) = 2.08. The Arrhenius expression is written with the natural logarithm." },
      { id: "B", text: "83 kJ/mol", explanation: "Correct. Eₐ = R ln(k₂/k₁) / (1/T₁ − 1/T₂) = (8.31)(2.08) / (2.08 × 10⁻⁴) ≈ 8.3 × 10⁴ J/mol = 83 kJ/mol." },
      { id: "C", text: "830 kJ/mol", explanation: "This is ten times too large, a decimal-place error when evaluating 1/T₁ − 1/T₂ = 2.08 × 10⁻⁴ K⁻¹. An activation energy this large is also implausible for a drug in solution." },
      { id: "D", text: "8.3 kJ/mol", explanation: "This is ten times too small, a decimal-place error in the same step. An Eₐ this low would give a rate constant that barely changes with temperature, but k increased eightfold." },
    ],
    correctChoiceId: "B",
    explanationOverall:
      "Writing the Arrhenius equation at two temperatures and subtracting gives ln(k₂/k₁) = (Eₐ/R)(1/T₁ − 1/T₂). The ratio k(320)/k(300) = 8, so ln 8 = 2.08. The difference 1/300 − 1/320 = 20 / (300 × 320) ≈ 2.08 × 10⁻⁴ K⁻¹. Thus Eₐ/R ≈ 1.0 × 10⁴ K and Eₐ ≈ 83 kJ/mol.",
    walkthrough: {
      approachNotes:
        "Use the two-point form of the Arrhenius equation and simplify the numbers before touching R. The given ln values and the neat temperature spacing make the arithmetic clean.",
      steps: [
        "Write ln(k₂/k₁) = (Eₐ/R)(1/T₁ − 1/T₂) using T₁ = 300 K and T₂ = 320 K.",
        "Compute the rate constant ratio: 8.0 × 10⁻³ / 1.0 × 10⁻³ = 8, so ln 8 = 2.08.",
        "Compute 1/300 − 1/320 = (320 − 300)/(300 × 320) = 20/96,000 ≈ 2.08 × 10⁻⁴ K⁻¹.",
        "Divide: Eₐ/R = 2.08 / 2.08 × 10⁻⁴ ≈ 1.0 × 10⁴ K.",
        "Multiply by R: Eₐ ≈ 8.31 × 10⁴ J/mol ≈ 83 kJ/mol.",
      ],
    },
    category: { foundationalConcept: "FC5", contentCategory: "5E", skill: "quantitative reasoning" },
    difficulty: "hard",
  },
  {
    id: "cp-q16",
    passageId: "cp-p4",
    sectionId: "chem-phys",
    order: 15,
    stem: "Which conclusion about the EDTA experiment is best supported by the passage?",
    choices: [
      { id: "A", text: "Cu²⁺ is consumed stoichiometrically as D degrades, so EDTA changes the reaction from first order to zero order.", explanation: "A catalyst is regenerated and is not consumed. Moreover, the rate constant stayed finite and the first-order treatment remained valid, so there is no evidence for a change to zero order." },
      { id: "B", text: "EDTA lowers the activation energy of the metal-independent pathway, which decreases k.", explanation: "Lowering an activation energy would increase k, not decrease it. EDTA acts by removing the catalyst, not by changing the barrier of the uncatalyzed path." },
      { id: "C", text: "Removing Cu²⁺ makes the degradation less thermodynamically favorable, which lowers the observed rate constant.", explanation: "Catalysts change kinetics, not thermodynamics. ΔG of the degradation is unaffected by the presence or absence of Cu²⁺." },
      { id: "D", text: "The Cu²⁺-catalyzed pathway accounts for a majority of the degradation at 310 K, but a metal-independent pathway also contributes.", explanation: "Correct. The Cu²⁺-dependent portion of k is about 2.9 × 10⁻³ − 1.2 × 10⁻³ = 1.7 × 10⁻³ h⁻¹ (about 60%), and the residual 1.2 × 10⁻³ h⁻¹ persists even at higher EDTA, indicating an uncatalyzed route." },
    ],
    correctChoiceId: "D",
    explanationOverall:
      "Parallel pathways add their rate constants. Chelation removes the Cu²⁺-catalyzed pathway, and the drop in k from 2.9 × 10⁻³ to 1.2 × 10⁻³ h⁻¹ means that route contributed about 1.7 × 10⁻³ h⁻¹, roughly 60% of the total. Because k plateaus above zero even at higher EDTA concentrations, a metal-independent pathway with its own, higher activation energy must also operate.",
    walkthrough: {
      approachNotes:
        "For catalyst experiments, remember that a catalyst provides an additional lower-barrier pathway without being consumed and without changing thermodynamics. Quantify the contribution by subtracting rate constants.",
      steps: [
        "Recall that a catalyst is not consumed and does not change ΔG or the equilibrium position, eliminating choices A and C.",
        "Note that EDTA lowers k, which is consistent with removing a catalyst and inconsistent with lowering a barrier (choice B).",
        "Subtract: 2.9 × 10⁻³ − 1.2 × 10⁻³ = 1.7 × 10⁻³ h⁻¹ is attributable to Cu²⁺, about 60% of the total.",
        "Use the plateau at a nonzero k to conclude that an uncatalyzed pathway also exists.",
      ],
    },
    category: { foundationalConcept: "FC5", contentCategory: "5E", skill: "experimental design" },
    difficulty: "medium",
  },
  {
    id: "cp-q17",
    passageId: "cp-p4",
    sectionId: "chem-phys",
    order: 16,
    stem: "Between 300 K and 310 K, the average molecular speed (and thus the collision frequency) increases by only about 2%, yet k nearly triples. Which statement best explains this observation?",
    choices: [
      { id: "A", text: "The activation energy decreases as temperature rises, so more collisions are effective.", explanation: "Eₐ is treated as essentially temperature independent in the Arrhenius model. The linear ln k versus 1/T behavior implied by the data is explained without any change in Eₐ." },
      { id: "B", text: "The fraction of collisions with energy at or above Eₐ increases exponentially with temperature.", explanation: "Correct. The factor e^(−Eₐ/RT) is the fraction of collisions with sufficient energy. With Eₐ/R ≈ 10⁴ K, a 10 K rise changes the exponent by about 1.1, which multiplies k by roughly 3." },
      { id: "C", text: "The orientation (steric) factor triples because molecules rotate faster at higher temperature.", explanation: "The steric factor is part of the temperature-insensitive pre-exponential factor A. It cannot account for a threefold change over a 10 K interval." },
      { id: "D", text: "The reaction becomes more exothermic at higher temperature, which speeds the forward reaction.", explanation: "ΔH describes thermodynamics and does not determine the rate. A reaction's exothermicity does not set how fast it proceeds." },
    ],
    correctChoiceId: "B",
    explanationOverall:
      "Collision frequency scales roughly with the square root of T, which accounts for only a ~2% change over 10 K. The dominant temperature effect is on the exponential term e^(−Eₐ/RT): a small increase in T greatly increases the fraction of molecules in the high-energy tail of the Maxwell-Boltzmann distribution that can surmount the activation barrier. The large Eₐ (about 83 kJ/mol) makes k especially temperature sensitive.",
    walkthrough: {
      approachNotes:
        "Separate the pre-exponential factor (collision frequency and orientation) from the exponential factor (energy requirement). Only the exponential factor is strongly temperature sensitive.",
      steps: [
        "Recall k = A e^(−Eₐ/RT), where A contains collision frequency and orientation.",
        "Note that the stem states collision frequency changes by only about 2%, so A cannot explain the threefold change.",
        "Identify the remaining term, e^(−Eₐ/RT), as the fraction of collisions with energy at or above Eₐ.",
        "Check magnitude: Eₐ/R ≈ 10⁴ K, so 10⁴ × (1/300 − 1/310) ≈ 1.1 and e^1.1 ≈ 3, matching the data.",
        "Eliminate choices that change Eₐ, the steric factor, or ΔH, none of which explain the effect.",
      ],
    },
    category: { foundationalConcept: "FC5", contentCategory: "5E", skill: "concept application" },
    difficulty: "hard",
  },
  {
    id: "cp-q18",
    passageId: "cp-p5",
    sectionId: "chem-phys",
    order: 17,
    stem: "Using the eye model in the passage, what refractive power must the eye of Patient C have to focus a book held at 25 cm on the retina?",
    choices: [
      { id: "A", text: "4.0 D", explanation: "This is only 1/o = 1/0.25 m. It ignores the 1/i term (50 D) from the 2.0 cm lens-to-retina distance." },
      { id: "B", text: "46 D", explanation: "This subtracts the object term from 50 D. Both terms are positive here because the object is real and the image on the retina is real." },
      { id: "C", text: "50 D", explanation: "This is the power of the relaxed eye focused on a distant object (o = ∞). Viewing a near object requires additional power." },
      { id: "D", text: "54 D", explanation: "Correct. P = 1/o + 1/i = 1/(0.25 m) + 1/(0.020 m) = 4 + 50 = 54 D." },
    ],
    correctChoiceId: "D",
    explanationOverall:
      "The eye's power is the sum of reciprocals of the object and image distances in meters. For a distant object the power is 1/0.020 = 50 D; for an object at 25 cm, an additional 1/0.25 = 4 D is required, giving 54 D. This extra 4 D is supplied by accommodation, when the ciliary muscle increases the lens curvature.",
    walkthrough: {
      approachNotes:
        "Convert all distances to meters before using diopters. Then apply P = 1/o + 1/i directly.",
      steps: [
        "Convert distances: o = 25 cm = 0.25 m and i = 2.0 cm = 0.020 m.",
        "Write P = 1/f = 1/o + 1/i.",
        "Compute 1/0.25 = 4 D and 1/0.020 = 50 D.",
        "Add: P = 54 D, which exceeds the relaxed-eye value of 50 D by the accommodation amount.",
      ],
    },
    category: { foundationalConcept: "FC4", contentCategory: "4D", skill: "quantitative reasoning" },
    difficulty: "easy",
  },
  {
    id: "cp-q19",
    passageId: "cp-p5",
    sectionId: "chem-phys",
    order: 18,
    stem: "What corrective lens power would allow Patient A to see a distant object clearly when the lens is worn directly against the eye?",
    choices: [
      { id: "A", text: "−2.0 D", explanation: "Correct. The lens must form a virtual image of a distant object at the far point (50 cm). With o = ∞ and i = −0.50 m, 1/f = 0 + 1/(−0.50) = −2.0 D, a diverging lens." },
      { id: "B", text: "+2.0 D", explanation: "The magnitude is right but the sign is wrong. A converging lens would increase the power of an already too-powerful myopic eye and worsen the problem." },
      { id: "C", text: "−0.50 D", explanation: "This uses the focal length in meters (−0.50 m) as if it were already a power. Power in diopters is the reciprocal, 1/(−0.50) = −2.0 D." },
      { id: "D", text: "+0.50 D", explanation: "This has both the sign error and the reciprocal error. A converging lens is the wrong type of correction for myopia." },
    ],
    correctChoiceId: "A",
    explanationOverall:
      "Patient A cannot see objects beyond 50 cm, so the corrective lens must make light from infinity appear to come from a virtual image at 50 cm. Because the image is virtual, i = −0.50 m, and f = −0.50 m, so P = −2.0 D. The negative (diverging) lens offsets the excess converging power of the myopic eye.",
    walkthrough: {
      approachNotes:
        "For a corrective lens, ask what image the lens must create so that the eye can focus on it: it must be placed at or within the eye's unaided range (the far point for distant objects).",
      steps: [
        "Set the object distance for a distant object: o = ∞, so 1/o = 0.",
        "Place the image at the far point as a virtual image on the same side as the object: i = −0.50 m.",
        "Apply the lens equation: 1/f = 0 + 1/(−0.50 m) = −2.0 m⁻¹.",
        "Convert to power: P = −2.0 D, a diverging lens, which is consistent with myopia (the eye focuses in front of the retina).",
      ],
    },
    category: { foundationalConcept: "FC4", contentCategory: "4D", skill: "quantitative reasoning" },
    difficulty: "medium",
  },
  {
    id: "cp-q20",
    passageId: "cp-p5",
    sectionId: "chem-phys",
    order: 19,
    stem: "Patient B wants reading glasses (worn against the eye) that allow clear viewing of a page held at 25 cm. What lens power is required?",
    choices: [
      { id: "A", text: "+5.25 D", explanation: "This adds 4.0 D and 1.25 D, which results from giving the virtual image the wrong sign. The image at the near point is virtual, so its term is negative." },
      { id: "B", text: "−2.75 D", explanation: "The magnitude is correct but the sign is wrong. Hyperopia is corrected with a converging (positive) lens, not a diverging one." },
      { id: "C", text: "+2.75 D", explanation: "Correct. The lens must image an object at o = 25 cm to a virtual image at the near point, i = −80 cm: P = 1/0.25 + 1/(−0.80) = 4.0 − 1.25 = +2.75 D." },
      { id: "D", text: "+1.25 D", explanation: "This is the reciprocal of the near-point distance alone (1/0.80). It neglects the 1/o = 4.0 D term for the object at 25 cm." },
    ],
    correctChoiceId: "C",
    explanationOverall:
      "Patient B can see clearly only for objects at least 80 cm away, so the reading lens must take a page at 25 cm and form a virtual image at 80 cm. Using o = +0.25 m and i = −0.80 m gives P = 4.0 − 1.25 = +2.75 D. The positive power reflects that the hyperopic eye lacks sufficient converging power for near objects.",
    walkthrough: {
      approachNotes:
        "Identify the object distance you want to see (25 cm) and the nearest distance the unaided eye can focus on (80 cm). The glasses must create a virtual image there.",
      steps: [
        "Set o = 0.25 m for the page.",
        "Set i = −0.80 m, a virtual image at the patient's near point on the same side as the object.",
        "Apply P = 1/o + 1/i = 1/0.25 + 1/(−0.80).",
        "Evaluate: 4.0 − 1.25 = +2.75 D.",
        "Check sign: hyperopia requires added converging power, so a positive lens is expected.",
      ],
    },
    category: { foundationalConcept: "FC4", contentCategory: "4D", skill: "quantitative reasoning" },
    difficulty: "medium",
  },
  {
    id: "cp-q21",
    passageId: "cp-p5",
    sectionId: "chem-phys",
    order: 20,
    stem: "A ray in air strikes the cornea at an angle of incidence of 30° from the normal. Which is the approximate angle of refraction in the cornea? (sin 30° = 0.50; sin 21° ≈ 0.36; sin 43° ≈ 0.68; sin 15° ≈ 0.26)",
    choices: [
      { id: "A", text: "21°", explanation: "Correct. Snell's law gives sin θ₂ = (1.00)(0.50) / 1.38 ≈ 0.36, so θ₂ ≈ 21°. The ray bends toward the normal in the higher-index medium." },
      { id: "B", text: "30°", explanation: "No bending would occur only if the indices were equal. Here n changes from 1.00 to 1.38, so the ray must bend." },
      { id: "C", text: "43°", explanation: "This results from multiplying by n instead of dividing (sin θ₂ = 0.50 × 1.38 ≈ 0.69). Entering a higher-index medium bends the ray toward the normal, giving an angle smaller than 30°." },
      { id: "D", text: "15°", explanation: "This results from dividing by the index twice (0.50 / 1.38² ≈ 0.26). Snell's law applies the ratio of indices only once." },
    ],
    correctChoiceId: "A",
    explanationOverall:
      "Snell's law is n₁ sin θ₁ = n₂ sin θ₂. With n₁ = 1.00, n₂ = 1.38, and θ₁ = 30°, sin θ₂ = 0.50 / 1.38 ≈ 0.36, so θ₂ ≈ 21°. Light entering the denser cornea bends toward the normal, and the large change in index at the air-cornea interface is why most of the eye's refractive power arises there.",
    walkthrough: {
      approachNotes:
        "Before calculating, predict the direction of bending: going from low n to high n bends the ray toward the normal, so the refracted angle must be smaller than 30°.",
      steps: [
        "Write Snell's law: n₁ sin θ₁ = n₂ sin θ₂ with n₁ = 1.00 and n₂ = 1.38.",
        "Predict that θ₂ < 30° because the ray enters a higher-index medium, which already eliminates 43°.",
        "Solve: sin θ₂ = 0.50 / 1.38 ≈ 0.36.",
        "Match 0.36 to the provided sin 21° ≈ 0.36, giving θ₂ ≈ 21°.",
      ],
    },
    category: { foundationalConcept: "FC4", contentCategory: "4D", skill: "quantitative reasoning" },
    difficulty: "medium",
  },
  {
    id: "cp-q22",
    passageId: "cp-p5",
    sectionId: "chem-phys",
    order: 21,
    stem: "Patient A is evaluated for the corneal laser surgery described in the passage. Which change in corneal shape would correct the myopia, and why?",
    choices: [
      { id: "A", text: "Steepening the central cornea, which increases the eye's converging power and moves the focus onto the retina.", explanation: "The myopic eye already focuses light in front of the retina, so it has too much power for its length. Adding converging power moves the focus even farther forward." },
      { id: "B", text: "Removing tissue to shorten the axial length of the eye, which moves the retina toward the lens.", explanation: "Corneal surface reshaping does not change the distance from the lens to the retina. Moving the retina closer would also place it even farther from the point where the image forms, worsening the blur." },
      { id: "C", text: "Flattening the central cornea, which increases its radius of curvature, lowers its refractive power, and moves the focus back onto the retina.", explanation: "Correct. A flatter surface refracts less, reducing the total power of the eye. The image distance lengthens until it coincides with the retinal plane." },
      { id: "D", text: "Flattening the central cornea, which increases the eye's power and moves the focal point farther in front of the retina.", explanation: "Flattening does reduce the surface's curvature, but a flatter surface refracts less, not more. The stated effect is reversed." },
    ],
    correctChoiceId: "C",
    explanationOverall:
      "In myopia the eye is too powerful for its length, so the image forms in front of the retina. Reducing the curvature of the cornea (the main refracting surface) decreases the eye's total power and lengthens the image distance until it lands on the retina. This has the same optical effect as the −2.0 D diverging lens calculated for Patient A, but achieved by modifying the eye itself.",
    walkthrough: {
      approachNotes:
        "Reason from the lens equation with fixed i = 2.0 cm: if the image forms too early, the eye's power is too high, so the correction must lower the power.",
      steps: [
        "Recall that in myopia the image of a distant object forms in front of the retina, meaning the eye is too converging for its length.",
        "Conclude that the correction must reduce total refractive power, matching the diverging lens used in Question 19.",
        "Relate power to curvature: a flatter surface (larger radius of curvature) bends light less, so flattening the central cornea lowers power.",
        "Verify that the axial length is not changed by corneal reshaping, eliminating choice B, and that choice D has the effect of flattening reversed.",
      ],
    },
    category: { foundationalConcept: "FC4", contentCategory: "4D", skill: "concept application" },
    difficulty: "hard",
  },
  {
    id: "cp-q23",
    passageId: null,
    sectionId: "chem-phys",
    order: 22,
    stem: "A radiopharmaceutical is labeled with an isotope whose half-life is 6.0 h. At calibration its activity is 640 MBq. Hospital policy requires the vial to be discarded once its activity has decayed to 20 MBq. How long after calibration is the vial discarded?",
    choices: [
      { id: "A", text: "24 h", explanation: "Four half-lives is 24 h, at which point the activity is 640 / 16 = 40 MBq, still above 20 MBq." },
      { id: "B", text: "36 h", explanation: "Six half-lives is 36 h, at which point the activity is 640 / 64 = 10 MBq, below the 20 MBq threshold." },
      { id: "C", text: "18 h", explanation: "Three half-lives is 18 h, at which point the activity is 640 / 8 = 80 MBq, far above 20 MBq." },
      { id: "D", text: "30 h", explanation: "Correct. 640 / 20 = 32 = 2⁵, so five half-lives must elapse: 5 × 6.0 h = 30 h." },
    ],
    correctChoiceId: "D",
    explanationOverall:
      "Radioactive decay is first order, so the activity halves every half-life. The required reduction factor is 640 / 20 = 32 = 2⁵, meaning five half-lives are needed. At 6.0 h per half-life, the elapsed time is 30 h.",
    walkthrough: {
      approachNotes:
        "When the ratio of initial to final activity is a clean power of two, count half-lives instead of using exponentials.",
      steps: [
        "Compute the overall reduction factor: 640 / 20 = 32.",
        "Express as a power of two: 32 = 2⁵, so n = 5 half-lives.",
        "Multiply by the half-life: 5 × 6.0 h = 30 h.",
        "Verify by halving repeatedly: 640 → 320 → 160 → 80 → 40 → 20.",
      ],
    },
    category: { foundationalConcept: "FC4", contentCategory: "4E", skill: "quantitative reasoning" },
    difficulty: "easy",
  },
  {
    id: "cp-q24",
    passageId: null,
    sectionId: "chem-phys",
    order: 23,
    stem: "A 25.0 mL sample of 0.100 M weak monoprotic acid HA ($K_a = 1.0 \\times 10^{-5}$) is titrated with 0.100 M NaOH. Which is the approximate pH at the equivalence point? (Use $\\sqrt{5} \\approx 2.2$ and $\\log 7.1 \\approx 0.85$.)",
    choices: [
      { id: "A", text: "7.0", explanation: "A pH of 7 at equivalence applies to a strong acid-strong base titration. At the equivalence point here, the solution contains only A⁻, a weak base, which makes the solution basic." },
      { id: "B", text: "8.9", explanation: "Correct. At equivalence [A⁻] = (0.100 × 25.0) / 50.0 = 0.0500 M, Kb = 1.0 × 10⁻⁹, [OH⁻] = √(Kb × 0.0500) ≈ 7.1 × 10⁻⁶ M, pOH ≈ 5.15, and pH ≈ 8.85 ≈ 8.9." },
      { id: "C", text: "5.0", explanation: "This is the pH at the half-equivalence point (12.5 mL of NaOH), where [HA] = [A⁻] and pH = pKa. It is not the equivalence point." },
      { id: "D", text: "3.0", explanation: "This is the starting pH before any base is added: [H⁺] = √(Ka × 0.100) = 1.0 × 10⁻³ M. At equivalence all the HA has been converted to A⁻." },
    ],
    correctChoiceId: "B",
    explanationOverall:
      "At equivalence the HA has been fully converted into its conjugate base A⁻, and the volume has doubled to 50.0 mL, so [A⁻] = 0.0500 M. A⁻ hydrolyzes with Kb = Kw/Ka = 1.0 × 10⁻⁹, giving [OH⁻] = √(1.0 × 10⁻⁹ × 0.0500) = √(5 × 10⁻¹¹) ≈ 7.1 × 10⁻⁶ M. Then pOH ≈ 5.15 and pH ≈ 14 − 5.15 ≈ 8.85, so the equivalence point of a weak acid-strong base titration lies above 7.",
    walkthrough: {
      approachNotes:
        "Identify which point on the titration curve is asked for. Each special point (initial, half-equivalence, equivalence) uses a different shortcut.",
      steps: [
        "Find the equivalence volume: n(HA) = 0.100 M × 25.0 mL = 2.50 mmol, which needs 25.0 mL of 0.100 M NaOH.",
        "Find [A⁻] at equivalence: 2.50 mmol / 50.0 mL = 0.0500 M.",
        "Compute Kb = Kw / Ka = 1.0 × 10⁻¹⁴ / 1.0 × 10⁻⁵ = 1.0 × 10⁻⁹.",
        "Solve [OH⁻] = √(Kb × [A⁻]) = √(5 × 10⁻¹¹) ≈ 7.1 × 10⁻⁶ M, so pOH ≈ 5.15.",
        "Convert: pH = 14 − 5.15 ≈ 8.85, about 8.9, and eliminate 7.0, 5.0 (half-equivalence), and 3.0 (initial).",
      ],
    },
    category: { foundationalConcept: "FC5", contentCategory: "5A", skill: "quantitative reasoning" },
    difficulty: "hard",
  },
];
