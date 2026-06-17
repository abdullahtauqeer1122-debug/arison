import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Target, Eye, Heart, Lightbulb, Shield, Users, Zap, Award, TrendingUp, Globe } from 'lucide-react'
import AnimatedSection from '../components/common/AnimatedSection'
import './About.css'

const values = [
  { icon: Lightbulb, title: 'Innovation First', desc: 'We constantly push the boundaries of what technology can do, embracing emerging technologies to deliver transformative solutions.' },
  { icon: Shield, title: 'Integrity Always', desc: 'Every client relationship is built on transparency, honesty, and an unwavering commitment to doing what is right.' },
  { icon: Users, title: 'Client Obsessed', desc: 'Your success is our metric. We don\'t celebrate launches — we celebrate the business outcomes those launches deliver.' },
  { icon: Award, title: 'Excellence Standard', desc: 'We hold ourselves to the highest engineering standards, delivering solutions that are robust, scalable, and future-ready.' },
  { icon: Zap, title: 'Agile Mindset', desc: 'Speed without sacrifice. Our agile processes ensure rapid delivery while maintaining enterprise-grade quality at every step.' },
  { icon: Globe, title: 'Global Perspective', desc: 'We build with a worldwide lens, creating solutions that scale across borders, languages, and markets.' },
]

const milestones = [
  { year: '2017', title: 'Founded', desc: 'Arison NextStack Technologies established with a team of 5 engineers, driven by a single mission: build technology that matters.' },
  { year: '2018', title: 'First Enterprise Client', desc: 'Delivered our first large-scale enterprise ERP system for a manufacturing firm, establishing our reputation for quality.' },
  { year: '2019', title: 'AI Division Launched', desc: 'Expanded into artificial intelligence and machine learning, building predictive analytics tools for healthcare and finance.' },
  { year: '2020', title: 'Remote-First Adoption', desc: 'Pioneered distributed delivery models, growing our team globally while maintaining seamless collaboration and quality.' },
  { year: '2021', title: '50+ Projects Milestone', desc: 'Crossed 50 successfully delivered projects across 8 industries — healthcare, finance, retail, education, and more.' },
  { year: '2022', title: 'Cloud Competency', desc: 'Achieved advanced cloud architecture expertise, delivering multi-cloud solutions for enterprise clients across three continents.' },
  { year: '2023', title: '100+ Clients', desc: 'Surpassed 100 enterprise clients globally, with a team of 40+ specialists across engineering, design, and strategy.' },
  { year: '2024', title: 'AI-First Strategy', desc: 'Launched our AI-first product strategy, integrating intelligent automation into every solution we deliver.' },
  { year: '2025+', title: 'The Next Chapter', desc: 'Expanding into new markets, launching proprietary SaaS products, and continuing to define the future of enterprise technology.' },
]

const stats = [
  { value: '150+', label: 'Projects Delivered' },
  { value: '80+', label: 'Enterprise Clients' },
  { value: '7+', label: 'Years of Excellence' },
  { value: '15+', label: 'Industries Served' },
]

export default function About() {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
      {/* Hero */}
      <section className="page-hero about-hero" aria-label="About us hero">
        <div className="about-hero-glow-1" />
        <div className="about-hero-glow-2" />
        <div className="container page-hero-content">
          <AnimatedSection>
            <div className="section-label">Who We Are</div>
            <h1 className="display-lg" style={{ marginBottom: '1.5rem', maxWidth: '700px' }}>
              Engineering the Future of <span className="text-grad">Enterprise Technology</span>
            </h1>
            <p className="body-lg text-muted" style={{ maxWidth: '600px', marginBottom: '2rem' }}>
              Arison NextStack Technologies is a forward-thinking software engineering company that partners with ambitious organizations to build transformative digital products — from AI-powered systems to mission-critical enterprise platforms.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary">Start a Conversation <ArrowRight size={16} /></Link>
              <Link to="/projects" className="btn btn-secondary">View Our Work</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="about-stats-band" aria-label="Company stats">
        <div className="container">
          <div className="about-stats-grid stagger">
            {stats.map((s, i) => (
              <AnimatedSection key={s.label} delay={i * 80} className="about-stat-item">
                <div className="stat-number">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section about-story" aria-label="Company story">
        <div className="container">
          <div className="story-grid">
            <AnimatedSection animation="reveal-left">
              <div className="section-label">Our Story</div>
              <h2 className="section-title" style={{ textAlign: 'left' }}>
                Built from Passion,<br /><span className="text-grad">Proven by Results</span>
              </h2>
            </AnimatedSection>
            <AnimatedSection animation="reveal-right">
              <p className="body-lg text-muted" style={{ marginBottom: '1.5rem' }}>
                Arison NextStack Technologies was founded in 2017 by a group of software engineers who believed that great technology shouldn't be the exclusive privilege of Fortune 500 companies. We set out to bring enterprise-grade software engineering to ambitious businesses of all sizes.
              </p>
              <p className="body-md text-muted" style={{ marginBottom: '1.5rem' }}>
                Over seven years, we've grown from a five-person startup to a full-spectrum technology consultancy serving clients across healthcare, finance, manufacturing, education, retail, and more. What hasn't changed is our relentless pursuit of engineering excellence.
              </p>
              <p className="body-md text-muted">
                Today, Arison NextStack Technologies stands as a trusted technology partner for organizations that demand the best — businesses that understand that the right software isn't a cost, it's a competitive advantage.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section mv-section" aria-label="Mission and vision">
        <div className="container">
          <div className="mv-grid stagger">
            <AnimatedSection delay={0} className="mv-card card">
              <div className="mv-icon">
                <Target size={28} />
              </div>
              <h2 className="heading-lg" style={{ marginBottom: '1rem' }}>Our Mission</h2>
              <p className="body-lg text-muted">
                To empower businesses with transformative technology solutions that drive measurable growth, operational excellence, and competitive advantage — delivered with integrity, precision, and partnership.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={120} className="mv-card card">
              <div className="mv-icon mv-icon-purple">
                <Eye size={28} />
              </div>
              <h2 className="heading-lg" style={{ marginBottom: '1rem' }}>Our Vision</h2>
              <p className="body-lg text-muted">
                To be the most trusted technology partner for enterprise organizations worldwide — recognized not just for the software we build, but for the business futures we help create.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={240} className="mv-card card">
              <div className="mv-icon mv-icon-blue">
                <Heart size={28} />
              </div>
              <h2 className="heading-lg" style={{ marginBottom: '1rem' }}>Our Philosophy</h2>
              <p className="body-lg text-muted">
                Technology is only as good as the human outcomes it enables. We engineer with empathy — understanding that every system we build ultimately serves real people with real needs.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section values-section" aria-label="Core values">
        <div className="container">
          <AnimatedSection className="section-header">
            <div className="section-label">What We Stand For</div>
            <h2 className="section-title">Our Core <span className="text-grad">Values</span></h2>
            <p className="section-subtitle">Six principles that guide every decision, every line of code, and every client relationship.</p>
          </AnimatedSection>
          <div className="values-grid stagger">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 80} className="value-card card">
                <div className="icon-box icon-box-lg" style={{ marginBottom: '1.25rem' }}>
                  <v.icon size={26} />
                </div>
                <h3 className="heading-md" style={{ marginBottom: '0.625rem' }}>{v.title}</h3>
                <p className="body-sm text-muted">{v.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section timeline-section" aria-label="Company timeline">
        <div className="container">
          <AnimatedSection className="section-header">
            <div className="section-label">Our Journey</div>
            <h2 className="section-title">The <span className="text-grad">Arison NextStack</span> Story</h2>
            <p className="section-subtitle">From a small startup to an enterprise technology leader — every milestone shaped who we are.</p>
          </AnimatedSection>
          <div className="timeline">
            {milestones.map((m, i) => (
              <AnimatedSection key={m.year} delay={i * 60} className={`timeline-item${i % 2 === 0 ? ' left' : ' right'}`}>
                <div className="timeline-dot" />
                <div className="timeline-card card">
                  <div className="timeline-year">{m.year}</div>
                  <h3 className="heading-md" style={{ margin: '0.5rem 0' }}>{m.title}</h3>
                  <p className="body-sm text-muted">{m.desc}</p>
                </div>
              </AnimatedSection>
            ))}
            <div className="timeline-line" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section leadership-section" aria-label="Leadership philosophy">
        <div className="container">
          <div className="leadership-inner">
            <AnimatedSection animation="reveal-left" className="leadership-text">
              <div className="section-label">Leadership Philosophy</div>
              <h2 className="section-title" style={{ textAlign: 'left' }}>
                Led by Engineers,<br /><span className="text-grad">Driven by Purpose</span>
              </h2>
              <p className="body-lg text-muted" style={{ marginBottom: '1.5rem' }}>
                Our leadership team is composed of engineers and technologists who have spent their careers in the trenches of software development. We don't manage from a distance — we understand the craft at the deepest level.
              </p>
              <p className="body-md text-muted" style={{ marginBottom: '2rem' }}>
                This engineering-first leadership philosophy means our clients benefit from decision-makers who grasp the technical realities, communicate honestly about complexity, and never overpromise.
              </p>
              <div className="leadership-points stagger">
                {['Engineering-led decision making', 'Radical transparency with clients', 'Continuous learning culture', 'Results-over-activity mindset'].map((pt, i) => (
                  <AnimatedSection key={pt} delay={i * 60} className="leadership-point">
                    <div className="lp-dot" />
                    <span className="body-sm">{pt}</span>
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection animation="reveal-right" className="leadership-visual">
              <div className="leadership-card card">
                <TrendingUp size={48} className="lc-icon" />
                <h3 className="heading-lg" style={{ marginBottom: '0.75rem' }}>
                  Growing <span className="text-grad">Every Year</span>
                </h3>
                <p className="body-md text-muted">
                  Year-over-year growth in client satisfaction, team expertise, and delivered business value — a track record built on genuine partnerships.
                </p>
                <div className="lc-metrics stagger">
                  {[
                    { label: 'Client Retention', val: '94%' },
                    { label: 'On-time Delivery', val: '97%' },
                    { label: 'Satisfaction Score', val: '4.9/5' },
                  ].map((m, i) => (
                    <AnimatedSection key={m.label} delay={i * 80} className="lc-metric">
                      <div className="lc-metric-val">{m.val}</div>
                      <div className="lc-metric-label">{m.label}</div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-sm" aria-label="About CTA">
        <div className="container" style={{ textAlign: 'center' }}>
          <AnimatedSection animation="reveal-scale">
            <div className="section-label" style={{ justifyContent: 'center' }}>Work With Us</div>
            <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>
              Ready to Build Something <span className="text-grad">Extraordinary?</span>
            </h2>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary btn-lg">Start a Project <ArrowRight size={18} /></Link>
              <Link to="/services" className="btn btn-secondary btn-lg">Explore Services</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </motion.main>
  )
}
