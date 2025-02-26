<script lang="ts">
  import Header from "$src/lib/components/Header.svelte"
  import Footer from "$src/lib/components/Footer.svelte"
  import { dev } from '$app/environment'
  import { inject } from '@vercel/analytics'
  import { preloadData } from '$app/navigation'

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
  function handleMouseMove(e: MouseEvent) {
    const target = e.target as HTMLElement;
    const anchor = target.closest('a');
    if (anchor && anchor.href && anchor.href.startsWith(window.location.origin) && !anchor.hasAttribute('data-sveltekit-preload-data')) {
      preloadData(anchor.href);
    }
  }
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

<!-- Enable prefetching for the entire app -->
<svelte:window on:mousemove={handleMouseMove} />

<Header />

<main id="main-content" class="flex flex-1 flex-col p-8 w-full m-auto box-border mt-6 mb-20 max-w-[900px]">
  <slot />
</main>

<Footer />
