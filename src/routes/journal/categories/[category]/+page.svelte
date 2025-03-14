<script>
  import Patterns from "$lib/components/Patterns.svelte"
  import { getCategoryColor } from "$lib/utils/categories"

  /** @type {import('./$types').PageData} */
  export let data
  const { category, posts, relatedCategories } = data
</script>

<svelte:head>
  <title>{category} - Categories - loke.dev</title>
  <meta name="description" content="Blog posts in the {category} category" />
  <meta name="Cache-Control" content="max-age=1, stale-while-revalidate=59" />
</svelte:head>

<Patterns variant="2" />

<div class="content">
  <div class="category-header" style="--category-color: {getCategoryColor(category)};">
    <h1 class="mb-2">{category}</h1>
    <p class="text-gray-400">{posts.length} {posts.length === 1 ? 'post' : 'posts'}</p>
  </div>

  <a href="/journal/categories" class="flex gap-2 mb-8 items-center">❮ Back to Categories</a>

  {#if relatedCategories && relatedCategories.length > 0}
    <div class="mb-8">
      <h2 class="text-lg font-medium mb-3">Related Categories</h2>
      <div class="flex flex-wrap gap-2">
        {#each relatedCategories as relCategory}
          <a
            href={`/journal/categories/${encodeURIComponent(relCategory.name)}`}
            class="category-pill"
            style="--category-color: {getCategoryColor(relCategory.name)};"
          >
            {relCategory.name}
          </a>
        {/each}
      </div>
    </div>
  {/if}

  <div class="posts-grid">
    {#each posts as { slug, title, description, date, tags }}
      <div class="post-card">
        <a href={`/journal/${slug}`} class="post-card-link">
          <p class="text-sm text-gray-500 mb-1">
            <time dateTime={date}>{new Date(date).toLocaleDateString("sv-SE")}</time>
          </p>
          <h2 class="text-xl font-semibold text-gray-100 group-hover:underline">{title}</h2>
          <p class="mt-3 text-base text-gray-500">{description}</p>
        </a>

        {#if tags && tags.length > 0}
          <div class="mt-3 flex flex-wrap gap-2">
            {#each tags as tag}
              <a
                href={`/journal/tags/${encodeURIComponent(tag)}`}
                class="tag-pill"
                on:click|stopPropagation
              >
                #{tag}
              </a>
            {/each}
          </div>
        {/if}
      </div>
    {/each}
  </div>
</div>

<style>
  .content {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .category-header {
    margin-bottom: 1.5rem;
    padding-bottom: 1rem;
    border-bottom: 3px solid var(--category-color, #4B5563);
  }

  .category-pill {
    display: inline-block;
    padding: 0.25rem 0.75rem;
    border-radius: 9999px;
    font-size: 0.875rem;
    font-weight: 500;
    color: white;
    background-color: var(--category-color, #4B5563);
    transition: all 0.2s ease;
  }

  .category-pill:hover {
    filter: brightness(1.1);
    transform: translateY(-1px);
  }

  .posts-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-top: 2rem;
  }

  @media (min-width: 768px) {
    .posts-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .post-card {
    padding: 1.5rem;
    border-radius: 0.5rem;
    background-color: rgba(31, 41, 55, 0.3);
    transition: all 0.2s ease;
  }

  .post-card:hover {
    background-color: rgba(31, 41, 55, 0.5);
  }

  .post-card-link {
    display: block;
  }

  .post-card-link:hover h2 {
    text-decoration: underline;
  }

  .tag-pill {
    display: inline-block;
    padding: 0.125rem 0.5rem;
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
</style>