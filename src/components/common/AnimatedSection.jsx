import { useEffect } from 'react'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'

export default function AnimatedSection({
  children,
  className = '',
  animation = 'reveal',
  delay = 0,
  threshold = 0.1,
  tag: Tag = 'div',
  stagger = false,
}) {
  const [ref, isVisible] = useIntersectionObserver({ threshold, triggerOnce: true })

  return (
    <Tag
      ref={ref}
      className={`${animation}${isVisible ? ' visible' : ''} ${stagger ? 'stagger' : ''} ${className}`}
      style={{ transitionDelay: delay ? `${delay}ms` : undefined }}
    >
      {children}
    </Tag>
  )
}
