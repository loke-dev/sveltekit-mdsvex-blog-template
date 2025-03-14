<script lang="ts">
  import { page } from "$app/stores"
  import { onMount } from "svelte"
  import { slide } from "svelte/transition"
  import Link from "./Link.svelte"

  let isMenuOpen = false
  let scrollY = 0
  let headerElement: HTMLElement
  let isScrolled = false

  // Toggle mobile menu with improved event handling
  function toggleMenu(event: MouseEvent) {
    // Stop event propagation to prevent immediate closing
    event.stopPropagation()

    isMenuOpen = !isMenuOpen

    // Prevent scrolling when menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }

  // Close menu when clicking outside
  function handleClickOutside(event: MouseEvent) {
    if (isMenuOpen && headerElement && !headerElement.contains(event.target as Node)) {
      isMenuOpen = false
      document.body.style.overflow = ''
    }
  }

  // Handle scroll events to add shadow and background to header
  function handleScroll() {
    scrollY = window.scrollY
    isScrolled = scrollY > 20
  }

  // Close mobile menu on navigation
  function handleNavigation() {
    if (isMenuOpen) {
      isMenuOpen = false
      document.body.style.overflow = ''
    }
  }

  // Handle keyboard events for accessibility
  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape' && isMenuOpen) {
      isMenuOpen = false
      document.body.style.overflow = ''
    }
  }

  onMount(() => {
    window.addEventListener('scroll', handleScroll)
    document.addEventListener('click', handleClickOutside)
    window.addEventListener('keydown', handleKeydown)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('click', handleClickOutside)
      window.removeEventListener('keydown', handleKeydown)
    }
  })
</script>

<a href="#main-content" class="skip-link">Skip to main content</a>

<header
  bind:this={headerElement}
  class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full {isScrolled ? 'bg-background/90 backdrop-blur-md shadow-lg' : 'bg-background/70 backdrop-blur-sm'}"
>
  <div class="header-glow"></div>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center py-4 md:justify-start md:space-x-10">
      <!-- Logo as Home Link -->
      <div class="flex justify-start lg:w-0 lg:flex-1">
        <a
          href="/"
          class="flex items-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded-md logo-link"
          aria-label="Home"
          data-sveltekit-preload-data="hover"
          tabindex="0"
          aria-current={$page.url.pathname === '/' ? 'page' : undefined}
        >
          <span class="text-2xl font-bold logo-text">Loke<span class="text-primary">.</span>dev</span>
        </a>
      </div>

      <!-- Mobile menu button with improved click handling -->
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
          <li class="nav-item">
            <Link
              href="/about"
              variant="nav"
              active={$page.url.pathname.includes('/about')}
            >
              About
            </Link>
          </li>
          <li class="nav-item">
            <Link
              href="/journal"
              variant="nav"
              active={$page.url.pathname.includes('/journal')}
            >
              Journal
            </Link>
          </li>
          <li class="nav-item">
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

  <!-- Mobile menu, show/hide based on menu state -->
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
                class="inline-block focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded-md logo-link"
                on:click={handleNavigation}
                tabindex="0"
              >
                <span class="text-2xl font-bold logo-text">Loke<span class="text-primary">.</span>dev</span>
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
                class="mobile-nav-link {$page.url.pathname.includes('/about') ? 'active-mobile' : ''}"
                aria-current={$page.url.pathname.includes('/about') ? 'page' : undefined}
                on:click={handleNavigation}
                tabindex="0"
              >
                About
              </a>
              <a
                href="/journal"
                class="mobile-nav-link {$page.url.pathname.includes('/journal') ? 'active-mobile' : ''}"
                aria-current={$page.url.pathname.includes('/journal') ? 'page' : undefined}
                on:click={handleNavigation}
                tabindex="0"
              >
                Journal
              </a>
              <a
                href="/contact"
                class="mobile-nav-link {$page.url.pathname.includes('/contact') ? 'active-mobile' : ''}"
                aria-current={$page.url.pathname.includes('/contact') ? 'page' : undefined}
                on:click={handleNavigation}
                tabindex="0"
              >
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

<style lang="postcss">
  .skip-link {
    position: absolute;
    top: -40px;
    left: 0;
    background: var(--color-primary);
    color: white;
    padding: 8px;
    z-index: 100;
    transition: top 0.2s;
  }

  .skip-link:focus {
    top: 0;
  }

  .header-glow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg,
      rgba(255, 41, 93, 0.7),
      rgba(255, 186, 2, 0.7),
      rgba(75, 46, 198, 0.7),
      rgba(255, 41, 93, 0.7)
    );
    background-size: 300% 100%;
    animation: gradient-shift 15s ease infinite;
  }

  @keyframes gradient-shift {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  .logo-link {
    position: relative;
    transition: transform 0.2s ease;
    overflow: hidden;
  }

  .logo-link:hover {
    transform: translateY(-1px);
  }

  .logo-text {
    position: relative;
    z-index: 1;
    color: white;
    font-weight: 800;
    letter-spacing: -0.03em;
  }

  .nav-link {
    position: relative;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.8);
    padding: 0.5rem 0;
    transition: color 0.2s ease;
  }

  .nav-link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--color-primary);
    transition: width 0.3s ease;
  }

  .nav-link:hover {
    color: white;
  }

  .nav-link:hover::after {
    width: 100%;
  }

  .nav-link.active {
    color: white;
  }

  .nav-link.active::after {
    width: 100%;
  }

  .mobile-nav-link {
    display: block;
    padding: 0.75rem 0;
    font-size: 1.125rem;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.8);
    transition: color 0.2s ease;
    position: relative;
    padding-left: 1rem;
  }

  .mobile-nav-link::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 1.5rem;
    background-color: var(--color-primary);
    opacity: 0.3;
    transition: width 0.2s ease;
  }

  .mobile-nav-link:hover {
    color: white;
  }

  .mobile-nav-link:hover::before {
    width: 4px;
  }

  .mobile-nav-link.active-mobile {
    color: white;
  }

  .mobile-nav-link.active-mobile::before {
    width: 4px;
  }
</style>
