<script lang="ts">
  export let slug = ""
  export let title: string

  const id = title
    .toLowerCase()
    .replace(/[^a-zA-Z ]/g, "")
    .replace(/\s/g, "-")

  const href = slug ? `/journal/${slug}` : "#" + id
</script>

{#if slug}
  <h3 class="m-0 text-2xl" {id}>
    <a {href}>
      {title}
    </a>
  </h3>
{:else}
  <h2 class="m-0 text-2xl large" {id}>
    <a {href}>
      {title}
    </a>
  </h2>
{/if}
