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
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }

  // Close menu on navigation
  function handleNavigation() {
    if (isMenuOpen) {
      isMenuOpen = false
      document.body.style.overflow = ''
    }
  }

  // Close menu on ESC key
  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape' && isMenuOpen) {
      isMenuOpen = false
      document.body.style.overflow = ''
    }
  }

  // Handle scroll events for header appearance
  function handleScroll() {
    scrollY = window.scrollY
    isScrolled = scrollY > 20
  }

  onMount(() => {
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('keydown', handleKeydown)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('keydown', handleKeydown)
    }
  })
</script>

<a href="#main-content" class="absolute top-[-40px] left-0 bg-primary text-white p-2 z-50 transition-all duration-200 focus:top-0">Skip to main content</a>

<header
  bind:this={headerElement}
  class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full {isScrolled ? 'bg-background/90 backdrop-blur-md shadow-lg' : 'bg-background/70 backdrop-blur-sm'}"
>
  <div class="absolute top-0 left-0 w-full h-0.5 bg-header-glow bg-300-100 animate-gradient-shift"></div>
  <div class="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center py-4 md:space-x-10">
      <!-- Logo -->
      <div class="flex justify-start lg:w-0 lg:flex-1">
        <a
          href="/"
          class="flex items-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-background rounded-md relative transition-transform duration-200 hover:-translate-y-0.5 overflow-hidden"
          aria-label="SvelteKit.Blog Home"
          data-sveltekit-preload-data="hover"
          tabindex="0"
          aria-current={$page.url.pathname === '/' ? 'page' : undefined}
        >
          <span class="text-2xl font-bold text-white font-sans tracking-tight z-10 relative">SvelteKit<span class="text-primary">.</span>Blog</span>
        </a>
      </div>

      <!-- Mobile menu button - properly attached directly to button -->
      <div class="md:hidden">
        <button
          type="button"
          class="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
          aria-expanded={isMenuOpen}
          aria-label="Toggle menu"
          on:click={toggleMenu}
        >
          <span class="sr-only">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
          {#if isMenuOpen}
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          {:else}
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          {/if}
        </button>
      </div>

      <!-- Desktop navigation -->
      <nav class="hidden md:flex space-x-10" aria-label="Main navigation">
        <ul class="flex items-center space-x-6">
          <li>
            <Link
              href="/about"
              variant="nav"
              active={$page.url.pathname.includes('/about')}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/journal"
              variant="nav"
              active={$page.url.pathname.includes('/journal')}
            >
              Journal
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              variant="nav"
              active={$page.url.pathname.includes('/contact')}
            >
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
      class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
      transition:slide={{ duration: 300, axis: 'y' }}
    >
      <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-background/95 backdrop-blur-md divide-y-2 divide-gray-700">
        <div class="pt-5 pb-6 px-5">
          <div class="flex items-center justify-between">
            <div>
              <a
                href="/"
                class="inline-block focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded-md"
                on:click={handleNavigation}
                tabindex="0"
                aria-label="SvelteKit.Blog Home"
              >
                <span class="text-2xl font-bold text-white font-sans tracking-tight">SvelteKit<span class="text-primary">.</span>Blog</span>
              </a>
            </div>
            <div class="-mr-2">
              <button
                type="button"
                class="rounded-md p-2 inline-flex items-center justify-center text-white hover:text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
                on:click={toggleMenu}
              >
                <span class="sr-only">Close menu</span>
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div class="mt-6">
            <nav class="grid gap-y-8">
              <a
                href="/about"
                class="block py-3 text-lg font-medium text-white/80 hover:text-white relative pl-4 {$page.url.pathname.includes('/about') ? 'text-white' : ''}"
                aria-current={$page.url.pathname.includes('/about') ? 'page' : undefined}
                on:click={handleNavigation}
                tabindex="0"
              >
                <span class="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-primary/30 {$page.url.pathname.includes('/about') ? 'opacity-100' : 'opacity-0'} transition-all duration-200"></span>
                About
              </a>
              <a
                href="/journal"
                class="block py-3 text-lg font-medium text-white/80 hover:text-white relative pl-4 {$page.url.pathname.includes('/journal') ? 'text-white' : ''}"
                aria-current={$page.url.pathname.includes('/journal') ? 'page' : undefined}
                on:click={handleNavigation}
                tabindex="0"
              >
                <span class="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-primary/30 {$page.url.pathname.includes('/journal') ? 'opacity-100' : 'opacity-0'} transition-all duration-200"></span>
                Journal
              </a>
              <a
                href="/contact"
                class="block py-3 text-lg font-medium text-white/80 hover:text-white relative pl-4 {$page.url.pathname.includes('/contact') ? 'text-white' : ''}"
                aria-current={$page.url.pathname.includes('/contact') ? 'page' : undefined}
                on:click={handleNavigation}
                tabindex="0"
              >
                <span class="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-primary/30 {$page.url.pathname.includes('/contact') ? 'opacity-100' : 'opacity-0'} transition-all duration-200"></span>
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
