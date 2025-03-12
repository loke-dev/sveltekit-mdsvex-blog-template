<script lang="ts">
  import type { PageData } from "./$types"
  import type { SvelteComponentTyped } from "svelte/internal"
  import PageHead from "$components/PageHead.svelte"

  import "$styles/syntax.css"

  export let data: PageData

  type C = $$Generic<typeof SvelteComponentTyped<any, any, any>>
  const component = data.component as unknown as C
  const { tags } = data.frontmatter
</script>

<PageHead title={data.frontmatter.title} description={data.frontmatter.description} />

<article class="prose prose-lg">
  <a href="/journal" class="flex gap-2 mb-8 items-center">❮ Back to Journal </a>

  {#if tags && tags.length > 0}
    <div class="mb-8 flex flex-wrap gap-2">
      {#each tags as tag}
        <a
          href={`/journal/tags/${encodeURIComponent(tag)}`}
          class="px-2 py-1 bg-gray-800 rounded-full text-xs hover:bg-gray-700 transition-colors no-underline"
        >
          {tag}
        </a>
      {/each}
    </div>
  {/if}

  <!-- Article body -->
  <svelte:component this={component} />
</article>
