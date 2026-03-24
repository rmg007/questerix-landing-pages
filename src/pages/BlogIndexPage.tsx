import { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import SiteFooter from '../components/SiteFooter'
import SiteHeader from '../components/SiteHeader'
import { getPublishedPosts, getAllTags } from '../lib/blog'
import type { Post } from '../lib/markdown'

export default function BlogIndexPage() {
  const [posts, setPosts] = useState<Post[]>([])
  const [tags, setTags] = useState<string[]>([])
  const [searchParams, setSearchParams] = useSearchParams()
  const selectedTag = searchParams.get('tag')

  useEffect(() => {
    const loadData = async () => {
      const [postsData, tagsData] = await Promise.all([
        getPublishedPosts(),
        getAllTags()
      ])
      setPosts(postsData)
      setTags(tagsData)
    }
    loadData()
  }, [])

  const filteredPosts = selectedTag
    ? posts.filter(post => post.frontmatter.tags.includes(selectedTag))
    : posts

  const handleTagClick = (tag: string) => {
    if (selectedTag === tag) {
      setSearchParams({})
    } else {
      setSearchParams({ tag })
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <SiteHeader />
      
      <main style={{ flex: 1, padding: '2rem 1.5rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <header style={{ marginBottom: '3rem', textAlign: 'center' }}>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--text-100)', marginBottom: '1rem' }}>
              Questerix Blog
            </h1>
            <p style={{ fontSize: '1.125rem', color: 'var(--alpha-white-70)', maxWidth: '600px', margin: '0 auto' }}>
              Insights, strategies, and stories about mastery-based learning and educational innovation.
            </p>
          </header>

          {tags.length > 0 && (
            <section style={{ marginBottom: '3rem' }}>
              <h2 style={{ fontSize: '1rem', fontWeight: '600', color: 'var(--text-200)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Filter by tag
              </h2>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <button
                  onClick={() => setSearchParams({})}
                  style={{
                    padding: '0.5rem 1rem',
                    background: !selectedTag ? 'var(--gradient-primary)' : 'transparent',
                    color: !selectedTag ? 'white' : 'var(--alpha-white-70)',
                    border: '1px solid var(--alpha-white-20)',
                    borderRadius: '2rem',
                    fontSize: '0.875rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={(e: any) => {
                    if (!selectedTag) return
                    e.target.style.background = 'var(--alpha-white-10)'
                    e.target.style.color = 'var(--text-100)'
                  }}
                  onMouseLeave={(e: any) => {
                    if (!selectedTag) return
                    e.target.style.background = 'transparent'
                    e.target.style.color = 'var(--alpha-white-70)'
                  }}
                >
                  All posts
                </button>
                {tags.map(tag => (
                  <button
                    key={tag}
                    onClick={() => handleTagClick(tag)}
                    style={{
                      padding: '0.5rem 1rem',
                      background: selectedTag === tag ? 'var(--gradient-primary)' : 'transparent',
                      color: selectedTag === tag ? 'white' : 'var(--alpha-white-70)',
                      border: '1px solid var(--alpha-white-20)',
                      borderRadius: '2rem',
                      fontSize: '0.875rem',
                      cursor: 'pointer',
                      transition: 'all 0.2s'
                    }}
                    onMouseEnter={(e: any) => {
                      if (selectedTag === tag) return
                      e.target.style.background = 'var(--alpha-white-10)'
                      e.target.style.color = 'var(--text-100)'
                    }}
                    onMouseLeave={(e: any) => {
                      if (selectedTag === tag) return
                      e.target.style.background = 'transparent'
                      e.target.style.color = 'var(--alpha-white-70)'
                    }}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </section>
          )}

          {selectedTag && (
            <div style={{ marginBottom: '2rem', padding: '1rem', background: 'var(--alpha-white-05)', borderRadius: '0.5rem' }}>
              <p style={{ color: 'var(--alpha-white-70)', fontSize: '0.875rem' }}>
                Showing posts tagged with <strong>{selectedTag}</strong>.{' '}
                <button
                  onClick={() => setSearchParams({})}
                  style={{ background: 'none', border: 'none', color: 'var(--gradient-primary)', cursor: 'pointer', textDecoration: 'underline' }}
                >
                  Clear filter
                </button>
              </p>
            </div>
          )}

          <section>
            {filteredPosts.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '4rem 0' }}>
                <p style={{ color: 'var(--alpha-white-50)', fontSize: '1.125rem' }}>
                  {selectedTag ? `No posts found with tag "${selectedTag}".` : 'No posts found.'}
                </p>
              </div>
            ) : (
              <div style={{ display: 'grid', gap: '2rem' }}>
                {filteredPosts.map(post => (
                  <article
                    key={post.slug}
                    style={{
                      padding: '1.5rem',
                      background: 'var(--surface-900)',
                      border: '1px solid var(--alpha-white-06)',
                      borderRadius: '0.75rem',
                      transition: 'all 0.2s'
                    }}
                    onMouseEnter={(e: any) => {
                      e.currentTarget.style.background = 'var(--surface-800)'
                      e.currentTarget.style.borderColor = 'var(--alpha-white-12)'
                      e.currentTarget.style.transform = 'translateY(-2px)'
                    }}
                    onMouseLeave={(e: any) => {
                      e.currentTarget.style.background = 'var(--surface-900)'
                      e.currentTarget.style.borderColor = 'var(--alpha-white-06)'
                      e.currentTarget.style.transform = 'translateY(0)'
                    }}
                  >
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      <div>
                        <Link
                          to={`/blog/${post.slug}`}
                          style={{
                            fontSize: '1.5rem',
                            fontWeight: 'bold',
                            color: 'var(--text-100)',
                            textDecoration: 'none',
                            lineHeight: 1.3
                          }}
                          onMouseEnter={(e: any) => (e.currentTarget.style.color = 'var(--gradient-primary)')}
                          onMouseLeave={(e: any) => (e.currentTarget.style.color = 'var(--text-100)')}
                        >
                          {post.frontmatter.title}
                        </Link>
                      </div>
                      
                      <p style={{ color: 'var(--alpha-white-70)', lineHeight: 1.6, margin: 0 }}>
                        {post.frontmatter.description}
                      </p>
                      
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                          {post.frontmatter.tags.map(tag => (
                            <button
                              key={tag}
                              onClick={() => handleTagClick(tag)}
                              style={{
                                padding: '0.25rem 0.75rem',
                                background: 'var(--alpha-white-10)',
                                color: 'var(--alpha-white-80)',
                                border: 'none',
                                borderRadius: '1rem',
                                fontSize: '0.75rem',
                                cursor: 'pointer',
                                transition: 'all 0.2s'
                              }}
                              onMouseEnter={(e: any) => {
                                e.target.style.background = 'var(--alpha-white-20)'
                                e.target.style.color = 'var(--text-100)'
                              }}
                              onMouseLeave={(e: any) => {
                                e.target.style.background = 'var(--alpha-white-10)'
                                e.target.style.color = 'var(--alpha-white-80)'
                              }}
                            >
                              {tag}
                            </button>
                          ))}
                        </div>
                        
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.875rem', color: 'var(--alpha-white-50)' }}>
                          <span>{post.frontmatter.author}</span>
                          <span>•</span>
                          <span>{formatDate(post.frontmatter.date)}</span>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </section>
        </div>
      </main>
      
      <SiteFooter />
    </div>
  )
}
