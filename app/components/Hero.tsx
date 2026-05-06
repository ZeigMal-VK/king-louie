'use client'

import { useLayoutEffect, useRef, useState, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const heroImage = '/images/hero.png'
const navLinks = ['About', 'Services', 'Projects', 'News', 'Contact']

function NavLink({ children }: { children: string }) {
  const lineRef = useRef<HTMLSpanElement>(null)

  const onEnter = () => {
    gsap.fromTo(lineRef.current,
      { scaleX: 0, transformOrigin: 'left center' },
      { scaleX: 1, duration: 0.3, ease: 'power3.out' }
    )
  }

  const onLeave = () => {
    gsap.to(lineRef.current, { scaleX: 0, duration: 0.25, ease: 'power3.in', transformOrigin: 'right center' })
  }

  return (
    <a href="#" className="relative pb-0.5" onMouseEnter={onEnter} onMouseLeave={onLeave}>
      {children}
      <span
        ref={lineRef}
        className="absolute bottom-0 left-0 w-full h-px bg-current"
        style={{ transform: 'scaleX(0)', transformOrigin: 'left center' }}
      />
    </a>
  )
}

function CtaButton({ children, className = '', dark = false }: { children: React.ReactNode; className?: string; dark?: boolean }) {
  const fillRef = useRef<HTMLSpanElement>(null)
  const textRef = useRef<HTMLSpanElement>(null)

  const baseColor = dark ? '#000' : '#fff'
  const hoverColor = dark ? '#fff' : '#000'

  const onEnter = () => {
    gsap.fromTo(fillRef.current,
      { scaleX: 0, transformOrigin: 'left center' },
      { scaleX: 1, duration: 0.4, ease: 'power3.out', transformOrigin: 'left center' }
    )
    gsap.to(textRef.current, { color: hoverColor, duration: 0.2, delay: 0.1 })
  }

  const onLeave = () => {
    gsap.to(fillRef.current, { scaleX: 0, duration: 0.35, ease: 'power3.in', transformOrigin: 'right center' })
    // clearProps:'color' lets the className take over again — important so the button reflects a later `dark` prop change
    gsap.to(textRef.current, { color: baseColor, duration: 0.15, clearProps: 'color' })
  }

  return (
    <button
      className={`relative overflow-hidden text-[14px] font-medium tracking-[-0.035em] px-4 py-3 rounded-full transition-colors duration-300 ${dark ? 'bg-white text-black' : 'bg-black text-white'} ${className}`}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <span
        ref={fillRef}
        className={`absolute inset-0 rounded-full pointer-events-none ${dark ? 'bg-black' : 'bg-white'}`}
        style={{ transform: 'scaleX(0)' }}
      />
      <span ref={textRef} className="relative z-10">{children}</span>
    </button>
  )
}

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [navOverDark, setNavOverDark] = useState(false)
  const overlayRef = useRef<HTMLDivElement>(null)
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([])
  const navRef = useRef<HTMLElement>(null)
  const heroContentRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const bgRef = useRef<HTMLImageElement>(null)

  // Desktop parallax refs
  const desktopLabelRef = useRef<HTMLParagraphElement>(null)
  const desktopHarveyRef = useRef<HTMLSpanElement>(null)
  const desktopSpecterRef = useRef<HTMLSpanElement>(null)

  // Mobile parallax refs
  const mobileLabelRef = useRef<HTMLParagraphElement>(null)
  const mobileHarveyRef = useRef<HTMLHeadingElement>(null)
  const mobileSpecterRef = useRef<HTMLHeadingElement>(null)

  // Description block refs (entrance animation only)
  const desktopDescRef = useRef<HTMLDivElement>(null)
  const mobileDescRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    // Reveal the wrapper (was hidden via Tailwind for SSR) without applying a transform — a transform on heroContentRef
    // would create a stacking context and prevent mix-blend-overlay on the title from reaching the photo.
    gsap.set(heroContentRef.current, { autoAlpha: 1 })

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    tl.fromTo(navRef.current, { y: -24, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.8, delay: 0.1 })
    tl.fromTo(
      [
        desktopLabelRef.current, desktopHarveyRef.current, desktopSpecterRef.current,
        mobileLabelRef.current, mobileHarveyRef.current, mobileSpecterRef.current,
        desktopDescRef.current, mobileDescRef.current,
      ].filter(Boolean),
      { y: 40, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 1, stagger: 0.04 },
      '-=0.45'
    )
  }, [])

  useEffect(() => {
    const vw = window.innerWidth
    const st = {
      trigger: sectionRef.current,
      start: 'top top',
      end: 'bottom top',
      scrub: 1.5,
    }

    const ctx = gsap.context(() => {
      gsap.to(bgRef.current, { scale: 1.2, ease: 'none', scrollTrigger: st })

      gsap.to([desktopHarveyRef.current, desktopLabelRef.current, mobileLabelRef.current, mobileHarveyRef.current], {
        x: -vw * 0.6,
        ease: 'none',
        scrollTrigger: st,
      })

      gsap.to([desktopSpecterRef.current, mobileSpecterRef.current], {
        x: vw * 0.6,
        ease: 'none',
        scrollTrigger: st,
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  // Nav theme: switch to white when a [data-nav-theme="dark"] section is behind the nav
  useEffect(() => {
    const navEl = navRef.current
    if (!navEl) return
    const navHeight = navEl.offsetHeight
    const intersecting = new Set<Element>()

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) intersecting.add(entry.target)
          else intersecting.delete(entry.target)
        }
        setNavOverDark(intersecting.size > 0)
      },
      { rootMargin: `0px 0px -${window.innerHeight - navHeight}px 0px` }
    )

    document.querySelectorAll('[data-nav-theme="dark"]').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

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
    <section ref={sectionRef} className="relative h-screen overflow-hidden flex flex-col px-4 md:px-8">
      {/* Background photo */}
      <img
        ref={bgRef}
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
      <nav ref={navRef} className={`fixed top-0 inset-x-0 z-40 flex items-center justify-between py-6 px-4 md:px-8 opacity-0 invisible transition-colors duration-300 ${navOverDark ? 'text-white' : 'text-black'}`}>
        <span className="font-semibold text-[16px] tracking-[-0.04em] capitalize">
          H.Studio
        </span>

        <div className="hidden md:flex items-center gap-14 font-semibold text-[16px] tracking-[-0.04em] capitalize">
          {navLinks.map(link => (
            <NavLink key={link}>{link}</NavLink>
          ))}
        </div>

        <CtaButton dark={navOverDark} className="hidden md:inline-flex items-center justify-center">
          Let&apos;s talk
        </CtaButton>

        <button className="md:hidden" onClick={openMenu} aria-label="Open menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <rect y="3" width="24" height="2.5" />
            <rect y="10.75" width="24" height="2.5" />
            <rect y="18.5" width="24" height="2.5" />
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
      <div ref={heroContentRef} className="relative flex-1 flex flex-col justify-end md:justify-center pb-6 md:pb-0 opacity-0 invisible">

        {/* Mobile: bottom-aligned 341px content block (matches Figma node 1:290) */}
        <div className="md:hidden flex flex-col items-center justify-between h-[341px] w-full">
          {/* Title block: label + Harvey + Specter (siblings — no wrapping group, so mix-blend-overlay reaches the image) */}
          <div className="flex flex-col items-center w-full">
            <p
              ref={mobileLabelRef}
              className="text-[14px] text-white uppercase mix-blend-overlay leading-[1.1] whitespace-nowrap"
              style={{ fontFamily: 'var(--font-geist-mono)' }}
            >
              [ Hello i&apos;m ]
            </p>
            <h1
              ref={mobileHarveyRef}
              className="font-medium capitalize text-white text-center mix-blend-overlay w-full"
              style={{ letterSpacing: '-0.07em', fontSize: 'min(96px, 25.6vw)', lineHeight: 0.8 }}
            >
              Harvey
            </h1>
            <h1
              ref={mobileSpecterRef}
              className="font-medium capitalize text-white text-center mix-blend-overlay w-full"
              style={{ letterSpacing: '-0.07em', fontSize: 'min(96px, 25.6vw)', lineHeight: 0.8 }}
            >
              Specter
            </h1>
          </div>

          {/* Description + CTA */}
          <div ref={mobileDescRef} className="flex flex-col gap-[17px] items-start w-[293px] max-w-full">
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

        {/* Desktop: w-fit column */}
        <div className="hidden md:flex flex-col mx-auto w-fit">
          <p
            ref={desktopLabelRef}
            className="text-[14px] text-white uppercase mix-blend-overlay leading-[1.1] whitespace-nowrap mb-[-15px]"
            style={{ fontFamily: 'var(--font-geist-mono)' }}
          >
            [ Hello i&apos;m ]
          </p>
          <div
            className="font-medium capitalize text-white mix-blend-overlay leading-[1.1] whitespace-pre"
            style={{ fontSize: 'clamp(72px, 13.75vw, 220px)', letterSpacing: '-0.07em' }}
          >
            <span ref={desktopHarveyRef} className="inline-block">{`Harvey   `}</span>
            <span ref={desktopSpecterRef} className="inline-block">Specter</span>
          </div>
          <div ref={desktopDescRef} className="self-end flex flex-col gap-[17px] w-[294px]">
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

      </div>
    </section>
  )
}
