import { defineConfig } from "vite"
import { svelte } from "@sveltejs/vite-plugin-svelte"
import { resolve } from "path"

export default defineConfig(({ mode }) => ({
  plugins: [svelte({ hot: !process.env.VITEST })],
  test: {
    globals: true,
    environment: "jsdom",
    include: ["tests/component/*.{test,spec}.ts"],
    setupFiles: ["tests/setup-vitest.js"],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      include: ['src/lib/components/**/*.svelte']
    }
  },
  resolve: {
    alias: {
      $app: resolve("./tests/mocks/app"),
      $src: resolve("./src"),
    },
    conditions: mode === 'test' ? ['browser'] : [],
  },
}))
