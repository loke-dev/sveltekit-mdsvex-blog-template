/**
 * Get a color for a tag that is accessible and visually appealing
 * @param tagName - The tag name
 * @returns The color for the tag
 */
export function getTagColor(tagName: string): string {
  const colors: Record<string, string> = {
    // Languages & Frameworks
    javascript: "#F7DF1E", // Bright yellow
    typescript: "#3178C6", // Bright blue
    react: "#61DAFB", // Bright cyan
    "next.js": "#00C7B7", // Bright teal (changed from white)
    svelte: "#FF3E00", // Bright orange

    // Web Technologies
    css: "#38B2AC", // Bright teal
    html: "#E34F26", // Bright orange-red
    api: "#00B0FF", // Bright sky blue
    web: "#6366F1", // Bright indigo
    pwa: "#9333EA", // Bright purple
    jamstack: "#F43F5E", // Bright pink

    // Tools & Practices
    git: "#F05033", // Bright red
    cli: "#10B981", // Bright green
    accessibility: "#3B82F6", // Bright blue
    ai: "#22C55E", // Bright green

    // Fallback
    default: "#60A5FA", // Bright blue
  }

  return colors[tagName.toLowerCase()] || colors.default
}
