<script>
  import Header from "$src/lib/components/Header.svelte"
  import Footer from "$src/lib/components/Footer.svelte"
  import { dev } from '$app/environment'
  import { inject } from '@vercel/analytics'
  import { page } from '$app/stores'
  import GridBackground from "$src/lib/components/GridBackground.svelte"

  import "$styles/app.css"

  // Only inject Vercel Analytics in production
  if (!dev) {
    try {
      inject({
        mode: 'production',
        debug: false
      });
    } catch (error) {
      console.log('Vercel Analytics not available')
    }
  }

  // Check if we're on the homepage
  $: isHomepage = $page.url.pathname === '/';
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

<!-- Only show grid background on non-homepage pages -->
{#if !isHomepage}
  <GridBackground />
{/if}

<Header />

<main id="main-content" class="flex flex-1 flex-col p-8 w-full m-auto box-border mb-20 max-w-[900px] relative z-10">
  <slot />
</main>

<Footer />
