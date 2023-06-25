<script lang="ts">
  import Hero from "$src/lib/components/Hero.svelte"
</script>

<svelte:head>
  <title>Loke.dev</title>
  <meta
    name="description"
    content="Loke is a frontend developer based in Lund, Sweden. Read more about me or what services I can help you with."
  />
  <meta name="Cache-Control" content="max-age=1, stale-while-revalidate=59" />
</svelte:head>

<section class="">
  <Hero />

  <div class="flex flex-col items-center text-center mt-20">
    <p>
      Contact me via <a href="mailto:hello@loke.dev">Email</a> or find me on other medias:
      <a href="https://github.com/loke-dev">Github</a>
      | <a href="https://www.linkedin.com/in/lokecarlsson/">Linkedin</a>
      | <a href="https://twitter.com/loke_dev">Twitter</a>
    </p>
  </div>
</section>
