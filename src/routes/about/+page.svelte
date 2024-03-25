<script>
  const yearsOfWork = new Date().getFullYear() - new Date("2017").getFullYear()
</script>

<svelte:head>
  <title>About - loke.dev</title>
  <meta name="description" content="This is the short story of Loke." />
  <meta name="Cache-Control" content="max-age=1, stale-while-revalidate=59" />
</svelte:head>

<div class="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
  <div class="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
    <div>
      <h2 class="text-base text-primary font-semibold tracking-wide uppercase">About</h2>
      <h3 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-100 sm:text-4xl">
        Loke
      </h3>
    </div>
  </div>
  <div class="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
    <div class="relative lg:row-start-1 lg:col-start-2">
      <svg
        class="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
        width={404}
        height={384}
        fill="none"
        viewBox="0 0 404 384"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="square-pattern"
            x={0}
            y={0}
            width={20}
            height={20}
            patternUnits="userSpaceOnUse"
          >
            <rect x={0} y={0} width={4} height={4} class="text-faded" fill="currentColor" />
          </pattern>
        </defs>
        <rect width={404} height={384} fill="url(#square-pattern)" />
      </svg>
      <div class="relative text-base mx-auto max-w-prose lg:max-w-none">
        <figure>
          <picture>
            <source srcSet="/images/loke.webp" type="image/webp" />
            <img
              class="rounded-lg shadow-lg bg-white object-contain object-center"
              src="/images/loke.png"
              alt="Loke"
              width={370}
              height={370}
            />
          </picture>
        </figure>
      </div>
    </div>
    <div class="mt-8 lg:mt-0">
      <div class="prose mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
        <strong>
          I've worked professionally with JavaScript for about {yearsOfWork} years now, across the full
          stack with a focus on frontend development. I have worked with several projects for mobile
          but mostly for the web in different sectors, primarily e-commerce.
        </strong>
        <p>
          Some of my go-to languages and tools for web development: React, React Native, Typescript,
          Nextjs, Nodejs, Prisma, Postgres, Docker, SASS, Tailwind, Cypress.
        </p>
        <p>
          The Web today is mind blowing and I can't wait to see what the future hold for it, that's
          why I want to be part of it, to make it the best it can be, even though it might be only a
          tiny piece of the whole puzzle.
        </p>
      </div>
    </div>
  </div>
</div>
