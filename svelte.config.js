import adapter from "@sveltejs/adapter-vercel"
import { sveltePreprocess } from "svelte-preprocess"
import { mdsvex } from "mdsvex"
import mdsvexConfig from "./mdsvex.config.js"
import { dirname, resolve } from "path"
import { fileURLToPath } from "url"

const __dirname = dirname(fileURLToPath(import.meta.url))

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ...mdsvexConfig.extensions],
  preprocess: [
    sveltePreprocess({
      postcss: true
    }),
    mdsvex(mdsvexConfig),
  ],
  kit: {
    adapter: adapter({
      // Specify Node.js version
      runtime: 'nodejs18.x',

      // Split your app into smaller chunks
      split: true
    }),
    alias: {
      $components: resolve(__dirname, "./src/lib/components"),
      $stores: resolve(__dirname, "./src/lib/stores"),
      $styles: resolve(__dirname, "./src/lib/styles"),
      $utils: resolve(__dirname, "./src/lib/utils"),
      $src: resolve(__dirname, "./src"),
    }
  }
}

export default config
