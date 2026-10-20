import type { Passage, Question } from "@/lib/types";

export const passages: Passage[] = [
  {
    id: "bb-p4",
    sectionId: "bio-biochem",
    order: 3,
    kind: "passage",
    title: "Oxygen Binding and Allostery in Hemoglobin Variants",
    bodyMarkdown: `Myoglobin (Mb) is a monomeric heme protein of muscle, whereas adult hemoglobin (HbA) is a heterotetramer that carries oxygen in erythrocytes. Plotted as fractional saturation ($Y$) versus partial pressure of oxygen ($p\\mathrm{O}_2$), Mb produces a hyperbolic curve and HbA produces a sigmoidal curve. Oxygen affinity is summarized by the $P_{50}$, the $p\\mathrm{O}_2$ at which $Y = 0.5$, and cooperativity by the Hill coefficient $n$ in the equation $Y = \\frac{p^n}{P_{50}^n + p^n}$, where $p$ is the $p\\mathrm{O}_2$. HbA exists in a low-affinity T (tense) state stabilized by 2,3-bisphosphoglycerate (2,3-BPG), which binds in the central cavity of the deoxygenated tetramer through interactions with positively charged residues, and in a high-affinity R (relaxed) state.

A research group purified two naturally occurring HbA variants from patient samples and compared them with HbA and Mb. All measurements were made at 37 °C in buffer containing a physiological concentration of 2,3-BPG. Variant Hb-X carries a substitution of a β-chain residue that lines the central cavity. Variant Hb-Y carries a substitution at the α1β2 subunit interface. Each protein was measured at two pH values.

**Table 1.** Oxygen-binding parameters

| Protein | $P_{50}$ at pH 7.4 (mmHg) | $P_{50}$ at pH 7.2 (mmHg) | Hill coefficient $n$ (pH 7.4) |
|---|---|---|---|
| Mb | 2.8 | 2.8 | 1.0 |
| HbA | 26 | 31 | 2.8 |
| Hb-X | 14 | 15 | 2.7 |
| Hb-Y | 9 | 10 | 1.3 |

*Figure 1 (described).* Saturation curves for the four proteins at pH 7.4. The Mb curve rises steeply and plateaus near 2.8 mmHg. The HbA and Hb-X curves are sigmoidal, with Hb-X shifted to the left of HbA. The Hb-Y curve is shifted far to the left and is nearly hyperbolic.

Arterial blood in the lungs has a $p\\mathrm{O}_2$ near 100 mmHg, whereas resting tissue capillaries have a $p\\mathrm{O}_2$ near 30 mmHg.`,
    questionIds: ["bb-q13", "bb-q14", "bb-q15", "bb-q16", "bb-q17"],
  },
  {
    id: "bb-p5",
    sectionId: "bio-biochem",
    order: 4,
    kind: "passage",
    title: "Replication Fidelity in Mismatch-Repair-Deficient Cells",
    bodyMarkdown: `During S phase, the replication fork copies the leading strand continuously and the lagging strand as Okazaki fragments, each initiated by an RNA primer. Replicative DNA polymerases select the correct nucleotide with an error rate of roughly 1 in $10^5$ incorporations. Their 3′→5′ exonuclease (proofreading) activity improves this to roughly 1 in $10^7$. Post-replicative mismatch repair (MMR), in which the MSH2-containing complex recognizes mispaired bases and small insertion/deletion loops in the newly synthesized strand, improves fidelity roughly another 100-fold. Nucleotide excision repair (NER) is a separate pathway that removes bulky lesions such as UV-induced pyrimidine dimers.

Researchers compared three human cell lines: wild type (WT), an *MSH2* knockout (*MSH2*⁻/⁻), and the knockout line stably re-expressing wild-type *MSH2* ("add-back"). Three assays were performed. (1) Mutation frequency was estimated as the number of 6-thioguanine (6-TG)-resistant colonies per $10^6$ cells; resistance arises from loss-of-function mutations in the *HPRT* gene. (2) Microsatellite stability was assessed by growing 40 single-cell clones for about 30 generations, amplifying a (CA)ₙ repeat locus by PCR with flanking primers, and scoring clones whose product length differed from that of the founder cell. (3) Survival was measured after exposure to 20 J/m² of UVC light.

**Table 1.** Assay results

| Cell line | 6-TG-resistant colonies per $10^6$ cells | Clones with altered repeat length (of 40) | Survival after UVC (%) |
|---|---|---|---|
| WT | 2 | 1 | 80 |
| *MSH2*⁻/⁻ | 180 | 31 | 78 |
| Add-back | 3 | 2 | 81 |`,
    questionIds: ["bb-q18", "bb-q19", "bb-q20", "bb-q21", "bb-q22"],
  },
];

export const questions: Question[] = [
  {
    id: "bb-q13",
    passageId: "bb-p4",
    sectionId: "bio-biochem",
    order: 12,
    stem: "Which of the following best explains why the saturation curve of HbA is sigmoidal while that of Mb is hyperbolic?",
    choices: [
      { id: "A", text: "Mb has a larger Hill coefficient than HbA, so its binding is more cooperative.", explanation: "Incorrect. Mb has n = 1.0, which means no cooperativity, while HbA has n = 2.8. The relationship is the reverse of what this choice states." },
      { id: "B", text: "Oxygen binding to one subunit of HbA raises the oxygen affinity of its remaining subunits, whereas Mb has a single binding site and cannot show this effect.", explanation: "Correct. Cooperative binding among the four subunits of HbA, driven by the T to R transition, produces the sigmoidal curve and n > 1. Monomeric Mb has no subunit-subunit communication, so its curve is hyperbolic (n = 1)." },
      { id: "C", text: "HbA binds oxygen with higher affinity than Mb, which flattens the curve at low $p\\mathrm{O}_2$.", explanation: "Incorrect. HbA has the larger P50 (26 vs. 2.8 mmHg), so it has lower affinity than Mb. Affinity sets the position of the curve, not its sigmoidal shape." },
      { id: "D", text: "Mb lacks a heme group, so oxygen binds to it by simple diffusion into the protein core.", explanation: "Incorrect. Mb binds oxygen at its heme iron, just as each HbA subunit does. The shape difference arises from quaternary structure, not from the binding chemistry." },
    ],
    correctChoiceId: "B",
    explanationOverall:
      "A sigmoidal curve and a Hill coefficient greater than 1 are signs of positive cooperativity, which requires multiple interacting binding sites. HbA is a tetramer in which oxygen binding shifts the T-to-R equilibrium and raises the affinity of the remaining subunits. Mb is a monomer with one heme, so it binds oxygen independently and produces a hyperbolic curve.",
    walkthrough: {
      approachNotes:
        "Curve shape questions are about cooperativity. Connect shape to the Hill coefficient, then connect the Hill coefficient to quaternary structure.",
      steps: [
        "Read n from Table 1: Mb = 1.0 and HbA = 2.8.",
        "Recall that n = 1 means independent binding and n > 1 means positive cooperativity.",
        "Ask what structural feature allows cooperativity: multiple subunits that change conformation together. HbA is a tetramer and Mb is a monomer.",
        "Reject the choice about affinity, since affinity (P50) shifts a curve left or right but does not change its shape.",
        "Reject the choices that reverse the n values or deny that Mb has heme.",
      ],
    },
    category: { foundationalConcept: "FC1", contentCategory: "1A", skill: "concept application" },
    difficulty: "easy",
  },
  {
    id: "bb-q14",
    passageId: "bb-p4",
    sectionId: "bio-biochem",
    order: 13,
    stem: "The change in P50 for HbA, but not for Mb, between pH 7.4 and pH 7.2 is most consistent with which of the following?",
    choices: [
      { id: "A", text: "Protons compete directly with oxygen for the heme iron of HbA but cannot reach the heme iron of Mb.", explanation: "Incorrect. Protons do not displace oxygen from the heme iron. The Bohr effect arises from protonation of specific amino acid side chains and termini, which alters the T/R equilibrium." },
      { id: "B", text: "Lower pH raises the oxygen affinity of HbA, which promotes oxygen loading in actively metabolizing tissue.", explanation: "Incorrect. A higher P50 (31 vs. 26 mmHg) means lower affinity at pH 7.2, not higher. Lowered affinity is what promotes oxygen release in acidic tissue." },
      { id: "C", text: "Lower pH decreases cooperativity in HbA, converting its curve into a hyperbola resembling that of Mb.", explanation: "Incorrect. The data show a modest rightward shift of the curve (a P50 change), not loss of cooperativity. The Hill coefficient at pH 7.2 was not reported, and a P50 change does not by itself imply a change in n." },
      { id: "D", text: "Protonation stabilizes the deoxygenated T state of the tetramer, lowering oxygen affinity, an allosteric effect that monomeric Mb cannot display.", explanation: "Correct. Increased proton concentration stabilizes the low-affinity T state of HbA (the Bohr effect), which raises P50 and favors oxygen release in acidic, metabolically active tissue. Mb has no T/R transition, so its P50 is unaffected." },
    ],
    correctChoiceId: "D",
    explanationOverall:
      "The P50 of HbA increases from 26 to 31 mmHg as pH falls, meaning that affinity decreases under more acidic conditions; this is the Bohr effect. It results from preferential binding of protons to the T state of the tetramer, an allosteric mechanism that requires subunit interactions. Mb is a monomer and shows no change in P50.",
    walkthrough: {
      approachNotes:
        "Compare the proteins that respond to the variable with those that do not, and ask what structural property distinguishes them.",
      steps: [
        "Read Table 1: HbA P50 rises from 26 to 31 mmHg at pH 7.2, while Mb stays at 2.8 mmHg.",
        "Interpret a higher P50 as lower affinity: acidity weakens oxygen binding in HbA.",
        "Recall that the Bohr effect works through proton binding that stabilizes the T state, so only an allosteric multi-subunit protein can show it.",
        "Eliminate the choice that has affinity going the wrong direction and the choice claiming protons bind the heme iron directly.",
        "Eliminate the cooperativity claim, since the table gives no n value at pH 7.2.",
      ],
    },
    category: { foundationalConcept: "FC1", contentCategory: "1A", skill: "data-based reasoning" },
    difficulty: "medium",
  },
  {
    id: "bb-q15",
    passageId: "bb-p4",
    sectionId: "bio-biochem",
    order: 14,
    stem: "Which of the following substitutions would best explain the properties of Hb-X?",
    choices: [
      { id: "A", text: "Replacement of a positively charged residue in the central cavity with a neutral residue, weakening 2,3-BPG binding.", explanation: "Correct. 2,3-BPG is anionic and binds to positively charged residues in the central cavity of deoxy HbA. Removing one weakens binding, so the T state is less stabilized and affinity rises (P50 = 14 mmHg), while the subunit interface and cooperativity (n = 2.7) stay intact." },
      { id: "B", text: "Replacement of a residue at the α1β2 interface with one that favors the R state in all conditions.", explanation: "Incorrect. This describes the kind of change expected for Hb-Y. Such a change would be expected to reduce cooperativity, but Hb-X retains a Hill coefficient near that of HbA." },
      { id: "C", text: "Replacement of the proximal histidine, preventing coordination of the heme iron by the globin.", explanation: "Incorrect. Disrupting the proximal histidine would impair the structural link between iron and globin that underlies the conformational change and would be expected to abolish normal cooperativity and function, not leave n near 2.7." },
      { id: "D", text: "Replacement of a nonpolar core residue with a charged one, unfolding the tetramer into monomers.", explanation: "Incorrect. Monomers would behave like Mb, with n near 1 and very high affinity. Hb-X has sigmoidal binding and n = 2.7, so the tetramer remains intact." },
    ],
    correctChoiceId: "A",
    explanationOverall:
      "Hb-X shows higher oxygen affinity than HbA (lower P50) but retains nearly full cooperativity. That pattern points to loss of an allosteric stabilizer of the T state rather than damage to the subunit interface. Because 2,3-BPG binds through positively charged cavity residues, neutralizing one of them weakens T-state stabilization and shifts the curve left.",
    walkthrough: {
      approachNotes:
        "Separate the two data features (affinity and cooperativity) and decide which part of the protein could change one without changing the other.",
      steps: [
        "Compare Hb-X with HbA: P50 decreases from 26 to 14 mmHg (higher affinity) but n is essentially unchanged (2.7 vs. 2.8).",
        "Conclude that cooperativity is intact, so the subunit interface and tetramer are probably normal.",
        "The passage places the substitution in a residue lining the central cavity, which is the 2,3-BPG binding site.",
        "Recall that 2,3-BPG is negatively charged, so the relevant residues are positive; losing one weakens T-state stabilization and shifts the curve left.",
        "Eliminate interface, heme-pocket, and unfolding explanations since each would alter n or abolish binding.",
      ],
    },
    category: { foundationalConcept: "FC1", contentCategory: "1A", skill: "structure-function reasoning" },
    difficulty: "medium",
  },
  {
    id: "bb-q16",
    passageId: "bb-p4",
    sectionId: "bio-biochem",
    order: 15,
    stem: "Assume arterial blood has a $p\\mathrm{O}_2$ of 100 mmHg and resting tissue has a $p\\mathrm{O}_2$ of 30 mmHg, and that all proteins are at pH 7.4. Which protein would release the greatest fraction of its bound oxygen when moving from the lungs to resting tissue?",
    choices: [
      { id: "A", text: "Mb", explanation: "Incorrect. With a P50 of 2.8 mmHg and n = 1, Mb is about 97% saturated at 100 mmHg and still about 92% saturated at 30 mmHg, so it releases only about 6% of its capacity." },
      { id: "B", text: "Hb-X", explanation: "Incorrect. Hb-X is about 99% saturated at 100 mmHg and about 89% at 30 mmHg, a change of only about 11%. Its high affinity limits unloading at tissue $p\\mathrm{O}_2$." },
      { id: "C", text: "HbA", explanation: "Correct. HbA is about 98% saturated at 100 mmHg and about 60% at 30 mmHg, releasing about 38% of its capacity. Its P50 near the tissue range combined with a steep curve (n = 2.8) gives the largest saturation change." },
      { id: "D", text: "Hb-Y", explanation: "Incorrect. Hb-Y has low cooperativity (n = 1.3) and high affinity (P50 = 9 mmHg), so it falls only from about 96% to about 83% saturated, releasing about 13%." },
    ],
    correctChoiceId: "C",
    explanationOverall:
      "Efficient oxygen delivery requires both a P50 in the range of tissue $p\\mathrm{O}_2$ and a steep, cooperative curve in that region. Using the Hill equation, HbA releases about 38% of its bound oxygen between 100 and 30 mmHg, Hb-Y about 13%, Hb-X about 11%, and Mb about 6%. High affinity or loss of cooperativity each reduce unloading.",
    walkthrough: {
      approachNotes:
        "Delivery is the difference in saturation between two pressures, so evaluate Y at both and subtract. Use P50 and n to estimate the position and steepness of each curve.",
      steps: [
        "Write $Y = p^n/(P_{50}^n + p^n)$ and note the two pressures: 100 and 30 mmHg.",
        "For HbA (P50 = 26, n = 2.8): Y is about 0.98 at 100 mmHg and about 0.60 at 30 mmHg, a drop near 0.38.",
        "For Hb-Y (P50 = 9, n = 1.3): Y falls from about 0.96 to about 0.83, a drop near 0.13.",
        "For Hb-X (P50 = 14, n = 2.7): Y falls from about 0.99 to about 0.89. For Mb: about 0.97 to 0.92.",
        "Conclude that the protein with a P50 near the tissue range and high cooperativity (HbA) delivers the most oxygen.",
      ],
    },
    category: { foundationalConcept: "FC1", contentCategory: "1A", skill: "data-based reasoning" },
    difficulty: "hard",
  },
  {
    id: "bb-q17",
    passageId: "bb-p4",
    sectionId: "bio-biochem",
    order: 16,
    stem: "A researcher hypothesizes that the higher oxygen affinity of Hb-X is due specifically to impaired binding of 2,3-BPG. Which experiment would best test this hypothesis?",
    choices: [
      { id: "A", text: "Measure the Hill coefficient of Hb-X and HbA at pH 7.4 and show that the two values are similar.", explanation: "Incorrect. Similar Hill coefficients are already shown in Table 1, and n reports cooperativity, not 2,3-BPG binding. This does not distinguish a BPG defect from other causes of higher affinity." },
      { id: "B", text: "Measure P50 of purified Hb-X and purified HbA with and without added 2,3-BPG, and compare the size of the rightward shift produced by 2,3-BPG in each.", explanation: "Correct. If Hb-X binds 2,3-BPG poorly, adding it should shift the HbA curve to the right substantially but shift the Hb-X curve little, and the two P50 values should converge in its absence. Using purified proteins removes other erythrocyte factors as confounders." },
      { id: "C", text: "Measure P50 of Hb-X at pH 7.4 and pH 7.2 and show that the P50 increases at the lower pH.", explanation: "Incorrect. This tests the Bohr effect, which Table 1 already shows is largely preserved in Hb-X, and does not isolate any role for 2,3-BPG." },
      { id: "D", text: "Measure the oxygen affinity of Hb-X in intact erythrocytes only and compare to HbA in intact erythrocytes.", explanation: "Incorrect. In intact cells, 2,3-BPG concentration, pH, and other variables can differ between samples, and 2,3-BPG cannot be controlled, so the specific cause of any difference cannot be isolated." },
    ],
    correctChoiceId: "B",
    explanationOverall:
      "A direct test of the hypothesis manipulates 2,3-BPG while holding everything else constant. Comparing the rightward P50 shift caused by 2,3-BPG in purified HbA and purified Hb-X should show a much smaller shift for Hb-X if its binding is impaired. The other choices measure properties unrelated to 2,3-BPG or fail to control it.",
    walkthrough: {
      approachNotes:
        "For a hypothesis about one molecule's effect, the best design varies exactly that molecule in a defined system and uses the wild-type protein as a comparison.",
      steps: [
        "Identify the variable of interest: presence or absence of 2,3-BPG.",
        "Predict the result if the hypothesis is true: HbA is strongly right-shifted by 2,3-BPG, and Hb-X is shifted little or not at all.",
        "Choose purified proteins so that 2,3-BPG, pH, and other red-cell factors are controlled.",
        "Eliminate experiments that measure cooperativity or the Bohr effect, because those do not manipulate 2,3-BPG.",
        "Eliminate the intact-cell design, which leaves 2,3-BPG uncontrolled.",
      ],
    },
    category: { foundationalConcept: "FC1", contentCategory: "1A", skill: "experimental design" },
    difficulty: "hard",
  },
  {
    id: "bb-q18",
    passageId: "bb-p5",
    sectionId: "bio-biochem",
    order: 17,
    stem: "Which of the following best explains why MSH2-deficient cells accumulate mutations more rapidly than wild-type cells?",
    choices: [
      { id: "A", text: "They cannot remove bulky lesions such as pyrimidine dimers from their DNA.", explanation: "Incorrect. Removal of bulky lesions is the job of NER. The UV survival data (78% vs. 80%) show that NER is functional in the knockout." },
      { id: "B", text: "They lack the 3′→5′ exonuclease activity of the replicative DNA polymerase.", explanation: "Incorrect. Proofreading is an intrinsic activity of the polymerase itself and does not depend on MSH2. MSH2 acts after replication on the newly synthesized strand." },
      { id: "C", text: "They fail to recognize and correct mispaired bases that escaped proofreading during replication.", explanation: "Correct. MSH2-containing complexes recognize mismatches and small insertion/deletion loops in newly replicated DNA. Without them, errors that escape proofreading become permanent mutations after the next round of replication." },
      { id: "D", text: "They cannot synthesize the RNA primers needed to start Okazaki fragments.", explanation: "Incorrect. Primer synthesis is performed by primase, which is not MSH2-dependent, and failure would block replication rather than raise the mutation rate." },
    ],
    correctChoiceId: "C",
    explanationOverall:
      "Each replication step contributes to fidelity: base selection, proofreading by the polymerase, and then MMR. MSH2 is part of the mismatch recognition machinery, so its loss removes the final correction layer and raises the number of replication errors that persist. This is consistent with the large rise in 6-TG-resistant colonies.",
    walkthrough: {
      approachNotes:
        "Match each repair or replication component to the specific kind of error it handles, then check each distractor against the passage data.",
      steps: [
        "Identify the pathway MSH2 belongs to using the passage: post-replicative mismatch repair.",
        "Recall what MMR acts on: mispaired bases and small loops in newly synthesized DNA that escaped proofreading.",
        "Eliminate NER-based explanations using the UV survival data, which are nearly identical in WT and knockout cells.",
        "Eliminate proofreading and primer synthesis choices because those activities belong to the polymerase and primase, not MSH2.",
      ],
    },
    category: { foundationalConcept: "FC1", contentCategory: "1B", skill: "concept application" },
    difficulty: "easy",
  },
  {
    id: "bb-q19",
    passageId: "bb-p5",
    sectionId: "bio-biochem",
    order: 18,
    stem: "Considering the UV survival data and the add-back cell line together, which conclusion is best supported?",
    choices: [
      { id: "A", text: "The elevated mutation frequency in the knockout results from loss of MSH2 specifically rather than from a general defect in DNA damage repair.", explanation: "Correct. Normal UV survival in the knockout argues against a global repair defect (NER is intact), and restoring MSH2 returns mutation frequency and repeat stability to near-WT levels, so the phenotype is attributable to MSH2 loss." },
      { id: "B", text: "MSH2 is the primary enzyme that removes UV-induced pyrimidine dimers.", explanation: "Incorrect. If MSH2 removed dimers, the knockout would show markedly reduced survival after UVC. Survival is 78% vs. 80% for WT." },
      { id: "C", text: "The add-back line demonstrates that MSH2 is also required for NER.", explanation: "Incorrect. The add-back line differs from the knockout mainly in the mutation assays; UV survival was already normal in the knockout, so no requirement for MSH2 in NER is indicated." },
      { id: "D", text: "The knockout cells have lost all DNA repair capacity, but this is masked by their rapid growth.", explanation: "Incorrect. Normal survival after UV shows that at least one repair pathway (NER) works. Nothing in the data indicates complete loss of repair or any growth-rate effect." },
    ],
    correctChoiceId: "A",
    explanationOverall:
      "The UV survival values (80%, 78%, 81%) are essentially identical across lines, so NER and general damage tolerance are intact in the knockout. The add-back line restores low mutation frequency (3 per $10^6$) and stable repeats (2 of 40), showing that the phenotype is caused by the absence of MSH2 itself. Together these results localize the defect to MMR.",
    walkthrough: {
      approachNotes:
        "Think of the UV assay as a specificity control and the add-back line as a rescue control. Each addresses a different alternative explanation.",
      steps: [
        "Read the UV survival column: 80, 78, and 81 percent are essentially the same for all three lines.",
        "Infer that NER, the pathway for dimer repair, is not impaired in the knockout.",
        "Read the add-back row in the mutation and repeat assays: near WT values (3 per $10^6$ and 2 of 40).",
        "Conclude that re-expressing MSH2 rescues the phenotype, so MSH2 loss is the cause, and the defect is specific to mismatch correction.",
      ],
    },
    category: { foundationalConcept: "FC1", contentCategory: "1B", skill: "data-based reasoning" },
    difficulty: "medium",
  },
  {
    id: "bb-q20",
    passageId: "bb-p5",
    sectionId: "bio-biochem",
    order: 19,
    stem: "Which of the following best explains why repeat length changes accumulate at the (CA)ₙ locus in MSH2-deficient cells?",
    choices: [
      { id: "A", text: "MSH2 is required for telomerase to maintain repeat tracts during S phase.", explanation: "Incorrect. Telomerase acts at chromosome ends and is not involved in maintaining internal dinucleotide repeats. MSH2 is a mismatch-recognition protein." },
      { id: "B", text: "The PCR primers anneal poorly to repetitive DNA in the knockout, producing artifactual product sizes.", explanation: "Incorrect. The same primers and assay were used for all lines, and WT and add-back cells showed few changes. The difference is therefore biological, not a primer artifact." },
      { id: "C", text: "The proofreading exonuclease of the polymerase is unable to act in repetitive regions, so errors there are never corrected in any cell.", explanation: "Incorrect. If this were true, WT cells would also show frequent changes (only 1 of 40 did). The extra correction provided by MMR is what keeps WT repeats stable." },
      { id: "D", text: "Template and nascent strands can misalign within repeats during replication, forming unpaired loops that MMR normally repairs.", explanation: "Correct. Strand slippage in repetitive sequences creates small insertion/deletion loops. MSH2-containing complexes recognize these loops, so without MMR the length changes become permanent and are detected as altered PCR product size." },
    ],
    correctChoiceId: "D",
    explanationOverall:
      "Repetitive sequences allow the template and nascent strands to misalign (slippage) during synthesis, creating unpaired loops that expand or shrink the repeat. MMR normally recognizes and corrects these loops; in MSH2-deficient cells they persist, producing the high fraction of clones (31 of 40) with altered repeat length.",
    walkthrough: {
      approachNotes:
        "Combine knowledge of what makes repeats special (slippage) with the role of MMR (correcting indel loops), and check the answer against the control lines.",
      steps: [
        "Note that the knockout shows altered repeat length in 31 of 40 clones, versus 1 of 40 in WT.",
        "Recall the mechanism: in repeats, the nascent and template strands can slip and re-pair out of register, creating extrahelical loops.",
        "Recall that MMR corrects insertion/deletion loops, so WT cells reverse most slippage events.",
        "Eliminate telomerase and PCR artifact explanations, since the control lines used the same assay with little change.",
        "Eliminate the proofreading claim because it would predict instability in WT cells too.",
      ],
    },
    category: { foundationalConcept: "FC1", contentCategory: "1B", skill: "concept application" },
    difficulty: "medium",
  },
  {
    id: "bb-q21",
    passageId: "bb-p5",
    sectionId: "bio-biochem",
    order: 20,
    stem: "Using the fidelity estimates in the passage, loss of MMR alone is predicted to increase the replication error rate by about what factor, and how does this compare with the 6-TG results?",
    choices: [
      { id: "A", text: "About 10-fold, which is much lower than the roughly 90-fold increase observed.", explanation: "Incorrect. The passage states that MMR improves fidelity by roughly 100-fold, so its loss should raise errors by about 100-fold, not 10-fold." },
      { id: "B", text: "About 100-fold, which is close to the roughly 90-fold increase observed.", explanation: "Correct. Fidelity with proofreading is about 1 in $10^7$ and with MMR about 1 in $10^9$, so removing MMR raises errors about 100-fold. The knockout shows 180 vs. 2 colonies per $10^6$ cells, a 90-fold increase, in good agreement." },
      { id: "C", text: "About 100-fold, which is much higher than the roughly 10-fold increase observed.", explanation: "Incorrect. The prediction is right, but the observed increase is 180/2 = 90-fold, not 10-fold." },
      { id: "D", text: "About 10,000-fold, which is far higher than the observed increase.", explanation: "Incorrect. A 10,000-fold change would correspond to removing both proofreading and MMR together ($10^{-5}$ vs. $10^{-9}$), not to removing MMR alone." },
    ],
    correctChoiceId: "B",
    explanationOverall:
      "MMR contributes a roughly 100-fold improvement (from about 1 in $10^7$ to about 1 in $10^9$), so cells lacking it should show about 100 times as many replication errors. The observed rise in 6-TG-resistant colonies from 2 to 180 per $10^6$ cells is about 90-fold, in close agreement with the prediction.",
    walkthrough: {
      approachNotes:
        "Convert each fidelity level to an error rate, take the ratio of the rates with and without the pathway of interest, and compare to the observed ratio.",
      steps: [
        "Write the rates from the passage: after proofreading about $10^{-7}$ per nucleotide; after MMR about $10^{-9}$.",
        "Calculate the ratio without MMR to with MMR: $10^{-7}/10^{-9} = 100$.",
        "Compute the observed ratio from Table 1: 180/2 = 90.",
        "Compare: 100 predicted and 90 observed agree within the precision expected for this assay.",
        "Reject the 10,000-fold answer, which would require removal of both proofreading and MMR.",
      ],
    },
    category: { foundationalConcept: "FC1", contentCategory: "1B", skill: "data-based reasoning" },
    difficulty: "hard",
  },
  {
    id: "bb-q22",
    passageId: "bb-p5",
    sectionId: "bio-biochem",
    order: 21,
    stem: "Which of the following correctly describes synthesis of the two nascent strands at a replication fork?",
    choices: [
      { id: "A", text: "The lagging strand is synthesized in the 5′→3′ direction, away from the fork, in short Okazaki fragments that each begin with an RNA primer.", explanation: "Correct. DNA polymerases only extend in the 5′→3′ direction. On the lagging strand this means synthesis proceeds away from the fork in discontinuous fragments, each needing its own RNA primer, which are later replaced with DNA and sealed by ligase." },
      { id: "B", text: "The leading strand is synthesized discontinuously, requiring a new RNA primer for every fragment.", explanation: "Incorrect. The leading strand is synthesized continuously toward the fork after a single initial primer. It is the lagging strand that requires repeated priming." },
      { id: "C", text: "Both strands are synthesized continuously in the 3′→5′ direction by polymerases moving toward the fork.", explanation: "Incorrect. DNA polymerases cannot synthesize in the 3′→5′ direction. New nucleotides are always added to the 3′ end of the growing strand." },
      { id: "D", text: "Helicase joins adjacent Okazaki fragments after the RNA primers have been removed.", explanation: "Incorrect. Helicase unwinds the double helix at the fork. DNA ligase seals the nicks between adjacent fragments." },
    ],
    correctChoiceId: "A",
    explanationOverall:
      "Because DNA polymerases extend only 5′→3′ and the two template strands are antiparallel, one strand (leading) is copied continuously toward the fork, whereas the other (lagging) is copied in short Okazaki fragments away from the fork. Each fragment requires an RNA primer, which is later replaced by DNA, and the fragments are joined by DNA ligase.",
    walkthrough: {
      approachNotes:
        "Anchor on the one rule that cannot change, that polymerases extend only 5′→3′, and derive the leading/lagging asymmetry from it.",
      steps: [
        "State the rule: new nucleotides are added to the 3′-OH of the growing strand, so synthesis is 5′→3′.",
        "Because the template strands are antiparallel, only one strand can be copied continuously toward the fork (leading).",
        "The other strand must be copied in short pieces away from the fork (lagging), each starting with an RNA primer.",
        "Match enzyme roles: helicase unwinds, primase makes primers, ligase seals nicks.",
      ],
    },
    category: { foundationalConcept: "FC1", contentCategory: "1B", skill: "concept application" },
    difficulty: "easy",
  },
  {
    id: "bb-q23",
    passageId: null,
    sectionId: "bio-biochem",
    order: 22,
    stem: "A cold-water fish is moved from 20 °C water to 5 °C water. To maintain membrane fluidity, the cells of the fish would most appropriately respond by doing which of the following?",
    choices: [
      { id: "A", text: "Increasing the proportion of saturated fatty acyl chains in membrane phospholipids.", explanation: "Incorrect. Saturated chains are straight and pack tightly with strong van der Waals interactions, which would make the membrane even less fluid at low temperature." },
      { id: "B", text: "Lengthening the fatty acyl chains in membrane phospholipids.", explanation: "Incorrect. Longer chains have more surface for van der Waals contact, which increases packing and decreases fluidity, the wrong adjustment for cold." },
      { id: "C", text: "Converting cis double bonds in fatty acyl chains to trans double bonds.", explanation: "Incorrect. Trans double bonds do not produce a kink, so these chains pack more like saturated chains and decrease fluidity. Natural membrane lipids contain cis double bonds." },
      { id: "D", text: "Increasing the proportion of cis-unsaturated fatty acyl chains in membrane phospholipids.", explanation: "Correct. Cis double bonds introduce kinks that prevent tight packing, which keeps the membrane fluid at lower temperature. Increased desaturation is a common adaptation to cold." },
    ],
    correctChoiceId: "D",
    explanationOverall:
      "Lower temperature reduces molecular motion and tends to stiffen membranes by promoting tight lipid packing. Cells compensate by incorporating more cis-unsaturated fatty acids, whose kinks disrupt packing and keep the bilayer fluid. Changes that favor tight packing, such as more saturated or longer chains, would worsen the problem.",
    walkthrough: {
      approachNotes:
        "Decide which direction the environmental change pushes fluidity, then pick the lipid change that opposes it. Packing efficiency is the unifying concept.",
      steps: [
        "A drop in temperature reduces fluidity, so the cell needs to counteract stiffening.",
        "Recall that fluidity falls when chains pack tightly (saturated, longer, or trans chains) and rises when packing is disrupted (kinked cis-unsaturated or shorter chains).",
        "Eliminate every option that increases packing: more saturated, longer, or trans.",
        "Select the increase in cis-unsaturated chains.",
      ],
    },
    category: { foundationalConcept: "FC2", contentCategory: "2A", skill: "concept application" },
    difficulty: "medium",
  },
  {
    id: "bb-q24",
    passageId: null,
    sectionId: "bio-biochem",
    order: 23,
    stem: "A disaccharide gives a negative Benedict's test (it does not reduce Cu²⁺) but yields equal amounts of D-glucose and D-fructose upon acid hydrolysis. Which of the following linkages is most consistent with these observations?",
    choices: [
      { id: "A", text: "An α(1→4) bond between two glucose residues.", explanation: "Incorrect. This describes maltose. Its second glucose retains a free anomeric carbon (a reducing end) and hydrolysis yields only glucose." },
      { id: "B", text: "A β(1→4) bond between galactose and glucose.", explanation: "Incorrect. This describes lactose. It has a free anomeric carbon on the glucose residue, so it is a reducing sugar, and it yields galactose and glucose." },
      { id: "C", text: "An α(1→2)β bond between the anomeric carbon of glucose and the anomeric carbon of fructose.", explanation: "Correct. This is sucrose. Because the bond joins both anomeric carbons, neither ring can open to expose a free aldehyde or ketone, so the sugar is non-reducing, and hydrolysis gives one glucose and one fructose." },
      { id: "D", text: "A β(1→4) bond between two glucose residues.", explanation: "Incorrect. This describes cellobiose. Its second glucose has a free anomeric carbon, so it is reducing, and hydrolysis gives only glucose." },
    ],
    correctChoiceId: "C",
    explanationOverall:
      "A sugar is reducing only if it has a free anomeric carbon that can interconvert between ring and open-chain forms. A negative Benedict's test therefore indicates that all anomeric carbons are tied up in glycosidic bonds, and the glucose and fructose products identify sucrose, in which the glycosidic bond links the anomeric carbons of both monosaccharides.",
    walkthrough: {
      approachNotes:
        "Use the two clues separately: the hydrolysis products identify the monomers, and the Benedict's result tells you whether an anomeric carbon is free.",
      steps: [
        "Use the hydrolysis products (glucose and fructose) to eliminate disaccharides built from glucose only or from galactose and glucose.",
        "Recall that a reducing sugar has a free anomeric carbon that can open to an aldehyde (or a ketone that tautomerizes).",
        "A negative Benedict's test means no free anomeric carbon exists, so the glycosidic bond must involve both anomeric carbons.",
        "Identify sucrose, with its α-glucose C1 joined to the β-fructose C2 bond, as the only choice meeting both criteria.",
      ],
    },
    category: { foundationalConcept: "FC1", contentCategory: "1A", skill: "concept application" },
    difficulty: "medium",
  },
];
