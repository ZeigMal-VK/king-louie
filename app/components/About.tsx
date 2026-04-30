'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Amp() {
  return (
    <span
      style={{
        fontFamily: 'var(--font-playfair)',
        fontStyle: 'italic',
        fontWeight: 400,
        fontVariationSettings: "'opsz' 12, 'wdth' 100",
      }}
    >
      &
    </span>
  )
}

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const labelRef = useRef<HTMLParagraphElement>(null)
  const ruleRef = useRef<HTMLDivElement>(null)
  const lineRefs = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    const trigger = { trigger: sectionRef.current, start: 'top 72%' }

    gsap.fromTo(
      [labelRef.current, ruleRef.current],
      { y: 12, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 0.7, stagger: 0.08, ease: 'power3.out', scrollTrigger: trigger }
    )

    gsap.fromTo(
      lineRefs.current.filter(Boolean),
      { y: 50, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 1, stagger: 0.1, ease: 'power3.out', scrollTrigger: { ...trigger, start: 'top 68%' } }
    )
  }, [])

  const setLine = (i: number) => (el: HTMLElement | null) => { lineRefs.current[i] = el }

  return (
    <section ref={sectionRef} className="px-4 md:px-8 py-12 md:py-[120px]">

      {/* Label + rule */}
      <div className="flex flex-col gap-3 items-end mb-6">
        <p
          ref={labelRef}
          className="text-[14px] text-[#1f1f1f] uppercase text-right leading-[1.1]"
          style={{ fontFamily: 'var(--font-geist-mono)' }}
        >
          [ 8+ years in industry ]
        </p>
        <div ref={ruleRef} className="w-full h-px bg-[#1f1f1f]" />
      </div>

      {/* Mobile */}
      <div className="md:hidden flex flex-col gap-2 items-center text-center uppercase">
        <p
          className="text-[14px] text-[#1f1f1f] leading-[1.1] mb-1"
          style={{ fontFamily: 'var(--font-geist-mono)' }}
        >
          001
        </p>
        <p className="text-[32px] font-light text-black leading-[0.84] whitespace-pre" style={{ letterSpacing: '-0.08em' }}>
          {`A creative director   /`}
        </p>
        <p className="text-[32px] font-light text-black leading-[0.84]" style={{ letterSpacing: '-0.08em' }}>
          Photographer
        </p>
        <p className="text-[32px] font-light text-black leading-[0.84]" style={{ letterSpacing: '-0.08em' }}>
          Born <Amp /> raised
        </p>
        <p className="text-[32px] font-light text-black leading-[0.84]" style={{ letterSpacing: '-0.08em' }}>
          on the south side
        </p>
        <p className="text-[32px] font-light text-black leading-[0.84]" style={{ letterSpacing: '-0.08em' }}>
          of chicago.
        </p>
        <p
          className="text-[14px] text-[#1f1f1f] leading-[1.1] mt-3"
          style={{ fontFamily: 'var(--font-geist-mono)' }}
        >
          [ creative freelancer ]
        </p>
      </div>

      {/* Desktop */}
      <div className="hidden md:flex flex-col gap-2">

        <div className="flex items-start gap-3">
          <p
            ref={setLine(0)}
            className="text-[96px] font-light text-black leading-[0.84] uppercase whitespace-pre shrink-0"
            style={{ letterSpacing: '-0.08em' }}
          >
            {`A creative director   /`}
          </p>
          <p
            className="text-[14px] text-[#1f1f1f] leading-[1.1] pt-5 shrink-0"
            style={{ fontFamily: 'var(--font-geist-mono)' }}
          >
            001
          </p>
        </div>

        <div className="pl-[214px]">
          <p
            ref={setLine(1)}
            className="text-[96px] font-light text-black leading-[0.84] uppercase whitespace-nowrap"
            style={{ letterSpacing: '-0.08em' }}
          >
            Photographer
          </p>
        </div>

        <div className="pl-[610px]">
          <p
            ref={setLine(2)}
            className="text-[96px] font-light text-black leading-[0.84] uppercase whitespace-nowrap"
            style={{ letterSpacing: '-0.08em' }}
          >
            Born <Amp /> raised
          </p>
        </div>

        <p
          ref={setLine(3)}
          className="text-[96px] font-light text-black leading-[0.84] uppercase whitespace-nowrap"
          style={{ letterSpacing: '-0.08em' }}
        >
          on the south side
        </p>

        <div className="relative pl-[606px]">
          <p
            ref={setLine(4)}
            className="text-[96px] font-light text-black leading-[0.84] uppercase whitespace-nowrap"
            style={{ letterSpacing: '-0.08em' }}
          >
            of chicago.
          </p>
          <p
            className="absolute top-[26px] left-[1079px] text-[14px] text-[#1f1f1f] leading-[1.1] whitespace-nowrap"
            style={{ fontFamily: 'var(--font-geist-mono)' }}
          >
            [ creative freelancer ]
          </p>
        </div>

      </div>
    </section>
  )
}
