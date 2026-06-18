import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Code2, Globe, Smartphone, Brain, Cloud, ShoppingCart,
  Database, Cpu, Shield, BarChart3, ArrowRight, CheckCircle2, Layers
} from 'lucide-react'
import AnimatedSection from '../components/common/AnimatedSection'
import './Services.css'

const services = [
  {
    id: 'custom-software',
    icon: Code2,
    title: 'Custom Software Development',
    category: 'Engineering',
    tagline: 'Purpose-built solutions for unique business challenges',
    desc: 'We design and engineer bespoke software systems tailored precisely to your business workflows, integrations, and long-term strategic roadmap. From complex enterprise platforms to specialized internal tools, our custom software delivers measurable competitive advantages.',
    benefits: ['Tailored to exact business requirements', 'Built for scalability from day one', 'Full IP ownership for your organization', 'Continuous improvement roadmap included'],
    stack: ['React', 'Node.js', 'Python', 'PostgreSQL', 'Docker', 'AWS'],
    process: 'Requirements → Architecture → Agile Build → QA → Deploy → Maintain',
    outcomes: 'On average, clients report 40% operational efficiency gains within 6 months of deployment.',
    useCases: 'Enterprise workflow automation, proprietary business platforms, industry-specific management systems',
  },
  {
    id: 'enterprise-solutions',
    icon: Layers,
    title: 'Enterprise Software Solutions',
    category: 'Enterprise',
    tagline: 'Large-scale systems for complex organizations',
    desc: 'End-to-end enterprise platform development including ERP, CRM, HRMS, and custom business intelligence dashboards. We architect systems that serve thousands of users, integrate with legacy infrastructure, and grow alongside your organization.',
    benefits: ['Multi-department integration', 'Role-based access and security', 'Real-time analytics and reporting', 'Legacy system migration support'],
    stack: ['Java', '.NET', 'React', 'Oracle DB', 'SAP Integration', 'Azure'],
    process: 'Discovery → System Design → Phased Development → Integration → Training → Go-Live',
    outcomes: 'Enterprise clients average 60% reduction in manual processes and 35% improvement in decision-making speed.',
    useCases: 'Manufacturing ERP, financial management platforms, multi-branch retail systems',
  },
  {
    id: 'web-development',
    icon: Globe,
    title: 'Web Development',
    category: 'Digital',
    tagline: 'High-performance web platforms that convert',
    desc: 'From marketing websites to complex web applications, we craft digital experiences that are fast, accessible, and engineered for business results. We combine beautiful design with technical excellence to deliver platforms that your users love and your business relies on.',
    benefits: ['Sub-second page load times', 'SEO-optimized architecture', 'Accessibility (WCAG 2.1 AA)', 'CMS integration ready'],
    stack: ['Next.js', 'React', 'TypeScript', 'GraphQL', 'PostgreSQL', 'Vercel'],
    process: 'Strategy → UX Design → Frontend Development → Backend API → Testing → Launch',
    outcomes: 'Average 45% improvement in user engagement and 30% increase in conversion rates.',
    useCases: 'Corporate websites, SaaS dashboards, customer portals, content-heavy platforms',
  },
  {
    id: 'mobile-apps',
    icon: Smartphone,
    title: 'Mobile Application Development',
    category: 'Mobile',
    tagline: 'Native and cross-platform apps with exceptional UX',
    desc: 'We build mobile applications that users actually want to use. From iOS-first enterprise apps to cross-platform solutions serving millions, our mobile engineering team creates experiences that drive engagement, retention, and business outcomes.',
    benefits: ['iOS and Android native options', 'React Native cross-platform efficiency', 'Offline-first architecture', 'App Store optimization included'],
    stack: ['React Native', 'Swift', 'Kotlin', 'Firebase', 'Node.js', 'REST/GraphQL'],
    process: 'UX Research → Wireframes → UI Design → Development → Beta Testing → Launch',
    outcomes: 'Average app store rating of 4.7+ across our delivered mobile applications.',
    useCases: 'Field service apps, customer-facing mobile platforms, internal enterprise tools',
  },
  {
    id: 'ai-ml',
    icon: Brain,
    title: 'AI & Machine Learning Solutions',
    category: 'AI',
    tagline: 'Intelligent systems that transform operations',
    desc: 'We build AI-powered solutions that extract real business value from your data. From predictive analytics and NLP to computer vision and intelligent automation, our AI practice delivers practical artificial intelligence that solves genuine business problems.',
    benefits: ['Predictive analytics and forecasting', 'Natural language processing', 'Computer vision systems', 'AI-powered process automation'],
    stack: ['Python', 'TensorFlow', 'PyTorch', 'scikit-learn', 'OpenAI API', 'FastAPI'],
    process: 'Data Audit → Model Design → Training → Validation → Integration → Monitoring',
    outcomes: 'AI implementations have helped clients achieve up to 70% reduction in manual review tasks.',
    useCases: 'Demand forecasting, fraud detection, document processing, intelligent chatbots',
  },
  {
    id: 'cloud',
    icon: Cloud,
    title: 'Cloud Infrastructure Solutions',
    category: 'Cloud',
    tagline: 'Scalable, secure, and cost-optimized cloud architecture',
    desc: 'We design and implement cloud infrastructure that is built for enterprise-scale performance, reliability, and security. Whether migrating from legacy infrastructure or architecting cloud-native systems, we ensure your cloud investment delivers maximum value.',
    benefits: ['Multi-cloud and hybrid architecture', 'Auto-scaling for traffic spikes', 'SOC 2 compliant infrastructure', 'DevOps CI/CD pipelines'],
    stack: ['AWS', 'Azure', 'GCP', 'Kubernetes', 'Terraform', 'Docker'],
    process: 'Assessment → Architecture Design → Migration/Build → Optimization → Monitoring',
    outcomes: 'Average 45% infrastructure cost reduction while improving uptime to 99.95%.',
    useCases: 'Cloud migration, microservices architecture, high-availability systems',
  },
  {
    id: 'digital-transformation',
    icon: BarChart3,
    title: 'Digital Transformation',
    category: 'Strategy',
    tagline: 'End-to-end organizational technology evolution',
    desc: 'We guide organizations through complete digital transformation journeys — from legacy system modernization to AI integration and change management. Our holistic approach ensures technology adoption that sticks and delivers lasting competitive advantage.',
    benefits: ['Comprehensive technology audit', 'Phased transformation roadmap', 'Change management support', 'ROI measurement framework'],
    stack: ['Assessment Tools', 'Cloud Platforms', 'Integration APIs', 'Analytics', 'Automation'],
    process: 'Assess → Strategize → Pilot → Transform → Measure → Optimize',
    outcomes: 'Clients completing digital transformation programs achieve 50-80% productivity improvements.',
    useCases: 'Legacy modernization, process automation, culture and technology alignment',
  },
  {
    id: 'uiux',
    icon: Cpu,
    title: 'UI/UX Design',
    category: 'Design',
    tagline: 'Experiences users love, interfaces that convert',
    desc: 'Our design practice goes far beyond aesthetics. We conduct rigorous user research, create data-driven UX strategies, and craft visual design systems that communicate your brand\'s authority while creating frictionless user journeys.',
    benefits: ['User research and persona development', 'Interaction design and prototyping', 'Design system creation', 'Usability testing included'],
    stack: ['Figma', 'Adobe XD', 'Framer', 'Protopie', 'UserTesting', 'Hotjar'],
    process: 'Research → Information Architecture → Wireframes → Visual Design → Prototype → Test',
    outcomes: 'Design-led projects show average 55% improvement in user task completion rates.',
    useCases: 'Product redesigns, new product design, design system creation, usability improvements',
  },
  {
    id: 'ecommerce',
    icon: ShoppingCart,
    title: 'E-Commerce Development',
    category: 'Commerce',
    tagline: 'Revenue-generating commerce platforms',
    desc: 'We build e-commerce ecosystems engineered for performance, conversion, and scale. From custom storefronts to headless commerce platforms processing millions in GMV, our solutions are built to grow your revenue.',
    benefits: ['Conversion-optimized checkout flows', 'Multi-currency and multi-language', 'Inventory and order management', 'Payment gateway integration'],
    stack: ['Next.js', 'Shopify Plus', 'WooCommerce', 'Stripe', 'PostgreSQL', 'Redis'],
    process: 'Strategy → Design → Development → Payment Integration → Testing → Launch',
    outcomes: 'Commerce clients average 38% increase in conversion rate within 90 days of launch.',
    useCases: 'D2C brands, B2B wholesale platforms, marketplace development',
  },
  {
    id: 'database',
    icon: Database,
    title: 'ERP & CRM Solutions',
    category: 'Enterprise',
    tagline: 'Centralized operational command centers',
    desc: 'We implement and customize ERP and CRM solutions that unify your business operations, provide real-time intelligence, and eliminate information silos. Whether deploying established platforms or building custom systems, we ensure adoption and ROI.',
    benefits: ['Business process automation', 'Real-time operational dashboards', 'Third-party API integrations', 'Data migration and cleanup'],
    stack: ['Odoo', 'Salesforce', 'Microsoft Dynamics', 'Custom React', 'PostgreSQL', 'REST API'],
    process: 'Process Mapping → Platform Selection → Configuration → Data Migration → Training',
    outcomes: 'ERP implementations deliver average 45% reduction in data entry and 60% faster reporting.',
    useCases: 'Manufacturing ERP, sales CRM, HR management, supply chain management',
  },
  {
    id: 'cybersecurity',
    icon: Shield,
    title: 'Cybersecurity Solutions',
    category: 'Security',
    tagline: 'Protecting your business in a threat-filled world',
    desc: 'We provide comprehensive cybersecurity services — from penetration testing and security architecture reviews to ongoing monitoring and incident response. Our security-first approach ensures your systems, data, and reputation are protected.',
    benefits: ['Penetration testing and vulnerability assessment', 'Security architecture design', 'Compliance consulting (GDPR, HIPAA)', 'Ongoing security monitoring'],
    stack: ['OWASP', 'Burp Suite', 'Metasploit', 'AWS Security Hub', 'SIEM', 'Zero Trust'],
    process: 'Assessment → Risk Analysis → Security Design → Implementation → Audit → Monitor',
    outcomes: 'Organizations securing with us report 90% reduction in successful attack attempts.',
    useCases: 'Fintech security, healthcare HIPAA compliance, e-commerce fraud prevention',
  },
  {
    id: 'api',
    icon: Cpu,
    title: 'API Development & Integration',
    category: 'Engineering',
    tagline: 'Connected systems, seamless data flow',
    desc: 'We design and build robust APIs and system integration layers that connect your disparate systems, enable third-party partnerships, and create seamless data flows across your technology ecosystem.',
    benefits: ['RESTful and GraphQL API design', 'Third-party integration development', 'API documentation and testing', 'Webhook and event-driven architecture'],
    stack: ['Node.js', 'FastAPI', 'GraphQL', 'Swagger', 'Postman', 'Apache Kafka'],
    process: 'Integration Mapping → API Design → Development → Documentation → Testing → Monitor',
    outcomes: 'Integration projects eliminate average 6 hours of manual data reconciliation per day.',
    useCases: 'Microservices connectivity, payment integrations, data platform unification',
  },
]

const categories = ['All', 'Engineering', 'Enterprise', 'Digital', 'Mobile', 'AI', 'Cloud', 'Design', 'Commerce', 'Security', 'Strategy']

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [expanded, setExpanded] = useState(null)

  const filtered = activeCategory === 'All' ? services : services.filter(s => s.category === activeCategory)

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
      {/* Hero */}
      <section className="page-hero services-hero" aria-label="Services hero">
        <div className="container page-hero-content">
          <div className="services-hero-grid">
            <AnimatedSection>
              <div className="section-label">Our Services</div>
              <h1 className="display-lg" style={{ marginBottom: '1.5rem', maxWidth: '750px' }}>
                End-to-End Technology Solutions for <span className="text-grad">Enterprise Growth</span>
              </h1>
              <p className="body-lg text-muted" style={{ maxWidth: '580px', marginBottom: '2rem' }}>
                From custom software engineering to AI implementation and digital transformation — we deliver the full spectrum of technology services that forward-thinking organizations need.
              </p>
              <Link to="/contact" className="btn btn-primary btn-lg">
                Discuss Your Project <ArrowRight size={18} />
              </Link>
            </AnimatedSection>
            <AnimatedSection animation="reveal-right" className="services-hero-img-wrap">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80" 
                alt="Software development team collaborating" 
                className="services-hero-img"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="services-filter-bar" aria-label="Service categories">
        <div className="container">
          <div className="tabs">
            {categories.map(cat => (
              <button
                key={cat}
                className={`tab-btn${activeCategory === cat ? ' active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section" aria-label="Services list">
        <div className="container">
          <div className="services-list stagger">
            {filtered.map((svc, i) => (
              <AnimatedSection key={svc.id} delay={i * 60} className={`svc-item card${expanded === svc.id ? ' expanded' : ''}`}>
                <div className="svc-header" onClick={() => setExpanded(expanded === svc.id ? null : svc.id)}>
                  <div className="svc-header-left">
                    <div className="icon-box">
                      <svc.icon size={22} />
                    </div>
                    <div>
                      <div className="badge badge-cyan" style={{ marginBottom: '0.5rem' }}>{svc.category}</div>
                      <h2 className="heading-md">{svc.title}</h2>
                      <p className="body-sm text-muted" style={{ marginTop: '0.25rem' }}>{svc.tagline}</p>
                    </div>
                  </div>
                  <div className={`svc-expand-icon${expanded === svc.id ? ' open' : ''}`}>
                    <ArrowRight size={16} />
                  </div>
                </div>

                {expanded === svc.id && (
                  <motion.div
                    className="svc-body"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35 }}
                  >
                    <div className="svc-body-grid">
                      <div>
                        <p className="body-md text-muted" style={{ marginBottom: '1.5rem' }}>{svc.desc}</p>
                        <h4 className="label text-cyan" style={{ marginBottom: '0.75rem' }}>Key Benefits</h4>
                        <ul className="svc-benefits">
                          {svc.benefits.map(b => (
                            <li key={b} className="svc-benefit">
                              <CheckCircle2 size={14} className="benefit-icon" />
                              <span className="body-sm">{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="label text-cyan" style={{ marginBottom: '0.75rem' }}>Technology Stack</h4>
                        <div className="svc-stack">
                          {svc.stack.map(t => (
                            <span key={t} className="badge badge-purple">{t}</span>
                          ))}
                        </div>
                        <h4 className="label text-cyan" style={{ margin: '1.25rem 0 0.5rem' }}>Expected Outcomes</h4>
                        <p className="body-sm text-muted">{svc.outcomes}</p>
                        <h4 className="label text-cyan" style={{ margin: '1.25rem 0 0.5rem' }}>Use Cases</h4>
                        <p className="body-sm text-muted">{svc.useCases}</p>
                        <div style={{ marginTop: '1.5rem' }}>
                          <Link to="/contact" className="btn btn-primary btn-sm">
                            Start This Project <ArrowRight size={14} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-sm" aria-label="Services CTA">
        <div className="container" style={{ textAlign: 'center' }}>
          <AnimatedSection animation="reveal-scale">
            <h2 className="section-title" style={{ marginBottom: '1rem' }}>
              Not sure which service fits your needs?
            </h2>
            <p className="body-lg text-muted" style={{ marginBottom: '2rem' }}>
              Book a free 30-minute consultation with our senior engineers.
            </p>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Book Free Consultation <ArrowRight size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </motion.main>
  )
}
