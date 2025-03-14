<script>
  import Patterns from "$lib/components/Patterns.svelte"
  import { getCategoryColor } from "$lib/utils/categories"

  /** @type {import('./$types').PageData} */
  export let data
  const { categories, tags } = data
</script>

<svelte:head>
  <title>Categories - loke.dev</title>
  <meta name="description" content="Browse blog posts by category and topic" />
  <meta name="Cache-Control" content="max-age=1, stale-while-revalidate=59" />
</svelte:head>

<Patterns variant="2" />

<div class="content">
  <h1 class="mb-6">Browse by Category</h1>
  <a href="/journal" class="flex gap-2 mb-8 items-center">❮ Back to Journal</a>

  <div class="mb-12">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      {#each categories as category}
        <a
          href={`/journal/categories/${encodeURIComponent(category.name)}`}
          class="category-card"
          style="--category-color: {getCategoryColor(category.name)};"
        >
          <div class="category-card-content">
            <h2 class="text-xl font-semibold">{category.name}</h2>
            <p class="text-gray-400">{category.count} {category.count === 1 ? 'post' : 'posts'}</p>
          </div>
          <div class="category-card-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </div>
        </a>
      {/each}
    </div>
  </div>

  {#if tags && tags.length > 0}
    <div class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Popular Tags</h2>
      <div class="flex flex-wrap gap-3">
        {#each tags.sort((a, b) => b.count - a.count).slice(0, 20) as tag}
          <a
            href={`/journal/tags/${encodeURIComponent(tag.name)}`}
            class="tag-pill"
          >
            #{tag.name} <span class="text-gray-500">({tag.count})</span>
          </a>
        {/each}
      </div>
    </div>
  {/if}
</div>

<style>
  .content {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .category-card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    border-radius: 0.5rem;
    background-color: rgba(31, 41, 55, 0.5);
    border-left: 4px solid var(--category-color, #4B5563);
    transition: all 0.2s ease;
  }

  .category-card:hover {
    background-color: rgba(31, 41, 55, 0.8);
    transform: translateY(-2px);
  }

  .category-card-icon {
    color: var(--category-color, #4B5563);
    opacity: 0.7;
    transition: all 0.2s ease;
  }

  .category-card:hover .category-card-icon {
    opacity: 1;
    transform: translateX(2px);
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
</style>