// Monogram brand mark matching A-N interlinked logo in the spec
export default function Logo({ size = 42, showText = true }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="logoSpecGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#A855F7" /> {/* Purple */}
            <stop offset="50%" stopColor="#2563EB" /> {/* Blue */}
            <stop offset="100%" stopColor="#22D3EE" /> {/* Cyan */}
          </linearGradient>
        </defs>
        {/* Interlinked A and N Monogram paths */}
        <path
          d="M15 80 L50 20 L85 80"
          stroke="url(#logoSpecGrad)"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M35 80 L35 42 L65 80 L65 32"
          stroke="url(#logoSpecGrad)"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Horizontal bar of the A */}
        <path
          d="M31 56 L52 56"
          stroke="url(#logoSpecGrad)"
          strokeWidth="5"
          strokeLinecap="round"
        />
      </svg>
      {showText && (
        <div style={{ lineHeight: 1.15, display: 'flex', flexDirection: 'column' }}>
          <div style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: '1.2rem',
            letterSpacing: '0.08em',
            color: 'var(--text-primary)',
          }}>
            ARISON
          </div>
          <div style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 700,
            fontSize: '0.625rem',
            letterSpacing: '0.22em',
            color: 'var(--text-secondary)',
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
