import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import './Videos.css'

export const initialVideos = [
  {
    id: 1,
    title: 'Arison NextStack Technologies Corporate Overview',
    desc: 'An in-depth look at our software engineering processes, office culture in Pakistan, and enterprise client portfolio.',
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder video
    tag: 'Corporate'
  },
  {
    id: 2,
    title: 'Building Scalable SaaS Architectures in 2026',
    desc: 'Our Head of Engineering explains standard patterns for multi-tenant SaaS structures and cloud cost minimization.',
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    tag: 'Tech Talk'
  },
  {
    id: 3,
    title: 'Custom ERP & Business Portal Walkthrough',
    desc: 'Demonstrating a custom logistics ERP built by Arison NextStack, featuring real-time fleet tracking and billing.',
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    tag: 'Case Study'
  }
]

export default function Videos() {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    const stored = localStorage.getItem('arison_videos')
    if (stored) {
      setVideos(JSON.parse(stored))
    } else {
      setVideos(initialVideos)
      localStorage.setItem('arison_videos', JSON.stringify(initialVideos))
    }
  }, [])

  return (
    <div className="videos-page">
      <div className="container">
        <div className="videos-header">
          <span className="label text-accent">Video Pulse</span>
          <h1 className="heading-xl" style={{ marginTop: '0.5rem', marginBottom: '1rem' }}>
            Interactive Briefings & Tech Spotlights
          </h1>
          <p className="body-lg text-secondary">
            Watch our engineering team demo custom products, explain architecture patterns, and discuss tech strategies.
          </p>
        </div>

        <div className="videos-grid">
          {videos.map((vid, idx) => (
            <motion.div 
              key={vid.id || idx}
              className="video-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <div className="video-embed-wrapper">
                {vid.url.includes('youtube.com') || vid.url.includes('youtu.be') ? (
                  <iframe
                    src={vid.url}
                    title={vid.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <video src={vid.url} controls preload="metadata"></video>
                )}
              </div>
              <div className="video-card-content">
                <span className="video-tag">{vid.tag || 'Briefing'}</span>
                <h3 className="video-title">{vid.title}</h3>
                <p className="video-desc">{vid.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
