// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
  // interface Error {}
  // interface Locals {}
  // interface PageData {}
  // interface Platform {}

  interface MdsvexFile {
    default: import("svelte/internal").SvelteComponent
    metadata: Record<string, string>
  }

  type MdsvexResolver = () => Promise<MdsvexFile>

  interface Post {
    slug: string
    title: string
    date: string
    published: boolean
    tag: string
    description: string
    default: import("svelte/internal").SvelteComponent
    metadata: Record<string, string>
  }

  interface Posts {
    posts: Post[]
  }
}
