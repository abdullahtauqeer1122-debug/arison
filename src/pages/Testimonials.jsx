import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Star, Quote } from 'lucide-react'
import AnimatedSection from '../components/common/AnimatedSection'
import './Testimonials.css'

const initialFeatured = {
  name: 'Dr. Ayesha Rahman',
  role: 'Chief Digital Officer',
  company: 'National Health Network',
  text: 'Partnering with Arison NextStack Technologies was the single best technology decision our organization made in the last decade. They didn\'t just build us a system — they became true strategic partners who understood our clinical workflows, regulatory requirements, and long-term vision. The platform they delivered reduced patient processing time by 60% and is now used by over 120,000 patients monthly. The team\'s technical expertise, combined with their genuine care for our mission, was unlike anything we had experienced from a technology partner.',
  rating: 5,
  result: '60% reduction in patient processing time',
}

export const initialTestimonials = [
  { name: 'Dr. Ayesha Rahman', role: 'Chief Digital Officer', company: 'National Health Network', text: 'Partnering with Arison NextStack Technologies was the single best technology decision our organization made in the last decade. They didn\'t just build us a system — they became true strategic partners.', rating: 5, metric: '60% reduction in patient processing time' },
  { name: 'James Okonkwo', role: 'CEO', company: 'RetailEdge International', text: 'The e-commerce platform Arison NextStack delivered handles 50,000+ daily transactions with zero downtime. Within 90 days of launch, our revenue was up 120%. The ROI justified the investment in the first quarter alone.', rating: 5, metric: '120% revenue increase' },
  { name: 'Priya Kapoor', role: 'VP Engineering', company: 'FinanceCore Systems', text: 'We had tried two other vendors before Arison NextStack. They were the first team that actually understood our regulatory requirements and built a system that our compliance team could fully approve. On-time, on-budget, and exceptional quality.', rating: 5, metric: '100% compliance achieved' },
  { name: 'Michael Torres', role: 'Operations Director', company: 'LogiTrack Global', text: 'Our fleet visibility went from zero to real-time tracking of 500+ vehicles overnight. On-time delivery rates jumped from 67% to 94%. The ROI was visible within 30 days of go-live.', rating: 5, metric: '27% improvement in on-time delivery' },
  { name: 'Sarah Mitchell', role: 'CTO', company: 'EduVision University Consortium', text: 'Building an LMS for 8 universities simultaneously is extraordinarily complex. Arison NextStack navigated it with professionalism that frankly surprised us. The platform runs flawlessly for 120,000 concurrent users.', rating: 5, metric: '120,000 concurrent users supported' },
  { name: 'Ahmad Raza', role: 'Managing Director', company: 'TextilePro Group', text: 'As a textile manufacturer, we had very specific industry requirements that generic ERP vendors couldn\'t address. Arison NextStack built us something perfectly tailored to our spinning, weaving, and dyeing operations. Productivity up 35%.', rating: 5, metric: '35% productivity improvement' },
  { name: 'Lisa Chen', role: 'Founder & CEO', company: 'PropTech SaaS Platform', text: 'They took our SaaS concept from idea to a platform with 147 paying agencies in 6 months. Their understanding of multi-tenant architecture and their speed of execution was genuinely impressive. Highly recommend.', rating: 5, metric: '147 agencies onboarded in 6 months' },
  { name: 'Robert Fischer', role: 'IT Director', company: 'Nexus Manufacturing', text: 'The ERP system they built for our 3-plant operation is exactly what we needed. Six months of meticulous requirements gathering paid off — the system fit our processes perfectly without requiring us to change how we work.', rating: 5, metric: '40% reduction in manual processes' },
  { name: 'Fatima Al-Rashid', role: 'Digital Transformation Lead', company: 'Gulf Finance Group', text: 'Arison NextStack guided our entire digital transformation journey, not just the technology delivery. Their strategic advice on change management and user adoption was as valuable as the software itself.', rating: 5, metric: '55% staff productivity increase' },
  { name: 'David Osei', role: 'Product Manager', company: 'AgriConnect Platform', text: 'The mobile application they built for our farming network is used by 25,000 farmers daily. The offline-first architecture was crucial for our rural users, and Arison NextStack executed it flawlessly.', rating: 5, metric: '25,000 daily active users' },
]

const results = [
  { val: '94%', label: 'Client Retention Rate' },
  { val: '97%', label: 'On-Time Delivery' },
  { val: '4.9/5', label: 'Average Client Satisfaction' },
  { val: '150+', label: 'Successful Projects' },
]

export default function Testimonials() {
  const [testimonialsList, setTestimonialsList] = useState([])
  const [featuredTestimonial, setFeaturedTestimonial] = useState(initialFeatured)

  useEffect(() => {
    const stored = localStorage.getItem('arison_testimonials')
    if (stored) {
      const parsed = JSON.parse(stored)
      setTestimonialsList(parsed)
      if (parsed.length > 0) {
        // Use the first testimonial as featured if available or initialFeatured
        setFeaturedTestimonial({
          name: parsed[0].name,
          role: parsed[0].role,
          company: parsed[0].company,
          text: parsed[0].text || parsed[0].content,
          rating: parsed[0].rating || 5,
          result: parsed[0].metric || `${parsed[0].company} Partner`
        })
      }
    } else {
      setTestimonialsList(initialTestimonials)
      localStorage.setItem('arison_testimonials', JSON.stringify(initialTestimonials))
    }
  }, [])

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
      {/* Hero */}
      <section className="page-hero testi-hero" aria-label="Testimonials hero">
        <div className="testi-hero-glow" />
        <div className="container page-hero-content">
          <AnimatedSection>
            <div className="section-label">Client Success</div>
            <h1 className="display-lg" style={{ marginBottom: '1.5rem', maxWidth: '700px' }}>
              Words from the Organizations <span className="text-grad">We've Transformed</span>
            </h1>
            <p className="body-lg text-muted" style={{ maxWidth: '560px' }}>
              We measure our success in the outcomes our clients achieve — not in lines of code written. Here is what they say.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Result Stats */}
      <section className="testi-results-band" aria-label="Results stats">
        <div className="container">
          <div className="testi-results-grid stagger">
            {results.map((r, i) => (
              <AnimatedSection key={r.label} delay={i * 80} className="testi-result-item">
                <div className="stat-number">{r.val}</div>
                <div className="stat-label">{r.label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      {featuredTestimonial && (
        <section className="section featured-testi-section" aria-label="Featured testimonial">
          <div className="container">
            <AnimatedSection animation="reveal-scale" className="featured-testi-card card">
              <div className="featured-testi-glow-1" />
              <div className="featured-testi-glow-2" />
              <div className="featured-quote-icon">
                <Quote size={40} />
              </div>
              <div className="featured-testi-stars">
                {Array.from({ length: featuredTestimonial.rating }).map((_, i) => (
                  <Star key={i} size={20} fill="#F59E0B" color="#F59E0B" />
                ))}
              </div>
              <blockquote className="featured-testi-text">
                "{featuredTestimonial.text || featuredTestimonial.content}"
              </blockquote>
              <div className="featured-testi-footer">
                <div className="featured-testi-author">
                  <div className="featured-avatar">{featuredTestimonial.name[0]}</div>
                  <div>
                    <div className="featured-name">{featuredTestimonial.name}</div>
                    <div className="featured-role">{featuredTestimonial.role}, {featuredTestimonial.company}</div>
                  </div>
                </div>
                <div className="badge badge-cyan">{featuredTestimonial.result || featuredTestimonial.metric}</div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* Testimonials Grid */}
      <section className="section testi-grid-section" aria-label="Client testimonials">
        <div className="container">
          <AnimatedSection className="section-header">
            <div className="section-label">More Client Stories</div>
            <h2 className="section-title">Real People. <span className="text-grad">Real Results.</span></h2>
          </AnimatedSection>
          <div className="testi-cards-grid stagger">
            {testimonialsList.map((t, i) => (
              <AnimatedSection key={t.name + i} delay={i * 60} className="testi-grid-card card">
                <div className="testi-stars-row">
                  {Array.from({ length: t.rating || 5 }).map((_, j) => (
                    <Star key={j} size={13} fill="#F59E0B" color="#F59E0B" />
                  ))}
                </div>
                <p className="testi-card-text">"{t.text || t.content}"</p>
                {(t.metric || t.company) && <div className="badge badge-cyan" style={{ alignSelf: 'flex-start', marginBottom: '0.75rem' }}>{t.metric || t.company}</div>}
                <div className="testi-card-author">
                  <div className="testi-card-avatar">{t.name ? t.name[0] : 'C'}</div>
                  <div>
                    <div className="testi-card-name">{t.name}</div>
                    <div className="testi-card-role">{t.role}, {t.company}</div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-sm" aria-label="Testimonials CTA">
        <div className="container" style={{ textAlign: 'center' }}>
          <AnimatedSection animation="reveal-scale">
            <h2 className="section-title" style={{ marginBottom: '1rem' }}>
              Ready to become our next <span className="text-grad">success story?</span>
            </h2>
            <p className="body-lg text-muted" style={{ marginBottom: '2rem' }}>Let's build something remarkable together.</p>
            <Link to="/contact" className="btn btn-primary btn-lg">Start Your Project <ArrowRight size={18} /></Link>
          </AnimatedSection>
        </div>
      </section>
    </motion.main>
  )
}
