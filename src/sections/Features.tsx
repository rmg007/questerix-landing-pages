const features = [
  {
    icon: '🧠',
    title: 'Mastery-Based Progression',
    desc: 'Students only advance when they truly understand. No moving on after a single lucky answer.',
  },
  {
    icon: '🔁',
    title: 'Spaced Repetition',
    desc: 'The system revisits topics at the optimal moment — just before a student forgets — to lock in long-term memory.',
  },
  {
    icon: '📊',
    title: 'Real-Time Reports',
    desc: 'Teachers see exactly which students are struggling and which topics need reteaching — before the next test.',
  },
  {
    icon: '👨‍👩‍👧',
    title: 'Parent Visibility',
    desc: 'Parents get a clear view of their child\'s progress without needing to understand the curriculum.',
  },
  {
    icon: '⚡',
    title: 'AI Question Generation',
    desc: 'Admins can generate and review new questions instantly — keeping the curriculum fresh with minimal effort.',
  },
  {
    icon: '📱',
    title: 'Works on Any Device',
    desc: 'Students practise on phones, tablets, or laptops. Progress syncs instantly across all devices.',
  },
]

export default function Features() {
  return (
    <section id="features" style={{
      padding: '7rem 0',
      background: 'var(--surface-900)',
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p style={{ color: 'var(--color-primary-light)', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            Why Questerix
          </p>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 900,
            fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', color: 'var(--color-white)', lineHeight: 1.2,
          }}>
            Built for how students{' '}
            <span style={{ background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              actually learn
            </span>
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem',
        }}>
          {features.map(f => (
            <div key={f.title} style={{
              background: 'var(--alpha-white-03)',
              border: '1px solid var(--alpha-white-07)',
              borderRadius: 'var(--radius-xl)',
              padding: '2rem',
              transition: 'border-color 0.3s, transform 0.3s, box-shadow 0.3s',
              cursor: 'default',
            }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--alpha-primary-40)'
                ;(e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)'
                ;(e.currentTarget as HTMLDivElement).style.boxShadow = 'var(--shadow-elevate)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--alpha-white-07)'
                ;(e.currentTarget as HTMLDivElement).style.transform = ''
                ;(e.currentTarget as HTMLDivElement).style.boxShadow = ''
              }}
            >
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{f.icon}</div>
              <h3 style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--color-white)', marginBottom: '0.6rem' }}>{f.title}</h3>
              <p style={{ color: 'var(--alpha-white-55)', fontSize: '0.9rem', lineHeight: 1.65 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
