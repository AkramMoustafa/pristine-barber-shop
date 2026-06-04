import { useEffect } from 'react'
import { useBooking } from '../context/BookingContext'

export default function BookingModal() {
  const { open, closeBooking } = useBooking()

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') closeBooking() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [closeBooking])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Book an appointment"
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={closeBooking} />

      <div className="relative bg-white w-full max-w-md shadow-2xl">

        <button
          onClick={closeBooking}
          className="absolute top-4 right-4 text-black hover:opacity-60 transition-opacity text-lg leading-none font-sans font-normal"
          aria-label="Close"
        >
          ✕
        </button>

        <div className="border-b border-stone-200 px-8 py-6">
          <p className="text-black text-xs tracking-wider uppercase mb-1 font-sans">Pristine Barber Studio</p>
          <h2 className="text-2xl text-black">Book an Appointment</h2>
        </div>

        <div className="px-8 py-6 space-y-3">

          <a
            href="#"
            className="flex items-center justify-between w-full bg-[#8B5E3C] hover:bg-[#6F4E37] text-white px-6 py-4 transition-colors group"
          >
            <div>
              <p className="font-sans font-normal text-sm tracking-wide uppercase">Book Online</p>
              <p className="text-white/70 text-xs mt-0.5 font-sans">Choose your time on our booking page</p>
            </div>
            <span className="text-white/70 group-hover:text-white transition-colors text-lg">→</span>
          </a>

          <a
            href="tel:+16464363213"
            className="flex items-center justify-between w-full border border-stone-200 hover:border-[#8B5E3C] px-6 py-4 transition-colors"
          >
            <div>
              <p className="font-sans font-normal text-sm tracking-wide uppercase text-black">Call Us</p>
              <p className="text-black text-base mt-0.5 font-sans">(646) 436-3213</p>
            </div>
            <span className="text-2xl">📞</span>
          </a>

          <div className="border border-stone-100 bg-white px-6 py-4">
            <p className="font-sans font-normal text-sm text-black mb-1">Walk-ins Welcome</p>
            <p className="text-black text-xs leading-relaxed font-sans">
              36 Nathan Ln N, Plymouth, MN 55441
            </p>
          </div>
        </div>

        <div className="border-t border-stone-200 px-8 py-4 bg-white">
          <p className="text-black text-xs uppercase tracking-wider mb-2 font-sans">Hours</p>
          <div className="flex justify-between text-sm font-sans">
            <span className="text-black">Tue – Sat</span>
            <span className="text-black">10:00 AM – 6:00 PM</span>
          </div>
          <div className="flex justify-between text-sm mt-1 font-sans">
            <span className="text-black">Sun – Mon</span>
            <span className="text-black">Closed</span>
          </div>
        </div>
      </div>
    </div>
  )
}
