import { slugFromPath } from "$lib/utils"
import { error } from "@sveltejs/kit"

export const prerender = true
export const csr = false

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
export async function load({ params }) {
  const tag = params.tag

  if (!tag) {
    throw error(404, "Tag not found")
  }

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

  // Filter posts by tag (case insensitive)
  const postsWithTag = publishedPosts.filter(
    (post) => post.tag && post.tag.toLowerCase() === tag.toLowerCase()
  )

  if (postsWithTag.length === 0) {
    throw error(404, `No posts found with tag "${tag}"`)
  }

  // Sort posts by date (newest first)
  postsWithTag.sort((a, b) => (new Date(b.date) > new Date(a.date) ? -1 : 1))

  // Find related tags
  const relatedTagsMap = new Map<string, number>()

  postsWithTag.forEach((post) => {
    // Skip posts that don't have a tag or have the current tag
    if (!post.tag || post.tag.toLowerCase() === tag.toLowerCase()) return

    // Count occurrences of other tags
    const count = relatedTagsMap.get(post.tag) || 0
    relatedTagsMap.set(post.tag, count + 1)
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
