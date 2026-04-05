export default function CTA() {
  return (
    <section style={{
      padding: '7rem 0',
      background: 'var(--gradient-cta-surface)',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        width: 700, height: 700, borderRadius: '50%',
        background: 'var(--orb-secondary)',
        pointerEvents: 'none',
      }} />
      <div className="container" style={{ textAlign: 'center', position: 'relative' }}>
        <h2 style={{
          fontFamily: 'var(--font-display)', fontWeight: 900,
          fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'var(--color-white)', lineHeight: 1.15, marginBottom: '1.25rem',
        }}>
          Ready to see what your students<br />are actually capable of?
        </h2>
        <p style={{ color: 'var(--alpha-white-50)', fontSize: '1.1rem', marginBottom: '2.5rem', maxWidth: 520, margin: '0 auto 2.5rem' }}>
          Get your school set up in an afternoon. No training days, no lengthy onboarding — just better learning outcomes from day one.
        </p>
        <a href="mailto:hello@questerix.com" style={{
          background: 'var(--gradient-primary)', color: 'var(--color-white)',
          padding: '1rem 2.5rem', borderRadius: 'var(--radius-full)',
          fontWeight: 700, fontSize: '1.05rem', display: 'inline-block',
          boxShadow: 'var(--shadow-primary-60)',
          transition: 'transform 0.2s, box-shadow 0.2s',
        }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = 'var(--shadow-primary-80)' }}
          onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = 'var(--shadow-primary-60)' }}
        >
          Get in touch →
        </a>
        <p style={{ fontSize: '0.8rem', color: 'var(--alpha-white-30)', marginTop: '1rem' }}>No commitment. We'll walk you through everything.</p>
      </div>
    </section>
  )
}
