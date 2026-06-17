import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight, Zap, Shield, Globe, Cpu, Code2, Smartphone,
  Cloud, Brain, BarChart3, Users, Award, CheckCircle2, Star
} from 'lucide-react'
import AnimatedSection from '../components/common/AnimatedSection'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { useCounterAnimation } from '../hooks/useCounterAnimation'
import './Home.css'

/* ─── Particle Canvas ─── */
function ParticleCanvas() {
  const canvasRef = useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let W = canvas.width = canvas.offsetWidth
    let H = canvas.height = canvas.offsetHeight
    let particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      r: Math.random() * 1.5 + 0.3,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      a: Math.random() * 0.5 + 0.1,
    }))
    let raf
    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      particles.forEach(p => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0, 207, 253, ${p.a})`
        ctx.fill()
        p.x += p.vx; p.y += p.vy
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0
      })
      raf = requestAnimationFrame(draw)
    }
    draw()
    const onResize = () => {
      W = canvas.width = canvas.offsetWidth
      H = canvas.height = canvas.offsetHeight
    }
    window.addEventListener('resize', onResize)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', onResize) }
  }, [])
  return <canvas ref={canvasRef} className="particles-canvas" />
}

/* ─── Animated Stat ─── */
function StatItem({ value, suffix = '', label, delay = 0 }) {
  const [ref, visible] = useIntersectionObserver({ threshold: 0.3 })
  const count = useCounterAnimation(value, 2200, visible)
  return (
    <div ref={ref} className="stat-item reveal" style={{ transitionDelay: `${delay}ms` }}>
      <div className="stat-number">{count}{suffix}</div>
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
  { icon: Award, title: '7+ Years of Excellence', desc: 'Over seven years delivering enterprise-grade technology solutions across global markets.' },
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
        <ParticleCanvas />
        <div
          className="hero-glow-1 glow-orb glow-orb-cyan"
          style={{ transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)` }}
        />
        <div
          className="hero-glow-2 glow-orb glow-orb-purple"
          style={{ transform: `translate(${-mousePos.x * 0.3}px, ${-mousePos.y * 0.3}px)` }}
        />

        <div className="container hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hero-badge"
          >
            <span className="badge badge-cyan">
              <Zap size={10} />
              Enterprise Technology Solutions
            </span>
          </motion.div>

          <motion.h1
            className="hero-headline display-xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
          >
            Building Technology<br />
            That Drives{' '}
            <span className="text-grad">Business Forward</span>
          </motion.h1>

          <motion.p
            className="hero-sub body-lg text-muted"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            Arison NextStack Technologies engineers enterprise-grade software solutions that help organizations innovate, scale, automate operations, and accelerate digital transformation — delivering measurable results at every stage.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
          >
            <Link to="/contact" className="btn btn-primary btn-lg">
              Start Your Project <ArrowRight size={18} />
            </Link>
            <Link to="/services" className="btn btn-secondary btn-lg">
              Explore Services
            </Link>
          </motion.div>

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
            <StatItem value={7} suffix="+" label="Years of Excellence" delay={160} />
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
                <Link to="/about" className="btn btn-primary">
                  Learn Our Story <ArrowRight size={16} />
                </Link>
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
                <a href="tel:+923297333609" className="btn btn-secondary btn-lg">
                  Call Us Now
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </motion.main>
  )
}
