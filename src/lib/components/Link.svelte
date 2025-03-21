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
  class="relative transition-colors duration-200 {className}
    {variant === 'nav' ? 'font-medium text-white/80 py-2 hover:text-white' : ''}
    {variant === 'footer' ? 'inline-flex items-center text-gray-400 py-1 hover:text-white' : ''}
    {variant === 'inline' ? 'no-underline border-b border-transparent hover:border-primary' : ''}
    {variant === 'tech' ? 'text-gray-400 px-1 hover:text-white' : ''}
    {active ? 'text-white' : ''}"
  style={style}
  aria-current={active ? 'page' : undefined}
  data-sveltekit-preload-data={!external ? 'hover' : undefined}
  tabindex="0"
  {...externalAttrs}
  on:click
  on:focus
  on:blur
  on:mouseenter
  on:mouseleave
>
  <slot />
  {#if variant === 'nav' && (active || $$slots.default)}
    <span class="absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 {active ? 'w-full' : 'w-0 group-hover:w-full'}"></span>
  {/if}
  {#if variant === 'footer' && $$slots.default}
    <span class="absolute bottom-0 left-0 h-px bg-primary transition-all duration-300 w-0 group-hover:w-full"></span>
  {/if}
  {#if variant === 'tech' && $$slots.default}
    <span class="absolute bottom-[-1px] left-0 h-px bg-gradient-primary transition-all duration-300 w-0 group-hover:w-full"></span>
  {/if}
</a>