<script lang="ts">
  export let variant: 'primary' | 'secondary' | 'outline' = 'primary';
  export let href: string | undefined = undefined;
  export let type: 'button' | 'submit' | 'reset' = 'button';
  export let disabled: boolean = false;
  export let fullWidth: boolean = false;
  export let className: string = '';

  // Determine if this is a link or button
  const isLink = href !== undefined;
</script>

{#if isLink}
  <a
    {href}
    class="relative inline-flex items-center justify-center px-6 py-3 font-medium rounded-md transition-all duration-300 overflow-hidden {fullWidth ? 'w-full' : ''} {className}
    {variant === 'primary' ? 'text-white bg-primary hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-1 active:translate-y-0' : ''}
    {variant === 'secondary' ? 'text-white bg-gray-800 hover:bg-gray-700 hover:-translate-y-1 active:translate-y-0 border border-gray-700' : ''}
    {variant === 'outline' ? 'text-white bg-transparent border border-gray-600 hover:border-primary hover:text-primary hover:-translate-y-1 active:translate-y-0' : ''}
    {disabled ? 'opacity-60 cursor-not-allowed hover:transform-none' : ''} group"
    aria-disabled={disabled}
    tabindex={disabled ? -1 : 0}
    on:click
    on:focus
    on:blur
    on:mouseenter
    on:mouseleave
  >
    <span class="relative z-10">
      <slot />
    </span>
    {#if variant === 'primary'}
      <div class="absolute inset-0 bg-gradient-primary bg-300-100 mix-blend-overlay opacity-0 transition-opacity duration-300 animate-gradient-shift group-hover:opacity-60"></div>
    {/if}
  </a>
{:else}
  <button
    {type}
    class="relative inline-flex items-center justify-center px-6 py-3 font-medium rounded-md transition-all duration-300 overflow-hidden {fullWidth ? 'w-full' : ''} {className}
    {variant === 'primary' ? 'text-white bg-primary hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-1 active:translate-y-0' : ''}
    {variant === 'secondary' ? 'text-white bg-gray-800 hover:bg-gray-700 hover:-translate-y-1 active:translate-y-0 border border-gray-700' : ''}
    {variant === 'outline' ? 'text-white bg-transparent border border-gray-600 hover:border-primary hover:text-primary hover:-translate-y-1 active:translate-y-0' : ''}
    {disabled ? 'opacity-60 cursor-not-allowed hover:transform-none' : ''} group"
    disabled={disabled}
    on:click
    on:focus
    on:blur
    on:mouseenter
    on:mouseleave
  >
    <span class="relative z-10">
      <slot />
    </span>
    {#if variant === 'primary'}
      <div class="absolute inset-0 bg-gradient-primary bg-300-100 mix-blend-overlay opacity-0 transition-opacity duration-300 animate-gradient-shift group-hover:opacity-60"></div>
    {/if}
  </button>
{/if}