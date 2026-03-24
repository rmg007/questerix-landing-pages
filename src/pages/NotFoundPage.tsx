import { Link } from 'react-router-dom'
import SiteFooter from '../components/SiteFooter'
import SiteHeader from '../components/SiteHeader'

import type { MouseEvent } from 'react'

export default function NotFoundPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <SiteHeader />
      
      <main style={{ flex: 1, padding: '4rem 1.5rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: 'var(--text-100)', marginBottom: '1rem' }}>
            404
          </h1>
          
          <h2 style={{ fontSize: '1.5rem', color: 'var(--text-200)', marginBottom: '1.5rem' }}>
            Page not found
          </h2>
          
          <p style={{ color: 'var(--alpha-white-70)', marginBottom: '2rem', lineHeight: 1.6 }}>
            The page you're looking for doesn't exist or has been moved.
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link 
              to="/" 
              style={{
                display: 'inline-block',
                padding: '0.75rem 1.5rem',
                background: 'var(--gradient-primary)',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '0.5rem',
                fontWeight: '500',
                transition: 'opacity 0.2s'
              }}
              onMouseEnter={(e: MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.opacity = '0.9')}
              onMouseLeave={(e: MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.opacity = '1')}
            >
              Go Home
            </Link>
            
            <Link 
              to="/blog" 
              style={{
                display: 'inline-block',
                padding: '0.75rem 1.5rem',
                background: 'transparent',
                color: 'var(--text-100)',
                textDecoration: 'none',
                border: '1px solid var(--alpha-white-20)',
                borderRadius: '0.5rem',
                fontWeight: '500',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e: MouseEvent<HTMLAnchorElement>) => {
                e.currentTarget.style.background = 'var(--alpha-white-10)'
                e.currentTarget.style.borderColor = 'var(--alpha-white-30)'
              }}
              onMouseLeave={(e: MouseEvent<HTMLAnchorElement>) => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.borderColor = 'var(--alpha-white-20)'
              }}
            >
              View Blog
            </Link>
          </div>
        </div>
      </main>
      
      <SiteFooter />
    </div>
  )
}
