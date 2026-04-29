'use client'

import { useState } from 'react'

const heroImage = 'https://www.figma.com/api/mcp/asset/affd98dc-478b-419d-a180-5634ee5ec868'

const navLinks = ['About', 'Services', 'Projects', 'News', 'Contact']

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <section className="relative h-screen md:h-[847px] overflow-hidden flex flex-col px-4 md:px-8 md:gap-[240px]">
      {/* Background photo */}
      <img
        src={heroImage}
        alt=""
        aria-hidden
        className="absolute inset-0 size-full object-cover object-top pointer-events-none select-none"
      />

      {/* Bottom blur overlay — fades in from top */}
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

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-14 font-semibold text-[16px] tracking-[-0.04em] capitalize text-black">
          {navLinks.map(link => (
            <a key={link} href="#" className="hover:opacity-70 transition-opacity">
              {link}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <button className="hidden md:flex items-center justify-center bg-black text-white text-[14px] font-medium tracking-[-0.035em] px-4 py-3 rounded-full">
          Let&apos;s talk
        </button>

        {/* Mobile hamburger */}
        <button className="md:hidden" onClick={() => setMenuOpen(true)} aria-label="Open menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <rect y="3" width="24" height="2.5" fill="black" />
            <rect y="10.75" width="24" height="2.5" fill="black" />
            <rect y="18.5" width="24" height="2.5" fill="black" />
          </svg>
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col px-4 md:hidden">
          <div className="flex items-center justify-between py-6">
            <span className="font-semibold text-[16px] tracking-[-0.04em] capitalize">H.Studio</span>
            <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5 5L19 19M5 19L19 5" stroke="black" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col mt-6 border-t border-black/10">
            {navLinks.map(link => (
              <a
                key={link}
                href="#"
                className="text-[28px] font-semibold capitalize tracking-[-0.04em] text-black py-5 border-b border-black/10"
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </a>
            ))}
          </nav>
          <button className="mt-auto mb-10 self-start bg-black text-white text-[14px] font-medium tracking-[-0.035em] px-4 py-3 rounded-full">
            Let&apos;s talk
          </button>
        </div>
      )}

      {/* Hero content — no z-index so mix-blend-overlay on h1 blends with the photo */}
      <div className="relative flex-1 md:flex-none flex flex-col justify-between md:justify-start pb-6 md:pb-0">

        {/* Mobile: label + name stacked, description at bottom */}
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
            className="text-[96px] font-medium capitalize text-white text-center mix-blend-overlay leading-[0.8] w-full whitespace-pre-wrap"
            style={{ letterSpacing: '-0.07em' }}
          >
            {`Harvey   Specter`}
          </h1>
        </div>

        {/* Desktop: w-fit column — label anchored above H, description anchored below R */}
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
            <button className="self-start bg-black text-white text-[14px] font-medium tracking-[-0.035em] px-4 py-3 rounded-full">
              Let&apos;s talk
            </button>
          </div>
        </div>

        {/* Mobile: description + CTA at bottom */}
        <div className="md:hidden flex flex-col gap-[17px] w-[293px]">
          <p className="text-[14px] font-bold italic text-[#1f1f1f] tracking-[-0.035em] uppercase leading-[1.1]">
            H.Studio is a{' '}
            <span className="font-normal">full-service</span>
            {' '}creative studio creating beautiful digital experiences and products. We are an{' '}
            <span className="font-normal">award winning</span>
            {' '}desing and art group specializing in branding, web design and engineering.
          </p>
          <button className="self-start bg-black text-white text-[14px] font-medium tracking-[-0.035em] px-4 py-3 rounded-full">
            Let&apos;s talk
          </button>
        </div>

      </div>
    </section>
  )
}
