<script lang="ts">
  import Patterns from "$lib/components/Patterns.svelte"
  import type { PageData } from './$types'

  /** @type {PageData} */
  export let data: PageData
  const { tags } = data

  // Filter out tags with only 1 post, except for a few important ones
  const importantSinglePostTags = ['svelte', 'react', 'next.js', 'typescript', 'javascript'];
  const filteredTags = tags.filter(tag =>
    tag.count > 1 || importantSinglePostTags.includes(tag.name.toLowerCase())
  );

  // Group tags by first letter for better organization
  const tagsByLetter = new Map<string, Array<{name: string, count: number}>>()

  filteredTags.forEach((tag: {name: string, count: number}) => {
    const firstLetter = tag.name.charAt(0).toUpperCase()
    if (!tagsByLetter.has(firstLetter)) {
      tagsByLetter.set(firstLetter, [])
    }
    tagsByLetter.get(firstLetter)?.push(tag)
  })

  // Convert to array and sort alphabetically
  const groupedTags = Array.from(tagsByLetter.entries())
    .sort((a, b) => a[0].localeCompare(b[0]))

  // Get popular tags
  const popularTags = [...filteredTags]
    .sort((a, b) => b.count - a.count)
    .slice(0, 12);
</script>

<svelte:head>
  <title>Topics - loke.dev</title>
  <meta name="description" content="Browse blog posts by topic" />
  <meta name="Cache-Control" content="max-age=1, stale-while-revalidate=59" />
</svelte:head>

<Patterns variant="2" />

<div class="content">
  <h1 class="mb-6">Topics</h1>
  <a href="/journal" class="flex gap-2 mb-8 items-center">❮ Back to Journal</a>

  <div class="mb-12">
    <h2 class="text-xl font-semibold mb-4">Popular Topics</h2>
    <div class="flex flex-wrap gap-3">
      {#each popularTags as tag}
        <a
          href={`/journal/tags/${encodeURIComponent(tag.name)}`}
          class="tag-pill"
        >
          {tag.name.toLowerCase()} <span class="text-gray-400">({tag.count})</span>
        </a>
      {/each}
    </div>
  </div>

  <div class="mb-12">
    <h2 class="text-xl font-semibold mb-4">All Topics</h2>

    <div class="tag-groups">
      {#each groupedTags as [letter, letterTags]}
        <div class="tag-group">
          <h3 class="text-lg font-medium mb-2 letter-heading">{letter}</h3>
          <ul class="space-y-2">
            {#each letterTags as tag}
              <li>
                <a
                  href={`/journal/tags/${encodeURIComponent(tag.name)}`}
                  class="tag-link"
                >
                  {tag.name.toLowerCase()} <span class="text-gray-400">({tag.count})</span>
                </a>
              </li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  .content {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .tag-pill {
    display: inline-block;
    padding: 0.25rem 0.75rem;
    border-radius: 4px;
    font-size: 0.875rem;
    background-color: rgba(75, 85, 99, 0.3);
    color: #D1D5DB;
    transition: all 0.2s ease;
  }

  .tag-pill:hover {
    background-color: rgba(75, 85, 99, 0.5);
    color: white;
  }

  .tag-groups {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 2rem;
  }

  .letter-heading {
    color: #60A5FA; /* Primary blue color */
    font-weight: 600;
    border-bottom: 2px solid rgba(96, 165, 250, 0.3);
    padding-bottom: 0.25rem;
  }

  .tag-link {
    color: #D1D5DB;
    transition: all 0.2s ease;
  }

  .tag-link:hover {
    color: white;
    text-decoration: underline;
  }
</style>