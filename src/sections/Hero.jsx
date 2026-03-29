import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// All images from /public
const galleryImages = [
  '/612129397_17867514804537460_4654067045712433024_n.jpg',
  '/617373894_17868647751537460_722806486620117828_n.jpg',
  '/651035394_17876169960537460_6601715624554621571_n.jpg',
  '/Product-Image-1.jpeg',
  '/Product-Image-2.jpeg',
  '/Product-Image-3.jpeg',
  '/Product-Image-4.jpeg',
  '/Product-Image-5.jpeg',
  '/distinguishedgentleman.jpg',
  '/seats.jpg',
]

// Distribute images roughly evenly across 3 columns
const col1 = galleryImages.filter((_, i) => i % 3 === 0)   // left  → scroll down
const col2 = galleryImages.filter((_, i) => i % 3 === 1)   // middle → scroll up
const col3 = galleryImages.filter((_, i) => i % 3 === 2)   // right  → scroll down

// Duplicate for seamless infinite loop
const doubled = (arr) => [...arr, ...arr, ...arr]

export default function Hero() {
  const [loaded, setLoaded] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100)
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <section className="hero">
      {/* ── Scrolling gallery background ── */}
      <div className="hero-gallery-bg" aria-hidden="true">
        {/* Left column – scroll DOWN */}
        <div className="gallery-col gallery-col--down">
          <div className="gallery-track gallery-track--down">
            {doubled(col1).map((src, i) => (
              <div className="gallery-img-wrap" key={`l-${i}`}>
                <img src={src} alt="" loading="lazy" draggable="false" />
              </div>
            ))}
          </div>
        </div>

        {/* Middle column – scroll UP */}
        <div className="gallery-col gallery-col--up">
          <div className="gallery-track gallery-track--up">
            {doubled(col2).map((src, i) => (
              <div className="gallery-img-wrap" key={`m-${i}`}>
                <img src={src} alt="" loading="lazy" draggable="false" />
              </div>
            ))}
          </div>
        </div>

        {/* Right column – scroll DOWN */}
        <div className="gallery-col gallery-col--down">
          <div className="gallery-track gallery-track--down">
            {doubled(col3).map((src, i) => (
              <div className="gallery-img-wrap" key={`r-${i}`}>
                <img src={src} alt="" loading="lazy" draggable="false" />
              </div>
            ))}
          </div>
        </div>

        {/* Dark overlay + vignette so text stays readable */}
        <div className="gallery-overlay" />
        <div className="gallery-vignette-top" />
        <div className="gallery-vignette-bottom" />
      </div>

      <div className="hero-bg">
        <div className="hero-line-left" />
        <div className="hero-line-right" />
      </div>
      <div className="hero-fade" />

      <div className="container hero-content">
        <h1 className="hero-title">
          <span className="line"><span className={`word reveal reveal-delay-1 ${loaded ? 'visible' : ''}`}>Your #1</span></span>
          <span className="line"><span className={`word reveal reveal-delay-2 ${loaded ? 'visible' : ''}`}>Source for</span></span>
          <span className="line"><span className={`word accent-word reveal reveal-delay-3 ${loaded ? 'visible' : ''}`}>OEM</span></span>
          <span className="line"><span className={`word reveal reveal-delay-4 ${loaded ? 'visible' : ''}`}>Upgrades.</span></span>
        </h1>

        <p className={`hero-desc reveal reveal-delay-4 ${loaded ? 'visible' : ''}`}>
          Genuine factory parts and complete conversion kits designed for perfect
          fitment, full functionality, and a clean, high-end finish without buying a new truck.
        </p>

        <div className={`hero-ctas reveal reveal-delay-5 ${loaded ? 'visible' : ''}`}>
          <Link to="/shop" className="btn btn-primary btn-lg">
            Browse Products
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
          <a href="#how-it-works" className="btn btn-outline btn-lg">
            See How It Works
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="12" y1="5" x2="12" y2="19" /><polyline points="5 12 12 19 19 12" />
            </svg>
          </a>
        </div>
      </div>

      <div className={`hero-scroll-hint reveal reveal-delay-5 ${loaded && !scrolled ? 'visible' : ''}`} aria-hidden="true">
        <div className="scroll-line" />
        <span className="scroll-label">Scroll Down</span>
      </div>
    </section>
  )
}
