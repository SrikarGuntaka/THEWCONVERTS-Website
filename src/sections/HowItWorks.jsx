import { useState } from 'react'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'

const STEPS = [
  {
    num: '01',
    title: 'Choose Your Upgrade Goal',
    desc: 'Tell us what you want to change   higher-trim look, lighting upgrade, interior swap, tech upgrades, or a full conversion. We start with the goal.',
  },
  {
    num: '02',
    title: 'Verify Fitment & Build Your Plan',
    desc: "We confirm your truck's year, trim, and factory options, then match you with the correct OEM parts, conversion kit, and harness so everything is compatible.",
  },
  {
    num: '03',
    title: 'Source Genuine OEM Components',
    desc: 'We source factory-original parts selected for your exact build   plus all necessary brackets, trim pieces, and supporting hardware.',
  },
  {
    num: '04',
    title: 'Plug-and-Play Harness',
    desc: "If wiring is involved, a custom plug-and-play harness solution connects cleanly to factory plugs. No splicing, no surprises   keeps the install looking completely factory.",
  },
  {
    num: '05',
    title: 'Install Your Kit',
    desc: 'DIY or have the team handle it. The kit is organized and labeled to make installation straightforward and minimize downtime on your vehicle.',
  },
  {
    num: '06',
    title: 'Confirm Operation & Enjoy',
    desc: 'After installation   clean OEM fit, factory finish, and the features and look you wanted. All without buying a new truck.',
  },
]

export default function HowItWorks() {
  const [hoveredStep, setHoveredStep] = useState(null)

  return (
    <section className="section" id="how-it-works" style={{ background: 'var(--bg-1)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="container">
        <ScrollReveal>
          <div className="section-head">
            <div className="section-head-text">
              <div className="section-tag">Process</div>
              <h2 className="title-xl">How it works.</h2>
              <p>A clear, six-step process built around your truck, your goals, and getting it right the first time.</p>
            </div>
            <a href="/contact" className="btn btn-primary">GET A QUOTE TODAY</a>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="steps-wrap" onMouseLeave={() => setHoveredStep(null)}>
            {STEPS.map((s, index) => {
              const isDimmed = hoveredStep !== null && hoveredStep !== index;
              return (
                <div 
                  key={s.num} 
                  className="step-card"
                  style={{
                    opacity: isDimmed ? 0.35 : 1,
                    filter: isDimmed ? 'grayscale(0.8)' : 'none',
                    transform: hoveredStep === index ? 'translateY(-4px)' : 'none',
                    transition: 'all 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
                    position: 'relative',
                    zIndex: hoveredStep === index ? 10 : 1
                  }}
                  onMouseEnter={() => setHoveredStep(index)}
                >
                  <div className="step-num" style={{ color: hoveredStep === index ? 'var(--accent)' : 'var(--text-3)' }}>{s.num}</div>
                  <div className="step-title">{s.title}</div>
                  <div className="step-desc">{s.desc}</div>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

