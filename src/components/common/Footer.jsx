import { Link } from 'react-router-dom'
import { Mail, Phone, ArrowRight, Globe } from 'lucide-react'

// Inline SVG social icons (lucide-react v0.x renamed these)
const LinkedinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
)
const TwitterIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
)
const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
)
import Logo from './Logo'
import './Footer.css'

const footerLinks = {
  Company: [
    { label: 'About Us', path: '/about' },
    { label: 'Our Process', path: '/process' },
    { label: 'Careers', path: '/careers' },
    { label: 'Blog', path: '/blog' },
    { label: 'Testimonials', path: '/testimonials' },
  ],
  Services: [
    { label: 'Custom Software', path: '/services' },
    { label: 'Web Development', path: '/services' },
    { label: 'Mobile Apps', path: '/services' },
    { label: 'AI & ML Solutions', path: '/services' },
    { label: 'Cloud Solutions', path: '/services' },
    { label: 'UI/UX Design', path: '/services' },
  ],
  Industries: [
    { label: 'Healthcare', path: '/industries' },
    { label: 'Finance & Banking', path: '/industries' },
    { label: 'Manufacturing', path: '/industries' },
    { label: 'Education', path: '/industries' },
    { label: 'Retail & E-Commerce', path: '/industries' },
    { label: 'Logistics', path: '/industries' },
  ],
  Resources: [
    { label: 'Portfolio', path: '/projects' },
    { label: 'Technology Stack', path: '/technology' },
    { label: 'Industries', path: '/industries' },
    { label: 'Contact Us', path: '/contact' },
  ],
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-glow-top" aria-hidden="true" />
      <div className="container">
        {/* CTA Strip */}
        <div className="footer-cta">
          <div className="footer-cta-content">
            <h3 className="heading-lg">Ready to build something extraordinary?</h3>
            <p className="text-muted body-md" style={{ marginTop: '0.5rem' }}>
              Let's turn your vision into world-class software.
            </p>
          </div>
          <Link to="/contact" className="btn btn-primary btn-lg">
            Start Your Project <ArrowRight size={18} />
          </Link>
        </div>

        <div className="footer-divider" />

        {/* Main Footer Grid */}
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand">
            <Logo size={40} showText={true} />
            <p className="footer-tagline">
              Building technology that drives business forward. Enterprise software solutions for organizations worldwide.
            </p>
            <div className="footer-contact-list">
              <a href="https://wa.me/923004003075" target="_blank" rel="noreferrer" className="footer-contact-item">
                <Phone size={14} />
                +92 300 4003075 (WhatsApp)
              </a>
              <a href="https://wa.me/923027724609" target="_blank" rel="noreferrer" className="footer-contact-item">
                <Phone size={14} />
                +92 302 7724609 (WhatsApp)
              </a>
              <a href="mailto:arisonnextstacktechnologies@gmail.com" className="footer-contact-item">
                <Mail size={14} />
                arisonnextstacktechnologies@gmail.com
              </a>
              <a href="https://instagram.com/arison.nextstack" target="_blank" rel="noreferrer" className="footer-contact-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
                Instagram: @arison.nextstack
              </a>
              <a href="https://tiktok.com/@arison.nextstack" target="_blank" rel="noreferrer" className="footer-contact-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
                </svg>
                TikTok: @arison.nextstack
              </a>
            </div>
            <div className="footer-socials">
              <a href="https://instagram.com/arison.nextstack" target="_blank" rel="noreferrer" className="social-icon" aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="https://tiktok.com/@arison.nextstack" target="_blank" rel="noreferrer" className="social-icon" aria-label="TikTok">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
                </svg>
              </a>
              <a href="#" className="social-icon" aria-label="LinkedIn"><LinkedinIcon /></a>
              <a href="#" className="social-icon" aria-label="Twitter"><TwitterIcon /></a>
              <a href="#" className="social-icon" aria-label="GitHub"><GithubIcon /></a>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group} className="footer-col">
              <div className="footer-col-title">{group}</div>
              <ul className="footer-col-links">
                {links.map(link => (
                  <li key={link.label}>
                    <Link to={link.path} className="footer-link">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="footer-newsletter">
          <div className="newsletter-text">
            <div className="label text-cyan">Newsletter</div>
            <p className="body-sm text-muted" style={{ marginTop: '0.25rem' }}>
              Technology insights & company updates
            </p>
          </div>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              className="form-input newsletter-input"
              placeholder="Enter your email"
              aria-label="Email for newsletter"
            />
            <button type="submit" className="btn btn-primary btn-sm">Subscribe</button>
          </form>
        </div>

        <div className="footer-divider" />

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="body-sm text-muted">
            © {year} Arison NextStack Technologies. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <a href="#" className="footer-bottom-link">Privacy Policy</a>
            <a href="#" className="footer-bottom-link">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
