import { useState, useEffect, useCallback } from 'react'
import ScrollReveal from '../components/ScrollReveal'

const IMAGES = [
  '/Product-Image-1.jpeg',
  '/Product-Image-2.jpeg',
  '/Product-Image-3.jpeg',
  '/Product-Image-4.jpeg',
]

function Carousel() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => setCurrent(c => (c + 1) % IMAGES.length), [])
  const prev = useCallback(() => setCurrent(c => (c - 1 + IMAGES.length) % IMAGES.length), [])

  useEffect(() => {
    const id = setInterval(next, 4000)
    return () => clearInterval(id)
  }, [next])

  return (
    <div style={{ position: 'relative', borderRadius: 'var(--radius-xl)', overflow: 'hidden', aspectRatio: '4/3', background: 'var(--bg-2)' }}>
      {IMAGES.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`Build ${i + 1}`}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: i === current ? 1 : 0,
            transition: 'opacity 0.7s ease',
          }}
        />
      ))}

      {/* Prev / Next */}
      <button
        onClick={prev}
        aria-label="Previous"
        style={{
          position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)',
          width: 36, height: 36, borderRadius: '50%',
          background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.15)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#fff', cursor: 'pointer', backdropFilter: 'blur(6px)',
          zIndex: 2,
        }}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button
        onClick={next}
        aria-label="Next"
        style={{
          position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)',
          width: 36, height: 36, borderRadius: '50%',
          background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.15)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#fff', cursor: 'pointer', backdropFilter: 'blur(6px)',
          zIndex: 2,
        }}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Dots */}
      <div style={{ position: 'absolute', bottom: 12, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 6, zIndex: 2 }}>
        {IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            style={{
              width: i === current ? 20 : 6, height: 6,
              borderRadius: 3,
              background: i === current ? 'var(--accent)' : 'rgba(255,255,255,0.4)',
              border: 'none', cursor: 'pointer',
              transition: 'all 0.3s ease',
              padding: 0,
            }}
          />
        ))}
      </div>
    </div>
  )
}

const FEATURES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Genuine OEM Only',
    desc: 'Factory-original components  no knockoffs, no replicas. Every part is sourced for perfect fitment and long-term durability.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: 'Factory Fit & Finish',
    desc: 'Every upgrade looks and installs as if it came directly from the assembly line  zero gaps, zero modifications.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: 'Complete Conversions',
    desc: 'From single parts to full high-trim transformations  we handle the planning so every component works together seamlessly.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    title: 'Plug-and-Play Harnesses',
    desc: 'Custom-built harness solutions connect directly to factory connectors. No splicing. No cutting. A clean, invisible install every time.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    title: 'Expert Platform Knowledge',
    desc: 'Specialized experience across F-150 platforms ensures every kit is verified for compatibility before it ships to you.',
  },
]

export default function Features() {
  return (
    <section className="section" id="why-us">
      <div className="container">
        <ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center', marginBottom: 52 }}>
            <div className="section-head-text">
              <div className="section-tag">Why THEWCONVERTS</div>
              <h2 className="title-xl">Factory quality.<br />Real parts.</h2>
              <p style={{ marginTop: 14, fontSize: '0.9rem', color: 'var(--text-2)', lineHeight: 1.7, maxWidth: '48ch' }}>
                Every upgrade uses genuine OEM components engineered by the manufacturer  not aftermarket replicas. That means perfect fitment, long-term durability, and a finish that looks like it came straight from the assembly line.
              </p>
            </div>
            <Carousel />
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="features-wrap">
            {FEATURES.map(f => (
              <div key={f.title} className="feature-card">
                <div className="feature-title">{f.title}</div>
                <div className="feature-desc">{f.desc}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
