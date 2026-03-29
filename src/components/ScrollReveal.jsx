import { useScrollReveal } from '../hooks/useScrollReveal'

/**
 * Wraps children in a div that fades + slides up when it enters the viewport.
 * className: extra classes (e.g. "reveal-delay-2")
 * tag: element type (default "div")
 */
export default function ScrollReveal({ children, className = '', tag: Tag = 'div', style }) {
  const ref = useScrollReveal()
  return (
    <Tag ref={ref} className={`reveal ${className}`} style={style}>
      {children}
    </Tag>
  )
}
