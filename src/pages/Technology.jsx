import { useState } from 'react'
import { motion } from 'framer-motion'
import AnimatedSection from '../components/common/AnimatedSection'
import './Technology.css'

const techStack = {
  Frontend: [
    { name: 'React', level: 98, desc: 'Primary framework for complex, interactive enterprise web applications.' },
    { name: 'Next.js', level: 96, desc: 'Full-stack React framework for SSR, SSG, and high-performance platforms.' },
    { name: 'TypeScript', level: 95, desc: 'Type-safe JavaScript for enterprise-scale, maintainable codebases.' },
    { name: 'Vue.js', level: 88, desc: 'Progressive framework for lightweight, high-performance frontends.' },
    { name: 'React Native', level: 92, desc: 'Cross-platform mobile development from a single codebase.' },
    { name: 'Tailwind CSS', level: 97, desc: 'Utility-first CSS framework for rapid, consistent UI development.' },
    { name: 'Framer Motion', level: 90, desc: 'Production-ready animation library for React applications.' },
    { name: 'GraphQL', level: 88, desc: 'Flexible API query language for efficient data fetching.' },
  ],
  Backend: [
    { name: 'Node.js', level: 97, desc: 'JavaScript runtime for scalable, event-driven server architectures.' },
    { name: 'Python', level: 95, desc: 'Versatile language powering our AI, automation, and data engineering work.' },
    { name: 'Java Spring', level: 90, desc: 'Enterprise-grade Java framework for robust, secure backend systems.' },
    { name: '.NET Core', level: 88, desc: 'Microsoft ecosystem for Windows-integrated enterprise applications.' },
    { name: 'FastAPI', level: 93, desc: 'High-performance Python API framework for AI and data services.' },
    { name: 'Laravel', level: 92, desc: 'Elegant PHP framework for rapid API and web application development.' },
    { name: 'Django', level: 89, desc: 'Batteries-included Python framework for data-heavy web applications.' },
    { name: 'Go', level: 80, desc: 'High-performance language for microservices and concurrent systems.' },
  ],
  Database: [
    { name: 'PostgreSQL', level: 97, desc: 'Our primary relational database for complex, structured enterprise data.' },
    { name: 'MongoDB', level: 92, desc: 'Document database for flexible, schema-less data requirements.' },
    { name: 'MySQL', level: 94, desc: 'Reliable relational database for web applications and CMSs.' },
    { name: 'Redis', level: 95, desc: 'In-memory caching and session management for performance optimization.' },
    { name: 'Elasticsearch', level: 87, desc: 'Full-text search and log analytics at scale.' },
    { name: 'Oracle DB', level: 83, desc: 'Enterprise-class database for banking and ERP implementations.' },
    { name: 'Prisma ORM', level: 93, desc: 'Type-safe database client for modern TypeScript/JavaScript projects.' },
    { name: 'Apache Kafka', level: 85, desc: 'Distributed event streaming for real-time data pipelines.' },
  ],
  Cloud: [
    { name: 'AWS', level: 96, desc: 'Primary cloud platform — EC2, S3, RDS, Lambda, EKS, and 50+ services.' },
    { name: 'Azure', level: 90, desc: 'Microsoft cloud for enterprise, .NET, and AI cognitive services.' },
    { name: 'Google Cloud', level: 85, desc: 'GCP for AI/ML workloads, BigQuery analytics, and Kubernetes.' },
    { name: 'Kubernetes', level: 92, desc: 'Container orchestration for scalable, resilient microservices deployments.' },
    { name: 'Docker', level: 97, desc: 'Containerization standard for consistent development and production environments.' },
    { name: 'Terraform', level: 88, desc: 'Infrastructure as code for reproducible, version-controlled cloud environments.' },
    { name: 'Vercel', level: 95, desc: 'Edge deployment platform for Next.js and modern frontend applications.' },
    { name: 'Nginx', level: 92, desc: 'High-performance web server and reverse proxy for production deployments.' },
  ],
  'AI & ML': [
    { name: 'TensorFlow', level: 90, desc: 'Deep learning framework for production AI model training and serving.' },
    { name: 'PyTorch', level: 88, desc: 'Research-to-production deep learning, especially for NLP and vision tasks.' },
    { name: 'OpenAI API', level: 97, desc: 'GPT-4 and embedding models for intelligent text and language applications.' },
    { name: 'scikit-learn', level: 94, desc: 'Classical ML algorithms for prediction, classification, and analytics.' },
    { name: 'Hugging Face', level: 87, desc: 'Pre-trained NLP models for text classification, Q&A, and summarization.' },
    { name: 'LangChain', level: 89, desc: 'Framework for building LLM-powered applications and AI agents.' },
    { name: 'Pandas / NumPy', level: 96, desc: 'Data manipulation and numerical computing for ML pipelines.' },
    { name: 'MLflow', level: 83, desc: 'ML experiment tracking, model versioning, and deployment management.' },
  ],
  DevOps: [
    { name: 'GitHub Actions', level: 95, desc: 'CI/CD automation for testing, building, and deploying applications.' },
    { name: 'Jenkins', level: 87, desc: 'Enterprise CI/CD pipeline automation for complex deployment workflows.' },
    { name: 'GitLab CI', level: 88, desc: 'Integrated DevOps platform with built-in CI/CD pipelines.' },
    { name: 'Prometheus', level: 85, desc: 'Metrics collection and alerting for production system monitoring.' },
    { name: 'Grafana', level: 86, desc: 'Visualization platform for infrastructure and application metrics.' },
    { name: 'Ansible', level: 84, desc: 'IT automation for configuration management and application deployment.' },
    { name: 'SonarQube', level: 88, desc: 'Code quality and security scanning integrated into CI pipelines.' },
    { name: 'Datadog', level: 87, desc: 'Full-stack observability platform for production monitoring and APM.' },
  ],
}

const categories = Object.keys(techStack)

export default function Technology() {
  const [activeTab, setActiveTab] = useState('Frontend')

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
      {/* Hero */}
      <section className="page-hero tech-hero" aria-label="Technology hero">
        <div className="tech-hero-glow-1" />
        <div className="tech-hero-glow-2" />
        <div className="container page-hero-content">
          <AnimatedSection>
            <div className="section-label">Our Tech Ecosystem</div>
            <h1 className="display-lg" style={{ marginBottom: '1.5rem', maxWidth: '700px' }}>
              Enterprise-Grade <span className="text-grad">Technology Stack</span>
            </h1>
            <p className="body-lg text-muted" style={{ maxWidth: '560px' }}>
              We work with the world's most powerful and proven technologies — selecting the right tool for each specific challenge rather than forcing a one-size-fits-all approach.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Summary Stats */}
      <section className="tech-summary" aria-label="Technology summary">
        <div className="container">
          <div className="tech-stats-grid stagger">
            {[
              { val: '48+', label: 'Technologies Mastered' },
              { val: '6', label: 'Core Practice Areas' },
              { val: '7+', label: 'Years of Expertise' },
              { val: '150+', label: 'Projects Delivered' },
            ].map((s, i) => (
              <AnimatedSection key={s.label} delay={i * 80} className="tech-stat-item">
                <div className="stat-number">{s.val}</div>
                <div className="stat-label">{s.label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Explorer */}
      <section className="section tech-explorer" aria-label="Technology explorer">
        <div className="container">
          <AnimatedSection className="section-header">
            <div className="section-label">Stack Explorer</div>
            <h2 className="section-title">Explore Our <span className="text-grad">Technology Arsenal</span></h2>
            <p className="section-subtitle">Select a category to explore the technologies we use across every layer of the stack.</p>
          </AnimatedSection>

          {/* Category Tabs */}
          <AnimatedSection className="tech-tabs">
            {categories.map(cat => (
              <button key={cat} className={`tech-tab${activeTab === cat ? ' active' : ''}`} onClick={() => setActiveTab(cat)}>
                {cat}
              </button>
            ))}
          </AnimatedSection>

          {/* Tech Cards */}
          <motion.div
            key={activeTab}
            className="tech-grid stagger"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {techStack[activeTab].map((tech, i) => (
              <AnimatedSection key={tech.name} delay={i * 60} className="tech-card card">
                <div className="tech-card-header">
                  <div className="tech-name heading-md">{tech.name}</div>
                  <div className="tech-level">{tech.level}%</div>
                </div>
                <div className="progress-bar" style={{ marginBottom: '1rem' }}>
                  <div className="progress-fill" style={{ width: `${tech.level}%` }} />
                </div>
                <p className="body-sm text-muted">{tech.desc}</p>
              </AnimatedSection>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Modern Stack */}
      <section className="section tech-philosophy" aria-label="Technology philosophy">
        <div className="container">
          <div className="tech-phil-grid">
            <AnimatedSection animation="reveal-left">
              <div className="section-label">Our Approach</div>
              <h2 className="section-title" style={{ textAlign: 'left', maxWidth: '480px' }}>
                Tech Chosen for <span className="text-grad">Your Outcomes</span>, Not Ours
              </h2>
            </AnimatedSection>
            <AnimatedSection animation="reveal-right">
              <p className="body-lg text-muted" style={{ marginBottom: '1.5rem' }}>
                We are technology-agnostic in the best way — we know all the major platforms and frameworks deeply enough to choose the right one for your specific requirements, not the one that's easiest for us.
              </p>
              <p className="body-md text-muted" style={{ marginBottom: '1.5rem' }}>
                Every technology decision at Arison NextStack is driven by four criteria: performance for your use case, long-term maintainability, community and ecosystem maturity, and total cost of ownership for your organization.
              </p>
              <div className="tech-principles stagger">
                {['Performance-first selection', 'Long-term maintainability', 'Proven enterprise track record', 'Open source where possible', 'Security by design', 'Future-proof architecture'].map((p, i) => (
                  <AnimatedSection key={p} delay={i * 40} className="tech-principle">
                    <div className="tp-dot" />
                    <span className="body-sm">{p}</span>
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </motion.main>
  )
}
