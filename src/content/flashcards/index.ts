import { aminoAcidsDeck } from "./amino-acids";
import { psychKeyTermsDeck } from "./psych-key-terms";

/**
 * Raw (unvalidated) flashcard decks keyed by deck id. Adding a new deck is a
 * pure-data change: author a new deck file and register it here — no other app
 * code changes needed. Validated once via Zod in lib/content.ts.
 */
export const RAW_FLASHCARD_DECKS: Record<string, unknown> = {
  [aminoAcidsDeck.id]: aminoAcidsDeck,
  [psychKeyTermsDeck.id]: psychKeyTermsDeck,
};
