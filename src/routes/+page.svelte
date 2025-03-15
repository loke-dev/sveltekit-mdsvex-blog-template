<script lang="ts">
  import Hero from "$src/lib/components/Hero.svelte"
</script>

<svelte:head>
  <title>SvelteKit MDSvex Blog Template</title>
  <meta
    name="description"
    content="A modern, fast, and SEO-friendly blog template built with SvelteKit, MDSvex, and TailwindCSS."
  />
  <meta name="keywords" content="sveltekit, blog template, mdsvex, tailwindcss, web development, svelte" />
  <meta property="og:title" content="SvelteKit MDSvex Blog Template" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://your-site-url.com/" />
  <meta property="og:image" content="https://your-site-url.com/images/og-image.jpg" />
  <meta property="og:description" content="A modern, fast, and SEO-friendly blog template built with SvelteKit, MDSvex, and TailwindCSS." />
  <meta name="twitter:title" content="SvelteKit MDSvex Blog Template" />
  <meta name="twitter:description" content="A modern, fast, and SEO-friendly blog template built with SvelteKit, MDSvex, and TailwindCSS." />
  <meta name="twitter:image" content="https://your-site-url.com/images/og-image.jpg" />
  <meta name="Cache-Control" content="max-age=86400, stale-while-revalidate=604800" />

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "SvelteKit MDSvex Blog Template",
    "url": "https://your-site-url.com",
    "description": "A modern, fast, and SEO-friendly blog template built with SvelteKit, MDSvex, and TailwindCSS."
  }
  </script>
</svelte:head>

<section>
  <Hero />
</section>

<style>
</style>
