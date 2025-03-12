<script>
  import Patterns from "$lib/components/Patterns.svelte"

  /** @type {import('./$types').PageData} */
  export let data
  const { tags } = data
</script>

<svelte:head>
  <title>Tags - loke.dev</title>
  <meta name="description" content="Browse blog posts by tag" />
  <meta name="Cache-Control" content="max-age=1, stale-while-revalidate=59" />
</svelte:head>

<Patterns variant="2" />

<div class="content">
  <h1 class="mb-6">Browse by Tag</h1>
  <a href="/journal" class="flex gap-2 mb-8 items-center">❮ Back to Journal</a>

  <div class="mb-10">
    <h2 class="text-xl font-semibold mb-4">All Tags</h2>
    <div class="flex flex-wrap gap-2">
      {#each tags as tag}
        <a
          href={`/journal/tags/${encodeURIComponent(tag.name)}`}
          class="px-3 py-1 bg-gray-800 rounded-full text-sm hover:bg-gray-700 transition-colors"
        >
          {tag.name} <span class="text-gray-400">({tag.count})</span>
        </a>
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
</style>