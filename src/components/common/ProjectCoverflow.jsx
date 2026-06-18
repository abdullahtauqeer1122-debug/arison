import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight, ExternalLink, Globe } from 'lucide-react'
import './ProjectCoverflow.css'

export default function ProjectCoverflow({ projects }) {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    // If activeIndex becomes out of bounds due to deletion/empty array
    if (activeIndex >= projects.length) {
      setActiveIndex(Math.max(0, projects.length - 1))
    }
  }, [projects, activeIndex])

  if (!projects || projects.length === 0) {
    return (
      <div className="coverflow-empty">
        <p className="body-md text-muted">No projects found. Please add some from the Admin Panel.</p>
      </div>
    )
  }

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1))
  }

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext()
    }, 3000)
    return () => clearInterval(timer)
  }, [projects.length])

  const activeProject = projects[activeIndex]

  return (
    <div className="coverflow-container">
      {/* 3D Slider Container */}
      <div className="coverflow-slider">
        <button className="coverflow-control prev" onClick={handlePrev} aria-label="Previous Project">
          <ArrowLeft size={20} />
        </button>

        <div className="coverflow-wrapper">
          {projects.map((proj, idx) => {
            const offset = idx - activeIndex
            const absOffset = Math.abs(offset)
            
            // Limit visible cards to optimize performance
            if (absOffset > 2 && absOffset !== projects.length - 1 && absOffset !== 1) return null

            // Compute 3D translation & rotation
            let translateX = 0
            let translateZ = 0
            let rotateY = 0
            let scale = 1
            let opacity = 1
            let zIndex = 10 - absOffset

            if (offset === 0) {
              translateX = 0
              translateZ = 0
              rotateY = 0
              scale = 1
              opacity = 1
            } else {
              const direction = offset > 0 ? 1 : -1
              translateX = direction * (160 + (absOffset - 1) * 60)
              translateZ = -150 * absOffset
              rotateY = -direction * 28
              scale = 0.82 - 0.05 * absOffset
              opacity = Math.max(0.3, 0.7 - 0.15 * absOffset)
            }

            // Fallback for custom added projects without images
            const imagePlaceholder = proj.image || `https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80`

            return (
              <div
                key={proj.id}
                className={`coverflow-card-wrapper ${idx === activeIndex ? 'active' : ''}`}
                style={{
                  transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                  opacity,
                  zIndex,
                  pointerEvents: idx === activeIndex ? 'auto' : 'none'
                }}
                onClick={() => setActiveIndex(idx)}
              >
                <div className="coverflow-card">
                  {/* Project Image ONLY */}
                  <div className="coverflow-card-image-container" style={{ height: '100%' }}>
                    <img src={imagePlaceholder} alt={proj.title} className="coverflow-card-img" />
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <button className="coverflow-control next" onClick={handleNext} aria-label="Next Project">
          <ArrowRight size={20} />
        </button>
      </div>

      {/* Bullet Indicators */}
      <div className="coverflow-bullets">
        {projects.map((_, idx) => (
          <button
            key={idx}
            className={`coverflow-bullet ${idx === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

    </div>
  )
}
