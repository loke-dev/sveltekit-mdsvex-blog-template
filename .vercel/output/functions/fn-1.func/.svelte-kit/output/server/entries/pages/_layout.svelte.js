import { c as create_ssr_component, b as subscribe, e as escape, d as add_attribute, v as validate_component } from "../../chunks/index2.js";
import { p as page } from "../../chunks/stores.js";
import { inject } from "@vercel/analytics";
const Header_svelte_svelte_type_style_lang = "";
const css = {
  code: ".skip-link.svelte-1wxgfe9.svelte-1wxgfe9{position:absolute;top:-40px;left:0;padding:8px 16px;background-color:#000;color:#fff;z-index:100;transition:top 0.2s ease;border-radius:0 0 4px 0}.skip-link.svelte-1wxgfe9.svelte-1wxgfe9:focus{top:0}.nav-item.svelte-1wxgfe9.svelte-1wxgfe9{position:relative;height:100%;display:flex;align-items:center}.nav-link.svelte-1wxgfe9.svelte-1wxgfe9{position:relative;display:inline-block;padding:0.5rem 1rem;font-weight:600;color:white;text-decoration:none;transition:all 0.3s ease;border-radius:0.375rem}.nav-link.svelte-1wxgfe9.svelte-1wxgfe9:hover{color:#FF295D;background-color:rgba(255, 255, 255, 0.05)}.nav-link.svelte-1wxgfe9.svelte-1wxgfe9:focus{outline:none;color:#FF295D;box-shadow:0 0 0 2px #FF295D}.nav-item.active.svelte-1wxgfe9 .nav-link.svelte-1wxgfe9{color:#FF295D}.nav-item.active.svelte-1wxgfe9 .nav-link.svelte-1wxgfe9::after{content:'';position:absolute;bottom:-2px;left:50%;transform:translateX(-50%);width:30px;height:3px;background:linear-gradient(to right, #FF295D, #FFBA02);border-radius:3px}.mobile-nav-link.svelte-1wxgfe9.svelte-1wxgfe9{display:block;padding:0.75rem;font-size:1.125rem;font-weight:500;color:white;border-radius:0.375rem;transition:all 0.2s ease}.mobile-nav-link.svelte-1wxgfe9.svelte-1wxgfe9:hover{background-color:rgba(255, 255, 255, 0.05);color:#FF295D}.mobile-nav-link.svelte-1wxgfe9.svelte-1wxgfe9:focus{outline:none;color:#FF295D;box-shadow:0 0 0 2px #FF295D}.active-mobile.svelte-1wxgfe9.svelte-1wxgfe9{color:#FF295D;background:linear-gradient(to right, rgba(255, 41, 93, 0.1), rgba(255, 186, 2, 0.05));border-left:3px solid #FF295D}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let isMenuOpen = false;
  let headerElement;
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<a href="#main-content" class="skip-link svelte-1wxgfe9">Skip to main content</a>

<header class="${"fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full " + escape(
    "bg-transparent",
    true
  )}"${add_attribute("this", headerElement, 0)}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="flex justify-between items-center py-4 md:justify-start md:space-x-10">
      <div class="flex justify-start lg:w-0 lg:flex-1"><a href="/" class="flex items-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded-md" aria-label="Home" data-sveltekit-preload-data="hover" tabindex="0"${add_attribute("aria-current", $page.url.pathname === "/" ? "page" : void 0, 0)}><span class="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">loke.dev</span></a></div>

      
      <div class="md:hidden"><button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"${add_attribute("aria-expanded", isMenuOpen, 0)} aria-label="Toggle menu"><span class="sr-only">${escape("Open menu")}</span>
          ${`<svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>`}</button></div>

      
      <nav class="hidden md:flex space-x-10" aria-label="Main navigation"><ul class="flex items-center space-x-1"><li class="${"nav-item " + escape($page.url.pathname.includes("/about") ? "active" : "", true) + " svelte-1wxgfe9"}"><a href="/about" class="nav-link svelte-1wxgfe9"${add_attribute(
    "aria-current",
    $page.url.pathname.includes("/about") ? "page" : void 0,
    0
  )} data-sveltekit-preload-data="hover" tabindex="0">About
            </a></li>
          <li class="${"nav-item " + escape($page.url.pathname.includes("/journal") ? "active" : "", true) + " svelte-1wxgfe9"}"><a href="/journal" class="nav-link svelte-1wxgfe9"${add_attribute(
    "aria-current",
    $page.url.pathname.includes("/journal") ? "page" : void 0,
    0
  )} data-sveltekit-preload-data="hover" tabindex="0">Journal
            </a></li>
          <li class="${"nav-item " + escape($page.url.pathname.includes("/contact") ? "active" : "", true) + " svelte-1wxgfe9"}"><a href="/contact" class="nav-link svelte-1wxgfe9"${add_attribute(
    "aria-current",
    $page.url.pathname.includes("/contact") ? "page" : void 0,
    0
  )} data-sveltekit-preload-data="hover" tabindex="0">Contact
            </a></li>
          </ul></nav></div></div>

  
  ${``}</header>


<div class="h-20"></div>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="relative mt-20 pt-16 pb-10 bg-background">
  <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-primary to-purple-600"></div>

  <div class="container mx-auto px-6"><div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-10"><div><h2 class="text-xl font-bold mb-4 text-white">Loke.dev</h2>
        <p class="text-gray-300 mb-4">Web developer based in Sweden. Specializing in fullstack development with expertise in React, Svelte, Node.js, and TypeScript.</p>
        <p class="text-gray-400 text-sm">© ${escape((/* @__PURE__ */ new Date()).getFullYear())} Loke. All rights reserved.</p></div>

      <div><h2 class="text-xl font-bold mb-4 text-white">Navigation</h2>
        <ul class="space-y-2"><li><a href="/" class="footer-link text-gray-300" tabindex="0" data-sveltekit-preload-data="hover">Home</a></li>
          <li><a href="/about" class="footer-link text-gray-300" tabindex="0" data-sveltekit-preload-data="hover">About</a></li>
          <li><a href="/journal" class="footer-link text-gray-300" tabindex="0" data-sveltekit-preload-data="hover">Journal</a></li>
          <li><a href="/contact" class="footer-link text-gray-300" tabindex="0" data-sveltekit-preload-data="hover">Contact</a></li></ul></div>

      <div><h2 class="text-xl font-bold mb-4 text-white">Connect</h2>
        <ul class="space-y-2"><li><a href="https://github.com/loke-dev" class="footer-link text-gray-300 flex items-center" rel="noopener noreferrer" aria-label="GitHub profile" tabindex="0" target="_blank"><svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path></svg>
              GitHub
            </a></li>
          <li><a href="https://twitter.com/loke_dev" class="footer-link text-gray-300 flex items-center" rel="noopener noreferrer" aria-label="Twitter profile" tabindex="0" target="_blank"><svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
              Twitter
            </a></li>
          <li><a href="mailto:hello@loke.dev" class="footer-link text-gray-300 flex items-center" aria-label="Email me" tabindex="0"><svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              Email
            </a></li></ul></div></div>

    <div class="text-center text-sm text-gray-400 mt-8"><p>Built with <a href="https://kit.svelte.dev" class="footer-link" rel="noopener noreferrer" tabindex="0" target="_blank">SvelteKit</a> and <a href="https://tailwindcss.com" class="footer-link" rel="noopener noreferrer" tabindex="0" target="_blank">Tailwind CSS</a></p></div></div></footer>`;
});
const app = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  {
    try {
      inject({
        mode: "production",
        debug: false,
        beforeSend: (data) => {
          return data;
        }
      });
    } catch (error) {
      console.log("Vercel Analytics not available");
    }
  }
  return `${$$result.head += `<!-- HEAD_svelte-curlbp_START --><meta name="og:title" content="Loke.dev"><meta name="og:description" content="Loke is a web developer based in Sweden. Read more about me or what services I can help you with."><meta name="twitter:card" content="summary_large_image"><meta name="twitter:creator" content="@loke_dev"><!-- HEAD_svelte-curlbp_END -->`, ""}




${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

<main id="main-content" class="flex flex-1 flex-col p-8 w-full m-auto box-border mb-20 max-w-[900px]">${slots.default ? slots.default({}) : ``}</main>

${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
