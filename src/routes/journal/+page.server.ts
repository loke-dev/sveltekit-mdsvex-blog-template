import { slugFromPath } from "$utils/journal"

export const prerender = true
export const csr = false

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function load() {
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

  publishedPosts.sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1))

  return { posts: publishedPosts }
}
