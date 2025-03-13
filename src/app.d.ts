// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
  // interface Error {}
  interface Locals {
    supabase: import("@supabase/supabase-js").SupabaseClient
    getSession: () => Promise<import("@supabase/supabase-js").Session | null>
  }
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
    tags: string[]
    description: string
    default: import("svelte/internal").SvelteComponent
    metadata: Record<string, string>
  }

  interface Posts {
    posts: Post[]
  }

  interface Comment {
    id: string
    post_slug: string
    user_id: string
    content: string
    created_at: string
    user: {
      id: string
      email: string
      display_name: string
      avatar_url: string
    }
  }
}

// Supabase Database Types
declare type Database = {
  public: {
    Tables: {
      comments: {
        Row: {
          id: string
          post_slug: string
          user_id: string
          content: string
          created_at: string
        }
        Insert: {
          id?: string
          post_slug: string
          user_id: string
          content: string
          created_at?: string
        }
        Update: {
          id?: string
          post_slug?: string
          user_id?: string
          content?: string
          created_at?: string
        }
      }
      profiles: {
        Row: {
          id: string
          email: string
          display_name: string
          avatar_url: string
          created_at: string
        }
        Insert: {
          id: string
          email: string
          display_name?: string
          avatar_url?: string
          created_at?: string
        }
        Update: {
          id?: string
          email?: string
          display_name?: string
          avatar_url?: string
          created_at?: string
        }
      }
    }
  }
}
