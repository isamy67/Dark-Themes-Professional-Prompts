"use client";

import { useId, useState } from "react";
import { clsx } from "clsx";

export interface TooltipProps {
  content: string;
  children: React.ReactNode;
  className?: string;
}

export function Tooltip({ content, children, className }: TooltipProps) {
  const [visible, setVisible] = useState(false);
  const id = useId();

  return (
    <span
      className={clsx("relative inline-flex", className)}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
    >
      <span aria-describedby={id} tabIndex={0} className="inline-flex">
        {children}
      </span>
      <span
        role="tooltip"
        id={id}
        className={clsx(
          "pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 w-max max-w-64 -translate-x-1/2 rounded-md border border-border bg-card-solid px-3 py-2 text-center font-sans text-xs font-normal tracking-normal text-foreground shadow-lg transition-opacity duration-150",
          visible ? "opacity-100" : "opacity-0",
        )}
      >
        {content}
      </span>
    </span>
  );
}
