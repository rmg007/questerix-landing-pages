#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import readline from 'readline'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const articlesDir = path.join(__dirname, '../src/articles')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function question(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, resolve)
  })
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

function generateFrontmatter(data) {
  const lines = ['---']
  
  if (data.title) lines.push(`title: "${data.title}"`)
  if (data.description) lines.push(`description: "${data.description}"`)
  if (data.date) lines.push(`date: "${data.date}"`)
  if (data.slug) lines.push(`slug: "${data.slug}"`)
  if (data.author) lines.push(`author: "${data.author}"`)
  if (data.coverImage) lines.push(`coverImage: "${data.coverImage}"`)
  if (data.draft) lines.push(`draft: ${data.draft}`)
  
  if (data.tags && data.tags.length > 0) {
    lines.push(`tags: [${data.tags.map(tag => `"${tag}"`).join(', ')}]`)
  }
  
  lines.push('---', '')
  return lines.join('\n')
}

function generateContent(data) {
  const content = []
  
  if (data.title) {
    content.push(`# ${data.title}`)
    content.push('')
  }
  
  if (data.description) {
    content.push(data.description)
    content.push('')
  }
  
  content.push('## Introduction')
  content.push('')
  content.push('Write your introduction here...')
  content.push('')
  
  if (data.includeImages) {
    content.push('![Hero image](/assets/generated/' + data.slug + '-hero.webp)')
    content.push('')
    content.push('## Main Section')
    content.push('')
    content.push('Add your main content here...')
    content.push('')
    content.push('![Supporting image](/assets/generated/' + data.slug + '-section.webp)')
    content.push('')
  } else {
    content.push('## Main Section')
    content.push('')
    content.push('Add your main content here...')
    content.push('')
  }
  
  content.push('## Conclusion')
  content.push('')
  content.push('Write your conclusion here...')
  content.push('')
  
  return content.join('\n')
}

async function main() {
  console.log('\n🚀 Questerix Blog Post Generator\n')
  
  const title = await question('Post title: ')
  if (!title.trim()) {
    console.log('❌ Title is required')
    rl.close()
    return
  }
  
  const description = await question('Meta description (optional): ')
  const author = await question('Author (default: Questerix Team): ') || 'Questerix Team'
  
  const tagsInput = await question('Tags (comma-separated, optional): ')
  const tags = tagsInput ? tagsInput.split(',').map(t => t.trim()).filter(Boolean) : []
  
  const includeImages = await question('Include image placeholders? (y/N): ').toLowerCase() === 'y'
  
  let coverImage = ''
  if (includeImages) {
    const slug = slugify(title)
    coverImage = `/assets/generated/${slug}-hero.webp`
  }
  
  const isDraft = await question('Save as draft? (y/N): ').toLowerCase() === 'y'
  
  const slug = slugify(title)
  const date = new Date().toISOString().split('T')[0]
  
  const frontmatter = {
    title,
    description: description || '',
    date,
    slug,
    tags,
    author,
    coverImage,
    draft: isDraft
  }
  
  const content = generateContent({ ...frontmatter, includeImages })
  const fullContent = generateFrontmatter(frontmatter) + content
  
  const filename = `${slug}.md`
  const filepath = path.join(articlesDir, filename)
  
  // Ensure articles directory exists
  if (!fs.existsSync(articlesDir)) {
    fs.mkdirSync(articlesDir, { recursive: true })
  }
  
  // Check if file already exists
  if (fs.existsSync(filepath)) {
    const overwrite = await question(`File ${filename} already exists. Overwrite? (y/N): `)
    if (overwrite.toLowerCase() !== 'y') {
      console.log('❌ Cancelled')
      rl.close()
      return
    }
  }
  
  fs.writeFileSync(filepath, fullContent, 'utf8')
  
  console.log(`\n✅ Created ${filename}`)
  console.log(`📁 Location: ${filepath}`)
  
  if (includeImages) {
    console.log('\n📷 Image placeholders added:')
    console.log(`   - ${coverImage}`)
    console.log(`   - /assets/generated/${slug}-section.webp`)
    console.log('\n💡 Add WebP images to public/assets/generated/')
  }
  
  if (isDraft) {
    console.log('\n⚠️  Post saved as draft. Set draft: false to publish.')
  }
  
  console.log('\n📝 Edit the file to add your content!')
  console.log('🌐 Preview locally: npm run dev')
  console.log('📱 Visit: http://localhost:5173/blog')
  
  rl.close()
}

main().catch(console.error)
