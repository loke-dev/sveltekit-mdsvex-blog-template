<script lang="ts">
  import { onMount } from "svelte"
  // import splitbee from "@splitbee/web"
  // import { dev } from "$app/env"
  import Header from "$src/lib/components/Header.svelte"
  import Footer from "$src/lib/components/Footer.svelte"

  import "$styles/app.css"

  // onMount(() => {
  //   if (!dev) {
  //     splitbee.init({
  //       scriptUrl: "/bee.js",
  //       apiUrl: "/_hive",
  //     })
  //   }
  // })
</script>

<svelte:head>
  <meta name="og:title" content="Loke.dev" />
  <meta
    name="og:description"
    content="Loke is a frontend developer based in Lund, Sweden. Read more about me or what services I can help you with."
  />
</svelte:head>

<Header />

<main class="flex flex-1 flex-col p-8 w-full m-auto box-border mt-6 mb-20 max-w-[900px]">
  <slot />
</main>

<Footer />
