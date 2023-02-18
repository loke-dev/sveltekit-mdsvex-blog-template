<script lang="ts">
  export let variant: string = "1"

  let variants = {
    "1": {
      first: "absolute left-full transform -translate-x-full -translate-y-32",
      second: "absolute right-full bottom-0 transform translate-x-full -translate-y-1/2",
    },
    "2": {
      first: "absolute left-full bottom-0 transform -translate-x-full -translate-y-32",
      second: "absolute right-full transform translate-x-3/4 -translate-y-1/3",
    },
  }
</script>

<div class="hidden 3xl:block">
  <svg
    class={variants[variant].first}
    width="404"
    height="404"
    fill="none"
    viewBox="0 0 404 404"
    aria-hidden="true"
  >
    <defs>
      <pattern id="pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
        <rect x="0" y="0" width="4" height="4" class="text-faded" fill="currentColor" />
      </pattern>
    </defs>
    <rect width="404" height="404" fill="url(#pattern)" />
  </svg>
  <svg
    class={variants[variant].second}
    width="404"
    height="404"
    fill="none"
    viewBox="0 0 404 404"
    aria-hidden="true"
  >
    <defs>
      <pattern id="pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
        <rect x="0" y="0" width="4" height="4" class="text-faded" fill="currentColor" />
      </pattern>
    </defs>
    <rect width="404" height="404" fill="url(#pattern)" />
  </svg>
</div>
