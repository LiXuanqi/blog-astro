import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel/serverless";
import yaml from "@rollup/plugin-yaml";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [mdx(), sitemap(), tailwind()],
  output: "server",
  adapter: vercel(),
  redirects: {
    // TODO: build home page and remove this redirect
    "/": "/blog",
  },
  vite: {
    plugins: [yaml()],
  },
});
