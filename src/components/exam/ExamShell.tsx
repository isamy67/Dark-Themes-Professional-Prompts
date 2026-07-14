import type { ReactNode } from "react";

export interface ExamShellProps {
  header: ReactNode;
  sidebar?: ReactNode;
  children: ReactNode;
  footer: ReactNode;
}

export function ExamShell({ header, sidebar, children, footer }: ExamShellProps) {
  return (
    <div className="flex h-dvh flex-col bg-background">
      <header className="flex shrink-0 items-center justify-between border-b border-border px-6 py-3">
        {header}
      </header>
      <div className="flex flex-1 overflow-hidden">
        <main className="min-w-0 flex-1 overflow-hidden">{children}</main>
        {sidebar && (
          <aside className="w-72 shrink-0 overflow-y-auto border-l border-border p-4">
            {sidebar}
          </aside>
        )}
      </div>
      <footer className="flex shrink-0 items-center justify-between border-t border-border px-6 py-3">
        {footer}
      </footer>
    </div>
  );
}
