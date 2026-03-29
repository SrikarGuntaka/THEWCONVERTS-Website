import { useEffect } from 'react'
import Contact from '../sections/Contact'
import EmailCapture from '../sections/EmailCapture'

export default function ContactPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <main>
      <Contact />
      <EmailCapture />
    </main>
  )
}
