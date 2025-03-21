<script lang="ts">
  import Header from "$src/lib/components/Header.svelte"
  import Footer from "$src/lib/components/Footer.svelte"
  import { dev } from '$app/environment'
  import { inject } from '@vercel/analytics'
  import { preloadData } from '$app/navigation'
  import { page } from '$app/stores'
  import GridBackground from "$src/lib/components/GridBackground.svelte"

  import "$styles/app.css"

  // Only inject Vercel Analytics in production
  if (!dev) {
    try {
      // Use the latest API with configurable deployment basepath
      inject({
        mode: 'production',
        debug: false,
        beforeSend: (data) => {
          // You can modify the data before it's sent
          return data;
        }
      });
    } catch (error) {
      console.log('Vercel Analytics not available')
    }
  }

  // Handle prefetching for links that don't have explicit preload attributes
  function handleMouseMove(e: MouseEvent): void {
    const target = e.target as HTMLElement;
    const anchor = target.closest('a');
    if (anchor && anchor.href && anchor.href.startsWith(window.location.origin) && !anchor.hasAttribute('data-sveltekit-preload-data')) {
      preloadData(anchor.href);
    }
  }

  // Check if we're on the homepage
  $: isHomepage = $page.url.pathname === '/';
</script>

<svelte:head>
  <meta name="og:title" content="SvelteKit MDSvex Blog Template" />
  <meta
    name="og:description"
    content="A modern, fast, and SEO-friendly blog template built with SvelteKit, MDSvex, and TailwindCSS."
  />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:creator" content="@your_twitter_handle" />
</svelte:head>

<!-- Enable prefetching for the entire app -->
<svelte:window on:mousemove={handleMouseMove} />

<!-- Only show grid background on non-homepage pages to avoid duplication -->
{#if !isHomepage}
  <GridBackground />
{/if}

<Header />

<main id="main-content" class="flex flex-1 flex-col w-full m-auto box-border mb-20 max-w-[900px] relative z-10 px-4 sm:px-6 lg:px-8">
  <slot />
</main>

<Footer />
