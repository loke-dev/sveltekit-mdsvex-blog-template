import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define the posts directory
const postsDir = path.join(__dirname, '..', 'src/posts');

// Direct mapping for specific files - first tag is the primary tag (most important)
const fileSpecificTags = {
  'setting-cookies-in-nextjs-14.svx': ['Next.js', 'Cookies', 'React'],
  'nextjs-15-params-await-requirement.svx': ['Next.js', 'React', 'JavaScript'],
  'nextjs-css-resolution-order-bug.svx': ['Next.js', 'CSS', 'Debugging'],
  'npm-platform-specific-dependencies-bug.svx': ['JavaScript', 'npm', 'DevOps'],
  'javascript-array-methods-every-beginner-should-know.svx': ['JavaScript', 'Arrays', 'Beginners'],
  'debugging-javascript-like-a-pro.svx': ['JavaScript', 'Debugging', 'DevTools'],
  'react-hooks-explained-for-beginners.svx': ['React', 'Hooks', 'JavaScript'],
  'responsive-web-design-fundamentals.svx': ['CSS', 'Responsive Design', 'HTML'],
  'css-flexbox-layout-simplified.svx': ['CSS', 'Flexbox', 'Layout'],
  'understanding-javascript-promises-for-beginners.svx': ['JavaScript', 'Promises', 'Async/Await'],
  'git-basics-for-beginners.svx': ['Git', 'Version Control', 'Beginners'],
  'understanding-web-accessibility-for-beginners.svx': ['Accessibility', 'HTML', 'CSS'],
  'mastering-command-line-basics.svx': ['CLI', 'Terminal', 'Bash'],
  'understanding-api-requests-for-beginners.svx': ['API', 'JavaScript', 'Fetch'],
  'progressive-web-apps-in-2023.svx': ['PWA', 'JavaScript', 'Web Development'],
  'ai-tools-for-modern-web-development.svx': ['AI', 'Web Development', 'Tools'],
  'modern-css-techniques-2023.svx': ['CSS', 'Web Design', 'Frontend'],
  'web-accessibility-practical-guide.svx': ['Accessibility', 'HTML', 'ARIA'],
  'typescript-tips-for-better-code.svx': ['TypeScript', 'JavaScript', 'Type Safety'],
  'nextjs-vs-sveltekit-choosing-the-right-framework.svx': ['Frameworks', 'Next.js', 'Svelte'],
  'svelte-kit-for-beginners.svx': ['Svelte', 'SvelteKit', 'JavaScript'],
  'the-power-of-chat-gpt-for-web-developers.svx': ['ChatGPT', 'AI', 'Web Development'],
  'tips-and-tricks-to-leverage-chat-gpt-as-a-web-developer.svx': ['ChatGPT', 'AI', 'Productivity'],
  'gridsome-disqus.svx': ['Gridsome', 'Disqus', 'Comments'],
  'gridsome-netlify-forms.svx': ['Gridsome', 'Netlify', 'Forms'],
  'jamstack.svx': ['JAMstack', 'Static Sites', 'Web Development'],
};

// Function to determine tags for a post
function determineTags(title, content, existingTags = [], filename) {
  // If we have specific tags for this file, use them
  if (fileSpecificTags[filename]) {
    return fileSpecificTags[filename];
  }

  // If there are existing tags, prioritize them but limit to 3
  if (existingTags && existingTags.length > 0) {
    return existingTags.slice(0, 3);
  }

  const titleAndContent = (title + ' ' + content).toLowerCase();
  const possibleTags = [];

  // Check for common technologies and concepts
  const tagKeywords = {
    'javascript': 'JavaScript',
    'typescript': 'TypeScript',
    'react': 'React',
    'next.js': 'Next.js',
    'svelte': 'Svelte',
    'sveltekit': 'SvelteKit',
    'css': 'CSS',
    'html': 'HTML',
    'git': 'Git',
    'api': 'API',
    'accessibility': 'Accessibility',
    'a11y': 'Accessibility',
    'responsive': 'Responsive Design',
    'pwa': 'PWA',
    'progressive web app': 'PWA',
    'jamstack': 'JAMstack',
    'netlify': 'Netlify',
    'command line': 'CLI',
    'cli': 'CLI',
    'terminal': 'CLI',
    'flexbox': 'Flexbox',
    'grid': 'CSS Grid',
    'hooks': 'React Hooks',
    'promises': 'Promises',
    'async': 'Async/Await',
    'debugging': 'Debugging',
    'cookies': 'Cookies',
    'chat gpt': 'ChatGPT',
    'ai': 'AI',
    'web development': 'Web Development',
    'beginner': 'Beginners',
    'npm': 'npm',
    'package': 'npm',
    'dependencies': 'npm',
    'frameworks': 'Frameworks',
  };

  for (const [keyword, tag] of Object.entries(tagKeywords)) {
    if (titleAndContent.includes(keyword) && !possibleTags.includes(tag)) {
      possibleTags.push(tag);
    }
  }

  // Return up to 3 tags
  return possibleTags.slice(0, 3);
}

// Process all blog posts
async function updateBlogPosts() {
  try {
    // Get all .svx files
    const files = fs.readdirSync(postsDir).filter(file => file.endsWith('.svx'));

    console.log(`Found ${files.length} blog posts to process`);

    for (const file of files) {
      const filePath = path.join(postsDir, file);
      const fileContent = fs.readFileSync(filePath, 'utf8');

      // Parse frontmatter
      const { data, content } = matter(fileContent);

      // Get existing tags if any
      const existingTags = data.tags || [];

      // Determine tags
      const tags = determineTags(data.title, content, existingTags, file);

      // Update frontmatter
      const updatedData = {
        ...data,
        tags,
      };

      // Remove category if it exists
      if (updatedData.category) {
        delete updatedData.category;
      }

      // Create updated content
      const updatedFileContent = matter.stringify(content, updatedData);

      // Write back to file
      fs.writeFileSync(filePath, updatedFileContent);

      console.log(`Updated ${file} with tags: ${tags.join(', ')}`);
    }

    console.log('All blog posts updated successfully!');
  } catch (error) {
    console.error('Error updating blog posts:', error);
  }
}

// Run the update function
updateBlogPosts();