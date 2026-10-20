import type { Passage, Question } from "@/lib/types";

export const passages: Passage[] = [
  {
    id: "cp-p8",
    sectionId: "chem-phys",
    order: 7,
    kind: "passage",
    title: "Isolating and Identifying a Phenolic Natural Product",
    bodyMarkdown: `A natural-products group extracted raspberry plant material with diethyl ether and obtained a crude mixture containing a neutral compound, a carboxylic acid, and a phenol (compound X). To isolate X, the ether solution was washed first with saturated aqueous $NaHCO_3$ and then with 1 M NaOH. The NaOH layer was separated, acidified to pH 2 with HCl, and re-extracted with fresh ether; drying and evaporation gave X. Approximate $pK_a$ values: carboxylic acid, 4.5; $H_2CO_3$, 6.4; phenol, 10; water, 15.7.

Thin-layer chromatography (TLC) of the crude mixture on silica gel (30% ethyl acetate in hexanes, UV visualization) gave three spots. The solvent front traveled 6.0 cm. Purified X gave a single spot at $R_f$ = 0.42.

| Spot | Distance traveled (cm) | $R_f$ |
|------|------------------------|-------|
| 1 | 4.7 | 0.78 |
| 2 | 2.5 | 0.42 |
| 3 | 0.6 | 0.10 |

Characterization of purified X: molecular formula $C_{10}H_{12}O_2$; IR bands at 3350 (broad), 1710 (strong, sharp), 1610, and 1515 cm⁻¹; UV-Vis maximum at 277 nm with molar absorptivity $\\varepsilon$ = 1.8 × 10³ M⁻¹ cm⁻¹. The ¹H NMR spectrum (the exchangeable OH signal is omitted) is summarized below.

| δ (ppm) | Integration | Multiplicity |
|---------|-------------|--------------|
| 7.05 | 2H | d |
| 6.75 | 2H | d |
| 2.82 | 2H | t |
| 2.72 | 2H | t |
| 2.12 | 3H | s |

These data are consistent with 4-(4-hydroxyphenyl)butan-2-one. Concentrations of X in solution were determined using the Beer–Lambert law,

$$A = \\varepsilon b c$$

where $b$ is the path length of the cuvette.`,
    questionIds: ["cp-q37", "cp-q38", "cp-q39", "cp-q40", "cp-q41"],
  },
  {
    id: "cp-p9",
    sectionId: "chem-phys",
    order: 8,
    kind: "passage",
    title: "Electrostatics of a Nerve Membrane",
    bodyMarkdown: `A neurophysiologist models a patch of squid giant axon membrane as a parallel-plate capacitor. The lipid bilayer has thickness $d$ = 7.0 nm and a measured specific capacitance of 1.0 μF/cm². At rest, the interior of the axon is 70 mV negative relative to the exterior ($V_m$ = −70 mV). The electric field is assumed uniform across the bilayer. The elementary charge is $e$ = 1.6 × 10⁻¹⁹ C.

Ion concentrations at 37 °C are given below. At this temperature $2.3\\,RT/F \\approx$ 61 mV, so the equilibrium (Nernst) potential for an ion of valence $z$ is

$$E_X = \\frac{61\\text{ mV}}{z}\\log_{10}\\frac{[X]_{out}}{[X]_{in}}$$

| Ion | [in] (mM) | [out] (mM) |
|-----|-----------|------------|
| K⁺ | 140 | 5 |
| Na⁺ | 15 | 145 |

In a patch-clamp experiment, Na⁺ channels were blocked and the membrane potential was held at several values while the net current through open K⁺ channels was recorded. Outward (positive-charge-leaving-the-cell) current is defined as positive.

| Clamped $V_m$ (mV) | Net K⁺ current (pA) |
|--------------------|---------------------|
| −100 | −12 |
| −80 | +8 |
| −60 | +28 |
| −40 | +48 |

The current changed sign between −100 mV and −80 mV, and the current increased linearly with $V_m$ over the range studied.`,
    questionIds: ["cp-q42", "cp-q43", "cp-q44", "cp-q45", "cp-q46"],
  },
];

export const questions: Question[] = [
  {
    id: "cp-q37",
    passageId: "cp-p8",
    sectionId: "chem-phys",
    order: 36,
    stem: "A 1.00 mL aliquot of a solution of purified X was diluted to 25.0 mL. The diluted solution gave A = 0.54 at 277 nm in a 1.00 cm cuvette. What was the concentration of X in the original (undiluted) aliquot?",
    choices: [
      { id: "A", text: "1.2 × 10⁻⁵ M", explanation: "This divides the diluted concentration by the dilution factor (3.0 × 10⁻⁴ ÷ 25) instead of multiplying, so the correction for dilution was applied in the wrong direction." },
      { id: "B", text: "3.0 × 10⁻⁴ M", explanation: "This is the concentration in the diluted cuvette solution (0.54 / 1800), not the original aliquot; the 25-fold dilution has not been accounted for." },
      { id: "C", text: "7.5 × 10⁻³ M", explanation: "Correct. c(diluted) = A/(εb) = 0.54 / (1.8 × 10³ × 1.00) = 3.0 × 10⁻⁴ M; the original was 25.0 times more concentrated: 25 × 3.0 × 10⁻⁴ = 7.5 × 10⁻³ M." },
      { id: "D", text: "3.3 × 10³ M", explanation: "This results from inverting the Beer–Lambert relationship (ε/A), which is dimensionally incorrect and physically absurd for a solution concentration." },
    ],
    correctChoiceId: "C",
    explanationOverall:
      "The Beer–Lambert law gives the concentration in the cuvette directly: c = A/(εb) = 3.0 × 10⁻⁴ M. Because the aliquot was diluted from 1.00 mL to 25.0 mL (a 25-fold dilution, from M₁V₁ = M₂V₂), the original solution was 25 times more concentrated, 7.5 × 10⁻³ M.",
    walkthrough: {
      approachNotes:
        "Spectrophotometry questions usually combine two steps: Beer–Lambert for the measured solution, then a dilution correction back to the stock. Track which concentration each number refers to.",
      steps: [
        "Write A = εbc and solve for c = A/(εb).",
        "Substitute: c = 0.54 / (1.8 × 10³ M⁻¹ cm⁻¹ × 1.00 cm) = 3.0 × 10⁻⁴ M in the cuvette.",
        "Use M₁V₁ = M₂V₂ with V₁ = 1.00 mL and V₂ = 25.0 mL; M₁ = M₂ × (V₂/V₁).",
        "M₁ = 3.0 × 10⁻⁴ × 25 = 7.5 × 10⁻³ M.",
        "Sanity check: a more concentrated stock must be more concentrated than the diluted sample, which removes choices A and B.",
      ],
    },
    category: { foundationalConcept: "FC5", contentCategory: "5D", skill: "quantitative reasoning" },
    difficulty: "medium",
  },
  {
    id: "cp-q38",
    passageId: "cp-p8",
    sectionId: "chem-phys",
    order: 37,
    stem: "In the workup, the NaHCO₃ wash removed the carboxylic acid but left X in the ether layer, whereas the NaOH wash extracted X into the aqueous layer. Which statement best explains this selectivity?",
    choices: [
      { id: "A", text: "Bicarbonate is basic enough to deprotonate the carboxylic acid (pKa ~4.5) but not the phenol (pKa ~10); hydroxide is basic enough to deprotonate the phenol, forming a water-soluble phenoxide salt.", explanation: "Correct. A base quantitatively deprotonates an acid only if its conjugate acid has a higher pKa than the acid. H₂CO₃ (6.4) exceeds 4.5 but not 10, while H₂O (15.7) exceeds 10." },
      { id: "B", text: "The phenol is too nonpolar to dissolve in any aqueous solution, even after deprotonation, so NaOH extracts it by an unrelated physical process.", explanation: "Ionic phenoxide salts are water soluble; deprotonation is exactly what moves X into the aqueous phase, so no unrelated mechanism is needed." },
      { id: "C", text: "NaOH reacts with the ketone carbonyl of X to form a stable water-soluble salt, while NaHCO₃ is unreactive toward ketones.", explanation: "Ketones are not acidic enough to form stable salts with NaOH under these conditions; the acidic site that is deprotonated is the phenolic O–H." },
      { id: "D", text: "NaHCO₃ protonates the carboxylic acid, converting it to a neutral species that partitions into the aqueous layer.", explanation: "Bicarbonate acts as a base here, deprotonating (not protonating) the carboxylic acid; also, a neutral organic acid would tend to stay in the ether layer rather than move to water." },
    ],
    correctChoiceId: "A",
    explanationOverall:
      "Acid–base extraction exploits differences in pKa: a species is pulled into water when it is deprotonated to a charged salt. Bicarbonate (conjugate acid pKa 6.4) deprotonates only the carboxylic acid (pKa ~4.5), so the phenol (pKa ~10) stays in ether until the stronger base hydroxide is used.",
    walkthrough: {
      approachNotes:
        "For extraction questions, compare pKa of the organic acid with the pKa of the conjugate acid of the aqueous base. If the base's conjugate acid has the larger pKa, deprotonation is favorable.",
      steps: [
        "List the pKa values: carboxylic acid 4.5, phenol 10, H₂CO₃ 6.4, H₂O 15.7.",
        "For NaHCO₃: 6.4 > 4.5 so the carboxylic acid is deprotonated, but 6.4 < 10 so the phenol is not.",
        "For NaOH: 15.7 > 10 so the phenol is deprotonated to the phenoxide anion, which is water soluble.",
        "Conclude that the selectivity arises from relative acidity, and eliminate options that invoke other reactivity (ketone) or reverse the acid/base roles.",
      ],
    },
    category: { foundationalConcept: "FC5", contentCategory: "5C", skill: "conceptual understanding" },
    difficulty: "medium",
  },
  {
    id: "cp-q39",
    passageId: "cp-p8",
    sectionId: "chem-phys",
    order: 38,
    stem: "The crude mixture is instead separated by silica gel column chromatography using the same 30% ethyl acetate in hexanes. In what order will the three components elute, and why?",
    choices: [
      { id: "A", text: "Spot 3, then spot 2, then spot 1, because the most polar compound is carried fastest by the mobile phase.", explanation: "Reversed. Silica is a polar stationary phase and retains polar compounds more strongly, so the most polar compound (lowest Rf, spot 3) elutes last." },
      { id: "B", text: "Spot 1, then spot 2, then spot 3, because the compound with the highest Rf interacts least with the polar silica and elutes first.", explanation: "Correct. Higher Rf means weaker adsorption to silica relative to dissolution in the mobile phase, so spot 1 elutes first and spot 3 (strongly hydrogen-bonding, most polar) elutes last." },
      { id: "C", text: "All three elute together, because the same solvent is used for all components.", explanation: "Separation depends on differing affinities for stationary and mobile phases; the TLC data show clearly different Rf values, so the components do not co-elute." },
      { id: "D", text: "Spot 2, then spot 1, then spot 3, because X is smaller than the other two compounds and size determines elution on silica.", explanation: "Silica gel chromatography separates by polarity, not size (size-exclusion is a different technique), and the Rf data place spot 1 ahead of spot 2." },
    ],
    correctChoiceId: "B",
    explanationOverall:
      "TLC is a small-scale model of a column: both use polar silica with a relatively nonpolar mobile phase. Compounds with high Rf spend more time in the mobile phase and elute first, so the order is spot 1 (Rf 0.78), spot 2 (Rf 0.42), spot 3 (Rf 0.10).",
    walkthrough: {
      approachNotes:
        "Connect Rf directly to elution order. On normal-phase silica, a larger Rf means less polar and earlier elution.",
      steps: [
        "Identify the stationary phase (polar silica) and mobile phase (less polar EtOAc/hexanes).",
        "Recall that polar compounds adsorb strongly to silica and move less (low Rf).",
        "Rank by Rf: 0.78 > 0.42 > 0.10, so the elution order from the column is spot 1, spot 2, spot 3.",
        "Reject answers that reverse the relationship or invoke molecular size.",
      ],
    },
    category: { foundationalConcept: "FC5", contentCategory: "5C", skill: "data interpretation" },
    difficulty: "easy",
  },
  {
    id: "cp-q40",
    passageId: "cp-p8",
    sectionId: "chem-phys",
    order: 39,
    stem: "The ¹H NMR signals at δ 7.05 (2H, d) and δ 6.75 (2H, d) best support which substitution pattern on the benzene ring of X?",
    choices: [
      { id: "A", text: "Ortho-disubstituted, because each of the four aromatic protons is unique and should appear as a separate 1H signal.", explanation: "An ortho-disubstituted ring with two different groups has four inequivalent aromatic H's and shows four 1H signals, not two 2H doublets." },
      { id: "B", text: "Monosubstituted, because five aromatic protons give a single overlapping multiplet.", explanation: "A monosubstituted ring would integrate for 5H total, but the observed aromatic integration is 4H in two signals." },
      { id: "C", text: "1,3,5-Trisubstituted, because the three aromatic protons are equivalent and appear as a singlet.", explanation: "This would give only 3 aromatic H's, mostly singlets or narrow signals, inconsistent with 4H appearing as two doublets." },
      { id: "D", text: "Para-disubstituted with two different substituents, because there are two sets of two equivalent protons, each coupled to one set of neighbors.", explanation: "Correct. The symmetry plane makes protons ortho to OH equivalent to each other, and those ortho to the alkyl chain equivalent to each other; each set has one neighboring set (n + 1 = 2, a doublet)." },
    ],
    correctChoiceId: "D",
    explanationOverall:
      "Two 2H doublets in the aromatic region are the classic fingerprint of a para-disubstituted benzene bearing two different groups (here OH and the alkyl ketone chain). Symmetry reduces four aromatic protons to two equivalent pairs, and each pair is split into a doublet by its neighboring pair.",
    walkthrough: {
      approachNotes:
        "For NMR substitution patterns, count signals and integrations first (equivalence by symmetry), then use the n + 1 rule to interpret splitting.",
      steps: [
        "Add the aromatic integrations: 2H + 2H = 4H, so the ring has two substituents (6 − 2 = 4 H's).",
        "Two signals for four protons means there are two sets of symmetry-equivalent protons.",
        "Only para (1,4) disubstitution with two different groups gives two equivalent pairs.",
        "Each pair has one neighboring pair, so each appears as a doublet (n + 1 = 2).",
      ],
    },
    category: { foundationalConcept: "FC5", contentCategory: "5D", skill: "data interpretation" },
    difficulty: "medium",
  },
  {
    id: "cp-q41",
    passageId: "cp-p8",
    sectionId: "chem-phys",
    order: 40,
    stem: "A student worries that the final sample of X still contains trace carboxylic acid from an incomplete NaHCO₃ wash. Which feature in the IR spectrum of the final sample would be the most reliable evidence of this contamination?",
    choices: [
      { id: "A", text: "A strong, sharp absorption near 1710 cm⁻¹", explanation: "X itself has a ketone C=O that absorbs near 1710 cm⁻¹, and carboxylic acid C=O absorbs in the same region, so this band cannot distinguish contamination." },
      { id: "B", text: "A broad O–H absorption centered near 3350 cm⁻¹", explanation: "This band is already present in pure X, from the phenolic O–H, so it does not indicate a carboxylic acid." },
      { id: "C", text: "A very broad O–H absorption extending from roughly 3300 down to 2500 cm⁻¹ and overlapping the C–H stretches", explanation: "Correct. Hydrogen-bonded carboxylic acid dimers give a characteristically very broad O–H band spanning ~2500–3300 cm⁻¹, a feature neither the phenol nor the ketone of X produces." },
      { id: "D", text: "Medium absorptions at 1610 and 1515 cm⁻¹", explanation: "These are aromatic C=C stretches and are already present in pure X." },
    ],
    correctChoiceId: "C",
    explanationOverall:
      "The key to this question is that X already has an O–H (phenol) and a C=O (ketone), so the obvious carboxylic acid bands overlap with X's own. Only the exceptionally broad 2500–3300 cm⁻¹ O–H envelope of a hydrogen-bonded carboxylic acid would be new.",
    walkthrough: {
      approachNotes:
        "When looking for a contaminant that shares functional groups with the product, find the one IR feature unique to the contaminant rather than the usual textbook peaks.",
      steps: [
        "List IR bands already assigned to pure X: 3350 (phenol O–H), 1710 (ketone C=O), 1610 and 1515 (aromatic C=C).",
        "Recall that carboxylic acids show C=O near 1700–1725 and an O–H that is far broader than a phenol O–H.",
        "Eliminate choices that match bands present in pure X (A, B, D).",
        "The very broad 2500–3300 cm⁻¹ absorption is unique to the carboxylic acid dimer and is the best diagnostic.",
      ],
    },
    category: { foundationalConcept: "FC5", contentCategory: "5D", skill: "experimental reasoning" },
    difficulty: "hard",
  },
  {
    id: "cp-q42",
    passageId: "cp-p9",
    sectionId: "chem-phys",
    order: 41,
    stem: "What is the magnitude of the net charge stored on each face of a 1.0 cm² patch of membrane at the resting potential?",
    choices: [
      { id: "A", text: "7.0 × 10⁻¹¹ C", explanation: "This is smaller by a factor of 10³ than the correct value, as would result from converting 70 mV to volts incorrectly (× 10⁻⁶ instead of × 10⁻³)." },
      { id: "B", text: "7.0 × 10⁻⁸ C", explanation: "Correct. Q = CV = (1.0 × 10⁻⁶ F)(0.070 V) = 7.0 × 10⁻⁸ C." },
      { id: "C", text: "7.0 × 10⁻⁵ C", explanation: "This results from using 70 instead of 0.070 V, forgetting to convert millivolts to volts." },
      { id: "D", text: "1.4 × 10⁻⁸ C", explanation: "This divides capacitance by voltage (C/V) rather than multiplying; the relationship is Q = CV." },
    ],
    correctChoiceId: "B",
    explanationOverall:
      "A capacitor stores charge Q = CV. The 1.0 cm² patch has C = 1.0 μF = 1.0 × 10⁻⁶ F and V = 70 mV = 0.070 V, so Q = 7.0 × 10⁻⁸ C on each face of the membrane (about 4 × 10¹¹ elementary charges).",
    walkthrough: {
      approachNotes:
        "Convert every quantity to SI units before multiplying. Unit slips in μ and m prefixes are the most common trap in this type of calculation.",
      steps: [
        "The patch area is 1.0 cm², so the capacitance is 1.0 μF/cm² × 1.0 cm² = 1.0 × 10⁻⁶ F.",
        "Convert the voltage: 70 mV = 0.070 V.",
        "Apply Q = CV = (1.0 × 10⁻⁶)(0.070) = 7.0 × 10⁻⁸ C.",
      ],
    },
    category: { foundationalConcept: "FC4", contentCategory: "4C", skill: "quantitative reasoning" },
    difficulty: "easy",
  },
  {
    id: "cp-q43",
    passageId: "cp-p9",
    sectionId: "chem-phys",
    order: 42,
    stem: "Using the concentrations in the passage, what is the Nernst equilibrium potential for K⁺ (inside relative to outside)?",
    choices: [
      { id: "A", text: "+88 mV", explanation: "This has the correct magnitude but the wrong sign, which results from inverting the concentration ratio ([in]/[out])." },
      { id: "B", text: "−203 mV", explanation: "This results from using the natural log (ln 0.0357 = −3.33) with the 61 mV prefactor, which was derived for log base 10." },
      { id: "C", text: "−44 mV", explanation: "This would be obtained by dividing by z = 2, but K⁺ is monovalent (z = +1)." },
      { id: "D", text: "−88 mV", explanation: "Correct. E_K = (61 mV / 1) × log₁₀(5/140) = 61 × (−1.45) ≈ −88 mV." },
    ],
    correctChoiceId: "D",
    explanationOverall:
      "For K⁺ (z = +1), E_K = 61 mV × log₁₀([K⁺]out/[K⁺]in) = 61 × log₁₀(5/140). Since 5/140 ≈ 1/28 and log₁₀(28) ≈ 1.45, E_K ≈ −88 mV; the negative sign reflects that K⁺ concentration is higher inside, so K⁺ tends to diffuse out until the inside is negative.",
    walkthrough: {
      approachNotes:
        "Check the form of the Nernst equation given in the passage (log₁₀ with 61 mV, outside over inside) and sanity check the sign: a cation concentrated inside has a negative equilibrium potential.",
      steps: [
        "Write E_K = (61 mV/z) log₁₀([K⁺]out/[K⁺]in) with z = +1.",
        "Compute the ratio: 5/140 ≈ 0.0357 ≈ 1/28.",
        "log₁₀(1/28) = −log₁₀(28) ≈ −(1 + 0.45) = −1.45.",
        "E_K ≈ 61 × (−1.45) ≈ −88 mV.",
      ],
    },
    category: { foundationalConcept: "FC5", contentCategory: "5E", skill: "quantitative reasoning" },
    difficulty: "medium",
  },
  {
    id: "cp-q44",
    passageId: "cp-p9",
    sectionId: "chem-phys",
    order: 43,
    stem: "When the membrane potential is clamped at −100 mV, which statement best describes the net K⁺ movement and its cause?",
    choices: [
      { id: "A", text: "Net inward K⁺ movement, because the inward electrical force on K⁺ exceeds the outward chemical (concentration) driving force.", explanation: "Correct. At −100 mV the potential is more negative than E_K (about −88 mV), so the inward electrical force exceeds the outward diffusion force, producing a net inward (negative) current as observed." },
      { id: "B", text: "Net outward K⁺ movement, because [K⁺] is higher inside the cell than outside.", explanation: "This considers only the chemical gradient. The negative current in the table means net inward movement, because the electrical force dominates at this potential." },
      { id: "C", text: "No net K⁺ movement, because the membrane is at the K⁺ equilibrium potential.", explanation: "The equilibrium potential is about −88 mV, not −100 mV, and the measured current is nonzero (−12 pA)." },
      { id: "D", text: "Net inward K⁺ movement, because the clamp opens additional Na⁺ channels that carry K⁺ into the cell.", explanation: "Na⁺ channels were blocked in the experiment, and Na⁺ channels do not carry K⁺ in any case." },
    ],
    correctChoiceId: "A",
    explanationOverall:
      "The net current reverses sign at E_K. Holding the membrane more negative than E_K (−100 mV < −88 mV) means the electrical force pulling cations inward outweighs the outward chemical force, so the net K⁺ flux, and the measured current of −12 pA, is inward.",
    walkthrough: {
      approachNotes:
        "Net ion flux depends on the driving force V_m − E_ion. Compare the clamped potential with the Nernst potential, not just the concentration gradient.",
      steps: [
        "Recall E_K ≈ −88 mV from the Nernst equation, and note the current reverses between −100 and −80 mV, consistent with this value.",
        "Compute the driving force at −100 mV: V_m − E_K ≈ −12 mV (negative, inward).",
        "Match to the table: the current at −100 mV is −12 pA (inward by the stated sign convention).",
        "Reject choices that consider only the chemical gradient or that invoke blocked Na⁺ channels.",
      ],
    },
    category: { foundationalConcept: "FC5", contentCategory: "5E", skill: "data interpretation" },
    difficulty: "medium",
  },
  {
    id: "cp-q45",
    passageId: "cp-p9",
    sectionId: "chem-phys",
    order: 44,
    stem: "In a model of hyperkalemia, the extracellular K⁺ concentration is raised from 5 mM to 20 mM while the intracellular concentration remains 140 mM. Approximately what is the new E_K?",
    choices: [
      { id: "A", text: "−88 mV (unchanged), because E_K depends only on intracellular concentration", explanation: "The Nernst potential depends on the ratio of outside to inside concentration, so changing [K⁺]out changes E_K." },
      { id: "B", text: "−125 mV", explanation: "This incorrectly assumes raising [K⁺]out makes E_K more negative; it comes from subtracting 61 × log(20/5) = 37 mV from −88 mV." },
      { id: "C", text: "−52 mV", explanation: "Correct. E_K = 61 × log₁₀(20/140) = 61 × log₁₀(1/7) = 61 × (−0.845) ≈ −52 mV." },
      { id: "D", text: "−26 mV", explanation: "This is half the correct value, as would result from dividing by z = 2 even though K⁺ is monovalent." },
    ],
    correctChoiceId: "C",
    explanationOverall:
      "Raising [K⁺]out reduces the concentration gradient driving K⁺ efflux, so E_K becomes less negative: 61 × log₁₀(20/140) ≈ −52 mV. Because the resting membrane potential is largely set by K⁺ permeability, the cell would be depolarized toward this new value.",
    walkthrough: {
      approachNotes:
        "Use the same Nernst expression, change only the one concentration, and use qualitative reasoning (a smaller gradient gives a less negative E_K) to screen choices.",
      steps: [
        "Substitute the new concentrations: E_K = 61 × log₁₀(20/140).",
        "Simplify the ratio: 20/140 = 1/7, so log₁₀(1/7) = −log₁₀(7) ≈ −0.845.",
        "Multiply: 61 × (−0.845) ≈ −52 mV.",
        "Check direction: less steep gradient, therefore E_K moves from −88 mV toward zero, which is consistent with −52 mV.",
      ],
    },
    category: { foundationalConcept: "FC5", contentCategory: "5E", skill: "quantitative reasoning" },
    difficulty: "hard",
  },
  {
    id: "cp-q46",
    passageId: "cp-p9",
    sectionId: "chem-phys",
    order: 45,
    stem: "A Na⁺ ion enters the axon through the membrane at the resting potential. Assuming a uniform field across the 7.0 nm bilayer, what are the work done on the ion by the electric field and the electric force on the ion?",
    choices: [
      { id: "A", text: "−1.1 × 10⁻²⁰ J; 1.6 × 10⁻¹² N directed outward", explanation: "The sign and direction are both wrong: a cation entering a cell whose interior is negative moves with the field and the force, so the field does positive work." },
      { id: "B", text: "+1.1 × 10⁻²⁰ J; 1.6 × 10⁻¹² N directed inward", explanation: "Correct. E = V/d = 0.070 / 7.0 × 10⁻⁹ = 1.0 × 10⁷ V/m, pointing inward (from + exterior to − interior). F = eE = 1.6 × 10⁻¹² N inward, and W = Fd = eV = 1.1 × 10⁻²⁰ J." },
      { id: "C", text: "+1.1 × 10⁻¹⁷ J; 1.6 × 10⁻⁹ N directed inward", explanation: "The direction and sign are correct but the magnitudes are 10³ too large, resulting from using 70 (mV) instead of 0.070 V." },
      { id: "D", text: "+1.1 × 10⁻²⁰ J; 1.6 × 10⁻¹² N directed outward", explanation: "The magnitudes are correct but the force on a positive ion is parallel to the field, which points inward because the interior is negative." },
    ],
    correctChoiceId: "B",
    explanationOverall:
      "With the inside 70 mV negative, the field points inward, E = V/d = 1.0 × 10⁷ V/m. A Na⁺ ion feels F = eE = 1.6 × 10⁻¹² N inward, and as it crosses the bilayer the field does positive work W = Fd = eV = 1.1 × 10⁻²⁰ J.",
    walkthrough: {
      approachNotes:
        "Determine the direction of the field first (it points from positive to negative), then compute magnitudes in SI units and use the sign of the charge to get the direction of force and sign of work.",
      steps: [
        "Compute the field magnitude: E = V/d = 0.070 V / 7.0 × 10⁻⁹ m = 1.0 × 10⁷ V/m.",
        "Direction: the exterior is positive relative to the interior, so the field points inward.",
        "Force on Na⁺: F = eE = (1.6 × 10⁻¹⁹)(1.0 × 10⁷) = 1.6 × 10⁻¹² N, in the direction of the field (inward).",
        "Work as the ion crosses 7.0 nm along the force: W = Fd = (1.6 × 10⁻¹²)(7.0 × 10⁻⁹) ≈ 1.1 × 10⁻²⁰ J, positive.",
        "Cross-check with W = qΔV magnitude: (1.6 × 10⁻¹⁹)(0.070) = 1.1 × 10⁻²⁰ J.",
      ],
    },
    category: { foundationalConcept: "FC4", contentCategory: "4C", skill: "quantitative reasoning" },
    difficulty: "medium",
  },
  {
    id: "cp-q47",
    passageId: null,
    sectionId: "chem-phys",
    order: 46,
    stem: "Which statement about the stereoisomers of 2,3-dibromobutane is correct?",
    choices: [
      { id: "A", text: "(2R,3R) and (2S,3S) are enantiomers, and (2R,3S) is an achiral meso compound that is a diastereomer of each of them.", explanation: "Correct. The (2R,3R)/(2S,3S) pair are non-superimposable mirror images. (2R,3S) has an internal mirror plane (meso, achiral), and is a diastereomer of both chiral isomers. Three stereoisomers exist in total." },
      { id: "B", text: "(2R,3S) and (2S,3R) are enantiomers of each other.", explanation: "These two descriptors name the same meso compound (rotating the molecule 180° converts one to the other), so they are identical, not enantiomers." },
      { id: "C", text: "(2R,3R) and (2R,3S) are enantiomers because they differ at only one stereocenter.", explanation: "Enantiomers must differ at every stereocenter. Compounds differing at only some, but not all, stereocenters are diastereomers." },
      { id: "D", text: "Four stereoisomers exist (2^n with n = 2), and all four are optically active.", explanation: "2^n is only a maximum. Because the molecule has identical halves, the (2R,3S) form is meso and optically inactive, so there are only three stereoisomers." },
    ],
    correctChoiceId: "A",
    explanationOverall:
      "2,3-Dibromobutane has two stereocenters with identical substituent sets, so it has only three stereoisomers: an enantiomeric pair (R,R) and (S,S), and one meso compound (R,S) with an internal mirror plane. The meso compound is a diastereomer of both enantiomers.",
    walkthrough: {
      approachNotes:
        "Whenever a molecule has two stereocenters bearing the same set of substituents, check for a meso form before applying the 2^n rule.",
      steps: [
        "Identify the stereocenters: C2 and C3, each bonded to H, Br, CH₃, and the other stereocenter.",
        "Because the two ends are identical, an internal mirror plane is possible in the (R,S) configuration, making it meso.",
        "(R,R) and (S,S) are non-superimposable mirror images, i.e. enantiomers.",
        "The meso compound is not a mirror image of either one, so it is a diastereomer of both.",
        "Total stereoisomers = 3, which rules out the 2^n = 4 claim.",
      ],
    },
    category: { foundationalConcept: "FC5", contentCategory: "5D", skill: "conceptual understanding" },
    difficulty: "medium",
  },
  {
    id: "cp-q48",
    passageId: null,
    sectionId: "chem-phys",
    order: 47,
    stem: "A 2.0 kg block is released from rest at the top of a rough incline, 3.0 m above the bottom. It reaches the bottom with a speed of 6.0 m/s. Using g = 10 m/s², what is the work done by friction on the block during the descent?",
    choices: [
      { id: "A", text: "−60 J", explanation: "This is the work done by gravity (with a sign change), mgh = 60 J; it ignores that part of the energy appears as kinetic energy." },
      { id: "B", text: "−36 J", explanation: "This is the final kinetic energy, equal to the net work, not the work done by friction alone." },
      { id: "C", text: "+24 J", explanation: "The magnitude is right but the sign is wrong: friction opposes motion, so it removes mechanical energy from the block and does negative work." },
      { id: "D", text: "−24 J", explanation: "Correct. W_net = ΔKE = ½(2.0)(6.0)² = 36 J, W_gravity = mgh = 60 J, so W_friction = 36 − 60 = −24 J." },
    ],
    correctChoiceId: "D",
    explanationOverall:
      "By the work–energy theorem, the net work equals the change in kinetic energy: 36 J. Gravity contributes +60 J, so friction must contribute 36 − 60 = −24 J. The negative sign means friction dissipated 24 J of mechanical energy as thermal energy.",
    walkthrough: {
      approachNotes:
        "Apply W_net = ΔKE and list each force's work separately. Friction's work is the difference between the net work and the other contributions.",
      steps: [
        "Compute ΔKE: ½mv² − 0 = ½(2.0)(6.0)² = 36 J.",
        "Compute work by gravity: mgh = (2.0)(10)(3.0) = 60 J (positive since the block moves down).",
        "The normal force does no work, so W_gravity + W_friction = ΔKE.",
        "W_friction = 36 − 60 = −24 J.",
      ],
    },
    category: { foundationalConcept: "FC4", contentCategory: "4A", skill: "quantitative reasoning" },
    difficulty: "medium",
  },
];
