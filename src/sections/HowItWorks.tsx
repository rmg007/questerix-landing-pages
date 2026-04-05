const steps = [
  { num: '01', title: 'Admin sets up the curriculum', desc: 'Your school admin creates domains, skills, and questions — or bulk-imports them from a spreadsheet in minutes.' },
  { num: '02', title: 'Teacher creates groups', desc: 'Teachers create class groups and add students. The curriculum is ready from day one.' },
  { num: '03', title: 'Students practise daily', desc: 'Students answer questions. The system tracks every response and adjusts difficulty to keep them in the optimal learning zone.' },
  { num: '04', title: 'Everyone sees the results', desc: 'Teachers get real-time reports. Parents see progress. Admins see school-wide trends. No surprises at exam time.' },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" style={{
      padding: '7rem 0',
      background: 'var(--gradient-howitworks-surface)',
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p style={{ color: 'var(--color-primary-light)', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            The Process
          </p>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 900,
            fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', color: 'var(--color-white)', lineHeight: 1.2,
          }}>
            Up and running in one afternoon
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: 720, margin: '0 auto' }}>
          {steps.map((step, i) => (
            <div key={step.num} style={{
              display: 'flex', gap: '1.75rem', alignItems: 'flex-start',
              padding: '1.75rem',
              background: 'var(--alpha-white-025)',
              border: '1px solid var(--alpha-white-06)',
              borderRadius: 'var(--radius-xl)',
            }}>
              <div style={{
                flexShrink: 0, width: 52, height: 52,
                background: i === 0 ? 'var(--gradient-primary)' : 'var(--alpha-primary-12)',
                border: '1px solid var(--alpha-primary-30)',
                borderRadius: 'var(--radius-lg)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--font-display)', fontWeight: 800,
                fontSize: '0.85rem', color: i === 0 ? 'var(--color-white)' : 'var(--color-primary-light)',
              }}>
                {step.num}
              </div>
              <div>
                <h3 style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--color-white)', marginBottom: '0.4rem' }}>{step.title}</h3>
                <p style={{ color: 'var(--alpha-white-50)', fontSize: '0.9rem', lineHeight: 1.65 }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
