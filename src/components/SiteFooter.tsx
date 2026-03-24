import { Link } from 'react-router-dom'

import type { MouseEvent } from 'react'

type LinkItem = {
  label: string
  href: string
}

const links: LinkItem[] = [
  { label: 'Blog', href: '/blog' },
  { label: 'Privacy', href: '#' },
  { label: 'Terms', href: '#' },
  { label: 'Contact', href: '#' },
]

export default function SiteFooter() {
  return (
    <footer style={{
      background: 'var(--surface-950)', borderTop: '1px solid var(--alpha-white-06)',
      padding: '3rem 1.5rem 2rem', textAlign: 'center'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2rem' }}>
          {links.map(link => (
            link.href.startsWith('/') ? (
              <Link key={link.label} to={link.href} style={{ color: 'var(--alpha-white-35)', fontSize: '0.8rem', transition: 'color 0.2s' }}
                onMouseEnter={(e: MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.color = 'var(--alpha-white-70)')}
                onMouseLeave={(e: MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.color = 'var(--alpha-white-35)')}
              >{link.label}</Link>
            ) : (
              <a key={link.label} href={link.href} style={{ color: 'var(--alpha-white-35)', fontSize: '0.8rem', transition: 'color 0.2s' }}
                onMouseEnter={(e: MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.color = 'var(--alpha-white-70)')}
                onMouseLeave={(e: MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.color = 'var(--alpha-white-35)')}
              >{link.label}</a>
            )
          ))}
        </div>

        <p style={{ color: 'var(--alpha-white-25)', fontSize: '0.8rem' }}>
          © {new Date().getFullYear()} Questerix. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
