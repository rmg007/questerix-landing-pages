export default function ForTeachers() {
  return (
    <section id="for-teachers" style={{
      padding: '7rem 0',
      background: 'var(--surface-900)',
    }}>
      <div className="container">
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '4rem', alignItems: 'center',
        }}>
          {/* Text */}
          <div>
            <p style={{ color: 'var(--color-primary-light)', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              For Teachers
            </p>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontWeight: 900,
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: 'var(--color-white)', lineHeight: 1.2, marginBottom: '1.5rem',
            }}>
              Know exactly who needs help — before they ask
            </h2>
            <p style={{ color: 'var(--alpha-white-55)', lineHeight: 1.7, marginBottom: '2rem', fontSize: '1rem' }}>
              Every session generates a detailed report. See which students are struggling with which concepts, down to the individual question level.
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {[
                'Group overview with mastery bars per student',
                'Individual session history and question-level drill',
                'Mastery decay alerts — know when a topic needs revisiting',
                'Zero data entry — reports generate automatically',
              ].map(item => (
                <li key={item} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', color: 'var(--alpha-white-65)', fontSize: '0.9rem' }}>
                  <span style={{ color: 'var(--color-primary-light)', flexShrink: 0, marginTop: '0.1rem' }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Mock report card */}
          <div style={{
            background: 'var(--alpha-white-03)', border: '1px solid var(--alpha-white-08)',
            borderRadius: 'var(--radius-2xl)', padding: '1.75rem',
            fontFamily: 'var(--font-sans)',
          }}>
            <div style={{ marginBottom: '1.25rem' }}>
              <p style={{ fontSize: '0.75rem', color: 'var(--alpha-white-35)', marginBottom: '0.25rem' }}>Class 7B — Algebra</p>
              <p style={{ fontWeight: 700, color: 'var(--color-white)', fontSize: '1rem' }}>Mastery Overview</p>
            </div>
            {[
              { name: 'Aisha K.', pct: 92, color: 'var(--color-success)' },
              { name: 'Marcus T.', pct: 78, color: 'var(--color-primary-light)' },
              { name: 'Sofia R.', pct: 61, color: 'var(--color-warning)' },
              { name: 'Ethan M.', pct: 43, color: 'var(--color-error)' },
              { name: 'Priya L.', pct: 85, color: 'var(--color-primary-light)' },
            ].map(s => (
              <div key={s.name} style={{ marginBottom: '0.9rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.3rem' }}>
                  <span style={{ fontSize: '0.85rem', color: 'var(--alpha-white-70)' }}>{s.name}</span>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: s.color }}>{s.pct}%</span>
                </div>
                <div style={{ background: 'var(--alpha-white-08)', borderRadius: 'var(--radius-full)', height: 6, overflow: 'hidden' }}>
                  <div style={{ width: `${s.pct}%`, height: '100%', background: s.color, borderRadius: 'var(--radius-full)', transition: 'width 1s ease' }} />
                </div>
              </div>
            ))}
            <div style={{ marginTop: '1rem', padding: '0.75rem', background: 'var(--alpha-error-08)', border: '1px solid var(--alpha-error-20)', borderRadius: 'var(--radius-md)' }}>
              <p style={{ fontSize: '0.78rem', color: 'var(--color-error-light)' }}>⚠ Ethan M. — Linear equations mastery dropping. Last session: 3 days ago.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
