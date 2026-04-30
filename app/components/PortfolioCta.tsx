'use client'

import { useRef } from 'react'
import gsap from 'gsap'

function Corner({ className }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={`shrink-0 ${className ?? ''}`}>
      <path d="M1 15L1 1L15 1" stroke="#1f1f1f" strokeWidth="1" strokeLinecap="square" />
    </svg>
  )
}

export default function PortfolioCta() {
  const fillRef = useRef<HTMLSpanElement>(null)
  const textRef = useRef<HTMLSpanElement>(null)

  const onEnter = () => {
    gsap.fromTo(fillRef.current,
      { scaleX: 0, transformOrigin: 'left center' },
      { scaleX: 1, duration: 0.4, ease: 'power3.out', transformOrigin: 'left center' }
    )
    gsap.to(textRef.current, { color: '#000', duration: 0.2, delay: 0.1 })
  }

  const onLeave = () => {
    gsap.to(fillRef.current, { scaleX: 0, duration: 0.35, ease: 'power3.in', transformOrigin: 'right center' })
    gsap.to(textRef.current, { color: '#fff', duration: 0.15 })
  }

  return (
    <div className="flex items-center gap-3">
      <div className="self-stretch flex flex-col justify-between w-6 shrink-0">
        <Corner />
        <Corner className="-rotate-90" />
      </div>
      <div className="flex-1 flex flex-col gap-[10px] py-3">
        <p className="italic text-[14px] text-[#1f1f1f] leading-[1.3] tracking-[-0.035em]">
          Discover how my creativity transforms ideas into impactful digital experiences — schedule a call with me to get started.
        </p>
        <button
          className="relative overflow-hidden self-start bg-black text-white text-[14px] font-medium tracking-[-0.035em] px-4 py-3 rounded-full"
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}
        >
          <span
            ref={fillRef}
            className="absolute inset-0 bg-white rounded-full pointer-events-none"
            style={{ transform: 'scaleX(0)' }}
          />
          <span ref={textRef} className="relative z-10">Let&apos;s talk</span>
        </button>
      </div>
      <div className="self-stretch flex flex-col justify-between w-6 shrink-0">
        <Corner className="rotate-90" />
        <Corner className="rotate-180" />
      </div>
    </div>
  )
}
