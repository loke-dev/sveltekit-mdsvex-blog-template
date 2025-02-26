<script lang="ts">
  import Patterns from "$src/lib/components/Patterns.svelte"
  import va from '@vercel/analytics';

  function handleClick() {
    va.track('Contact button clicked');
  }

</script>

<svelte:head>
  <title>Contact - loke.dev</title>
  <meta name="description" content="Want to get in touch, you will find the best way here." />
  <meta name="Cache-Control" content="max-age=1, stale-while-revalidate=59" />
</svelte:head>

<Patterns />

<div>
  <h1 class="mb-6">Contact</h1>
  <p class="mt-4 text-lg leading-6 text-white">
    Send me a message if you have any questions or want to work together.
  </p>
  <div class="mt-12 relative mx-auto">
    <form
      name="contact"
      method="post"
      action="https://formspree.io/f/mleyrgqy"
      class="flex flex-col"
    >
      <div class="flex gap-8 flex-col sm:flex-row">
        <div class="flex-grow">
          <label for="first-name" class="block text-sm font-medium text-gray-300">Name</label>
          <div class="mt-1">
            <input
              type="text"
              name="first-name"
              id="first-name"
              autocomplete="given-name"
              class="py-3 px-4 text-white block w-full shadow-sm focus:ring-primary focus:border-primary border-gray-600 rounded-md bg-gray-800"
              required
              minlength="2"
            />
          </div>
        </div>
        <div class="flex-grow">
          <label for="email" class="block text-sm font-medium text-gray-300">Email</label>
          <div class="mt-1">
            <input
              id="email"
              name="email"
              type="email"
              autocomplete="email"
              class="py-3 px-4 block text-white w-full shadow-sm focus:ring-primary focus:border-primary border-gray-600 rounded-md bg-gray-800"
              minlength="5"
              required
            />
          </div>
        </div>
      </div>
      <div class="mt-4">
        <label for="message" class="block text-sm font-medium text-gray-300">Message</label>
        <div class="mt-1">
          <textarea
            id="message"
            name="message"
            rows="8"
            class="py-3 px-4 block text-white w-full shadow-sm focus:ring-primary focus:border-primary border border-gray-600 rounded-md bg-gray-800"
            minlength="5"
            required
          />
        </div>
      </div>
      <div class="mt-12 m-auto">
        <button
          type="submit"
          class="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          on:click|once="{handleClick}"
        >
          Let's talk
        </button>
      </div>
    </form>
  </div>
</div>
