"use client";

import { useEffect, useRef } from "react";
import { clsx } from "clsx";

export interface DialogProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}

/**
 * Thin wrapper around the native <dialog> element: gets focus trapping,
 * Escape-to-close, and backdrop semantics for free from the browser instead
 * of a hand-rolled implementation.
 */
export function Dialog({
  open,
  onClose,
  title,
  children,
  footer,
  className,
}: DialogProps) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (open && !el.open) el.showModal();
    if (!open && el.open) el.close();
  }, [open]);

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onCancel={onClose}
      className={clsx(
        "m-auto w-full max-w-md rounded-xl border border-border bg-card-solid p-0 text-foreground",
        "backdrop:bg-black/60 backdrop:backdrop-blur-sm",
        className,
      )}
    >
      <div className="flex flex-col gap-4 p-6">
        <h2 className="font-display text-xl font-semibold tracking-tight">
          {title}
        </h2>
        <div className="text-sm text-muted-foreground">{children}</div>
        {footer && <div className="flex justify-end gap-3 pt-2">{footer}</div>}
      </div>
    </dialog>
  );
}
