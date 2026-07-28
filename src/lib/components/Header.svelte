<script lang="ts">
  import { page } from "$app/stores"
  import { onMount } from "svelte"
  import { slide } from "svelte/transition"
  import Link from "./Link.svelte"

  // Simple, single state variable for menu
  let isMenuOpen = false
  let scrollY = 0
  let headerElement: HTMLElement
  let isScrolled = false

  // Simple toggle function
  const toggleMenu = () => {
    isMenuOpen = !isMenuOpen

    // Prevent scrolling when menu is open
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
  }

  // Close menu on navigation
  function handleNavigation() {
    if (isMenuOpen) {
      isMenuOpen = false
      document.body.style.overflow = ""
    }
  }

  // Close menu on ESC key
  function handleKeydown(event: KeyboardEvent) {
    if (event.key === "Escape" && isMenuOpen) {
      isMenuOpen = false
      document.body.style.overflow = ""
    }
  }

  // Handle scroll events for header appearance
  function handleScroll() {
    scrollY = window.scrollY
    isScrolled = scrollY > 20
  }

  onMount(() => {
    window.addEventListener("scroll", handleScroll)
    window.addEventListener("keydown", handleKeydown)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("keydown", handleKeydown)
    }
  })
</script>

<a
  href="#main-content"
  class="bg-primary absolute top-[-40px] left-0 z-50 p-2 text-white transition-all duration-200 focus:top-0"
  >Skip to main content</a
>

<header
  bind:this={headerElement}
  class="fixed top-0 right-0 left-0 z-50 w-full transition-all duration-300 {isScrolled
    ? 'bg-background/90 shadow-lg backdrop-blur-md'
    : 'bg-background/70 backdrop-blur-sm'}"
>
  <div
    class="bg-header-glow bg-300-100 animate-gradient-shift absolute top-0 left-0 h-0.5 w-full"
  ></div>
  <div class="mx-auto max-w-[900px] px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between py-4 md:space-x-10">
      <!-- Logo -->
      <div class="flex justify-start lg:w-0 lg:flex-1">
        <a
          href="/"
          class="focus:ring-primary focus:ring-offset-background relative flex items-center overflow-hidden rounded-md transition-transform duration-200 hover:-translate-y-0.5 focus:ring-2 focus:outline-none"
          aria-label="SvelteKit.Blog Home"
          data-sveltekit-preload-data="hover"
          tabindex="0"
          aria-current={$page.url.pathname === "/" ? "page" : undefined}
        >
          <span class="relative z-10 font-sans text-2xl font-bold tracking-tight text-white"
            >SvelteKit<span class="text-primary">.</span>Blog</span
          >
        </a>
      </div>

      <!-- Mobile menu button - properly attached directly to button -->
      <div class="md:hidden">
        <button
          type="button"
          class="hover:text-primary focus:ring-primary inline-flex items-center justify-center rounded-md p-2 text-white focus:ring-2 focus:outline-none focus:ring-inset"
          aria-expanded={isMenuOpen}
          aria-label="Toggle menu"
          on:click={toggleMenu}
        >
          <span class="sr-only">{isMenuOpen ? "Close menu" : "Open menu"}</span>
          {#if isMenuOpen}
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          {:else}
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          {/if}
        </button>
      </div>

      <!-- Desktop navigation -->
      <nav class="hidden space-x-10 md:flex" aria-label="Main navigation">
        <ul class="flex items-center space-x-6">
          <li>
            <Link href="/about" variant="nav" active={$page.url.pathname.includes("/about")}>
              About
            </Link>
          </li>
          <li>
            <Link href="/journal" variant="nav" active={$page.url.pathname.includes("/journal")}>
              Journal
            </Link>
          </li>
          <li>
            <Link href="/contact" variant="nav" active={$page.url.pathname.includes("/contact")}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>

  <!-- Mobile menu -->
  {#if isMenuOpen}
    <div
      class="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
      transition:slide={{ duration: 300, axis: "y" }}
    >
      <div
        class="ring-opacity-5 bg-background/95 divide-y-2 divide-gray-700 rounded-lg shadow-lg ring-1 ring-black backdrop-blur-md"
      >
        <div class="px-5 pt-5 pb-6">
          <div class="flex items-center justify-between">
            <div>
              <a
                href="/"
                class="focus:ring-primary focus:ring-offset-background inline-block rounded-md focus:ring-2 focus:ring-offset-2 focus:outline-none"
                on:click={handleNavigation}
                tabindex="0"
                aria-label="SvelteKit.Blog Home"
              >
                <span class="font-sans text-2xl font-bold tracking-tight text-white"
                  >SvelteKit<span class="text-primary">.</span>Blog</span
                >
              </a>
            </div>
            <div class="-mr-2">
              <button
                type="button"
                class="hover:text-primary focus:ring-primary inline-flex items-center justify-center rounded-md p-2 text-white focus:ring-2 focus:outline-none focus:ring-inset"
                on:click={toggleMenu}
              >
                <span class="sr-only">Close menu</span>
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div class="mt-6">
            <nav class="grid gap-y-8">
              <a
                href="/about"
                class="relative block py-3 pl-4 text-lg font-medium text-white/80 hover:text-white {$page.url.pathname.includes(
                  '/about'
                )
                  ? 'text-white'
                  : ''}"
                aria-current={$page.url.pathname.includes("/about") ? "page" : undefined}
                on:click={handleNavigation}
                tabindex="0"
              >
                <span
                  class="bg-primary/30 absolute top-1/2 left-0 h-6 w-1 -translate-y-1/2 {$page.url.pathname.includes(
                    '/about'
                  )
                    ? 'opacity-100'
                    : 'opacity-0'} transition-all duration-200"
                ></span>
                About
              </a>
              <a
                href="/journal"
                class="relative block py-3 pl-4 text-lg font-medium text-white/80 hover:text-white {$page.url.pathname.includes(
                  '/journal'
                )
                  ? 'text-white'
                  : ''}"
                aria-current={$page.url.pathname.includes("/journal") ? "page" : undefined}
                on:click={handleNavigation}
                tabindex="0"
              >
                <span
                  class="bg-primary/30 absolute top-1/2 left-0 h-6 w-1 -translate-y-1/2 {$page.url.pathname.includes(
                    '/journal'
                  )
                    ? 'opacity-100'
                    : 'opacity-0'} transition-all duration-200"
                ></span>
                Journal
              </a>
              <a
                href="/contact"
                class="relative block py-3 pl-4 text-lg font-medium text-white/80 hover:text-white {$page.url.pathname.includes(
                  '/contact'
                )
                  ? 'text-white'
                  : ''}"
                aria-current={$page.url.pathname.includes("/contact") ? "page" : undefined}
                on:click={handleNavigation}
                tabindex="0"
              >
                <span
                  class="bg-primary/30 absolute top-1/2 left-0 h-6 w-1 -translate-y-1/2 {$page.url.pathname.includes(
                    '/contact'
                  )
                    ? 'opacity-100'
                    : 'opacity-0'} transition-all duration-200"
                ></span>
                Contact
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  {/if}
</header>

<!-- Spacer to prevent content from being hidden under fixed header -->
<div class="h-20"></div>
