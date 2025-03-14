<script lang="ts">
  export let href: string;
  export let variant: 'nav' | 'footer' | 'inline' | 'tech' = 'inline';
  export let active: boolean = false;
  export let external: boolean = false;
  export let className: string = '';
  export let style: string = '';

  // Common attributes for external links
  const externalAttrs = external ? {
    target: '_blank',
    rel: 'noopener noreferrer'
  } : {};
</script>

<a
  {href}
  class="link {variant} {active ? 'active' : ''} {className}"
  style={style}
  aria-current={active ? 'page' : undefined}
  data-sveltekit-preload-data={!external ? 'hover' : undefined}
  {...externalAttrs}
  on:click
  on:focus
  on:blur
  on:mouseenter
  on:mouseleave
>
  <slot />
</a>

<style>
  .link {
    position: relative;
    transition: color 0.2s ease;
  }

  /* Nav link style - like in header */
  .link.nav {
    font-weight: 500;
    color: rgba(255, 255, 255, 0.8);
    padding: 0.5rem 0;
  }

  .link.nav::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--color-primary);
    transition: width 0.3s ease;
  }

  .link.nav:hover {
    color: white;
  }

  .link.nav:hover::after {
    width: 100%;
  }

  .link.nav.active {
    color: white;
  }

  .link.nav.active::after {
    width: 100%;
  }

  /* Footer link style */
  .link.footer {
    display: inline-flex;
    align-items: center;
    color: #9CA3AF;
    padding: 0.25rem 0;
  }

  .link.footer::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 1px;
    background-color: var(--color-primary);
    transition: width 0.3s ease;
  }

  .link.footer:hover {
    color: white;
  }

  .link.footer:hover::after {
    width: 100%;
  }

  /* Inline link style - for content */
  .link.inline {
    color: var(--color-primary);
    text-decoration: none;
    padding-bottom: 1px;
    border-bottom: 1px solid transparent;
    transition: border-color 0.2s ease;
  }

  .link.inline:hover {
    border-bottom-color: var(--color-primary);
  }

  /* Tech link style - for footer tech links */
  .link.tech {
    position: relative;
    color: #9CA3AF;
    padding: 0 0.25rem;
  }

  .link.tech::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 0;
    height: 1px;
    background: linear-gradient(90deg, var(--color-primary), var(--color-secondary));
    transition: width 0.3s ease;
  }

  .link.tech:hover {
    color: white;
  }

  .link.tech:hover::after {
    width: 100%;
  }
</style>