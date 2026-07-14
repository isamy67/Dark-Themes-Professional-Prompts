import { clsx } from "clsx";

export interface ProgressBarProps {
  value: number;
  max: number;
  className?: string;
  tone?: "accent" | "success" | "danger";
  label?: string;
}

const tones = {
  accent: "bg-accent",
  success: "bg-success",
  danger: "bg-danger",
};

export function ProgressBar({
  value,
  max,
  className,
  tone = "accent",
  label,
}: ProgressBarProps) {
  const pct = max > 0 ? Math.min(100, Math.max(0, (value / max) * 100)) : 0;
  return (
    <div
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={max}
      aria-label={label}
      className={clsx("h-1.5 w-full overflow-hidden rounded-full bg-muted", className)}
    >
      <div
        className={clsx("h-full rounded-full transition-all duration-300 ease-out", tones[tone])}
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}
