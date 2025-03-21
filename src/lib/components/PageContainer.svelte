<script lang="ts">
  export let maxWidth: string = "900px";
  export let minHeight: string = "auto";
</script>

<div class="page-container" style="--max-width: {maxWidth}; --min-height: {minHeight};">
  <slot />
</div>

<style>
  .page-container {
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 2rem 1rem;
    position: relative;
    min-height: var(--min-height);
  }

  @media (min-width: 640px) {
    .page-container {
      padding: 2rem 1.5rem;
    }
  }

  @media (min-width: 1024px) {
    .page-container {
      padding: 2rem 2rem;
    }
  }
</style>