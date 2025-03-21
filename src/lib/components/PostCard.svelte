<script lang="ts">
  import { getTagColor } from "$lib/utils/tagColors";
  import Link from "./Link.svelte";

  export let post: {
    slug: string;
    title: string;
    description: string;
    date: string;
    tag?: string;
  };

  // Format date to YYYY-MM-DD
  function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString("sv-SE");
  }

  // Get the tag color
  const tagColor = post.tag ? getTagColor(post.tag) : getTagColor('default');

  // Handle tag click to prevent event propagation
  function handleTagClick(event: MouseEvent) {
    event.stopPropagation();
  }
</script>

<div class="post-card-container group">
  <Link href={`/journal/${post.slug}`} className="post-card">
    <div class="glass-card post-card-inner" style="--tag-color: {tagColor};">
      <h2 class="text-xl font-semibold mb-2 text-white">{post.title}</h2>
      <p class="text-gray-400 mb-4">{post.description}</p>
      <div class="flex justify-start items-center">
        <div class="text-sm text-gray-500">{formatDate(post.date)}</div>
      </div>
    </div>
  </Link>

  {#if post.tag}
    <Link
      href={`/journal/tags/${encodeURIComponent(post.tag)}`}
      className="tag absolute bottom-10 left-4 inline-block py-1 px-2 rounded text-xs font-medium z-10"
      style="background-color: {tagColor}20; color: {tagColor};"
      on:click={handleTagClick}
    >
      {post.tag.toLowerCase()}
    </Link>
  {/if}
</div>

<style>
  .post-card-container {
    position: relative;
    height: 100%;
    transition: transform 0.3s ease;
  }

  .post-card-inner {
    height: 100%;
    min-height: 200px;
    display: flex;
    flex-direction: column;
  }
</style>