<script lang="ts">
  import Hero from "$src/lib/components/Hero.svelte"
</script>

<svelte:head>
  <title>Loke.dev | Web Developer</title>
  <meta
    name="description"
    content="Loke is a web developer based in Sweden. Specializing in fullstack development with expertise in React, Svelte, Node.js, and TypeScript."
  />
  <meta name="keywords" content="web developer, fullstack developer, software engineer, Sweden, React, Svelte, Node.js, TypeScript" />
  <meta property="og:title" content="Loke.dev | Web Developer" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://loke.dev/" />
  <meta property="og:image" content="https://loke.dev/images/og-image.jpg" />
  <meta property="og:description" content="Loke is a web developer based in Sweden. Specializing in fullstack development with expertise in React, Svelte, Node.js, and TypeScript." />
  <meta name="twitter:title" content="Loke.dev | Web Developer" />
  <meta name="twitter:description" content="Loke is a web developer based in Sweden. Specializing in fullstack development with expertise in React, Svelte, Node.js, and TypeScript." />
  <meta name="twitter:image" content="https://loke.dev/images/og-image.jpg" />
  <meta name="Cache-Control" content="max-age=86400, stale-while-revalidate=604800" />

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Loke",
    "url": "https://loke.dev",
    "jobTitle": "Web Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "Loke.dev"
    },
    "sameAs": [
      "https://github.com/loke-dev",
      "https://twitter.com/loke_dev"
    ]
  }
  </script>
</svelte:head>

<section>
  <Hero />
</section>

<style>
</style>
