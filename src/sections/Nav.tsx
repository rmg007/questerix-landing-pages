import { useEffect, useState } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: '1rem 0',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      background: scrolled ? 'var(--nav-surface)' : 'transparent',
      borderBottom: scrolled ? '1px solid var(--alpha-white-06)' : 'none',
      transition: 'all 0.3s ease',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{
            width: 36, height: 36, borderRadius: '10px',
            background: 'var(--gradient-primary)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '1.1rem', fontWeight: 800, color: 'var(--color-white)',
          }}>Q</div>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.15rem', color: 'var(--color-white)' }}>
            Questerix
          </span>
        </div>

        {/* Links */}
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {['Features', 'How it works', 'For Teachers'].map(link => (
            <a key={link} href={`#${link.toLowerCase().replace(/\s/g, '-')}`} style={{
              color: 'var(--alpha-white-70)', fontSize: '0.9rem', fontWeight: 500,
              transition: 'color 0.2s',
            }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-white)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--alpha-white-70)')}
            >{link}</a>
          ))}
          <a href="#get-started" style={{
            background: 'var(--gradient-primary)', color: 'var(--color-white)',
            padding: '0.55rem 1.25rem', borderRadius: 'var(--radius-full)',
            fontWeight: 600, fontSize: '0.875rem',
            boxShadow: 'var(--shadow-primary-20)',
            transition: 'transform 0.2s, box-shadow 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = 'var(--shadow-primary-30)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = 'var(--shadow-primary-20)' }}
          >Get Started Free</a>
        </div>
      </div>
    </nav>
  )
}
