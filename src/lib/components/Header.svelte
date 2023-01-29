<script lang="ts">
  import { page } from "$app/stores"
</script>

<header class="bg-background p-4 flex justify-center">
  <nav class="flex justify-center">
    <ul class="relative p-0 m-0 flex justify-center items-center bg-contain h-12 list-none">
      <li class:active={$page.url.pathname === "/"}><a href="/">Home</a></li>
      <li class:active={$page.url.pathname === "/about"}>
        <a href="/about">About</a>
      </li>
      <li class:active={$page.url.pathname === "/projects"}>
        <a href="/projects">Projects</a>
      </li>
      <li class:active={$page.url.pathname.includes("/journal")}>
        <a href="/journal">Journal</a>
      </li>
      <li class:active={$page.url.pathname === "/contact"}>
        <a href="/contact">Contact</a>
      </li>
    </ul>
  </nav>
</header>

<style lang="postcss">
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

  nav a {
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

    &:hover {
      @apply text-primary;
    }
  }
</style>
