'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const desktopImage = '/images/full-bleed.png'
const mobileImage = '/images/full-bleed.png'

export default function FullBleedPhoto() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const tween = gsap.fromTo(
      el,
      { filter: 'blur(30px)' },
      {
        filter: 'blur(0px)',
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
          end: 'top center',
          scrub: true,
        },
      }
    )

    return () => {
      tween.scrollTrigger?.kill()
    }
  }, [])

  return (
    <div ref={containerRef} data-nav-theme="dark" className="relative w-full h-[500px] md:h-[900px] overflow-hidden bg-black">
      <img
        src={desktopImage}
        alt=""
        aria-hidden
        className="hidden md:block absolute inset-0 size-full object-cover object-center pointer-events-none select-none"
      />
      <img
        src={mobileImage}
        alt=""
        aria-hidden
        className="md:hidden absolute inset-0 size-full object-cover object-center pointer-events-none select-none"
      />
    </div>
  )
}
