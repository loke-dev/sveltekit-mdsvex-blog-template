<script lang="ts">
  import Patterns from "$lib/components/Patterns.svelte"
  import PostCard from "$lib/components/PostCard.svelte"
  import Link from "$lib/components/Link.svelte"
  import { onMount } from "svelte"

  /** @type {any} */
  export let data
  const { posts, tags } = data

  // Get top tags for minimal browse section
  const topTags = tags
    .sort((a: {count: number}, b: {count: number}) => b.count - a.count)
    .slice(0, 6) // Show only top 6 tags

  // For staggered animations
  let visible = false;

  onMount(() => {
    // Set visible to true after a short delay for animations
    setTimeout(() => {
      visible = true;
    }, 100);
  });
</script>

<svelte:head>
  <title>Journal - loke.dev</title>
  <meta name="description" content="Some of my written down thought, guides and blog posts" />
  <meta name="Cache-Control" content="max-age=1, stale-while-revalidate=59" />
</svelte:head>

<Patterns variant="2" />

<div class="content">
  <div class="journal-header animate-item">
    <h2 class="text-primary font-semibold tracking-wide uppercase">Journal</h2>
    <h3 class="text-3xl leading-8 font-extrabold tracking-tight text-gray-100 sm:text-4xl mb-6">
      Let's learn together!
    </h3>
  </div>

  <div class="mb-8 animate-item">
    <div class="flex flex-wrap gap-3 items-center">
      <span class="text-gray-400">Browse by topic:</span>
      <Link href="/journal/tags" className="tag-pill">all topics</Link>
      {#if topTags && topTags.length > 0}
        {#each topTags as tag}
          <Link
            href={`/journal/tags/${encodeURIComponent(tag.name)}`}
            className="tag-pill"
          >
            {tag.name.toLowerCase()}
          </Link>
        {/each}
      {/if}
    </div>
  </div>

  <div class="posts-grid">
    {#if posts}
      {#each posts as post, i}
        <div class="post-item" style="--delay: {i * 0.05}s">
          <PostCard {post} />
        </div>
      {/each}
    {/if}
  </div>
</div>

<style>
  .content {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 1rem;
    position: relative;
  }

  .journal-header {
    margin-bottom: 2rem;
  }

  .animate-item {
    opacity: 0;
    animation: fadeInUp 0.8s ease forwards;
  }

  .journal-header {
    animation-delay: 0.2s;
  }

  .mb-8 {
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

  .tag-pill {
    display: inline-block;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    font-size: 0.75rem;
    background-color: rgba(75, 85, 99, 0.3);
    color: #9CA3AF;
    transition: all 0.2s ease;
  }

  .tag-pill:hover {
    background-color: rgba(75, 85, 99, 0.5);
    color: #D1D5DB;
  }

  .posts-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-top: 3rem;
  }

  @media (min-width: 640px) {
    .posts-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .post-item {
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 0.8s ease forwards;
    animation-delay: calc(0.4s + var(--delay));
  }
</style>
