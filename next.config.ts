import type { NextConfig } from "next";
import createMDX from "@next/mdx";

// Env-gated basePath: local dev/build stays at the root ("") while the GitHub
// Pages build passes NEXT_PUBLIC_BASE_PATH=/Dark-Themes-Professional-Prompts so
// assets and routes are served from the project subpath.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "mdx"],
  // Fully static export to out/ for hosting on GitHub Pages (no server runtime).
  output: "export",
  images: { unoptimized: true },
  // Emit directory-style route/index.html so a static host serves clean URLs.
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
};

const withMDX = createMDX({
  options: {
    // Turbopack's MDX loader requires serializable options, so remark/rehype
    // plugins are referenced by package specifier string here rather than an
    // imported function reference (which works with webpack but not
    // Turbopack, which resolves and requires the plugin itself by name).
    remarkPlugins: ["remark-gfm"],
  },
});

export default withMDX(nextConfig);
