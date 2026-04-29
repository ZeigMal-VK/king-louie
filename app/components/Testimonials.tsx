const cards = [
  {
    logo: 'https://www.figma.com/api/mcp/asset/9bc99238-6b2f-4f8c-aa03-3fc09239d041',
    logoW: 143, logoH: 19,
    quote: 'A brilliant creative partner who transformed our vision into a unique, high-impact brand identity. Their ability to craft everything from custom mascots to polished logos is truly impressive.',
    author: 'Marko Stojković',
    left: 60, top: 110, rotate: -6.85,
    mobileRotate: -3.5, showMobile: true,
  },
  {
    logo: 'https://www.figma.com/api/mcp/asset/f3d5c2f8-aec4-4b6a-a01d-76d9880b82f7',
    logoW: 138, logoH: 19,
    quote: 'Professional, precise, and incredibly fast at handling complex product visualizations and templates.',
    author: 'Lukas Weber',
    left: 776, top: 272, rotate: 2.9,
    mobileRotate: 0, showMobile: false,
  },
  {
    logo: 'https://www.figma.com/api/mcp/asset/c42631d1-486b-4951-a140-c002a3fc0b31',
    logoW: 109, logoH: 31,
    quote: "A strategic partner who balances stunning aesthetics with high-performance UX for complex platforms. They don't just make things look good; they solve business problems through visual clarity.",
    author: 'Sarah Jenkins',
    left: 405, top: 510, rotate: 2.23,
    mobileRotate: 0, showMobile: false,
  },
  {
    logo: 'https://www.figma.com/api/mcp/asset/4fb3ce13-f515-45d1-8bd2-37b0b4c5691d',
    logoW: 81, logoH: 36,
    quote: 'An incredibly versatile designer who delivers consistent quality across a wide range of styles and formats.',
    author: 'Sofia Martínez',
    left: 1040, top: 500, rotate: -4.15,
    mobileRotate: 2, showMobile: true,
  },
]

function TestimonialCard({ logo, logoW, logoH, quote, author, width = 353 }: {
  logo: string
  logoW: number
  logoH: number
  quote: string
  author: string
  width?: number
}) {
  return (
    <div
      className="bg-[#f1f1f1] border border-[#ddd] rounded-[4px] p-6 flex flex-col gap-4 shrink-0"
      style={{ width }}
    >
      <div className="relative shrink-0" style={{ width: logoW, height: logoH }}>
        <img src={logo} alt="" className="absolute inset-0 size-full object-contain object-left" />
      </div>
      <p className="text-[18px] text-[#1f1f1f] leading-[1.3]" style={{ letterSpacing: '-0.04em' }}>
        {quote}
      </p>
      <p className="text-[16px] font-black text-black uppercase leading-[1.1]" style={{ letterSpacing: '-0.04em' }}>
        {author}
      </p>
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="bg-[#f5f5f5]">

      {/* ── Desktop ── */}
      <div className="hidden md:block overflow-hidden">
      <div className="relative h-[900px] max-w-[1440px] mx-auto">
        {/* Lukas — behind the heading */}
        {cards.filter(c => c.author === 'Lukas Weber').map(c => (
          <div
            key={c.author}
            className="absolute"
            style={{ left: c.left, top: c.top, transform: `rotate(${c.rotate}deg)`, zIndex: 0 }}
          >
            <TestimonialCard logo={c.logo} logoW={c.logoW} logoH={c.logoH} quote={c.quote} author={c.author} />
          </div>
        ))}

        {/* Heading — above Lukas, below the remaining three cards */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ zIndex: 1 }}>
          <p
            className="font-medium text-black text-center capitalize"
            style={{ fontSize: 198, letterSpacing: '-0.07em', lineHeight: 1.1 }}
          >
            Testimonials
          </p>
        </div>

        {/* Marko, Sarah, Sofia — on top of heading */}
        {cards.filter(c => c.author !== 'Lukas Weber').map(c => (
          <div
            key={c.author}
            className="absolute"
            style={{ left: c.left, top: c.top, transform: `rotate(${c.rotate}deg)`, zIndex: 2 }}
          >
            <TestimonialCard logo={c.logo} logoW={c.logoW} logoH={c.logoH} quote={c.quote} author={c.author} />
          </div>
        ))}
      </div>
      </div>

      {/* ── Mobile ── */}
      <div className="md:hidden py-16 overflow-hidden flex flex-col gap-8">
        <p
          className="font-medium text-black text-center capitalize px-4"
          style={{ fontSize: 64, letterSpacing: '-0.07em', lineHeight: 0.8 }}
        >
          Testimonials
        </p>

        {/* Two rotated cards, slightly overlapping, second peeks at edge */}
        <div className="flex pl-4">
          {cards
            .filter(c => c.showMobile)
            .map((c, i) => (
              <div
                key={c.author}
                className="flex items-center justify-center shrink-0"
                style={{
                  width: 268,
                  marginRight: i === 0 ? -10 : 0,
                }}
              >
                <div style={{ transform: `rotate(${c.mobileRotate}deg)` }}>
                  <TestimonialCard
                    logo={c.logo}
                    logoW={c.logoW}
                    logoH={c.logoH}
                    quote={c.quote}
                    author={c.author}
                    width={260}
                  />
                </div>
              </div>
            ))}
        </div>
      </div>

    </section>
  )
}
