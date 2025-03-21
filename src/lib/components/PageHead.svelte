<script lang="ts">
  export let title: string;
  export let subtitle: string;
  export let description: string = "";
</script>

<div class="page-header">
  <h2 class="text-primary font-semibold tracking-wide uppercase">{title}</h2>
  <h3 class="text-3xl leading-8 font-extrabold tracking-tight text-gray-100 sm:text-4xl mb-4">
    {subtitle}
  </h3>
  {#if description}
    <p class="mt-4 text-lg leading-6 text-gray-300 max-w-2xl">
      {description}
    </p>
  {/if}
</div>

<style>
  .page-header {
    margin-bottom: 3rem;
  }
</style>

<svelte:head>
  <title>{title} | Loke.dev</title>

  <meta property="og:site_name" content="Loke.dev" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
</svelte:head>
