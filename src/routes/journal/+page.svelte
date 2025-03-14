<script lang="ts">
  import Patterns from "$lib/components/Patterns.svelte"
  import PostCard from "$lib/components/PostCard.svelte"

  /** @type {any} */
  export let data
  const { posts, tags } = data

  // Get top tags for minimal browse section
  const topTags = tags
    .sort((a: {count: number}, b: {count: number}) => b.count - a.count)
    .slice(0, 6) // Show only top 6 tags
</script>

<svelte:head>
  <title>Journal - loke.dev</title>
  <meta name="description" content="Some of my written down thought, guides and blog posts" />
  <meta name="Cache-Control" content="max-age=1, stale-while-revalidate=59" />
</svelte:head>

<Patterns variant="2" />

<div class="content">
  <h1 class="mb-6">Let's learn together!</h1>

  <div class="mb-8">
    <div class="flex flex-wrap gap-3 items-center">
      <span class="text-gray-400">Browse by topic:</span>
      <a href="/journal/tags" class="tag-pill">all topics</a>
      {#if topTags && topTags.length > 0}
        {#each topTags as tag}
          <a
            href={`/journal/tags/${encodeURIComponent(tag.name)}`}
            class="tag-pill"
          >
            {tag.name.toLowerCase()}
          </a>
        {/each}
      {/if}
    </div>
  </div>

  <div class="posts-grid">
    {#if posts}
      {#each posts as post}
        <PostCard {post} />
      {/each}
    {/if}
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
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    font-size: 0.75rem;
    background-color: rgba(75, 85, 99, 0.3);
    color: #9CA3AF;
    transition: all 0.2s ease;
  }

  .tag-pill:hover {
    background-color: rgba(75, 85, 99, 0.5);
    color: #D1D5DB;
  }

  .posts-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-top: 2rem;
  }

  @media (min-width: 640px) {
    .posts-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>
