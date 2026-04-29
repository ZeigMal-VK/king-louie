const desktopImage = 'https://www.figma.com/api/mcp/asset/a0b95547-00ea-4ec3-bd7f-f3dd03ab553b'
const mobileImage = 'https://www.figma.com/api/mcp/asset/80b353fb-3e2e-4a6a-8c30-c38043f23068'

export default function FullBleedPhoto() {
  return (
    <div className="relative w-full h-[500px] md:h-[900px] overflow-hidden">
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
