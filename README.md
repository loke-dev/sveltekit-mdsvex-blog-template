# loke.dev

Sveltekit personal website / portfolio, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Features

- Blog with MDSvex for Markdown content
- Portfolio section
- Comment system with Supabase authentication and database
- Social authentication with GitHub and Google
- Responsive design with Tailwind CSS

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

### Supabase Setup

This project uses Supabase for authentication and database functionality. To set up Supabase:

1. Create a new Supabase project at [https://supabase.com](https://supabase.com)
2. Follow the setup instructions in `supabase/README.md`
3. Add your Supabase URL and anon key to the `.env` file:

```
PUBLIC_SUPABASE_URL=your_supabase_url
PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Testing

The project uses Vitest for unit testing and Playwright for end-to-end testing. You can run tests using the following commands:

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

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.
