import { Link } from 'react-router-dom'

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeLinecap="round" />
    </svg>
  )
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.2 8.2 0 0 0 4.79 1.52V6.75a4.85 4.85 0 0 1-1.02-.06z" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <div className="footer-logo">
              <img src="/Logo.png" alt="THEWCONVERTS LLC" style={{ height: 40, width: 'auto', objectFit: 'contain' }} />
            </div>
            <div className="footer-tagline">
              Your #1 source for OEM parts, factory-style conversion kits, and plug-and-play harness solutions for trucks. Built for enthusiasts. Built to last.
            </div>
            <div className="footer-socials">
              <a href="https://www.instagram.com/thewconverts" target="_blank" rel="noopener noreferrer" className="social-btn">
                <InstagramIcon /> Instagram
              </a>
              <a href="https://www.tiktok.com/@thewconverts" target="_blank" rel="noopener noreferrer" className="social-btn">
                <TikTokIcon /> TikTok
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h5>Navigation</h5>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/shop">Shop</Link></li>
              <li><a href="/#how-it-works">How It Works</a></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Products</h5>
            <ul>
              <li><Link to="/shop">Conversion Kits</Link></li>
              <li><Link to="/shop">OEM Parts</Link></li>
              <li><Link to="/shop">Harness Solutions</Link></li>
              <li><Link to="/shop">Interior Upgrades</Link></li>
              <li><Link to="/shop">Exterior Upgrades</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Contact</h5>
            <ul>
              <li><a href="mailto:matt81503@gmail.com">matt81503@gmail.com</a></li>
              <li><a href="https://www.instagram.com/thewconverts" target="_blank" rel="noopener noreferrer">@THEWCONVERTS</a></li>
              <li><a href="/#faq">FAQ</a></li>
              <li><Link to="/contact">Get a Quote</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-legal">
          <div className="legal-grid">
            <div className="legal-item">
              <h6>Fitment &amp; Compatibility</h6>
              <p>Compatibility depends on the customer's specific vehicle configuration. Buyers must verify fitment before purchase. We are not responsible if a part does not work due to undocumented factory options or prior modifications.</p>
            </div>
            <div className="legal-item">
              <h6>No Manufacturer Affiliation</h6>
              <p>THEWCONVERTS LLC is not affiliated with, endorsed by, or sponsored by Ford or any other vehicle manufacturer. All manufacturer names and trademarks are used for identification purposes only.</p>
            </div>
            <div className="legal-item">
              <h6>Installation &amp; Use</h6>
              <p>Professional installation is recommended. We are not responsible for damage, injury, or malfunctions resulting from improper installation or misuse of our products.</p>
            </div>
            <div className="legal-item">
              <h6>Limitation of Liability</h6>
              <p>To the fullest extent permitted by law, THEWCONVERTS LLC shall not be liable for any indirect, incidental, special, or consequential damages. Our total liability shall not exceed the original purchase price of the product.</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copy">&copy; {new Date().getFullYear()} THEWCONVERTS LLC. All rights reserved.</div>
          <div className="footer-dis">All sales final. Warranty applies to verified defective items only. Professional installation strongly recommended.</div>
        </div>
      </div>
    </footer>
  )
}
