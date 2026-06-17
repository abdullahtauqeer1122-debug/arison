import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, ArrowRight, CheckCircle2, ChevronDown } from 'lucide-react'
import AnimatedSection from '../components/common/AnimatedSection'
import './Contact.css'

const faqs = [
  { q: 'How quickly do you respond to project inquiries?', a: 'We respond to all project inquiries within 24 business hours. For urgent requests, feel free to call us directly.' },
  { q: 'What is your typical project engagement model?', a: 'We offer three engagement models: fixed-price projects (ideal for well-defined scopes), time-and-material (ideal for evolving requirements), and dedicated team arrangements for long-term partnerships.' },
  { q: 'Do you work with startups or only enterprise clients?', a: 'We work with organizations of all sizes — from well-funded startups building their first product to Fortune-equivalent enterprises modernizing complex systems. What we require is a genuine commitment to quality.' },
  { q: 'What is your minimum project size?', a: 'Our minimum engagement is typically $10,000 for well-scoped projects. However, we evaluate each inquiry on its merits. If your project is compelling and a good fit, we want to hear about it.' },
  { q: 'Do you provide post-launch support?', a: 'Every project includes 30 days of post-launch hypercare at no extra cost. Beyond that, we offer structured maintenance and support packages tailored to your organization\'s needs.' },
  { q: 'How do you handle IP ownership and confidentiality?', a: 'All code, designs, and intellectual property created for your project belongs entirely to you upon final payment. We sign NDAs at the start of every engagement and take confidentiality very seriously.' },
  { q: 'Can you work with our existing technology stack?', a: 'Absolutely. We assess your existing infrastructure before recommending any changes. Where possible, we build on what you have. Where migration is necessary, we plan it carefully to minimize disruption.' },
  { q: 'Do you offer technology consulting without full development?', a: 'Yes. We offer architecture reviews, technology strategy consulting, code audits, and team coaching as standalone engagements for organizations with in-house development capacity.' },
]

function FaqItem({ item, index }) {
  const [open, setOpen] = useState(false)
  return (
    <AnimatedSection delay={index * 50} className={`accordion-item${open ? ' open' : ''}`} tag="div">
      <button className="accordion-header" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span>{item.q}</span>
        <div className="accordion-icon"><ChevronDown size={14} /></div>
      </button>
      <div className="accordion-body">
        <div className="accordion-content">{item.a}</div>
      </div>
    </AnimatedSection>
  )
}

export default function Contact() {
  const [projectSent, setProjectSent] = useState(false)
  const [consultSent, setConsultSent] = useState(false)

  const handleProject = (e) => { e.preventDefault(); setProjectSent(true) }
  const handleConsult = (e) => { e.preventDefault(); setConsultSent(true) }

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
      {/* Hero */}
      <section className="page-hero contact-hero" aria-label="Contact hero">
        <div className="contact-hero-glow-1" />
        <div className="contact-hero-glow-2" />
        <div className="container page-hero-content">
          <AnimatedSection>
            <div className="section-label">Get In Touch</div>
            <h1 className="display-lg" style={{ marginBottom: '1.5rem', maxWidth: '650px' }}>
              Let's Build Something <span className="text-grad">Remarkable Together</span>
            </h1>
            <p className="body-lg text-muted" style={{ maxWidth: '540px' }}>
              Tell us about your project, your challenges, or your technology questions. A senior engineer will respond personally within 24 hours.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="contact-cards-section" aria-label="Contact information">
        <div className="container">
          <div className="contact-cards-grid stagger">
            <AnimatedSection delay={0} className="contact-card card">
              <div className="contact-card-icon">
                <Phone size={24} />
              </div>
              <h3 className="heading-md" style={{ marginBottom: '0.5rem' }}>Call Us</h3>
              <p className="body-sm text-muted" style={{ marginBottom: '1rem' }}>Speak directly with our team</p>
              <a href="tel:+923297333609" className="contact-link">+92 329 7333609</a>
              <a href="tel:+923004003075" className="contact-link">+92 300 4003075</a>
            </AnimatedSection>
            <AnimatedSection delay={100} className="contact-card card">
              <div className="contact-card-icon contact-card-icon-purple">
                <Mail size={24} />
              </div>
              <h3 className="heading-md" style={{ marginBottom: '0.5rem' }}>Email Us</h3>
              <p className="body-sm text-muted" style={{ marginBottom: '1rem' }}>We respond within 24 hours</p>
              <a href="mailto:arisonnextstacktechnologies@gmail.com" className="contact-link contact-link-sm">
                arisonnextstacktechnologies@gmail.com
              </a>
            </AnimatedSection>
            <AnimatedSection delay={200} className="contact-card card">
              <div className="contact-card-icon contact-card-icon-blue">
                <Clock size={24} />
              </div>
              <h3 className="heading-md" style={{ marginBottom: '0.5rem' }}>Response Time</h3>
              <p className="body-sm text-muted" style={{ marginBottom: '1rem' }}>What to expect</p>
              <div className="response-times">
                <div className="response-item"><span className="body-sm">General Inquiries</span><span className="response-val">Within 24 hrs</span></div>
                <div className="response-item"><span className="body-sm">Project Proposals</span><span className="response-val">Within 48 hrs</span></div>
                <div className="response-item"><span className="body-sm">Support Requests</span><span className="response-val">Within 4 hrs</span></div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Forms Section */}
      <section className="section contact-forms-section" aria-label="Contact forms">
        <div className="container">
          <div className="forms-grid">
            {/* Business Inquiry Form */}
            <AnimatedSection animation="reveal-left" className="form-card card">
              <div className="form-card-header">
                <h2 className="heading-lg">Business Inquiry</h2>
                <p className="body-sm text-muted" style={{ marginTop: '0.375rem' }}>For general inquiries, partnerships, or questions</p>
              </div>
              {projectSent ? (
                <div className="form-success">
                  <CheckCircle2 size={36} color="var(--cyan)" />
                  <h3 className="heading-md">Message Received!</h3>
                  <p className="body-sm text-muted">Thank you for reaching out. We'll respond within 24 business hours.</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleProject}>
                  <div className="form-row-2">
                    <div className="form-group">
                      <label className="form-label">Full Name *</label>
                      <input className="form-input" placeholder="Your full name" required />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Company *</label>
                      <input className="form-input" placeholder="Company name" required />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email Address *</label>
                    <input className="form-input" type="email" placeholder="your@company.com" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone Number</label>
                    <input className="form-input" placeholder="+1 (555) 000-0000" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Subject *</label>
                    <input className="form-input" placeholder="Brief subject line" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Message *</label>
                    <textarea className="form-textarea" placeholder="Tell us how we can help..." required />
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                    Send Message <ArrowRight size={16} />
                  </button>
                </form>
              )}
            </AnimatedSection>

            {/* Project Consultation Form */}
            <AnimatedSection animation="reveal-right" className="form-card card">
              <div className="form-card-header">
                <h2 className="heading-lg">Project Consultation</h2>
                <p className="body-sm text-muted" style={{ marginTop: '0.375rem' }}>Tell us about your project for a detailed proposal</p>
              </div>
              {consultSent ? (
                <div className="form-success">
                  <CheckCircle2 size={36} color="var(--cyan)" />
                  <h3 className="heading-md">Request Received!</h3>
                  <p className="body-sm text-muted">A senior engineer will prepare a tailored proposal and reach out within 48 hours.</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleConsult}>
                  <div className="form-row-2">
                    <div className="form-group">
                      <label className="form-label">Full Name *</label>
                      <input className="form-input" placeholder="Your full name" required />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email *</label>
                      <input className="form-input" type="email" placeholder="your@company.com" required />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Project Type *</label>
                    <select className="form-select" required defaultValue="">
                      <option value="" disabled>Select project type</option>
                      <option>Custom Software Development</option>
                      <option>Web Application</option>
                      <option>Mobile Application</option>
                      <option>AI / ML Solution</option>
                      <option>Cloud Infrastructure</option>
                      <option>Digital Transformation</option>
                      <option>ERP / CRM System</option>
                      <option>UI/UX Design</option>
                      <option>IT Consulting</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Estimated Budget</label>
                    <select className="form-select" defaultValue="">
                      <option value="" disabled>Select budget range</option>
                      <option>Under $10,000</option>
                      <option>$10,000 – $25,000</option>
                      <option>$25,000 – $50,000</option>
                      <option>$50,000 – $100,000</option>
                      <option>$100,000 – $250,000</option>
                      <option>$250,000+</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Timeline</label>
                    <select className="form-select" defaultValue="">
                      <option value="" disabled>Select timeline</option>
                      <option>ASAP (within 1 month)</option>
                      <option>1–3 months</option>
                      <option>3–6 months</option>
                      <option>6–12 months</option>
                      <option>12+ months</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Project Description *</label>
                    <textarea className="form-textarea" placeholder="Describe your project — what problem are you solving, who are your users, and what success looks like..." required style={{ minHeight: '160px' }} />
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                    Request Consultation <ArrowRight size={16} />
                  </button>
                </form>
              )}
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section contact-faq" aria-label="Frequently asked questions">
        <div className="container">
          <AnimatedSection className="section-header">
            <div className="section-label">Quick Answers</div>
            <h2 className="section-title">Frequently Asked <span className="text-grad">Questions</span></h2>
            <p className="section-subtitle">Everything you need to know before starting a conversation with us.</p>
          </AnimatedSection>
          <div className="faq-list">
            {faqs.map((item, i) => <FaqItem key={item.q} item={item} index={i} />)}
          </div>
        </div>
      </section>
    </motion.main>
  )
}
