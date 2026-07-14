import type { ReactNode } from "react";

export interface TutorShellProps {
  header: ReactNode;
  children: ReactNode;
  footer: ReactNode;
}

export function TutorShell({ header, children, footer }: TutorShellProps) {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <header className="flex shrink-0 items-center justify-between border-b border-border px-6 py-3">
        {header}
      </header>
      <main className="flex-1 overflow-y-auto">{children}</main>
      <footer className="flex shrink-0 items-center justify-between border-t border-border px-6 py-3">
        {footer}
      </footer>
    </div>
  );
}
