import { Post, parseMarkdown } from './markdown'

/**
 * Load all blog posts from the articles directory.
 */
export async function getAllPosts(): Promise<Post[]> {
  // Using import.meta.glob to dynamically import all markdown files
  const modules = import.meta.glob('/src/articles/*.md', { query: '?raw', import: 'default' })

  const posts: Post[] = []

  for (const path in modules) {
    const load = modules[path] as () => Promise<string>
    const rawMarkdown = await load()
    const slug = path.split('/').pop()?.replace('.md', '') || ''
    const { frontmatter, content } = parseMarkdown(rawMarkdown)

    posts.push({
      frontmatter: {
        ...frontmatter,
        slug,
      },
      content,
      slug,
    })
  }

  // Sort by date (newest first)
  return posts.sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime())
}

/**
 * Get published posts (draft: false or undefined).
 */
export async function getPublishedPosts(): Promise<Post[]> {
  const posts = await getAllPosts()
  return posts.filter(post => !post.frontmatter.draft)
}

/**
 * Get a single post by slug.
 */
export async function getPostBySlug(slug: string): Promise<Post | null> {
  const modules = import.meta.glob('/src/articles/*.md', { query: '?raw', import: 'default' })
  const loader = modules[`/src/articles/${slug}.md`] as (() => Promise<string>) | undefined

  if (!loader) {
    return null
  }

  try {
    const rawMarkdown = await loader()
    const { frontmatter, content } = parseMarkdown(rawMarkdown)

    return {
      frontmatter: {
        ...frontmatter,
        slug,
      },
      content,
      slug,
    }
  } catch {
    return null
  }
}

/**
 * Get all unique tags from published posts.
 */
export async function getAllTags(): Promise<string[]> {
  const posts = await getPublishedPosts()
  const tagSet = new Set<string>()

  for (const post of posts) {
    for (const tag of post.frontmatter.tags) {
      tagSet.add(tag)
    }
  }

  return Array.from(tagSet).sort()
}

/**
 * Get posts filtered by tag.
 */
export async function getPostsByTag(tag: string): Promise<Post[]> {
  const posts = await getPublishedPosts()
  return posts.filter(post => post.frontmatter.tags.includes(tag))
}

// Re-export parseMarkdown from markdown.ts
export { parseMarkdown } from './markdown'
