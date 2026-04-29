const projects = [
  {
    title: 'Surfers paradise',
    tags: ['Social Media', 'Photography'],
    image: 'https://www.figma.com/api/mcp/asset/3c9ee37d-bb78-4ec6-8293-edad92739101',
    desktopHeight: 744,
  },
  {
    title: 'Cyberpunk caffe',
    tags: ['Social Media', 'Photography'],
    image: 'https://www.figma.com/api/mcp/asset/dd791977-8a30-4726-b603-55337855ef10',
    desktopHeight: 699,
  },
  {
    title: 'Agency 976',
    tags: ['Social Media', 'Photography'],
    image: 'https://www.figma.com/api/mcp/asset/4db16df8-cf45-42a2-8536-5bf32947c337',
    desktopHeight: 699,
  },
  {
    title: 'Minimal Playground',
    tags: ['Social Media', 'Photography'],
    image: 'https://www.figma.com/api/mcp/asset/ffcc6e0c-d800-4dd8-a94a-587a12e9314b',
    desktopHeight: 744,
  },
]

function ArrowIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="shrink-0">
      <circle cx="16" cy="16" r="15" stroke="black" strokeWidth="1" />
      <path d="M11 21L21 11M13 11H21V19" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function TagPill({ label }: { label: string }) {
  return (
    <span
      className="backdrop-blur-[10px] bg-[rgba(255,255,255,0.3)] px-2 py-1 rounded-full text-[14px] font-medium text-[#111] tracking-[-0.035em] whitespace-nowrap"
    >
      {label}
    </span>
  )
}

function Corner({ className }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={`shrink-0 ${className ?? ''}`}>
      <path d="M1 15L1 1L15 1" stroke="#1f1f1f" strokeWidth="1" strokeLinecap="square" />
    </svg>
  )
}

function ProjectCard({ title, tags, image, height }: {
  title: string
  tags: string[]
  image: string
  height?: number
}) {
  return (
    <div className="flex flex-col gap-[10px]">
      <div
        className="relative overflow-hidden w-full"
        style={height ? { height } : undefined}
      >
        <img
          src={image}
          alt={title}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute bottom-4 left-4 flex gap-3">
          {tags.map(tag => <TagPill key={tag} label={tag} />)}
        </div>
      </div>
      <div className="flex items-center justify-between">
        <p className="font-black text-black leading-[1.1] uppercase whitespace-nowrap text-[24px] md:text-[36px]" style={{ letterSpacing: '-0.04em' }}>
          {title}
        </p>
        <ArrowIcon />
      </div>
    </div>
  )
}

function BracketedCta() {
  return (
    <div className="flex items-center gap-3">
      <div className="self-stretch flex flex-col justify-between w-6 shrink-0">
        <Corner />
        <Corner className="-rotate-90" />
      </div>
      <div className="flex-1 flex flex-col gap-[10px] py-3">
        <p className="italic text-[14px] text-[#1f1f1f] leading-[1.3] tracking-[-0.035em]">
          Discover how my creativity transforms ideas into impactful digital experiences — schedule a call with me to get started.
        </p>
        <button className="self-start bg-black text-white text-[14px] font-medium tracking-[-0.035em] px-4 py-3 rounded-full">
          Let&apos;s talk
        </button>
      </div>
      <div className="self-stretch flex flex-col justify-between w-6 shrink-0">
        <Corner className="rotate-90" />
        <Corner className="rotate-180" />
      </div>
    </div>
  )
}

export default function Portfolio() {
  return (
    <section className="px-4 md:px-8 py-12 md:py-20">

      {/* ── Mobile ── */}
      <div className="md:hidden flex flex-col gap-8">
        {/* Header */}
        <div className="flex flex-col gap-4 uppercase">
          <p className="text-[14px] text-[#1f1f1f] leading-[1.1]" style={{ fontFamily: 'var(--font-geist-mono)' }}>
            [ portfolio ]
          </p>
          <div className="flex items-start justify-between">
            <div className="font-light text-black leading-[0.86]" style={{ fontSize: 32, letterSpacing: '-0.08em' }}>
              <p>Selected</p>
              <p>Work</p>
            </div>
            <p className="text-[14px] text-[#1f1f1f] leading-[1.1]" style={{ fontFamily: 'var(--font-geist-mono)' }}>
              004
            </p>
          </div>
        </div>

        {/* Cards */}
        {projects.map(p => (
          <ProjectCard key={p.title} title={p.title} tags={p.tags} image={p.image} height={390} />
        ))}

        {/* CTA */}
        <BracketedCta />
      </div>

      {/* ── Desktop ── */}
      <div className="hidden md:flex flex-col gap-[61px]">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex gap-[10px] items-start uppercase whitespace-nowrap">
            <div
              className="font-light text-black leading-[0.86]"
              style={{ fontSize: 96, letterSpacing: '-0.08em' }}
            >
              <p className="mb-0">Selected</p>
              <p>Work</p>
            </div>
            <p className="text-[14px] text-[#1f1f1f] leading-[1.1] pt-1" style={{ fontFamily: 'var(--font-geist-mono)' }}>
              004
            </p>
          </div>
          {/* [ portfolio ] rotated */}
          <div className="h-[110px] w-[15px] flex items-center justify-center shrink-0">
            <p
              className="-rotate-90 whitespace-nowrap text-[14px] text-[#1f1f1f] uppercase leading-[1.1]"
              style={{ fontFamily: 'var(--font-geist-mono)' }}
            >
              [ portfolio ]
            </p>
          </div>
        </div>

        {/* Two-column grid */}
        <div className="flex gap-6 items-end">

          {/* Left column: self-stretch so it fills the full row height, justify-between distributes cards top→bottom */}
          <div className="flex-1 self-stretch flex flex-col justify-between">
            <ProjectCard title={projects[0].title} tags={projects[0].tags} image={projects[0].image} height={projects[0].desktopHeight} />
            <ProjectCard title={projects[1].title} tags={projects[1].tags} image={projects[1].image} height={projects[1].desktopHeight} />
            <div className="w-[465px]">
              <BracketedCta />
            </div>
          </div>

          {/* Right column: starts 240px down, gap-[117px] between cards */}
          <div className="flex-1 flex flex-col gap-[117px] pt-[240px]">
            <ProjectCard title={projects[2].title} tags={projects[2].tags} image={projects[2].image} height={projects[2].desktopHeight} />
            <ProjectCard title={projects[3].title} tags={projects[3].tags} image={projects[3].image} height={projects[3].desktopHeight} />
          </div>

        </div>
      </div>

    </section>
  )
}
