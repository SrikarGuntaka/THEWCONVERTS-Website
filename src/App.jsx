import { BrowserRouter, Routes, Route, ScrollRestoration } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { ToastProvider } from './context/ToastContext'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Shop from './pages/Shop'
import ContactPage from './pages/ContactPage'

export default function App() {
  return (
    <ThemeProvider>
      <ToastProvider>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ToastProvider>
    </ThemeProvider>
  )
}
