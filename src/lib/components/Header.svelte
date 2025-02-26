<script lang="ts">
  import { page } from "$app/stores"
  import { onMount } from "svelte"
  import { slide } from "svelte/transition"

  // Using Svelte 5 Runes for reactive state
  let isMenuOpen = $state(false);
  let scrollY = $state(0);
  let isScrolled = $derived(scrollY > 20);
  let headerElement: HTMLElement;

  // Toggle mobile menu with improved event handling
  function toggleMenu(event: MouseEvent) {
    // Stop event propagation to prevent immediate closing
    event.stopPropagation()

    isMenuOpen = !isMenuOpen;

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
      isMenuOpen = false;
      document.body.style.overflow = ''
    }
  }

  // Handle scroll events to add shadow and background to header
  function handleScroll() {
    scrollY = window.scrollY;
    // isScrolled is now derived automatically
  }

  // Close mobile menu on navigation
  function handleNavigation() {
    if (isMenuOpen) {
      isMenuOpen = false;
      document.body.style.overflow = ''
    }
  }

  // Handle keyboard events for accessibility
  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape' && isMenuOpen) {
      isMenuOpen = false;
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
  class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full {isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}"
>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center py-4 md:justify-start md:space-x-10">
      <!-- Logo as Home Link -->
      <div class="flex justify-start lg:w-0 lg:flex-1">
        <a
          href="/"
          class="flex items-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded-md"
          aria-label="Home"
          data-sveltekit-preload-data="hover"
          tabindex="0"
          aria-current={$page.url.pathname === '/' ? 'page' : undefined}
        >
          <span class="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">loke.dev</span>
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
        <ul class="flex items-center space-x-1">
          <li class="nav-item {$page.url.pathname.includes('/about') ? 'active' : ''}">
            <a
              href="/about"
              class="nav-link"
              aria-current={$page.url.pathname.includes('/about') ? 'page' : undefined}
              data-sveltekit-preload-data="hover"
              tabindex="0"
            >
              About
            </a>
          </li>
          <li class="nav-item {$page.url.pathname.includes('/journal') ? 'active' : ''}">
            <a
              href="/journal"
              class="nav-link"
              aria-current={$page.url.pathname.includes('/journal') ? 'page' : undefined}
              data-sveltekit-preload-data="hover"
              tabindex="0"
            >
              Journal
            </a>
          </li>
          <li class="nav-item {$page.url.pathname.includes('/contact') ? 'active' : ''}">
            <a
              href="/contact"
              class="nav-link"
              aria-current={$page.url.pathname.includes('/contact') ? 'page' : undefined}
              data-sveltekit-preload-data="hover"
              tabindex="0"
            >
              Contact
            </a>
          </li>
          <!-- Add more nav items here in the future -->
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
      <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-background/95 backdrop-blur-sm divide-y-2 divide-gray-700">
        <div class="pt-5 pb-6 px-5">
          <div class="flex items-center justify-between">
            <div>
              <a
                href="/"
                class="inline-block focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded-md"
                on:click={handleNavigation}
                tabindex="0"
              >
                <span class="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">loke.dev</span>
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
              <!-- Add more mobile nav items here in the future -->
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
    padding: 8px 16px;
    background-color: #000;
    color: #fff;
    z-index: 100;
    transition: top 0.2s ease;
    border-radius: 0 0 4px 0;
  }

  .skip-link:focus {
    top: 0;
  }

  .nav-item {
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
  }

  .nav-link {
    position: relative;
    display: inline-block;
    padding: 0.5rem 1rem;
    font-weight: 600;
    color: white;
    text-decoration: none;
    transition: all 0.3s ease;
    border-radius: 0.375rem;
  }

  .nav-link:hover {
    color: theme('colors.primary');
    background-color: rgba(255, 255, 255, 0.05);
  }

  .nav-link:focus {
    outline: none;
    color: theme('colors.primary');
    box-shadow: 0 0 0 2px theme('colors.primary');
  }

  .nav-item.active .nav-link {
    color: theme('colors.primary');
  }

  .nav-item.active .nav-link::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 50%;
    transform: translateX(-50%);
    width: 30px;
    height: 3px;
    background: linear-gradient(to right, theme('colors.primary'), theme('colors.secondary'));
    border-radius: 3px;
  }

  .mobile-nav-link {
    display: block;
    padding: 0.75rem;
    font-size: 1.125rem;
    font-weight: 500;
    color: white;
    border-radius: 0.375rem;
    transition: all 0.2s ease;
  }

  .mobile-nav-link:hover {
    background-color: rgba(255, 255, 255, 0.05);
    color: theme('colors.primary');
  }

  .mobile-nav-link:focus {
    outline: none;
    color: theme('colors.primary');
    box-shadow: 0 0 0 2px theme('colors.primary');
  }

  .active-mobile {
    color: theme('colors.primary');
    background: linear-gradient(to right, rgba(255, 41, 93, 0.1), rgba(255, 186, 2, 0.05));
    border-left: 3px solid theme('colors.primary');
  }
</style>
