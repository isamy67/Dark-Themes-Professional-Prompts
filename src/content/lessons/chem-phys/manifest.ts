import type { ComponentType } from "react";
import type { FoundationalConcept, LessonTopic } from "@/lib/types";
import MechanicsForcesEnergy from "./fc4/mechanics-forces-energy.mdx";
import FluidsCirculatoryPhysics from "./fc4/fluids-circulatory-physics.mdx";
import ThermodynamicsReactionRates from "./fc5/thermodynamics-reaction-rates.mdx";
import AcidBaseBuffers from "./fc5/acid-base-buffers.mdx";
import Electrochemistry from "./fc5/electrochemistry.mdx";

export const foundationalConcepts: FoundationalConcept[] = [
  {
    id: "fc4",
    sectionKey: "chem-phys",
    number: 4,
    title: "Physical Processes in Living Systems",
    description:
      "The physics of forces, energy, and fluids as they apply to the human body — mechanics, and the flow of fluids and electricity.",
    topicIds: ["fc4-mechanics-forces-energy", "fc4-fluids-circulatory-physics"],
  },
  {
    id: "fc5",
    sectionKey: "chem-phys",
    number: 5,
    title: "Chemical and Biochemical Reactions",
    description:
      "How and why chemical reactions occur, proceed at a given rate, and reach equilibrium — thermodynamics, kinetics, acid-base chemistry, and electrochemistry.",
    topicIds: [
      "fc5-thermodynamics-reaction-rates",
      "fc5-acid-base-buffers",
      "fc5-electrochemistry",
    ],
  },
];

export const lessonTopics: LessonTopic[] = [
  {
    id: "fc4-mechanics-forces-energy",
    sectionKey: "chem-phys",
    foundationalConceptId: "fc4",
    slug: "mechanics-forces-energy",
    title: "Mechanics: Forces, Work & Energy",
    summary:
      "Newton's laws, torque, and the work-energy theorem as applied to levers, joints, and everyday biomechanics.",
    highYield: [
      "Newton's 2nd law: F = ma. Net force is what changes an object's velocity, not force alone (equilibrium ≠ no forces).",
      "Torque = F × lever arm (perpendicular distance); the body's joints act as class 1, 2, or 3 levers.",
      "Work = F × d × cos(θ); only the force component parallel to displacement does work.",
      "Mechanical energy (KE + PE) is conserved absent friction/air resistance; otherwise some converts to heat.",
    ],
    mdxPath: "chem-phys/fc4/mechanics-forces-energy.mdx",
    clinicalCorrelation: {
      title: "Why this matters: why the biceps is a mechanically inefficient lever",
      vignette:
        "The elbow joint is a class 3 lever: the biceps attaches close to the joint (a short effort arm) while the load (e.g., a weight in the hand) acts much farther out (a long load arm), so the muscle must generate a much larger force than the weight itself to lift it.",
      tieIn:
        "This trade-off — sacrificing force for a large range of motion and speed at the hand — is a direct, testable application of the torque and lever-arm concepts in this lesson, and shows up in MCAT passages about joint biomechanics and muscle injury.",
    },
    expandable: true,
  },
  {
    id: "fc4-fluids-circulatory-physics",
    sectionKey: "chem-phys",
    foundationalConceptId: "fc4",
    slug: "fluids-circulatory-physics",
    title: "Fluids & Circulatory Physics",
    summary:
      "Pressure, flow, and resistance in fluids — Bernoulli's principle, Poiseuille's law, and how they govern blood flow.",
    highYield: [
      "Continuity equation: A1v1 = A2v2 — fluid speeds up where a vessel narrows.",
      "Bernoulli's principle: as fluid speed increases, pressure decreases (for horizontal, steady, non-viscous flow).",
      "Poiseuille's law: flow rate ∝ r⁴ — small changes in vessel radius produce large changes in resistance/flow.",
      "Buoyant force = weight of fluid displaced (Archimedes' principle); relevant to floating and specific gravity questions.",
    ],
    mdxPath: "chem-phys/fc4/fluids-circulatory-physics.mdx",
    clinicalCorrelation: {
      title: "Why this matters: why arterial stenosis is dangerous",
      vignette:
        "In atherosclerosis, plaque narrows an artery's lumen. Because Poiseuille's law shows resistance scales with 1/r⁴, even a modest reduction in radius produces a disproportionately large increase in resistance to blood flow — and by the continuity equation, blood must speed up through the narrowed segment.",
      tieIn:
        "That local speed increase lowers local pressure (Bernoulli's principle), which can further narrow a already-diseased, compliant vessel wall — a feedback effect physicians must reason through, and a favorite way MCAT passages combine these three formulas in one clinical scenario.",
    },
    expandable: true,
  },
  {
    id: "fc5-thermodynamics-reaction-rates",
    sectionKey: "chem-phys",
    foundationalConceptId: "fc5",
    slug: "thermodynamics-reaction-rates",
    title: "Thermodynamics & Reaction Rates",
    summary:
      "Enthalpy, entropy, and Gibbs free energy determine whether a reaction is spontaneous; kinetics determines how fast it proceeds.",
    highYield: [
      "ΔG = ΔH − TΔS. ΔG < 0 means spontaneous (exergonic); ΔG > 0 means nonspontaneous (endergonic).",
      "Spontaneity (ΔG) and rate (kinetics) are independent — a spontaneous reaction can still be extremely slow.",
      "Catalysts (including enzymes) speed up reactions by lowering activation energy; they do not change ΔG.",
      "Reaction rate depends on concentration, temperature, and the presence of a catalyst (per the Arrhenius equation).",
    ],
    mdxPath: "chem-phys/fc5/thermodynamics-reaction-rates.mdx",
    clinicalCorrelation: {
      title: "Why this matters: why diamond doesn't spontaneously turn to graphite in your lifetime",
      vignette:
        "Graphite is thermodynamically more stable than diamond at standard conditions (ΔG < 0 for the conversion), yet diamonds persist indefinitely at room temperature because the activation energy for the conversion is enormous — the reaction is spontaneous but kinetically negligible.",
      tieIn:
        "The same ΔG-vs-activation-energy distinction explains why many biologically 'favorable' reactions (like glucose oxidation) don't spontaneously happen at body temperature without enzymes — life depends on catalysts to make thermodynamically favorable but kinetically slow reactions happen fast enough to matter.",
    },
    expandable: true,
  },
  {
    id: "fc5-acid-base-buffers",
    sectionKey: "chem-phys",
    foundationalConceptId: "fc5",
    slug: "acid-base-buffers",
    title: "Acid-Base Chemistry & Buffers",
    summary:
      "Bronsted-Lowry acids and bases, pH/pKa relationships, and how buffers resist changes in pH.",
    highYield: [
      "Henderson-Hasselbalch: pH = pKa + log([A⁻]/[HA]) — memorize and know how to apply it under time pressure.",
      "A buffer resists pH change best when pH ≈ pKa (i.e., [A⁻] ≈ [HA]); capacity falls off outside roughly a 10:1 ratio.",
      "Strong acids/bases fully dissociate in water; weak acids/bases only partially dissociate (equilibrium, Ka/Kb).",
      "The bicarbonate buffer system (H2CO3/HCO3⁻) is the primary buffer maintaining blood pH near 7.4.",
    ],
    mdxPath: "chem-phys/fc5/acid-base-buffers.mdx",
    clinicalCorrelation: {
      title: "Why this matters: respiratory compensation for metabolic acidosis",
      vignette:
        "A patient in diabetic ketoacidosis produces excess ketoacids, consuming bicarbonate and dropping blood pH. The body compensates by hyperventilating (Kussmaul breathing), blowing off CO2 to shift the bicarbonate buffer equilibrium and partially restore pH toward normal.",
      tieIn:
        "This is the Henderson-Hasselbalch equation in action clinically — changing the denominator (CO2/H2CO3) to compensate for a change in the numerator (HCO3⁻), the exact algebraic relationship tested by MCAT buffer questions.",
    },
    expandable: true,
  },
  {
    id: "fc5-electrochemistry",
    sectionKey: "chem-phys",
    foundationalConceptId: "fc5",
    slug: "electrochemistry",
    title: "Electrochemistry",
    summary:
      "Oxidation-reduction reactions, galvanic cells, standard reduction potentials, and the Nernst equation.",
    highYield: [
      "Oxidation = loss of electrons (occurs at the anode); reduction = gain of electrons (occurs at the cathode). 'LEO the lion says GER.'",
      "A positive standard cell potential (E°cell) indicates a spontaneous galvanic reaction (ΔG < 0).",
      "E°cell = E°cathode − E°anode, using standard reduction potentials for both half-reactions.",
      "The Nernst equation adjusts cell potential for non-standard concentrations; potential decreases as the reaction approaches equilibrium (E → 0).",
    ],
    mdxPath: "chem-phys/fc5/electrochemistry.mdx",
    clinicalCorrelation: {
      title: "Why this matters: the resting membrane potential as an electrochemical gradient",
      vignette:
        "A neuron's resting membrane potential (~-70 mV) arises from unequal ion concentrations across the membrane and differential permeability, primarily to K+ — the same electrochemical-gradient logic (concentration differences driving a measurable potential) as the Nernst equation applied to a galvanic cell.",
      tieIn:
        "In fact, the Nernst equation is used directly in neuroscience to calculate the equilibrium potential for a given ion — one of the more common ways MCAT passages connect 'pure' electrochemistry content to physiology.",
    },
    expandable: true,
  },
];

export const mdxRegistry: Record<string, ComponentType> = {
  "fc4-mechanics-forces-energy": MechanicsForcesEnergy,
  "fc4-fluids-circulatory-physics": FluidsCirculatoryPhysics,
  "fc5-thermodynamics-reaction-rates": ThermodynamicsReactionRates,
  "fc5-acid-base-buffers": AcidBaseBuffers,
  "fc5-electrochemistry": Electrochemistry,
};
