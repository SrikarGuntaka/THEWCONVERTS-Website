import { useState } from 'react'
import ScrollReveal from '../components/ScrollReveal'

const FAQS = [
  {
    q: 'Will these parts work on my specific truck?',
    a: "Fitment depends on your specific truck's year, trim, and factory options. Before any order, we walk through a full fitment verification   including confirming your cab style, option codes, and any prior modifications   to make sure every component is the correct match for your vehicle.",
  },
  {
    q: 'Are these genuine OEM parts or aftermarket?',
    a: "Genuine OEM only. We don't sell aftermarket replicas or 'OEM-style' parts. Every component is factory-original   sourced from manufacturer inventory or pulled from factory-spec vehicles   which is exactly why the fitment and finish are indistinguishable from what the manufacturer would have installed.",
  },
  {
    q: "What's the difference between a DIY kit and having your team install it?",
    a: 'A DIY kit ships with everything organized, labeled, and ready for you to install yourself   typically accompanied by step-by-step guidance. The installed option means our team handles everything on your vehicle, verifying fitment and confirming proper operation before you drive away. Both options use the exact same OEM components.',
  },
  {
    q: 'Does my truck need programming after installing an upgrade?',
    a: "Some upgrades   particularly tech features like SYNC infotainment, trailer brake controllers, or adaptive cruise   may require module programming or calibration. If a product requires programming, this is clearly noted in the listing. Simple mechanical or interior installs typically require no programming at all.",
  },
  {
    q: "Can I add features my base model truck was never factory-equipped with?",
    a: "Yes   that's exactly what we specialize in. Single-cab and base-model trucks are rarely offered at higher trim levels, which leaves owners with limited factory options. Using genuine OEM components from higher-trim variants, we can retrofit features   lighting systems, interior packages, tech upgrades, and more   to vehicles that were never originally offered with them.",
  },
  {
    q: 'Do you offer a warranty?',
    a: 'All parts are inspected and tested prior to shipment. Items that arrive defective or non-functional are eligible for warranty consideration   proof of failure may be required. Warranty does not cover damage caused by improper installation, misuse, or modification. Except for verified defective items, all sales are final.',
  },
  {
    q: 'How does the ordering and fitment process work?',
    a: "Contact us with your upgrade goal and vehicle details (year, model, trim, and any relevant options). We'll confirm fitment, build your parts plan, and source the correct OEM components. You'll receive everything organized and ready to install   DIY or with our team.",
  },
  {
    q: 'How long does it take to receive my order?',
    a: "Lead times vary depending on parts sourcing and kit complexity. Simple parts orders typically ship faster than full conversion kits. We'll give you a clear timeline during the inquiry process   before any payment is required.",
  },
]

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`faq-item${open ? ' open' : ''}`}>
      <div className="faq-q" onClick={() => setOpen(o => !o)} role="button" tabIndex={0} onKeyDown={e => e.key === 'Enter' && setOpen(o => !o)}>
        {q}
        <span className="faq-icon">+</span>
      </div>
      <div className="faq-a">
        <p>{a}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  return (
    <section className="section" id="faq">
      <div className="container">
        <ScrollReveal>
          <div className="section-head">
            <div className="section-head-text">
              <div className="section-tag">FAQ</div>
              <h2 className="title-xl">Common questions.</h2>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="faq-wrap">
            {FAQS.map(item => (
              <FaqItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
