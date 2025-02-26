<script lang="ts">
  import { page } from "$app/stores"
</script>

<a href="#main-content" class="skip-link">Skip to main content</a>

<header class="bg-background p-4 flex justify-center shadow-sm" role="banner">
  <nav class="flex justify-center w-full max-w-5xl" aria-label="Main navigation">
    <ul class="relative p-0 m-0 flex justify-center items-center bg-contain h-12 list-none">
      <li class:active={$page.url.pathname === "/"}><a href="/" class="nav-link" aria-current={$page.url.pathname === "/" ? 'page' : undefined}>Home</a></li>
      <li class:active={$page.url.pathname === "/about"}>
        <a href="/about" class="nav-link" aria-current={$page.url.pathname === "/about" ? 'page' : undefined}>About</a>
      </li>
      <!-- <li class:active={$page.url.pathname === "/projects"}>
        <a href="/projects" class="nav-link" aria-current={$page.url.pathname === "/projects" ? 'page' : undefined}>Projects</a>
      </li> -->
      <li class:active={$page.url.pathname.includes("/journal")}>
        <a href="/journal" class="nav-link" aria-current={$page.url.pathname.includes("/journal") ? 'page' : undefined}>Journal</a>
      </li>
      <li class:active={$page.url.pathname === "/contact"}>
        <a href="/contact" class="nav-link" aria-current={$page.url.pathname === "/contact" ? 'page' : undefined}>Contact</a>
      </li>
    </ul>
  </nav>
</header>

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

  li {
    position: relative;
    height: 100%;

    &.active::before {
      content: "";
      width: 0;
      height: 0;
      position: absolute;
      bottom: 0;
      left: calc(50% - 8px);
      border: 8px solid transparent;
      @apply border-b-primary;
    }
  }

  .nav-link {
    display: flex;
    height: 100%;
    align-items: center;
    padding: 0 1em;
    color: #fff;
    font-weight: 700;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    text-decoration: none;
    transition: color 0.2s linear;
    position: relative;

    &:hover {
      @apply text-primary;
    }

    &::after {
      content: '';
      position: absolute;
      width: 0;
      height: 2px;
      bottom: 0;
      left: 50%;
      @apply bg-primary;
      transition: all 0.3s ease;
      opacity: 0;
    }

    &:hover::after {
      width: 80%;
      left: 10%;
      opacity: 1;
    }

    /* Explicit focus styles for keyboard navigation */
    &:focus-visible {
      @apply text-primary outline-2 outline-offset-2 outline-primary;
    }

    &:focus-visible::after {
      width: 80%;
      left: 10%;
      opacity: 1;
    }
  }
</style>
