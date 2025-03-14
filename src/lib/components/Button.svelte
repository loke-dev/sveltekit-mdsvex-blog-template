<script lang="ts">
  export let variant: 'primary' | 'secondary' | 'outline' = 'primary';
  export let href: string | undefined = undefined;
  export let type: 'button' | 'submit' | 'reset' = 'button';
  export let disabled: boolean = false;
  export let fullWidth: boolean = false;
  export let className: string = '';

  // Determine if this is a link or button
  const isLink = href !== undefined;

  // Common classes for all button variants
  const baseClasses = `
    relative
    inline-flex
    items-center
    justify-center
    px-6
    py-3
    font-medium
    rounded-md
    transition-all
    duration-300
    overflow-hidden
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `;

  // Variant-specific classes
  const variantClasses = {
    primary: 'text-white bg-primary hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-1 active:translate-y-0',
    secondary: 'text-white bg-gray-800 hover:bg-gray-700 hover:-translate-y-1 active:translate-y-0 border border-gray-700',
    outline: 'text-white bg-transparent border border-gray-600 hover:border-primary hover:text-primary hover:-translate-y-1 active:translate-y-0'
  };

  // Disabled state classes
  const disabledClasses = 'opacity-60 cursor-not-allowed hover:transform-none';
</script>

{#if isLink}
  <a
    {href}
    class="{baseClasses} {variantClasses[variant]} {disabled ? disabledClasses : ''}"
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
      <div class="button-glow"></div>
    {/if}
  </a>
{:else}
  <button
    {type}
    class="{baseClasses} {variantClasses[variant]} {disabled ? disabledClasses : ''}"
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
      <div class="button-glow"></div>
    {/if}
  </button>
{/if}

<style>
  .button-glow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg,
      rgba(255, 41, 93, 1),
      rgba(255, 186, 2, 1),
      rgba(75, 46, 198, 1),
      rgba(255, 41, 93, 1)
    );
    background-size: 300% 100%;
    mix-blend-mode: overlay;
    opacity: 0;
    transition: opacity 0.3s ease;
    animation: gradient-shift 8s ease infinite;
  }

  button:hover .button-glow,
  a:hover .button-glow {
    opacity: 0.6;
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
</style>