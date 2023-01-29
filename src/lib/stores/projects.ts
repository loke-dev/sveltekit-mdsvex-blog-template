import { writable } from "svelte/store"
import { variables } from "$src/variables"

export const projects = writable([])

const fetchProjects = async () => {
  const url =
    "https://api.github.com/users/loke-dev/repos?sort=updated&direction=desc&per_page=100&type=public"
  const response = await fetch(url, {
    headers: {
      Authorization: `token ${variables.githubToken}`,
    },
  })
  const data = await response.json()

  projects.set(
    data
      .filter((d) => d.stargazers_count > 0)
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
  )
}

fetchProjects()
