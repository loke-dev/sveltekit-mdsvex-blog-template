# SvelteKit MDSvex Blog Template

A blazing fast, modern blog template built with SvelteKit, MDSvex, and TailwindCSS. Perfect for developers, writers, and creators who want a performant, SEO-friendly personal website with a built-in blog.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Floke-dev%2Fsveltekit-mdsvex-blog-template)

![Image](https://github.com/user-attachments/assets/88d8ac01-220c-4c25-a3bd-27bc1ae8825a)

## ✨ Features

- **⚡️ Lightning Fast**: Built on SvelteKit for exceptional performance and quick page loads
- **📝 MDSvex Integration**: Write your blog posts in Markdown with full Svelte component support
- **🎨 Modern Styling**: Powered by TailwindCSS with typography plugin for beautiful, responsive design
- **🔍 SEO Optimized**:
  - Built-in meta tags and structured data
  - Automatic sitemap generation
  - Social media preview cards
- **📱 Responsive Design**: Looks great on all devices, from mobile to desktop
- **📊 Analytics Ready**: Vercel Analytics integration out of the box
- **🧪 Testing Setup**: Comprehensive testing with Vitest and Playwright
- **🏷️ Content Organization**: Tag-based categorization for easy content discovery
- **🚀 Easy Deployment**: Deploy anywhere that supports SvelteKit, optimized for Vercel

## 🚀 Quick Start

### Using the Template

1. Click the "Use this template" button on GitHub
2. Clone your new repository:
```bash
git clone <your-repo-url>
cd <your-repo-name>
```

### Installation

```bash
pnpm install
```

### Development

Start the development server:

```bash
pnpm dev
```

Visit `http://localhost:5173` to see your site.

## 📝 Writing Blog Posts

Create new `.svx` files in `src/posts/` with this frontmatter:

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

## ⚙️ Configuration

1. Update `src/variables.ts` with your information
2. Customize the site layout in `src/routes/+layout.svelte`
3. Modify the homepage in `src/routes/+page.svelte`

## 🧪 Testing

```bash
pnpm test           # Run unit tests
pnpm test:watch     # Run tests in watch mode
pnpm test:coverage  # Run tests with coverage
pnpm test:e2e       # Run end-to-end tests
```

## 🏗️ Production

Build for production:

```bash
pnpm build
```

Preview the production build:

```bash
pnpm preview
```

## 📦 Deployment

This template is optimized for deployment on Vercel and will work out of the box. It's also compatible with any platform that supports SvelteKit.

## 📄 License

MIT

## ❤️ Credits

Created by [Loke](https://github.com/loke-dev) and the SvelteKit community.
