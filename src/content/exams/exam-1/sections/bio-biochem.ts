import type { SectionContent } from "@/lib/types";

/**
 * Bio/Biochem section content for exam-1: 3 passages (competitive enzyme
 * inhibition, bacterial gene regulation, renal/endocrine physiology) plus
 * 3 standalone discrete questions, spanning FC1-FC3.
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
    {
      id: "bb-p2",
      sectionId: "bio-biochem",
      order: 1,
      kind: "passage",
      title: "Regulation of the Bacterial Lactose Operon",
      bodyMarkdown: `The bacterial lactose (*lac*) operon in *Escherichia coli* encodes β-galactosidase (*lacZ*), a permease (*lacY*), and a transacetylase (*lacA*), and is controlled by two regulatory proteins: the LacI repressor, which binds the operator and blocks transcription unless allolactose (a lactose metabolite) is present to release it, and the catabolite activator protein (CAP), which binds near the promoter and stimulates transcription only when intracellular cAMP levels are high — a condition triggered by low extracellular glucose.

Researchers grew wild-type *E. coli* in four different media and measured β-galactosidase activity in Miller units after steady-state growth: glucose alone (5 U), lactose alone (1,550 U), glucose plus lactose together (90 U), and glycerol alone (6 U). A second, *lacI*-null mutant strain — incapable of producing functional repressor protein — was grown in glycerol alone (no lactose, no glucose present) and produced 1,300 Miller units of β-galactosidase activity.`,
      questionIds: ["bb-q3", "bb-q4", "bb-q5", "bb-q6"],
    },
    {
      id: "bb-p3",
      sectionId: "bio-biochem",
      order: 2,
      kind: "passage",
      title: "Water Deprivation Testing for Diabetes Insipidus",
      bodyMarkdown: `Antidiuretic hormone (ADH, or vasopressin) is released from the posterior pituitary in response to rising plasma osmolality and acts on principal cells of the renal collecting duct, triggering insertion of aquaporin-2 water channels into the apical membrane and thereby increasing water reabsorption. Diabetes insipidus (DI) is characterized by excessive dilute urine output despite normal or elevated plasma osmolality, and can arise either from insufficient ADH secretion (central DI) or from renal unresponsiveness to circulating ADH (nephrogenic DI).

To distinguish between these causes, three patients with chronic polyuria underwent a water deprivation test: fluids were withheld until plasma osmolality exceeded 295 mOsm/kg, at which point urine osmolality was measured; each patient then received an injection of desmopressin (a synthetic ADH analog), and urine osmolality was measured again one hour later.

Patient X: urine osmolality rose from 150 to 155 mOsm/kg after desmopressin.
Patient Y: urine osmolality rose from 190 to 645 mOsm/kg after desmopressin.
Patient Z (healthy control): urine osmolality was 850 mOsm/kg both before and after desmopressin.`,
      questionIds: ["bb-q7", "bb-q8", "bb-q9"],
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
    {
      id: "bb-q3",
      passageId: "bb-p2",
      sectionId: "bio-biochem",
      order: 2,
      stem: "Which of the following best explains the difference in β-galactosidase activity between wild-type cells grown in lactose alone (1,550 U) and wild-type cells grown in glucose plus lactose together (90 U)?",
      choices: [
        { id: "A", text: "In the glucose-plus-lactose condition, LacI repressor remains bound to the operator because glucose prevents allolactose from forming.", explanation: "Glucose does not block allolactose formation; lactose is still present and can still be converted to allolactose, so the repressor is still released. This doesn't explain the drop in activity." },
        { id: "B", text: "In the glucose-plus-lactose condition, low intracellular cAMP reduces CAP binding at the promoter, decreasing transcription even though the repressor has been released by allolactose.", explanation: "Correct. Glucose keeps cAMP low, so CAP cannot activate the promoter as strongly — this catabolite repression lowers output even though the repressor is off, matching the intermediate (not minimal, not maximal) activity level." },
        { id: "C", text: "In the glucose-plus-lactose condition, glucose prevents lactose from entering the cell at all, so no induction of the operon occurs.", explanation: "If lactose never entered the cell, activity should resemble the glucose-alone baseline (~5 U), not the much higher 90 U observed — the data show partial induction did occur." },
        { id: "D", text: "In the glucose-plus-lactose condition, excess glucose degrades lacZ mRNA before it can be translated.", explanation: "Glucose has no described role in mRNA degradation here; this introduces a mechanism not supported by the passage." },
      ],
      correctChoiceId: "B",
      explanationOverall:
        "The lac operon is under dual control: LacI repression (relieved by allolactose) and CAP activation (dependent on low glucose/high cAMP). With lactose alone, both conditions favor high transcription. With glucose and lactose together, the repressor is released but CAP is inactive, so transcription is only partially induced — exactly the intermediate 90 U value observed, well above the glucose-alone baseline but far below the lactose-alone maximum.",
      walkthrough: {
        approachNotes:
          "Operon questions with multiple growth conditions are testing whether you can track two independent regulatory switches (repressor and activator) at once. Before looking at answer choices, determine the on/off state of each switch for the two conditions being compared.",
        steps: [
          "Identify the two conditions being compared: lactose alone (1,550 U) vs. glucose + lactose (90 U).",
          "Determine LacI state in both: lactose is present in both, so allolactose forms and the repressor is released in both cases — repressor status can't explain the difference.",
          "Determine CAP state in both: glucose is absent in the first (CAP active, cAMP high) but present in the second (CAP inactive, cAMP low) — this is the variable that changed.",
          "Match the 90 U value to a partially-induced state (repressor off, activator off) rather than fully off (~5 U) or fully on (1,550 U).",
          "Select the choice that attributes the drop to reduced CAP activity, not to repressor rebinding or blocked entry.",
        ],
      },
      category: { foundationalConcept: "FC2", contentCategory: "2A", skill: "data-based reasoning" },
      difficulty: "easy",
    },
    {
      id: "bb-q4",
      passageId: "bb-p2",
      sectionId: "bio-biochem",
      order: 3,
      stem: "The lacI-null mutant strain produced 1,300 Miller units of β-galactosidase in glycerol medium, compared with only 6 units for wild-type cells in the same medium. This result most directly demonstrates that:",
      choices: [
        { id: "A", text: "CAP binding alone is sufficient to activate lac operon transcription even when LacI is bound to the operator.", explanation: "Both strains were grown in glycerol, so CAP was equally active (glucose absent) in both cases; the difference between them is entirely attributable to LacI status, not CAP." },
        { id: "B", text: "Allolactose is produced constitutively in the lacI-null strain even in the absence of lactose in the growth medium.", explanation: "No lactose is present in either condition, so no allolactose can form in either strain; the mutant's high activity has nothing to do with inducer production." },
        { id: "C", text: "The lac operon is transcribed by default and requires functional LacI to actively repress it in the absence of an inducer.", explanation: "Correct. With CAP activity held constant (glycerol, no glucose, in both strains), the only variable is repressor function — removing it unmasks a high baseline (\"default on\") transcription rate, showing LacI's role is to actively silence the operon rather than the operon needing active turning-on." },
        { id: "D", text: "CAP is entirely dispensable for lac operon transcription whenever LacI is nonfunctional.", explanation: "This experiment only tested the lacI-null strain in glycerol (CAP already active); it says nothing about what would happen in the lacI-null strain if glucose were also present, so dispensability can't be concluded from this comparison alone." },
      ],
      correctChoiceId: "C",
      explanationOverall:
        "Because both the wild-type and lacI-null strains were grown in glycerol (no glucose, so CAP is active in both), the only variable isolated by this comparison is repressor function. The dramatic increase in activity when LacI is removed shows that the operon's default state is transcriptionally active, and that LacI's job is to actively clamp it off in the absence of inducer — the hallmark of negative control.",
      walkthrough: {
        approachNotes:
          "When a passage varies genotype while holding growth medium constant, that's a deliberate control — the question is testing whether you can isolate exactly one variable (here, repressor function) and reason about its role alone.",
        steps: [
          "Confirm the medium is identical (glycerol, no glucose, no lactose) in both strains being compared, so CAP activity is held constant.",
          "Recognize the only difference between the two conditions is whether functional LacI is present.",
          "Interpret the large increase in activity in the lacI-null strain as evidence of what happens when active repression is removed.",
          "Conclude the operon defaults to 'on' and LacI's normal role is to keep it off, not to be required for turning it on.",
          "Reject choices that invoke variables (CAP, allolactose) that were not actually different between the two compared conditions.",
        ],
      },
      category: { foundationalConcept: "FC2", contentCategory: "2A", skill: "concept application" },
      difficulty: "medium",
    },
    {
      id: "bb-q5",
      passageId: "bb-p2",
      sectionId: "bio-biochem",
      order: 4,
      stem: "If the lacI-null mutant strain were instead grown in a medium containing glucose alone (no lactose), β-galactosidase activity would most likely be:",
      choices: [
        { id: "A", text: "Low, comparable to wild-type levels in glucose alone, because CAP would remain inactive due to high glucose despite the absent repressor.", explanation: "Correct. Removing LacI eliminates negative control but does not eliminate the requirement for CAP activation; with glucose present, cAMP stays low and CAP cannot stimulate the promoter, so transcription would stay low despite the operator being unoccupied." },
        { id: "B", text: "High, comparable to lactose-alone levels, because loss of a functional repressor guarantees maximal transcription regardless of carbon source.", explanation: "This ignores CAP's role entirely; the passage's own data show that even with lactose present, adding glucose sharply reduces activity (90 U vs. 1,550 U), so glucose can suppress output even when the repressor pathway is not limiting." },
        { id: "C", text: "Undetectable, because without lactose in the medium no inducer would be available to trigger transcription.", explanation: "An inducer is only needed to release LacI from the operator; since this strain lacks functional LacI altogether, no inducer is needed for that step in the first place." },
        { id: "D", text: "Identical to the lacI-null glycerol result (1,300 U), because loss of repressor function alone determines the expression level.", explanation: "This assumes repressor status is the only determinant of expression, but the glycerol and glucose conditions differ in CAP activity, which the passage's wild-type data show has a large independent effect." },
      ],
      correctChoiceId: "A",
      explanationOverall:
        "The lac operon is governed by two independent layers of control: negative control by LacI and positive control by CAP. The lacI-null mutant removes only the negative-control requirement — it does not make transcription independent of CAP. Because glucose keeps cAMP (and therefore CAP activity) low regardless of repressor genotype, activity should stay low even without a functional repressor, illustrating that maximal lac expression requires both an absent repressor and an active activator simultaneously.",
      walkthrough: {
        approachNotes:
          "Prediction questions that extend a passage's logic to an untested condition reward treating each regulatory layer as an independent variable and asking what each one alone would predict, then combining them.",
        steps: [
          "List the two regulatory inputs the passage establishes: LacI (negative control, inactive in this mutant) and CAP (positive control, governed by glucose/cAMP).",
          "Determine each input's state in the new hypothetical condition: LacI is nonfunctional (permissive), glucose is present (CAP inactive).",
          "Recognize that high expression requires both inputs to be favorable simultaneously — one favorable input is not sufficient.",
          "Predict low expression, since the unfavorable CAP state caps transcription regardless of repressor status.",
          "Eliminate choices that extrapolate from only one regulatory layer instead of combining both.",
        ],
      },
      category: { foundationalConcept: "FC2", contentCategory: "2A", skill: "data-based reasoning" },
      difficulty: "hard",
    },
    {
      id: "bb-q6",
      passageId: "bb-p2",
      sectionId: "bio-biochem",
      order: 5,
      stem: "Unlike regulation of the lac operon, transcriptional regulation of a comparable eukaryotic gene encoding a metabolic enzyme would additionally be expected to involve which of the following mechanisms?",
      choices: [
        { id: "A", text: "Formation of a single polycistronic mRNA transcript encoding multiple enzymes of a shared pathway.", explanation: "Polycistronic mRNA (multiple genes transcribed as one transcript, as in an operon) is a prokaryotic feature; eukaryotic genes are transcribed individually and each mature mRNA typically encodes a single protein." },
        { id: "B", text: "Direct binding of RNA polymerase to the promoter without requiring any additional protein cofactors.", explanation: "Eukaryotic RNA polymerase II cannot initiate transcription at a promoter without first assembling general transcription factors into a preinitiation complex; this is more, not less, cofactor-dependent than prokaryotic transcription." },
        { id: "C", text: "Repression achieved exclusively through a small metabolite binding directly to the gene's mRNA transcript.", explanation: "This describes a riboswitch-type mechanism, which is not the characteristic way eukaryotic metabolic genes are regulated and is not implied by anything in the passage." },
        { id: "D", text: "Chromatin remodeling and histone modification that alter DNA accessibility before transcription factors can bind.", explanation: "Correct. Eukaryotic DNA is packaged into nucleosomes; unlike the naked, directly accessible bacterial chromosome described in the passage, eukaryotic genes require chromatin-level regulation (histone acetylation/methylation, remodeling complexes) to expose the promoter before transcription factor binding can even occur." },
      ],
      correctChoiceId: "D",
      explanationOverall:
        "Bacterial DNA is not packaged with histones, so the lac operon's regulation is a direct contest between the repressor, CAP, and RNA polymerase for access to already-exposed DNA. Eukaryotic DNA is wound around histones into chromatin, adding an entire extra regulatory layer — remodeling and modifying chromatin structure — that has no equivalent in the passage's bacterial system.",
      walkthrough: {
        approachNotes:
          "Compare/contrast questions between prokaryotic and eukaryotic gene regulation are testing a short list of structural differences (chromatin packaging, polycistronic vs. monocistronic transcripts, nuclear compartmentalization, more elaborate transcription factor requirements) — scan choices for which one names a real structural difference versus a plausible-sounding but backwards claim.",
        steps: [
          "Recall the key structural difference between bacterial and eukaryotic genomes: eukaryotic DNA is packaged into chromatin via histones, bacterial DNA is not.",
          "Recognize that this packaging means eukaryotic transcription requires an additional accessibility step (chromatin remodeling) that the lac operon system, as described, does not.",
          "Eliminate the polycistronic-mRNA choice, since that describes the operon system itself, not something eukaryotes add on top of it.",
          "Eliminate the cofactor-free RNA polymerase choice, since eukaryotic transcription requires more general transcription factors, not fewer.",
          "Select the choice identifying chromatin remodeling as the additional eukaryotic-specific regulatory layer.",
        ],
      },
      category: { foundationalConcept: "FC2", contentCategory: "2A", skill: "concept application" },
      difficulty: "medium",
    },
    {
      id: "bb-q7",
      passageId: "bb-p3",
      sectionId: "bio-biochem",
      order: 6,
      stem: "Based on the water deprivation test results, which patient most likely has central diabetes insipidus?",
      choices: [
        { id: "A", text: "Patient X, because urine osmolality failed to rise substantially even after desmopressin administration.", explanation: "A poor response to exogenous ADH indicates the kidneys themselves are unresponsive to the hormone — that pattern describes nephrogenic, not central, DI." },
        { id: "B", text: "Patient Z, because urine osmolality remained unchanged and elevated throughout testing.", explanation: "Patient Z is the healthy control: urine was already maximally concentrated before desmopressin was given, meaning endogenous ADH secretion and renal responsiveness were both already normal." },
        { id: "C", text: "Patient Y, because urine osmolality rose sharply after exogenous ADH was given, showing the kidneys were responsive but endogenous hormone was deficient.", explanation: "Correct. Dilute urine during fluid restriction (190 mOsm/kg) followed by a large rise after desmopressin (645 mOsm/kg) shows the collecting duct machinery works fine once ADH is supplied — the deficiency must be in the patient's own hormone secretion, i.e., central DI." },
        { id: "D", text: "Patient X, because the kidneys were unable to reabsorb water regardless of ADH levels, consistent with insufficient hormone secretion.", explanation: "This choice is internally contradictory: an inability to reabsorb water despite adequate (here, exogenous) ADH points to a renal defect, not a hormone-secretion (central) defect." },
      ],
      correctChoiceId: "C",
      explanationOverall:
        "Central DI reflects a deficiency in ADH secretion, so the kidneys retain full capacity to respond once hormone is supplied — that produces exactly Patient Y's pattern of dilute urine under fluid restriction that concentrates sharply after desmopressin. A flat, minimal response even after exogenous ADH (Patient X) instead points to a renal defect, since the hormone is present but the kidney cannot act on it.",
      walkthrough: {
        approachNotes:
          "Water-deprivation-test questions hinge on one comparison: does the patient's urine concentrate after receiving exogenous ADH? A strong response localizes the problem to hormone supply (central); no response localizes it to the kidney (nephrogenic).",
        steps: [
          "Identify the diagnostic comparison for each patient: urine osmolality before vs. after desmopressin.",
          "Recall the underlying logic: exogenous ADH fixes a supply problem (central DI) but cannot fix a receptor/signaling problem (nephrogenic DI).",
          "Check Patient Y's numbers: 190 → 645 mOsm/kg is a large rise, indicating responsive kidneys and prior hormone deficiency.",
          "Rule out Patient X (minimal rise, 150 → 155) as nephrogenic rather than central, and Patient Z as the already-normal control.",
          "Select Patient Y as the central DI case.",
        ],
      },
      category: { foundationalConcept: "FC3", contentCategory: "3B", skill: "data-based reasoning" },
      difficulty: "easy",
    },
    {
      id: "bb-q8",
      passageId: "bb-p3",
      sectionId: "bio-biochem",
      order: 7,
      stem: "Patient X's condition most likely involves a defect in which of the following?",
      choices: [
        { id: "A", text: "Hypothalamic osmoreceptors that trigger ADH release in response to rising plasma osmolality.", explanation: "A defect here would impair ADH secretion, producing central DI — a condition that responds to exogenous desmopressin. Patient X did not respond, so the defect is downstream of hormone secretion." },
        { id: "B", text: "Aquaporin-2 channel insertion into the collecting duct membrane in response to ADH binding its receptor.", explanation: "Correct. Because urine osmolality barely changed even after desmopressin supplied ample exogenous ADH, the defect must lie in the kidney's ability to respond to the hormone — i.e., in the ADH receptor/aquaporin-2 signaling pathway of the collecting duct, the hallmark of nephrogenic DI." },
        { id: "C", text: "Posterior pituitary storage and release of ADH into systemic circulation.", explanation: "A storage/release defect would also constitute a form of central DI, which is correctable by exogenous ADH — inconsistent with Patient X's lack of response to desmopressin." },
        { id: "D", text: "The renin-angiotensin-aldosterone system's regulation of sodium reabsorption in the distal nephron.", explanation: "The passage's test isolates water handling via ADH/aquaporin-2, not sodium handling via aldosterone; RAAS dysfunction is not implicated by this urine-osmolality-based test." },
      ],
      correctChoiceId: "B",
      explanationOverall:
        "Since Patient X's urine remained dilute even after receiving exogenous desmopressin, the hormone itself cannot be the limiting factor — the defect must be downstream, at the level of the kidney's response machinery, most directly the ADH receptor-to-aquaporin-2 signaling pathway in the collecting duct.",
      walkthrough: {
        approachNotes:
          "When a patient fails to respond to a hormone that was administered directly, systematically move downstream from secretion to receptor to effector to find where the pathway breaks — the failure point is wherever the exogenous hormone can no longer rescue the phenotype.",
        steps: [
          "Note that desmopressin (exogenous ADH) was given directly to Patient X, ruling out any defect in hormone production or release as the explanation.",
          "Recall the ADH signaling pathway: hypothalamic osmoreceptor → posterior pituitary secretion → renal ADH receptor → aquaporin-2 insertion → water reabsorption.",
          "Eliminate the two upstream steps (osmoreceptors, pituitary release), since bypassing them with exogenous hormone should have worked if they were the only problem.",
          "Eliminate the unrelated RAAS/sodium pathway, since the test specifically measures water handling.",
          "Localize the defect to the renal receptor/aquaporin-2 step, the only remaining link exogenous ADH cannot bypass.",
        ],
      },
      category: { foundationalConcept: "FC3", contentCategory: "3B", skill: "concept application" },
      difficulty: "medium",
    },
    {
      id: "bb-q9",
      passageId: "bb-p3",
      sectionId: "bio-biochem",
      order: 8,
      stem: "Prior to fluid restriction, Patient Y's plasma ADH concentration, relative to a healthy individual at the same plasma osmolality, would most likely be:",
      choices: [
        { id: "A", text: "Lower, because the polyuria seen in central diabetes insipidus results from an inadequate hypothalamic-pituitary response to rising plasma osmolality.", explanation: "Correct. Patient Y's sharp response to exogenous ADH (question 7) indicates central DI, meaning the patient's own hypothalamic-pituitary axis under-secretes ADH for a given plasma osmolality compared with a healthy person — plasma ADH would be inappropriately low." },
        { id: "B", text: "Higher, because renal insensitivity to ADH would trigger a compensatory increase in hormone secretion.", explanation: "This describes a plausible response pattern in nephrogenic DI, not central DI; Patient Y's data point to a hormone-deficiency problem, not a compensatory-oversecretion problem." },
        { id: "C", text: "Equal, because ADH secretion depends only on blood volume and not on plasma osmolality.", explanation: "Plasma osmolality (sensed by hypothalamic osmoreceptors) is the primary driver of ADH secretion under these conditions; this choice also incorrectly implies no ADH deficiency exists for Patient Y at all." },
        { id: "D", text: "Impossible to determine without directly measuring hypothalamic osmoreceptor activity.", explanation: "The water deprivation test result itself is precisely the kind of indirect evidence used clinically to infer relative ADH secretion, so a reasoned inference is possible without a direct osmoreceptor assay." },
      ],
      correctChoiceId: "A",
      explanationOverall:
        "Patient Y's kidneys responded normally to exogenous ADH, which localizes the deficit to inadequate endogenous hormone secretion (central DI). Since a healthy person at the same elevated plasma osmolality would be secreting robust levels of ADH to concentrate urine, Patient Y's own plasma ADH at that same osmolality must be inappropriately lower than normal.",
      walkthrough: {
        approachNotes:
          "For questions asking you to infer an unmeasured hormone level, work backward from the observed downstream response (here, urine concentrating ability) to what upstream hormone level is consistent with that response.",
        steps: [
          "Recall from the prior reasoning that Patient Y's pattern (poor concentration before desmopressin, strong concentration after) indicates central DI.",
          "Recognize that central DI is defined by deficient ADH secretion relative to the osmotic stimulus, not by a downstream renal defect.",
          "Compare to a healthy person at the same plasma osmolality, who would already be secreting enough ADH to concentrate urine without needing an exogenous dose.",
          "Conclude Patient Y's endogenous plasma ADH must be lower than that healthy comparison at the same osmolality.",
          "Reject the 'higher' and 'equal' choices, which describe nephrogenic or non-osmolality-driven physiology, and reject 'impossible to determine,' since the test result is itself sufficient evidence for a reasoned inference.",
        ],
      },
      category: { foundationalConcept: "FC3", contentCategory: "3B", skill: "data-based reasoning" },
      difficulty: "hard",
    },
    {
      id: "bb-q10",
      passageId: null,
      sectionId: "bio-biochem",
      order: 9,
      stem: "A missense mutation replaces a solvent-exposed glutamate residue on the surface of a globular, multi-subunit oxygen-transport protein with a nonpolar valine residue. In cells homozygous for this mutation, deoxygenated protein molecules polymerize into long fibers via new hydrophobic contacts between separate molecules. Which level of protein structure is most directly responsible for the abnormal polymerization described?",
      choices: [
        { id: "A", text: "Primary structure, because the amino acid substitution itself constitutes the entirety of the structural change being described.", explanation: "The substitution changes primary structure, but the question asks what level of structure mediates the polymerization behavior, not what level was altered by the mutation itself." },
        { id: "B", text: "Secondary structure, because the substitution disrupts hydrogen bonding within the polypeptide backbone.", explanation: "A single surface side-chain substitution does not disrupt the backbone hydrogen-bonding pattern that defines α-helices and β-sheets; the described effect is on interactions between molecules, not backbone folding." },
        { id: "C", text: "Tertiary structure, because the substitution alters the three-dimensional folding of a single polypeptide chain.", explanation: "The passage's premise ('does not alter the protein's fold') and the described phenomenon (contacts between separate molecules) both point away from single-chain folding as the relevant level." },
        { id: "D", text: "Quaternary structure, because the new hydrophobic surface patch favors nonspecific hydrophobic interactions between separate protein subunits/molecules.", explanation: "Correct. Quaternary structure concerns interactions between multiple polypeptide chains; replacing a charged surface residue with a hydrophobic one creates a sticky patch that drives association between separate molecules, which is precisely the polymerization described." },
      ],
      correctChoiceId: "D",
      explanationOverall:
        "Although the mutation is a single amino acid substitution (a primary-structure change), its functional consequence plays out at the level of interactions between separate folded protein molecules — the domain of quaternary structure. A hydrophobic surface patch that was previously charged provides a new sticky contact point that drives molecules to associate into abnormal polymers.",
      walkthrough: {
        approachNotes:
          "When a question describes a mutation's downstream consequence rather than the mutation itself, separate 'what changed' (always primary structure, by definition) from 'what level of organization explains the observed phenotype' — those are frequently different answers.",
        steps: [
          "Note the mutation is, by definition, a primary-structure change — but recognize the question is asking about the mechanism of the resulting phenotype, not the mutation itself.",
          "Use the stem's clue that folding is unaffected to eliminate tertiary structure as the explanation.",
          "Recognize that hydrogen bonding of the backbone (secondary structure) is not what a side-chain polarity change would disrupt.",
          "Identify that 'contacts between separate molecules' is the defining feature of quaternary-level interactions.",
          "Select quaternary structure as the level responsible for the polymerization behavior.",
        ],
      },
      category: { foundationalConcept: "FC1", contentCategory: "1A", skill: "structure-function reasoning" },
      difficulty: "medium",
    },
    {
      id: "bb-q11",
      passageId: null,
      sectionId: "bio-biochem",
      order: 10,
      stem: "A researcher treats intestinal epithelial cells with ouabain, a drug that specifically inhibits the Na+/K+-ATPase. Which of the following transport processes at the apical membrane would be most directly impaired?",
      choices: [
        { id: "A", text: "Facilitated diffusion of glucose via GLUT2 transporters.", explanation: "Facilitated diffusion moves solutes down their concentration gradient through a channel-like carrier and does not require an ion gradient generated by the Na+/K+-ATPase." },
        { id: "B", text: "Facilitated diffusion of fructose via GLUT5 transporters.", explanation: "Like GLUT2, GLUT5-mediated fructose transport is passive facilitated diffusion and does not depend on the sodium gradient the Na+/K+-ATPase maintains." },
        { id: "C", text: "Secondary active transport of glucose into the cell via the SGLT1 symporter.", explanation: "Correct. SGLT1 co-transports glucose into the cell by harnessing the inward electrochemical sodium gradient; that gradient is established and maintained by the Na+/K+-ATPase pumping Na+ out of the cell, so inhibiting the pump collapses the gradient SGLT1 depends on." },
        { id: "D", text: "Simple diffusion of oxygen across the plasma membrane.", explanation: "Simple diffusion of a small nonpolar gas requires no transporter or ion gradient at all, so it is unaffected by Na+/K+-ATPase inhibition." },
      ],
      correctChoiceId: "C",
      explanationOverall:
        "The Na+/K+-ATPase uses ATP to pump Na+ out of the cell, generating the steep inward sodium electrochemical gradient that secondary active transporters like SGLT1 rely on to move glucose against its own concentration gradient. Passive processes such as facilitated diffusion (GLUT2, GLUT5) and simple diffusion (O2) don't depend on any ion gradient and are unaffected.",
      walkthrough: {
        approachNotes:
          "For transport questions, first classify each choice as passive (simple or facilitated diffusion, no energy/gradient input needed) or as secondary active transport (needs an existing ion gradient) — only the latter is vulnerable to disrupting the pump that built that gradient.",
        steps: [
          "Identify what the Na+/K+-ATPase does: pumps 3 Na+ out and 2 K+ in per ATP, maintaining a low intracellular Na+ concentration.",
          "Recall which transporters depend on that gradient: secondary active transporters (symporters/antiporters) like SGLT1 that co-transport a solute along with Na+ moving down its gradient.",
          "Classify each choice: GLUT2, GLUT5, and O2 diffusion are all passive and gradient-independent for their own solute.",
          "Recognize only SGLT1 requires the sodium gradient the pump maintains, making it the process most directly impaired by ouabain.",
        ],
      },
      category: { foundationalConcept: "FC2", contentCategory: "2B", skill: "concept application" },
      difficulty: "easy",
    },
    {
      id: "bb-q12",
      passageId: null,
      sectionId: "bio-biochem",
      order: 11,
      stem: "A researcher adds a lipid-soluble chemical uncoupler, which carries protons across the inner mitochondrial membrane independent of ATP synthase, to a suspension of isolated, actively respiring mitochondria. Compared with untreated mitochondria, which of the following would most likely be observed?",
      choices: [
        { id: "A", text: "Decreased oxygen consumption and increased ATP synthesis, because electron transport slows once the proton gradient collapses.", explanation: "Collapsing the proton gradient removes the 'back-pressure' that normally limits electron transport chain activity, so oxygen consumption increases, not decreases, as the chain runs faster to try to rebuild the gradient." },
        { id: "B", text: "Increased oxygen consumption and decreased ATP synthesis, because the dissipated proton gradient uncouples electron transport from ATP synthase activity.", explanation: "Correct. With protons leaking back across the membrane independent of ATP synthase, the proton-motive force needed to drive ATP synthase collapses (lowering ATP synthesis), while the electron transport chain, freed from the gradient's inhibitory back-pressure, pumps protons and consumes O2 faster than before." },
        { id: "C", text: "No change in oxygen consumption but increased ATP synthesis, because ATP synthase activity is independent of the proton gradient.", explanation: "ATP synthase activity is fundamentally dependent on the proton-motive force across the inner membrane; it cannot synthesize ATP efficiently once that gradient is dissipated by an uncoupler." },
        { id: "D", text: "Decreased oxygen consumption and decreased ATP synthesis, because uncouplers directly inhibit Complex I of the electron transport chain.", explanation: "Uncouplers do not inhibit the electron transport chain complexes themselves; they act on the proton gradient by providing an alternate route for protons to cross the membrane, which if anything accelerates electron transport." },
      ],
      correctChoiceId: "B",
      explanationOverall:
        "Chemical uncouplers dissipate the proton-motive force by shuttling H+ across the inner mitochondrial membrane through a route that bypasses ATP synthase. This collapses the gradient ATP synthase needs to make ATP (ATP synthesis falls), while simultaneously removing the gradient's normal restraint on electron transport, so the chain speeds up and oxygen consumption rises — the two outputs of oxidative phosphorylation become uncoupled from each other, as the name implies.",
      walkthrough: {
        approachNotes:
          "For chemiosmosis questions, keep two variables mentally separate: electron transport/O2 consumption (rate-limited by how fast the proton gradient can be rebuilt) and ATP synthesis (rate-limited by how strong the proton gradient is). An uncoupler affects these two variables in opposite directions.",
        steps: [
          "Recall the normal chemiosmotic coupling: electron transport pumps H+ out, building a gradient; ATP synthase uses that gradient's flow back in to make ATP.",
          "Recognize that an uncoupler provides a second path for H+ to re-enter the matrix, one that bypasses ATP synthase entirely.",
          "Reason that with the gradient constantly leaking away, ATP synthase has less proton-motive force to work with, so ATP synthesis falls.",
          "Reason that with the gradient no longer building up to inhibitory levels, the electron transport chain is freed to run faster, so O2 consumption rises.",
          "Select the choice pairing increased O2 consumption with decreased ATP synthesis, and reject choices that keep the two changes in the same direction or invoke direct complex inhibition.",
        ],
      },
      category: { foundationalConcept: "FC1", contentCategory: "1D", skill: "concept application" },
      difficulty: "hard",
    },
  ],
};

export default bioBiochemContent;
