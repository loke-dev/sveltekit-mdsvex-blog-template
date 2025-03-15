<script lang="ts">
  import Patterns from "$lib/components/Patterns.svelte"
  import Link from "$lib/components/Link.svelte"
  import type { PageData } from './$types'

  /** @type {import('./$types').PageData} */
  export let data: PageData
  const { tags } = data

  // Filter out tags with only 1 post, except for a few important ones
  const importantSinglePostTags = ['svelte', 'react', 'next.js', 'typescript', 'javascript'];
  const filteredTags = tags.filter((tag: {name: string, count: number}) =>
    tag.count > 1 || importantSinglePostTags.includes(tag.name.toLowerCase())
  );

  // Group tags by first letter for better organization
  const tagsByLetter = new Map<string, Array<{name: string, count: number, posts: any[]}>>();

  filteredTags.forEach((tag: {name: string, count: number, posts: any[]}) => {
    const firstLetter = tag.name.charAt(0).toUpperCase();
    if (!tagsByLetter.has(firstLetter)) {
      tagsByLetter.set(firstLetter, []);
    }
    tagsByLetter.get(firstLetter)?.push(tag);
  });

  // Convert to array and sort alphabetically
  const groupedTags = Array.from(tagsByLetter.entries())
    .sort((a, b) => a[0].localeCompare(b[0]));

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
  <div class="tags-header">
    <h2 class="text-primary font-semibold tracking-wide uppercase">Journal</h2>
    <h3 class="text-3xl leading-8 font-extrabold tracking-tight text-gray-100 sm:text-4xl mb-6">
      Topics
    </h3>
    <Link href="/journal" className="back-link">❮ Back to Journal</Link>
  </div>

  <div class="mb-12">
    <h2 class="text-xl font-semibold mb-4">Popular Topics</h2>
    <div class="flex flex-wrap gap-3">
      {#each popularTags as tag}
        <Link
          href={`/journal/tags/${encodeURIComponent(tag.name)}`}
          className="tag-pill"
        >
          {tag.name.toLowerCase()} <span class="text-gray-400">({tag.count})</span>
        </Link>
      {/each}
    </div>
  </div>

  <div class="all-topics">
    <h3 class="text-xl font-bold mb-4">All Topics</h3>
    <div class="tag-groups">
      {#each groupedTags as [letter, tagsInGroup]}
        <div class="tag-group">
          <h4 class="letter-heading mb-2">{letter}</h4>
          <ul class="space-y-1">
            {#each tagsInGroup as tag}
              <li>
                <Link href={`/journal/tags/${encodeURIComponent(tag.name)}`} className="tag-link">
                  {tag.name} <span class="text-gray-500">({tag.count})</span>
                </Link>
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
    position: relative;
  }

  .tags-header {
    margin-bottom: 2rem;
  }

  .tag-groups {
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
</style>