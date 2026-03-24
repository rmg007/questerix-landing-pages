export interface PostFrontmatter {
  title: string
  description: string
  date: string
  slug: string
  tags: string[]
  author: string
  coverImage?: string
  draft?: boolean
}

export interface Post {
  frontmatter: PostFrontmatter
  content: string
  slug: string
}

/**
 * Parse markdown string into frontmatter and content.
 */
export function parseMarkdown(markdown: string): { frontmatter: PostFrontmatter; content: string } {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/
  const match = markdown.match(frontmatterRegex)

  if (!match) {
    throw new Error('Markdown must start with YAML frontmatter')
  }

  const [, rawFrontmatter, content] = match
  const frontmatter: PostFrontmatter = {
    title: '',
    description: '',
    date: '',
    slug: '',
    tags: [],
    author: '',
    ...parseYaml(rawFrontmatter),
  }

  return { frontmatter, content: content.trim() }
}

/**
 * Very minimal YAML parser for frontmatter.
 * Supports only the fields we need.
 */
function parseYaml(str: string): Partial<PostFrontmatter> {
  const result: Partial<PostFrontmatter> = {}
  const lines = str.split('\n')

  for (const line of lines) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue

    const colonIndex = trimmed.indexOf(':')
    if (colonIndex === -1) continue

    const key = trimmed.slice(0, colonIndex).trim()
    const rawValue = trimmed.slice(colonIndex + 1).trim()

    if (key === 'title' || key === 'description' || key === 'date' || key === 'slug' || key === 'author' || key === 'coverImage') {
      result[key as keyof PostFrontmatter] = rawValue.replace(/^["']|["']$/g, '') as any
    } else if (key === 'tags') {
      // Simple array parsing: ["a", "b"] or a, b, c
      const cleaned = rawValue.replace(/^\[|\]$/g, '').trim()
      if (cleaned) {
        result.tags = cleaned.split(',').map(s => s.trim().replace(/^["']|["']$/g, '')).filter(Boolean)
      } else {
        result.tags = []
      }
    } else if (key === 'draft') {
      result.draft = rawValue === 'true'
    }
  }

  return result
}

/**
 * Get a typed frontmatter value with fallback.
 */
export function frontmatterValue<T extends keyof PostFrontmatter>(
  frontmatter: PostFrontmatter,
  key: T,
  fallback: PostFrontmatter[T]
): PostFrontmatter[T] {
  const value = frontmatter[key]
  return value !== undefined && value !== null ? value : fallback
}
