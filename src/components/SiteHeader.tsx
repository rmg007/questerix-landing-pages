import { Link } from 'react-router-dom'

import type { MouseEvent } from 'react'

export default function SiteHeader() {
  return (
    <header style={{
      background: 'var(--surface-950)', borderBottom: '1px solid var(--alpha-white-06)',
      padding: '1rem 1.5rem'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--text-100)', textDecoration: 'none' }}>
          Questerix
        </Link>
        
        <nav style={{ display: 'flex', gap: '1.5rem' }}>
          <Link to="/blog" style={{ color: 'var(--alpha-white-70)', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }}
            onMouseEnter={(e: MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.color = 'var(--text-100)')}
            onMouseLeave={(e: MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.color = 'var(--alpha-white-70)')}
          >
            Blog
          </Link>
        </nav>
      </div>
    </header>
  )
}
