import type { MDXComponents } from "mdx/types";

/**
 * Next.js convention (auto-picked up by @next/mdx): styles every element
 * rendered from a .mdx file consistently with the design system, without
 * needing per-lesson className props.
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: (props) => (
      <h2
        className="mt-10 mb-4 font-display text-xl font-semibold tracking-tight text-foreground first:mt-0"
        {...props}
      />
    ),
    h3: (props) => (
      <h3
        className="mt-8 mb-3 font-display text-lg font-semibold tracking-tight text-foreground"
        {...props}
      />
    ),
    p: (props) => (
      <p className="mb-4 text-[15px] leading-relaxed text-foreground" {...props} />
    ),
    ul: (props) => (
      <ul className="mb-4 ml-5 list-disc space-y-1.5 text-[15px] leading-relaxed text-foreground" {...props} />
    ),
    ol: (props) => (
      <ol className="mb-4 ml-5 list-decimal space-y-1.5 text-[15px] leading-relaxed text-foreground" {...props} />
    ),
    li: (props) => <li className="pl-1" {...props} />,
    strong: (props) => <strong className="font-semibold text-foreground" {...props} />,
    em: (props) => <em className="text-foreground" {...props} />,
    a: (props) => (
      <a className="text-accent underline decoration-accent/40 underline-offset-2 hover:decoration-accent" {...props} />
    ),
    blockquote: (props) => (
      <blockquote
        className="mb-4 border-l-2 border-accent/40 pl-4 text-[15px] italic leading-relaxed text-muted-foreground"
        {...props}
      />
    ),
    code: (props) => (
      <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[13px] text-accent" {...props} />
    ),
    hr: () => <hr className="my-8 border-border" />,
    table: (props) => (
      <div className="mb-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm" {...props} />
      </div>
    ),
    th: (props) => (
      <th className="border-b border-border px-3 py-2 text-left font-mono text-xs uppercase tracking-wide text-muted-foreground" {...props} />
    ),
    td: (props) => <td className="border-b border-border/60 px-3 py-2 text-foreground" {...props} />,
    ...components,
  };
}
