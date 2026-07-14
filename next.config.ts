import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "mdx"],
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
