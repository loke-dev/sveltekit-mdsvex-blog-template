import { slugFromPath } from "$lib/utils/journal"
import { dev } from "$app/environment"

export const prerender = true
export const csr = dev

interface Post {
  slug: string
  title: string
  description: string
  date: string
  published: boolean
  tag: string
  [key: string]: any
}

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function load() {
  const modules: Record<string, () => any> = import.meta.glob("/src/posts/*.{md,svx,svelte.md}")

  const postPromises: Promise<Post>[] = []

  for (const [path, resolver] of Object.entries(modules)) {
    const slug = slugFromPath(path)
    const promise = resolver().then((post: any) => ({
      slug,
      ...post.metadata,
    })) as Promise<Post>

    postPromises.push(promise)
  }

  const posts = await Promise.all(postPromises)
  const publishedPosts = posts.filter((post) => post.published)

  publishedPosts.sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1))

  // Create a map of tags to posts
  const tagMap = new Map<string, Post[]>()

  publishedPosts.forEach((post) => {
    if (post.tag) {
      if (!tagMap.has(post.tag)) {
        tagMap.set(post.tag, [])
      }
      const postsWithTag = tagMap.get(post.tag)
      if (postsWithTag) {
        postsWithTag.push(post)
      }
    }
  })

  // Convert the map to an array of objects
  const tags = Array.from(tagMap.entries()).map(([name, posts]) => ({
    name,
    count: posts.length,
    posts,
  }))

  // Sort tags by post count (descending)
  tags.sort((a, b) => b.count - a.count)

  return { posts: publishedPosts, tags }
}
