import { sanityFetch } from '@/sanity/lib/live'
import { urlFor } from '@/sanity/lib/image'
import PortfolioCta from './PortfolioCta'

type PortfolioItem = {
  _id: string
  title: string
  tags: string[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image: any
  desktopHeight: number
  link?: string
}

const PORTFOLIO_QUERY = `*[_type == "portfolioItem"] | order(order asc) {
  _id,
  title,
  tags,
  image,
  desktopHeight,
  link
}`

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

function ProjectCard({ item, height }: { item: PortfolioItem; height?: number }) {
  const imageUrl = item.image ? urlFor(item.image).width(1200).url() : null

  const card = (
    <div className="flex flex-col gap-[10px]">
      <div
        className="relative overflow-hidden w-full bg-[#e8e8e8]"
        style={height ? { height } : undefined}
      >
        {imageUrl && (
          <img
            src={imageUrl}
            alt={item.title}
            className="absolute inset-0 size-full object-cover"
          />
        )}
        <div className="absolute bottom-4 left-4 flex gap-3">
          {item.tags?.map(tag => <TagPill key={tag} label={tag} />)}
        </div>
      </div>
      <div className="flex items-center justify-between">
        <p className="font-black text-black leading-[1.1] uppercase whitespace-nowrap text-[24px] md:text-[36px]" style={{ letterSpacing: '-0.04em' }}>
          {item.title}
        </p>
        <ArrowIcon />
      </div>
    </div>
  )

  if (item.link) {
    return (
      <a href={item.link} target="_blank" rel="noopener noreferrer">
        {card}
      </a>
    )
  }
  return card
}


export default async function Portfolio() {
  const { data } = await sanityFetch({ query: PORTFOLIO_QUERY })
  const projects = data as PortfolioItem[]

  if (!projects?.length) return null

  return (
    <section className="px-4 md:px-8 py-12 md:py-20">

      {/* ── Mobile ── */}
      <div className="md:hidden flex flex-col gap-8">
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
              {String(projects.length).padStart(3, '0')}
            </p>
          </div>
        </div>

        {projects.map((p: PortfolioItem) => (
          <ProjectCard key={p._id} item={p} height={390} />
        ))}

        <PortfolioCta />
      </div>

      {/* ── Desktop ── */}
      <div className="hidden md:flex flex-col gap-[61px]">
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
              {String(projects.length).padStart(3, '0')}
            </p>
          </div>
          <div className="h-[110px] w-[15px] flex items-center justify-center shrink-0">
            <p
              className="-rotate-90 whitespace-nowrap text-[14px] text-[#1f1f1f] uppercase leading-[1.1]"
              style={{ fontFamily: 'var(--font-geist-mono)' }}
            >
              [ portfolio ]
            </p>
          </div>
        </div>

        <div className="flex gap-6 items-end">
          <div className="flex-1 self-stretch flex flex-col justify-between">
            {projects[0] && <ProjectCard item={projects[0]} height={projects[0].desktopHeight} />}
            {projects[1] && <ProjectCard item={projects[1]} height={projects[1].desktopHeight} />}
            <div className="w-[465px]">
              <PortfolioCta />
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-[117px] pt-[240px]">
            {projects[2] && <ProjectCard item={projects[2]} height={projects[2].desktopHeight} />}
            {projects[3] && <ProjectCard item={projects[3]} height={projects[3].desktopHeight} />}
          </div>
        </div>
      </div>

    </section>
  )
}
