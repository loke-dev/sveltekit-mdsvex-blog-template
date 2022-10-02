<script context="module">
  import { dev } from "$app/env"
  import Project from "$components/Project.svelte"

  export const hydrate = dev
  export const router = true
  export const prerender = true
</script>

<svelte:head>
  <title>Projects - loke.dev</title>
  <meta name="description" content="This is the short story of Loke." />
</svelte:head>

<div class="">
  <Project prefix="SaaS" title="Gitdash" image="/images/gitdash">hello world</Project>
</div>
