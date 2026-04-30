'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(hover: none)').matches) return

    const dot = dotRef.current!
    const ring = ringRef.current!

    const xDot = gsap.quickTo(dot, 'x', { duration: 0.08, ease: 'power3' })
    const yDot = gsap.quickTo(dot, 'y', { duration: 0.08, ease: 'power3' })
    const xRing = gsap.quickTo(ring, 'x', { duration: 0.5, ease: 'power3' })
    const yRing = gsap.quickTo(ring, 'y', { duration: 0.5, ease: 'power3' })

    let visible = false

    const onMove = (e: MouseEvent) => {
      xDot(e.clientX)
      yDot(e.clientY)
      xRing(e.clientX)
      yRing(e.clientY)
      if (!visible) {
        gsap.to([dot, ring], { autoAlpha: 1, duration: 0.4 })
        visible = true
      }
    }

    const onOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest('a, button')) {
        gsap.to(ring, { scale: 2.8, duration: 0.4, ease: 'power2.out' })
        gsap.to(dot, { scale: 0, duration: 0.25 })
      }
    }

    const onOut = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest('a, button')) {
        gsap.to(ring, { scale: 1, duration: 0.4, ease: 'power2.out' })
        gsap.to(dot, { scale: 1, duration: 0.25 })
      }
    }

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] w-2 h-2 bg-black rounded-full pointer-events-none"
        style={{ transform: 'translate(-50%, -50%)', opacity: 0 }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9999] w-9 h-9 border border-black/40 rounded-full pointer-events-none"
        style={{ transform: 'translate(-50%, -50%)', opacity: 0 }}
      />
    </>
  )
}
