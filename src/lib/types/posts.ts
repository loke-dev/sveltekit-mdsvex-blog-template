import type { Component } from "svelte"

export interface Post {
  slug: string
  title: string
  description: string
  date: string
  published: boolean
  tag: string
  [key: string]: unknown
}

export interface MdsvexFile {
  default: Component
  metadata: Omit<Post, "slug">
}
