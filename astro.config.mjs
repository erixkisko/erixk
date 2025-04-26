// @ts-check
import { defineConfig } from "astro/config";
import postcssPresetEnv from "postcss-preset-env";

// https://astro.build/config
export default defineConfig({
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
