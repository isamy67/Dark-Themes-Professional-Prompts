import type { FlashcardDeck } from "@/lib/types";

/**
 * Biochemistry deck: recall of the 20 standard amino acids — abbreviations,
 * classifications, and structural quirks (FC1, bio-biochem). Original content.
 */
export const aminoAcidsDeck: FlashcardDeck = {
  id: "amino-acids",
  title: "Amino Acids",
  description:
    "Name, abbreviation, and property recall for the 20 standard amino acids.",
  sectionKey: "bio-biochem",
  foundationalConcept: "fc1",
  cards: [
    {
      id: "aa-glycine-achiral",
      deckId: "amino-acids",
      front: "Which standard amino acid is achiral (has no stereocenter), and why?",
      back: "Glycine. Its side chain is a single hydrogen, so the alpha carbon is bonded to two identical H atoms and is not a chiral center.",
      hint: "It has the smallest possible side chain.",
      foundationalConcept: "fc1",
    },
    {
      id: "aa-proline-helix",
      deckId: "amino-acids",
      front:
        "Which amino acid has a side chain that loops back to its own backbone nitrogen, making it a secondary amine that kinks helices?",
      back: "Proline. Because the ring constrains the backbone, proline is a classic alpha-helix breaker and is often found at turns.",
      hint: "Sometimes called an imino acid.",
      foundationalConcept: "fc1",
    },
    {
      id: "aa-sulfur",
      deckId: "amino-acids",
      front: "Name the two amino acids whose side chains contain sulfur.",
      back: "Cysteine and methionine. Two cysteine residues can be oxidized to form a covalent disulfide bond that stabilizes tertiary/quaternary structure.",
      hint: "One of them forms disulfide bridges.",
      foundationalConcept: "fc1",
    },
    {
      id: "aa-aromatic",
      deckId: "amino-acids",
      front: "Name the three aromatic amino acids.",
      back: "Phenylalanine, tyrosine, and tryptophan. Tyrosine and tryptophan absorb UV light near 280 nm, which is how protein concentration is often estimated spectrophotometrically.",
      hint: "One of the three is the largest amino acid overall.",
      foundationalConcept: "fc1",
    },
    {
      id: "aa-bcaa",
      deckId: "amino-acids",
      front: "List the three branched-chain amino acids (BCAAs).",
      back: "Leucine, isoleucine, and valine — all nonpolar and aliphatic, with hydrocarbon branches on their side chains.",
      hint: "All three are nonpolar.",
      foundationalConcept: "fc1",
    },
    {
      id: "aa-acidic",
      deckId: "amino-acids",
      front: "Which two amino acids are acidic (negatively charged) at physiological pH?",
      back: "Aspartate (Asp/D) and glutamate (Glu/E). Their carboxylate side chains are deprotonated near pH 7.",
      hint: "Their neutral forms are aspartic and glutamic acid.",
      foundationalConcept: "fc1",
    },
    {
      id: "aa-basic",
      deckId: "amino-acids",
      front: "Which three amino acids are basic, and which one is a common catalytic residue near neutral pH?",
      back: "Lysine, arginine, and histidine are basic. Histidine's imidazole side chain (pKa ~6) can gain or lose a proton around physiological pH, making it a frequent acid/base catalyst in enzyme active sites.",
      hint: "The catalytic one has an imidazole ring.",
      foundationalConcept: "fc1",
    },
    {
      id: "aa-phospho",
      deckId: "amino-acids",
      front: "Which three amino acid side chains bear a hydroxyl group and are the usual targets of protein kinases?",
      back: "Serine, threonine, and tyrosine. Their -OH groups can be reversibly phosphorylated to regulate protein activity.",
      hint: "One of the three is also aromatic.",
      foundationalConcept: "fc1",
    },
    {
      id: "aa-trp-abbrev",
      deckId: "amino-acids",
      front: "Give the three-letter and one-letter abbreviations for tryptophan.",
      back: "Trp / W. (The single-letter code is W because T was already taken by threonine.)",
      hint: "Its single letter is not the first letter of its name.",
      foundationalConcept: "fc1",
    },
  ],
};
