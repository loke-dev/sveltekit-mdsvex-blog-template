import adapter from "@sveltejs/adapter-vercel"
import preprocess from "svelte-preprocess"
import { mdsvex } from "mdsvex"
import mdsvexConfig from "./mdsvex.config.js"
import { dirname, resolve } from "path"
import { fileURLToPath } from "url"

const __dirname = dirname(fileURLToPath(import.meta.url))

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ...mdsvexConfig.extensions],
  preprocess: [
    preprocess({
      postcss: true,
      typescript: {
        tsconfigFile: "./tsconfig.json",
        compilerOptions: {
          verbatimModuleSyntax: true
        }
      }
    }),
    mdsvex(mdsvexConfig),
  ],
  kit: {
    adapter: adapter({
      // Specify Node.js version
      runtime: 'nodejs22.x',

      // Split your app into smaller chunks
      split: true
    }),
    alias: {
      $components: resolve(__dirname, "./src/lib/components"),
      $stores: resolve(__dirname, "./src/lib/stores"),
      $styles: resolve(__dirname, "./src/lib/styles"),
      $utils: resolve(__dirname, "./src/lib/utils"),
      $src: resolve(__dirname, "./src"),
    },
    prerender: {
      handleHttpError: ({ path, referrer, message }) => {
        // Ignore 404 errors for test links
        if (path.startsWith('/test/') && referrer === '/test') {
          return;
        }

        // Otherwise, throw the error
        throw new Error(message);
      }
    }
  }
}

export default config
