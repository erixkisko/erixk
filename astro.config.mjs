// @ts-check
import { defineConfig } from "astro/config";
import postcssPresetEnv from "postcss-preset-env";
import remarkGfm from "remark-gfm";

// https://astro.build/config
export default defineConfig({
  site: "https://erixk.com/",
  vite: {
    css: {
      postcss: {
        plugins: [
          postcssPresetEnv({
            stage: 0,
            features: {
              "custom-media-queries": true,
            },
          }),
        ],
      },
    },
  },
  security: {
    checkOrigin: true,
  },
  image: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        pathname: "/**",
      },
    ],
  },
  markdown: {
    remarkPlugins: [remarkGfm],
    shikiConfig: {
      theme: "github-dark",
    },
  },
});
