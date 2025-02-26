import adapter from "@sveltejs/adapter-vercel"
import { vitePreprocess } from "@sveltejs/kit/vite"
import preprocess from "svelte-preprocess"
import { resolve } from "path"
import { mdsvex } from "mdsvex"
import mdsvexConfig from "./mdsvex.config.js"

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ...mdsvexConfig.extensions],
  preprocess: [
    vitePreprocess(),
    preprocess({
      postcss: true,
    }),
    mdsvex(mdsvexConfig),
  ],
  kit: {
    adapter: adapter({
      // Specify Node.js version
      runtime: 'nodejs18.x',

      // Specify edge runtime if needed
      // edge: false,

      // Split your app into smaller chunks
      split: true
    }),
    alias: {
      $components: resolve("./src/lib/components"),
      $stores: resolve("./src/lib/stores"),
      $styles: resolve("./src/lib/styles"),
      $utils: resolve("./src/lib/utils"),
      $src: resolve("./src"),
    },
  },
  vitePlugin: {
    inspector: {
      holdMode: true,
      toggleKeyCombo: "meta-shift",
    }
  },
}

export default config
