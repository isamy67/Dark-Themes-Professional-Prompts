import { clsx } from "clsx";
import type { HTMLAttributes } from "react";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  interactive?: boolean;
  highlighted?: boolean;
}

export function Card({
  interactive,
  highlighted,
  className,
  ...props
}: CardProps) {
  return (
    <div
      className={clsx(
        "rounded-xl border border-border bg-card backdrop-blur-sm transition-all duration-300 ease-out",
        interactive &&
          "cursor-pointer hover:scale-[1.02] hover:border-border-hover hover:bg-[rgba(26,26,36,0.8)] hover:shadow-lg",
        highlighted && "border-accent/20 shadow-[0_0_0_1px_rgba(245,158,11,0.2),0_0_30px_rgba(245,158,11,0.15)]",
        className,
      )}
      {...props}
    />
  );
}
