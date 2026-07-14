import type { ComponentType } from "react";
import type { FoundationalConcept, LessonTopic } from "@/lib/types";
import EnzymeFunctionKinetics from "./fc1/enzyme-function-kinetics.mdx";

export const foundationalConcepts: FoundationalConcept[] = [
  {
    id: "fc1",
    sectionKey: "bio-biochem",
    number: 1,
    title: "Biomolecules and Enzymes",
    description:
      "The structure of biological macromolecules — amino acids, proteins, and enzymes — and how that structure determines function.",
    topicIds: ["fc1-amino-acids-protein-structure", "fc1-enzyme-function-kinetics"],
  },
  {
    id: "fc2",
    sectionKey: "bio-biochem",
    number: 2,
    title: "Cellular and Molecular Biology",
    description:
      "How cells are organized, how they divide, and how genetic information is stored, transmitted, and expressed.",
    topicIds: ["fc2-cell-structure-cycle", "fc2-molecular-genetics-gene-expression"],
  },
  {
    id: "fc3",
    sectionKey: "bio-biochem",
    number: 3,
    title: "Organ Systems",
    description:
      "How specialized organ systems maintain homeostasis and coordinate physiological processes across the body.",
    topicIds: ["fc3-nervous-endocrine-signaling", "fc3-circulatory-respiratory-renal"],
  },
];

export const lessonTopics: LessonTopic[] = [
  {
    id: "fc1-enzyme-function-kinetics",
    sectionKey: "bio-biochem",
    foundationalConceptId: "fc1",
    slug: "enzyme-function-kinetics",
    title: "Enzyme Function & Kinetics",
    summary:
      "How enzymes lower activation energy, the Michaelis-Menten model of enzyme kinetics, and the four classic patterns of enzyme inhibition.",
    highYield: [
      "Enzymes lower activation energy (Ea) but do not change ΔG or shift equilibrium.",
      "Km = substrate concentration at half-Vmax; a LOWER Km means HIGHER apparent affinity.",
      "Competitive inhibition: Vmax unchanged, Km increases (overcome by excess substrate).",
      "Noncompetitive inhibition: Vmax decreases, Km unchanged (not overcome by excess substrate).",
      "Most enzymes have an optimal pH and temperature; extremes denature the enzyme and abolish activity.",
    ],
    mdxPath: "bio-biochem/fc1/enzyme-function-kinetics.mdx",
    clinicalCorrelation: {
      title: "Why this matters: statins and HMG-CoA reductase",
      vignette:
        "A patient with elevated LDL cholesterol is started on atorvastatin. Statins work by competitively inhibiting HMG-CoA reductase, the rate-limiting enzyme in cholesterol biosynthesis, which structurally resembles the enzyme's natural substrate (HMG-CoA) closely enough to occupy its active site.",
      tieIn:
        "Because the inhibition is competitive, it is dose-dependent and reversible — exactly the Km/Vmax behavior in this lesson — which is part of why statin effect can be titrated by adjusting dose rather than being all-or-nothing.",
    },
    expandable: true,
  },
  {
    id: "fc1-amino-acids-protein-structure",
    sectionKey: "bio-biochem",
    foundationalConceptId: "fc1",
    slug: "amino-acids-protein-structure",
    title: "Amino Acids & Protein Structure",
    summary:
      "Amino acid classification by side chain, and the four levels of protein structure from primary sequence to quaternary assembly.",
    highYield: [
      "Side chains determine amino acid classification: nonpolar, polar, acidic, or basic.",
      "Primary structure = amino acid sequence; a single substitution can change function (e.g. sickle cell).",
      "Secondary structure = local folding (α-helices, β-sheets) stabilized by backbone hydrogen bonds.",
      "Tertiary structure = overall 3D fold of one chain; quaternary = assembly of multiple chains.",
      "Denaturation disrupts secondary/tertiary/quaternary structure but not the primary sequence itself.",
    ],
    mdxPath: "bio-biochem/fc1/amino-acids-protein-structure.mdx",
    clinicalCorrelation: {
      title: "Why this matters: sickle cell disease",
      vignette:
        "A single base-pair substitution in the β-globin gene replaces glutamate with valine at position 6 of the β-globin chain — swapping a negatively charged, polar side chain for a small nonpolar one.",
      tieIn:
        "That one primary-structure change is enough to make deoxygenated hemoglobin polymerize into rigid fibers, distorting red blood cells into the sickle shape — a direct illustration of how primary structure determines higher-order structure and function.",
    },
    expandable: true,
  },
  {
    id: "fc2-molecular-genetics-gene-expression",
    sectionKey: "bio-biochem",
    foundationalConceptId: "fc2",
    slug: "molecular-genetics-gene-expression",
    title: "Molecular Genetics & Gene Expression",
    summary:
      "How prokaryotic operons and eukaryotic transcription factors control which genes are expressed, and when.",
    highYield: [
      "The lac operon is repressed by default; lactose (via allolactose) inactivates the repressor.",
      "Catabolite repression: glucose presence lowers cAMP, reducing CAP-mediated activation even if lactose is present.",
      "Eukaryotic gene expression is regulated at transcription, splicing, translation, and post-translational levels.",
      "Epigenetic marks (DNA methylation, histone acetylation) regulate expression without changing DNA sequence.",
    ],
    mdxPath: "bio-biochem/fc2/molecular-genetics-gene-expression.mdx",
    clinicalCorrelation: {
      title: "Why this matters: fetal hemoglobin reactivation therapy",
      vignette:
        "In sickle cell disease, drugs like hydroxyurea are used partly because they increase expression of fetal hemoglobin (HbF), which does not sickle, by altering the epigenetic and transcriptional regulation of the globin gene locus.",
      tieIn:
        "This is a direct clinical application of gene-expression regulation: the DNA sequence for adult vs. fetal globin genes doesn't change, but which gene is transcribed can be shifted — the same principle tested by lac operon and epigenetics questions.",
    },
    expandable: true,
  },
  {
    id: "fc2-cell-structure-cycle",
    sectionKey: "bio-biochem",
    foundationalConceptId: "fc2",
    slug: "cell-structure-cycle",
    title: "Cell Structure & the Cell Cycle",
    summary:
      "Organelle function, membrane transport mechanisms, and the checkpoints that regulate progression through the cell cycle.",
    highYield: [
      "Mitochondria: oxidative phosphorylation; rough ER: protein synthesis/folding; Golgi: modification/sorting.",
      "Passive transport (diffusion, facilitated diffusion, osmosis) requires no ATP; active transport does.",
      "The cell cycle has G1, S, G2, and M checkpoints; p53 halts the cycle in response to DNA damage.",
      "Uncontrolled cell cycle progression despite checkpoint failure is a hallmark of cancer.",
    ],
    mdxPath: "bio-biochem/fc2/cell-structure-cycle.mdx",
    clinicalCorrelation: {
      title: "Why this matters: p53 and Li-Fraumeni syndrome",
      vignette:
        "Patients with Li-Fraumeni syndrome inherit a mutated TP53 gene, so their cells lack a functional p53 checkpoint protein and cannot reliably halt the cell cycle in response to DNA damage.",
      tieIn:
        "The result is a dramatically elevated lifetime risk of multiple cancers beginning at a young age — a direct consequence of losing the G1/S checkpoint control this lesson covers.",
    },
    expandable: true,
  },
  {
    id: "fc3-nervous-endocrine-signaling",
    sectionKey: "bio-biochem",
    foundationalConceptId: "fc3",
    slug: "nervous-endocrine-signaling",
    title: "Nervous & Endocrine Signaling",
    summary:
      "How neurons transmit electrical/chemical signals and how the endocrine system uses hormones for slower, longer-lasting regulation.",
    highYield: [
      "Nervous signaling is fast and localized (milliseconds, synapse); endocrine signaling is slow and diffuse (minutes-hours, bloodstream).",
      "Steroid hormones are lipophilic and act on intracellular/nuclear receptors; peptide hormones act on cell-surface receptors.",
      "Negative feedback is the dominant regulatory pattern in endocrine axes (e.g. HPA, HPT axes).",
      "The autonomic nervous system's sympathetic and parasympathetic branches generally act antagonistically.",
    ],
    mdxPath: "bio-biochem/fc3/nervous-endocrine-signaling.mdx",
    clinicalCorrelation: {
      title: "Why this matters: primary vs. secondary hypothyroidism",
      vignette:
        "A patient with low thyroid hormone (T4) and HIGH TSH has primary hypothyroidism (the thyroid itself is failing, so the pituitary ramps up TSH via negative feedback); a patient with low T4 and LOW/normal TSH instead points to a pituitary or hypothalamic problem.",
      tieIn:
        "Distinguishing these requires understanding the negative-feedback loop of the HPT axis covered in this lesson — the same logic applies to the HPA axis and reproductive hormone axes tested elsewhere on the exam.",
    },
    expandable: true,
  },
  {
    id: "fc3-circulatory-respiratory-renal",
    sectionKey: "bio-biochem",
    foundationalConceptId: "fc3",
    slug: "circulatory-respiratory-renal",
    title: "Circulatory, Respiratory & Renal Systems",
    summary:
      "How the cardiovascular, respiratory, and renal systems work together to deliver oxygen, remove waste, and maintain fluid/electrolyte balance.",
    highYield: [
      "The oxygen-hemoglobin dissociation curve shifts right with ↑CO2, ↑H+, ↑temperature (Bohr effect) — favors O2 unloading in tissues.",
      "The nephron: glomerular filtration → tubular reabsorption/secretion → excretion; the loop of Henle creates the medullary concentration gradient.",
      "Baroreceptors in the carotid sinus/aortic arch trigger reflex changes in heart rate and vascular tone to maintain blood pressure.",
      "ADH increases water reabsorption in the collecting duct; aldosterone increases Na+ reabsorption (and K+/H+ secretion) in the distal nephron.",
    ],
    mdxPath: "bio-biochem/fc3/circulatory-respiratory-renal.mdx",
    clinicalCorrelation: {
      title: "Why this matters: diagnosing diabetes insipidus with a water-deprivation test",
      vignette:
        "A patient with polyuria and dilute urine undergoes a water-deprivation test; if urine fails to concentrate despite dehydration but DOES concentrate after exogenous desmopressin (a synthetic ADH analog), the diagnosis is central diabetes insipidus — inadequate ADH release, not kidney unresponsiveness.",
      tieIn:
        "This test is a direct clinical application of the ADH/collecting-duct physiology in this lesson, and distinguishing central from nephrogenic DI is a classic MCAT-style reasoning question.",
    },
    expandable: true,
  },
];

export const mdxRegistry: Record<string, ComponentType> = {
  "fc1-enzyme-function-kinetics": EnzymeFunctionKinetics,
};
