<script lang="ts">
  import PostCard from "$lib/components/PostCard.svelte"
  import Button from "$lib/components/Button.svelte"
  import { getTagColor } from "$lib/utils/tagColors";
  import PageContainer from "$lib/components/PageContainer.svelte";
  import PageHead from "$lib/components/PageHead.svelte";

  /** @type {import('./$types').PageData} */
  export let data
  const { tag, posts, relatedTags } = data

  // Get the tag color
  const tagColor = getTagColor(tag);
</script>

<PageContainer>
  <PageHead
    title="Posts tagged: {tag}"
    subtitle={`Tagged with ${tag}`}
    description="Browse all posts with the tag '{tag}'"
  />

  <div class="tag-posts-container">
    <div class="tag-header glass-card" style="--tag-color: {tagColor};">
      <Button href="/journal/tags" variant="secondary" className="back-button">
        ❮ Browse all tags
      </Button>
      <h1 class="tag-title">
        <span class="tag-name-pill" style="--tag-color: {tagColor};">
          #{tag}
        </span>
        <span class="tag-count">({posts.length} posts)</span>
      </h1>
    </div>

    <div class="posts-grid">
      {#each posts as post}
        <PostCard {post} />
      {/each}
    </div>
  </div>
</PageContainer>

<style>
  .tag-posts-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 1rem;
    position: relative;
  }

  .tag-header {
    margin-bottom: 3rem;
    padding: 2rem;
    position: relative;
    overflow: hidden;
    animation: fadeInUp 0.6s ease-out forwards;
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

  .tag-title {
    display: flex;
    align-items: center;
    margin-top: 1rem;
    gap: 0.75rem;
    flex-wrap: wrap;
  }

  .tag-name-pill {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--tag-color);
  }

  .tag-count {
    font-size: 1rem;
    color: #9CA3AF;
  }

  .posts-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    animation: fadeInUp 0.6s ease-out 0.2s forwards;
    opacity: 0;
  }

  @media (min-width: 640px) {
    .posts-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>