import { mdsvex } from "mdsvex"
import mdsvexConfig from "./mdsvex.config.js"
import preprocess from "svelte-preprocess"
import { resolve } from "path"
import netlify from "@sveltejs/adapter-netlify"

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ...mdsvexConfig.extensions],

  preprocess: [
    preprocess({
      postcss: true,
    }),
    mdsvex(mdsvexConfig),
  ],

  kit: {
    prerender: {
      crawl: true,
      enabled: true,
      onError: "continue",
      entries: ["*"],
    },
    adapter: netlify(),
    vite: {
      server: {
        hmr: process.env.GITPOD_WORKSPACE_URL
          ? {
              // Due to port fowarding, we have to replace
              // 'https' with the forwarded port, as this
              // is the URI created by Gitpod.
              host: process.env.GITPOD_WORKSPACE_URL.replace("https://", "3000-"),
              protocol: "wss",
              clientPort: 443
            }
          : true
      },
      test: {
        environment: "jsdom",
        coverage: {
          reporter: ["text", "json", "html"],
        },
      },
      resolve: {
        alias: {
          $components: resolve("./src/components"),
          $stores: resolve("./src/stores"),
          $styles: resolve("./src/styles"),
          $utils: resolve("./src/utils"),
          $src: resolve("./src"),
        },
      },
    },
  },
}

export default config
