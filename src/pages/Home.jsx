import { useEffect } from 'react'
import Hero from '../sections/Hero'
import StatsBar from '../sections/StatsBar'
import Features from '../sections/Features'
import HowItWorks from '../sections/HowItWorks'
import FeaturedProducts from '../sections/FeaturedProducts'
import EmailCapture from '../sections/EmailCapture'
import FAQ from '../sections/FAQ'

export default function Home() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <main>
      <Hero />
      <StatsBar />
      <Features />
      <HowItWorks />
      <FeaturedProducts />
      <EmailCapture />
      <FAQ />
    </main>
  )
}
