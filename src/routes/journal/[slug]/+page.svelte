<script lang="ts">
  import type { PageData } from "./$types"
  import type { SvelteComponentTyped } from "svelte/internal"
  import PageHead from "$components/PageHead.svelte"
  import ArticleTitle from "$components/ArticleTitle.svelte"
  import ArticleMeta from "$components/ArticleMeta.svelte"

  export let data: PageData

  console.log(data)

  type C = $$Generic<typeof SvelteComponentTyped<any, any, any>>
  const component = data.component as unknown as C
</script>

<PageHead title={data.frontmatter.title} description={data.frontmatter.description} />
<ArticleTitle title={data.frontmatter.title} />
<ArticleMeta author={data.frontmatter.author} date={data.frontmatter.date} />

<svelte:component this={component} />
