<script lang="ts">
  import Patterns from "$src/lib/components/Patterns.svelte"
  import Button from "$src/lib/components/Button.svelte"
  import va from '@vercel/analytics';
  import { dev } from '$app/environment'
  import { onMount } from "svelte"

  let formSubmitted = false;
  let formElement: HTMLFormElement;

  function handleClick() {
    // Only track events in production
    if (!dev) {
      try {
        // Use the latest API for tracking events
        va.track('Contact button clicked', {
          // You can add additional properties here
          source: 'contact_page',
          action: 'submit'
        });
      } catch (error) {
        console.log('Vercel Analytics not available');
      }
    }
  }

  function handleSubmit(event: Event) {
    // Form will be submitted normally, this is just for animation
    formSubmitted = true;
  }
</script>

<svelte:head>
  <title>Contact - loke.dev</title>
  <meta name="description" content="Want to get in touch, you will find the best way here." />
  <meta name="Cache-Control" content="max-age=1, stale-while-revalidate=59" />
</svelte:head>

<Patterns variant="2" />

<div class="contact-container">
  <div class="contact-header">
    <h2 class="text-primary font-semibold tracking-wide uppercase">Contact</h2>
    <h3 class="text-3xl leading-8 font-extrabold tracking-tight text-gray-100 sm:text-4xl">
      Let's talk
    </h3>
    <p class="mt-4 text-lg leading-6 text-gray-300 max-w-2xl">
      Send me a message if you have any questions or want to work together.
    </p>
  </div>

  <div class="contact-form-container">
    {#if !formSubmitted}
      <form
        bind:this={formElement}
        name="contact"
        method="post"
        action="https://formspree.io/f/mleyrgqy"
        class="contact-form"
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
            <textarea
              id="message"
              name="message"
              rows="8"
              class="form-input"
              minlength="5"
              required
            ></textarea>
          </div>
        </div>
        <div class="form-submit">
          <Button
            type="submit"
            variant="primary"
            on:click={handleClick}
          >
            Send Message
          </Button>
        </div>
      </form>
    {:else}
      <div class="thank-you-message animate-fade-in">
        <div class="success-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        </div>
        <h3 class="text-2xl font-bold text-white mb-2">Thank you!</h3>
        <p class="text-gray-300">Your message has been sent. I'll get back to you as soon as possible.</p>
      </div>
    {/if}
  </div>

  <div class="contact-particles">
    <div class="particle p1"></div>
    <div class="particle p2"></div>
    <div class="particle p3"></div>
    <div class="particle p4"></div>
    <div class="particle p5"></div>
    <div class="particle p6"></div>
  </div>
</div>

<style>
  .contact-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem 1rem;
    position: relative;
    min-height: 70vh;
    display: flex;
    flex-direction: column;
  }

  .contact-header {
    margin-bottom: 3rem;
  }

  .contact-form-container {
    position: relative;
    z-index: 10;
    flex-grow: 1;
  }

  .contact-header {
    animation-delay: 0.2s;
  }

  .contact-form-container {
    animation-delay: 0.4s;
  }

  .animate-fade-in {
    animation: fadeIn 0.8s ease forwards;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .contact-form {
    background: rgba(31, 41, 55, 0.4);
    border-radius: 12px;
    padding: 2rem;
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
    position: relative;
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
    background: rgba(31, 41, 55, 0.4);
    backdrop-filter: blur(10px);
    border-radius: 12px;
    padding: 3rem 2rem;
    text-align: center;
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.1);
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

  .contact-particles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
  }

  .particle {
    position: absolute;
    border-radius: 50%;
    background: #ff295d;
    filter: blur(1px);
    opacity: 0.5;
    animation: float 10s ease-in-out infinite;
  }

  .p1 {
    width: 12px;
    height: 12px;
    top: 28%;
    left: 10%;
    animation-delay: 0s;
  }

  .p2 {
    width: 18px;
    height: 18px;
    top: 30%;
    right: 15%;
    background: #FFBA02;
    animation-delay: -2s;
  }

  .p3 {
    width: 10px;
    height: 10px;
    bottom: 40%;
    left: 30%;
    background: #4b2ec6;
    animation-delay: -4s;
  }

  .p4 {
    width: 15px;
    height: 15px;
    top: 60%;
    right: 30%;
    animation-delay: -6s;
  }

  .p5 {
    width: 8px;
    height: 8px;
    bottom: 20%;
    left: 50%;
    background: #FFBA02;
    animation-delay: -8s;
  }

  .p6 {
    width: 10px;
    height: 10px;
    bottom: 30%;
    right: 10%;
    background: #4b2ec6;
    animation-delay: -10s;
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0) scale(1);
    }
    50% {
      transform: translateY(-20px) scale(1.1);
    }
  }
</style>
