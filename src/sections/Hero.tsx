export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      background: 'var(--gradient-hero-surface)',
      display: 'flex', alignItems: 'center',
      padding: '8rem 0 5rem',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Background glow orbs */}
      <div style={{
        position: 'absolute', top: '15%', left: '10%',
        width: 500, height: 500, borderRadius: '50%',
        background: 'var(--orb-primary)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', top: '20%', right: '5%',
        width: 600, height: 600, borderRadius: '50%',
        background: 'var(--orb-secondary)',
        pointerEvents: 'none',
      }} />

      <div className="container">
        <div style={{ maxWidth: 720 }}>
          {/* Badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            background: 'var(--alpha-primary-12)', border: '1px solid var(--alpha-primary-30)',
            borderRadius: 'var(--radius-full)', padding: '0.35rem 1rem',
            marginBottom: '1.75rem',
          }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-primary-light)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Now in schools across the country
            </span>
          </div>

          {/* Headline */}
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 900, lineHeight: 1.1,
            fontSize: 'clamp(2.75rem, 7vw, 5rem)',
            color: 'var(--color-white)', marginBottom: '1.5rem',
          }}>
            Maths that{' '}
            <span style={{
              background: 'var(--gradient-primary)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>actually sticks.</span>
          </h1>

          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.25rem)', lineHeight: 1.7,
            color: 'var(--alpha-white-65)', maxWidth: 560, marginBottom: '2.5rem',
          }}>
            Questerix uses spaced repetition and mastery-based progression to help students build lasting understanding — not just temporary test scores.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <a href="#get-started" id="get-started" style={{
              background: 'var(--gradient-primary)', color: 'var(--color-white)',
              padding: '0.9rem 2rem', borderRadius: 'var(--radius-full)',
              fontWeight: 700, fontSize: '1rem',
              boxShadow: 'var(--shadow-primary-40)',
              transition: 'transform 0.2s, box-shadow 0.2s',
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = 'var(--shadow-primary-60)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = 'var(--shadow-primary-40)' }}
            >
              Start for free →
            </a>
            <a href="#how-it-works" style={{
              color: 'var(--alpha-white-70)', fontWeight: 600, fontSize: '0.95rem',
              display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
              transition: 'color 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--color-white)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--alpha-white-70)'}
            >
              ▷ See how it works
            </a>
          </div>

          {/* Social proof */}
          <div style={{ marginTop: '3rem', display: 'flex', gap: '2.5rem', flexWrap: 'wrap' }}>
            {[
              { value: '50,000+', label: 'Questions answered daily' },
              { value: '94%', label: 'Mastery improvement' },
              { value: '320+', label: 'Schools onboarded' },
            ].map(stat => (
              <div key={stat.label}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.75rem', color: 'var(--color-white)' }}>{stat.value}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--alpha-white-45)', marginTop: '0.15rem' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
