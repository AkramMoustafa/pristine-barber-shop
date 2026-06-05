import { useState, useEffect, useCallback } from 'react'

/**
 * HeroCarousel
 *
 * Props:
 *   images — array of image src strings (URLs or imported assets)
 *
 * To swap images for a new barbershop, just change the array passed from Home.jsx.
 */
export default function HeroCarousel({ images = [] }) {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const count = images.length

  const next = useCallback(() => {
    setCurrent(i => (i + 1) % count)
  }, [count])

  const prev = useCallback(() => {
    setCurrent(i => (i - 1 + count) % count)
  }, [count])

  useEffect(() => {
    if (paused || count <= 1) return
    const id = setInterval(next, 4000)
    return () => clearInterval(id)
  }, [paused, next, count])

  if (!count) return null

  return (
    <div
      className="relative w-full h-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {images.map((src, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-700 ease-in-out"
          style={{ opacity: i === current ? 1 : 0 }}
          aria-hidden={i !== current}
        >
          <img
            src={src}
            alt={`Cutting Station — slide ${i + 1}`}
            className="w-full h-full object-cover"
            loading={i === 0 ? 'eager' : 'lazy'}
            decoding="async"
          />
          {/* Subtle dark overlay so overlaid text stays readable */}
          <div className="absolute inset-0 bg-black/25 pointer-events-none" />
        </div>
      ))}

      {count > 1 && (
        <>
          {/* Prev arrow */}
          <button
            onClick={prev}
            aria-label="Previous slide"
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-black/40 hover:bg-black/65 text-white text-lg transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            &#8592;
          </button>

          {/* Next arrow */}
          <button
            onClick={next}
            aria-label="Next slide"
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-black/40 hover:bg-black/65 text-white text-lg transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            &#8594;
          </button>

          {/* Navigation dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                  i === current
                    ? 'w-5 h-1.5 bg-white'
                    : 'w-1.5 h-1.5 bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
