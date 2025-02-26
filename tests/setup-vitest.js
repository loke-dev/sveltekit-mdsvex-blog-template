import { vi } from 'vitest';
import { writable } from 'svelte/store';

// Mock SvelteKit modules
vi.mock('$app/stores', () => {
  return {
    page: writable({
      url: { pathname: '/' },
      params: {},
      route: { id: null },
      status: 200,
      error: null,
      data: {},
      form: undefined
    })
  };
});