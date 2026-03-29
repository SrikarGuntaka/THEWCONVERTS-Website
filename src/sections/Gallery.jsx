import ScrollReveal from '../components/ScrollReveal'

const TILES = [
  { img: '/612129397_17867514804537460_4654067045712433024_n.jpg', caption: 'Full High-Trim Conversion', sub: '2019 F-150 Regular Cab', wide: true },
  { img: '/Product-Image-1.jpeg', caption: 'OEM LED Headlight Upgrade', sub: '2018 F-150 STX' },
  { img: '/Product-Image-2.jpeg', caption: 'King Ranch Interior Swap', sub: '2020 F-150 SuperCab' },
  { img: '/Product-Image-3.jpeg', caption: 'Factory Side Step Install', sub: '2017 F-150 XLT' },
]

export default function Gallery() {
  return (
    <section className="section" id="builds" style={{ background: 'var(--bg-1)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="container">
        <ScrollReveal>
          <div className="section-head">
            <div className="section-head-text">
              <div className="section-tag">Customer Builds</div>
              <h2 className="title-xl">Real builds.<br />Real results.</h2>
              <p>Follow along on Instagram to see current builds, new stock arrivals, and finished conversions from real customers.</p>
            </div>
            <a href="https://www.instagram.com/thewconverts" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeLinecap="round" />
              </svg>
              @THEWCONVERTS
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="gallery-grid">
            {TILES.map((tile, i) => (
              <div key={i} className="gallery-item" style={tile.wide ? { gridColumn: 'span 2', aspectRatio: '2/1' } : {}}>
                <div className="gallery-bg" style={{ backgroundImage: `url(${tile.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                <div className="gallery-overlay">
                  <div className="gallery-caption">
                    {tile.caption}<br />
                    <span style={{ opacity: 0.8, fontWeight: 400 }}>{tile.sub}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="gallery-cta-wrap">
            <a href="https://www.instagram.com/thewconverts" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeLinecap="round" />
              </svg>
              Follow on Instagram
            </a>
            <a href="https://www.tiktok.com/@thewconverts" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.2 8.2 0 0 0 4.79 1.52V6.75a4.85 4.85 0 0 1-1.02-.06z" />
              </svg>
              Follow on TikTok
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
