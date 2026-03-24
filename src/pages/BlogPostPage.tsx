import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import SiteFooter from '../components/SiteFooter'
import SiteHeader from '../components/SiteHeader'
import { getPostBySlug } from '../lib/blog'
import type { Post } from '../lib/markdown'

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>()
  const [post, setPost] = useState<Post | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadPost = async () => {
      if (!slug) return
      
      try {
        const postData = await getPostBySlug(slug)
        setPost(postData)
      } catch (error) {
        console.error('Failed to load post:', error)
      } finally {
        setLoading(false)
      }
    }
    loadPost()
  }, [slug])

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <SiteHeader />
        <main style={{ flex: 1, padding: '4rem 1.5rem', textAlign: 'center' }}>
          <p style={{ color: 'var(--alpha-white-70)' }}>Loading...</p>
        </main>
        <SiteFooter />
      </div>
    )
  }

  if (!post) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <SiteHeader />
        <main style={{ flex: 1, padding: '4rem 1.5rem', textAlign: 'center' }}>
          <h1 style={{ fontSize: '2rem', color: 'var(--text-100)', marginBottom: '1rem' }}>
            Post not found
          </h1>
          <p style={{ color: 'var(--alpha-white-70)', marginBottom: '2rem' }}>
            The blog post you're looking for doesn't exist or has been removed.
          </p>
          <Link
            to="/blog"
            style={{
              display: 'inline-block',
              padding: '0.75rem 1.5rem',
              background: 'var(--gradient-primary)',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '0.5rem',
              fontWeight: '500'
            }}
          >
            Back to Blog
          </Link>
        </main>
        <SiteFooter />
      </div>
    )
  }

  if (post.frontmatter.draft) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <SiteHeader />
        <main style={{ flex: 1, padding: '4rem 1.5rem', textAlign: 'center' }}>
          <h1 style={{ fontSize: '2rem', color: 'var(--text-100)', marginBottom: '1rem' }}>
            Draft Post
          </h1>
          <p style={{ color: 'var(--alpha-white-70)', marginBottom: '2rem' }}>
            This post is still a work in progress and isn't available yet.
          </p>
          <Link
            to="/blog"
            style={{
              display: 'inline-block',
              padding: '0.75rem 1.5rem',
              background: 'var(--gradient-primary)',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '0.5rem',
              fontWeight: '500'
            }}
          >
            Back to Blog
          </Link>
        </main>
        <SiteFooter />
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <SiteHeader />
      
      <article style={{ flex: 1 }}>
        {post.frontmatter.coverImage && (
          <div style={{ 
            width: '100%', 
            height: '400px', 
            background: 'var(--surface-800)',
            backgroundImage: `url(${post.frontmatter.coverImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderBottom: '1px solid var(--alpha-white-06)'
          }} />
        )}
        
        <header style={{ 
          padding: '3rem 1.5rem 2rem', 
          borderBottom: '1px solid var(--alpha-white-06)',
          background: 'var(--surface-950)'
        }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <Link
              to="/blog"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: 'var(--alpha-white-70)',
                textDecoration: 'none',
                fontSize: '0.875rem',
                marginBottom: '2rem',
                transition: 'color 0.2s'
              }}
              onMouseEnter={(e: any) => (e.currentTarget.style.color = 'var(--text-100)')}
              onMouseLeave={(e: any) => (e.currentTarget.style.color = 'var(--alpha-white-70)')}
            >
              ← Back to Blog
            </Link>
            
            <h1 style={{ 
              fontSize: '2.5rem', 
              fontWeight: 'bold', 
              color: 'var(--text-100)', 
              lineHeight: 1.2,
              marginBottom: '1.5rem'
            }}>
              {post.frontmatter.title}
            </h1>
            
            <p style={{ 
              fontSize: '1.25rem', 
              color: 'var(--alpha-white-70)', 
              lineHeight: 1.6,
              marginBottom: '2rem'
            }}>
              {post.frontmatter.description}
            </p>
            
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '1rem',
              fontSize: '0.875rem',
              color: 'var(--alpha-white-50)'
            }}>
              <span>{post.frontmatter.author}</span>
              <span>•</span>
              <span>{formatDate(post.frontmatter.date)}</span>
            </div>
            
            {post.frontmatter.tags.length > 0 && (
              <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem', flexWrap: 'wrap' }}>
                {post.frontmatter.tags.map(tag => (
                  <span
                    key={tag}
                    style={{
                      padding: '0.25rem 0.75rem',
                      background: 'var(--alpha-white-10)',
                      color: 'var(--alpha-white-80)',
                      borderRadius: '1rem',
                      fontSize: '0.75rem'
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </header>
        
        <main style={{ 
          padding: '3rem 1.5rem',
          background: 'var(--surface-900)'
        }}>
          <div style={{ 
            maxWidth: '800px', 
            margin: '0 auto',
            color: 'var(--text-100)',
            lineHeight: 1.7
          }}>
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ children }) => (
                  <h1 style={{ 
                    fontSize: '2rem', 
                    fontWeight: 'bold', 
                    marginTop: '2.5rem', 
                    marginBottom: '1rem',
                    color: 'var(--text-100)',
                    lineHeight: 1.2
                  }}>
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 style={{ 
                    fontSize: '1.5rem', 
                    fontWeight: 'bold', 
                    marginTop: '2rem', 
                    marginBottom: '1rem',
                    color: 'var(--text-100)',
                    lineHeight: 1.3
                  }}>
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 style={{ 
                    fontSize: '1.25rem', 
                    fontWeight: 'bold', 
                    marginTop: '1.5rem', 
                    marginBottom: '0.75rem',
                    color: 'var(--text-100)',
                    lineHeight: 1.3
                  }}>
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p style={{ marginBottom: '1.25rem', color: 'var(--alpha-white-90)' }}>
                    {children}
                  </p>
                ),
                ul: ({ children }) => (
                  <ul style={{ marginBottom: '1.25rem', paddingLeft: '1.5rem', color: 'var(--alpha-white-90)' }}>
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol style={{ marginBottom: '1.25rem', paddingLeft: '1.5rem', color: 'var(--alpha-white-90)' }}>
                    {children}
                  </ol>
                ),
                li: ({ children }) => (
                  <li style={{ marginBottom: '0.5rem' }}>
                    {children}
                  </li>
                ),
                blockquote: ({ children }) => (
                  <blockquote style={{
                    margin: '1.5rem 0',
                    padding: '1rem 1.5rem',
                    background: 'var(--alpha-white-05)',
                    borderLeft: '4px solid var(--gradient-primary)',
                    borderRadius: '0 0.5rem 0.5rem 0',
                    fontStyle: 'italic',
                    color: 'var(--alpha-white-80)'
                  }}>
                    {children}
                  </blockquote>
                ),
                code: (props) => (
                  !(props.className ?? '').startsWith('language-') ? (
                    <code style={{
                      background: 'var(--alpha-white-10)',
                      color: 'var(--text-100)',
                      padding: '0.125rem 0.375rem',
                      borderRadius: '0.25rem',
                      fontSize: '0.875rem',
                      fontFamily: 'var(--font-mono)'
                    }}>
                      {props.children}
                    </code>
                  ) : (
                    <code style={{
                      display: 'block',
                      background: 'var(--surface-800)',
                      color: 'var(--text-100)',
                      padding: '1rem',
                      borderRadius: '0.5rem',
                      fontSize: '0.875rem',
                      fontFamily: 'var(--font-mono)',
                      overflowX: 'auto',
                      border: '1px solid var(--alpha-white-06)'
                    }}>
                      {props.children}
                    </code>
                  )
                ),
                pre: ({ children }) => (
                  <pre style={{
                    background: 'var(--surface-800)',
                    padding: '1rem',
                    borderRadius: '0.5rem',
                    overflowX: 'auto',
                    border: '1px solid var(--alpha-white-06)',
                    marginBottom: '1.25rem'
                  }}>
                    {children}
                  </pre>
                ),
                a: ({ href, children }) => (
                  <a
                    href={href}
                    style={{
                      color: 'var(--gradient-primary)',
                      textDecoration: 'none',
                      borderBottom: '1px solid transparent',
                      transition: 'border-color 0.2s'
                    }}
                    onMouseEnter={(e: any) => (e.currentTarget.style.borderBottomColor = 'var(--gradient-primary)')}
                    onMouseLeave={(e: any) => (e.currentTarget.style.borderBottomColor = 'transparent')}
                  >
                    {children}
                  </a>
                ),
                img: ({ src, alt }) => (
                  <img
                    src={src}
                    alt={alt}
                    style={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: '0.5rem',
                      margin: '1.5rem 0',
                      border: '1px solid var(--alpha-white-06)'
                    }}
                  />
                ),
                hr: () => (
                  <hr style={{
                    border: 'none',
                    borderTop: '1px solid var(--alpha-white-06)',
                    margin: '2rem 0'
                  }}
                  />
                )
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </main>
      </article>
      
      <SiteFooter />
    </div>
  )
}
