import type { FlashcardDeck } from "@/lib/types";

/**
 * Chem/Phys deck: high-yield physics relationships tested on the MCAT
 * (FC4, chem-phys). Original content.
 */
export const physicsEssentialsDeck: FlashcardDeck = {
  id: "physics-essentials",
  title: "Physics Essentials",
  description:
    "High-yield MCAT physics: kinematics, forces, energy, fluids, circuits, and optics.",
  sectionKey: "chem-phys",
  foundationalConcept: "fc4",
  cards: [
    {
      id: "phys-newton-second",
      deckId: "physics-essentials",
      front: "State Newton's second law and the SI unit it defines.",
      back: "Fnet = ma. One newton (N) is the force that accelerates a 1 kg mass at 1 m/s², so 1 N = 1 kg·m/s².",
      hint: "Force is proportional to acceleration.",
      foundationalConcept: "fc4",
    },
    {
      id: "phys-kinetic-energy",
      deckId: "physics-essentials",
      front: "Write the kinetic energy equation. If speed doubles, how does KE change?",
      back: "KE = ½mv². Because KE scales with v², doubling the speed quadruples the kinetic energy (×4).",
      hint: "The velocity term is squared.",
      foundationalConcept: "fc4",
    },
    {
      id: "phys-continuity",
      deckId: "physics-essentials",
      front:
        "For an ideal incompressible fluid, what does the continuity equation say about flow through a narrowing pipe?",
      back: "A₁v₁ = A₂v₂. Volume flow rate is constant, so where cross-sectional area decreases, fluid speed increases.",
      hint: "Narrower pipe → faster flow.",
      foundationalConcept: "fc4",
    },
    {
      id: "phys-bernoulli",
      deckId: "physics-essentials",
      front:
        "By Bernoulli's principle, what happens to pressure where an ideal fluid speeds up (at constant height)?",
      back: "Pressure decreases. Bernoulli's equation (P + ½ρv² + ρgh = constant) trades pressure for kinetic energy, so faster flow means lower pressure.",
      hint: "Faster flow, lower pressure.",
      foundationalConcept: "fc4",
    },
    {
      id: "phys-ohms-law",
      deckId: "physics-essentials",
      front: "State Ohm's law and the equation for power dissipated by a resistor.",
      back: "V = IR. Power P = IV = I²R = V²/R.",
      hint: "Voltage equals current times resistance.",
      foundationalConcept: "fc4",
    },
    {
      id: "phys-series-parallel",
      deckId: "physics-essentials",
      front:
        "How do resistances combine in series versus in parallel?",
      back: "Series: R_total = R₁ + R₂ + … (add directly). Parallel: 1/R_total = 1/R₁ + 1/R₂ + …, so the total is smaller than the smallest resistor.",
      hint: "Parallel resistance is always less than any single branch.",
      foundationalConcept: "fc4",
    },
    {
      id: "phys-projectile",
      deckId: "physics-essentials",
      front:
        "For projectile motion (no air resistance), what happens to the horizontal and vertical velocity components?",
      back: "Horizontal velocity is constant (no horizontal force). Vertical velocity changes at g = 9.8 m/s² due to gravity. The two components are independent.",
      hint: "Only one direction accelerates.",
      foundationalConcept: "fc4",
    },
    {
      id: "phys-snell",
      deckId: "physics-essentials",
      front:
        "State Snell's law. When light passes into a denser medium (higher n), does it bend toward or away from the normal?",
      back: "n₁sin θ₁ = n₂sin θ₂. Entering a higher-index (denser) medium slows the light and bends it toward the normal.",
      hint: "Toward the normal when slowing down.",
      foundationalConcept: "fc4",
    },
    {
      id: "phys-doppler",
      deckId: "physics-essentials",
      front:
        "Qualitatively, how does the observed frequency change as a sound source moves toward you versus away?",
      back: "Toward the observer: waves compress, so observed frequency increases (higher pitch). Away: waves stretch, observed frequency decreases (lower pitch). This is the Doppler effect.",
      hint: "Approaching siren sounds higher-pitched.",
      foundationalConcept: "fc4",
    },
  ],
};
