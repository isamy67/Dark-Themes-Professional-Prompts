"use client";

import { clsx } from "clsx";
import { Flag } from "lucide-react";

export interface FlagButtonProps {
  flagged: boolean;
  onToggle: () => void;
  className?: string;
}

export function FlagButton({ flagged, onToggle, className }: FlagButtonProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={flagged}
      className={clsx(
        "flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-medium transition-colors",
        flagged
          ? "bg-accent-muted text-accent"
          : "text-muted-foreground hover:bg-white/5 hover:text-foreground",
        className,
      )}
    >
      <Flag size={14} strokeWidth={1.5} fill={flagged ? "currentColor" : "none"} />
      {flagged ? "Flagged for review" : "Flag for review"}
    </button>
  );
}
