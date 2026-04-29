const posts = [
  {
    image: 'https://www.figma.com/api/mcp/asset/ac63f734-8fbe-4c9e-a1c0-7a46ff273ffa',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    image: 'https://www.figma.com/api/mcp/asset/1d09cdf6-da2e-450b-8509-f28b1b26a767',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    image: 'https://www.figma.com/api/mcp/asset/e3b0b734-b6db-4bbd-905a-addc87267596',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
]

function ReadMoreLink() {
  return (
    <a href="#" className="flex items-center gap-[10px] border-b border-black pb-1 self-start shrink-0">
      <span className="text-[14px] font-medium text-black whitespace-nowrap" style={{ letterSpacing: '-0.04em' }}>
        Read more
      </span>
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path d="M3.5 14.5L14.5 3.5M14.5 3.5H8M14.5 3.5V10" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  )
}

export default function NewsAchievements() {
  return (
    <section className="bg-[#f3f3f3]">

      {/* ── Desktop ── */}
      <div className="hidden md:flex items-end justify-between px-8 py-[120px]">

        {/* Rotated vertical title */}
        <div className="w-[110px] h-[706px] flex items-center justify-center shrink-0">
          <h2
            className="-rotate-90 font-light text-black uppercase"
            style={{ fontSize: 64, letterSpacing: '-5.12px', lineHeight: 0.86 }}
          >
            <span className="block whitespace-nowrap">Keep up with my latest</span>
            <span className="block whitespace-nowrap">news &amp; achievements</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="flex items-start">

          <div className="flex flex-col gap-4 w-[353px] h-[581px] shrink-0">
            <div className="relative h-[469px] w-full shrink-0 overflow-hidden">
              <img src={posts[0].image} alt="" className="absolute inset-0 size-full object-cover pointer-events-none select-none" />
            </div>
            <p className="text-[14px] text-[#1f1f1f] leading-[1.3] flex-1" style={{ letterSpacing: '-0.04em' }}>{posts[0].text}</p>
            <ReadMoreLink />
          </div>

          <div className="w-px self-stretch bg-black/10 mx-8" />

          <div className="flex flex-col gap-4 w-[353px] pt-[120px] shrink-0">
            <div className="relative h-[469px] w-full shrink-0 overflow-hidden">
              <img src={posts[1].image} alt="" className="absolute inset-0 size-full object-cover pointer-events-none select-none" />
            </div>
            <p className="text-[14px] text-[#1f1f1f] leading-[1.3]" style={{ letterSpacing: '-0.04em' }}>{posts[1].text}</p>
            <ReadMoreLink />
          </div>

          <div className="w-px self-stretch bg-black/10 mx-8" />

          <div className="flex flex-col gap-4 w-[353px] h-[581px] shrink-0">
            <div className="relative h-[469px] w-full shrink-0 overflow-hidden">
              <img src={posts[2].image} alt="" className="absolute inset-0 size-full object-cover pointer-events-none select-none" />
            </div>
            <p className="text-[14px] text-[#1f1f1f] leading-[1.3] flex-1" style={{ letterSpacing: '-0.04em' }}>{posts[2].text}</p>
            <ReadMoreLink />
          </div>

        </div>
      </div>

      {/* ── Mobile ── */}
      <div className="md:hidden px-4 py-16 flex flex-col gap-8">
        <h2
          className="font-light text-black uppercase"
          style={{ fontSize: 32, letterSpacing: '-2.56px', lineHeight: 0.86 }}
        >
          Keep up with my latest news &amp; achievements
        </h2>
        <div className="flex gap-4 overflow-x-auto -mx-4 px-4 pb-2">
          {posts.map((post, i) => (
            <div key={i} className="flex flex-col gap-4 w-[300px] shrink-0">
              <div className="relative h-[398px] w-[300px] shrink-0 overflow-hidden">
                <img src={post.image} alt="" className="absolute inset-0 size-full object-cover pointer-events-none select-none" />
              </div>
              <p className="text-[14px] text-[#1f1f1f] leading-[1.3]" style={{ letterSpacing: '-0.04em' }}>{post.text}</p>
              <ReadMoreLink />
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}
