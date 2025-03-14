import { slugFromPath } from "$lib/utils/journal"
import { error } from "@sveltejs/kit"

export const prerender = true
export const csr = false

interface Post {
  slug: string
  title: string
  description: string
  date: string
  published: boolean
  tag: string
  category?: string
  [key: string]: any
}

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function load({ params }) {
  const categoryName = params.category

  if (!categoryName) {
    throw error(404, "Category not found")
  }

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

  // Filter posts by category
  const postsWithCategory = publishedPosts.filter(
    (post) => post.category === decodeURIComponent(categoryName)
  )

  if (postsWithCategory.length === 0) {
    throw error(404, "No posts found with this category")
  }

  // Sort posts by date (newest first)
  postsWithCategory.sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1))

  // Find related categories based on posts with the same tags
  const currentCategoryTags = new Set<string>()
  postsWithCategory.forEach((post) => {
    if (post.tag) {
      currentCategoryTags.add(post.tag)
    }
  })

  // Create a map of categories to posts
  const categoryMap = new Map<string, Post[]>()

  publishedPosts.forEach((post) => {
    if (post.category && post.category !== decodeURIComponent(categoryName)) {
      // Check if this category has posts with tags that overlap with the current category
      const hasRelatedTags = post.tag && currentCategoryTags.has(post.tag)

      if (hasRelatedTags) {
        if (!categoryMap.has(post.category)) {
          categoryMap.set(post.category, [])
        }
        const postsWithCategory = categoryMap.get(post.category)
        if (postsWithCategory) {
          postsWithCategory.push(post)
        }
      }
    }
  })

  // Convert the map to an array of objects
  const relatedCategories = Array.from(categoryMap.entries()).map(([name, posts]) => ({
    name,
    count: posts.length,
    posts,
  }))

  // Sort related categories by post count (descending)
  relatedCategories.sort((a, b) => b.count - a.count)

  return {
    category: decodeURIComponent(categoryName),
    posts: postsWithCategory,
    relatedCategories: relatedCategories.slice(0, 5), // Limit to 5 related categories
  }
}
