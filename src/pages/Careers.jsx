import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Clock, DollarSign, CheckCircle2 } from 'lucide-react'
import AnimatedSection from '../components/common/AnimatedSection'
import './Careers.css'

const benefits = [
  { icon: '💰', title: 'Competitive Compensation', desc: 'Market-leading salaries benchmarked quarterly, with performance-based bonuses and equity options for senior roles.' },
  { icon: '🌍', title: 'Remote-First Culture', desc: 'Work from anywhere in the world. We judge on output and quality, not hours logged or desk presence.' },
  { icon: '📚', title: 'Learning Budget', desc: '$2,000 annual learning allowance for courses, conferences, books, and certifications of your choice.' },
  { icon: '🏥', title: 'Health & Wellness', desc: 'Comprehensive health insurance for you and your family, plus a monthly wellness allowance.' },
  { icon: '⏰', title: 'Flexible Hours', desc: 'Core collaboration hours with flexibility around them. You control your schedule, we care about results.' },
  { icon: '🚀', title: 'Career Growth', desc: 'Structured growth frameworks, mentorship from senior engineers, and a culture that rewards initiative.' },
  { icon: '🎯', title: 'Meaningful Work', desc: 'Every project has real business impact. You\'ll never wonder if your work matters — you\'ll see it daily.' },
  { icon: '🤝', title: 'Supportive Team', desc: 'Collaborative, ego-free engineering culture where knowledge sharing and mutual support are the norm.' },
]

const openRoles = [
  { title: 'Senior Full-Stack Engineer', dept: 'Engineering', type: 'Full-Time', location: 'Remote', level: 'Senior', skills: ['React', 'Node.js', 'PostgreSQL', 'AWS'], desc: 'Lead complex enterprise web application development from architecture to deployment, mentoring junior team members.' },
  { title: 'AI/ML Engineer', dept: 'AI Practice', type: 'Full-Time', location: 'Remote', level: 'Mid–Senior', skills: ['Python', 'TensorFlow', 'PyTorch', 'LangChain'], desc: 'Design and implement machine learning models and LLM-powered applications for enterprise clients across multiple industries.' },
  { title: 'React Native Developer', dept: 'Mobile', type: 'Full-Time', location: 'Remote', level: 'Mid-Level', skills: ['React Native', 'TypeScript', 'Firebase', 'REST APIs'], desc: 'Build cross-platform mobile applications that serve tens of thousands of daily active users with exceptional performance.' },
  { title: 'DevOps Engineer', dept: 'Infrastructure', type: 'Full-Time', location: 'Remote', level: 'Senior', skills: ['Kubernetes', 'AWS', 'Terraform', 'CI/CD'], desc: 'Architect and maintain cloud infrastructure for mission-critical enterprise systems with 99.9%+ uptime requirements.' },
  { title: 'UI/UX Designer', dept: 'Design', type: 'Full-Time', location: 'Remote', level: 'Mid–Senior', skills: ['Figma', 'Prototyping', 'Design Systems', 'User Research'], desc: 'Create world-class user experiences for complex enterprise applications, leading design from research through delivery.' },
  { title: 'Business Analyst', dept: 'Strategy', type: 'Full-Time', location: 'Remote / Hybrid', level: 'Mid-Level', skills: ['Requirements Analysis', 'Process Mapping', 'Documentation', 'Stakeholder Management'], desc: 'Bridge business requirements and technical delivery, working closely with clients and engineering teams throughout each project.' },
  { title: 'Backend Engineer (Python)', dept: 'Engineering', type: 'Full-Time', location: 'Remote', level: 'Mid-Level', skills: ['Python', 'FastAPI', 'PostgreSQL', 'Docker'], desc: 'Build robust, high-performance API services and backend systems powering enterprise platforms and AI solutions.' },
  { title: 'Project Manager', dept: 'Delivery', type: 'Full-Time', location: 'Remote', level: 'Senior', skills: ['Agile', 'Scrum', 'JIRA', 'Client Management'], desc: 'Orchestrate complex multi-team software delivery engagements, managing scope, timelines, client relationships, and risk.' },
]

const values = [
  'We hire for aptitude and attitude, not just résumé credentials',
  'Every voice matters in technical and strategic discussions',
  'We celebrate learning from failure as much as success',
  'Feedback flows freely in all directions, always constructively',
  'We promote from within whenever possible',
  'Burnout is taken seriously — sustainable pace is a priority',
]

export default function Careers() {
  const [selectedRole, setSelectedRole] = useState(null)
  const [applied, setApplied] = useState(false)
  const [roles, setRoles] = useState([])

  useEffect(() => {
    try {
      const stored = localStorage.getItem('arison_jobs')
      if (stored) {
        const parsed = JSON.parse(stored)
        if (parsed && parsed.length > 0) {
          setRoles(parsed)
        } else {
          // If empty array, fallback to default openRoles so it doesn't look blank
          setRoles(openRoles)
        }
      } else {
        setRoles(openRoles)
        localStorage.setItem('arison_jobs', JSON.stringify(openRoles))
      }
    } catch (e) {
      console.error("Failed to parse arison_jobs:", e)
      setRoles(openRoles)
    }
  }, [])

  const handleApply = (e) => {
    e.preventDefault()
    setApplied(true)
    setTimeout(() => { setApplied(false); setSelectedRole(null) }, 3000)
  }

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
      {/* Hero */}
      <section className="page-hero careers-hero" aria-label="Careers hero">
        <div className="container page-hero-content">
          <div className="careers-hero-grid">
            <AnimatedSection>
              <div className="section-label">Join Our Team</div>
              <h1 className="display-lg" style={{ marginBottom: '1.5rem', maxWidth: '700px' }}>
                Build the Future of <span className="text-grad">Enterprise Technology</span>
              </h1>
              <p className="body-lg text-muted" style={{ maxWidth: '580px', marginBottom: '2rem' }}>
                We're looking for engineers, designers, and strategists who are excellent at what they do and genuinely care about the impact their work creates.
              </p>
              <a href="#open-roles" className="btn btn-primary btn-lg">
                View Open Roles <ArrowRight size={18} />
              </a>
            </AnimatedSection>
            <AnimatedSection animation="reveal-right" className="careers-hero-img-wrap">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" 
                alt="Arison NextStack team collaborating" 
                className="careers-hero-img"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="section careers-culture" aria-label="Company culture">
        <div className="container">
          <div className="culture-grid">
            <AnimatedSection animation="reveal-left">
              <div className="section-label">Our Culture</div>
              <h2 className="section-title" style={{ textAlign: 'left', maxWidth: '440px' }}>
                A Place Where <span className="text-grad">Excellent People</span> Do Excellent Work
              </h2>
              <p className="body-lg text-muted" style={{ marginBottom: '1.5rem', maxWidth: '420px' }}>
                Arison NextStack is built on the belief that the best technology comes from people who are trusted, supported, and genuinely excited about the problems they're solving.
              </p>
              <p className="body-md text-muted" style={{ maxWidth: '420px' }}>
                We have no time for bureaucracy, ego, or performative busyness. We care about outcomes, quality, and the wellbeing of every team member.
              </p>
            </AnimatedSection>
            <AnimatedSection animation="reveal-right" className="culture-values-list stagger">
              {values.map((v, i) => (
                <AnimatedSection key={v} delay={i * 60} className="culture-value-item">
                  <CheckCircle2 size={16} className="culture-check" />
                  <span className="body-md">{v}</span>
                </AnimatedSection>
              ))}
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section careers-benefits" aria-label="Employee benefits">
        <div className="container">
          <AnimatedSection className="section-header">
            <div className="section-label">What We Offer</div>
            <h2 className="section-title">Benefits Built for <span className="text-grad">Real Life</span></h2>
            <p className="section-subtitle">We invest in our people because we understand that exceptional work requires exceptional support.</p>
          </AnimatedSection>
          <div className="benefits-grid stagger">
            {benefits.map((b, i) => (
              <AnimatedSection key={b.title} delay={i * 60} className="benefit-card card">
                <div className="benefit-icon">{b.icon}</div>
                <h3 className="heading-md" style={{ marginBottom: '0.5rem' }}>{b.title}</h3>
                <p className="body-sm text-muted">{b.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="section careers-roles" id="open-roles" aria-label="Open positions">
        <div className="container">
          <AnimatedSection className="section-header">
            <div className="section-label">Opportunities</div>
            <h2 className="section-title">Current <span className="text-grad">Vacancies</span></h2>
            {roles.length > 0 ? (
              <p className="section-subtitle">We are actively seeking talented individuals for the roles listed below. Apply today!</p>
            ) : (
              <p className="section-subtitle">We are not actively hiring or offering open roles at the moment. Check back in the future!</p>
            )}
          </AnimatedSection>
          
          {roles.length > 0 ? (
            <div className="roles-grid stagger" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '20px', marginTop: '2rem' }}>
              {roles.map((role, idx) => (
                <AnimatedSection key={role.id || idx} delay={idx * 60} className="role-card card" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span className="badge badge-purple">{role.dept}</span>
                    <span className="body-xs text-muted" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Clock size={12} /> {role.type}</span>
                  </div>
                  <h3 className="heading-md" style={{ margin: '0.5rem 0 0.25rem' }}>{role.title}</h3>
                  <p className="body-sm text-muted" style={{ flexGrow: 1, minHeight: '60px' }}>{role.desc}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '1rem' }}>
                    {role.skills && role.skills.map(s => <span key={s} className="badge badge-blue" style={{ fontSize: '0.7rem' }}>{s}</span>)}
                  </div>
                  <button className="btn btn-primary btn-sm" onClick={() => setSelectedRole(role)} style={{ alignSelf: 'flex-start' }}>Apply Now <ArrowRight size={12} /></button>
                </AnimatedSection>
              ))}
            </div>
          ) : (
            <div className="card" style={{ padding: '3rem', textAlign: 'center', background: 'var(--bg-card)', border: '1px solid var(--border)' }}>
              <h3 className="heading-lg" style={{ marginBottom: '1rem' }}>No Active Openings</h3>
              <p className="body-md text-secondary" style={{ maxWidth: '600px', margin: '0 auto 1.5rem' }}>
                We are not offering any active vacancies right now. However, you can submit your details and CV/portfolio directly to our database, and we will reach out if a matching position opens up.
              </p>
              <a href="mailto:arisonnextstacktechnologies@gmail.com" className="btn btn-primary" style={{ display: 'inline-flex', margin: '0 auto' }}>
                Submit CV to Talent Pool <ArrowRight size={16} />
              </a>
            </div>
          )}
        </div>
      </section>

      {/* General Application */}
      <section className="section-sm careers-general" aria-label="General application">
        <div className="container">
          <AnimatedSection animation="reveal-scale" className="general-cta card">
            <h2 className="heading-lg" style={{ marginBottom: '0.75rem' }}>Don't see the right role?</h2>
            <p className="body-md text-muted" style={{ marginBottom: '1.5rem' }}>
              If you're exceptional at what you do and believe in building technology that matters, we want to hear from you — even if we don't have a specific opening right now.
            </p>
            <a href="mailto:arisonnextstacktechnologies@gmail.com" className="btn btn-primary">
              Send a General Application <ArrowRight size={16} />
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* Application Modal */}
      {selectedRole && (
        <motion.div className="apply-modal-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedRole(null)}>
          <motion.div className="apply-modal card" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} onClick={e => e.stopPropagation()}>
            <h2 className="heading-lg" style={{ marginBottom: '0.25rem' }}>Apply: {selectedRole.title}</h2>
            <p className="body-sm text-muted" style={{ marginBottom: '1.5rem' }}>{selectedRole.dept} · {selectedRole.location}</p>
            {applied ? (
              <div className="apply-success">
                <CheckCircle2 size={32} color="var(--cyan)" />
                <h3 className="heading-md">Application Received!</h3>
                <p className="body-sm text-muted">We'll review your application and get back to you within 5 business days.</p>
              </div>
            ) : (
              <form className="apply-form" onSubmit={handleApply}>
                <div className="form-row">
                  <div className="form-group"><label className="form-label">Full Name *</label><input className="form-input" placeholder="John Smith" required /></div>
                  <div className="form-group"><label className="form-label">Email *</label><input className="form-input" type="email" placeholder="john@company.com" required /></div>
                </div>
                <div className="form-group"><label className="form-label">LinkedIn / Portfolio URL</label><input className="form-input" placeholder="https://linkedin.com/in/..." /></div>
                <div className="form-group"><label className="form-label">Why Arison NextStack? *</label><textarea className="form-textarea" placeholder="Tell us what excites you about this role and our company..." required /></div>
                <div className="apply-form-actions">
                  <button type="button" className="btn btn-secondary" onClick={() => setSelectedRole(null)}>Cancel</button>
                  <button type="submit" className="btn btn-primary">Submit Application <ArrowRight size={14} /></button>
                </div>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </motion.main>
  )
}
