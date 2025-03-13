<script lang="ts">
  import type { PageData } from "./$types"
  import PageHead from "$components/PageHead.svelte"
  import Comments from "$components/Comments.svelte"
  import { onMount } from 'svelte';

  import "$styles/syntax.css"

  export let data: PageData

  // Use any type for the component to avoid TypeScript errors
  const component = data.component as any;
</script>

<PageHead title={data.frontmatter.title} description={data.frontmatter.description} />

<article class="prose-lg">
  <a href="/journal" class="flex gap-2 mb-8 items-center">❮ Back to Journal </a>

  <!-- Article body -->
  <div class="prose">
    <svelte:component this={component} />
  </div>

  <!-- Comments section -->
  <Comments postSlug={data.frontmatter.slug || ''} />
</article>
