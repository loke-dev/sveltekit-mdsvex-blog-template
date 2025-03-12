<script>
  import Patterns from "$lib/components/Patterns.svelte"

  /** @type {import('./$types').PageData} */
  export let data
  const { tag, posts } = data
</script>

<svelte:head>
  <title>{tag} - Tags - loke.dev</title>
  <meta name="description" content="Blog posts tagged with {tag}" />
  <meta name="Cache-Control" content="max-age=1, stale-while-revalidate=59" />
</svelte:head>

<Patterns variant="2" />

<div class="content">
  <h1 class="mb-6">Posts tagged with "{tag}"</h1>
  <a href="/journal/tags" class="flex gap-2 mb-8 items-center">❮ Back to Tags</a>

  <ul>
    <div class="mt-6 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-12">
      {#each posts as { slug, title, description, date }}
        <div>
          <a href={`/journal/${slug}`} class="mt-2 block group">
            <p class="text-sm text-gray-500 mb-1">
              <time dateTime={date}>{new Date(date).toLocaleDateString("sv-SE")}</time>
            </p>
            <p class="text-xl font-semibold text-gray-100 group-hover:underline">{title}</p>
            <p class="mt-3 text-base text-gray-500">{description}</p>
            <p class="mt-3 group-hover:underline">Read full story</p>
          </a>
        </div>
      {/each}
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