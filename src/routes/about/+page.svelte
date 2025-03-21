<script>
  import PageContainer from "$lib/components/PageContainer.svelte";
  import PageHead from "$lib/components/PageHead.svelte";
  import { fade } from "svelte/transition";

  const yearsOfWork = new Date().getFullYear() - new Date("2017").getFullYear()
</script>

<svelte:head>
  <title>About - loke.dev</title>
  <meta name="description" content="This is the short story of Loke." />
  <meta name="Cache-Control" content="max-age=1, stale-while-revalidate=59" />
</svelte:head>

<PageContainer title="About" description="Learn more about me and my work">
  <PageHead
    title="About"
    subtitle="Loke"
  />

  <div class="content-grid">
    <div class="about-text" in:fade={{ duration: 300, delay: 300 }}>
      <div class="prose prose-lg mobile-prose">
        <strong>
          I've worked professionally with JavaScript for about {yearsOfWork} years now, across the
          full stack with a focus on frontend development. I have worked with several projects for
          mobile but mostly for the web in different sectors, primarily e-commerce.
        </strong>
        <p>
          Some of my go-to languages and tools for web development: React, React Native,
          Typescript, Nextjs, Nodejs, Prisma, Postgres, Docker, SASS, Tailwind, Cypress.
        </p>
        <p>
          The Web today is mind blowing and I can't wait to see what the future hold for it,
          that's why I want to be part of it, to make it the best it can be, even though it might
          be only a tiny piece of the whole puzzle.
        </p>
      </div>
    </div>

    <div class="about-image-container">
      <div class="image-card glass-card">
        <div class="image-wrapper">
          <picture>
            <source srcSet="/images/loke_transparent_370.webp" type="image/webp" />
            <source srcSet="/images/loke_transparent_370.png" type="image/png" />
            <img
              class="profile-image"
              src="/images/loke_transparent_370.png"
              alt="Loke"
              width={370}
              height={335}
              loading="lazy"
              decoding="async"
            />
          </picture>
        </div>
      </div>
    </div>
  </div>
</PageContainer>

<style>
  .content-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: center;
  }

  .about-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .about-image-container {
    display: flex;
    justify-content: center;
    position: relative;
    height: 335px;
    width: 100%;
    max-width: 370px;
    margin: 0 auto;
  }

  .image-card {
    position: relative;
    width: 100%;
    max-width: 370px;
    height: 335px;
    z-index: 2;
    padding: 0;

  }

  .image-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: inherit;
  }

  .profile-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
    border-radius: inherit;
  }

  @media (max-width: 768px) {
    .content-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .about-image-container {
      order: -1;
      margin-bottom: 2rem;
      height: auto;
      max-width: 100%;
    }

    .image-card {
      height: auto;
      aspect-ratio: 370/335;
      max-width: 100%;
    }

    .profile-image {
      object-fit: contain;
    }
  }

  .mobile-prose {
    width: 100%;
    max-width: 100%;
    overflow-wrap: break-word;
    word-wrap: break-word;
  }
</style>
