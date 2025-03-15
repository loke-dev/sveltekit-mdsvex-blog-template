# SvelteKit MDSvex Blog Template

A modern, fast, and SEO-friendly blog template built with SvelteKit, MDSvex, and TailwindCSS. Perfect for developers, writers, and creators looking to build a personal website with a blog.

![Image](https://github.com/user-attachments/assets/88d8ac01-220c-4c25-a3bd-27bc1ae8825a)

## Features

- 📝 MDSvex for writing blog posts in Markdown with Svelte components
- 🎨 TailwindCSS for styling with typography plugin
- 🔍 SEO optimized with meta tags and structured data
- 📱 Fully responsive design
- 🚀 Fast page loads with SvelteKit
- 📊 Vercel Analytics integration
- 🧪 Testing setup with Vitest and Playwright
- 🏷️ Tag-based categorization for posts

## Getting Started

### Using as a Template

1. Click the "Use this template" button on GitHub
2. Clone your new repository
3. Install dependencies:

```bash
npm install
# or
pnpm install
# or
yarn install
```

4. Start the development server:

```bash
npm run dev
# or
npm run dev -- --open
```

### Configuration

1. Update `src/variables.ts` with your personal information
2. Modify the site layout in `src/routes/+layout.svelte`
3. Update the homepage in `src/routes/+page.svelte`
4. Add your own blog posts in `src/posts/`

## Writing Blog Posts

Create new `.svx` files in the `src/posts/` directory. Each post should include frontmatter:

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

## Testing

```bash
# Run unit tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Run end-to-end tests
npm run test:e2e
```

## Building for Production

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Deployment

This template is optimized for deployment on Vercel, but can be deployed on any platform that supports SvelteKit.

## License

MIT

## Credits

Created with ❤️ by the SvelteKit community. Based on the original work by [Loke](https://github.com/loke-dev).
