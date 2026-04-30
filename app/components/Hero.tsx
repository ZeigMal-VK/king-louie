'use client'

import { useRef, useState } from 'react'
import gsap from 'gsap'

const heroImage = 'https://www.figma.com/api/mcp/asset/affd98dc-478b-419d-a180-5634ee5ec868'
const navLinks = ['About', 'Services', 'Projects', 'News', 'Contact']

function NavLink({ children }: { children: string }) {
  const topRef = useRef<HTMLSpanElement>(null)
  const btmRef = useRef<HTMLSpanElement>(null)

  const onEnter = () => {
    gsap.to(topRef.current, { yPercent: -100, duration: 0.35, ease: 'power2.out' })
    gsap.fromTo(btmRef.current, { yPercent: 100 }, { yPercent: 0, duration: 0.35, ease: 'power2.out' })
  }

  const onLeave = () => {
    gsap.to(topRef.current, { yPercent: 0, duration: 0.35, ease: 'power2.out' })
    gsap.to(btmRef.current, { yPercent: 100, duration: 0.35, ease: 'power2.out' })
  }

  return (
    <a
      href="#"
      className="relative overflow-hidden inline-block"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <span ref={topRef} className="block">{children}</span>
      <span
        ref={btmRef}
        className="absolute inset-0 flex items-center"
        style={{ transform: 'translateY(100%)' }}
        aria-hidden="true"
      >
        {children}
      </span>
    </a>
  )
}

function CtaButton({ children, className = '' }: { children: React.ReactNode; className?: string }) {
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
    <button
      className={`relative overflow-hidden bg-black text-white text-[14px] font-medium tracking-[-0.035em] px-4 py-3 rounded-full ${className}`}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <span
        ref={fillRef}
        className="absolute inset-0 bg-white rounded-full pointer-events-none"
        style={{ transform: 'scaleX(0)' }}
      />
      <span ref={textRef} className="relative z-10">{children}</span>
    </button>
  )
}

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false)
  const overlayRef = useRef<HTMLDivElement>(null)
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([])

  const openMenu = () => {
    setMenuOpen(true)
    gsap.fromTo(overlayRef.current,
      { x: '100%' },
      { x: '0%', duration: 0.55, ease: 'expo.out' }
    )
    gsap.fromTo(linkRefs.current,
      { x: 40, autoAlpha: 0 },
      { x: 0, autoAlpha: 1, duration: 0.5, stagger: 0.07, delay: 0.2, ease: 'power3.out' }
    )
  }

  const closeMenu = () => {
    gsap.to(overlayRef.current, {
      x: '100%',
      duration: 0.4,
      ease: 'expo.in',
      onComplete: () => setMenuOpen(false),
    })
  }

  return (
    <section className="relative h-screen overflow-hidden flex flex-col px-4 md:px-8 md:gap-[240px]">
      {/* Background photo */}
      <img
        src={heroImage}
        alt=""
        aria-hidden
        className="absolute inset-0 size-full object-cover object-top pointer-events-none select-none"
      />

      {/* Bottom blur overlay */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[349px] backdrop-blur-[10px] bg-[rgba(217,217,217,0.01)]"
        style={{
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 40%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 40%)',
        }}
      />

      {/* Nav */}
      <nav className="relative z-10 shrink-0 flex items-center justify-between py-6">
        <span className="font-semibold text-[16px] tracking-[-0.04em] capitalize text-black">
          H.Studio
        </span>

        <div className="hidden md:flex items-center gap-14 font-semibold text-[16px] tracking-[-0.04em] capitalize text-black">
          {navLinks.map(link => (
            <NavLink key={link}>{link}</NavLink>
          ))}
        </div>

        <CtaButton className="hidden md:inline-flex items-center justify-center">
          Let&apos;s talk
        </CtaButton>

        <button className="md:hidden" onClick={openMenu} aria-label="Open menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <rect y="3" width="24" height="2.5" fill="black" />
            <rect y="10.75" width="24" height="2.5" fill="black" />
            <rect y="18.5" width="24" height="2.5" fill="black" />
          </svg>
        </button>
      </nav>

      {/* Mobile menu — always mounted so ref is available on first open */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-50 bg-white flex flex-col px-4 md:hidden"
        style={{ transform: 'translateX(100%)', pointerEvents: menuOpen ? 'auto' : 'none' }}
        aria-hidden={!menuOpen}
      >
        <div className="flex items-center justify-between py-6">
          <span className="font-semibold text-[16px] tracking-[-0.04em] capitalize">H.Studio</span>
          <button onClick={closeMenu} aria-label="Close menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M5 5L19 19M5 19L19 5" stroke="black" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col mt-6 border-t border-black/10">
          {navLinks.map((link, i) => (
            <a
              key={link}
              ref={el => { linkRefs.current[i] = el }}
              href="#"
              className="text-[28px] font-semibold capitalize tracking-[-0.04em] text-black py-5 border-b border-black/10"
              onClick={closeMenu}
            >
              {link}
            </a>
          ))}
        </nav>
        <CtaButton className="mt-auto mb-10 self-start">
          Let&apos;s talk
        </CtaButton>
      </div>

      {/* Hero content */}
      <div className="relative flex-1 md:flex-none flex flex-col justify-between md:justify-start pb-6 md:pb-0">

        {/* Mobile: label + name */}
        <div className="md:hidden flex flex-col items-start w-full">
          <div className="flex items-center justify-center w-full">
            <p
              className="text-[14px] text-white uppercase mix-blend-overlay leading-[1.1] whitespace-nowrap"
              style={{ fontFamily: 'var(--font-geist-mono)' }}
            >
              [ Hello i&apos;m ]
            </p>
          </div>
          <h1
            className="font-medium capitalize text-white text-center mix-blend-overlay leading-[0.85] w-full"
            style={{ letterSpacing: '-0.07em', fontSize: 'min(96px, 21vw)' }}
          >
            Harvey<br />Specter
          </h1>
        </div>

        {/* Desktop: w-fit column */}
        <div className="hidden md:flex flex-col mx-auto w-fit">
          <p
            className="text-[14px] text-white uppercase mix-blend-overlay leading-[1.1] whitespace-nowrap mb-[-15px]"
            style={{ fontFamily: 'var(--font-geist-mono)' }}
          >
            [ Hello i&apos;m ]
          </p>
          <h1
            className="text-[198px] font-medium capitalize text-white mix-blend-overlay leading-[1.1] whitespace-pre"
            style={{ letterSpacing: '-0.07em' }}
          >
            {`Harvey   Specter`}
          </h1>
          <div className="self-end flex flex-col gap-[17px] w-[294px]">
            <p className="text-[14px] font-bold italic text-[#1f1f1f] tracking-[-0.035em] uppercase leading-[1.1]">
              H.Studio is a{' '}
              <span className="font-normal">full-service</span>
              {' '}creative studio creating beautiful digital experiences and products. We are an{' '}
              <span className="font-normal">award winning</span>
              {' '}desing and art group specializing in branding, web design and engineering.
            </p>
            <CtaButton className="self-start">Let&apos;s talk</CtaButton>
          </div>
        </div>

        {/* Mobile: description + CTA */}
        <div className="md:hidden flex flex-col gap-[17px] w-full max-w-[293px]">
          <p className="text-[14px] font-bold italic text-[#1f1f1f] tracking-[-0.035em] uppercase leading-[1.1]">
            H.Studio is a{' '}
            <span className="font-normal">full-service</span>
            {' '}creative studio creating beautiful digital experiences and products. We are an{' '}
            <span className="font-normal">award winning</span>
            {' '}desing and art group specializing in branding, web design and engineering.
          </p>
          <CtaButton className="self-start">Let&apos;s talk</CtaButton>
        </div>

      </div>
    </section>
  )
}
