<script lang="ts">
  export const variant: string = "right"
  export let prefix: string
  export let title: string
  export let image: string
</script>

<div class="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
  <div class="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
    <div>
      {#if prefix}
        <span class="text-base text-primary font-semibold tracking-wide">{prefix}</span>
      {/if}
      {#if title}
        <h3
          class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-100 sm:text-4xl}"
        >
          {title}
        </h3>
      {/if}
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
          <div class="aspect-w-12 aspect-h-7 lg:aspect-none">
            <picture>
              <source srcSet={`${image}.webp`} type="image/webp" />
              <img
                class="rounded-lg shadow-lg bg-white object-contain object-center"
                src={`${image}.png`}
                alt={title}
                width={370}
                height={370}
                loading="lazy"
                decoding="async"
              />
            </picture>
          </div>
        </figure>
      </div>
    </div>
    <div class="mt-8 lg:mt-0">
      <div class="prose mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
        <slot />
      </div>
    </div>
  </div>
</div>
