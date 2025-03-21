<script lang="ts">
  import PostCard from "$lib/components/PostCard.svelte"
  import Link from "$lib/components/Link.svelte"
  import PageContainer from "$lib/components/PageContainer.svelte"
  import PageHead from "$lib/components/PageHead.svelte"
  import { onMount } from "svelte"

  /** @type {any} */
  export let data
  const { posts, tags } = data

  const topTags = tags
    .sort((a: {count: number}, b: {count: number}) => b.count - a.count)
    .slice(0, 6)

  let visible = false;

  onMount(() => {
    setTimeout(() => {
      visible = true;
    }, 100);
  });
</script>

<svelte:head>
  <title>Journal - loke.dev</title>
  <meta name="description" content="Some of my written down thought, guides and blog posts" />
  <meta name="Cache-Control" content="max-age=1, stale-while-revalidate=59" />
</svelte:head>

<PageContainer>
  <PageHead
    title="Journal"
    subtitle="Let's learn together!"
  />

  <div class="mb-8">
    <div class="flex flex-wrap gap-3 items-center">
      <span class="text-gray-400">Browse by topic:</span>
      <Link href="/journal/tags" className="tag-pill">all topics</Link>
      {#if topTags && topTags.length > 0}
        {#each topTags as tag}
          <Link
            href={`/journal/tags/${encodeURIComponent(tag.name)}`}
            className="tag-pill"
          >
            {tag.name.toLowerCase()}
          </Link>
        {/each}
      {/if}
    </div>
  </div>

  <div class="content-grid">
    {#if posts}
      {#each posts as post, i}
        <div class="content-item" style="--delay: {i * 0.05}s">
          <PostCard {post} />
        </div>
      {/each}
    {/if}
  </div>
</PageContainer>

<style>
  .content-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-top: 3rem;
  }

  @media (min-width: 640px) {
    .content-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .tag-pill {
    display: inline-block;
    padding: 0.35rem 0.75rem;
    border-radius: 9999px;
    font-size: 0.875rem;
    font-weight: 500;
    background: rgba(31, 41, 55, 0.4);
    color: #fff;
    transition: all 0.2s ease;
  }

  .tag-pill:hover {
    background: var(--color-primary);
  }
</style>
