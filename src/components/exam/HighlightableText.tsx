"use client";

import { useEffect, useRef } from "react";
import { clsx } from "clsx";
import { useTextSelection } from "./useTextSelection";
import type { HighlightRange } from "@/lib/types";

export interface HighlightableTextProps {
  /** Canonical plain text — must exactly match what markdownToPlainText() produced, since offsets are computed against it. */
  text: string;
  ranges: HighlightRange[];
  onAddRange: (range: HighlightRange) => void;
  onRemoveRangeAt: (index: number) => void;
  className?: string;
}

interface Segment {
  kind: "plain" | "highlight" | "strikethrough";
  text: string;
  start: number;
  end: number;
}

function buildSegments(text: string, ranges: HighlightRange[]): Segment[] {
  if (ranges.length === 0) {
    return [{ kind: "plain", text, start: 0, end: text.length }];
  }
  const points = new Set<number>([0, text.length]);
  for (const r of ranges) {
    points.add(r.start);
    points.add(r.end);
  }
  const sorted = Array.from(points).sort((a, b) => a - b);

  const segments: Segment[] = [];
  for (let i = 0; i < sorted.length - 1; i++) {
    const start = sorted[i];
    const end = sorted[i + 1];
    if (start >= end) continue;
    const covering = ranges.filter((r) => r.start <= start && r.end >= end);
    const kind = covering.length > 0 ? covering[covering.length - 1].kind : "plain";
    segments.push({ kind, text: text.slice(start, end), start, end });
  }
  return segments;
}

export function HighlightableText({
  text,
  ranges,
  onAddRange,
  onRemoveRangeAt,
  className,
}: HighlightableTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);
  const { popover, handleMouseUp, clearPopover } = useTextSelection(containerRef);

  useEffect(() => {
    if (!popover) return;
    function onDocMouseDown(e: MouseEvent) {
      if (popoverRef.current && !popoverRef.current.contains(e.target as Node)) {
        clearPopover();
      }
    }
    document.addEventListener("mousedown", onDocMouseDown);
    return () => document.removeEventListener("mousedown", onDocMouseDown);
  }, [popover, clearPopover]);

  const segments = buildSegments(text, ranges);

  function applyKind(kind: "highlight" | "strikethrough") {
    if (!popover) return;
    onAddRange({ start: popover.start, end: popover.end, kind });
    window.getSelection()?.removeAllRanges();
    clearPopover();
  }

  const overlappingIndex = popover
    ? ranges.findIndex((r) => r.start < popover.end && r.end > popover.start)
    : -1;

  return (
    <div className="relative">
      <div
        ref={containerRef}
        onMouseUp={handleMouseUp}
        className={clsx(
          "whitespace-pre-wrap font-body leading-relaxed text-foreground",
          className,
        )}
      >
        {segments.map((seg) =>
          seg.kind === "plain" ? (
            <span key={seg.start}>{seg.text}</span>
          ) : (
            <mark
              key={seg.start}
              className={
                seg.kind === "highlight" ? "mcat-highlight" : "mcat-strikethrough"
              }
              title="Click and select nearby text, then choose Remove to clear an annotation"
            >
              {seg.text}
            </mark>
          ),
        )}
      </div>
      {popover && (
        <div
          ref={popoverRef}
          className="fixed z-50 flex -translate-x-1/2 -translate-y-full gap-1 rounded-lg border border-border bg-card-solid p-1 shadow-xl"
          style={{ left: popover.x, top: popover.y - 8 }}
        >
          <button
            type="button"
            className="rounded-md px-3 py-1.5 text-xs font-medium text-foreground hover:bg-accent-muted hover:text-accent"
            onClick={() => applyKind("highlight")}
          >
            Highlight
          </button>
          <button
            type="button"
            className="rounded-md px-3 py-1.5 text-xs font-medium text-foreground hover:bg-white/5"
            onClick={() => applyKind("strikethrough")}
          >
            Strikethrough
          </button>
          {overlappingIndex >= 0 && (
            <button
              type="button"
              className="rounded-md px-3 py-1.5 text-xs font-medium text-danger hover:bg-danger-muted"
              onClick={() => {
                onRemoveRangeAt(overlappingIndex);
                clearPopover();
              }}
            >
              Remove
            </button>
          )}
        </div>
      )}
    </div>
  );
}
