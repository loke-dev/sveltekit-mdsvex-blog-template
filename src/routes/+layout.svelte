<script lang="ts">
  import Header from "$src/lib/components/Header.svelte"
  import Footer from "$src/lib/components/Footer.svelte"
  import { dev } from '$app/environment'
  import { inject } from '@vercel/analytics'

  import "$styles/app.css"

  inject({ mode: dev ? 'development' : 'production' })
</script>

<svelte:head>
  <meta name="og:title" content="Loke.dev" />
  <meta
    name="og:description"
    content="Loke is a web developer based in Sweden. Read more about me or what services I can help you with."
  />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:creator" content="@loke_dev" />
</svelte:head>

<Header />

<main id="main-content" class="flex flex-1 flex-col p-8 w-full m-auto box-border mt-6 mb-20 max-w-[900px]">
  <slot />
</main>

<Footer />
