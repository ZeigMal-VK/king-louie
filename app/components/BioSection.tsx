'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const portraitImage = '/images/portrait.png'

function Corner({ className }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className={`shrink-0 ${className ?? ''}`}
    >
      <path d="M1 15L1 1L15 1" stroke="#1f1f1f" strokeWidth="1" strokeLinecap="square" />
    </svg>
  )
}

function BracketedText() {
  return (
    <div className="flex items-center gap-3">
      {/* Left bracket column */}
      <div className="self-stretch flex flex-col justify-between w-6 shrink-0">
        <Corner />
        <Corner className="-rotate-90" />
      </div>

      {/* Text */}
      <p className="flex-1 text-[14px] text-[#1f1f1f] leading-[1.3] tracking-[-0.035em] py-3">
        Placeholder paragraph one. This is where you introduce yourself — your background, your passion for your craft, and what drives you creatively. Two to three sentences work best here. Placeholder paragraph two. Here you can describe your technical approach, how you collaborate with clients, or what sets your work apart from others in your field.
      </p>

      {/* Right bracket column */}
      <div className="self-stretch flex flex-col justify-between w-6 shrink-0">
        <Corner className="rotate-90" />
        <Corner className="rotate-180" />
      </div>
    </div>
  )
}

export default function BioSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const mobileOverlayRef = useRef<HTMLDivElement>(null)
  const desktopOverlayRef = useRef<HTMLDivElement>(null)
  const mobileImageRef = useRef<HTMLDivElement>(null)
  const desktopImageRef = useRef<HTMLDivElement>(null)
  const desktopTextRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const triggers: ScrollTrigger[] = []

    const setup = (overlay: HTMLDivElement | null, container: HTMLDivElement | null) => {
      if (!overlay || !container) return
      const tween = gsap.fromTo(
        overlay,
        { clipPath: 'inset(0 0 0 0)' },
        {
          clipPath: 'inset(0 0 0 100%)',
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            start: 'top 80%',
            end: 'bottom 30%',
            scrub: true,
          },
        }
      )
      if (tween.scrollTrigger) triggers.push(tween.scrollTrigger)
    }

    setup(mobileOverlayRef.current, mobileImageRef.current)
    setup(desktopOverlayRef.current, desktopImageRef.current)

    if (desktopTextRef.current && sectionRef.current) {
      const textTween = gsap.fromTo(
        desktopTextRef.current,
        { x: 0 },
        {
          x: -80,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'bottom 30%',
            scrub: true,
          },
        }
      )
      if (textTween.scrollTrigger) triggers.push(textTween.scrollTrigger)
    }

    return () => {
      triggers.forEach((t) => t.kill())
    }
  }, [])

  return (
    <section ref={sectionRef} className="px-4 md:px-8 py-12 md:py-20">

      {/* Mobile */}
      <div className="md:hidden flex flex-col gap-5">
        <p className="text-[14px] text-[#1f1f1f] uppercase leading-[1.1]" style={{ fontFamily: 'var(--font-geist-mono)' }}>
          002
        </p>
        <p className="text-[14px] text-[#1f1f1f] uppercase leading-[1.1]" style={{ fontFamily: 'var(--font-geist-mono)' }}>
          [ About ]
        </p>
        <BracketedText />
        <div ref={mobileImageRef} className="relative w-full aspect-[422/594] overflow-hidden">
          <img src={portraitImage} alt="Portrait" className="absolute inset-0 size-full object-cover block" />
          <div
            ref={mobileOverlayRef}
            className="absolute inset-0 bg-black"
          />
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:flex items-start justify-between">
        {/* Left: label */}
        <p className="text-[14px] text-[#1f1f1f] uppercase leading-[1.1] shrink-0" style={{ fontFamily: 'var(--font-geist-mono)' }}>
          [ About ]
        </p>

        {/* Right: text + image, bottom-aligned */}
        <div className="flex gap-8 items-end w-[983px] shrink-0">
          {/* Bracketed text — fills remaining space */}
          <div ref={desktopTextRef} className="flex-1 min-w-0 will-change-transform">
            <BracketedText />
          </div>

          {/* Image block */}
          <div className="flex gap-6 items-start shrink-0">
            <p className="text-[14px] text-[#1f1f1f] uppercase leading-[1.1]" style={{ fontFamily: 'var(--font-geist-mono)' }}>
              002
            </p>
            <div ref={desktopImageRef} className="relative w-[436px] h-[614px] overflow-hidden shrink-0">
              <img src={portraitImage} alt="Portrait" className="absolute inset-0 size-full object-cover block" />
              <div
                ref={desktopOverlayRef}
                className="absolute inset-0 bg-black"
              />
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
