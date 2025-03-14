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

    // Convert tags to lowercase
    const lowercaseTags = data.tags.map(tag => tag.toLowerCase());

    // Check if any tags were changed
    const tagsChanged = JSON.stringify(originalTags) !== JSON.stringify(lowercaseTags);

    if (tagsChanged) {
      // Update tags to lowercase
      data.tags = lowercaseTags;

      // Convert back to frontmatter
      const updatedContent = matter.stringify(content, data);

      // Write back to file
      fs.writeFileSync(filePath, updatedContent);

      console.log(`Updated tags in ${file}:`);
      console.log(`  Before: ${originalTags.join(', ')}`);
      console.log(`  After: ${lowercaseTags.join(', ')}`);

      updatedCount++;
    }
  }
});

console.log(`\nUpdated tags in ${updatedCount} blog posts`);