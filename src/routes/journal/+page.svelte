<script>
  import Patterns from "$src/lib/components/Patterns.svelte"

  /** @type {import('./$types').PageData} */
  export let data
  const { posts } = data
</script>

<svelte:head>
  <title>Journal - loke.dev</title>
  <meta name="description" content="Some of my written down thought, guides and blog posts" />
</svelte:head>

<Patterns variant="2" />

<div class="content">
  <h1 class="mb-6">Let's learn together!</h1>

  <ul>
    <div class="mt-6 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-12">
      {#if posts}
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
      {/if}
    </div>
  </ul>
</div>
