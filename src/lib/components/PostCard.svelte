<script lang="ts">
  import { getTagColor } from "$lib/utils/tagColors";

  export let post: {
    slug: string;
    title: string;
    description: string;
    date: string;
    tags?: string[];
  };

  // Format date to YYYY-MM-DD
  function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString("sv-SE");
  }

  // Get the primary tag (there should only be one)
  const tag = post.tags && post.tags.length > 0 ? post.tags[0] : null;

  // Get the tag color
  const tagColor = tag ? getTagColor(tag) : getTagColor('default');
</script>

<div class="post-card-container">
  <a href={`/journal/${post.slug}`} class="post-card">
    <h2 class="text-xl font-semibold mb-2 text-white">{post.title}</h2>
    <p class="text-gray-400 mb-4">{post.description}</p>
    <div class="flex justify-between items-center">
      <div class="text-sm text-gray-500">{formatDate(post.date)}</div>
    </div>
  </a>

  {#if tag}
    <a
      href={`/journal/tags/${encodeURIComponent(tag)}`}
      class="tag-pill"
      style="background-color: {tagColor}20; color: {tagColor};"
    >
      {tag.toLowerCase()}
    </a>
  {/if}
</div>

<style>
  .post-card-container {
    position: relative;
    height: 100%;
  }

  .post-card {
    display: block;
    padding: 1.5rem;
    border-radius: 8px;
    background-color: rgba(31, 41, 55, 0.4);
    transition: all 0.2s ease;
    height: 100%;
    min-height: 200px;
  }

  .post-card:hover {
    background-color: rgba(31, 41, 55, 0.6);
    transform: translateY(-2px);
  }

  .tag-pill {
    position: absolute;
    bottom: 1.5rem;
    right: 1.5rem;
    display: inline-block;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    font-size: 0.75rem;
    font-weight: 500;
    transition: all 0.2s ease;
  }

  .tag-pill:hover {
    transform: translateY(-1px);
    filter: brightness(1.1);
  }
</style>