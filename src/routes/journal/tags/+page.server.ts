import { slugFromPath } from "$lib/utils"
import { dev } from "$app/environment"

export const prerender = true
export const csr = dev

interface MdsvexFile {
  default: any
  metadata: Record<string, any>
}

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
  const modules = import.meta.glob<MdsvexFile>("/src/posts/*.{md,svx,svelte.md}")

  const postPromises: Promise<Post>[] = []

  for (const [path, resolver] of Object.entries(modules)) {
    const slug = slugFromPath(path)
    const promise = resolver().then((post: MdsvexFile) => ({
      slug,
      ...post.metadata,
    })) as Promise<Post>

    postPromises.push(promise)
  }

  const posts = await Promise.all(postPromises)
  const publishedPosts = posts.filter((post) => post.published)

  publishedPosts.sort((a, b) => (new Date(b.date) > new Date(a.date) ? -1 : 1))

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

  const tags = Array.from(tagMap.entries()).map(([tag, posts]) => ({
    name: tag,
    count: posts.length,
    posts,
  }))

  tags.sort((a, b) => a.name.localeCompare(b.name))

  return { tags, posts: publishedPosts }
}
