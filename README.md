# loke.dev

Sveltekit personal website / portfolio, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Testing

The project uses Vitest for unit testing and Playwright for end-to-end testing. You can run tests using the following commands:

```bash
# Run unit tests
npm run test
# or with Bun
bun run test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
# or with Bun
bun run test:coverage

# Run end-to-end tests
npm run test:e2e
# or with Bun
bun run test:e2e
```

### Convenience Scripts

The project includes convenience shell scripts for running tests:

```bash
# Run unit tests
./buntest

# Run tests with coverage
./buntest-coverage

# Run end-to-end tests
./buntest-e2e
```

These scripts can be used instead of typing the full `bun run test` commands.

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.
