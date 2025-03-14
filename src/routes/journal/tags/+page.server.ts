import { slugFromPath } from "$lib/utils"

export const prerender = true
export const csr = false

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function load() {
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

  publishedPosts.sort((a, b) => (new Date(b.date) > new Date(a.date) ? -1 : 1))

  // Create a map of tags to posts
  const tagMap = new Map()

  publishedPosts.forEach((post) => {
    if (post.tags && Array.isArray(post.tags)) {
      post.tags.forEach((tag) => {
        if (!tagMap.has(tag)) {
          tagMap.set(tag, [])
        }
        const postsWithTag = tagMap.get(tag)
        if (postsWithTag) {
          postsWithTag.push(post)
        }
      })
    }
  })

  // Convert the map to an array of objects
  const tags = Array.from(tagMap.entries()).map(([tag, posts]) => ({
    name: tag,
    count: posts.length,
    posts,
  }))

  // Sort tags alphabetically
  tags.sort((a, b) => a.name.localeCompare(b.name))

  return { tags, posts: publishedPosts }
}
