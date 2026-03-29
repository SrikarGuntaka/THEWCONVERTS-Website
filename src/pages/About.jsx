import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'

const VALUES = [
  { num: '01   Authenticity', title: 'Only genuine OEM components.', desc: "We will never compromise on part authenticity. If it's not factory-original, it's not in our kits. Every component is verified before it leaves our hands   because perfect fitment demands the real thing." },
  { num: '02   Precision', title: 'Factory fit. Zero exceptions.', desc: "Every conversion is planned to fit your specific vehicle, trim, and configuration. We verify before sourcing, and every kit is organized to install cleanly   because the goal is a result that looks factory, not modified." },
  { num: '03   Accessibility', title: 'Premium features for every truck owner.', desc: "High-end upgrades shouldn't require buying a new truck. We believe every enthusiast and everyday driver deserves access to genuine OEM features   regardless of what their truck came with from the factory." },
  { num: '04   Expertise', title: 'Specialized platform knowledge.', desc: "Our deep experience with F-150 platforms means we understand the exact factory options, wiring logic, and compatibility nuances that make conversions work correctly   knowledge that generic parts suppliers simply don't have." },
  { num: '05   Simplicity', title: 'Clear process. Organized kits.', desc: "From the first inquiry to the finished install, we keep things organized and straightforward. Clear fitment confirmation, labeled components, and step-by-step guidance mean fewer headaches and better results." },
  { num: '06   Integrity', title: 'Honest. Transparent. Reliable.', desc: "We won't sell you a kit that won't work on your truck. We verify fitment first, communicate clearly, and stand behind every product we ship. Your trust in our parts is something we take seriously." },
]



export default function About() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <main>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-inner">
            <ScrollReveal>
              <div className="section-tag">About Us</div>
              <h1 className="title-xl" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.04em' }}>
                Built from<br />the ground up<br />by an enthusiast.
              </h1>
            </ScrollReveal>
            <ScrollReveal className="reveal-delay-2">
              <p className="body-lg muted" style={{ maxWidth: '44ch' }}>
                THEWCONVERTS was built to solve a problem that every base-model and single-cab truck owner knows well   the manufacturer never gave you the features you wanted, and the aftermarket doesn't do OEM-quality work.
              </p>
              <div style={{ marginTop: 28, display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                <Link to="/shop" className="btn btn-primary">Browse Products</Link>
                <a href="/contact" className="btn btn-outline">Get in Touch</a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section">
        <div className="container">
          <div className="story-grid">
            <ScrollReveal>
              <div className="story-visual">
                <img src="/distinguishedgentleman.jpg" alt="Matthew Garza" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                <div className="story-badge">
                  <div className="story-badge-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <div>
                    <div className="story-badge-text">Genuine OEM Only</div>
                    <div className="story-badge-sub">Genuine <i>drip</i> Only</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal className="reveal-delay-2">
              <div className="story-text">
                <div className="section-tag">Our Story</div>
                <h2 className="title-lg" style={{ marginBottom: 28 }}>A problem only<br />enthusiasts understand.</h2>
                <p>Single-cab trucks are rarely offered in higher trim levels. From the factory, owners are left with base-spec interiors, entry-level lighting, and limited tech   with no straightforward path to upgrade. The aftermarket fills that gap with generic parts that never quite fit right or look factory.</p>
                <p>Matthew Garza experienced this firsthand as a truck owner and hands-on builder. After years of sourcing genuine OEM components from higher-trim vehicles and developing reliable conversion solutions for his own builds, he recognized that other enthusiasts needed the same access   and a trusted source to deliver it correctly.</p>
                <p>THEWCONVERTS was built on that foundation: genuine factory parts, verified fitment, and a process designed to make premium upgrades accessible to any truck owner   whether you're building a show truck or just want your daily driver to feel like what the factory should have offered you.</p>
                <div style={{ marginTop: 36, display: 'flex', gap: 32 }}>
                  {[['100%', 'OEM Authentic'], ['DIY + Pro', 'Install Options'], ['F-150', 'Specialists']].map(([val, lbl]) => (
                    <div key={lbl}>
                      <div className="stat-val" style={{ fontSize: '2rem' }}>{val}</div>
                      <div className="stat-lbl">{lbl}</div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Purpose & Direction Revamped */}
      <section className="section-sm" style={{ background: 'var(--bg-1)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <ScrollReveal><div className="section-tag" style={{ marginBottom: 42 }}>Purpose & Direction</div></ScrollReveal>
          <ScrollReveal>
             <div className="mv-strip">
                <div className="mv-strip-col">
                   <div className="mv-strip-header">
                      <div className="mv-strip-label">MISSION</div>
                      <div className="mv-strip-dot"></div>
                   </div>
                   <h3 className="title-md" style={{ marginBottom: 18, color: 'var(--text-1)' }}>Transforming trucks with authentic OEM upgrades.</h3>
                   <p className="body-md muted" style={{ maxWidth: '90%' }}>To transform ordinary trucks into exceptional builds by delivering authentic OEM upgrades that look, fit, and perform exactly as the factory intended—providing enthusiasts and everyday drivers a trusted path to premium features, bold styling, and higher value while keeping their original truck.</p>
                </div>
                <div className="mv-strip-divide"></div>
                <div className="mv-strip-col">
                   <div className="mv-strip-header">
                      <div className="mv-strip-label">VISION</div>
                      <div className="mv-strip-dot"></div>
                   </div>
                   <h3 className="title-md" style={{ marginBottom: 18, color: 'var(--text-1)' }}>The go-to destination for OEM truck conversions.</h3>
                   <p className="body-md muted" style={{ maxWidth: '90%' }}>To become the go-to destination for OEM truck upgrades and full factory-style conversions, setting the standard for quality, authenticity, and innovation in the aftermarket industry—making fully loaded, head-turning builds accessible to enthusiasts everywhere.</p>
                </div>
             </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="section-head">
              <div className="section-head-text">
                <div className="section-tag">What We Stand For</div>
                <h2 className="title-xl">The principles behind<br />every build.</h2>
              </div>
            </div>
          </ScrollReveal>
          <div className="values-grid">
            {VALUES.map((v, i) => (
              <ScrollReveal key={v.num} className={i % 3 !== 0 ? `reveal-delay-${i % 3}` : ''}>
                <div className="value-card">
                  <div className="value-num">{v.num}</div>
                  <div className="value-title">{v.title}</div>
                  <div className="value-desc">{v.desc}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-sm" id="team" style={{ background: 'var(--bg-1)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <ScrollReveal><div className="section-tag" style={{ marginBottom: 40 }}>The Team</div></ScrollReveal>
          <ScrollReveal>
            <div className="team-card">
              <div className="team-avatar">MG</div>
              <div>
                <div className="team-name">Matthew Garza</div>
                <div className="team-role">Founder &amp; CEO</div>
                <div className="team-bio">A truck enthusiast and hands-on builder with a deep understanding of OEM platforms and factory upgrade pathways. After experiencing firsthand how limited base-model and single-cab trucks are from the factory, Matthew began sourcing genuine OEM parts and developing reliable conversion solutions to achieve high-trim features without buying a new vehicle. His platform-specific expertise and builder's eye are the foundation of everything THEWCONVERTS delivers.</div>
                <div className="team-contact-row">
                  <div className="contact-icon" style={{ width: 34, height: 34 }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <a href="mailto:matt81503@gmail.com" className="team-email">matt81503@gmail.com</a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div 
              style={{
                position: 'relative',
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                padding: '80px 60px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                minHeight: '440px',
                border: '1px solid var(--border)',
                boxShadow: 'var(--shadow-lg)'
              }}
            >
              {/* Background Image & Overlay */}
              <div style={{ position: 'absolute', inset: 0 }}>
                <img src="/Product-Image-2.jpeg" alt="F-150 Interior Details" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(9,9,9,0.98) 0%, rgba(9,9,9,0.85) 45%, rgba(9,9,9,0.2) 100%)' }} />
              </div>

              {/* Content */}
              <div style={{ position: 'relative', zIndex: 2, maxWidth: '650px' }}>
                <div className="section-tag">Who We Serve</div>
                <h2 className="title-xl" style={{ marginBottom: 24, fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>Built for serious<br />truck owners.</h2>
                <p className="body-lg" style={{ color: 'var(--text-2)', lineHeight: 1.7, marginBottom: 40, paddingRight: '20px' }}>
                  Whether you're building a head-turning show truck or just want your daily driver to feel like what the manufacturer should have offered   THEWCONVERTS is ready to deliver authentic factory perfection.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                  {[
                    'Show Truck Builders',
                    'Daily Driver Owners',
                    'Business Fleets',
                    'Tech Enthusiasts'
                  ].map((item, idx) => (
                    <ScrollReveal key={idx} className={`reveal-delay-${idx % 3}`}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '14px', fontSize: '1.05rem', fontWeight: '600', color: 'var(--text-1)' }}>
                        <div style={{ color: 'var(--bg-0)', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '28px', height: '28px', borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }}>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" width="14" height="14">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                        {item}
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="section-sm" style={{ background: 'var(--bg-1)', borderTop: '1px solid var(--border)', textAlign: 'center' }}>
        <div className="container">
          <ScrollReveal>
            <div className="section-tag" style={{ justifyContent: 'center' }}>Ready to Build?</div>
            <h2 className="title-xl" style={{ maxWidth: '16ch', margin: '0 auto 24px', fontSize: 'clamp(2rem, 5vw, 4rem)' }}>
              Tell us your goal.<br />We'll handle the rest.
            </h2>
            <p className="body-lg muted" style={{ maxWidth: '42ch', margin: '0 auto 36px' }}>
              Send your truck info and what you're trying to achieve   we'll verify fitment, source the parts, and build the plan.
            </p>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/contact" className="btn btn-primary btn-lg">GET A QUOTE TODAY</a>
              <Link to="/shop" className="btn btn-outline btn-lg">Browse Products</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
