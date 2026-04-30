'use client'

import { useRef } from 'react'
import gsap from 'gsap'

function FooterButton({ children }: { children: React.ReactNode }) {
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
      className="relative overflow-hidden self-start border border-white text-white text-[14px] font-medium px-4 py-3 rounded-full whitespace-nowrap"
      style={{ letterSpacing: '-0.04em' }}
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

export default function Footer() {
  return (
    <footer className="bg-black">

      {/* ── Desktop ── */}
      <div className="hidden md:flex flex-col pt-12 px-8">

        {/* Top row: CTA | socials center | socials right */}
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-3 w-[298px]">
            <p
              className="font-light italic text-white uppercase text-[24px]"
              style={{ letterSpacing: '-0.04em', lineHeight: 1.1 }}
            >
              Have a <span className="font-black not-italic">project</span> in mind?
            </p>
            <FooterButton>Let&apos;s talk</FooterButton>
          </div>

          <div
            className="text-center text-white text-[18px] uppercase w-[298px]"
            style={{ letterSpacing: '-0.04em', lineHeight: 1.1 }}
          >
            <p>Facebook</p>
            <p>Instagram</p>
          </div>

          <div
            className="text-right text-white text-[18px] uppercase w-[298px]"
            style={{ letterSpacing: '-0.04em', lineHeight: 1.1 }}
          >
            <p>x.com</p>
            <p>Linkedin</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 mt-12 mb-[120px]" />

        {/* Bottom row: wordmark | links */}
        <div className="flex items-end justify-between">
          <div className="relative h-[219px] overflow-hidden flex-1">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[15px] h-[160px] flex items-center justify-center">
              <p
                className="-rotate-90 whitespace-nowrap text-white uppercase text-[14px]"
                style={{ fontFamily: 'var(--font-geist-mono)', lineHeight: 1.1 }}
              >
                [ Coded By Claude ]
              </p>
            </div>
            <p
              className="absolute top-1/2 -translate-y-1/2 text-white font-semibold capitalize whitespace-nowrap select-none"
              style={{ fontSize: 290, letterSpacing: '-17.4px', lineHeight: 0.8 }}
            >
              H.Studio
            </p>
          </div>

          <div
            className="flex items-center gap-[34px] pb-8 text-white text-[12px] uppercase shrink-0"
            style={{ letterSpacing: '-0.04em', lineHeight: 1.1 }}
          >
            <a href="#" className="underline whitespace-nowrap">licences</a>
            <a href="#" className="underline whitespace-nowrap">Privacy policy</a>
          </div>
        </div>
      </div>

      {/* ── Mobile ── */}
      <div className="md:hidden flex flex-col gap-6 pt-12 px-4">

        {/* CTA + socials */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-3">
            <p
              className="font-light italic text-white uppercase text-[24px]"
              style={{ letterSpacing: '-0.04em', lineHeight: 1.1 }}
            >
              Have a <span className="font-black not-italic">project</span> in mind?
            </p>
            <FooterButton>Let&apos;s talk</FooterButton>
          </div>
          {['Facebook', 'Instagram', 'x.com', 'Linkedin'].map(s => (
            <p
              key={s}
              className="text-white text-[18px] uppercase"
              style={{ letterSpacing: '-0.04em', lineHeight: 1.1 }}
            >
              {s}
            </p>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/20" />

        {/* Footer links */}
        <div
          className="flex items-center gap-[34px] text-white text-[12px] uppercase"
          style={{ letterSpacing: '-0.04em', lineHeight: 1.1 }}
        >
          <a href="#" className="underline">licences</a>
          <a href="#" className="underline">Privacy policy</a>
        </div>

        {/* Wordmark */}
        <div className="overflow-hidden">
          <p
            className="text-white uppercase mb-3 text-[10px]"
            style={{ fontFamily: 'var(--font-geist-mono)', lineHeight: 1.1 }}
          >
            [ Coded By Claude ]
          </p>
          <p
            className="text-white font-semibold capitalize whitespace-nowrap select-none"
            style={{ fontSize: 91.425, letterSpacing: '-5.49px', lineHeight: 0.8 }}
          >
            H.Studio
          </p>
        </div>
      </div>

    </footer>
  )
}
