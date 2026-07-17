import { aminoAcidsDeck } from "./amino-acids";
import { psychKeyTermsDeck } from "./psych-key-terms";
import { physicsEssentialsDeck } from "./physics-essentials";
import { genChemEssentialsDeck } from "./gen-chem-essentials";
import { metabolismEnzymesDeck } from "./metabolism-enzymes";
import { psychTheoristsDeck } from "./psych-theorists";

/**
 * Raw (unvalidated) flashcard decks keyed by deck id. Adding a new deck is a
 * pure-data change: author a new deck file and register it here — no other app
 * code changes needed. Validated once via Zod in lib/content.ts.
 */
export const RAW_FLASHCARD_DECKS: Record<string, unknown> = {
  [aminoAcidsDeck.id]: aminoAcidsDeck,
  [psychKeyTermsDeck.id]: psychKeyTermsDeck,
  [physicsEssentialsDeck.id]: physicsEssentialsDeck,
  [genChemEssentialsDeck.id]: genChemEssentialsDeck,
  [metabolismEnzymesDeck.id]: metabolismEnzymesDeck,
  [psychTheoristsDeck.id]: psychTheoristsDeck,
};
