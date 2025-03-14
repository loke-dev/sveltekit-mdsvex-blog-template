<script lang="ts">
  /** @type {import('./$types').PageData} */
  export let data;

  import PageHead from "$components/PageHead.svelte"
  import Patterns from "$lib/components/Patterns.svelte"
  import { getTagColor } from "$lib/utils/tagColors";

  import "$styles/syntax.css"

  const component = data.component;
  const { title, description, date, tag } = data.frontmatter

  // Format date to YYYY-MM-DD
  function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString("sv-SE");
  }

  // Get the tag color
  const tagColor = tag ? getTagColor(tag) : getTagColor('default');
</script>

<PageHead title={title} description={description} />

<div class="post-header" style="--tag-color: {tagColor}">
  <div class="header-background">
    <Patterns variant="1" />
    <div class="color-accent"></div>
  </div>

  <div class="header-content">
    <a href="/journal" class="back-button">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M19 12H5M12 19l-7-7 7-7"/>
      </svg>
      <span>Back to Journal</span>
    </a>

    <h1 class="title">{title}</h1>
    <p class="description">{description}</p>

    <div class="meta-info">
      {#if tag}
        <a
          href={`/journal/tags/${encodeURIComponent(tag)}`}
          class="tag-pill"
          style="background-color: {tagColor}20; color: {tagColor};"
        >
          {tag.toLowerCase()}
        </a>
      {/if}
      <span class="date-divider">•</span>
      <span class="date">{formatDate(date)}</span>
    </div>
  </div>
</div>

<article class="prose prose-lg">
  <!-- Article body -->
  <svelte:component this={component} />
</article>

<style>
  .post-header {
    position: relative;
    padding: 4rem 0 3rem;
    margin-bottom: 3rem;
    overflow: hidden;
    background-color: rgba(31, 41, 55, 0.4);
    border-radius: 16px;
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
  }

  .header-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
  }

  .color-accent {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: var(--tag-color, #60a5fa);
    box-shadow: 0 0 30px 0 var(--tag-color, #60a5fa);
  }

  .header-content {
    position: relative;
    z-index: 10;
    max-width: 800px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }

  .back-button {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 2rem;
    padding: 0.5rem 1rem;
    background-color: rgba(31, 41, 55, 0.7);
    border-radius: 8px;
    color: #d1d5db;
    font-size: 0.875rem;
    font-weight: 500;
    transition: all 0.2s ease;
  }

  .back-button:hover {
    background-color: rgba(31, 41, 55, 0.9);
    transform: translateY(-1px);
  }

  .title {
    font-size: 2.5rem;
    font-weight: 800;
    color: white;
    line-height: 1.2;
    margin-bottom: 1rem;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .description {
    font-size: 1.25rem;
    color: #d1d5db;
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }

  .meta-info {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .tag-pill {
    display: inline-block;
    padding: 0.35rem 1rem;
    border-radius: 6px;
    font-size: 0.875rem;
    font-weight: 500;
    transition: all 0.2s ease;
  }

  .tag-pill:hover {
    transform: translateY(-1px);
    filter: brightness(1.1);
  }

  .date-divider {
    color: #6B7280;
  }

  .date {
    font-size: 0.875rem;
    color: #9CA3AF;
  }

  .prose {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }
</style>
