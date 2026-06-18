import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import Cursor from './components/common/Cursor'
import Loader from './components/common/Loader'
import ScrollToTop from './components/common/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Projects from './pages/Projects'
import Technology from './pages/Technology'
import Industries from './pages/Industries'
import Process from './pages/Process'
import Testimonials from './pages/Testimonials'
import Careers from './pages/Careers'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Admin from './pages/Admin'
import Pricing from './pages/Pricing'
import Videos from './pages/Videos'
import CaseStudies from './pages/CaseStudies'


export default function App() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
    
    // Page View Tracking
    const viewsKey = 'arison_analytics_views'
    const currentViews = parseInt(localStorage.getItem(viewsKey) || '0', 10)
    localStorage.setItem(viewsKey, (currentViews + 1).toString())

    // Path wise views tracking
    const pathKey = 'arison_analytics_path_views'
    const pathViews = JSON.parse(localStorage.getItem(pathKey) || '{}')
    pathViews[location.pathname] = (pathViews[location.pathname] || 0) + 1
    localStorage.setItem(pathKey, JSON.stringify(pathViews))
  }, [location.pathname])

  // Global Clicks Tracking
  useEffect(() => {
    const handleGlobalClick = () => {
      const clickKey = 'arison_analytics_clicks'
      const currentClicks = parseInt(localStorage.getItem(clickKey) || '0', 10)
      localStorage.setItem(clickKey, (currentClicks + 1).toString())
    }

    window.addEventListener('click', handleGlobalClick)
    return () => window.removeEventListener('click', handleGlobalClick)
  }, [])

  const isAdmin = location.pathname === '/info@arison.pk'

  return (
    <>
      <div className="noise-overlay" aria-hidden="true" />
      <Cursor />
      <Loader />
      <ScrollToTop />
      {!isAdmin && <Navbar />}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/process" element={<Process />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/info@arison.pk" element={<Admin />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/case-studies" element={<CaseStudies />} />
        </Routes>
      </AnimatePresence>
      {!isAdmin && <Footer />}
    </>
  )
}
