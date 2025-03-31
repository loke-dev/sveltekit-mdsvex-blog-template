<script lang="ts">
  export let date: string

  const formattedDate = new Date(date).toDateString()
</script>

<p class="m-0 mb-8 text-gray-400">
  <span class="date">{formattedDate}</span>
</p>
