'use client'

import { useEffect, useRef, useState } from 'react'

export function BrandFilmEmbed() {
  const ref = useRef<HTMLDivElement>(null)
  const [load, setLoad] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoad(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="relative w-full" style={{ paddingBottom: '56.25%' }}>
      {load ? (
        <iframe
          src="/brand-film.html"
          title="Super Media Brand Film"
          className="absolute inset-0 w-full h-full border-0 rounded"
          allowFullScreen
        />
      ) : (
        // Placeholder matching the brand film thumbnail
        <div className="absolute inset-0 rounded overflow-hidden">
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <rect width="100" height="100" fill="#0D1829"/>
            <text x="50" y="52" fontFamily="DM Sans, sans-serif" fontSize="26" fontWeight="700" fill="#FFFFFF" textAnchor="middle">Super</text>
            <circle cx="71" cy="52" r="3.4" fill="#E8621A"/>
            <rect x="30" y="60" width="40" height="2.4" rx="1.2" fill="#E8621A"/>
          </svg>
        </div>
      )}
    </div>
  )
}
