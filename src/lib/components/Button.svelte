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
    class="button {variant} {fullWidth ? 'w-full' : ''} {className} {disabled ? 'disabled' : ''} group"
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
      <div class="gradient"></div>
    {/if}
  </a>
{:else}
  <button
    {type}
    class="button {variant} {fullWidth ? 'w-full' : ''} {className} {disabled ? 'disabled' : ''} group"
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
      <div class="gradient"></div>
    {/if}
  </button>
{/if}

<style>
  .button {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.75rem 1.5rem;
    font-weight: 500;
    border-radius: 0.375rem;
    transition: all 0.3s;
    overflow: hidden;
    color: white;
    backdrop-filter: blur(8px);
  }

  .button:active {
    transform: translateY(0);
  }

  .primary {
    background-color: rgba(217, 30, 83, 0.6);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow:
      0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -2px rgba(0, 0, 0, 0.1),
      0 0 0 1px rgba(255, 255, 255, 0.05) inset;
  }

  .primary:hover {
    box-shadow:
      0 10px 15px -3px rgba(0, 0, 0, 0.2),
      0 4px 6px -2px rgba(0, 0, 0, 0.15),
      0 0 0 1px rgba(255, 255, 255, 0.1) inset;
  }

  .secondary {
    background-color: rgba(31, 41, 55, 0.4);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow:
      0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -2px rgba(0, 0, 0, 0.1),
      0 0 0 1px rgba(255, 255, 255, 0.05) inset;
  }

  .secondary:hover {
    background-color: rgba(55, 65, 81, 0.5);
    box-shadow:
      0 10px 15px -3px rgba(0, 0, 0, 0.2),
      0 4px 6px -2px rgba(0, 0, 0, 0.15),
      0 0 0 1px rgba(255, 255, 255, 0.1) inset;
  }

  .outline {
    background-color: transparent;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }

  .outline:hover {
    border-color: var(--color-primary);
    color: var(--color-primary);
    box-shadow:
      0 6px 10px -3px rgba(0, 0, 0, 0.15),
      0 0 0 1px rgba(217, 30, 83, 0.3) inset;
  }

  .disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .disabled:hover {
    transform: none;
    box-shadow: none;
  }

  .gradient {
    position: absolute;
    inset: 0;
    background: var(--color-primary);
    mix-blend-mode: overlay;
    opacity: 0;
    transition: opacity 0.3s;
  }

  .group:hover .gradient {
    opacity: 0.6;
  }
</style>