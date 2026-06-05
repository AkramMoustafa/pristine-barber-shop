import { useState, useEffect, useCallback } from 'react'

export default function ShopGallery({ images = [] }) {
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const isOpen = lightboxIndex !== null
  const count = images.length

  const close = useCallback(() => setLightboxIndex(null), [])
  const prev = useCallback(() => setLightboxIndex(i => (i - 1 + count) % count), [count])
  const next = useCallback(() => setLightboxIndex(i => (i + 1) % count), [count])

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen, close, prev, next])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  if (!count) return null

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => setLightboxIndex(i)}
            className="relative overflow-hidden rounded-sm aspect-[4/3] group focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
            aria-label={`View gallery image ${i + 1} of ${count}`}
          >
            <img
              src={src}
              alt={`Cutting Station interior — photo ${i + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300 pointer-events-none" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <span className="w-10 h-10 border border-white/80 flex items-center justify-center text-white text-lg leading-none">
                +
              </span>
            </div>
          </button>
        ))}
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 p-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <div
            className="relative w-full max-w-4xl max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[lightboxIndex]}
              alt={`Cutting Station interior — photo ${lightboxIndex + 1}`}
              className="max-w-full max-h-[85vh] object-contain rounded-sm shadow-2xl"
            />

            <button
              onClick={close}
              aria-label="Close lightbox"
              className="absolute top-3 right-3 w-10 h-10 flex items-center justify-center bg-black/60 hover:bg-black text-white text-2xl leading-none transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              &times;
            </button>

            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-white/60 text-xs tracking-[0.15em] uppercase font-sans select-none">
              {lightboxIndex + 1} / {count}
            </div>

            {count > 1 && (
              <>
                <button
                  onClick={prev}
                  aria-label="Previous image"
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-black/50 hover:bg-black text-white text-lg transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  &#8592;
                </button>
                <button
                  onClick={next}
                  aria-label="Next image"
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-black/50 hover:bg-black text-white text-lg transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  &#8594;
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}
