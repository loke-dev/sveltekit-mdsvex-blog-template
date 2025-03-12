import { slugFromPath } from "$lib/utils/journal"
import { error } from "@sveltejs/kit"

export const prerender = true
export const csr = false

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function load({ params }) {
  const tag = params.tag

  if (!tag) {
    throw error(404, "Tag not found")
  }

  const modules: Record<string, () => any> = import.meta.glob("/src/posts/*.{md,svx,svelte.md}")

  const postPromises = []

  for (const [path, resolver] of Object.entries(modules)) {
    const slug = slugFromPath(path)
    const promise = resolver().then((post: App.Post) => ({
      slug,
      ...post.metadata,
    }))

    postPromises.push(promise)
  }

  const posts = await Promise.all(postPromises)
  const publishedPosts = posts.filter((post) => post.published)

  // Filter posts by tag
  const postsWithTag = publishedPosts.filter(
    (post) =>
      post.tags &&
      Array.isArray(post.tags) &&
      post.tags.some((t: string) => t === decodeURIComponent(tag))
  )

  if (postsWithTag.length === 0) {
    throw error(404, "No posts found with this tag")
  }

  // Sort posts by date (newest first)
  postsWithTag.sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1))

  return {
    tag: decodeURIComponent(tag),
    posts: postsWithTag,
  }
}
