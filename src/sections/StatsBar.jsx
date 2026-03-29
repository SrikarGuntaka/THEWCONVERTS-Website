import { useCounter } from '../hooks/useCounter'
import ScrollReveal from '../components/ScrollReveal'

function StatItem({ target, suffix, label, delay, children }) {
  const { ref, display } = useCounter(target, suffix)
  return (
    <ScrollReveal className={delay} tag="div">
      <div className="stat-item">
        <div className="stat-val" ref={ref}>{children || display}</div>
        <div className="stat-lbl">{label}</div>
      </div>
    </ScrollReveal>
  )
}

export default function StatsBar() {
  return (
    <div className="stats-bar">
      <div className="container">
        <div className="stats-row">
          <StatItem target={100} suffix="%" label="OEM Authentic" />
          <StatItem target={6} suffix="" label="Step Build Process" delay="reveal-delay-1" />
          <ScrollReveal className="reveal-delay-2" tag="div">
            <div className="stat-item">
              <div className="stat-val">DIY + Install</div>
              <div className="stat-lbl">Options Available</div>
            </div>
          </ScrollReveal>
          <div className="stat-item reveal visible">
            <div className="stat-val">F<span style={{ color: 'var(--accent)' }}>-150</span></div>
            <div className="stat-lbl">Platform Specialists</div>
          </div>
        </div>
      </div>
    </div>
  )
}
