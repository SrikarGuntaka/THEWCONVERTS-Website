import { useState } from 'react'
import { useToast } from '../context/ToastContext'
import ScrollReveal from '../components/ScrollReveal'

function ContactIcon({ children }) {
  return <div className="contact-icon">{children}</div>
}

function ContactHero() {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="page-hero-inner">
          <ScrollReveal>
            <div className="section-tag">Contact</div>
            <h1 className="title-xl" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.04em' }}>
              GET A QUOTE TODAY.
            </h1>
          </ScrollReveal>
          <ScrollReveal className="reveal-delay-2">
            <p className="body-lg muted" style={{ maxWidth: '44ch' }}>
              Tell us your goal and vehicle info   we'll handle the fitment verification, parts sourcing, and build plan from there.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

export default function Contact() {
  const showToast = useToast()
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', truck: '', goal: '' })
  const [sending, setSending] = useState(false)

  function update(field) {
    return e => setForm(f => ({ ...f, [field]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSending(true)
    setTimeout(() => {
      showToast("Message sent! We'll get back to you shortly.")
      setForm({ firstName: '', lastName: '', email: '', truck: '', goal: '' })
      setSending(false)
    }, 1200)
  }

  return (
    <>
    <ContactHero />
    <section className="section" id="contact" style={{ background: 'var(--bg-1)', borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <ScrollReveal>
          <div className="contact-layout">
            {/* Info */}
            <div>
              <div className="contact-info-list">
                <div className="contact-item">
                  <ContactIcon>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </ContactIcon>
                  <div>
                    <div className="contact-item-lbl">Email</div>
                    <div className="contact-item-val">
                      <a href="mailto:matt81503@gmail.com">matt81503@gmail.com</a>
                    </div>
                  </div>
                </div>

                <div className="contact-item">
                  <ContactIcon>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeLinecap="round" />
                    </svg>
                  </ContactIcon>
                  <div>
                    <div className="contact-item-lbl">Instagram</div>
                    <div className="contact-item-val">
                      <a href="https://www.instagram.com/thewconverts" target="_blank" rel="noopener noreferrer">@THEWCONVERTS</a>
                    </div>
                  </div>
                </div>

                <div className="contact-item">
                  <ContactIcon>
                    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.2 8.2 0 0 0 4.79 1.52V6.75a4.85 4.85 0 0 1-1.02-.06z" />
                    </svg>
                  </ContactIcon>
                  <div>
                    <div className="contact-item-lbl">TikTok</div>
                    <div className="contact-item-val">
                      <a href="https://www.tiktok.com/@thewconverts" target="_blank" rel="noopener noreferrer">@THEWCONVERTS</a>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: 40, padding: 28, background: 'var(--bg-2)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)' }}>
                <div className="label muted-3" style={{ marginBottom: 10 }}>Best way to reach us</div>
                <p className="body-md muted" style={{ marginBottom: 16 }}>
                  Send us your truck's details   year, model, trim, and your upgrade goal   and we'll respond with a fitment confirmation and build plan.
                </p>
                <a href="mailto:matt81503@gmail.com?subject=Build Inquiry" className="btn btn-primary btn-sm">
                  Email Matt Directly
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Form */}
            <form className="form-grid" onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label className="form-label" htmlFor="cf-first">First Name</label>
                <input id="cf-first" type="text" className="input" placeholder="John" value={form.firstName} onChange={update('firstName')} required />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="cf-last">Last Name</label>
                <input id="cf-last" type="text" className="input" placeholder="Smith" value={form.lastName} onChange={update('lastName')} />
              </div>
              <div className="form-group full">
                <label className="form-label" htmlFor="cf-email">Email</label>
                <input id="cf-email" type="email" className="input" placeholder="you@email.com" value={form.email} onChange={update('email')} required />
              </div>
              <div className="form-group full">
                <label className="form-label" htmlFor="cf-truck">Your Truck (Year / Model / Trim)</label>
                <input id="cf-truck" type="text" className="input" placeholder="e.g. 2019 F-150 Regular Cab XL" value={form.truck} onChange={update('truck')} />
              </div>
              <div className="form-group full">
                <label className="form-label" htmlFor="cf-goal">Upgrade Goal</label>
                <textarea id="cf-goal" className="input" placeholder="Tell us what you want to change   interior, lighting, tech, full conversion, etc." rows={5} value={form.goal} onChange={update('goal')} />
              </div>
              <div className="form-group full" style={{ marginTop: 4 }}>
                <button type="submit" className="btn btn-primary btn-lg" disabled={sending}>
                  {sending ? 'Sending…' : 'Send Message'}
                  {!sending && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  )}
                </button>
              </div>
            </form>
          </div>
        </ScrollReveal>
      </div>
    </section>
    </>
  )
}
