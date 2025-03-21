import type { PageLoad } from "./$types"
import { slugFromPath } from "$lib/utils/journal"
import { error } from "@sveltejs/kit"
import { dev } from "$app/environment"

export const prerender = true
export const csr = dev

export const load: PageLoad = async ({ params }) => {
  const modules = import.meta.glob(`/src/posts/*.{md,svx,svelte.md}`)

  let match: { path?: string; resolver?: App.MdsvexResolver } = {}
  for (const [path, resolver] of Object.entries(modules)) {
    if (slugFromPath(path) === params.slug) {
      match = { path, resolver: resolver as unknown as App.MdsvexResolver }
      break
    }
  }

  const post = await match?.resolver?.()

  if (!post) {
    throw error(404)
  }

  return {
    component: post.default,
    frontmatter: post.metadata,
  }
}
