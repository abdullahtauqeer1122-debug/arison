import { useState, useEffect } from 'react'

export default function Loader() {
  const [done, setDone] = useState(false)
  const [exit, setExit] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setExit(true), 2000)
    const t2 = setTimeout(() => setDone(true), 2600)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  if (done) return null

  return (
    <div className={`loader-overlay${exit ? ' exit' : ''}`} role="status" aria-label="Loading">
      <div className="loader-logo">
        <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
          <defs>
            <linearGradient id="lg1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00CFFD" />
              <stop offset="50%" stopColor="#4A6CF7" />
              <stop offset="100%" stopColor="#7B5EFF" />
            </linearGradient>
          </defs>
          {/* A shape */}
          <path d="M10 60 L36 8 L62 60" stroke="url(#lg1)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path d="M20 44 L52 44" stroke="url(#lg1)" strokeWidth="4" strokeLinecap="round" />
          {/* N overlay */}
          <path d="M22 56 L22 24 L50 56 L50 24" stroke="url(#lg1)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.7" />
        </svg>
      </div>
      <div className="loader-bar-track">
        <div className="loader-bar-fill" />
      </div>
      <div className="loader-text">Arison NextStack Technologies</div>
    </div>
  )
}
