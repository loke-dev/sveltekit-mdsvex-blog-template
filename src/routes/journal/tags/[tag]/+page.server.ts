import { slugFromPath } from "$lib/utils"
import { error } from "@sveltejs/kit"

export const prerender = true
export const csr = false

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function load({ params }) {
  const tag = params.tag

  if (!tag) {
    throw error(404, "Tag not found")
  }

  const modules = import.meta.glob("/src/posts/*.{md,svx,svelte.md}")

  const postPromises = []

  for (const [path, resolver] of Object.entries(modules)) {
    const slug = slugFromPath(path)
    const promise = resolver().then((post) => ({
      slug,
      ...post.metadata,
    }))

    postPromises.push(promise)
  }

  const posts = await Promise.all(postPromises)
  const publishedPosts = posts.filter((post) => post.published)

  // Filter posts by tag (case insensitive)
  const postsWithTag = publishedPosts.filter(
    (post) =>
      post.tags &&
      Array.isArray(post.tags) &&
      post.tags.some((t) => t.toLowerCase() === tag.toLowerCase())
  )

  if (postsWithTag.length === 0) {
    throw error(404, `No posts found with tag "${tag}"`)
  }

  // Sort posts by date (newest first)
  postsWithTag.sort((a, b) => (new Date(b.date) > new Date(a.date) ? -1 : 1))

  // Find related tags
  const relatedTagsMap = new Map()

  postsWithTag.forEach((post) => {
    if (post.tags && Array.isArray(post.tags)) {
      post.tags.forEach((postTag) => {
        // Skip the current tag
        if (postTag.toLowerCase() === tag.toLowerCase()) return

        // Count occurrences of other tags
        const count = relatedTagsMap.get(postTag) || 0
        relatedTagsMap.set(postTag, count + 1)
      })
    }
  })

  // Convert to array, sort by frequency, and take top 5
  const relatedTags = Array.from(relatedTagsMap.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([tagName]) => tagName)

  return {
    tag,
    posts: postsWithTag,
    relatedTags,
  }
}
