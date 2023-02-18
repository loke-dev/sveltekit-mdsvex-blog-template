<script>
  import { fly } from "svelte/transition";
  export let refresh = "";
</script>

{#key refresh}
  <div in:fly={{ duration: 500, delay: 250 }} out:fly={{ duration: 250 }}>
    <slot />
  </div>
{/key}
