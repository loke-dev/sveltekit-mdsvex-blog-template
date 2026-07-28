<script lang="ts">
  export let title: string
  export let subtitle: string
  export let description: string = ""
</script>

<div class="page-header">
  <h2 class="text-primary font-semibold tracking-wide uppercase">{title}</h2>
  <h3 class="mb-4 text-3xl leading-8 font-extrabold tracking-tight text-gray-100 sm:text-4xl">
    {subtitle}
  </h3>
  {#if description}
    <p class="mt-4 max-w-2xl text-lg leading-6 text-gray-300">
      {description}
    </p>
  {/if}
</div>

<svelte:head>
  <title>{title} | Loke.dev</title>

  <meta property="og:site_name" content="Loke.dev" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
</svelte:head>

<style>
  .page-header {
    margin-bottom: 3rem;
  }
</style>
