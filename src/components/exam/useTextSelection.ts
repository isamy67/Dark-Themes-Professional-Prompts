"use client";

import { useCallback, useEffect, useState, type RefObject } from "react";

export interface SelectionPopoverState {
  x: number;
  y: number;
  start: number;
  end: number;
}

/**
 * Maps a browser text selection within a container to character offsets in
 * that container's plain-text content, using Range.toString().length rather
 * than a manual TreeWalker — this handles selections that start/end at
 * element boundaries (e.g. right at the edge of an existing <mark>) for
 * free, since Range's own text-concatenation logic matches how the
 * container's canonical text was rendered.
 */
export function useTextSelection(containerRef: RefObject<HTMLElement | null>) {
  const [popover, setPopover] = useState<SelectionPopoverState | null>(null);

  const handleMouseUp = useCallback(() => {
    const container = containerRef.current;
    const selection = window.getSelection();
    if (
      !container ||
      !selection ||
      selection.isCollapsed ||
      selection.rangeCount === 0
    ) {
      setPopover(null);
      return;
    }
    const range = selection.getRangeAt(0);
    if (!container.contains(range.commonAncestorContainer)) {
      setPopover(null);
      return;
    }

    const start = offsetWithin(container, range.startContainer, range.startOffset);
    const end = offsetWithin(container, range.endContainer, range.endOffset);
    if (start === end) {
      setPopover(null);
      return;
    }

    const rect = range.getBoundingClientRect();
    setPopover({
      x: rect.left + rect.width / 2,
      y: rect.top,
      start: Math.min(start, end),
      end: Math.max(start, end),
    });
  }, [containerRef]);

  const clearPopover = useCallback(() => setPopover(null), []);

  useEffect(() => {
    if (!popover) return;
    const dismiss = () => setPopover(null);
    window.addEventListener("scroll", dismiss, true);
    return () => window.removeEventListener("scroll", dismiss, true);
  }, [popover]);

  return { popover, handleMouseUp, clearPopover };
}

function offsetWithin(root: Node, target: Node, targetOffset: number): number {
  const preRange = document.createRange();
  preRange.selectNodeContents(root);
  preRange.setEnd(target, targetOffset);
  return preRange.toString().length;
}
