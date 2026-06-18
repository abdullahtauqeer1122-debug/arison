import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import AnimatedSection from '../components/common/AnimatedSection'
import './Industries.css'

const industries = [
  { icon: '🏥', name: 'Healthcare', color: '#00CFFD', challenge: 'Patient data management, interoperability, compliance', solution: 'We build HIPAA-compliant EHR systems, hospital management platforms, telemedicine solutions, and AI-powered diagnostic tools that improve patient outcomes while reducing administrative burden.', projects: '18+ projects' },
  { icon: '🎓', name: 'Education', color: '#7B5EFF', challenge: 'Student engagement, content delivery, assessment at scale', solution: 'Enterprise LMS platforms, virtual classroom systems, assessment automation, and student analytics dashboards serving thousands to hundreds of thousands of learners simultaneously.', projects: '12+ projects' },
  { icon: '💰', name: 'Finance & Banking', color: '#4A6CF7', challenge: 'Security, real-time processing, regulatory compliance', solution: 'Core banking modernization, fintech platforms, payment gateways, fraud detection systems, and investment management tools built with enterprise-grade security and compliance.', projects: '15+ projects' },
  { icon: '🛡️', name: 'Insurance', color: '#00CFFD', challenge: 'Policy management, claims processing, risk modeling', solution: 'Digital insurance platforms, automated claims processing, risk assessment engines, and customer portals that reduce processing time and improve policyholder experience.', projects: '8+ projects' },
  { icon: '🛒', name: 'Retail & E-Commerce', color: '#7B5EFF', challenge: 'Customer experience, inventory, omnichannel fulfillment', solution: 'High-performance commerce platforms, inventory management systems, AI recommendation engines, and unified commerce solutions scaling from startup to enterprise.', projects: '22+ projects' },
  { icon: '🏭', name: 'Manufacturing', color: '#4A6CF7', challenge: 'Production planning, quality control, supply chain visibility', solution: 'Custom ERP systems, production scheduling automation, quality management systems, and IoT-integrated factory floor monitoring solutions for modern manufacturers.', projects: '14+ projects' },
  { icon: '🚚', name: 'Logistics & Supply Chain', color: '#00CFFD', challenge: 'Fleet management, route optimization, real-time tracking', solution: 'End-to-end supply chain platforms with real-time GPS tracking, AI-powered route optimization, warehouse management systems, and customer delivery portals.', projects: '11+ projects' },
  { icon: '🏘️', name: 'Real Estate', color: '#7B5EFF', challenge: 'Property listing, lead management, transaction management', solution: 'PropTech platforms, real estate management systems, virtual tour integrations, agent CRMs, and multi-tenant SaaS solutions for agencies and property developers.', projects: '9+ projects' },
  { icon: '🏗️', name: 'Construction', color: '#4A6CF7', challenge: 'Project management, resource allocation, site documentation', solution: 'Construction project management platforms, BIM integrations, resource allocation tools, mobile field apps, and compliance tracking systems for large construction firms.', projects: '7+ projects' },
  { icon: '📡', name: 'Telecommunications', color: '#00CFFD', challenge: 'Customer management, network monitoring, billing systems', solution: 'BSS/OSS modernization, customer self-service portals, network operations centers, billing automation, and analytics platforms for telecom operators.', projects: '6+ projects' },
  { icon: '🧵', name: 'Textile Industry', color: '#7B5EFF', challenge: 'Production tracking, quality control, buyer management', solution: 'Industry-specific ERP systems covering spinning, weaving, dyeing, finishing, costing, quality management, buyer portals, and export documentation for textile groups.', projects: '10+ projects' },
  { icon: '🏛️', name: 'Government & Public Sector', color: '#4A6CF7', challenge: 'Citizen services, compliance, data security', solution: 'E-government platforms, citizen service portals, case management systems, and public data management tools built with the highest security and accessibility standards.', projects: '5+ projects' },
  { icon: '⚕️', name: 'Pharmaceuticals', color: '#00CFFD', challenge: 'Drug tracking, clinical trials, regulatory submissions', solution: 'Pharmaceutical track-and-trace systems, clinical trial management platforms, regulatory submission tools, and supply chain visibility solutions for pharma companies.', projects: '6+ projects' },
  { icon: '🌾', name: 'Agriculture & Food', color: '#7B5EFF', challenge: 'Crop management, supply traceability, distribution', solution: 'Precision agriculture platforms, farm management systems, food safety traceability solutions, and agricultural supply chain management tools.', projects: '4+ projects' },
  { icon: '💼', name: 'Professional Services', color: '#4A6CF7', challenge: 'Project billing, client management, resource utilization', solution: 'Professional services automation platforms, project management systems, time-tracking and billing tools, and client portal solutions for consulting, legal, and accounting firms.', projects: '8+ projects' },
]

export default function Industries() {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
      {/* Hero */}
      <section className="page-hero industries-hero" aria-label="Industries hero">
        <div className="container page-hero-content">
          <div className="industries-hero-grid">
            <AnimatedSection>
              <div className="section-label">Industries We Serve</div>
              <h1 className="display-lg" style={{ marginBottom: '1.5rem', maxWidth: '700px' }}>
                Sector-Specific Technology for <span className="text-grad">Every Industry</span>
              </h1>
              <p className="body-lg text-muted" style={{ maxWidth: '560px', marginBottom: '2rem' }}>
                We don't just build generic software. We bring deep domain knowledge to every engagement — understanding your industry's specific challenges, compliance requirements, and competitive dynamics.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn btn-primary">Discuss Your Industry <ArrowRight size={16} /></Link>
                <Link to="/projects" className="btn btn-secondary">View Industry Projects</Link>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="reveal-right" className="industries-hero-img-wrap">
              <img 
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80" 
                alt="Modern enterprise business technology" 
                className="industries-hero-img"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="ind-stats" aria-label="Industry stats">
        <div className="container">
          <div className="ind-stats-grid stagger">
            {[{ val: '15+', label: 'Industries Served' }, { val: '150+', label: 'Projects Delivered' }, { val: '80+', label: 'Enterprise Clients' }, { val: '7+', label: 'Years Experience' }].map((s, i) => (
              <AnimatedSection key={s.label} delay={i * 80} className="ind-stat-item">
                <div className="stat-number">{s.val}</div>
                <div className="stat-label">{s.label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section" aria-label="Industry list">
        <div className="container">
          <AnimatedSection className="section-header">
            <div className="section-label">Our Domain Coverage</div>
            <h2 className="section-title">Industries Where We <span className="text-grad">Excel</span></h2>
            <p className="section-subtitle">Deep expertise across 15+ verticals means we speak your industry's language from day one.</p>
          </AnimatedSection>
          <div className="industries-grid stagger">
            {industries.map((ind, i) => (
              <AnimatedSection key={ind.name} delay={i * 40} className="industry-card card">
                <div className="industry-icon" style={{ background: `${ind.color}15`, border: `1px solid ${ind.color}30` }}>
                  {ind.icon}
                </div>
                <div className="industry-meta">
                  <div className="badge" style={{ background: `${ind.color}18`, color: ind.color, border: `1px solid ${ind.color}25`, marginBottom: '0.5rem' }}>
                    {ind.projects}
                  </div>
                  <h3 className="heading-md" style={{ marginBottom: '0.5rem', color: ind.color }}>{ind.name}</h3>
                </div>
                <div className="industry-hover-content">
                  <div className="ind-challenge">
                    <span className="label" style={{ color: ind.color }}>Key Challenges</span>
                    <p className="body-sm text-muted" style={{ marginTop: '0.25rem' }}>{ind.challenge}</p>
                  </div>
                  <div className="ind-solution">
                    <span className="label" style={{ color: ind.color }}>Our Solutions</span>
                    <p className="body-sm text-muted" style={{ marginTop: '0.25rem' }}>{ind.solution}</p>
                  </div>
                  <Link to="/contact" className="btn btn-ghost" style={{ color: ind.color, marginTop: '1rem' }}>
                    Explore Solutions <ArrowRight size={14} />
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-sm" aria-label="Industries CTA">
        <div className="container" style={{ textAlign: 'center' }}>
          <AnimatedSection animation="reveal-scale">
            <h2 className="section-title" style={{ marginBottom: '1rem' }}>Don't see your industry?</h2>
            <p className="body-lg text-muted" style={{ marginBottom: '2rem' }}>We've solved unique technology challenges across many sectors. Let's talk about yours.</p>
            <Link to="/contact" className="btn btn-primary btn-lg">Start the Conversation <ArrowRight size={18} /></Link>
          </AnimatedSection>
        </div>
      </section>
    </motion.main>
  )
}
