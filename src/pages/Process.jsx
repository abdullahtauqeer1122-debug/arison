import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import AnimatedSection from '../components/common/AnimatedSection'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import './Process.css'

const phases = [
  {
    num: '01',
    title: 'Discovery & Research',
    duration: '1–2 Weeks',
    color: '#00CFFD',
    desc: 'We invest significant time upfront to fully understand your business, goals, users, and technical environment. Shortcuts here create expensive problems later.',
    activities: ['Stakeholder interviews and workshops', 'Business requirements documentation', 'User research and persona development', 'Competitive landscape analysis', 'Technical environment assessment', 'Risk identification and mitigation planning'],
    output: 'Comprehensive Project Brief, Technical Feasibility Report, Preliminary Timeline',
  },
  {
    num: '02',
    title: 'Requirement Analysis',
    duration: '1 Week',
    color: '#4A6CF7',
    desc: 'Translating business needs into precise technical specifications. Every feature, integration, and system behavior is documented before a single line of code is written.',
    activities: ['Functional requirements specification', 'Non-functional requirements (performance, security)', 'Integration mapping and API contracts', 'Data model and flow documentation', 'Acceptance criteria definition', 'Change management protocol establishment'],
    output: 'Software Requirements Specification (SRS), API Contract Documentation, Data Flow Diagrams',
  },
  {
    num: '03',
    title: 'Strategic Planning',
    duration: '1 Week',
    color: '#7B5EFF',
    desc: 'Architecture decisions, technology selection, team assembly, sprint planning, and project governance setup. The blueprint for everything that follows.',
    activities: ['System architecture design', 'Technology stack selection with justification', 'Project team and role assignment', 'Sprint planning and milestone definition', 'Risk register and contingency planning', 'Communication and reporting structure setup'],
    output: 'Technical Architecture Document, Project Plan, Team Structure, Communication Framework',
  },
  {
    num: '04',
    title: 'UI/UX Design',
    duration: '2–3 Weeks',
    color: '#00CFFD',
    desc: 'User experience design is not decoration — it is a business function. We design systems that reduce friction, increase adoption, and deliver intuitive experiences.',
    activities: ['Information architecture and user flows', 'Low-fidelity wireframing', 'High-fidelity UI design', 'Interactive prototype creation', 'Design system and component library', 'Stakeholder review and iteration cycles'],
    output: 'Complete UI/UX Design Files, Interactive Prototype, Design System Documentation',
  },
  {
    num: '05',
    title: 'Agile Development',
    duration: 'Variable (2–16 Weeks)',
    color: '#4A6CF7',
    desc: 'Development in focused 2-week sprints with continuous client visibility. You see progress every step of the way, not just at the end.',
    activities: ['Sprint-based iterative development', 'Code review and pair programming protocols', 'Daily standup and weekly client updates', 'Continuous integration and automated testing', 'Security code scanning at each commit', 'Progress demos at end of each sprint'],
    output: 'Functional Software Increments, Sprint Reports, Test Coverage Reports',
  },
  {
    num: '06',
    title: 'Quality Assurance',
    duration: '2–3 Weeks',
    color: '#7B5EFF',
    desc: 'Rigorous multi-layer testing ensuring the software performs reliably under real-world conditions before it ever reaches your users.',
    activities: ['Unit and integration test coverage', 'End-to-end automated testing', 'Performance and load testing', 'Security penetration testing', 'Cross-browser and device compatibility testing', 'User acceptance testing (UAT) with stakeholders'],
    output: 'Test Reports, Performance Benchmarks, Security Assessment, UAT Sign-off',
  },
  {
    num: '07',
    title: 'Deployment',
    duration: '1–2 Weeks',
    color: '#00CFFD',
    desc: 'Carefully orchestrated production deployment with zero-downtime strategies, rollback plans, and thorough post-deployment verification.',
    activities: ['Production environment configuration', 'CI/CD pipeline setup and validation', 'Database migration execution', 'Zero-downtime deployment strategy', 'Post-deployment smoke testing', 'Performance monitoring setup'],
    output: 'Live Production System, Deployment Documentation, Monitoring Dashboards',
  },
  {
    num: '08',
    title: 'Training & Handover',
    duration: '1 Week',
    color: '#4A6CF7',
    desc: 'Comprehensive knowledge transfer ensuring your team can confidently operate, manage, and build upon the delivered system.',
    activities: ['Administrator training sessions', 'End-user training and documentation', 'Technical handover and codebase walkthrough', 'Operations runbook creation', 'Credential and access management handover', 'Initial hypercare support period'],
    output: 'Training Materials, User Documentation, Technical Documentation, Runbooks',
  },
  {
    num: '09',
    title: 'Optimization',
    duration: 'Ongoing',
    color: '#7B5EFF',
    desc: 'Post-launch data drives targeted improvements. We analyze real usage patterns and optimize for performance, conversion, and user satisfaction.',
    activities: ['Real user behavior analysis', 'Performance profiling and optimization', 'Database query optimization', 'Infrastructure cost optimization', 'UX improvement based on analytics', 'A/B testing and feature refinement'],
    output: 'Performance Reports, Optimization Roadmap, Monthly Analytics Summaries',
  },
  {
    num: '10',
    title: 'Support & Maintenance',
    duration: 'Ongoing',
    color: '#00CFFD',
    desc: 'Long-term partnership with proactive maintenance, security updates, and dedicated support ensuring your system performs at its best indefinitely.',
    activities: ['24/7 system monitoring and alerting', 'Security patch management', 'Bug fixes and hotfixes within SLA', 'Feature enhancements and iterations', 'Monthly performance and health reviews', 'Dedicated account management'],
    output: 'Monthly Health Reports, SLA Compliance Reports, Enhancement Releases',
  },
]

function PhaseItem({ phase, index, isActive, onClick }) {
  return (
    <AnimatedSection delay={index * 60} className={`phase-item${isActive ? ' active' : ''}`} tag="div" onClick={onClick}>
      <div className="phase-left">
        <div className="phase-num" style={{ color: phase.color }}>{phase.num}</div>
        <div className="phase-connector" />
      </div>
      <div className="phase-content">
        <div className="phase-header">
          <div>
            <h3 className="heading-md">{phase.title}</h3>
            <div className="badge badge-cyan" style={{ marginTop: '0.375rem' }}>{phase.duration}</div>
          </div>
          <div className="phase-expand-icon" style={{ borderColor: isActive ? phase.color : undefined }}>
            <ArrowRight size={14} style={{ transform: isActive ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.3s', color: isActive ? phase.color : undefined }} />
          </div>
        </div>
        {isActive && (
          <motion.div className="phase-detail" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} transition={{ duration: 0.35 }}>
            <p className="body-md text-muted" style={{ margin: '1rem 0' }}>{phase.desc}</p>
            <div className="phase-detail-grid">
              <div>
                <h4 className="label" style={{ color: phase.color, marginBottom: '0.75rem' }}>Activities</h4>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {phase.activities.map(a => (
                    <li key={a} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                      <CheckCircle2 size={14} style={{ color: phase.color, flexShrink: 0, marginTop: '2px' }} />
                      <span className="body-sm text-muted">{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="label" style={{ color: phase.color, marginBottom: '0.75rem' }}>Deliverables</h4>
                <p className="body-sm text-muted">{phase.output}</p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </AnimatedSection>
  )
}

export default function Process() {
  const [activePhase, setActivePhase] = useState(0)

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
      {/* Hero */}
      <section className="page-hero process-hero" aria-label="Process hero">
        <div className="process-hero-glow" />
        <div className="container page-hero-content">
          <AnimatedSection>
            <div className="section-label">How We Work</div>
            <h1 className="display-lg" style={{ marginBottom: '1.5rem', maxWidth: '700px' }}>
              A Proven Process for <span className="text-grad">Flawless Delivery</span>
            </h1>
            <p className="body-lg text-muted" style={{ maxWidth: '580px' }}>
              Ten carefully engineered phases that take your project from idea to high-performing production system — with full transparency and collaboration at every step.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="section process-timeline" aria-label="Process phases">
        <div className="container">
          <AnimatedSection className="section-header">
            <div className="section-label">Our Methodology</div>
            <h2 className="section-title">10-Phase <span className="text-grad">Delivery Framework</span></h2>
            <p className="section-subtitle">Click any phase to explore the activities, timing, and deliverables in detail.</p>
          </AnimatedSection>

          <div className="phases-list">
            {phases.map((phase, i) => (
              <PhaseItem
                key={phase.num}
                phase={phase}
                index={i}
                isActive={activePhase === i}
                onClick={() => setActivePhase(activePhase === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="section process-guarantees" aria-label="Process guarantees">
        <div className="container">
          <AnimatedSection className="section-header">
            <div className="section-label">Our Commitments</div>
            <h2 className="section-title">What We <span className="text-grad">Guarantee</span></h2>
          </AnimatedSection>
          <div className="guarantees-grid stagger">
            {[
              { title: 'On-Time Delivery', icon: '⏱️', desc: '97% of our projects are delivered on or before the agreed deadline. Our planning process makes this possible.' },
              { title: 'Full Transparency', icon: '🔍', desc: 'Weekly written updates, sprint demos, and direct access to your development team. No black boxes.' },
              { title: 'Defined Scope Control', icon: '📋', desc: 'Change management process that prevents scope creep from derailing your timeline and budget.' },
              { title: 'Code Quality Standards', icon: '✅', desc: 'Every codebase passes automated quality gates, security scanning, and peer review before delivery.' },
              { title: 'Post-Launch Support', icon: '🛡️', desc: '30-day hypercare period after every launch at no extra cost. We don\'t disappear after go-live.' },
              { title: 'Knowledge Transfer', icon: '📚', desc: 'Complete documentation and training ensuring your team is fully capable of operating the system independently.' },
            ].map((g, i) => (
              <AnimatedSection key={g.title} delay={i * 80} className="guarantee-card card">
                <div className="guarantee-icon">{g.icon}</div>
                <h3 className="heading-md" style={{ marginBottom: '0.5rem' }}>{g.title}</h3>
                <p className="body-sm text-muted">{g.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm" aria-label="Process CTA">
        <div className="container" style={{ textAlign: 'center' }}>
          <AnimatedSection animation="reveal-scale">
            <h2 className="section-title" style={{ marginBottom: '1rem' }}>Ready to Start? <span className="text-grad">Let's Begin Phase 01.</span></h2>
            <Link to="/contact" className="btn btn-primary btn-lg">Begin the Discovery Process <ArrowRight size={18} /></Link>
          </AnimatedSection>
        </div>
      </section>
    </motion.main>
  )
}
