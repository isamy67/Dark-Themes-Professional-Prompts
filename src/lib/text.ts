/**
 * Strips the light markdown/LaTeX-style delimiters used in passage and
 * question authoring down to plain text. Passage highlighting works on
 * character offsets into plain text (matching how the real exam software's
 * annotation tools operate), so passages are deliberately rendered as plain
 * text rather than through a full markdown/KaTeX pipeline — the two
 * approaches don't compose cleanly, and a full renderer isn't needed for
 * this content's light formatting.
 */
export function markdownToPlainText(source: string): string {
  return source
    .replace(/\$\$([\s\S]*?)\$\$/g, "$1")
    .replace(/\$(.*?)\$/g, "$1")
    .replace(/\*\*(.*?)\*\*/g, "$1")
    .replace(/\*(.*?)\*/g, "$1")
    .trim();
}
