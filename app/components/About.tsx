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
  return (
    <section className="px-4 md:px-8 py-12 md:py-[120px]">

      {/* Label + rule */}
      <div className="flex flex-col gap-3 items-end mb-6">
        <p
          className="text-[14px] text-[#1f1f1f] uppercase text-right leading-[1.1]"
          style={{ fontFamily: 'var(--font-geist-mono)' }}
        >
          [ 8+ years in industry ]
        </p>
        <div className="w-full h-px bg-[#1f1f1f]" />
      </div>

      {/* Mobile: centered, 32px */}
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

      {/* Desktop: staggered 96px */}
      <div className="hidden md:flex flex-col gap-2">

        {/* Line 1 + 001 badge */}
        <div className="flex items-start gap-3">
          <p
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

        {/* Line 2: Photographer — indent 214px */}
        <div className="pl-[214px]">
          <p
            className="text-[96px] font-light text-black leading-[0.84] uppercase whitespace-nowrap"
            style={{ letterSpacing: '-0.08em' }}
          >
            Photographer
          </p>
        </div>

        {/* Line 3: Born & raised — indent 610px */}
        <div className="pl-[610px]">
          <p
            className="text-[96px] font-light text-black leading-[0.84] uppercase whitespace-nowrap"
            style={{ letterSpacing: '-0.08em' }}
          >
            Born <Amp /> raised
          </p>
        </div>

        {/* Line 4: on the south side — no indent */}
        <p
          className="text-[96px] font-light text-black leading-[0.84] uppercase whitespace-nowrap"
          style={{ letterSpacing: '-0.08em' }}
        >
          on the south side
        </p>

        {/* Line 5: of chicago. — indent 606px, with floating label */}
        <div className="relative pl-[606px]">
          <p
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
