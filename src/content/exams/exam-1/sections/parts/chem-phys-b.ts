import type { Passage, Question } from "@/lib/types";

export const passages: Passage[] = [
  {
    id: "cp-p6",
    sectionId: "chem-phys",
    order: 5,
    kind: "passage",
    title: "Calorimetry and Free Energy of Nutrient Metabolism",
    bodyMarkdown: `Cells harvest chemical energy from nutrients in a series of small steps, whereas a bomb calorimeter releases it all at once as heat. In the bomb calorimeter used here, a weighed sample is ignited in excess $O_2$ inside a rigid, sealed steel vessel submerged in water. The total heat capacity of the vessel, water, and hardware was calibrated at $C_{cal} = 9.80$ kJ/°C, and all heat released is assumed to be absorbed by this assembly.

| Sample (0.500 g each) | Molar mass (g/mol) | Temperature rise, ΔT (°C) |
|---|---|---|
| Glucose, $C_6H_{12}O_6$ | 180 | 0.80 |
| Palmitic acid, $C_{16}H_{32}O_2$ | 256 | 2.00 |

Because the vessel is rigid, the heat measured is the change in internal energy, $q_V = \\Delta U$, and the two quantities are related by

$$\\Delta H = \\Delta U + \\Delta n_{gas}RT$$

Tabulated standard enthalpies of formation are $-394$ kJ/mol for $CO_2(g)$ and $-286$ kJ/mol for $H_2O(l)$. The tabulated standard enthalpy of combustion of glucose, $C_6H_{12}O_6 + 6\\,O_2 \\rightarrow 6\\,CO_2 + 6\\,H_2O(l)$, is $\\Delta H^\\circ_c = -2803$ kJ/mol.

Cells capture part of this energy by coupling exergonic reactions to endergonic ones. Two reactions at 298 K and pH 7 are relevant:

| Reaction | ΔH°′ (kJ/mol) | ΔS°′ (J/mol·K) | ΔG°′ (kJ/mol) |
|---|---|---|---|
| ATP + H₂O → ADP + P$_i$ | −20 | +35 | −30.5 |
| Glucose + P$_i$ → glucose-6-phosphate + H₂O | not measured | not measured | +13.8 |

In the cell, hexokinase catalyzes the transfer of the terminal phosphate of ATP directly to glucose, so that the two reactions in the table occur as a single coupled process. Assume ΔH°′ and ΔS°′ of ATP hydrolysis are independent of temperature.`,
    questionIds: ["cp-q25", "cp-q26", "cp-q27", "cp-q28", "cp-q29"],
  },
  {
    id: "cp-p7",
    sectionId: "chem-phys",
    order: 6,
    kind: "passage",
    title: "Flow and Pressure in a Stenosed Artery Phantom",
    bodyMarkdown: `Atherosclerotic plaque narrows arteries and alters local blood flow. To study this, researchers built a flow phantom: a long, horizontal, rigid tube containing a localized stenosis, perfused at steady flow with a blood-mimicking fluid of density $\\rho = 1060$ kg/m³ and viscosity $\\eta = 3.5 \\times 10^{-3}$ Pa·s. The fluid was treated as incompressible. Catheters measured pressure in the normal segment and at the narrowest point (the throat) of the stenosis, and Doppler ultrasound measured mean flow velocity at each site.

| Location | Radius (mm) | Mean velocity (m/s) |
|---|---|---|
| Normal segment | 2.0 | 0.20 |
| Stenosis throat | 1.0 | 0.80 |

The catheters recorded a pressure drop of 5.0 mmHg between the normal segment and the throat (1 mmHg ≈ 133 Pa). The researchers compared this with the prediction of Bernoulli's equation for an ideal fluid in a horizontal tube,

$$P + \\frac{1}{2}\\rho v^2 = \\text{constant}$$

They also applied the continuity equation, $A_1 v_1 = A_2 v_2$, and Poiseuille's law for the viscous flow of a fluid through a tube of length $L$,

$$Q = \\frac{\\pi \\Delta P\\, r^4}{8 \\eta L}$$

In a second series of trials, the blood-mimicking fluid was replaced with one of twice the viscosity ($7.0 \\times 10^{-3}$ Pa·s) in order to mimic the elevated hematocrit seen in polycythemia. All other conditions were kept identical, and the volumetric flow rate through the phantom decreased.`,
    questionIds: ["cp-q30", "cp-q31", "cp-q32", "cp-q33", "cp-q34"],
  },
];

export const questions: Question[] = [
  {
    id: "cp-q25",
    passageId: "cp-p6",
    sectionId: "chem-phys",
    order: 24,
    stem: "Based on the table, how much heat was released by the combustion of the 0.500 g palmitic acid sample?",
    choices: [
      { id: "A", text: "9.8 kJ", explanation: "This is just the numerical value of the calorimeter's heat capacity (kJ per °C); it has not been multiplied by the 2.00 °C temperature rise." },
      { id: "B", text: "4.9 kJ", explanation: "This multiplies the heat capacity by the sample mass (9.80 × 0.500) instead of by the temperature change; the units do not work out to energy." },
      { id: "C", text: "19.6 kJ", explanation: "Correct. q = C_cal × ΔT = (9.80 kJ/°C)(2.00 °C) = 19.6 kJ released by the 0.500 g sample." },
      { id: "D", text: "39.2 kJ", explanation: "This is the heat released per gram of palmitic acid (19.6 kJ ÷ 0.500 g), not the heat released by the 0.500 g sample actually burned." },
    ],
    correctChoiceId: "C",
    explanationOverall:
      "In a calorimeter, the heat absorbed by the apparatus equals the heat released by the reaction, and q = C × ΔT. With C_cal = 9.80 kJ/°C and ΔT = 2.00 °C, the combustion of the sample released 19.6 kJ. Dividing by the mass would give 39.2 kJ/g, but the question asks about the actual 0.500 g sample.",
    walkthrough: {
      approachNotes:
        "Calorimetry questions are mostly unit management. Decide whether the question asks for total heat, heat per gram, or heat per mole before computing, and let the units of the given heat capacity tell you which quantities to multiply.",
      steps: [
        "Identify the relationship q = C_cal × ΔT, with C_cal in kJ/°C.",
        "Read ΔT for palmitic acid from the table: 2.00 °C.",
        "Multiply: 9.80 kJ/°C × 2.00 °C = 19.6 kJ.",
        "Check what was asked: the heat for the 0.500 g sample, so no further division is needed.",
        "Recognize 39.2 as the per-gram value and eliminate it.",
      ],
    },
    category: { foundationalConcept: "FC5", contentCategory: "5E", skill: "quantitative reasoning" },
    difficulty: "easy",
  },
  {
    id: "cp-q26",
    passageId: "cp-p6",
    sectionId: "chem-phys",
    order: 25,
    stem: "Using the enthalpy data in the passage and Hess's law, what is the standard enthalpy of formation of glucose?",
    choices: [
      { id: "A", text: "−1277 kJ/mol", explanation: "Correct. ΔH°c = Σ ΔH°f(products) − Σ ΔH°f(reactants): −2803 = [6(−394) + 6(−286)] − ΔH°f(glucose), so ΔH°f(glucose) = −4080 + 2803 = −1277 kJ/mol (O₂ is an element, so its ΔH°f is zero)." },
      { id: "B", text: "+1277 kJ/mol", explanation: "This has the correct magnitude but the wrong sign; it comes from subtracting the products' formation enthalpies from the combustion enthalpy in the wrong order." },
      { id: "C", text: "−6883 kJ/mol", explanation: "This adds the combustion enthalpy to the sum of the product formation enthalpies (−2803 − 4080), which treats the combustion enthalpy as if it had the opposite sign." },
      { id: "D", text: "−4080 kJ/mol", explanation: "This is only the sum of the product formation enthalpies, 6(−394) + 6(−286); it omits the combustion enthalpy that links products to glucose." },
    ],
    correctChoiceId: "A",
    explanationOverall:
      "Hess's law lets the enthalpy of combustion be written as the sum of the products' formation enthalpies minus that of the reactants. The products contribute 6(−394) + 6(−286) = −4080 kJ/mol, and O₂ contributes zero, so ΔH°f(glucose) = −4080 − (−2803) = −1277 kJ/mol. A negative value is reasonable because forming glucose from its elements is exothermic.",
    walkthrough: {
      approachNotes:
        "Write the Hess's law expression with 'products minus reactants' explicitly, then solve algebraically for the unknown. Most errors come from sign mistakes when the unknown is a reactant.",
      steps: [
        "Write ΔH°c = Σ n·ΔH°f(products) − Σ n·ΔH°f(reactants).",
        "Compute the product term: 6(−394) + 6(−286) = −2364 − 1716 = −4080 kJ/mol.",
        "Note that O₂(g) is an element in its standard state, so its ΔH°f is zero.",
        "Substitute: −2803 = −4080 − ΔH°f(glucose).",
        "Solve: ΔH°f(glucose) = −4080 + 2803 = −1277 kJ/mol.",
      ],
    },
    category: { foundationalConcept: "FC5", contentCategory: "5E", skill: "quantitative reasoning" },
    difficulty: "medium",
  },
  {
    id: "cp-q27",
    passageId: "cp-p6",
    sectionId: "chem-phys",
    order: 26,
    stem: "What is ΔG°′ for the coupled reaction glucose + ATP → glucose-6-phosphate + ADP, and what does it indicate?",
    choices: [
      { id: "A", text: "−44.3 kJ/mol; the coupled process is spontaneous under standard conditions.", explanation: "This subtracts the endergonic value from the exergonic one (−30.5 − 13.8) instead of adding the two free-energy changes." },
      { id: "B", text: "+44.3 kJ/mol; the coupled process is nonspontaneous under standard conditions.", explanation: "This takes the absolute values of both reactions and adds them, ignoring that ATP hydrolysis has a negative ΔG°′." },
      { id: "C", text: "+16.7 kJ/mol; the coupled process is nonspontaneous under standard conditions.", explanation: "The magnitude is right, but the sign is reversed; the larger-magnitude term is ATP hydrolysis (−30.5), so the net value is negative." },
      { id: "D", text: "−16.7 kJ/mol; the coupled process is spontaneous under standard conditions.", explanation: "Correct. Free energy changes of coupled steps are additive: −30.5 + 13.8 = −16.7 kJ/mol. A negative ΔG°′ means the overall process is favorable." },
    ],
    correctChoiceId: "D",
    explanationOverall:
      "When two reactions share a common intermediate (here, the phosphate group), the overall ΔG is the sum of the individual values. Adding −30.5 and +13.8 kJ/mol gives −16.7 kJ/mol, so the otherwise unfavorable phosphorylation of glucose is driven forward by the hydrolysis of ATP.",
    walkthrough: {
      approachNotes:
        "For coupled reactions, add the ΔG values with their signs, then interpret the sign of the sum. Never take absolute values before adding.",
      steps: [
        "Recognize that the coupled reaction is the sum of the two table reactions; Pᵢ and H₂O cancel.",
        "Add the free-energy changes: (−30.5) + (+13.8).",
        "Obtain −16.7 kJ/mol.",
        "Interpret: ΔG°′ < 0 means the coupled reaction is spontaneous (exergonic) under standard conditions.",
      ],
    },
    category: { foundationalConcept: "FC5", contentCategory: "5E", skill: "quantitative reasoning" },
    difficulty: "medium",
  },
  {
    id: "cp-q28",
    passageId: "cp-p6",
    sectionId: "chem-phys",
    order: 27,
    stem: "Using the values in the passage, what is the approximate ΔG°′ for ATP hydrolysis at body temperature (310 K)?",
    choices: [
      { id: "A", text: "−9.2 kJ/mol", explanation: "This results from a sign error in the entropy term, computing ΔH + TΔS = −20 + 10.85 instead of ΔH − TΔS." },
      { id: "B", text: "−30.9 kJ/mol", explanation: "Correct. ΔG = ΔH − TΔS = −20 kJ/mol − (310 K)(0.035 kJ/mol·K) = −20 − 10.85 ≈ −30.9 kJ/mol." },
      { id: "C", text: "−20.0 kJ/mol", explanation: "This equals ΔH alone and ignores the entropy contribution, which is not negligible here." },
      { id: "D", text: "−1.1 × 10⁴ kJ/mol", explanation: "This forgets to convert ΔS from J to kJ: (310)(35) = 10,850 was subtracted from −20 as though both were in kJ." },
    ],
    correctChoiceId: "B",
    explanationOverall:
      "Because ΔH and ΔS are assumed temperature-independent, ΔG = ΔH − TΔS can be evaluated directly at 310 K. Converting ΔS to 0.035 kJ/mol·K gives TΔS = 10.85 kJ/mol, and ΔG ≈ −20 − 10.85 ≈ −30.9 kJ/mol. As a check, the same equation at 298 K gives about −30.4 kJ/mol, matching the table.",
    walkthrough: {
      approachNotes:
        "Whenever ΔH is in kJ and ΔS is in J, convert before combining. Check your result by confirming it reproduces the given ΔG at the original temperature.",
      steps: [
        "Write ΔG = ΔH − TΔS.",
        "Convert ΔS to kJ: +35 J/mol·K = +0.035 kJ/mol·K.",
        "Compute TΔS at 310 K: 310 × 0.035 ≈ 10.85 kJ/mol.",
        "Subtract: −20 − 10.85 ≈ −30.9 kJ/mol.",
        "Sanity check: at 298 K the same method gives about −30.4 kJ/mol, consistent with −30.5 in the table.",
      ],
    },
    category: { foundationalConcept: "FC5", contentCategory: "5E", skill: "quantitative reasoning" },
    difficulty: "medium",
  },
  {
    id: "cp-q29",
    passageId: "cp-p6",
    sectionId: "chem-phys",
    order: 28,
    stem: "The glucose result from the bomb calorimeter, scaled to one mole (about 2.8 × 10³ kJ/mol released), agrees closely with the tabulated enthalpy of combustion even though the bomb measures ΔU rather than ΔH. Which statement best explains this agreement?",
    choices: [
      { id: "A", text: "The combustion of glucose consumes and produces equal moles of gas, so Δn_gas = 0 and ΔH ≈ ΔU.", explanation: "Correct. Six mol O₂(g) are consumed and six mol CO₂(g) produced (water is liquid), so Δn_gas = 0 and the Δn·RT term vanishes, making ΔH equal to ΔU." },
      { id: "B", text: "The calorimeter operates at constant pressure, so the measured heat equals ΔH exactly for any sample.", explanation: "The passage states the vessel is rigid and sealed, meaning constant volume, so the heat measured is ΔU, not ΔH, in general." },
      { id: "C", text: "Glucose is a solid, so no pressure–volume work can occur in its combustion.", explanation: "PV work depends on the change in moles of gas, not on the physical state of the fuel; palmitic acid is also a solid, but its combustion has Δn_gas = −7." },
      { id: "D", text: "The temperature rise of 0.80 °C is too small for ΔH and ΔU to differ.", explanation: "The difference ΔH − ΔU = Δn_gas·RT depends on the change in moles of gas and on absolute temperature, not on the size of the temperature rise." },
    ],
    correctChoiceId: "A",
    explanationOverall:
      "ΔH = ΔU + Δn_gas·RT, so ΔH and ΔU differ only if the number of moles of gas changes. For glucose, 6 mol O₂ are consumed and 6 mol CO₂ are formed, giving Δn_gas = 0. For palmitic acid (23 mol O₂ consumed, 16 mol CO₂ formed), Δn_gas = −7, so ΔH would be about 17 kJ/mol more negative than ΔU, a small difference relative to its combustion energy.",
    walkthrough: {
      approachNotes:
        "Connect the experimental design (rigid vessel, constant volume) to the thermodynamic quantity actually measured, then use the passage's equation to see when that quantity matches the one tabulated.",
      steps: [
        "Note from the passage that the vessel is rigid, so the measured heat is q_V = ΔU.",
        "Recall ΔH = ΔU + Δn_gas·RT; agreement requires Δn_gas ≈ 0.",
        "Count gas moles for glucose combustion: 6 O₂(g) consumed, 6 CO₂(g) produced, H₂O is liquid, so Δn_gas = 0.",
        "Eliminate the choices that mischaracterize the apparatus (B) or tie the difference to physical state (C) or the size of ΔT (D).",
      ],
    },
    category: { foundationalConcept: "FC5", contentCategory: "5E", skill: "experimental reasoning" },
    difficulty: "hard",
  },
  {
    id: "cp-q30",
    passageId: "cp-p7",
    sectionId: "chem-phys",
    order: 29,
    stem: "At steady state, how does the volumetric flow rate through the stenosis throat compare with that through the normal segment?",
    choices: [
      { id: "A", text: "It is 4 times greater, because the velocity is 4 times greater.", explanation: "The velocity does quadruple (0.20 to 0.80 m/s), but the cross-sectional area falls by a factor of 4 at the same time, so the product Av is unchanged." },
      { id: "B", text: "It is one-fourth as great, because the area is one-fourth as large.", explanation: "This accounts for the smaller area but ignores the compensating fourfold increase in velocity." },
      { id: "C", text: "It is one-sixteenth as great, because flow depends on r⁴.", explanation: "The r⁴ dependence in Poiseuille's law applies to flow driven by a given pressure difference through a uniform tube; it does not mean the flow rate itself differs between two points of the same continuous tube." },
      { id: "D", text: "It is the same, because the fluid is incompressible and no fluid leaves the tube.", explanation: "Correct. By continuity, A₁v₁ = A₂v₂. Check: π(2.0)²(0.20) = π(1.0)²(0.80) in mm²·m/s, so Q is constant." },
    ],
    correctChoiceId: "D",
    explanationOverall:
      "The continuity equation expresses conservation of mass for an incompressible fluid: the same volume per second must pass every cross-section of a tube without branches. The radius halves, so the area drops by a factor of 4 and the velocity rises by a factor of 4, leaving Q unchanged. The table's velocities are consistent with this.",
    walkthrough: {
      approachNotes:
        "For steady flow of an incompressible fluid in a single tube, volumetric flow rate is the same everywhere. Use the table to confirm rather than assume.",
      steps: [
        "Recall Q = Av and the continuity equation A₁v₁ = A₂v₂.",
        "Compare areas: A ∝ r², so halving r reduces A to one-fourth.",
        "Compare velocities in the table: 0.80 / 0.20 = 4.",
        "Multiply: (1/4)(4) = 1, so Q is unchanged.",
      ],
    },
    category: { foundationalConcept: "FC4", contentCategory: "4B", skill: "data-based reasoning" },
    difficulty: "easy",
  },
  {
    id: "cp-q31",
    passageId: "cp-p7",
    sectionId: "chem-phys",
    order: 30,
    stem: "According to Bernoulli's equation for an ideal fluid, approximately what pressure drop is expected between the normal segment and the stenosis throat?",
    choices: [
      { id: "A", text: "339 Pa", explanation: "This is ½ρv² evaluated only at the throat (½ × 1060 × 0.64); it fails to subtract the kinetic-energy term of the normal segment." },
      { id: "B", text: "318 Pa", explanation: "Correct. ΔP = ½ρ(v₂² − v₁²) = ½(1060 kg/m³)(0.64 − 0.04 m²/s²) = 530 × 0.60 = 318 Pa, about 2.4 mmHg." },
      { id: "C", text: "191 Pa", explanation: "This squares the difference of the velocities, ½ρ(v₂ − v₁)², rather than taking the difference of the squared velocities." },
      { id: "D", text: "636 Pa", explanation: "This omits the factor of ½ in the kinetic-energy term, doubling the correct answer." },
    ],
    correctChoiceId: "B",
    explanationOverall:
      "In a horizontal tube there is no height term, so Bernoulli's equation gives P₁ − P₂ = ½ρ(v₂² − v₁²). With v₁ = 0.20 m/s and v₂ = 0.80 m/s, this is 530 × 0.60 = 318 Pa. Dividing by 133 Pa/mmHg gives about 2.4 mmHg, which is smaller than the measured 5.0 mmHg.",
    walkthrough: {
      approachNotes:
        "Bernoulli problems reward careful handling of the squared velocities. Drop the gravitational term when the tube is horizontal, and square each velocity before subtracting.",
      steps: [
        "Write Bernoulli's equation for two points at the same height: P₁ + ½ρv₁² = P₂ + ½ρv₂².",
        "Rearrange: P₁ − P₂ = ½ρ(v₂² − v₁²).",
        "Square the velocities: v₂² = 0.64, v₁² = 0.04, so the difference is 0.60 m²/s².",
        "Multiply by ½ρ = 530 kg/m³: 530 × 0.60 = 318 Pa.",
        "Convert if useful: 318 / 133 ≈ 2.4 mmHg.",
      ],
    },
    category: { foundationalConcept: "FC4", contentCategory: "4B", skill: "quantitative reasoning" },
    difficulty: "medium",
  },
  {
    id: "cp-q32",
    passageId: "cp-p7",
    sectionId: "chem-phys",
    order: 31,
    stem: "Compared with an equal length of the normal segment, the viscous resistance to flow through a stenosed segment of the same length whose radius is half as large is greater by a factor of approximately:",
    choices: [
      { id: "A", text: "2", explanation: "This assumes resistance varies inversely with radius to the first power, which is not what Poiseuille's law predicts." },
      { id: "B", text: "4", explanation: "This assumes resistance follows the inverse of cross-sectional area (1/r²), not the inverse fourth power of radius." },
      { id: "C", text: "16", explanation: "Correct. From Poiseuille's law, resistance R = ΔP/Q = 8ηL/(πr⁴) ∝ 1/r⁴. Halving r increases R by 2⁴ = 16." },
      { id: "D", text: "1/16", explanation: "This inverts the relationship; narrowing a tube raises, rather than lowers, its resistance." },
    ],
    correctChoiceId: "C",
    explanationOverall:
      "Rearranging Poiseuille's law gives R = 8ηL/(πr⁴), so with η and L fixed, resistance varies as 1/r⁴. A twofold decrease in radius produces a 2⁴ = 16-fold increase in resistance, which explains why even moderate stenoses can dramatically impede blood flow.",
    walkthrough: {
      approachNotes:
        "Identify which variables in the equation are held constant, isolate the dependence on the one that changes, and apply the power law to the ratio.",
      steps: [
        "Rearrange Q = πΔP r⁴/(8ηL) into R = ΔP/Q = 8ηL/(πr⁴).",
        "Note η and L are the same in both segments.",
        "Thus R ∝ 1/r⁴.",
        "Halving the radius: (1/2)⁻⁴ = 16.",
      ],
    },
    category: { foundationalConcept: "FC4", contentCategory: "4B", skill: "quantitative reasoning" },
    difficulty: "medium",
  },
  {
    id: "cp-q33",
    passageId: "cp-p7",
    sectionId: "chem-phys",
    order: 32,
    stem: "The measured pressure drop (5.0 mmHg) is larger than the value predicted by Bernoulli's equation (about 2.4 mmHg). Which of the following is the most likely explanation?",
    choices: [
      { id: "A", text: "Bernoulli's equation assumes an ideal, inviscid fluid, but real viscous dissipation in the narrowed segment causes additional pressure loss.", explanation: "Correct. Viscous (frictional) losses, described by Poiseuille's law, convert flow energy to heat and are not included in the ideal Bernoulli equation, so the actual drop exceeds the ideal one." },
      { id: "B", text: "The continuity equation fails in the throat because blood is highly compressible.", explanation: "Blood is essentially incompressible, and the passage states the fluid was treated as such; the table's velocities are consistent with continuity." },
      { id: "C", text: "The fluid density increases in the throat, which increases the kinetic energy term.", explanation: "An incompressible fluid does not change density as it passes through a constriction, and a density change would not be the main source of the discrepancy." },
      { id: "D", text: "Bernoulli's equation predicts that pressure should rise in the throat, so the measurement must be an artifact.", explanation: "Bernoulli's equation predicts a pressure decrease where velocity increases, which is what was observed; the discrepancy is one of magnitude, not direction." },
    ],
    correctChoiceId: "A",
    explanationOverall:
      "Bernoulli's equation expresses conservation of energy for ideal, non-viscous flow. Real blood-mimicking fluid has a viscosity, so some mechanical energy is dissipated as heat as the fluid passes through the narrowed region, producing an extra pressure loss beyond the ideal 2.4 mmHg. Poiseuille's law is the viscous counterpart of Bernoulli's equation.",
    walkthrough: {
      approachNotes:
        "When a measurement differs from an ideal-model prediction, ask which assumption of the model is violated by the experimental setup, and whether the deviation goes in the direction observed.",
      steps: [
        "Note the prediction (2.4 mmHg) is smaller than the observation (5.0 mmHg), so there is additional pressure loss.",
        "List Bernoulli's assumptions: incompressible, steady, non-viscous flow along a streamline.",
        "The passage says the fluid is incompressible and the flow is steady, but gives a nonzero viscosity.",
        "Conclude that viscous energy dissipation accounts for the additional drop.",
        "Eliminate choices that contradict the passage (B, C) or misstate Bernoulli's prediction (D).",
      ],
    },
    category: { foundationalConcept: "FC4", contentCategory: "4B", skill: "data-based reasoning" },
    difficulty: "hard",
  },
  {
    id: "cp-q34",
    passageId: "cp-p7",
    sectionId: "chem-phys",
    order: 33,
    stem: "In the second series of trials, the fluid viscosity was doubled. For a straight, unstenosed tube of fixed length at the same pressure difference, by approximately what factor would the tube radius need to increase to restore the original volumetric flow rate?",
    choices: [
      { id: "A", text: "1.4", explanation: "This is √2, which would be correct if flow depended on r² (cross-sectional area), but Poiseuille's law has an r⁴ dependence." },
      { id: "B", text: "2.0", explanation: "This assumes flow is proportional to r, so doubling the viscosity would be compensated by doubling the radius." },
      { id: "C", text: "16", explanation: "This is 2⁴, the factor by which flow changes when radius is doubled; it is the effect of a 2-fold radius change, not the required compensating change." },
      { id: "D", text: "1.2", explanation: "Correct. Q ∝ r⁴/η, so for constant Q, r⁴ must increase by the same factor as η: r_new/r_old = 2^(1/4) ≈ 1.19." },
    ],
    correctChoiceId: "D",
    explanationOverall:
      "Poiseuille's law gives Q ∝ r⁴/η at fixed ΔP and L. Doubling η halves the flow unless r⁴ also doubles, which requires r to increase by 2^(1/4) ≈ 1.19. The weak fourth-root dependence illustrates why small changes in vessel radius can offset large changes in viscosity.",
    walkthrough: {
      approachNotes:
        "Set up a proportion for the quantity that is held constant (Q), then solve for the unknown ratio by taking a root. Estimate 2^(1/4) as the square root of the square root of 2.",
      steps: [
        "Write Q ∝ r⁴/η with ΔP and L fixed.",
        "Require the same Q before and after: r_new⁴/η_new = r_old⁴/η_old.",
        "With η_new = 2η_old, r_new⁴ = 2 r_old⁴.",
        "Take the fourth root: r_new/r_old = 2^(1/4) = √(√2) ≈ √1.41 ≈ 1.19.",
        "Match the result to the closest choice, about 1.2.",
      ],
    },
    category: { foundationalConcept: "FC4", contentCategory: "4B", skill: "experimental reasoning" },
    difficulty: "hard",
  },
  {
    id: "cp-q35",
    passageId: null,
    sectionId: "chem-phys",
    order: 34,
    stem: "In the Haber process, N₂(g) + 3 H₂(g) → 2 NH₃(g). If 14.0 g of N₂ is allowed to react with 4.00 g of H₂ (molar masses: N₂ = 28.0 g/mol, H₂ = 2.00 g/mol, NH₃ = 17.0 g/mol), what is the theoretical yield of NH₃?",
    choices: [
      { id: "A", text: "8.5 g", explanation: "This corresponds to 0.50 mol of NH₃, which treats the 1:1 mole count of N₂ as the product amount and ignores the 1:2 stoichiometric ratio." },
      { id: "B", text: "17.0 g", explanation: "Correct. N₂ is 0.500 mol and H₂ is 2.00 mol. N₂ needs only 1.50 mol of H₂, so N₂ is limiting: 0.500 mol N₂ × 2 mol NH₃/1 mol N₂ = 1.00 mol NH₃ = 17.0 g." },
      { id: "C", text: "22.7 g", explanation: "This assumes H₂ is limiting (2.00 mol × 2/3 = 1.33 mol NH₃), but 2.00 mol of H₂ is more than the 1.50 mol needed to react with all the N₂." },
      { id: "D", text: "18.0 g", explanation: "This is the total mass of the reactants (14.0 + 4.00). Not all of the H₂ reacts, so the product mass is less than this." },
    ],
    correctChoiceId: "B",
    explanationOverall:
      "Convert masses to moles (0.500 mol N₂, 2.00 mol H₂), then compare to the 1:3 reaction ratio. The 0.500 mol of N₂ would consume 1.50 mol of H₂, which is less than the 2.00 mol available, so N₂ is the limiting reagent and 0.50 mol of H₂ remains in excess (1.0 g). The theoretical yield is 1.00 mol of NH₃, or 17.0 g. Mass is conserved: 17.0 g NH₃ plus 1.0 g leftover H₂ equals 18.0 g.",
    walkthrough: {
      approachNotes:
        "Limiting reagent problems follow one routine: convert to moles, divide by the stoichiometric coefficient (or compare needed vs. available), identify the limiting reagent, and then compute the product from it alone.",
      steps: [
        "Convert to moles: 14.0 g ÷ 28.0 = 0.500 mol N₂; 4.00 g ÷ 2.00 = 2.00 mol H₂.",
        "Compare mole ratios to the coefficients: 0.500/1 = 0.500 for N₂, versus 2.00/3 ≈ 0.667 for H₂.",
        "The smaller value belongs to N₂, so N₂ is limiting.",
        "Compute product from the limiting reagent: 0.500 mol N₂ × 2 = 1.00 mol NH₃.",
        "Convert to mass: 1.00 mol × 17.0 g/mol = 17.0 g.",
      ],
    },
    category: { foundationalConcept: "FC5", contentCategory: "5A", skill: "quantitative reasoning" },
    difficulty: "medium",
  },
  {
    id: "cp-q36",
    passageId: null,
    sectionId: "chem-phys",
    order: 35,
    stem: "A Doppler ultrasound transducer emits 5.0 MHz sound waves directed along the axis of a vessel in which red blood cells move directly toward the transducer at 0.50 m/s. The speed of sound in tissue is 1540 m/s. Treating each red blood cell first as a moving receiver and then as a moving source when it reflects the wave, the frequency of the echo detected by the transducer will exceed the emitted frequency by approximately:",
    choices: [
      { id: "A", text: "0.81 kHz", explanation: "This is about half of the single-shift value; it does not correspond to any correct application of the Doppler formula for these data." },
      { id: "B", text: "1.6 kHz", explanation: "This accounts for only one Doppler shift (f·v/c) and ignores that the cell shifts the frequency twice, once on receiving and once on re-emitting the wave." },
      { id: "C", text: "3.2 kHz", explanation: "Correct. The shift occurs twice: Δf ≈ 2fv/c = 2(5.0 × 10⁶ Hz)(0.50 m/s)/(1540 m/s) ≈ 3.2 × 10³ Hz, and it is positive because the source and reflector approach each other." },
      { id: "D", text: "6.5 kHz", explanation: "This doubles the correct double-shift value (a factor of 4 over the single shift), counting a shift that does not exist in this geometry." },
    ],
    correctChoiceId: "C",
    explanationOverall:
      "A reflecting red blood cell moving toward the transducer first receives a frequency raised by about (1 + v/c), then re-emits that frequency as a moving source, raising it again by about the same fraction. For v much less than c, the total shift is Δf ≈ 2fv/c = 2(5.0 × 10⁶)(0.50)/1540 ≈ 3.2 kHz. The echo frequency is higher than the emitted frequency because the cells approach the transducer.",
    walkthrough: {
      approachNotes:
        "Ultrasound Doppler questions hinge on recognizing that reflection from a moving target produces two shifts. Because v ≪ c, the shift can be approximated as twice the single-shift value without using the full formula.",
      steps: [
        "Recognize that the cell acts first as a moving observer and then as a moving source.",
        "Use the small-speed approximation: each shift is about f·v/c.",
        "Compute the single shift: (5.0 × 10⁶)(0.50)/1540 ≈ 1.6 × 10³ Hz.",
        "Double it for the reflection: ≈ 3.2 × 10³ Hz.",
        "Determine the sign: the source and reflector approach, so the echo frequency is higher, which matches 'exceeds'.",
      ],
    },
    category: { foundationalConcept: "FC4", contentCategory: "4D", skill: "quantitative reasoning" },
    difficulty: "hard",
  },
];
