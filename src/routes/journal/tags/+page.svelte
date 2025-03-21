<script lang="ts">
  import Link from "$lib/components/Link.svelte"
  import { getTagColor } from "$lib/utils/tagColors";
  import type { PageData } from './$types'
  import PageContainer from "$lib/components/PageContainer.svelte";
  import PageHead from "$lib/components/PageHead.svelte";

  /** @type {import('./$types').PageData} */
  export let data: PageData
  const { tags } = data

  const importantSinglePostTags = ['svelte', 'react', 'next.js', 'typescript', 'javascript'];
  const filteredTags = tags.filter((tag: {name: string, count: number}) =>
    tag.count > 1 || importantSinglePostTags.includes(tag.name.toLowerCase())
  );

  const tagsByLetter = new Map<string, Array<{name: string, count: number, posts: any[]}>>();

  filteredTags.forEach((tag: {name: string, count: number, posts: any[]}) => {
    const firstLetter = tag.name.charAt(0).toUpperCase();
    if (!tagsByLetter.has(firstLetter)) {
      tagsByLetter.set(firstLetter, []);
    }
    tagsByLetter.get(firstLetter)?.push(tag);
  });

  const groupedTags = Array.from(tagsByLetter.entries())
    .sort((a, b) => a[0].localeCompare(b[0]));

  const popularTags = [...filteredTags]
    .sort((a, b) => b.count - a.count)
    .slice(0, 12);

  const tagColor = getTagColor('default');

  const maxCount = Math.max(...filteredTags.map(tag => tag.count));

  function getTagSize(count: number, maxCount: number): string {
    const minSize = 0.8;
    const maxSize = 1.4;
    const ratio = Math.max(0.5, count / maxCount);
    const size = minSize + ratio * (maxSize - minSize);
    return size.toFixed(2);
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
    <h2 class="text-3xl font-bold text-white mb-8 relative z-10">Browse by Tag</h2>

    <div class="tag-cloud glass-card relative z-10 border-l-3 border-l-primary">
      {#each groupedTags as [letter, tagsInGroup]}
        <div class="tag-group">
          <h4 class="letter-heading mb-2">{letter}</h4>
          <ul class="space-y-1">
            {#each tagsInGroup as tag}
              <li>
                <Link
                  href={`/journal/tags/${encodeURIComponent(tag.name)}`}
                  className="tag-item"
                  style="--tag-size: {getTagSize(tag.count, maxCount)}; --tag-color: {getTagColor(tag.name)};"
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

  .tag-item {
    display: block;
    font-size: calc(var(--tag-size) * 1rem);
    color: var(--tag-color);
    transition: all 0.2s ease;
    opacity: 0.8;
  }

  .tag-item:hover {
    opacity: 1;
    transform: translateX(5px);
  }

  .tag-count {
    font-size: 0.8em;
    opacity: 0.7;
  }
</style>