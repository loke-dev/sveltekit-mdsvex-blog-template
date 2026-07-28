import js from "@eslint/js"
import prettier from "eslint-config-prettier"
import svelte from "eslint-plugin-svelte"
import { defineConfig, globalIgnores } from "eslint/config"
import globals from "globals"
import ts from "typescript-eslint"
import svelteConfig from "./svelte.config.js"

export default defineConfig(
  globalIgnores([
    ".svelte-kit/**",
    ".vercel/**",
    ".wrangler/**",
    "build/**",
    "coverage/**",
    "test-results/**",
  ]),
  js.configs.recommended,
  ts.configs.recommended,
  svelte.configs.recommended,
  prettier,
  svelte.configs.prettier,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      "no-undef": "off",
      "svelte/no-navigation-without-resolve": "off",
    },
  },
  {
    files: ["**/*.svelte", "**/*.svelte.ts", "**/*.svelte.js"],
    languageOptions: {
      parserOptions: {
        projectService: true,
        extraFileExtensions: [".svelte"],
        parser: ts.parser,
        svelteConfig,
      },
    },
  }
)
