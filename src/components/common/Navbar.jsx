import { useState, useEffect, useRef } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react'
import Logo from './Logo'
import './Navbar.css'

const navLinks = [
  { label: 'Home', path: '/' },
  {
    label: 'Company',
    children: [
      { label: 'About Us', path: '/about', desc: 'Our story & mission' },
      { label: 'Process', path: '/process', desc: 'How we work' },
      { label: 'Careers', path: '/careers', desc: 'Join our team' },
      { label: 'Testimonials', path: '/testimonials', desc: 'Client success stories' },
    ],
  },
  {
    label: 'Solutions',
    children: [
      { label: 'Services', path: '/services', desc: 'Full Stack & custom software' },
      { label: 'Technology', path: '/technology', desc: 'Our high-performance stack' },
      { label: 'Industries', path: '/industries', desc: 'Sectors we specialize in' },
      { label: 'Pricing Plan', path: '/pricing', desc: 'Affordable web & SaaS packages' },
    ],
  },
  {
    label: 'Portfolio',
    children: [
      { label: 'Our Projects', path: '/projects', desc: 'Explore our built applications' },
      { label: 'Case Studies', path: '/case-studies', desc: 'Deep dive into key projects' },
    ],
  },
  {
    label: 'Insights',
    children: [
      { label: 'Articles & Blogs', path: '/blog', desc: 'Tech articles & tutorials' },
      { label: 'Video Briefings', path: '/videos', desc: 'Interactive briefings & guides' },
    ],
  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const navRef = useRef(null)
  const mobileMenuRef = useRef(null)
  const closeTimer = useRef(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClick = (e) => {
      const inNav = navRef.current && navRef.current.contains(e.target)
      const inMobile = mobileMenuRef.current && mobileMenuRef.current.contains(e.target)
      if (!inNav && !inMobile) {
        setActiveDropdown(null)
        setMobileOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('no-scroll', mobileOpen)
    return () => document.body.classList.remove('no-scroll')
  }, [mobileOpen])

  const handleDropdownEnter = (label) => {
    clearTimeout(closeTimer.current)
    setActiveDropdown(label)
  }
  const handleDropdownLeave = () => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 150)
  }

  return (
    <>
    <header className={`navbar${scrolled ? ' scrolled' : ''}${mobileOpen ? ' menu-open' : ''}`} ref={navRef}>
      <div className="navbar-inner container">
        <Link to="/" className="navbar-logo" onClick={() => setMobileOpen(false)}>
          <Logo size={36} showText={true} />
        </Link>

        <nav className="navbar-links" aria-label="Main navigation">
          {navLinks.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className={`nav-dropdown-wrap${activeDropdown === item.label ? ' open' : ''}`}
                onMouseEnter={() => handleDropdownEnter(item.label)}
                onMouseLeave={handleDropdownLeave}
              >
                <button 
                  className="nav-link nav-link-drop" 
                  aria-haspopup="true" 
                  aria-expanded={activeDropdown === item.label}
                  onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                >
                  {item.label}
                  <ChevronDown size={14} className="drop-icon" />
                </button>
                <div className="nav-dropdown">
                  {item.children.map((child) => (
                    <Link key={child.path} to={child.path} className="nav-dropdown-item" onClick={() => setActiveDropdown(null)}>
                      <div className="dropdown-label">{child.label}</div>
                      <div className="dropdown-desc">{child.desc}</div>
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                end={item.path === '/'}
              >
                {item.label}
              </NavLink>
            )
          )}
        </nav>

        <div className="navbar-actions">
          <Link to="/contact" className="btn btn-primary btn-sm">
            Start a Project <ArrowRight size={14} />
          </Link>
          <button
            className="mobile-toggle"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

    </header>

    {/* Mobile Menu — outside header so it's not clipped by fixed height */}
    <div className={`mobile-menu${mobileOpen ? ' open' : ''}`} aria-hidden={!mobileOpen} ref={mobileMenuRef}>
      <nav className="mobile-nav">
        {navLinks.map((item) =>
          item.children ? (
            <div key={item.label} className="mobile-group">
              <div className="mobile-group-label">{item.label}</div>
              {item.children.map((child) => (
                <Link
                  key={child.path}
                  to={child.path}
                  className="mobile-link mobile-child"
                  onClick={() => setMobileOpen(false)}
                >
                  {child.label}
                </Link>
              ))}
            </div>
          ) : (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `mobile-link${isActive ? ' active' : ''}`}
              end={item.path === '/'}
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </NavLink>
          )
        )}

        <div className="mobile-cta">
          <Link to="/contact" className="btn btn-primary" onClick={() => setMobileOpen(false)}>
            Start a Project <ArrowRight size={16} />
          </Link>
        </div>
      </nav>
    </div>
    </>
  )
}
