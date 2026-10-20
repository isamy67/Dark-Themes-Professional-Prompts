import type { Passage, Question } from "@/lib/types";

export const passages: Passage[] = [
  {
    id: "bb-p10",
    sectionId: "bio-biochem",
    order: 9,
    kind: "passage",
    title: "SGLT2 Inhibition and Renal Handling of Glucose",
    bodyMarkdown: `The proximal tubule normally reabsorbs essentially all filtered glucose. Glucose enters tubular cells across the apical membrane through sodium-glucose cotransporter 2 (SGLT2) and leaves across the basolateral membrane through the facilitated transporter GLUT2. Because carriers saturate, glucose reabsorption has a transport maximum ($T_m$): when the filtered load, $\\text{GFR} \\times P_{\\text{glucose}}$, exceeds the capacity of the tubule, the excess appears in the urine.

Researchers tested an SGLT2 inhibitor in adults with type 2 diabetes mellitus. Eighty participants who were not taking diuretics or RAAS inhibitors were randomized to placebo or the drug for 4 weeks (n = 40 per group). Fasting measurements at the end of the study were averaged within each group.

| Measurement | Placebo | SGLT2 inhibitor |
|---|---|---|
| Plasma glucose (mg/dL) | 200 | 160 |
| GFR (mL/min) | 90 | 84 |
| Urinary glucose excretion (mg/min) | 0 | 50 |
| 24-hour urine volume (L) | 1.6 | 2.1 |
| Systolic blood pressure (mmHg) | 142 | 134 |
| Plasma renin activity (ng/mL/h) | 1.0 | 1.8 |

Investigators noted that SGLT2 inhibition increases delivery of NaCl to the macula densa, and that the drug modestly lowers blood pressure and plasma volume. Renin is secreted by juxtaglomerular cells of the afferent arteriole; it cleaves angiotensinogen to angiotensin I, which angiotensin-converting enzyme (ACE) converts to angiotensin II. At physiologic concentrations, angiotensin II preferentially constricts the efferent arteriole and also stimulates aldosterone secretion from the adrenal cortex.

For calculations, assume 1 dL = 100 mL.`,
    questionIds: ["bb-q49", "bb-q50", "bb-q51", "bb-q52", "bb-q53"],
  },
];

export const questions: Question[] = [
  {
    id: "bb-q49",
    passageId: "bb-p10",
    sectionId: "bio-biochem",
    order: 48,
    stem: "Which statement best describes how SGLT2 moves glucose from the tubular lumen into proximal tubule cells?",
    choices: [
      { id: "A", text: "SGLT2 hydrolyzes ATP directly to pump glucose against its concentration gradient.", explanation: "SGLT2 is not an ATPase. It does not hydrolyze ATP itself, so this describes primary active transport, which is not how this carrier works." },
      { id: "B", text: "SGLT2 allows glucose to move down its concentration gradient by facilitated diffusion.", explanation: "Intracellular glucose concentration can exceed luminal concentration as glucose is reclaimed, so net movement into the cell would stall. Facilitated diffusion describes GLUT2 on the basolateral side, not SGLT2." },
      { id: "C", text: "SGLT2 couples glucose uptake to Na+ entry, using the Na+ gradient maintained by the basolateral Na+/K+-ATPase.", explanation: "Correct. This is secondary active transport: the Na+ gradient set up by the Na+/K+-ATPase provides the energy, and Na+ and glucose are cotransported in the same direction." },
      { id: "D", text: "SGLT2 exchanges luminal glucose for intracellular H+ in an antiport process.", explanation: "SGLT2 is a symporter that moves Na+ and glucose in the same direction. H+ exchange is the mechanism of the Na+/H+ exchanger, a different proximal tubule transporter." },
    ],
    correctChoiceId: "C",
    explanationOverall:
      "SGLT2 is a Na+-glucose symporter. The basolateral Na+/K+-ATPase keeps intracellular Na+ low, and the resulting inward Na+ gradient drives glucose into the cell against its own gradient; glucose then exits through GLUT2 by facilitated diffusion. This is the textbook example of secondary active transport.",
    walkthrough: {
      approachNotes:
        "Transport questions are about identifying the energy source. Decide whether ATP is used directly (primary), indirectly through an ion gradient (secondary), or not at all (passive).",
      steps: [
        "Note the passage describes a sodium-glucose cotransporter, so Na+ is moved along with glucose.",
        "Recognize that glucose must be reclaimed from the lumen even when luminal glucose is low, so the process must be active.",
        "Identify the energy source as the Na+ gradient created by the basolateral Na+/K+-ATPase, not ATP use by SGLT2 itself.",
        "Eliminate facilitated diffusion (that is GLUT2) and the H+ antiport option, which describes a different transporter.",
      ],
    },
    category: { foundationalConcept: "FC2", contentCategory: "2A", skill: "scientific reasoning" },
    difficulty: "easy",
  },
  {
    id: "bb-q50",
    passageId: "bb-p10",
    sectionId: "bio-biochem",
    order: 49,
    stem: "Based on the data in the table, approximately how much glucose was being reabsorbed per minute in the SGLT2 inhibitor group?",
    choices: [
      { id: "A", text: "34 mg/min", explanation: "This does not correspond to any step of the calculation. It likely results from subtracting the wrong quantities, such as confusing GFR with plasma glucose." },
      { id: "B", text: "84 mg/min", explanation: "Correct. Filtered load = 0.84 dL/min x 160 mg/dL, about 134 mg/min. Reabsorbed = filtered - excreted = 134 - 50, about 84 mg/min." },
      { id: "C", text: "134 mg/min", explanation: "This is the filtered load, not the amount reabsorbed. Because 50 mg/min was excreted, reabsorption must be lower than the filtered load." },
      { id: "D", text: "184 mg/min", explanation: "This adds excretion to the filtered load. Excreted glucose is part of the filtered load that was not reabsorbed, so it must be subtracted." },
    ],
    correctChoiceId: "B",
    explanationOverall:
      "Filtered load equals GFR times plasma concentration: 84 mL/min is 0.84 dL/min, and 0.84 x 160 is about 134 mg/min. Reabsorption equals filtered load minus excretion (no glucose is secreted or metabolized by the tubule in this simplified model), so 134 - 50 is about 84 mg/min. Compared with the roughly 180 mg/min reabsorbed in the placebo group, the drug cuts reabsorption by more than half.",
    walkthrough: {
      approachNotes:
        "Renal clearance-style problems follow the mass balance: filtered = reabsorbed + excreted (minus secreted). Convert units first, then compute.",
      steps: [
        "Convert GFR to dL/min: 84 mL/min = 0.84 dL/min.",
        "Compute filtered load: 0.84 dL/min x 160 mg/dL, about 134 mg/min.",
        "Apply mass balance: reabsorbed = filtered - excreted = 134 - 50.",
        "Reabsorbed is about 84 mg/min, matching choice B; C is the filtered load and D wrongly adds excretion.",
      ],
    },
    category: { foundationalConcept: "FC3", contentCategory: "3B", skill: "data-based reasoning" },
    difficulty: "medium",
  },
  {
    id: "bb-q51",
    passageId: "bb-p10",
    sectionId: "bio-biochem",
    order: 50,
    stem: "The increase in 24-hour urine volume in the SGLT2 inhibitor group is best explained by which of the following?",
    choices: [
      { id: "A", text: "The drug blocks insertion of aquaporin-2 channels into the collecting duct membrane.", explanation: "Nothing in the passage suggests the drug acts on collecting duct water channels. SGLT2 is a proximal tubule transporter and aquaporin-2 regulation is unrelated to its inhibition." },
      { id: "B", text: "The drug increases GFR, which increases the volume of filtrate formed.", explanation: "The table shows GFR actually fell slightly, from 90 to 84 mL/min, so increased filtration cannot explain the larger urine volume." },
      { id: "C", text: "Higher renin activity increases aldosterone, which promotes water excretion.", explanation: "Aldosterone increases Na+ reabsorption and, secondarily, water retention. It would reduce, not increase, urine volume." },
      { id: "D", text: "Glucose that is not reabsorbed raises tubular fluid osmolarity, so less water is reabsorbed and more is excreted.", explanation: "Correct. Unreabsorbed glucose acts as an osmotically active solute in the lumen, producing an osmotic diuresis." },
    ],
    correctChoiceId: "D",
    explanationOverall:
      "When SGLT2 is inhibited, glucose remains in the tubular fluid. Because it is osmotically active and is not reabsorbed, it holds water in the lumen and urine volume rises (osmotic diuresis). The other options contradict the data (GFR fell) or misstate aldosterone's effect.",
    walkthrough: {
      approachNotes:
        "When a question asks why volume changes, check the data table first to rule out options that contradict it, then consider which solutes remain in the tubule.",
      steps: [
        "Note that urine volume rose from 1.6 to 2.1 L/day while urinary glucose rose from 0 to 50 mg/min.",
        "Check GFR: it decreased, which eliminates choice B.",
        "Recall that aldosterone favors salt and water retention, which eliminates choice C.",
        "Recognize that unreabsorbed glucose in the filtrate is an osmotic load that retains water, giving osmotic diuresis.",
      ],
    },
    category: { foundationalConcept: "FC3", contentCategory: "3B", skill: "data-based reasoning" },
    difficulty: "medium",
  },
  {
    id: "bb-q52",
    passageId: "bb-p10",
    sectionId: "bio-biochem",
    order: 51,
    stem: "If participants taking the SGLT2 inhibitor were also given an ACE inhibitor, GFR would most likely:",
    choices: [
      { id: "A", text: "decrease, because reduced angiotensin II causes efferent arteriolar dilation and lowers glomerular capillary hydrostatic pressure.", explanation: "Correct. With renin already elevated and volume lowered, efferent tone is helping maintain filtration pressure. Removing angiotensin II dilates the efferent arteriole, lowering glomerular hydrostatic pressure and GFR." },
      { id: "B", text: "increase, because reduced angiotensin II dilates the efferent arteriole and increases renal blood flow.", explanation: "Efferent dilation does raise renal blood flow, but it also lowers glomerular capillary pressure, which is the dominant driver of filtration. GFR falls rather than rises." },
      { id: "C", text: "remain unchanged, because ACE inhibitors affect only aldosterone secretion.", explanation: "ACE inhibitors reduce angiotensin II formation, which has direct arteriolar effects as well as stimulating aldosterone. GFR is therefore affected." },
      { id: "D", text: "increase, because lower aldosterone reduces Na+ reabsorption and increases Bowman's space hydrostatic pressure.", explanation: "Increased Bowman's space pressure would oppose filtration and decrease GFR, and the aldosterone effect is on the collecting duct, downstream of the glomerulus." },
    ],
    correctChoiceId: "A",
    explanationOverall:
      "Angiotensin II constricts the efferent arteriole, which raises glomerular capillary hydrostatic pressure and helps preserve GFR when renal perfusion is reduced. An ACE inhibitor removes that constriction, so glomerular pressure and GFR fall, an effect most pronounced in volume-depleted states like the one produced by this drug.",
    walkthrough: {
      approachNotes:
        "For GFR questions, track the Starling forces. Constricting the efferent arteriole raises glomerular capillary pressure and GFR; dilating it lowers both.",
      steps: [
        "Recall that ACE inhibitors reduce angiotensin II production.",
        "Use the passage: angiotensin II preferentially constricts the efferent arteriole.",
        "Remove that constriction: the efferent arteriole dilates, glomerular capillary hydrostatic pressure falls, and GFR falls.",
        "Eliminate B (confuses blood flow with filtration pressure), C (ignores direct arteriolar effects), and D (wrong direction and wrong site).",
      ],
    },
    category: { foundationalConcept: "FC3", contentCategory: "3B", skill: "scientific reasoning" },
    difficulty: "hard",
  },
  {
    id: "bb-q53",
    passageId: "bb-p10",
    sectionId: "bio-biochem",
    order: 52,
    stem: "Which mechanism best accounts for the small decrease in GFR (90 to 84 mL/min) seen with the SGLT2 inhibitor?",
    choices: [
      { id: "A", text: "Constriction of the efferent arteriole by elevated angiotensin II.", explanation: "Efferent constriction raises glomerular capillary pressure and would tend to increase, not decrease, GFR." },
      { id: "B", text: "Constriction of the afferent arteriole through tubuloglomerular feedback from increased NaCl delivery to the macula densa.", explanation: "Correct. Reduced proximal reabsorption increases distal NaCl delivery, and the macula densa signals the afferent arteriole to constrict, lowering glomerular pressure and GFR." },
      { id: "C", text: "An increase in the glomerular filtration coefficient.", explanation: "A larger filtration coefficient (more permeable or larger filtration surface) increases GFR, the opposite of what was observed." },
      { id: "D", text: "A decrease in hydrostatic pressure in Bowman's space.", explanation: "Lower Bowman's space pressure reduces opposition to filtration and would increase GFR." },
    ],
    correctChoiceId: "B",
    explanationOverall:
      "Because SGLT2 inhibition reduces proximal Na+ and glucose reabsorption, more NaCl reaches the macula densa. Tubuloglomerular feedback responds by constricting the afferent arteriole, which lowers glomerular capillary pressure and GFR. The other options would each increase GFR.",
    walkthrough: {
      approachNotes:
        "Determine the direction each option would move GFR before choosing; only the option that lowers GFR can be right.",
      steps: [
        "Identify the observed change: GFR decreased modestly.",
        "Test each option's direction: efferent constriction, higher Kf, and lower Bowman's pressure all raise GFR.",
        "Use the passage clue about increased NaCl delivery to the macula densa.",
        "Link this to tubuloglomerular feedback, which causes afferent constriction and lowers GFR.",
      ],
    },
    category: { foundationalConcept: "FC3", contentCategory: "3B", skill: "scientific reasoning" },
    difficulty: "hard",
  },
  {
    id: "bb-q54",
    passageId: null,
    sectionId: "bio-biochem",
    order: 53,
    stem: "A purified enzyme elutes from a size-exclusion column at a volume corresponding to about 120 kDa under nondenaturing conditions. When the same sample is boiled in SDS and a reducing agent and run on SDS-PAGE, a single band appears at about 30 kDa. These results are most consistent with the enzyme being:",
    choices: [
      { id: "A", text: "a 120 kDa monomer that is cleaved into a 30 kDa fragment by SDS.", explanation: "SDS denatures proteins but does not cleave peptide bonds. A cleaved monomer would also give fragments summing to 120 kDa, not a single 30 kDa band." },
      { id: "B", text: "a heterodimer of a 30 kDa and a 90 kDa subunit.", explanation: "A heterodimer with different subunits would show two bands on SDS-PAGE, one at 30 and one at 90 kDa." },
      { id: "C", text: "a homodimer of two 30 kDa subunits.", explanation: "A homodimer would have a native mass of about 60 kDa, not 120 kDa." },
      { id: "D", text: "a homotetramer of four identical 30 kDa subunits.", explanation: "Correct. Native size of 120 kDa divided by subunit size of 30 kDa gives four identical subunits." },
    ],
    correctChoiceId: "D",
    explanationOverall:
      "Size-exclusion chromatography under native conditions reports the mass of the intact complex, while SDS-PAGE with a reducing agent separates subunits by mass after denaturation and disulfide reduction. One 30 kDa band means the subunits are identical, and 120/30 = 4, so the enzyme is a homotetramer.",
    walkthrough: {
      approachNotes:
        "Compare native techniques (size-exclusion, native gel) with denaturing ones (SDS-PAGE). The ratio of native mass to denatured subunit mass gives subunit count; the number of bands tells you whether subunits are identical.",
      steps: [
        "Interpret size-exclusion under native conditions: the intact complex is about 120 kDa.",
        "Interpret SDS-PAGE: SDS and reducing agent dissociate subunits, so the single band at 30 kDa is the subunit mass.",
        "One band means all subunits are identical, eliminating heterodimer option B.",
        "Divide 120 by 30 to get four subunits, eliminating the dimer and the cleavage option.",
      ],
    },
    category: { foundationalConcept: "FC1", contentCategory: "1A", skill: "data-based reasoning" },
    difficulty: "easy",
  },
  {
    id: "bb-q55",
    passageId: null,
    sectionId: "bio-biochem",
    order: 54,
    stem: "A researcher lyses a donor E. coli strain carrying an antibiotic resistance gene with a bacteriophage, passes the lysate through a filter that retains bacteria but allows phage to pass, and treats the filtrate with DNase. When the treated filtrate is added to a sensitive recipient strain, resistant colonies still form. This gene transfer most likely occurred by:",
    choices: [
      { id: "A", text: "transduction", explanation: "Correct. DNA packaged inside a phage capsid is protected from DNase and is delivered to the recipient when the phage infects it, as in transduction." },
      { id: "B", text: "transformation", explanation: "Transformation involves uptake of naked DNA from the environment. DNase treatment would destroy that DNA and prevent transformation." },
      { id: "C", text: "conjugation", explanation: "Conjugation requires direct cell-to-cell contact through a pilus. The filtrate contains no donor cells, so conjugation could not occur." },
      { id: "D", text: "binary fission", explanation: "Binary fission is bacterial reproduction and is not a mechanism for transferring genes between different strains." },
    ],
    correctChoiceId: "A",
    explanationOverall:
      "The filter removes donor cells (ruling out conjugation), and DNase removes free DNA (ruling out transformation). The only remaining vehicle that can carry resistance genes is the phage, whose capsid protects the DNA it carries. That is transduction.",
    walkthrough: {
      approachNotes:
        "For bacterial gene-transfer questions, identify what each experimental manipulation excludes: filters block cell contact, and DNase destroys naked DNA.",
      steps: [
        "The filter retains bacteria, so no donor cells reach recipients; conjugation is excluded.",
        "DNase destroys free DNA, so transformation is excluded.",
        "Resistance still transfers, so the DNA must be protected, such as inside a phage capsid.",
        "Phage-mediated transfer of bacterial DNA is transduction.",
      ],
    },
    category: { foundationalConcept: "FC2", contentCategory: "2B", skill: "scientific reasoning" },
    difficulty: "medium",
  },
  {
    id: "bb-q56",
    passageId: null,
    sectionId: "bio-biochem",
    order: 55,
    stem: "After death, skeletal muscle becomes rigid (rigor mortis) as cellular ATP is depleted. Which of the following is the most direct reason ATP depletion causes this stiffening?",
    choices: [
      { id: "A", text: "Without ATP, Ca2+ cannot bind troponin C, so tropomyosin locks the actin filaments in place.", explanation: "If Ca2+ could not bind troponin, tropomyosin would block myosin binding sites and the muscle would be flaccid, not rigid." },
      { id: "B", text: "Without ATP, myosin heads cannot bind actin, so the sarcomeres remain shortened.", explanation: "Myosin heads bind actin readily without ATP; it is ATP binding that causes release. Absence of ATP leads to strong binding, not failure to bind." },
      { id: "C", text: "Without ATP, myosin heads cannot detach from actin, so cross-bridges remain locked.", explanation: "Correct. ATP binding to the myosin head lowers its affinity for actin and allows detachment. Without ATP, heads stay bound in the rigor state." },
      { id: "D", text: "Without ATP, tropomyosin cannot be phosphorylated, so it cannot return to its blocking position.", explanation: "Tropomyosin movement is controlled by Ca2+ binding to troponin, not by phosphorylation; this mechanism is fabricated." },
    ],
    correctChoiceId: "C",
    explanationOverall:
      "In the cross-bridge cycle, ATP binding to myosin releases the head from actin, and hydrolysis re-cocks the head for the next cycle. When ATP is gone, heads remain attached to actin in a rigid, strongly bound state. Failure of SERCA to pump Ca2+ back into the sarcoplasmic reticulum also keeps Ca2+ high, but the direct cause of rigidity is the missing ATP for detachment.",
    walkthrough: {
      approachNotes:
        "Remember that ATP has two roles in contraction: binding releases myosin from actin, and hydrolysis cocks the head. Binding sites are exposed by Ca2+, not ATP.",
      steps: [
        "Recall that Ca2+ binds troponin C, shifting tropomyosin and exposing actin binding sites.",
        "Recall the cycle: attachment, power stroke (ADP and Pi release), ATP binding causes detachment, hydrolysis re-cocks the head.",
        "Without ATP, the cycle halts at the attached, post-power-stroke state, so cross-bridges stay locked.",
        "Eliminate A and B (would produce flaccidity) and D (invented phosphorylation mechanism).",
      ],
    },
    category: { foundationalConcept: "FC3", contentCategory: "3B", skill: "scientific reasoning" },
    difficulty: "medium",
  },
  {
    id: "bb-q57",
    passageId: null,
    sectionId: "bio-biochem",
    order: 56,
    stem: "During strenuous exercise, working muscle produces large amounts of CO2, H+, and heat. How does this affect the hemoglobin-oxygen dissociation curve in these tissues, and what is the physiologic benefit?",
    choices: [
      { id: "A", text: "The curve shifts left, increasing hemoglobin's affinity for O2 so more O2 is retained in the muscle capillaries.", explanation: "A left shift would hold O2 more tightly and impair unloading in the tissues that need it most." },
      { id: "B", text: "The curve shifts right, decreasing hemoglobin's affinity for O2 and enhancing O2 release to the tissues.", explanation: "Correct. Increased CO2, H+ (lower pH), and temperature lower O2 affinity (Bohr effect), raising P50 and promoting unloading." },
      { id: "C", text: "The curve shifts right because the lower pH increases the affinity of hemoglobin for O2.", explanation: "The direction is right, but the reasoning is wrong: a right shift means decreased affinity, and lower pH decreases affinity." },
      { id: "D", text: "The curve shifts left because increased temperature stabilizes the R state of hemoglobin.", explanation: "Higher temperature stabilizes the low-affinity T state and shifts the curve right, not left." },
    ],
    correctChoiceId: "B",
    explanationOverall:
      "Higher CO2, lower pH, higher temperature, and 2,3-BPG all stabilize the T (tense) state of hemoglobin and shift the curve to the right (higher P50). This lowers O2 affinity at a given PO2 and unloads more oxygen where metabolic demand is highest.",
    walkthrough: {
      approachNotes:
        "Remember the right-shift factors with the mnemonic CADET face right: CO2, Acid, 2,3-DPG, Exercise, Temperature. Right shift means lower affinity and easier unloading.",
      steps: [
        "Identify the exercise-related changes: increased CO2, H+, and temperature.",
        "Recognize each of these shifts the curve rightward, raising P50.",
        "Interpret a right shift as decreased O2 affinity, which favors release to tissues.",
        "Eliminate A and D (wrong direction) and C (correct direction but wrong reasoning about affinity).",
      ],
    },
    category: { foundationalConcept: "FC3", contentCategory: "3B", skill: "scientific reasoning" },
    difficulty: "easy",
  },
  {
    id: "bb-q58",
    passageId: null,
    sectionId: "bio-biochem",
    order: 57,
    stem: "In the late follicular phase of the menstrual cycle, a surge in luteinizing hormone (LH) triggers ovulation. Which event is primarily responsible for initiating this LH surge?",
    choices: [
      { id: "A", text: "A rise in progesterone secreted by the corpus luteum.", explanation: "The corpus luteum forms after ovulation, so its progesterone cannot trigger the surge; progesterone also generally exerts negative feedback." },
      { id: "B", text: "A fall in estradiol levels that relieves negative feedback on the anterior pituitary.", explanation: "Estradiol is rising, not falling, before the surge. A fall in estradiol would not initiate ovulation." },
      { id: "C", text: "A rise in inhibin B that stimulates LH release from the anterior pituitary.", explanation: "Inhibin B selectively suppresses FSH secretion and does not stimulate LH release." },
      { id: "D", text: "Sustained high estradiol from the dominant follicle, which switches to positive feedback on the hypothalamus and anterior pituitary.", explanation: "Correct. Once estradiol is high enough for long enough, its feedback becomes positive, increasing GnRH pulses and pituitary sensitivity and producing the LH surge." },
    ],
    correctChoiceId: "D",
    explanationOverall:
      "Early in the cycle, low-to-moderate estradiol exerts negative feedback on LH and FSH. As the dominant follicle matures, estradiol rises to high, sustained levels, which flips the feedback to positive, producing the LH surge about 24-36 hours before ovulation. Progesterone and inhibin act later or on different targets.",
    walkthrough: {
      approachNotes:
        "The LH surge is a classic positive-feedback example in physiology. Track the timing: the trigger must come from the follicle before ovulation, not from the corpus luteum after it.",
      steps: [
        "Place the event in the late follicular phase, just before ovulation.",
        "Eliminate the corpus luteum (A), which forms after ovulation.",
        "Eliminate B (estradiol is rising) and C (inhibin B suppresses FSH, not stimulates LH).",
        "Select high sustained estradiol switching to positive feedback.",
      ],
    },
    category: { foundationalConcept: "FC3", contentCategory: "3A", skill: "scientific reasoning" },
    difficulty: "medium",
  },
  {
    id: "bb-q59",
    passageId: null,
    sectionId: "bio-biochem",
    order: 58,
    stem: "During prolonged fasting, the liver increases production of ketone bodies. Which of the following best explains why?",
    choices: [
      { id: "A", text: "High insulin activates acetyl-CoA carboxylase, and the resulting malonyl-CoA drives fatty acid oxidation.", explanation: "Insulin is low during fasting, and malonyl-CoA inhibits carnitine acyltransferase I, which would block, not promote, fatty acid oxidation." },
      { id: "B", text: "The liver uses ketone bodies as its primary fuel, so it must synthesize more of them.", explanation: "The liver lacks the enzyme needed to activate ketone bodies for oxidation; it exports them for use by other tissues like brain and muscle." },
      { id: "C", text: "Beta-oxidation generates acetyl-CoA faster than the citric acid cycle can use it, since oxaloacetate is being diverted to gluconeogenesis, so excess acetyl-CoA is converted to ketone bodies.", explanation: "Correct. Oxaloacetate is limiting for citrate synthase during gluconeogenesis, and surplus acetyl-CoA is channeled through HMG-CoA into acetoacetate and beta-hydroxybutyrate." },
      { id: "D", text: "Fatty acids are converted directly into glucose by gluconeogenesis, and ketone bodies are the byproduct.", explanation: "Animals cannot make a net amount of glucose from even-chain fatty acids because acetyl-CoA carbons are lost as CO2 in the citric acid cycle. Ketone bodies are not a byproduct of such a pathway." },
    ],
    correctChoiceId: "C",
    explanationOverall:
      "In fasting, low insulin and high glucagon promote lipolysis and fatty acid beta-oxidation in the liver. Oxaloacetate is used for gluconeogenesis, so acetyl-CoA accumulates beyond what the citric acid cycle can handle and is converted to ketone bodies, which are exported to fuel the brain and other tissues.",
    walkthrough: {
      approachNotes:
        "Link the hormonal state (low insulin, high glucagon) to the metabolic fate of acetyl-CoA. Ketogenesis is the liver's overflow route when acetyl-CoA supply exceeds citric acid cycle capacity.",
      steps: [
        "Recall that fasting means low insulin and high glucagon, which promotes lipolysis and beta-oxidation.",
        "Beta-oxidation produces large amounts of acetyl-CoA.",
        "Gluconeogenesis consumes oxaloacetate, limiting the citric acid cycle's capacity to condense with acetyl-CoA.",
        "Surplus acetyl-CoA forms HMG-CoA and then acetoacetate and beta-hydroxybutyrate, which the liver exports.",
      ],
    },
    category: { foundationalConcept: "FC1", contentCategory: "1D", skill: "scientific reasoning" },
    difficulty: "hard",
  },
];
