import type { Passage, Question } from "@/lib/types";

export const passages: Passage[] = [
  {
    id: "bb-p6",
    sectionId: "bio-biochem",
    order: 5,
    kind: "passage",
    title: "Hepatic Fructose-2,6-Bisphosphate and the Fed-Fasted Transition",
    bodyMarkdown: `In the liver, glycolysis and gluconeogenesis are reciprocally regulated by fructose-2,6-bisphosphate (F2,6BP), which activates phosphofructokinase-1 (PFK-1) and inhibits fructose-1,6-bisphosphatase (FBPase-1). F2,6BP is made and degraded by a single bifunctional enzyme, PFK-2/FBPase-2. When the enzyme is dephosphorylated its kinase domain predominates and F2,6BP is synthesized; when it is phosphorylated at Ser32 by protein kinase A (PKA), its phosphatase domain predominates and F2,6BP is degraded. Glucagon raises cAMP and activates PKA, whereas insulin promotes dephosphorylation of PKA targets.

Researchers compared wild-type (WT) mice with knock-in mice expressing PFK-2/FBPase-2 in which Ser32 was replaced with alanine (S32A). Mice were studied either fed or after a 16-hour fast. Liver was assayed for F2,6BP and glycogen, and glucose output was measured in perfused livers.

| Genotype | State | Liver F2,6BP (pmol/mg) | Liver glycogen (mg/g) | Hepatic glucose output (nmol/min/mg) |
|---|---|---|---|---|
| WT | Fed | 12 | 60 | 5 |
| WT | Fasted | 2 | 8 | 38 |
| S32A | Fed | 13 | 62 | 5 |
| S32A | Fasted | 11 | 9 | 14 |

Plasma glucagon rose and plasma insulin fell to a similar degree in fasted mice of both genotypes. The S32A mutation did not alter the catalytic activity of either domain of the enzyme when tested in vitro.`,
    questionIds: ["bb-q25", "bb-q26", "bb-q27", "bb-q28", "bb-q29"],
  },
  {
    id: "bb-p7",
    sectionId: "bio-biochem",
    order: 6,
    kind: "passage",
    title: "Reflex Control of Heart Rate During Vasoconstrictor Infusion",
    bodyMarkdown: `Arterial baroreceptors in the carotid sinus and aortic arch fire at a rate proportional to arterial wall stretch, relaying information to the medulla. The medulla adjusts sympathetic and parasympathetic (vagal) output to the heart and vasculature to hold mean arterial pressure (MAP) near a set point. Cardiac output (CO) is the product of heart rate (HR) and stroke volume (SV), and MAP is approximately the product of CO and total peripheral resistance (TPR).

Compound Q is a selective agonist of α1-adrenergic receptors on vascular smooth muscle, with negligible affinity for cardiac receptors. In anesthetized dogs, Compound Q was infused intravenously, and hemodynamics were recorded at baseline, during infusion, and during infusion after pretreatment with atropine, a muscarinic acetylcholine receptor antagonist. End-diastolic volume (EDV) and end-systolic volume (ESV) were estimated from ventricular imaging.

| Condition | HR (beats/min) | EDV (mL) | ESV (mL) | MAP (mmHg) |
|---|---|---|---|---|
| Baseline | 80 | 120 | 50 | 93 |
| Compound Q | 55 | 130 | 55 | 130 |
| Atropine + Compound Q | 82 | 124 | 52 | 150 |

Stroke volume is defined as EDV minus ESV. Atropine alone did not change MAP appreciably but raised HR modestly, to about 84 beats/min.`,
    questionIds: ["bb-q30", "bb-q31", "bb-q32", "bb-q33", "bb-q34"],
  },
];

export const questions: Question[] = [
  {
    id: "bb-q25",
    passageId: "bb-p6",
    sectionId: "bio-biochem",
    order: 24,
    stem: "In fasted WT mice, the low F2,6BP level would be expected to have which effect on hepatic carbohydrate metabolism?",
    choices: [
      { id: "A", text: "Increased PFK-1 activity and increased inhibition of FBPase-1, favoring glycolysis", explanation: "This is the fed-state pattern. High F2,6BP activates PFK-1 and inhibits FBPase-1; the fasted mice have low F2,6BP, so the opposite occurs." },
      { id: "B", text: "Decreased PFK-1 activity and relief of FBPase-1 inhibition, favoring gluconeogenesis", explanation: "Correct. Low F2,6BP removes the allosteric activation of PFK-1 and the inhibition of FBPase-1, so the futile cycle tilts toward net glucose production." },
      { id: "C", text: "Decreased FBPase-1 activity because F2,6BP is a required cofactor for the enzyme", explanation: "F2,6BP is an allosteric inhibitor of FBPase-1, not a cofactor. Losing it increases, not decreases, FBPase-1 activity." },
      { id: "D", text: "Increased PFK-1 activity because the PKA-phosphorylated bifunctional enzyme now produces more F2,6BP", explanation: "PKA phosphorylation favors the phosphatase domain, which degrades F2,6BP. It does not increase F2,6BP, which the table shows fell to 2 pmol/mg." },
    ],
    correctChoiceId: "B",
    explanationOverall:
      "F2,6BP is a signal of the fed state: it stimulates PFK-1 and inhibits FBPase-1. During fasting, glucagon-driven PKA phosphorylation of PFK-2/FBPase-2 lowers F2,6BP, so PFK-1 slows and FBPase-1 is disinhibited, favoring gluconeogenesis and glucose release.",
    walkthrough: {
      approachNotes: "Identify the direction of the F2,6BP change first, then apply its two known allosteric effects. Reciprocal regulation means one signal moves both pathways in opposite directions.",
      steps: [
        "Read the table: WT F2,6BP falls from 12 (fed) to 2 pmol/mg (fasted).",
        "Recall that F2,6BP activates PFK-1 (glycolysis) and inhibits FBPase-1 (gluconeogenesis).",
        "With less F2,6BP, PFK-1 loses activation and FBPase-1 loses inhibition.",
        "Net effect: flux shifts toward gluconeogenesis, consistent with the rise in glucose output from 5 to 38.",
      ],
    },
    category: { foundationalConcept: "FC1", contentCategory: "1D", skill: "data-based reasoning" },
    difficulty: "easy",
  },
  {
    id: "bb-q26",
    passageId: "bb-p6",
    sectionId: "bio-biochem",
    order: 25,
    stem: "Which statement best explains why F2,6BP remained high in fasted S32A mice?",
    choices: [
      { id: "A", text: "Glucagon failed to rise in the mutant mice, so PKA was never activated.", explanation: "The passage states glucagon rose and insulin fell similarly in both genotypes, so hormone levels do not explain the difference." },
      { id: "B", text: "The mutation destroyed the kinase domain, so F2,6BP could not be degraded.", explanation: "A dead kinase domain would lower F2,6BP synthesis, not preserve it. The passage also says catalytic activity of both domains was unchanged." },
      { id: "C", text: "Insulin signaling was constitutively active, continuously dephosphorylating the enzyme.", explanation: "Insulin was low in fasted mutant mice. Also, the mutation itself removes the phosphorylation site, so dephosphorylation by insulin is not required to explain the result." },
      { id: "D", text: "Alanine cannot be phosphorylated, so PKA could not switch the enzyme toward its phosphatase activity.", explanation: "Correct. Alanine lacks the hydroxyl group needed to accept a phosphate, so the enzyme remains in its kinase-dominant form even with high PKA activity, and F2,6BP is not degraded." },
    ],
    correctChoiceId: "D",
    explanationOverall:
      "Ser32 is the PKA phosphorylation site that shifts the bifunctional enzyme toward FBPase-2 activity. Replacing it with alanine, which has no hydroxyl group, makes the site unphosphorylatable. Even with high glucagon and PKA activity, the enzyme stays in the kinase-dominant state and F2,6BP stays high.",
    walkthrough: {
      approachNotes: "For a point-mutation question, ask what chemical property of the original residue is lost and what step in the pathway depended on it.",
      steps: [
        "Note that serine has a side-chain hydroxyl that can accept a phosphate; alanine has a methyl group and cannot.",
        "Recall that PKA phosphorylation at Ser32 activates the FBPase-2 domain and lowers F2,6BP.",
        "Use the passage details: hormone levels were similar and in vitro activity was unaltered, ruling out hormone or catalytic defects.",
        "Conclude that the regulatory switch, not the enzyme chemistry, is broken.",
      ],
    },
    category: { foundationalConcept: "FC1", contentCategory: "1A", skill: "structure-function reasoning" },
    difficulty: "medium",
  },
  {
    id: "bb-q27",
    passageId: "bb-p6",
    sectionId: "bio-biochem",
    order: 26,
    stem: "Fasted S32A mice still show higher hepatic glucose output (14 nmol/min/mg) than fed S32A mice (5 nmol/min/mg). Which is the most likely source of this additional glucose?",
    choices: [
      { id: "A", text: "Glycogenolysis, because glucagon-activated PKA still promotes glycogen phosphorylase activation independent of Ser32 of PFK-2/FBPase-2", explanation: "Correct. Liver glycogen fell from 62 to 9 mg/g in fasted S32A mice. Glucagon activates phosphorylase kinase and glycogen phosphorylase through PKA, a pathway the S32A mutation does not touch." },
      { id: "B", text: "Increased glycolytic flux, since F2,6BP stays high and PFK-1 is active", explanation: "Glycolysis consumes glucose derivatives and does not release free glucose from the liver. High F2,6BP would, if anything, reduce glucose output." },
      { id: "C", text: "Direct conversion of fatty acids to glucose by the glyoxylate pathway", explanation: "Humans and mice lack the glyoxylate cycle, so net conversion of fatty acid carbons to glucose does not occur this way." },
      { id: "D", text: "Glycogen synthesis, which is stimulated by the fall in insulin", explanation: "Glycogen synthesis is promoted by insulin, and the glycogen data show net loss of glycogen, not accumulation." },
    ],
    correctChoiceId: "A",
    explanationOverall:
      "The S32A mutation blocks only the PFK-2/FBPase-2 branch of glucagon signaling. The glycogen breakdown branch is intact, so fasted mutants still mobilize glycogen (62 to 9 mg/g) and release some glucose. Gluconeogenesis is dampened by high F2,6BP, which explains why output is below the WT fasted value.",
    walkthrough: {
      approachNotes: "When a mutation knocks out one target of a signaling pathway, ask which other targets of the same pathway are unaffected and look for supporting data in the table.",
      steps: [
        "Compare glucose output: S32A fasted (14) is above fed (5) but well below WT fasted (38).",
        "Look for another data column that changes in fasted S32A: glycogen drops from 62 to 9 mg/g.",
        "Recall that PKA also activates phosphorylase kinase and glycogen phosphorylase, independent of PFK-2/FBPase-2.",
        "Reject choices that use glycolysis, glycogen synthesis or nonexistent pathways to release glucose.",
      ],
    },
    category: { foundationalConcept: "FC1", contentCategory: "1D", skill: "data-based reasoning" },
    difficulty: "medium",
  },
  {
    id: "bb-q28",
    passageId: "bb-p6",
    sectionId: "bio-biochem",
    order: 27,
    stem: "A third knock-in line expresses PFK-2/FBPase-2 with Ser32 replaced by aspartate (S32D), which mimics the phosphorylated enzyme. Which result in fed S32D mice would best support the model that Ser32 phosphorylation lowers F2,6BP and promotes glucose output?",
    choices: [
      { id: "A", text: "High F2,6BP and low glucose output, similar to fed WT mice", explanation: "This is the normal fed-state result and would not show any effect of the phosphomimetic substitution." },
      { id: "B", text: "High F2,6BP and high glucose output, since aspartate raises kinase activity", explanation: "High F2,6BP would activate PFK-1 and inhibit FBPase-1, which should not raise glucose output. The prediction is internally inconsistent with the model." },
      { id: "C", text: "Low F2,6BP and elevated glucose output despite high insulin and low glucagon", explanation: "Correct. If the phosphomimetic constitutively favors FBPase-2 activity, F2,6BP should be low even in the fed state, shifting flux toward gluconeogenesis and raising glucose output without any glucagon signal." },
      { id: "D", text: "Low F2,6BP and low glucose output, since gluconeogenesis cannot occur in the fed state", explanation: "Gluconeogenic capacity is regulated, not impossible, in the fed state. Low F2,6BP should remove inhibition of FBPase-1 and increase output." },
    ],
    correctChoiceId: "C",
    explanationOverall:
      "The S32A result shows that blocking phosphorylation prevents the fasting response. The converse experiment, mimicking phosphorylation with a negatively charged residue, should produce a fasting-like state in fed animals. Low F2,6BP and elevated glucose output despite fed hormone levels would demonstrate that Ser32 phosphorylation is sufficient to drive the change.",
    walkthrough: {
      approachNotes: "Loss-of-function and gain-of-function experiments are complementary. Predict the opposite phenotype from the loss-of-function mutant, then check it against the model.",
      steps: [
        "Recognize that aspartate carries a negative charge, mimicking a phosphoserine.",
        "Apply the model: the phosphorylated enzyme favors FBPase-2 and therefore lowers F2,6BP.",
        "Predict downstream effects: PFK-1 less active, FBPase-1 less inhibited, more glucose output.",
        "Choose the answer that shows the fasting phenotype appearing in the fed state.",
      ],
    },
    category: { foundationalConcept: "FC1", contentCategory: "1D", skill: "experimental design" },
    difficulty: "hard",
  },
  {
    id: "bb-q29",
    passageId: "bb-p6",
    sectionId: "bio-biochem",
    order: 28,
    stem: "Which of the following describes the expected state of the two principal glycogen-metabolizing enzymes in liver of fed WT mice with high plasma insulin?",
    choices: [
      { id: "A", text: "Glycogen synthase phosphorylated and inactive; glycogen phosphorylase phosphorylated and active", explanation: "This is the glucagon-stimulated (fasting) state, in which glycogen breakdown is favored and synthesis is suppressed." },
      { id: "B", text: "Glycogen synthase dephosphorylated and active; glycogen phosphorylase dephosphorylated and inactive", explanation: "Correct. Insulin promotes dephosphorylation of both enzymes, activating glycogen synthase and inactivating phosphorylase, which favors glycogen storage (60 mg/g in fed WT liver)." },
      { id: "C", text: "Glycogen synthase dephosphorylated and active; glycogen phosphorylase phosphorylated and active", explanation: "Both enzymes would then be active at once, wasting energy in a futile cycle. Reciprocal regulation prevents this." },
      { id: "D", text: "Both enzymes phosphorylated and inactive, because insulin inhibits all glycogen metabolism", explanation: "Insulin promotes glycogen synthesis. Phosphorylation inactivates glycogen synthase, so this state would block storage." },
    ],
    correctChoiceId: "B",
    explanationOverall:
      "Insulin favors storage: protein phosphatase activity increases, which dephosphorylates glycogen synthase (active) and glycogen phosphorylase (inactive). Glucagon and PKA do the opposite, so the two enzymes are reciprocally regulated by phosphorylation, with opposite effects on each enzyme.",
    walkthrough: {
      approachNotes: "Remember that phosphorylation activates glycogen phosphorylase but inactivates glycogen synthase. Then match the hormone to the direction of phosphorylation.",
      steps: [
        "Identify the state: fed, high insulin, so phosphatase activity predominates.",
        "Dephosphorylation activates glycogen synthase and inactivates phosphorylase.",
        "Check against the glycogen data: fed WT liver stores 60 mg/g.",
        "Eliminate options in which both enzymes are active or both inactive.",
      ],
    },
    category: { foundationalConcept: "FC1", contentCategory: "1D", skill: "concept application" },
    difficulty: "easy",
  },
  {
    id: "bb-q30",
    passageId: "bb-p7",
    sectionId: "bio-biochem",
    order: 29,
    stem: "What was the approximate cardiac output during infusion of Compound Q alone?",
    choices: [
      { id: "A", text: "5.6 L/min", explanation: "This is the baseline cardiac output (80 beats/min x 70 mL), not the value during infusion." },
      { id: "B", text: "130 mL/min", explanation: "This results from adding HR and SV rather than multiplying them, and the magnitude is far too small for cardiac output." },
      { id: "C", text: "4.1 L/min", explanation: "Correct. SV = 130 - 55 = 75 mL, and CO = HR x SV = 55 x 75 = 4,125 mL/min, about 4.1 L/min." },
      { id: "D", text: "3.0 L/min", explanation: "This would require a smaller stroke volume (about 55 mL) than the EDV and ESV values give." },
    ],
    correctChoiceId: "C",
    explanationOverall:
      "Stroke volume is EDV minus ESV, which is 75 mL during Compound Q. Multiplying by the heart rate of 55 beats/min gives about 4,125 mL/min, or 4.1 L/min, which is lower than the baseline 5.6 L/min.",
    walkthrough: {
      approachNotes: "Find the needed quantity from the definitions in the passage, then compute using the table values for the right row.",
      steps: [
        "Use the Compound Q row: EDV = 130 mL, ESV = 55 mL.",
        "Compute SV = 130 - 55 = 75 mL.",
        "Compute CO = $HR \\times SV$ = 55 x 75 = 4,125 mL/min.",
        "Convert to about 4.1 L/min.",
      ],
    },
    category: { foundationalConcept: "FC3", contentCategory: "3B", skill: "data-based reasoning" },
    difficulty: "easy",
  },
  {
    id: "bb-q31",
    passageId: "bb-p7",
    sectionId: "bio-biochem",
    order: 30,
    stem: "The fall in heart rate during Compound Q infusion is best explained by which mechanism?",
    choices: [
      { id: "A", text: "Direct negative chronotropic action of Compound Q on sinoatrial node cells", explanation: "Compound Q has negligible affinity for cardiac receptors, and heart rate did not fall when atropine was present, so a direct cardiac action is unlikely." },
      { id: "B", text: "Decreased baroreceptor firing, which reduces sympathetic stimulation of the heart", explanation: "Baroreceptor firing increases when arterial pressure rises, as in the Compound Q condition. Reduced firing would occur with a pressure fall." },
      { id: "C", text: "An increase in end-diastolic volume that directly stretches the atria and slows the SA node", explanation: "Stretch of the SA node tends to increase rate, and EDV rose only modestly. This mechanism does not account for the atropine-sensitive bradycardia." },
      { id: "D", text: "Increased baroreceptor firing, leading to greater vagal outflow to the SA node through muscarinic receptors", explanation: "Correct. Higher MAP raises baroreceptor firing, medullary output shifts toward parasympathetic activity, and acetylcholine on M2 receptors slows SA node depolarization. Atropine blocks this and abolishes the bradycardia." },
    ],
    correctChoiceId: "D",
    explanationOverall:
      "Compound Q constricts vessels and raises MAP. The pressure rise increases baroreceptor firing, and the medulla responds with increased vagal and decreased sympathetic drive to the heart. Because atropine blocked the bradycardia, the effect is mediated through muscarinic receptors, consistent with a reflex rather than a direct drug action.",
    walkthrough: {
      approachNotes: "When a drug acts on one tissue but a different organ responds, suspect a reflex. Use the control (atropine) condition to identify the efferent limb.",
      steps: [
        "Note that Compound Q targets vascular α1 receptors, not the heart.",
        "MAP rose from 93 to 130 mmHg, which increases baroreceptor stretch and firing.",
        "The reflex raises parasympathetic output to the SA node via acetylcholine acting on muscarinic receptors.",
        "With atropine, HR stays at 82 beats/min, confirming a muscarinic pathway.",
      ],
    },
    category: { foundationalConcept: "FC3", contentCategory: "3B", skill: "data-based reasoning" },
    difficulty: "medium",
  },
  {
    id: "bb-q32",
    passageId: "bb-p7",
    sectionId: "bio-biochem",
    order: 31,
    stem: "MAP increased during Compound Q infusion even though cardiac output decreased. This is best explained by:",
    choices: [
      { id: "A", text: "A large increase in total peripheral resistance caused by α1-mediated vasoconstriction", explanation: "Correct. Since MAP is approximately CO x TPR, a rise in MAP with falling CO requires TPR to increase proportionally more, as expected with arteriolar vasoconstriction." },
      { id: "B", text: "An increase in stroke volume large enough to offset the decrease in heart rate", explanation: "SV rose only from 70 to 75 mL, which is insufficient to raise CO. CO actually fell from 5.6 to 4.1 L/min." },
      { id: "C", text: "A decrease in total peripheral resistance caused by reflex vasodilation", explanation: "Lower TPR together with lower CO would reduce MAP, the opposite of the observed rise." },
      { id: "D", text: "A decrease in blood viscosity caused by the drug", explanation: "Reduced viscosity would lower resistance. There is also no mechanism or data suggesting a viscosity change." },
    ],
    correctChoiceId: "A",
    explanationOverall:
      "MAP is roughly CO multiplied by TPR. Baseline TPR is about 93/5.6, or 17 mmHg per L/min, while during infusion it is about 130/4.1, or 32. The roughly doubled resistance more than offsets the fall in output, consistent with α1-mediated vasoconstriction.",
    walkthrough: {
      approachNotes: "Rearrange the hemodynamic relationship to solve for the unobserved variable. Use the table to estimate it quantitatively.",
      steps: [
        "Write $MAP \\approx CO \\times TPR$, so $TPR \\approx MAP / CO$.",
        "Baseline: 93 / 5.6 is about 17.",
        "Compound Q: 130 / 4.1 is about 32, nearly double.",
        "Identify α1 receptor activation on arterioles as the cause of increased resistance.",
      ],
    },
    category: { foundationalConcept: "FC3", contentCategory: "3B", skill: "concept application" },
    difficulty: "medium",
  },
  {
    id: "bb-q33",
    passageId: "bb-p7",
    sectionId: "bio-biochem",
    order: 32,
    stem: "Compared with Compound Q alone, EDV was lower in the atropine plus Compound Q condition (124 mL versus 130 mL). The most likely explanation is that:",
    choices: [
      { id: "A", text: "Atropine increased ventricular contractility, lowering EDV.", explanation: "Contractility affects ESV, not EDV directly, and atropine acts on muscarinic receptors, which has little direct effect on ventricular contractility. ESV was in fact similar in the two conditions." },
      { id: "B", text: "Atropine caused venodilation, which increased venous return.", explanation: "Increased venous return would raise EDV, not lower it, and atropine is not a venodilator." },
      { id: "C", text: "The higher heart rate shortened diastole, leaving less time for ventricular filling.", explanation: "Correct. At 82 versus 55 beats/min, each cycle is shorter, mostly at the expense of diastole, so less filling occurs per beat and EDV (and therefore SV) falls modestly." },
      { id: "D", text: "The higher MAP in the atropine group increased ventricular preload directly.", explanation: "Higher arterial pressure is afterload, not preload, and an afterload rise would tend to increase ESV rather than decrease EDV." },
    ],
    correctChoiceId: "C",
    explanationOverall:
      "Without vagal slowing, heart rate stays at about 82 beats/min instead of 55. The faster rate shortens diastolic filling time, so EDV is smaller (124 versus 130 mL) and SV is slightly lower (72 versus 75 mL). Preload depends on filling, whereas arterial pressure represents afterload.",
    walkthrough: {
      approachNotes: "Separate preload (filling, EDV) from afterload (arterial pressure, which affects ESV). Then connect rate to filling time.",
      steps: [
        "Compare the two rows: HR 55 versus 82 beats/min, EDV 130 versus 124 mL.",
        "Recall that rapid heart rates shorten diastole more than systole.",
        "Less diastolic time means less ventricular filling and a lower EDV.",
        "Eliminate options that confuse afterload with preload or that contradict the near-identical ESV values.",
      ],
    },
    category: { foundationalConcept: "FC3", contentCategory: "3B", skill: "concept application" },
    difficulty: "hard",
  },
  {
    id: "bb-q34",
    passageId: "bb-p7",
    sectionId: "bio-biochem",
    order: 33,
    stem: "A researcher wants to determine specifically whether the baroreceptor reflex, rather than a direct drug effect on the heart, produced the bradycardia. Which experiment would be most informative?",
    choices: [
      { id: "A", text: "Repeat the infusion at a higher dose to see whether HR falls further", explanation: "A dose-response curve would not distinguish a reflex from a direct effect, since both could scale with dose." },
      { id: "B", text: "Repeat the infusion after surgically denervating the carotid sinus and aortic arch baroreceptors and compare HR responses", explanation: "Correct. If bradycardia depends on the reflex, removing the afferent limb should abolish the fall in HR while the pressor response persists. A persisting bradycardia would suggest a direct cardiac effect." },
      { id: "C", text: "Measure only stroke volume in each condition", explanation: "Stroke volume does not specifically report on baroreceptor signaling to the SA node." },
      { id: "D", text: "Measure plasma concentration of Compound Q during infusion", explanation: "Drug concentration shows exposure but says nothing about the pathway responsible for the heart rate change." },
    ],
    correctChoiceId: "B",
    explanationOverall:
      "To test whether a pathway is necessary, remove one component and see whether the effect disappears. Denervating the baroreceptors removes the afferent limb of the reflex; if the bradycardia vanishes while MAP still rises, the reflex mediates it. Dose escalation, stroke volume, and drug levels do not isolate the pathway.",
    walkthrough: {
      approachNotes: "For experimental design questions, choose the manipulation that removes a single proposed component while leaving the others intact, and predict the outcome under each hypothesis.",
      steps: [
        "State the two hypotheses: reflex-mediated versus direct cardiac action.",
        "Find the manipulation that removes the reflex's afferent limb: baroreceptor denervation.",
        "Predict: reflex hypothesis gives no HR fall; direct-action hypothesis gives continued HR fall.",
        "Reject choices that only measure exposure or unrelated variables.",
      ],
    },
    category: { foundationalConcept: "FC3", contentCategory: "3B", skill: "experimental design" },
    difficulty: "medium",
  },
  {
    id: "bb-q35",
    passageId: null,
    sectionId: "bio-biochem",
    order: 34,
    stem: "Hemophilia A is an X-linked recessive disorder. A woman with no family history of hemophilia other than a brother with the disease has unaffected parents. She marries an unaffected man. What is the probability that their first child will be an affected son?",
    choices: [
      { id: "A", text: "1/2", explanation: "This is only the chance that the woman is a carrier (or that a son of a carrier is affected, if sex were already known); it ignores the remaining factors needed for a child who is both male and affected." },
      { id: "B", text: "1/4", explanation: "This is the chance that a known carrier's first child is an affected son, but the woman is only a carrier with probability 1/2, so this omits that factor." },
      { id: "C", text: "1/16", explanation: "This is too low; it counts an extra factor of 1/2, for example by applying the carrier probability twice or treating the husband as a possible carrier." },
      { id: "D", text: "1/8", explanation: "Correct. The woman's mother must be a carrier, and her father was unaffected, so she is a carrier with probability 1/2. A carrier's child is an affected son with probability 1/2 (son) x 1/2 (mutant X) = 1/4. Overall: 1/2 x 1/4 = 1/8." },
    ],
    correctChoiceId: "D",
    explanationOverall:
      "The affected brother has a mutant X from his carrier mother. The woman's unaffected father gave her a normal X, so she is a carrier only if she received her mother's mutant X, a 1/2 chance. If she is a carrier and her husband is unaffected, 1/4 of all children are affected sons. Multiplying gives 1/8.",
    walkthrough: {
      approachNotes: "Break pedigree probability into stages: the chance the parent is a carrier, then the chance of the specific child given that carrier status.",
      steps: [
        "Deduce the mother is a carrier: she has an affected son but unaffected parents (father unaffected, so the allele came from her mother's side).",
        "The woman got a normal X from her unaffected father; she has a 1/2 chance of having inherited her mother's mutant X.",
        "If she is a carrier and the father is normal, P(affected son) = 1/2 (son) x 1/2 (mutant X) = 1/4.",
        "Multiply: 1/2 x 1/4 = 1/8.",
      ],
    },
    category: { foundationalConcept: "FC1", contentCategory: "1B", skill: "concept application" },
    difficulty: "medium",
  },
  {
    id: "bb-q36",
    passageId: null,
    sectionId: "bio-biochem",
    order: 35,
    stem: "A child with trisomy 21 is genotyped at several polymorphic markers located close to the centromere of chromosome 21. At each marker the child has two different maternal alleles and one paternal allele. Assuming no mitotic errors, which event most likely produced this karyotype?",
    choices: [
      { id: "A", text: "Failure of homologous chromosomes to separate during meiosis I in the mother", explanation: "Correct. Retaining both maternal homologs in the egg means the egg carries two different centromere-proximal alleles (one from each of her chromosome 21s). Little crossing over occurs near the centromere, so these markers remain heterozygous." },
      { id: "B", text: "Failure of sister chromatids to separate during meiosis II in the mother", explanation: "This would give an egg with two copies of the same maternal chromosome, so centromere-proximal markers would be identical, not two different alleles." },
      { id: "C", text: "Failure of homologous chromosomes to separate during meiosis I in the father", explanation: "This would give the child two different paternal alleles and one maternal allele, the reverse of what was observed." },
      { id: "D", text: "Nondisjunction in a mitotic division after fertilization", explanation: "A postzygotic mitotic error generally yields mosaicism and would not produce the observed pattern of two different maternal alleles throughout the child's cells." },
    ],
    correctChoiceId: "A",
    explanationOverall:
      "Heterozygosity for maternal alleles near the centromere indicates that both maternal homologs, not two sister chromatids, were passed on. Homologs separate in meiosis I, so a meiosis I nondisjunction in the mother is the most likely cause. A meiosis II error would give identical maternal copies near the centromere.",
    walkthrough: {
      approachNotes: "Track which chromosomes separate at each division: homologs in meiosis I, sister chromatids in meiosis II. Centromere-proximal markers are least affected by crossing over, so they report the origin cleanly.",
      steps: [
        "Observe that the extra chromosome is maternal in origin (two maternal alleles, one paternal).",
        "Two different maternal alleles means both homologs were transmitted.",
        "Homologs separate in meiosis I, so the failure occurred in meiosis I.",
        "Rule out meiosis II (identical copies), paternal origin, and mosaic mitotic errors.",
      ],
    },
    category: { foundationalConcept: "FC1", contentCategory: "1B", skill: "concept application" },
    difficulty: "hard",
  },
];
