import { useState, useEffect } from 'react'
import { PRODUCTS, CATEGORY_LABELS } from '../data/products'
import ProductCard from '../components/ProductCard'
import ScrollReveal from '../components/ScrollReveal'
import EmailCapture from '../sections/EmailCapture'

const FILTERS = [
  { key: 'all', label: 'All Products' },
  { key: 'conversion-kits', label: 'Conversion Kits' },
  { key: 'oem-parts', label: 'OEM Parts' },
  { key: 'harnesses', label: 'Harness Solutions' },
  { key: 'interior', label: 'Interior' },
  { key: 'exterior', label: 'Exterior' },
]

const FEATURED = PRODUCTS[0]

export default function Shop() {
  const [activeFilter, setActiveFilter] = useState('all')

  useEffect(() => { window.scrollTo(0, 0) }, [])

  const visible = activeFilter === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === activeFilter)

  return (
    <main>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-inner">
            <ScrollReveal>
              <div className="section-tag">Products &amp; Parts</div>
              <h1 className="title-xl" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.04em' }}>
                OEM upgrades<br />for every build.
              </h1>
            </ScrollReveal>
            <ScrollReveal className="reveal-delay-2">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                {[
                  { label: '100% Genuine OEM', sub: 'Factory-original parts only. No replicas.' },
                  { label: 'Fitment Verified', sub: 'Matched to your year, model, and trim.' },
                  { label: 'Plug-and-Play Options', sub: 'Bolt-in kits with no cutting or splicing.' },
                ].map((item, i) => (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'flex-start', gap: 16,
                    padding: '20px 0',
                    borderBottom: i < 2 ? '1px solid var(--border)' : 'none',
                  }}>
                    <div style={{
                      width: 32, height: 32, borderRadius: 8, flexShrink: 0,
                      background: 'var(--bg-3)', border: '1px solid var(--border-md)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="var(--text-2)" strokeWidth="2.5" width="14" height="14">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-1)', marginBottom: 3 }}>{item.label}</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-3)', lineHeight: 1.5 }}>{item.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">

          {/* Featured Banner */}
          <ScrollReveal>
            <div className="shop-banner" style={{ position: 'relative', overflow: 'hidden', minHeight: '400px', padding: '60px' }}>
              {/* Background Image & Overlay */}
              <div style={{ position: 'absolute', inset: 0 }}>
                <img src={FEATURED.image} alt={FEATURED.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '60% 50%' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, var(--bg-1) 0%, var(--bg-1) 30%, rgba(10,10,10,0.5) 60%, transparent 100%)' }} />
              </div>

              {/* Banner Left Content */}
              <div style={{ position: 'relative', zIndex: 1, maxWidth: '520px' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 16 }}>&#9733; Most Popular</div>
                <h2 className="shop-banner-title" style={{ fontSize: '2.5rem', marginBottom: 20 }}>{FEATURED.name}</h2>
                <div className="shop-banner-desc" style={{ fontSize: '1.05rem', lineHeight: 1.6, color: 'var(--text-2)', marginBottom: 32 }}>
                   Complete Lariat interior swap for your base or XL cab F-150. Includes door cards, center console, and all hardware for a clean factory result.
                </div>
                <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                  <a href={`mailto:matt81503@gmail.com?subject=Inquiry: ${encodeURIComponent(FEATURED.name)}`} className="btn btn-accent btn-lg">Inquire Now</a>
                  <a href="/#how-it-works" className="btn btn-outline btn-lg">How It Works</a>
                </div>
              </div>

              {/* Price Content on Right */}
              <div style={{ position: 'relative', zIndex: 1, textAlign: 'right', alignSelf: 'flex-end' }}>
                <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-1)', marginBottom: 4 }}>Starting from</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '4.5rem', fontWeight: 800, letterSpacing: '-0.06em', color: 'var(--accent)', textShadow: '0 4px 12px rgba(0,0,0,0.5)' }}>$1,499</div>
              </div>
            </div>
          </ScrollReveal>

          {/* Filters */}
          <ScrollReveal>
            <div className="filter-bar">
              {FILTERS.map(f => (
                <button
                  key={f.key}
                  className={`filter-pill${activeFilter === f.key ? ' active' : ''}`}
                  onClick={() => setActiveFilter(f.key)}
                >
                  {f.label}
                </button>
              ))}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20, paddingBottom: 32, flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-3)', fontWeight: 500 }}>
                {visible.length} product{visible.length !== 1 ? 's' : ''}
              </span>
            </div>
          </ScrollReveal>

          {/* Product Grid */}
          <div className="products-grid">
            {visible.map((p, i) => (
              <ProductCard key={p.id} product={p} delayClass={i % 3 !== 0 ? `reveal-delay-${i % 3}` : ''} />
            ))}
          </div>

          {/* Don't see what you need */}
          <ScrollReveal>
            <div style={{ marginTop: 60, padding: '48px 40px', background: 'var(--bg-1)', border: '1px solid var(--border)', borderRadius: 'var(--radius-xl)', textAlign: 'center' }}>
              <div className="section-tag" style={{ justifyContent: 'center', marginBottom: 16 }}>Don't See What You Need?</div>
              <h3 className="title-md" style={{ marginBottom: 12 }}>We source on request.</h3>
              <p className="muted body-md" style={{ maxWidth: '44ch', margin: '0 auto 28px' }}>
                Stock changes as new OEM parts become available. If you don't see the specific kit you're looking for, reach out   chances are we can source it.
              </p>
              <a href="mailto:matt81503@gmail.com?subject=Custom Part Request" className="btn btn-primary btn-lg">
                Request a Part
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <EmailCapture />
    </main>
  )
}
