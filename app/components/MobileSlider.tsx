'use client'

import { useRef, useState } from 'react'

export default function MobileSlider({ children, count }: { children: React.ReactNode; count: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  const onScroll = () => {
    if (!ref.current) return
    setActive(Math.round(ref.current.scrollLeft / ref.current.clientWidth))
  }

  return (
    <div className="flex flex-col gap-5">
      <div
        ref={ref}
        onScroll={onScroll}
        className="flex overflow-x-scroll snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none' }}
      >
        {children}
      </div>
      <div className="flex gap-2 justify-center">
        {Array.from({ length: count }).map((_, i) => (
          <button
            key={i}
            onClick={() => ref.current?.scrollTo({ left: i * ref.current!.clientWidth, behavior: 'smooth' })}
            className={`w-2 h-2 rounded-full transition-colors duration-200 ${i === active ? 'bg-black' : 'bg-black/20'}`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
