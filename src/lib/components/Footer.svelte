<footer class="relative mt-20 pt-16 pb-10 bg-background z-10">
  <!-- Decorative top border with gradient -->
  <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-primary to-purple-600"></div>

  <div class="container mx-auto px-6">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-10">
      <div>
        <h2 class="text-xl font-bold mb-4 text-white">Loke.dev</h2>
        <p class="text-gray-300 mb-4">Web developer based in Sweden. Specializing in fullstack development with expertise in React, Node.js, TypeScript and more.</p>
        <p class="text-gray-400 text-sm">© {new Date().getFullYear()} Loke. All rights reserved.</p>
      </div>

      <div>
        <h2 class="text-xl font-bold mb-4 text-white">Navigation</h2>
        <ul class="space-y-2">
          <li><a href="/" class="footer-link text-gray-300" tabindex="0" data-sveltekit-preload-data="hover">Home</a></li>
          <li><a href="/about" class="footer-link text-gray-300" tabindex="0" data-sveltekit-preload-data="hover">About</a></li>
          <li><a href="/journal" class="footer-link text-gray-300" tabindex="0" data-sveltekit-preload-data="hover">Journal</a></li>
          <li><a href="/contact" class="footer-link text-gray-300" tabindex="0" data-sveltekit-preload-data="hover">Contact</a></li>
        </ul>
      </div>

      <div>
        <h2 class="text-xl font-bold mb-4 text-white">Connect</h2>
        <ul class="space-y-2">
          <li>
            <a href="https://github.com/loke-dev" class="footer-link text-gray-300 flex items-center" rel="noopener noreferrer" aria-label="GitHub profile" tabindex="0" target="_blank">
              <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
              </svg>
              GitHub
            </a>
          </li>
          <li>
            <a href="https://twitter.com/loke_dev" class="footer-link text-gray-300 flex items-center" rel="noopener noreferrer" aria-label="Twitter profile" tabindex="0" target="_blank">
              <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
              Twitter
            </a>
          </li>
          <li>
            <a href="mailto:hello@loke.dev" class="footer-link text-gray-300 flex items-center" aria-label="Email me" tabindex="0">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              Email
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="text-center text-sm text-gray-400 mt-8">
      <p>Built with <a href="https://kit.svelte.dev" class="footer-link" rel="noopener noreferrer" tabindex="0" target="_blank">SvelteKit</a> and <a href="https://tailwindcss.com" class="footer-link" rel="noopener noreferrer" tabindex="0" target="_blank">Tailwind CSS</a></p>
    </div>
  </div>
</footer>
