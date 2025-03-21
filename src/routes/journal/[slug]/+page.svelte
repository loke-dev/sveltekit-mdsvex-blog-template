<script lang="ts">
  /** @type {import('./$types').PageData} */
  export let data;

  import Link from "$lib/components/Link.svelte"
  import Button from "$lib/components/Button.svelte"
  import { getTagColor } from "$lib/utils/tagColors";
  import { formatDate } from "$lib/utils/date";

  import "$styles/syntax.css"

  const component = data.component;
  const { title, description, date, tag } = data.frontmatter

  const tagColor = tag ? getTagColor(tag) : getTagColor('default');
</script>

<div class="post-container">
  <div class="post-header glass-card" style="--tag-color: {tagColor};">
    <div class="back-button-container">
      <Button href="/journal" variant="secondary" className="back-button">
        ❮ Back to Journal
      </Button>
    </div>

    <h1 class="title">{title}</h1>
    <p class="description">{description}</p>

    <div class="meta-info">
      {#if tag}
        <Link
          href={`/journal/tags/${encodeURIComponent(tag)}`}
          className="tag-pill"
          style="background-color: {tagColor}20; color: {tagColor};"
        >
          {tag.toLowerCase()}
        </Link>
      {/if}
      <span class="date-divider">•</span>
      <span class="date">{formatDate(date)}</span>
    </div>
  </div>

  <article class="prose prose-lg glass-card bg-gray-800/20 backdrop-blur-sm">
    <svelte:component this={component} />
  </article>
</div>

<style>
  .post-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 1rem;
    position: relative;
    width: 100%;
    box-sizing: border-box;
  }

  .post-header {
    margin-bottom: 3rem;
    padding: 2rem;
    position: relative;
    overflow: hidden;
    animation: fadeInUp 0.6s ease-out forwards;
  }

  .prose {
    animation: fadeInUp 0.6s ease-out 0.2s forwards;
    opacity: 0;
    padding: 2rem;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .back-button-container {
    margin-bottom: 2rem;
  }

  .back-button {
    display: flex;
    align-items: center;
    font-size: 0.95rem;
    font-weight: 500;
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
    margin-bottom: 1rem;
  }

  .tag-pill {
    display: inline-block;
    padding: 0.35rem 1rem;
    border-radius: 6px;
    font-size: 0.875rem;
    font-weight: 500;
    transition: all 0.2s ease;
  }

  .date-divider {
    color: #6B7280;
  }

  .date {
    font-size: 0.875rem;
    color: #9CA3AF;
  }
</style>
