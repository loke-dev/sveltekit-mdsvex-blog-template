<script>
  const yearsOfWork = new Date().getFullYear() - new Date("2017").getFullYear()
</script>

<svelte:head>
  <title>About - loke.dev</title>
  <meta name="description" content="This is the short story of Loke." />
  <meta name="Cache-Control" content="max-age=1, stale-while-revalidate=59" />
</svelte:head>

<div class="about-container">
  <div class="about-header">
    <h2 class="text-primary font-semibold tracking-wide uppercase">About</h2>
    <h3 class="text-3xl leading-8 font-extrabold tracking-tight text-gray-100 sm:text-4xl">
      Loke
    </h3>
  </div>

  <div class="about-content">
    <div class="about-text">
      <div class="prose">
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
      <div class="floating-particles">
        <div class="particle p1"></div>
        <div class="particle p2"></div>
        <div class="particle p3"></div>
        <div class="particle p4"></div>
        <div class="particle p5"></div>
        <div class="particle p6"></div>
      </div>
      <div class="image-card">
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
</div>

<style>
  .about-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 1rem;
  }

  .about-header {
    margin-bottom: 3rem;
    animation-delay: 0.2s;
  }

  .about-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: center;
  }

  .about-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    animation-delay: 0.4s;
  }

  .about-image-container {
    display: flex;
    justify-content: center;
    position: relative;
    height: 335px;
    width: 370px;
    margin: 0 auto;
  }

  .image-card {
    position: relative;
    width: 370px;
    height: 335px;
    z-index: 2;
  }

  .image-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 24px;
    background: rgba(31, 41, 55, 0.4);
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
  }

  .profile-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
    border-radius: 24px;
  }

  .floating-particles {
    position: absolute;
    top: -50px;
    left: -50px;
    width: calc(100% + 100px);
    height: calc(100% + 100px);
    pointer-events: none;
    z-index: 1;
  }

  .particle {
    position: absolute;
    border-radius: 50%;
    background: #ff295d;
    filter: blur(1px);
    opacity: 0.7;
    animation: float 6s ease-in-out infinite;
  }

  .p1 {
    width: 10px;
    height: 10px;
    top: 20%;
    left: 0;
    animation-delay: 0s;
  }

  .p2 {
    width: 15px;
    height: 15px;
    top: 60%;
    right: 5%;
    animation-delay: -1s;
    background: #FFBA02;
  }

  .p3 {
    width: 8px;
    height: 8px;
    bottom: 10%;
    left: 30%;
    animation-delay: -2s;
    background: #4b2ec6;
  }

  .p4 {
    width: 12px;
    height: 12px;
    top: 5%;
    right: 30%;
    animation-delay: -3s;
    background: #FFBA02;
  }

  .p5 {
    width: 6px;
    height: 6px;
    bottom: 30%;
    left: 5%;
    animation-delay: -4s;
    background: #4b2ec6;
  }

  .p6 {
    width: 9px;
    height: 9px;
    top: 40%;
    right: 0;
    animation-delay: -5s;
    background: #FFBA02;
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0) scale(1);
    }
    50% {
      transform: translateY(-15px) scale(1.05);
    }
  }

  @media (max-width: 768px) {
    .about-content {
      grid-template-columns: 1fr;
    }

    .about-image-container {
      order: -1;
      margin-bottom: 2rem;
    }
  }
</style>
