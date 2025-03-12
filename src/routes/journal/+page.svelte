<script>
  import Patterns from "$src/lib/components/Patterns.svelte"

  export let data
  const { posts } = data
</script>

<svelte:head>
  <title>Journal - loke.dev</title>
  <meta name="description" content="Some of my written down thought, guides and blog posts" />
  <meta name="Cache-Control" content="max-age=1, stale-while-revalidate=59" />
</svelte:head>

<Patterns variant="2" />

<div class="content">
  <h1 class="mb-6">Let's learn together!</h1>

  <div class="mb-6">
    <a href="/journal/tags" class="text-blue-400 hover:underline">Browse by tags</a>
  </div>

  <ul>
    <div class="mt-6 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-12">
      {#if posts}
        {#each posts as { slug, title, description, date, tags }}
          <div>
            <a href={`/journal/${slug}`} class="mt-2 block group">
              <p class="text-sm text-gray-500 mb-1">
                <time dateTime={date}>{new Date(date).toLocaleDateString("sv-SE")}</time>
              </p>
              <p class="text-xl font-semibold text-gray-100 group-hover:underline">{title}</p>
              <p class="mt-3 text-base text-gray-500">{description}</p>

              {#if tags && tags.length > 0}
                <div class="mt-3 flex flex-wrap gap-2">
                  {#each tags as tag}
                    <a
                      href={`/journal/tags/${encodeURIComponent(tag)}`}
                      class="px-2 py-0.5 bg-gray-800 rounded-full text-xs hover:bg-gray-700 transition-colors"
                      on:click|stopPropagation
                    >
                      {tag}
                    </a>
                  {/each}
                </div>
              {/if}

              <p class="mt-3 group-hover:underline">Read full story</p>
            </a>
          </div>
        {/each}
      {/if}
    </div>
  </ul>
</div>

<style>
  .content {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 1rem;
  }
</style>
