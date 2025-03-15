<script lang="ts">
  /** @type {import('./$types').PageData} */
  export let data;

  import PageHead from "$components/PageHead.svelte"
  import Patterns from "$lib/components/Patterns.svelte"
  import Link from "$lib/components/Link.svelte"
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

<Patterns variant="2" />

<div class="post-container">
  <div class="post-header" style="--tag-color: {tagColor}">
    <Link href="/journal" className="back-link">❮ Back to Journal</Link>

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

  <article class="prose prose-lg">
    <!-- Article body -->
    <svelte:component this={component} />
  </article>
</div>

<style>
  .post-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 1rem;
    position: relative;
  }

  .post-header {
    margin-bottom: 3rem;
  }

  .post-header {
    animation-delay: 0.2s;
  }

  .prose {
    animation-delay: 0.4s;
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

  .back-link {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    margin-bottom: 2rem;
    color: var(--color-primary);
    transition: all 0.2s ease;
  }

  .back-link:hover {
    transform: translateX(-2px);
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
    margin-bottom: 2rem;
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

  .prose {
    margin-bottom: 4rem;
  }
</style>
