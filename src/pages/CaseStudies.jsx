import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Check, BookOpen } from 'lucide-react'
import './CaseStudies.css'

const initialProjects = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80',
    title: 'MedCore Healthcare Platform',
    category: 'Healthcare',
    tags: ['React', 'Node.js', 'PostgreSQL', 'AI'],
    summary: 'Comprehensive hospital management system with AI-powered diagnostics support',
    challenge: 'A network of 12 hospitals was running on disconnected legacy systems causing critical delays in patient care and billing errors costing $2M annually.',
    solution: 'We built a unified healthcare platform integrating patient records, appointment scheduling, billing, pharmacy, lab management, and an AI module for diagnostic pattern recognition.',
    results: ['60% reduction in administrative errors', '45% faster patient discharge processing', '$2.1M annual savings in operational costs', 'AI module achieving 91% diagnostic accuracy'],
    tech: ['React', 'Node.js', 'Python', 'PostgreSQL', 'TensorFlow', 'AWS', 'Docker'],
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80',
    title: 'TradeFlow ERP System',
    category: 'Enterprise',
    tags: ['.NET', 'React', 'SQL Server', 'Azure'],
    summary: 'End-to-end ERP solution for a multinational textile manufacturer',
    challenge: 'A textile manufacturer operating across 5 countries had no unified system — finance, production, inventory, HR, and sales all operated in isolation with manual Excel-based reporting.',
    solution: 'We delivered a custom ERP encompassing financial management, production planning, inventory control, HR, and executive business intelligence dashboards with real-time data.',
    results: ['75% reduction in manual reporting time', '98% inventory accuracy achieved', 'Finance close cycle reduced from 15 days to 3 days', 'Executive decision-making speed improved by 50%'],
    tech: ['.NET Core', 'React', 'SQL Server', 'Azure', 'Power BI', 'Redis'],
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
    title: 'SentimentIQ — AI Analytics',
    category: 'AI',
    tags: ['Python', 'FastAPI', 'React', 'NLP'],
    summary: 'Real-time customer sentiment analysis platform for enterprise retail',
    challenge: 'A retail chain receiving 50,000+ customer interactions daily had no systematic way to identify emerging issues, sentiment trends, or customer satisfaction patterns.',
    solution: 'Built an NLP-powered analytics platform that ingests feedback from all channels, performs real-time sentiment analysis, clusters issues, and alerts management to emerging problems.',
    results: ['89% accuracy in sentiment classification', 'Critical issue detection time reduced from 72 hours to 15 minutes', '28% improvement in Net Promoter Score over 6 months', 'Processed 1M+ interactions in the first month'],
    tech: ['Python', 'FastAPI', 'OpenAI API', 'React', 'PostgreSQL', 'Celery', 'Redis'],
  }
]

export default function CaseStudies() {
  const [studies, setStudies] = useState([])

  useEffect(() => {
    const stored = localStorage.getItem('arison_projects')
    if (stored) {
      setStudies(JSON.parse(stored))
    } else {
      setStudies(initialProjects)
      localStorage.setItem('arison_projects', JSON.stringify(initialProjects))
    }
  }, [])

  return (
    <div className="case-studies-page">
      <div className="container">
        <div className="case-studies-header">
          <span className="label text-accent">Deep Dives</span>
          <h1 className="heading-xl" style={{ marginTop: '0.5rem', marginBottom: '1rem' }}>
            Case Studies: Turning Roadblocks Into Digital Success
          </h1>
          <p className="body-lg text-secondary">
            Read exactly how we partner with enterprises and startups to engineer solutions that transform operations.
          </p>
        </div>

        <div className="case-studies-list">
          {studies.map((study, idx) => (
            <motion.div 
              key={study.id || idx}
              className="case-study-item"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
            >
              <div className="case-study-left">
                <div className="case-study-meta">
                  <span className="case-study-tag">{study.category}</span>
                </div>
                <h2 className="case-study-title">{study.title}</h2>
                <p className="case-study-summary">{study.summary}</p>
                
                <div className="case-study-tech">
                  {study.tech && study.tech.map((t) => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
                {study.image && (
                  <img 
                    src={study.image} 
                    alt={study.title} 
                    className="case-study-img"
                  />
                )}
              </div>

              <div className="case-study-right">
                <div className="section-box">
                  <div className="section-box-title">The Challenge</div>
                  <p className="section-box-desc">{study.challenge}</p>
                </div>

                <div className="section-box">
                  <div className="section-box-title">Our Solution</div>
                  <p className="section-box-desc">{study.solution}</p>
                </div>

                <div className="section-box">
                  <div className="section-box-title">Results & Business Impact</div>
                  <div className="results-list">
                    {study.results && study.results.map((res, rIdx) => (
                      <div key={rIdx} className="result-item">
                        <Check size={16} />
                        <span>{res}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
