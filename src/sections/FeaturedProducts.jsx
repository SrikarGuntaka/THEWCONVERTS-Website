import { Link } from 'react-router-dom'
import { PRODUCTS } from '../data/products'
import ProductCard from '../components/ProductCard'
import ScrollReveal from '../components/ScrollReveal'

export default function FeaturedProducts() {
  const featured = PRODUCTS.slice(0, 3)

  return (
    <section className="section" id="products">
      <div className="container">
        <ScrollReveal>
          <div className="section-head">
            <div className="section-head-text">
              <div className="section-tag">Products</div>
              <h2 className="title-xl">Featured Builds.</h2>
              <p>A selection of our most popular OEM upgrade kits. Each one sourced with genuine factory components and built for a clean, correct installation.</p>
            </div>
            <Link to="/shop" className="btn btn-primary">VIEW ALL PRODUCTS</Link>
          </div>
        </ScrollReveal>

        <div className="products-grid">
          {featured.map((p, i) => (
            <ProductCard key={p.id} product={p} delayClass={i > 0 ? `reveal-delay-${i}` : ''} />
          ))}
        </div>
      </div>
    </section>
  )
}
