import { useState } from 'react'
import { CATEGORY_LABELS } from '../data/products'
import ScrollReveal from './ScrollReveal'

function TruckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="80" height="80">
      <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
    </svg>
  )
}

export default function ProductCard({ product, delayClass = '' }) {
  const { name, category, badge, badgeLabel, price, priceContact, description, fitment, tags, gradient, image } = product
  const mailto = `mailto:matt81503@gmail.com?subject=Inquiry: ${encodeURIComponent(name)}`
  const [hovered, setHovered] = useState(false)

  return (
    <ScrollReveal className={delayClass}>
      <div 
        className="product-card"
        style={{
          background: 'var(--glass-bg)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          border: 'var(--glass-border)',
          borderTop: 'var(--glass-border-light)',
          boxShadow: hovered ? 'var(--shadow-lg)' : 'var(--shadow-md)',
          transform: hovered ? 'translateY(-6px)' : 'none',
          transition: 'all 0.4s cubic-bezier(0.25, 1, 0.5, 1)'
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="product-img" style={{ position: 'relative', overflow: 'hidden' }}>
          {image ? (
            <img
              src={image}
              alt={name}
              style={{
                position: 'absolute', inset: 0, width: '100%', height: '100%',
                objectFit: 'cover',
                transform: hovered ? 'scale(1.08)' : 'scale(1)',
                transition: 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)',
              }}
            />
          ) : (
            <>
              <div
                className="product-img-inner"
                style={{
                  background: gradient,
                  transform: hovered ? 'scale(1.08)' : 'scale(1)',
                  transition: 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)'
                }}
              />
              <div
                className="product-img-icon"
                style={{
                  opacity: hovered ? 0.25 : 0.12,
                  color: hovered ? 'var(--accent)' : 'var(--text-1)',
                  transition: 'all 0.4s ease'
                }}
              >
                <TruckIcon />
              </div>
            </>
          )}
          {badge && (
            <span className={`product-badge badge-${badge}`}>{badgeLabel}</span>
          )}
          {/* Subtle rim light for image container */}
          <div style={{ position: 'absolute', inset: 0, border: '1px solid rgba(255,255,255,0.05)', pointerEvents: 'none' }} />
        </div>
        <div className="product-body" style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.02), transparent)' }}>
          <div className="product-cat">{CATEGORY_LABELS[category] || category}</div>
          <div className="product-name">{name}</div>
          <div className="product-desc">{description}</div>
          <div className="product-tags">
            {tags.map(t => <span key={t} className="product-tag">{t}</span>)}
            <span className="product-tag">{fitment}</span>
          </div>
          <div className="product-footer-row">
            <div>
              <div className="product-price-label">{priceContact ? 'Pricing' : 'Starting from'}</div>
              <div className="product-price" style={{ color: hovered ? 'var(--accent)' : 'inherit', transition: 'color 0.3s' }}>{price}</div>
            </div>
            <a 
              href={mailto} 
              className={`btn btn-sm ${hovered ? 'btn-accent' : 'btn-outline'}`}
              style={{ padding: '8px 16px' }}
            >
              {priceContact ? 'Get Quote' : 'Inquire Now'}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </ScrollReveal>
  )
}
