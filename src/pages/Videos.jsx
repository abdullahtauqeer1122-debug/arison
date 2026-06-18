import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import './Videos.css'

export const initialVideos = [
  {
    id: 1,
    title: 'How Web Development Works (Step-by-Step)',
    desc: 'An excellent high-level overview of how web development actually works, from HTML/CSS to databases, DNS, and hosting servers.',
    url: 'https://www.youtube.com/embed/ZxKM3DCV2kE',
    tag: 'Web Development Basics'
  },
  {
    id: 2,
    title: 'I Built a Full Stack SaaS App in 10 Minutes',
    desc: 'Watch the rapid architecture and deployment of a modern React, Node, and database application using cutting edge developer tools.',
    url: 'https://www.youtube.com/embed/rHux0gMZ3Eg',
    tag: 'Hands-on Coding'
  },
  {
    id: 3,
    title: 'Web Development Career Guide & Roadmaps',
    desc: 'A complete practical roadmap showing exactly what technologies, tools, and platforms you should master for full-stack engineering.',
    url: 'https://www.youtube.com/embed/Q33KBiDriJY',
    tag: 'Roadmap Guide'
  }
]

export default function Videos() {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    const videosVersion = localStorage.getItem('arison_videos_version')
    const stored = localStorage.getItem('arison_videos')
    if (!stored || videosVersion !== 'v3') {
      // Reset to new web dev videos
      localStorage.setItem('arison_videos', JSON.stringify(initialVideos))
      localStorage.setItem('arison_videos_version', 'v3')
      setVideos(initialVideos)
    } else {
      setVideos(JSON.parse(stored))
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
