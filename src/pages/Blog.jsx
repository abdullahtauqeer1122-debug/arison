import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Clock, Tag } from 'lucide-react'
import AnimatedSection from '../components/common/AnimatedSection'
import './Blog.css'

const categories = ['All', 'Artificial Intelligence', 'Software Engineering', 'Cloud Computing', 'Cybersecurity', 'Digital Transformation', 'Industry Insights', 'Case Studies']

const articles = [
  {
    id: 1, category: 'Artificial Intelligence', readTime: '8 min',
    title: 'How Large Language Models Are Reshaping Enterprise Software Development',
    excerpt: 'GPT-4 and its successors are not just productivity tools — they are fundamentally changing how enterprise applications are designed, built, and maintained. Here\'s what engineering leaders need to understand.',
    date: 'June 12, 2025', featured: true,
    tags: ['LLMs', 'AI', 'Enterprise'],
  },
  {
    id: 2, category: 'Digital Transformation', readTime: '6 min',
    title: 'The Real Reason 70% of Digital Transformation Projects Fail (And How to Beat the Odds)',
    excerpt: 'Most digital transformation failures aren\'t technology problems. They\'re change management problems. Here is the framework we use with every enterprise client to ensure adoption, not just deployment.',
    date: 'June 5, 2025', featured: false,
    tags: ['Transformation', 'Strategy'],
  },
  {
    id: 3, category: 'Cloud Computing', readTime: '10 min',
    title: 'Kubernetes vs. Serverless: Choosing the Right Architecture for Enterprise Workloads',
    excerpt: 'The container orchestration vs. serverless debate has real cost, performance, and operational implications. We break down exactly when to choose each approach based on your workload characteristics.',
    date: 'May 28, 2025', featured: false,
    tags: ['Kubernetes', 'Cloud', 'Architecture'],
  },
  {
    id: 4, category: 'Cybersecurity', readTime: '7 min',
    title: 'Zero Trust Architecture: The Enterprise Security Model You Can\'t Afford to Ignore',
    excerpt: 'Perimeter-based security is dead. Zero Trust is the architecture that protects modern distributed enterprises. Here\'s a practical implementation roadmap.',
    date: 'May 20, 2025', featured: false,
    tags: ['Security', 'Zero Trust', 'Enterprise'],
  },
  {
    id: 5, category: 'Software Engineering', readTime: '9 min',
    title: 'Microservices Are Not a Silver Bullet: When Monoliths Still Win',
    excerpt: 'The industry has overcorrected on microservices. For many enterprise use cases, a well-architected monolith delivers faster development, lower operational cost, and better reliability. Here\'s the honest analysis.',
    date: 'May 14, 2025', featured: false,
    tags: ['Architecture', 'Microservices', 'Engineering'],
  },
  {
    id: 6, category: 'Case Studies', readTime: '12 min',
    title: 'How We Reduced a Healthcare Platform\'s Patient Processing Time by 60%',
    excerpt: 'A detailed case study examining the technical and organizational decisions that transformed a 12-hospital network\'s patient management — from fragmented legacy systems to a unified AI-powered platform.',
    date: 'May 7, 2025', featured: false,
    tags: ['Healthcare', 'AI', 'Case Study'],
  },
  {
    id: 7, category: 'Industry Insights', readTime: '5 min',
    title: 'The 2025 State of Enterprise Software: Trends Shaping the Next Decade',
    excerpt: 'AI integration, platform consolidation, developer experience, and security-first design are the four forces reshaping enterprise software in 2025. What does this mean for your technology strategy?',
    date: 'April 30, 2025', featured: false,
    tags: ['Trends', 'Enterprise', 'Strategy'],
  },
  {
    id: 8, category: 'Artificial Intelligence', readTime: '11 min',
    title: 'Building Production-Ready AI Systems: The Engineering Reality Nobody Talks About',
    excerpt: 'Getting an AI model to work in a demo is easy. Getting it to work reliably in production at enterprise scale is brutally hard. Here\'s the full engineering roadmap, including the failures.',
    date: 'April 22, 2025', featured: false,
    tags: ['AI', 'MLOps', 'Production'],
  },
  {
    id: 9, category: 'Software Engineering', readTime: '6 min',
    title: 'API Design Principles That Your Future Developers Will Thank You For',
    excerpt: 'A well-designed API is a gift to every developer who works with it. A poorly designed one is a curse that echoes through years of maintenance. Here are the principles we apply to every API we build.',
    date: 'April 15, 2025', featured: false,
    tags: ['API', 'Design', 'Best Practices'],
  },
]

const colors = {
  'Artificial Intelligence': '#00CFFD',
  'Digital Transformation': '#7B5EFF',
  'Cloud Computing': '#4A6CF7',
  'Cybersecurity': '#F59E0B',
  'Software Engineering': '#00CFFD',
  'Case Studies': '#7B5EFF',
  'Industry Insights': '#4A6CF7',
}

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All')

  const featured = articles.find(a => a.featured)
  const filtered = (activeCategory === 'All' ? articles.filter(a => !a.featured) : articles.filter(a => a.category === activeCategory && !a.featured))

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
      {/* Hero */}
      <section className="page-hero blog-hero" aria-label="Blog hero">
        <div className="blog-hero-glow" />
        <div className="container page-hero-content">
          <AnimatedSection>
            <div className="section-label">Insights & Research</div>
            <h1 className="display-lg" style={{ marginBottom: '1.5rem', maxWidth: '700px' }}>
              Technology Intelligence for <span className="text-grad">Enterprise Leaders</span>
            </h1>
            <p className="body-lg text-muted" style={{ maxWidth: '560px' }}>
              Honest, in-depth analysis on enterprise software, AI, cloud architecture, and digital transformation from engineers who build these systems every day.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Article */}
      {featured && activeCategory === 'All' && (
        <section className="section blog-featured" aria-label="Featured article">
          <div className="container">
            <AnimatedSection animation="reveal-scale" className="featured-article card">
              <div className="featured-article-inner">
                <div className="featured-content">
                  <div className="featured-meta">
                    <span className="badge" style={{ background: `${colors[featured.category]}20`, color: colors[featured.category], border: `1px solid ${colors[featured.category]}30` }}>
                      {featured.category}
                    </span>
                    <span className="blog-meta-item"><Clock size={13} /> {featured.readTime} read</span>
                    <span className="blog-meta-item">{featured.date}</span>
                  </div>
                  <h2 className="display-md" style={{ marginBottom: '1rem', marginTop: '1rem' }}>{featured.title}</h2>
                  <p className="body-lg text-muted" style={{ marginBottom: '2rem' }}>{featured.excerpt}</p>
                  <div className="featured-tags">
                    {featured.tags.map(t => <span key={t} className="badge badge-purple">{t}</span>)}
                  </div>
                  <div style={{ marginTop: '2rem' }}>
                    <button className="btn btn-primary">Read Article <ArrowRight size={16} /></button>
                  </div>
                </div>
                <div className="featured-visual">
                  <div className="featured-visual-inner">
                    <div className="featured-icon-large">🤖</div>
                    <div className="featured-glow-orb" />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* Filter & Articles */}
      <section className="section blog-grid-section" aria-label="Blog articles">
        <div className="container">
          <div className="blog-filter-row">
            <h2 className="heading-lg">All Articles</h2>
            <div className="tabs">
              {categories.map(cat => (
                <button key={cat} className={`tab-btn${activeCategory === cat ? ' active' : ''}`} onClick={() => setActiveCategory(cat)}>
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="blog-articles-grid stagger">
            {filtered.map((article, i) => (
              <AnimatedSection key={article.id} delay={i * 60} className="article-card card">
                <div className="article-category-bar" style={{ background: colors[article.category] }} />
                <div className="article-body">
                  <div className="article-meta">
                    <span className="badge" style={{ background: `${colors[article.category]}18`, color: colors[article.category], border: `1px solid ${colors[article.category]}25` }}>
                      {article.category}
                    </span>
                    <span className="blog-meta-item"><Clock size={11} /> {article.readTime}</span>
                  </div>
                  <h3 className="heading-md" style={{ margin: '0.875rem 0 0.625rem' }}>{article.title}</h3>
                  <p className="body-sm text-muted" style={{ marginBottom: '1rem', flex: 1 }}>{article.excerpt}</p>
                  <div className="article-footer">
                    <span className="body-sm text-muted">{article.date}</span>
                    <button className="btn btn-ghost btn-sm">Read More <ArrowRight size={13} /></button>
                  </div>
                  <div className="article-tags">
                    {article.tags.map(t => <span key={t} className="badge badge-blue" style={{ fontSize: '0.7rem' }}>{t}</span>)}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-sm blog-newsletter" aria-label="Newsletter signup">
        <div className="container">
          <AnimatedSection animation="reveal-scale" className="newsletter-card card">
            <div className="newsletter-glow" />
            <div className="newsletter-content">
              <div className="section-label" style={{ justifyContent: 'center' }}>Stay Informed</div>
              <h2 className="section-title" style={{ marginBottom: '0.75rem' }}>
                Technology Intelligence, <span className="text-grad">Delivered Weekly</span>
              </h2>
              <p className="body-lg text-muted" style={{ marginBottom: '2rem' }}>
                Join 5,000+ enterprise technology leaders receiving our weekly insights on AI, software engineering, and digital transformation.
              </p>
              <form className="newsletter-signup-form" onSubmit={e => e.preventDefault()}>
                <input className="form-input newsletter-signup-input" type="email" placeholder="Your work email address" aria-label="Email" />
                <button type="submit" className="btn btn-primary">Subscribe <ArrowRight size={14} /></button>
              </form>
              <p className="body-sm text-muted" style={{ marginTop: '1rem', opacity: 0.6 }}>No spam. Unsubscribe anytime.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </motion.main>
  )
}
