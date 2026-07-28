<script lang="ts">
  import Link from "$lib/components/Link.svelte"
  import type { Post } from "$lib/types/posts"
  import { getTagColor } from "$lib/utils/tagColors"
  import type { PageData } from "./$types"
  import PageContainer from "$lib/components/PageContainer.svelte"
  import PageHead from "$lib/components/PageHead.svelte"

  /** @type {import('./$types').PageData} */
  export let data: PageData
  const { tags } = data

  type Tag = { name: string; count: number; posts: Post[] }

  const importantSinglePostTags = ["svelte", "react", "next.js", "typescript", "javascript"]
  const filteredTags: Tag[] = tags.filter(
    (tag: Tag) => tag.count > 1 || importantSinglePostTags.includes(tag.name.toLowerCase())
  )

  const tagsByLetter = filteredTags.reduce<Record<string, Tag[]>>((groups, tag) => {
    const firstLetter = tag.name.charAt(0).toUpperCase()
    groups[firstLetter] ??= []
    groups[firstLetter].push(tag)
    return groups
  }, {})

  const groupedTags = Object.entries(tagsByLetter).sort((a, b) => a[0].localeCompare(b[0]))

  const maxCount = Math.max(...filteredTags.map((tag) => tag.count))

  function getTagSize(count: number, maxCount: number): string {
    const minSize = 0.8
    const maxSize = 1.4
    const ratio = Math.max(0.5, count / maxCount)
    const size = minSize + ratio * (maxSize - minSize)
    return size.toFixed(2)
  }
</script>

<svelte:head>
  <title>Topics - loke.dev</title>
  <meta name="description" content="Browse blog posts by topic" />
  <meta name="Cache-Control" content="max-age=1, stale-while-revalidate=59" />
</svelte:head>

<PageContainer>
  <PageHead
    title="Tags"
    subtitle="Browse by Topic"
    description="Browse all blog posts by tag to find topics that interest you"
  />

  <div class="tag-cloud-container relative">
    <h2 class="relative z-10 mb-8 text-3xl font-bold text-white">Browse by Tag</h2>

    <div class="tag-cloud glass-card border-l-primary relative z-10 border-l-3">
      {#each groupedTags as [letter, tagsInGroup] (letter)}
        <div class="tag-group">
          <h4 class="letter-heading mb-2">{letter}</h4>
          <ul class="space-y-1">
            {#each tagsInGroup as tag (tag.name)}
              <li>
                <Link
                  href={`/journal/tags/${encodeURIComponent(tag.name)}`}
                  className="tag-item"
                  style="--tag-size: {getTagSize(tag.count, maxCount)}; --tag-color: {getTagColor(
                    tag.name
                  )};"
                >
                  {tag.name} <span class="tag-count">({tag.count})</span>
                </Link>
              </li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>
  </div>
</PageContainer>

<style>
  .tag-cloud-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 1rem;
  }

  .tag-cloud {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 2rem;
  }

  .letter-heading {
    color: white;
    font-weight: 600;
    border-bottom: 2px solid rgba(156, 163, 175, 0.75);
    padding-bottom: 0.25rem;
  }

  :global(.tag-item) {
    display: block;
    font-size: calc(var(--tag-size) * 1rem);
    color: var(--tag-color);
    transition: all 0.2s ease;
    opacity: 0.8;
  }

  :global(.tag-item:hover) {
    opacity: 1;
    transform: translateX(5px);
  }

  .tag-count {
    font-size: 0.8em;
    opacity: 0.7;
  }
</style>
