<script lang="ts">
  import Button from "$src/lib/components/Button.svelte"
  import PageContainer from "$lib/components/PageContainer.svelte"
  import PageHead from "$lib/components/PageHead.svelte"
  import va from "@vercel/analytics"
  import { dev, browser } from "$app/environment"
  import { onMount } from "svelte"

  let formSubmitted = false
  let formElement: HTMLFormElement

  const handleSubmit = (e) => {
    if (!browser || dev) {
      e.preventDefault()
    }

    if (!dev) {
      try {
        va.track("Contact form submitted", {
          source: "contact_page",
          action: "submit",
        })
      } catch (error) {
        console.log("Vercel Analytics not available")
      }
    }

    formSubmitted = true
    return false
  }

  const handleClick = () => {
    if (!browser || dev) {
      formSubmitted = true
    }

    if (!dev) {
      try {
        va.track("Contact button clicked", {
          source: "contact_page",
          action: "click",
        })
      } catch (error) {
        console.log("Vercel Analytics not available")
      }
    }
  }

  onMount(() => {
    if (dev) {
      document.querySelector("form").setAttribute("novalidate", "true")
    }
  })
</script>

<svelte:head>
  <title>Contact | SvelteKit MDsveX Blog</title>
  <meta
    name="description"
    content="Contact me for any inquiries about web development, design, or collaboration opportunities."
  />
  <meta name="Cache-Control" content="max-age=1, stale-while-revalidate=59" />
</svelte:head>

<PageContainer minHeight="70vh">
  <PageHead
    title="Contact"
    subtitle="Let's talk"
    description="Send me a message if you have any questions or want to work together."
  />

  <div class="contact-container">
    {#if !formSubmitted}
      <form
        bind:this={formElement}
        name="contact"
        method="post"
        action="https://formspree.io/f/mleyrgqy"
        class="glass-card contact-form"
        on:submit={handleSubmit}
      >
        <div class="form-grid">
          <div class="form-group">
            <label for="first-name" class="block text-sm font-medium text-gray-300">Name</label>
            <div class="mt-1">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autocomplete="given-name"
                class="form-input"
                required
                minlength="2"
              />
            </div>
          </div>
          <div class="form-group">
            <label for="email" class="block text-sm font-medium text-gray-300">Email</label>
            <div class="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                class="form-input"
                minlength="5"
                required
              />
            </div>
          </div>
        </div>
        <div class="form-group mt-4">
          <label for="message" class="block text-sm font-medium text-gray-300">Message</label>
          <div class="mt-1">
            <textarea id="message" name="message" rows="8" class="form-input" minlength="5" required
            ></textarea>
          </div>
        </div>
        <div class="form-submit">
          <Button type="submit" variant="primary" on:click={handleClick}>Send Message</Button>
        </div>
      </form>
    {:else}
      <div class="glass-card thank-you-message animate-fade-in">
        <div class="success-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        </div>
        <h3 class="text-2xl font-bold text-white mb-2">Thank you!</h3>
        <p class="text-gray-300">
          Your message has been sent. I'll get back to you as soon as possible.
        </p>
      </div>
    {/if}
  </div>
</PageContainer>

<style>
  .contact-form {
    overflow: hidden;
  }

  .form-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  @media (min-width: 640px) {
    .form-grid {
      grid-template-columns: 1fr 1fr;
    }
  }

  .form-group {
    position: relative;
  }

  .form-input {
    width: 100%;
    padding: 0.75rem 1rem;
    background-color: rgba(31, 41, 55, 0.6);
    color: white;
    border: 1px solid rgba(75, 85, 99, 0.4);
    border-radius: 6px;
    transition: all 0.3s ease;
  }

  .form-input:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 2px rgba(255, 41, 93, 0.2);
  }

  .form-submit {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
  }

  .thank-you-message {
    text-align: center;
  }

  .success-icon {
    width: 60px;
    height: 60px;
    margin: 0 auto 1.5rem;
    color: var(--color-primary);
    animation: success-pulse 2s infinite;
  }

  @keyframes success-pulse {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.1);
      opacity: 0.8;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
</style>
