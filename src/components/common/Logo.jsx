// Inline SVG logo matching the AN monogram brand mark
export default function Logo({ size = 40, showText = true }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
      <svg width={size} height={size} viewBox="0 0 72 72" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00CFFD" />
            <stop offset="50%" stopColor="#4A6CF7" />
            <stop offset="100%" stopColor="#7B5EFF" />
          </linearGradient>
          <filter id="logoGlow">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {/* A shape */}
        <path
          d="M8 62 L36 6 L64 62"
          stroke="url(#logoGrad)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          filter="url(#logoGlow)"
        />
        <path
          d="M18 44 L54 44"
          stroke="url(#logoGrad)"
          strokeWidth="5"
          strokeLinecap="round"
        />
        {/* N overlay - slightly transparent */}
        <path
          d="M20 58 L20 22 L52 58 L52 22"
          stroke="url(#logoGrad)"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity="0.65"
          filter="url(#logoGlow)"
        />
      </svg>
      {showText && (
        <div style={{ lineHeight: 1 }}>
          <div style={{
            fontFamily: 'Syne, sans-serif',
            fontWeight: 800,
            fontSize: '1rem',
            letterSpacing: '0.05em',
            background: 'linear-gradient(135deg, #00CFFD, #7B5EFF)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            ARISON
          </div>
          <div style={{
            fontFamily: 'Syne, sans-serif',
            fontWeight: 700,
            fontSize: '0.65rem',
            letterSpacing: '0.25em',
            color: 'rgba(255,255,255,0.5)',
            textTransform: 'uppercase',
            marginTop: '1px',
          }}>
            NEXTSTACK
          </div>
        </div>
      )}
    </div>
  )
}
