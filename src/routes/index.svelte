<script context="module" lang="ts">
  export const hydrate = true
  export const router = true
  export const prerender = true
</script>

<script lang="ts">
  import Hero from "$components/Hero.svelte"
</script>

<svelte:head>
  <title>Loke.dev</title>
  <meta name="description" content="Loke.dev is the personal website for Loke Carlsson" />
</svelte:head>

<section class="">
  <Hero />
</section>
