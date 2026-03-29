import { useEffect, useRef, useState } from 'react'

export function useCounter(target, suffix = '', duration = 1400) {
  const [value, setValue] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const step = target / (duration / 16)
          let current = 0
          const timer = setInterval(() => {
            current = Math.min(current + step, target)
            setValue(Math.floor(current))
            if (current >= target) clearInterval(timer)
          }, 16)
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return { ref, display: `${value}${suffix}` }
}
