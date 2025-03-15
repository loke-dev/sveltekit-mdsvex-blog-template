<script lang="ts">
  import Patterns from "$lib/components/Patterns.svelte"
  import PostCard from "$lib/components/PostCard.svelte"

  /** @type {import('./$types').PageData} */
  export let data
  const { tag, posts, relatedTags } = data
</script>

<svelte:head>
  <title>{tag} - loke.dev</title>
  <meta name="description" content="Blog posts about {tag}" />
  <meta name="Cache-Control" content="max-age=1, stale-while-revalidate=59" />
</svelte:head>

<Patterns variant="2" />

<div class="content">
  <div class="mb-8">
    <a href="/journal/tags" class="flex gap-2 mb-4 items-center">❮ Back to Topics</a>
    <h1 class="text-3xl font-bold mb-2">{tag.toLowerCase()}</h1>
    <p class="text-gray-400">{posts.length} {posts.length === 1 ? 'post' : 'posts'}</p>
  </div>

  {#if relatedTags && relatedTags.length > 0}
    <div class="mb-8">
      <h2 class="text-xl font-semibold mb-3">Related Topics</h2>
      <div class="flex flex-wrap gap-3">
        {#each relatedTags as relatedTag}
          <a
            href={`/journal/tags/${encodeURIComponent(relatedTag)}`}
            class="tag-pill"
          >
            {relatedTag.toLowerCase()}
          </a>
        {/each}
      </div>
    </div>
  {/if}

  <div class="posts-grid">
    {#each posts as post}
      <PostCard {post} />
    {/each}
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

  .posts-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  @media (min-width: 640px) {
    .posts-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>