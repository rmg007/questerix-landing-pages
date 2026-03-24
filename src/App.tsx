import { useEffect, useState } from 'react'
import SiteFooter from './components/SiteFooter'

/* ─────────────────── NAV ─────────────────── */
function Nav() {
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

/* ─────────────────── HERO ─────────────────── */
function Hero() {
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

/* ─────────────────── FEATURES ─────────────────── */
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

function Features() {
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

/* ─────────────────── HOW IT WORKS ─────────────────── */
const steps = [
  { num: '01', title: 'Admin sets up the curriculum', desc: 'Your school admin creates domains, skills, and questions — or bulk-imports them from a spreadsheet in minutes.' },
  { num: '02', title: 'Teacher creates groups', desc: 'Teachers create class groups and add students. The curriculum is ready from day one.' },
  { num: '03', title: 'Students practise daily', desc: 'Students answer questions. The system tracks every response and adjusts difficulty to keep them in the optimal learning zone.' },
  { num: '04', title: 'Everyone sees the results', desc: 'Teachers get real-time reports. Parents see progress. Admins see school-wide trends. No surprises at exam time.' },
]

function HowItWorks() {
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

/* ─────────────────── FOR TEACHERS ─────────────────── */
function ForTeachers() {
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

/* ─────────────────── CTA ─────────────────── */
function CTA() {
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

/* ─────────────────── FOOTER ─────────────────── */
function Footer() {
  return <SiteFooter />
}

/* ─────────────────── APP ─────────────────── */
export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <ForTeachers />
        <CTA />
      </main>
      <SiteFooter />
    </>
  )
}
