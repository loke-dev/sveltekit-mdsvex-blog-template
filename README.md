# SvelteKit MDsveX Blog Template

A blog template built with SvelteKit, MDsveX, and Tailwind CSS. Write posts in Markdown with full Svelte component support.

![SvelteKit MDsveX Blog Template](https://github.com/user-attachments/assets/88d8ac01-220c-4c25-a3bd-27bc1ae8825a)

## Features

- **Fast** — SvelteKit with SSG, quick page loads out of the box
- **MDsveX** — Markdown posts with Svelte components
- **Tailwind CSS** — Typography plugin for clean post styling
- **SEO Optimised** — Meta tags, structured data, sitemap, social previews
- **Tags** — Tag-based post categorisation
- **Dark Mode** — Light and dark themes
- **Deployment** — Cloudflare Workers configuration included
- **Testing** — Vitest and Playwright configured

## Stack

- [SvelteKit](https://kit.svelte.dev)
- [MDsveX](https://mdsvex.pngwn.io)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript](https://typescriptlang.org)
- [Vitest](https://vitest.dev)
- [Playwright](https://playwright.dev)

## Get Started

```bash
git clone https://github.com/loke-dev/sveltekit-mdsvex-blog-template my-blog
cd my-blog
pnpm install
pnpm dev
```

Visit `http://localhost:5173` to see your site.

Requires Node.js 22.12+ and pnpm 11.17.0.

## Writing Posts

Create `.svx` files in `src/posts/`:

```markdown
---
title: Your Post Title
description: A brief description of your post
date: 2023-06-15
published: true
tag: svelte
---

Your content here...
```

## Customise

1. Update `src/variables.ts` with your information
2. Customise the layout in `src/routes/+layout.svelte`
3. Modify the homepage in `src/routes/+page.svelte`

## Testing

```bash
pnpm test           # Unit tests
pnpm test:e2e       # End-to-end tests
pnpm test:coverage  # Coverage report
pnpm ci-check       # Complete local quality gate
```

## Deploy

[Live demo](https://sveltekit-mdsvex-blog.loke.dev)

The included Cloudflare adapter and Wrangler configuration deploy directly to
Cloudflare Workers:

```bash
pnpm deploy:dry
pnpm deploy
```

TypeScript 6 is intentional: it is the newest release currently supported by
typescript-eslint.

## License

MIT
