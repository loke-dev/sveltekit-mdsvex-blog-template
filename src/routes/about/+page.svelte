<script>
  const yearsOfWork = new Date().getFullYear() - new Date("2017").getFullYear()
</script>

<svelte:head>
  <title>About - loke.dev</title>
  <meta name="description" content="This is the short story of Loke." />
  <meta name="Cache-Control" content="max-age=1, stale-while-revalidate=59" />
</svelte:head>

<div class="about-container">
  <div class="about-header animate-item">
    <h2 class="text-primary font-semibold tracking-wide uppercase">About</h2>
    <h3 class="text-3xl leading-8 font-extrabold tracking-tight text-gray-100 sm:text-4xl">
      Loke
    </h3>
  </div>

  <div class="about-content">
    <div class="about-text animate-item">
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
      <div class="animate-item">
        <div class="image-card">
          <div class="image-border"></div>
          <div class="image-wrapper">
            <div class="image-glow"></div>
            <picture>
              <source srcSet="/images/loke.webp" type="image/webp" />
              <img
                class="profile-image"
                src="/images/loke.png"
                alt="Loke"
                width={370}
                height={370}
              />
            </picture>
          </div>
          <div class="floating-particles">
            <div class="particle p1"></div>
            <div class="particle p2"></div>
            <div class="particle p3"></div>
            <div class="particle p4"></div>
            <div class="particle p5"></div>
            <div class="particle p6"></div>
          </div>
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
    height: 450px;
  }

  .about-image-container .animate-item {
    animation-delay: 0.6s;
  }

  .animate-item {
    opacity: 0;
    animation: fadeInUp 0.8s ease forwards;
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

  .image-card {
    position: relative;
    width: 370px;
    height: 370px;
  }

  .image-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 24px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }

  .image-border {
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    background: linear-gradient(90deg,
      rgba(255, 41, 93, 0.9),
      rgba(255, 186, 2, 0.9),
      rgba(75, 46, 198, 0.9),
      rgba(255, 41, 93, 0.9)
    );
    background-size: 300% 100%;
    animation: gradient-shift 15s ease infinite;
    border-radius: 28px;
    z-index: -1;
  }

  @keyframes gradient-shift {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  .image-glow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    filter: blur(30px);
    opacity: 0.6;
    z-index: -1;
    transform: scale(0.9);
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
    z-index: 10;
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
      height: 400px;
    }

    .image-card {
      width: 300px;
      height: 300px;
    }
  }
</style>
