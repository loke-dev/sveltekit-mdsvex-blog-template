/**
 * Extract slug from file path
 * @param path - File path
 * @returns Slug extracted from the path
 */
export function slugFromPath(path: string): string {
  const fileName = path.split("/").pop() || ""
  return fileName.replace(/\.(md|svx|svelte\.md)$/, "")
}
