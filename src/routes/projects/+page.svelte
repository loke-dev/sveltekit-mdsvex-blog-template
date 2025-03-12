<script lang="ts">
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';

  // Interface for project data
  interface Project {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    imageUrl: string;
    link?: string;
    github?: string;
  }

  // Placeholder projects data
  const projects: Project[] = [
    {
      id: 'gitdash',
      title: 'Gitdash',
      description: 'A modern GitHub dashboard that helps developers stay on top of their pull requests and issues. Features real-time updates, and an intuitive interface for managing GitHub workflows.',
      technologies: ['Remix', 'TypeScript', 'Tailwind CSS', 'GitHub API', 'Gitlab API'],
      imageUrl: '/images/gitdash',
      link: 'https://gitdash.dev',
      github: 'https://github.com/gitdash-dev/gitdash'
    },
    {
      id: 'tcg',
      title: 'Team Color Generator',
      description: 'A tool to generate team setup for playing Fifa for example, uses Playstation controller colors.',
      technologies: ['Nuxt', 'Canvas', 'Tailwind CSS', 'Motion One'],
      imageUrl: '/images/tcg',
      github: 'https://github.com/loke-dev/TCG'
    },
    {
      id: 'project-3',
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, task assignments, and progress tracking. Designed for teams to organize and prioritize their work.',
      technologies: ['SvelteKit', 'TypeScript', 'Tailwind CSS', 'Firebase', 'WebSockets'],
      imageUrl: '/images/placeholder-project-3',
      link: 'https://example.com/project3'
    }
  ];
</script>

<svelte:head>
  <title>Projects | Loke.dev</title>
  <meta name="description" content="Explore my projects and work as a web developer." />
</svelte:head>

<div class="projects-container">
  <header class="mb-12">
    <h1 class="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Projects</h1>
    <p class="text-lg text-gray-300 max-w-3xl">
      Here's a collection of projects I've worked on. Each project represents different skills and technologies I've used throughout my career.
    </p>
  </header>

  <div class="projects-list space-y-24">
    {#each projects as project, index (project.id)}
      <section
        class="project-item"
        in:fade={{ duration: 500, delay: index * 200 }}
      >
        <div class="flex flex-col lg:flex-row gap-8 items-center {index % 2 === 1 ? 'lg:flex-row-reverse' : ''}">
          <div class="project-image w-full lg:w-1/2">
            <div class="aspect-w-16 aspect-h-9 bg-gray-800 rounded-lg overflow-hidden shadow-xl">
              <picture>
                <source srcSet={`${project.imageUrl}.webp`} type="image/webp" />
                <img
                  class="object-cover w-full h-full"
                  src={`${project.imageUrl}.png`}
                  alt={project.title}
                  width={800}
                  height={450}
                  loading="lazy"
                />
              </picture>
            </div>
          </div>

          <div class="project-content w-full lg:w-1/2">
            <h2 class="text-3xl font-bold mb-4">{project.title}</h2>
            <p class="text-gray-300 mb-6">{project.description}</p>

            <div class="technologies mb-6">
              <h3 class="text-sm uppercase tracking-wider text-gray-400 mb-2">Technologies</h3>
              <div class="flex flex-wrap gap-2">
                {#each project.technologies as tech}
                  <span class="px-3 py-1 bg-gray-800 text-primary rounded-full text-sm">{tech}</span>
                {/each}
              </div>
            </div>

            <div class="project-links flex gap-4">
              {#if project.link}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
                >
                  View Project
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              {/if}

              {#if project.github}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center px-4 py-2 border border-gray-700 text-base font-medium rounded-md text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
                >
                  GitHub
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              {/if}
            </div>
          </div>
        </div>
      </section>
    {/each}
  </div>
</div>

<style>
  .projects-container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }

  .project-item {
    position: relative;
    width: 100%;
    padding: 2rem 0;
  }

  /* Add a subtle divider between projects */
  .project-item:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 10%;
    right: 10%;
    height: 1px;
    background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.1), transparent);
  }
</style>
