const desktopImage = '/images/full-bleed.png'
const mobileImage = '/images/full-bleed.png'

export default function FullBleedPhoto() {
  return (
    <div data-nav-theme="dark" className="relative w-full h-[500px] md:h-[900px] overflow-hidden bg-black">
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
