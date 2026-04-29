const services = [
  {
    num: '[ 1 ]',
    title: 'Brand Discovery',
    description: 'Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.',
    image: 'https://www.figma.com/api/mcp/asset/26ebff88-076f-42f5-a729-d3c86719ca0d',
  },
  {
    num: '[ 2 ]',
    title: 'Web design & Dev',
    description: 'Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.',
    image: 'https://www.figma.com/api/mcp/asset/8c30488b-964f-4e0d-ba4e-5caeb4abecfc',
  },
  {
    num: '[ 3 ]',
    title: 'Marketing',
    description: 'Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.',
    image: 'https://www.figma.com/api/mcp/asset/47bc2d5f-e8e3-44f6-bf4d-c91b09604f13',
  },
  {
    num: '[ 4 ]',
    title: 'Photography',
    description: 'Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.',
    image: 'https://www.figma.com/api/mcp/asset/61b5960d-6bfe-4135-8d91-de6d426894bc',
  },
]

export default function Services() {
  return (
    <section className="bg-black px-4 md:px-8 py-12 md:py-20 flex flex-col gap-8 md:gap-12">

      {/* [ services ] */}
      <p
        className="text-[14px] text-white uppercase leading-[1.1] shrink-0"
        style={{ fontFamily: 'var(--font-geist-mono)' }}
      >
        [ services ]
      </p>

      {/* [4]  Deliverables */}
      <div
        className="flex items-center justify-between uppercase text-white font-light whitespace-nowrap shrink-0"
        style={{ fontSize: 'clamp(32px, 6.67vw, 96px)', letterSpacing: '-0.08em' }}
      >
        <span>[4]</span>
        <span>Deliverables</span>
      </div>

      {/* Service items */}
      <div className="flex flex-col gap-12">
        {services.map((service) => (
          <div key={service.num} className="flex flex-col gap-[9px]">

            {/* Number + rule */}
            <div className="flex flex-col gap-[9px]">
              <p
                className="text-[14px] text-white uppercase leading-[1.1]"
                style={{ fontFamily: 'var(--font-geist-mono)' }}
              >
                {service.num}
              </p>
              <div className="h-px w-full bg-white" />
            </div>

            {/* Desktop: title left, desc+image right */}
            <div className="hidden md:flex flex-wrap items-start justify-between">
              <p className="text-[36px] font-bold italic text-white leading-[1.1] uppercase whitespace-nowrap shrink-0" style={{ letterSpacing: '-0.04em' }}>
                {service.title}
              </p>
              <div className="flex gap-6 items-start shrink-0">
                <p className="text-[14px] text-white leading-[1.3] tracking-[-0.035em] w-[393px]">
                  {service.description}
                </p>
                <div className="size-[151px] shrink-0 overflow-hidden">
                  <img src={service.image} alt={service.title} className="size-full object-cover" />
                </div>
              </div>
            </div>

            {/* Mobile: stacked */}
            <div className="md:hidden flex flex-col gap-4">
              <p className="text-[36px] font-bold italic text-white leading-[1.1] uppercase whitespace-nowrap" style={{ letterSpacing: '-0.04em' }}>
                {service.title}
              </p>
              <p className="text-[14px] text-white leading-[1.3] tracking-[-0.035em]">
                {service.description}
              </p>
              <div className="size-[151px] overflow-hidden">
                <img src={service.image} alt={service.title} className="size-full object-cover" />
              </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  )
}
