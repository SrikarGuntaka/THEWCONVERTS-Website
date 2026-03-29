import { useState } from 'react'
import { useToast } from '../context/ToastContext'
import ScrollReveal from '../components/ScrollReveal'

export default function EmailCapture() {
  const [email, setEmail] = useState('')
  const showToast = useToast()

  function handleSubmit(e) {
    e.preventDefault()
    if (!email) return
    showToast("You're on the list! We'll keep you posted.")
    setEmail('')
  }

  return (
    <section className="section-sm email-section" id="newsletter">
      <div className="container">
        <ScrollReveal>
          <div className="email-inner">
            <div className="section-tag">Stay In The Loop</div>
            <h2 className="title-lg">New stock. New builds.<br />First to know.</h2>
            <p className="muted body-md" style={{ marginTop: 12 }}>
              Get notified when new OEM kits, conversion parts, and harnesses arrive   before they sell out.
            </p>
            <form className="email-form-row" onSubmit={handleSubmit} noValidate>
              <input
                type="email"
                className="input"
                placeholder="Enter your email address"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                autoComplete="email"
              />
              <button type="submit" className="btn btn-accent">Notify Me</button>
            </form>
            <p className="body-sm muted-3" style={{ marginTop: 12 }}>No spam. Unsubscribe at any time.</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
