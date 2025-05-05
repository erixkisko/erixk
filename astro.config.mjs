// @ts-check
import { defineConfig } from "astro/config";
import postcssPresetEnv from "postcss-preset-env";

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
});
