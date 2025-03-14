<script>
  import Link from "./Link.svelte";
</script>

<footer class="relative mt-20 pt-16 pb-10 bg-background z-10">
  <!-- Decorative top border with gradient -->
  <div class="absolute top-0 left-0 right-0 h-1 footer-glow"></div>

  <!-- Animated particles -->
  <div class="footer-particles">
    <div class="particle p1"></div>
    <div class="particle p2"></div>
    <div class="particle p3"></div>
    <div class="particle p4"></div>
    <div class="particle p5"></div>
  </div>

  <div class="container mx-auto px-6">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-10">
      <div class="footer-column">
        <h2 class="text-xl font-bold mb-4 text-white">Loke<span class="text-primary">.</span>dev</h2>
        <p class="text-gray-300 mb-4">Web developer based in Sweden. Specializing in fullstack development with expertise in React, Node.js, TypeScript and more.</p>
        <p class="text-gray-400 text-sm">© {new Date().getFullYear()} Loke. All rights reserved.</p>
      </div>

      <div class="footer-column">
        <h2 class="text-xl font-bold mb-4 text-white">Navigation</h2>
        <ul class="space-y-2">
          <li><Link href="/" variant="footer">Home</Link></li>
          <li><Link href="/about" variant="footer">About</Link></li>
          <li><Link href="/journal" variant="footer">Journal</Link></li>
          <li><Link href="/contact" variant="footer">Contact</Link></li>
        </ul>
      </div>

      <div class="footer-column">
        <h2 class="text-xl font-bold mb-4 text-white">Connect</h2>
        <ul class="space-y-2">
          <li>
            <Link href="https://github.com/loke-dev" variant="footer" external={true} className="social-link">
              <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
              </svg>
              GitHub
            </Link>
          </li>
          <li>
            <Link href="https://twitter.com/loke_dev" variant="footer" external={true} className="social-link">
              <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
              Twitter
            </Link>
          </li>
          <li>
            <Link href="mailto:hello@loke.dev" variant="footer" className="social-link">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              Email
            </Link>
          </li>
        </ul>
      </div>
    </div>

    <div class="text-center text-sm text-gray-400 mt-8">
      <p>Built with <Link href="https://kit.svelte.dev" variant="tech" external={true}>SvelteKit</Link> and <Link href="https://tailwindcss.com" variant="tech" external={true}>Tailwind CSS</Link></p>
    </div>
  </div>
</footer>

<style>
  .footer-glow {
    background: linear-gradient(90deg,
      rgba(255, 41, 93, 0.7),
      rgba(255, 186, 2, 0.7),
      rgba(75, 46, 198, 0.7),
      rgba(255, 41, 93, 0.7)
    );
    background-size: 300% 100%;
    animation: gradient-shift 15s ease infinite;
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

  .footer-particles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    pointer-events: none;
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
    top: 25%;
    left: 20%;
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
    right: 35%;
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

  @keyframes float {
    0%, 100% {
      transform: translateY(0) scale(1);
    }
    50% {
      transform: translateY(-20px) scale(1.1);
    }
  }

  .footer-column {
    position: relative;
    animation: fadeIn 0.8s ease-out;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .social-link {
    display: flex;
    align-items: center;
  }

  .social-link svg {
    transition: transform 0.2s ease;
  }

  .social-link:hover svg {
    transform: scale(1.1);
  }
</style>
