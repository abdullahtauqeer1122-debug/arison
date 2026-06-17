import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ExternalLink, X } from 'lucide-react'
import AnimatedSection from '../components/common/AnimatedSection'
import './Projects.css'

const projects = [
  {
    id: 1,
    title: 'MedCore Healthcare Platform',
    category: 'Healthcare',
    tags: ['React', 'Node.js', 'PostgreSQL', 'AI'],
    summary: 'Comprehensive hospital management system with AI-powered diagnostics support',
    challenge: 'A network of 12 hospitals was running on disconnected legacy systems causing critical delays in patient care and billing errors costing $2M annually.',
    solution: 'We built a unified healthcare platform integrating patient records, appointment scheduling, billing, pharmacy, lab management, and an AI module for diagnostic pattern recognition.',
    results: ['60% reduction in administrative errors', '45% faster patient discharge processing', '$2.1M annual savings in operational costs', 'AI module achieving 91% diagnostic accuracy'],
    tech: ['React', 'Node.js', 'Python', 'PostgreSQL', 'TensorFlow', 'AWS', 'Docker'],
    color: '#00CFFD',
  },
  {
    id: 2,
    title: 'TradeFlow ERP System',
    category: 'Enterprise',
    tags: ['.NET', 'React', 'SQL Server', 'Azure'],
    summary: 'End-to-end ERP solution for a multinational textile manufacturer',
    challenge: 'A textile manufacturer operating across 5 countries had no unified system — finance, production, inventory, HR, and sales all operated in isolation with manual Excel-based reporting.',
    solution: 'We delivered a custom ERP encompassing financial management, production planning, inventory control, HR, and executive business intelligence dashboards with real-time data.',
    results: ['75% reduction in manual reporting time', '98% inventory accuracy achieved', 'Finance close cycle reduced from 15 days to 3 days', 'Executive decision-making speed improved by 50%'],
    tech: ['.NET Core', 'React', 'SQL Server', 'Azure', 'Power BI', 'Redis'],
    color: '#7B5EFF',
  },
  {
    id: 3,
    title: 'SentimentIQ — AI Analytics',
    category: 'AI',
    tags: ['Python', 'FastAPI', 'React', 'NLP'],
    summary: 'Real-time customer sentiment analysis platform for enterprise retail',
    challenge: 'A retail chain receiving 50,000+ customer interactions daily had no systematic way to identify emerging issues, sentiment trends, or customer satisfaction patterns.',
    solution: 'Built an NLP-powered analytics platform that ingests feedback from all channels, performs real-time sentiment analysis, clusters issues, and alerts management to emerging problems.',
    results: ['89% accuracy in sentiment classification', 'Critical issue detection time reduced from 72 hours to 15 minutes', '28% improvement in Net Promoter Score over 6 months', 'Processed 1M+ interactions in the first month'],
    tech: ['Python', 'FastAPI', 'OpenAI API', 'React', 'PostgreSQL', 'Celery', 'Redis'],
    color: '#4A6CF7',
  },
  {
    id: 4,
    title: 'RetailMax E-Commerce Platform',
    category: 'E-Commerce',
    tags: ['Next.js', 'Node.js', 'Stripe', 'AWS'],
    summary: 'High-performance headless commerce platform for a fashion brand',
    challenge: 'A growing fashion brand with 300,000+ SKUs was losing customers to slow page loads, poor mobile experience, and an outdated checkout causing 78% cart abandonment.',
    solution: 'Rebuilt the entire commerce stack with a Next.js headless frontend, custom inventory engine, AI-powered product recommendations, and an optimized 3-step checkout.',
    results: ['Page load reduced from 6.2s to 0.8s', 'Cart abandonment reduced from 78% to 34%', '120% revenue increase in first quarter post-launch', 'Mobile conversion rate improved by 85%'],
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis', 'AWS CloudFront', 'Elasticsearch'],
    color: '#00CFFD',
  },
  {
    id: 5,
    title: 'EduVision LMS Platform',
    category: 'Education',
    tags: ['React', 'Django', 'WebRTC', 'PostgreSQL'],
    summary: 'Enterprise learning management system for a university network',
    challenge: 'A consortium of 8 universities needed a unified online learning platform capable of serving 120,000 concurrent students with live classes, assessments, and academic tracking.',
    solution: 'Built a full-featured LMS with live video lectures (WebRTC), course management, automated grading, student analytics, parent portals, and faculty administration tools.',
    results: ['120,000+ concurrent users supported', '99.7% platform uptime during exam periods', '40% improvement in student completion rates', 'Faculty admin time reduced by 65%'],
    tech: ['React', 'Django', 'PostgreSQL', 'WebRTC', 'AWS', 'Redis', 'Celery'],
    color: '#7B5EFF',
  },
  {
    id: 6,
    title: 'LogiTrack Supply Chain',
    category: 'Logistics',
    tags: ['React Native', 'Node.js', 'MongoDB', 'IoT'],
    summary: 'Real-time supply chain visibility platform with IoT integration',
    challenge: 'A logistics company managing 500+ trucks and 10,000 daily deliveries had zero real-time visibility, leading to missed deliveries, fuel waste, and angry customers.',
    solution: 'Developed an end-to-end supply chain platform with real-time GPS tracking, IoT sensor integration, predictive ETA calculation, driver apps, and customer delivery notifications.',
    results: ['Real-time visibility across entire fleet achieved', 'On-time delivery improved from 67% to 94%', 'Fuel costs reduced by 22% through route optimization', 'Customer complaints down 71%'],
    tech: ['React Native', 'Node.js', 'MongoDB', 'Socket.io', 'AWS IoT', 'Google Maps API'],
    color: '#4A6CF7',
  },
  {
    id: 7,
    title: 'TextilePro Management Suite',
    category: 'Textile',
    tags: ['React', 'Laravel', 'MySQL', 'PWA'],
    summary: 'Complete business management platform for textile industry',
    challenge: 'A large textile group with spinning, weaving, and dyeing operations across 3 units had no integrated system — production, costing, quality, sales, and accounts all operated separately.',
    solution: 'Engineered an industry-specific management suite covering production planning, quality control, dyeing formulas, costing, buyer management, and financial reporting with offline-capable PWA.',
    results: ['Production efficiency improved by 35%', 'Quality defect rate reduced by 48%', 'Costing accuracy improved to 99.2%', 'Management reporting time cut from 3 days to 2 hours'],
    tech: ['React', 'Laravel', 'MySQL', 'PWA', 'Chart.js', 'Laravel Echo'],
    color: '#00CFFD',
  },
  {
    id: 8,
    title: 'FinanceCore Banking Platform',
    category: 'Finance',
    tags: ['Java', 'React', 'Oracle', 'Spring Boot'],
    summary: 'Core banking system modernization for a regional bank',
    challenge: 'A regional bank running 30-year-old COBOL-based core banking software was unable to offer digital services, losing customers to modern fintech competitors at an alarming rate.',
    solution: 'We led a phased core banking modernization, building a modern microservices API layer over the legacy system, then migrating functions one by one while maintaining zero downtime.',
    results: ['Digital banking platform launched in 8 months', 'Mobile banking app achieving 4.8 star rating', 'Transaction processing time reduced by 80%', 'Digital adoption reaching 60% of customers in Year 1'],
    tech: ['Java Spring Boot', 'React', 'Oracle DB', 'Kafka', 'Docker', 'Kubernetes'],
    color: '#7B5EFF',
  },
  {
    id: 9,
    title: 'PropTech Real Estate SaaS',
    category: 'SaaS',
    tags: ['Next.js', 'Prisma', 'Stripe', 'Maps'],
    summary: 'Multi-tenant SaaS platform for real estate agencies',
    challenge: 'Real estate agencies were each spending $5,000–$20,000 on custom websites with no lead management, no analytics, and disconnected listing management tools.',
    solution: 'Built a multi-tenant SaaS platform allowing agencies to launch branded portals, manage property listings, capture and nurture leads, track agent performance, and process payments.',
    results: ['147 agencies onboarded in first 6 months', 'Average agency lead conversion improved by 42%', 'Platform MRR reaching $85,000 by Month 8', 'Agency setup time reduced from months to 2 days'],
    tech: ['Next.js', 'Prisma', 'PostgreSQL', 'Stripe', 'Mapbox', 'SendGrid', 'Vercel'],
    color: '#4A6CF7',
  },
  {
    id: 10,
    title: 'AutomateHR Workforce Platform',
    category: 'Automation',
    tags: ['React', 'Python', 'PostgreSQL', 'AI'],
    summary: 'AI-powered HR automation and workforce analytics platform',
    challenge: 'A 3,000-employee organization was spending 800+ hours monthly on HR administration — payroll, leave management, recruitment, performance reviews, and compliance reporting.',
    solution: 'Built an AI-powered HRMS automating payroll processing, leave management, recruitment pipeline scoring, 360° performance reviews, and regulatory compliance reporting.',
    results: ['HR admin hours reduced from 800 to 120 per month', 'Payroll processing time reduced from 3 days to 4 hours', 'Recruitment time-to-hire reduced by 38%', 'Compliance reporting fully automated'],
    tech: ['React', 'Python', 'FastAPI', 'PostgreSQL', 'OpenAI API', 'Celery', 'AWS'],
    color: '#00CFFD',
  },
]

const categories = ['All', 'Healthcare', 'Enterprise', 'AI', 'E-Commerce', 'Education', 'Logistics', 'Textile', 'Finance', 'SaaS', 'Automation']

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)

  const filtered = activeCategory === 'All' ? projects : projects.filter(p => p.category === activeCategory)

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
      {/* Hero */}
      <section className="page-hero projects-hero" aria-label="Projects hero">
        <div className="projects-hero-glow" />
        <div className="container page-hero-content">
          <AnimatedSection>
            <div className="section-label">Our Portfolio</div>
            <h1 className="display-lg" style={{ marginBottom: '1.5rem', maxWidth: '700px' }}>
              Real Projects. Real Results. <span className="text-grad">Real Impact.</span>
            </h1>
            <p className="body-lg text-muted" style={{ maxWidth: '560px' }}>
              Every project in our portfolio represents a genuine business challenge transformed into a measurable competitive advantage. Browse our work.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filter */}
      <div className="projects-filter-bar">
        <div className="container">
          <div className="tabs">
            {categories.map(cat => (
              <button key={cat} className={`tab-btn${activeCategory === cat ? ' active' : ''}`} onClick={() => setActiveCategory(cat)}>
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <section className="section" aria-label="Project portfolio">
        <div className="container">
          <div className="projects-grid stagger">
            <AnimatePresence>
              {filtered.map((p, i) => (
                <AnimatedSection key={p.id} delay={i * 60} className="project-card card" tag="article">
                  <div className="project-card-top" style={{ background: `linear-gradient(135deg, ${p.color}18, ${p.color}08)` }}>
                    <div className="project-category-badge badge" style={{ background: `${p.color}20`, color: p.color, border: `1px solid ${p.color}30` }}>
                      {p.category}
                    </div>
                    <div className="project-tags">
                      {p.tags.map(t => <span key={t} className="badge badge-purple">{t}</span>)}
                    </div>
                  </div>
                  <div className="project-card-body">
                    <h3 className="heading-md" style={{ marginBottom: '0.5rem' }}>{p.title}</h3>
                    <p className="body-sm text-muted" style={{ marginBottom: '1.25rem' }}>{p.summary}</p>
                    <div className="project-results-preview">
                      <div className="project-result-item">
                        <div className="project-result-val" style={{ color: p.color }}>{p.results[0].split(' ')[0]}</div>
                        <div className="project-result-label">{p.results[0].replace(p.results[0].split(' ')[0] + ' ', '')}</div>
                      </div>
                    </div>
                    <button className="btn btn-ghost" onClick={() => setSelectedProject(p)} style={{ marginTop: '1rem' }}>
                      View Case Study <ArrowRight size={14} />
                    </button>
                  </div>
                </AnimatedSection>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div className="project-modal-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedProject(null)}>
            <motion.div className="project-modal" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 40 }} onClick={e => e.stopPropagation()}>
              <div className="modal-header" style={{ borderBottom: `2px solid ${selectedProject.color}` }}>
                <div>
                  <div className="badge" style={{ background: `${selectedProject.color}20`, color: selectedProject.color, border: `1px solid ${selectedProject.color}30`, marginBottom: '0.5rem' }}>{selectedProject.category}</div>
                  <h2 className="heading-lg">{selectedProject.title}</h2>
                </div>
                <button className="modal-close" onClick={() => setSelectedProject(null)} aria-label="Close"><X size={20} /></button>
              </div>
              <div className="modal-body">
                <div className="modal-section">
                  <h3 className="label text-cyan" style={{ marginBottom: '0.75rem' }}>Business Challenge</h3>
                  <p className="body-md text-muted">{selectedProject.challenge}</p>
                </div>
                <div className="modal-section">
                  <h3 className="label text-cyan" style={{ marginBottom: '0.75rem' }}>Solution Delivered</h3>
                  <p className="body-md text-muted">{selectedProject.solution}</p>
                </div>
                <div className="modal-section">
                  <h3 className="label text-cyan" style={{ marginBottom: '0.75rem' }}>Results Achieved</h3>
                  <div className="modal-results">
                    {selectedProject.results.map((r, i) => (
                      <div key={i} className="modal-result-item">
                        <CheckCircle size={14} />
                        <span className="body-sm">{r}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="modal-section">
                  <h3 className="label text-cyan" style={{ marginBottom: '0.75rem' }}>Technologies Used</h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {selectedProject.tech.map(t => <span key={t} className="badge badge-blue">{t}</span>)}
                  </div>
                </div>
                <Link to="/contact" className="btn btn-primary" onClick={() => setSelectedProject(null)} style={{ marginTop: '1rem' }}>
                  Build Something Similar <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.main>
  )
}

function CheckCircle({ size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#00CFFD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  )
}
