const portraitImage = 'https://www.figma.com/api/mcp/asset/5ee3f7e1-9f78-460f-b6d4-0890434d305e'

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
  return (
    <section className="px-4 md:px-8 py-12 md:py-20">

      {/* Mobile */}
      <div className="md:hidden flex flex-col gap-5">
        <p className="text-[14px] text-[#1f1f1f] uppercase leading-[1.1]" style={{ fontFamily: 'var(--font-geist-mono)' }}>
          002
        </p>
        <p className="text-[14px] text-[#1f1f1f] uppercase leading-[1.1]" style={{ fontFamily: 'var(--font-geist-mono)' }}>
          [ About ]
        </p>
        <BracketedText />
        <div className="w-full aspect-[422/594] overflow-hidden">
          <img src={portraitImage} alt="Portrait" className="size-full object-cover" />
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
          <div className="flex-1 min-w-0">
            <BracketedText />
          </div>

          {/* Image block */}
          <div className="flex gap-6 items-start shrink-0">
            <p className="text-[14px] text-[#1f1f1f] uppercase leading-[1.1]" style={{ fontFamily: 'var(--font-geist-mono)' }}>
              002
            </p>
            <div className="w-[436px] h-[614px] overflow-hidden shrink-0">
              <img src={portraitImage} alt="Portrait" className="size-full object-cover" />
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
