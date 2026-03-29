import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <svg width="0" height="0" style={{ position: 'absolute', pointerEvents: 'none' }}>
        <filter id="remove-black" colorInterpolationFilters="sRGB">
          <feColorMatrix type="matrix" values="
            0 0 0 0 1
            0 0 0 0 1
            0 0 0 0 1
            0.333 0.333 0.333 0 0
          " />
        </filter>
      </svg>
      <nav
        className={`nav${scrolled ? ' scrolled' : ''}`}
        style={{
          background: scrolled ? 'var(--glass-bg)' : 'transparent',
          backdropFilter: scrolled ? 'blur(32px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(32px)' : 'none',
          borderBottom: scrolled ? 'var(--glass-border)' : '1px solid transparent',
          padding: scrolled ? '12px 0' : '20px 0',
          transition: 'all 0.5s cubic-bezier(0.25, 1, 0.5, 1)'
        }}
      >
        <div className="container">
          <div className="nav-inner">
            <Link to="/" className="nav-logo" onClick={closeMenu}>
              <img src="/Logo.png" alt="THEWCONVERTS LLC" className="nav-logo-img" />
            </Link>

            <div className="nav-links">
              <NavLink to="/" end className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>Home</NavLink>
              <NavLink to="/about" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>About</NavLink>
              <NavLink to="/shop" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>Shop</NavLink>
              <NavLink to="/contact" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>Contact</NavLink>
            </div>

            <div className="nav-actions">
              <button
                className="theme-toggle"
                onClick={toggleTheme}
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                style={{ background: 'var(--bg-2)' }}
              >
                {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
              </button>
              <button
                className={`hamburger${menuOpen ? ' open' : ''}`}
                onClick={() => setMenuOpen(o => !o)}
                aria-label="Toggle menu"
              >
                <span /><span /><span />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu${menuOpen ? ' open' : ''}`}
        style={{
          background: 'var(--bg-1)',
          backdropFilter: 'blur(32px)',
          WebkitBackdropFilter: 'blur(32px)'
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '20px' }}>
          <NavLink to="/" end className="nav-link" onClick={closeMenu}>Home</NavLink>
          <NavLink to="/about" className="nav-link" onClick={closeMenu}>About</NavLink>
          <NavLink to="/shop" className="nav-link" onClick={closeMenu}>Shop</NavLink>
          <NavLink to="/contact" className="nav-link" onClick={closeMenu}>Contact</NavLink>
        </div>
        <div className="mobile-menu-footer" style={{ borderTop: '1px solid var(--border)', paddingTop: '20px', marginTop: 'auto' }}>
          <a href="https://www.instagram.com/thewconverts" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm" style={{ flex: 1 }}>Instagram</a>
          <a href="https://www.tiktok.com/@thewconverts" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm" style={{ flex: 1 }}>TikTok</a>
        </div>
      </div>
    </>
  )
}
