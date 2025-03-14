#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to the posts directory
const postsDir = path.join(__dirname, '..', 'src/posts');

// Primary tag mapping - map specific technologies/topics to primary tags
const primaryTagMap = {
  // Frontend frameworks
  'react': 'react',
  'next.js': 'next.js',
  'svelte': 'svelte',
  'sveltekit': 'svelte',

  // Languages
  'javascript': 'javascript',
  'typescript': 'typescript',
  'html': 'html',
  'css': 'css',

  // CSS related
  'flexbox': 'css',
  'responsive design': 'css',
  'web design': 'css',

  // Tools and APIs
  'api': 'api',
  'fetch': 'api',
  'git': 'git',
  'cli': 'cli',
  'terminal': 'cli',
  'bash': 'cli',
  'devtools': 'devtools',

  // Concepts
  'accessibility': 'accessibility',
  'debugging': 'debugging',
  'promises': 'javascript',
  'async/await': 'javascript',
  'hooks': 'react',
  'arrays': 'javascript',

  // Other
  'ai': 'ai',
  'chatgpt': 'ai',
  'pwa': 'pwa',
  'jamstack': 'jamstack',
  'static sites': 'jamstack',
  'version control': 'git',
  'type safety': 'typescript',
  'cookies': 'web',
  'forms': 'web',
  'comments': 'web',
  'netlify': 'web',
  'gridsome': 'web',
  'disqus': 'web',
  'npm': 'javascript',
  'devops': 'devops',
  'productivity': 'productivity',
  'frontend': 'web',
  'web development': 'web',
  'tools': 'tools',
  'frameworks': 'web',
  'beginners': 'beginners',
  'layout': 'css',
  'aria': 'accessibility'
};

// Get all markdown files
const postFiles = fs.readdirSync(postsDir).filter(file =>
  file.endsWith('.md') || file.endsWith('.svx') || file.endsWith('.svelte.md')
);

console.log(`Found ${postFiles.length} blog posts`);

let updatedCount = 0;

// Process each file
postFiles.forEach(file => {
  const filePath = path.join(postsDir, file);
  const fileContent = fs.readFileSync(filePath, 'utf8');

  // Parse frontmatter
  const { data, content } = matter(fileContent);

  // Check if the post has tags
  if (data.tags && Array.isArray(data.tags)) {
    const originalTags = [...data.tags];

    // Find the primary tag
    let primaryTag = null;

    // First, try to find a tag that matches directly with our primary tag map
    for (const tag of originalTags) {
      const lowercaseTag = tag.toLowerCase();
      if (primaryTagMap[lowercaseTag]) {
        primaryTag = primaryTagMap[lowercaseTag];
        break;
      }
    }

    // If no primary tag found, use the first tag or 'web' as fallback
    if (!primaryTag && originalTags.length > 0) {
      const firstTagLower = originalTags[0].toLowerCase();
      primaryTag = primaryTagMap[firstTagLower] || firstTagLower;
    } else if (!primaryTag) {
      primaryTag = 'web';
    }

    // Set the new tags array with just the primary tag
    const newTags = [primaryTag];

    // Check if tags were changed
    const tagsChanged = JSON.stringify(originalTags) !== JSON.stringify(newTags);

    if (tagsChanged) {
      // Update tags
      data.tags = newTags;

      // Convert back to frontmatter
      const updatedContent = matter.stringify(content, data);

      // Write back to file
      fs.writeFileSync(filePath, updatedContent);

      console.log(`Updated tags in ${file}:`);
      console.log(`  Before: ${originalTags.join(', ')}`);
      console.log(`  After: ${newTags.join(', ')}`);

      updatedCount++;
    }
  }
});

console.log(`\nUpdated tags in ${updatedCount} blog posts`);