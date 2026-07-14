import { clsx } from "clsx";
import type { HTMLAttributes } from "react";

type Tone = "neutral" | "accent" | "success" | "danger";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: Tone;
}

const tones: Record<Tone, string> = {
  neutral: "bg-muted text-muted-foreground border-border",
  accent: "bg-accent-muted text-accent border-accent/30",
  success: "bg-success-muted text-success border-success/30",
  danger: "bg-danger-muted text-danger border-danger/30",
};

export function Badge({ tone = "neutral", className, ...props }: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 font-mono text-xs tracking-wide",
        tones[tone],
        className,
      )}
      {...props}
    />
  );
}
