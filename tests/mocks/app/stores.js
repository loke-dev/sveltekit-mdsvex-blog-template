import { writable } from "svelte/store"

// Mock the page store with a writable store so we can update it in tests
export const page = writable({
  url: { pathname: "/" },
  params: {},
  route: { id: null },
  status: 200,
  error: null,
  data: {},
  form: undefined
})