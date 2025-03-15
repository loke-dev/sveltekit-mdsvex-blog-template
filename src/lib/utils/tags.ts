/**
 * Returns a color for a given tag name
 * @param tagName - The name of the tag
 * @returns The color for the tag
 */
export function getTagColor(tagName: string): string {
  // Map tags to specific colors for consistency
  const colorMap: Record<string, string> = {
    JavaScript: "#F7DF1E",
    TypeScript: "#3178C6",
    React: "#61DAFB",
    "Next.js": "#000000",
    Svelte: "#FF3E00",
    SvelteKit: "#FF3E00",
    CSS: "#1572B6",
    HTML: "#E34F26",
    "Web Development": "#4285F4",
    DevOps: "#2496ED",
    Git: "#F05032",
    "Version Control": "#F05032",
    CLI: "#4EAA25",
    Terminal: "#4EAA25",
    Bash: "#4EAA25",
    API: "#009688",
    Fetch: "#009688",
    Accessibility: "#0D96F2",
    ARIA: "#0D96F2",
    PWA: "#5A0FC8",
    "Responsive Design": "#1572B6",
    Flexbox: "#1572B6",
    Layout: "#1572B6",
    Frameworks: "#764ABC",
    JAMstack: "#F0047F",
    "Static Sites": "#F0047F",
    Netlify: "#00C7B7",
    Gridsome: "#00A672",
    Disqus: "#2E9FFF",
    Comments: "#2E9FFF",
    Forms: "#00C7B7",
    Hooks: "#61DAFB",
    Promises: "#F7DF1E",
    "Async/Await": "#F7DF1E",
    Arrays: "#F7DF1E",
    Debugging: "#F44336",
    DevTools: "#F44336",
    Cookies: "#D63AFF",
    ChatGPT: "#10A37F",
    AI: "#10A37F",
    Productivity: "#7C4DFF",
    Tools: "#7C4DFF",
    "Web Design": "#FF6B6B",
    Frontend: "#FF6B6B",
    "Type Safety": "#3178C6",
    Beginners: "#4CAF50",
    npm: "#CB3837",
  }

  // Return the mapped color or a default color
  return colorMap[tagName] || "#4B5563"
}
