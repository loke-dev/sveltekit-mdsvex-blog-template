import { sveltekit } from "@sveltejs/kit/vite"

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit()],
  test: {
    globals: true,
    environment: "jsdom",
    include: ["tests/component/*.{test,spec}.ts"],
    setupFiles: ["./setupTest.js"],
  },
}

export default config
