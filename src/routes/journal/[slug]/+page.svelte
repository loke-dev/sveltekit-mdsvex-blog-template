<script lang="ts">
  import type { PageData } from "./$types"
  import type { SvelteComponentTyped } from "svelte/internal"
  import PageHead from "$components/PageHead.svelte"

  import "$styles/syntax.css"

  export let data: PageData

  type C = $$Generic<typeof SvelteComponentTyped<any, any, any>>
  const component = data.component as unknown as C
</script>

<PageHead title={data.frontmatter.title} description={data.frontmatter.description} />

<article class="prose prose-lg">
  <a href="/journal" class="flex gap-2 mb-8 items-center">❮ Back to Journal </a>
  <!-- Article body -->
  <svelte:component this={component} />
</article>
