import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight, Zap, Shield, Globe, Cpu, Code2, Smartphone,
  Cloud, Brain, BarChart3, Users, Award, CheckCircle2, Star
} from 'lucide-react'
import AnimatedSection from '../components/common/AnimatedSection'
import ThreeBackground from '../components/common/ThreeBackground'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { useCounterAnimation } from '../hooks/useCounterAnimation'
import './Home.css'

/* ─── Animated Stat ─── */
function StatItem({ value, suffix = '', label, delay = 0 }) {
  const [ref, visible] = useIntersectionObserver({ threshold: 0.1 })
  const count = useCounterAnimation(value, 1800, visible)
  return (
    <div ref={ref} className="stat-item" style={{ transitionDelay: `${delay}ms` }}>
      <div className="stat-number">{visible ? count : 0}{suffix}</div>
      <div className="stat-label">{label}</div>
    </div>
  )
}

/* ─── Service Card ─── */
function ServiceCard({ icon: Icon, title, desc, delay }) {
  const cardRef = useRef(null)
  const handleMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 12
    cardRef.current.style.transform = `perspective(800px) rotateX(${-y}deg) rotateY(${x}deg) translateY(-4px)`
  }
  const handleLeave = () => {
    cardRef.current.style.transform = 'perspective(800px) rotateX(0) rotateY(0) translateY(0)'
  }
  return (
    <AnimatedSection delay={delay} className="service-card card" tag="div">
      <div ref={cardRef} className="service-card-inner" onMouseMove={handleMove} onMouseLeave={handleLeave}>
        <div className="icon-box icon-box-lg">
          <Icon size={28} />
        </div>
        <h3 className="heading-md" style={{ marginTop: '1.25rem', marginBottom: '0.75rem' }}>{title}</h3>
        <p className="body-sm text-muted">{desc}</p>
        <div className="service-card-arrow">
          <ArrowRight size={16} />
        </div>
      </div>
    </AnimatedSection>
  )
}

const services = [
  { icon: Code2, title: 'Custom Software', desc: 'Bespoke enterprise applications engineered to your exact specifications and business requirements.' },
  { icon: Globe, title: 'Web Development', desc: 'High-performance, scalable web platforms built with modern frameworks and best practices.' },
  { icon: Smartphone, title: 'Mobile Applications', desc: 'Native and cross-platform mobile apps delivering exceptional user experiences on every device.' },
  { icon: Brain, title: 'AI & Machine Learning', desc: 'Intelligent automation and predictive analytics solutions that transform how you operate.' },
  { icon: Cloud, title: 'Cloud Infrastructure', desc: 'Scalable, secure cloud architecture designed for enterprise reliability and performance.' },
  { icon: Shield, title: 'Cybersecurity', desc: 'Comprehensive security solutions protecting your business assets and customer data.' },
]

const clients = [
  'TechCorp Global', 'Nexaflow Systems', 'MedInsight', 'RetailEdge', 'FinanceCore',
  'BuildSmart', 'EduVision', 'LogiTrack', 'AgroNet', 'UrbanDev', 'DataPulse', 'ClearPath',
]

const whyUs = [
  { icon: Award, title: '24+ Years of Excellence', desc: 'Delivering enterprise-grade technology solutions globally since launching in Pakistan in 2002.' },
  { icon: Users, title: 'Dedicated Expert Teams', desc: 'Cross-functional teams of engineers, designers, and strategists fully committed to your success.' },
  { icon: Zap, title: 'Agile Delivery', desc: 'Rapid, iterative development cycles ensuring on-time delivery without compromising quality.' },
  { icon: BarChart3, title: 'Proven ROI', desc: 'Our solutions consistently deliver measurable business outcomes and strong returns on investment.' },
  { icon: Globe, title: 'Global Standards', desc: 'Development practices aligned with international quality frameworks and industry standards.' },
  { icon: CheckCircle2, title: '24/7 Support', desc: 'Round-the-clock technical support and maintenance ensuring your systems always run at peak performance.' },
]

const testimonials = [
  { name: 'Sarah M.', role: 'CTO, MedInsight', text: 'Arison NextStack transformed our healthcare platform from a slow legacy system into a blazing-fast, AI-powered solution. Exceptional expertise.', rating: 5 },
  { name: 'James O.', role: 'CEO, RetailEdge', text: 'The e-commerce platform they built handles over 50,000 daily transactions flawlessly. Their attention to scalability saved us millions.', rating: 5 },
  { name: 'Priya K.', role: 'VP Engineering, FinanceCore', text: 'World-class team. The ERP system they delivered exceeded every specification and was deployed two weeks ahead of schedule.', rating: 5 },
]

export default function Home() {
  const heroRef = useRef(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* ── HERO ── */}
      <section className="hero" ref={heroRef} aria-label="Hero">
        <div className="container hero-content">
          <div className="hero-badge">
            <span className="badge badge-cyan">
              <Zap size={10} />
              Enterprise Technology Solutions
            </span>
          </div>

          <h1 className="hero-headline display-xl">
            Building Technology<br />
            That Drives{' '}
            <span className="text-grad">Business Forward</span>
          </h1>

          <p className="hero-sub body-lg text-muted">
            Arison NextStack Technologies is a Pakistan-based software engineering powerhouse. Since our launch in 2002, we have engineered enterprise-grade software and SaaS solutions that help organizations innovate, scale, and automate operations globally.
          </p>

          <div className="hero-actions">
            <Link to="/contact" className="btn btn-primary btn-lg">
              Start Your Project <ArrowRight size={18} />
            </Link>
            <Link to="/services" className="btn btn-secondary btn-lg">
              Explore Services
            </Link>
          </div>

          <motion.div
            className="hero-trust"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <div className="trust-item">
              <CheckCircle2 size={14} className="trust-icon" />
              <span>ISO-ready processes</span>
            </div>
            <div className="trust-sep" />
            <div className="trust-item">
              <CheckCircle2 size={14} className="trust-icon" />
              <span>NDA-protected projects</span>
            </div>
            <div className="trust-sep" />
            <div className="trust-item">
              <CheckCircle2 size={14} className="trust-icon" />
              <span>On-time delivery guarantee</span>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="hero-scroll-hint" aria-hidden="true">
          <div className="scroll-hint-bar" />
          <span>Scroll to explore</span>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="stats-section section-sm" aria-label="Company statistics">
        <div className="container">
          <div className="stats-grid stagger">
            <StatItem value={150} suffix="+" label="Projects Delivered" delay={0} />
            <StatItem value={80} suffix="+" label="Enterprise Clients" delay={80} />
            <StatItem value={24} suffix="+" label="Years of Excellence" delay={160} />
            <StatItem value={50} suffix="+" label="Expert Professionals" delay={240} />
          </div>
        </div>
      </section>

      {/* ── CLIENT LOGOS ── */}
      <section className="logos-section" aria-label="Client logos">
        <div className="container">
          <AnimatedSection className="section-label" style={{ justifyContent: 'center', marginBottom: '2rem' }}>
            Trusted by Leading Organizations
          </AnimatedSection>
        </div>
        <div className="marquee-wrapper">
          <div className="marquee-track">
            {[...clients, ...clients].map((c, i) => (
              <div key={i} className="client-logo-item">{c}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="section" aria-label="Our services">
        <div className="container">
          <AnimatedSection className="section-header">
            <div className="section-label">What We Build</div>
            <h2 className="section-title">
              Enterprise Solutions for<br />
              <span className="text-grad">Every Digital Challenge</span>
            </h2>
            <p className="section-subtitle">
              From intelligent AI systems to mission-critical enterprise platforms — we engineer the technology that keeps your business ahead.
            </p>
          </AnimatedSection>

          <div className="services-grid stagger">
            {services.map((s, i) => (
              <ServiceCard key={s.title} {...s} delay={i * 80} />
            ))}
          </div>

          <AnimatedSection style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/services" className="btn btn-secondary btn-lg">
              View All Services <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="why-section section" aria-label="Why choose us">
        <div className="container">
          <div className="why-inner">
            <div className="why-left">
              <AnimatedSection animation="reveal-left">
                <div className="section-label">Why Arison NextStack</div>
                <h2 className="section-title" style={{ textAlign: 'left', maxWidth: '480px' }}>
                  The Partner Enterprises<br />
                  <span className="text-grad">Choose & Trust</span>
                </h2>
                <p className="body-lg text-muted" style={{ marginBottom: '2rem', maxWidth: '420px' }}>
                  We don't just write code — we engineer business outcomes. Every engagement begins with understanding your goals and ends with measurable results.
                </p>
                <Link to="/about" className="btn btn-primary" style={{ marginBottom: '2rem' }}>
                  Learn Our Story <ArrowRight size={16} />
                </Link>
                <img 
                  src="https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?auto=format&fit=crop&w=600&q=80" 
                  alt="Modern software team meeting" 
                  style={{ width: '100%', borderRadius: 'var(--radius-md)', display: 'block', boxShadow: 'var(--shadow-sm)' }}
                />
              </AnimatedSection>
            </div>
            <div className="why-right stagger">
              {whyUs.map((item, i) => (
                <AnimatedSection key={item.title} animation="reveal-right" delay={i * 80} className="why-item">
                  <div className="icon-box">
                    <item.icon size={22} />
                  </div>
                  <div>
                    <h3 className="heading-md" style={{ marginBottom: '0.35rem' }}>{item.title}</h3>
                    <p className="body-sm text-muted">{item.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS PREVIEW ── */}
      <section className="process-preview section-sm" aria-label="Our process">
        <div className="container">
          <AnimatedSection className="section-header">
            <div className="section-label">Our Methodology</div>
            <h2 className="section-title">Engineered for <span className="text-grad">Excellence</span></h2>
          </AnimatedSection>
          <div className="process-steps stagger">
            {['Discovery & Analysis', 'Strategic Planning', 'Design & Build', 'Deploy & Scale'].map((step, i) => (
              <AnimatedSection key={step} delay={i * 100} className="process-step">
                <div className="process-step-num">{String(i + 1).padStart(2, '0')}</div>
                <div className="process-step-name">{step}</div>
                {i < 3 && <div className="process-step-connector" aria-hidden="true" />}
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/process" className="btn btn-ghost">
              See Full Process <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="testi-section section" aria-label="Client testimonials">
        <div className="container">
          <AnimatedSection className="section-header">
            <div className="section-label">Client Stories</div>
            <h2 className="section-title">Results That <span className="text-grad">Speak Loudly</span></h2>
          </AnimatedSection>
          <div className="testi-grid stagger">
            {testimonials.map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 100} className="testi-card card-glass card">
                <div className="testi-stars">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={14} fill="#F59E0B" color="#F59E0B" />
                  ))}
                </div>
                <p className="testi-text">"{t.text}"</p>
                <div className="testi-author">
                  <div className="testi-avatar">{t.name[0]}</div>
                  <div>
                    <div className="testi-name">{t.name}</div>
                    <div className="testi-role">{t.role}</div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/testimonials" className="btn btn-secondary">
              Read All Stories <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ── PRICING SECTION ── */}
      <section className="pricing-section section" aria-label="Pricing Packages">
        <div className="container">
          <AnimatedSection className="section-header">
            <div className="section-label">Flexible Pricing</div>
            <h2 className="section-title">Transparent & <span className="text-grad">Affordable Rates</span></h2>
            <p className="section-subtitle">Premium web engineering solutions tailored for startups and businesses.</p>
          </AnimatedSection>

          <div className="pricing-grid stagger">
            {/* E-Commerce Card */}
            <AnimatedSection className="pricing-card card" delay={0}>
              <div className="pricing-card-header">
                <h3 className="pricing-title">E-Commerce Site</h3>
                <p className="body-sm text-muted">Complete professional online storefront solutions.</p>
                <div className="pricing-price">
                  10,000 <span>PKR</span>
                </div>
              </div>
              <ul className="pricing-features">
                <li className="pricing-feature-item">
                  <CheckCircle2 size={16} className="pricing-feature-icon" /> Full Inventory & Catalog System
                </li>
                <li className="pricing-feature-item">
                  <CheckCircle2 size={16} className="pricing-feature-icon" /> Payment Gateway Integration
                </li>
                <li className="pricing-feature-item">
                  <CheckCircle2 size={16} className="pricing-feature-icon" /> Order Tracking & Dashboard
                </li>
                <li className="pricing-feature-item">
                  <CheckCircle2 size={16} className="pricing-feature-icon" /> Fully Mobile Responsive Layout
                </li>
                <li className="pricing-feature-item">
                  <CheckCircle2 size={16} className="pricing-feature-icon" /> Basic SEO Optimization
                </li>
              </ul>
              <a 
                href="https://wa.me/923004003075?text=Hi! I am interested in building an E-Commerce Site starting at 10k PKR." 
                target="_blank" 
                rel="noreferrer" 
                className="btn btn-primary w-full"
                style={{ textAlign: 'center' }}
              >
                Choose E-Commerce
              </a>
            </AnimatedSection>

            {/* Full Stack Web App Card */}
            <AnimatedSection className="pricing-card card featured" delay={100}>
              <div className="pricing-badge-popular">Popular</div>
              <div className="pricing-card-header">
                <h3 className="pricing-title">Full Stack Web App</h3>
                <p className="body-sm text-muted">Bespoke customized web software & complex workflows.</p>
                <div className="pricing-price">
                  20,000 - 25,000 <span>PKR</span>
                </div>
              </div>
              <ul className="pricing-features">
                <li className="pricing-feature-item">
                  <CheckCircle2 size={16} className="pricing-feature-icon" /> React, Node.js, SQL/NoSQL Database
                </li>
                <li className="pricing-feature-item">
                  <CheckCircle2 size={16} className="pricing-feature-icon" /> Complex Admin Dashboard Control
                </li>
                <li className="pricing-feature-item">
                  <CheckCircle2 size={16} className="pricing-feature-icon" /> Custom API & Authentication (OAuth/JWT)
                </li>
                <li className="pricing-feature-item">
                  <CheckCircle2 size={16} className="pricing-feature-icon" /> High-Performance Animations & Transitions
                </li>
                <li className="pricing-feature-item">
                  <CheckCircle2 size={16} className="pricing-feature-icon" /> 1 Month Priority Support
                </li>
              </ul>
              <a 
                href="https://wa.me/923004003075?text=Hi! I am interested in building a Full Stack Web App starting at 20-25k PKR." 
                target="_blank" 
                rel="noreferrer" 
                className="btn btn-primary w-full"
                style={{ textAlign: 'center' }}
              >
                Choose Full Stack
              </a>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="cta-banner section-sm" aria-label="Call to action">
        <div className="container">
          <AnimatedSection animation="reveal-scale" className="cta-banner-inner">
            <div className="cta-banner-glow-1" />
            <div className="cta-banner-glow-2" />
            <div className="cta-banner-content">
              <div className="section-label" style={{ justifyContent: 'center' }}>Let's Build Together</div>
              <h2 className="section-title" style={{ marginBottom: '1rem' }}>
                Your Next Breakthrough<br />
                <span className="text-grad">Starts With a Conversation</span>
              </h2>
              <p className="body-lg text-muted" style={{ marginBottom: '2.5rem', maxWidth: '520px', margin: '0 auto 2.5rem' }}>
                Tell us about your project. Within 24 hours, our team of senior engineers will respond with a tailored approach and clear path forward.
              </p>
              <div className="hero-actions">
                <Link to="/contact" className="btn btn-primary btn-lg">
                  Start Your Project <ArrowRight size={18} />
                </Link>
                <a href="https://wa.me/923004003075" target="_blank" rel="noreferrer" className="btn btn-secondary btn-lg">
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </motion.main>
  )
}
