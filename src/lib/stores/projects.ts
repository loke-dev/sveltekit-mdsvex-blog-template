import { variables } from "$src/variables"

// Create a state object that can be imported and used across components
export const projects = $state([]);

// Function to load projects data
export function loadProjects() {
  // Example implementation - replace with actual data loading logic
  // This could be an API call or other data source
  setTimeout(() => {
    projects = [
      // Your project data here
    ];
  }, 100);
}

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
