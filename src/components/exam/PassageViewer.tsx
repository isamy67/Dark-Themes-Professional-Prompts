"use client";

import { Card } from "@/components/ui/Card";
import { HighlightableText } from "./HighlightableText";
import { markdownToPlainText } from "@/lib/text";
import type { HighlightRange, Passage } from "@/lib/types";

export interface PassageViewerProps {
  passage: Passage;
  ranges: HighlightRange[];
  onAddRange: (range: HighlightRange) => void;
  onRemoveRangeAt: (index: number) => void;
}

export function PassageViewer({
  passage,
  ranges,
  onAddRange,
  onRemoveRangeAt,
}: PassageViewerProps) {
  const plainText = markdownToPlainText(passage.bodyMarkdown);

  return (
    <Card className="flex h-full flex-col overflow-y-auto p-6">
      {passage.title && (
        <h2 className="mb-4 font-display text-lg font-semibold tracking-tight text-foreground">
          {passage.title}
        </h2>
      )}
      <HighlightableText
        text={plainText}
        ranges={ranges}
        onAddRange={onAddRange}
        onRemoveRangeAt={onRemoveRangeAt}
        className="text-[15px]"
      />
      {passage.figures?.map((fig) => (
        <figure
          key={fig.id}
          className="mt-6 rounded-lg border border-border bg-muted/50 p-4 text-sm text-muted-foreground"
        >
          <figcaption>{fig.caption}</figcaption>
        </figure>
      ))}
    </Card>
  );
}
