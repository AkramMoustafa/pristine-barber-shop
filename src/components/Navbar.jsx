
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useBooking } from '../context/BookingContext'

const links = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const { openBooking } = useBooking()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm border-b border-stone-200 shadow-sm'
          : 'bg-white border-b border-stone-200'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          <Link to="/" className="flex items-center gap-3 group">
            <span className="text-black text-xl transition-colors duration-200 group-hover:text-[#6F4E37]">
              ✂
            </span>

            <div className="leading-tight">
              <div className="font-serif text-black font-normal text-lg tracking-normal">
                Pristine Barber Studio
              </div>

              <div className="text-black text-xs tracking-wide uppercase font-sans font-normal">
                Plymouth, MN
              </div>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`text-sm tracking-wide uppercase font-normal transition-colors duration-200 ${
                  location.pathname === to
                    ? 'text-black border-b border-black pb-0.5'
                    : 'text-black hover:opacity-60'
                }`}
              >
                {label}
              </Link>
            ))}

            <button
              onClick={openBooking}
              className="ml-2 bg-[#8B5E3C] hover:bg-[#6F4E37] text-white font-normal text-sm px-5 py-2 transition-colors duration-200 tracking-wide uppercase"
            >
              Book Now
            </button>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-black p-2"
            aria-label="Toggle menu"
          >
            <div className="w-6 space-y-1.5">
              <span
                className={`block h-0.5 bg-black transition-all duration-300 ${
                  open ? 'rotate-45 translate-y-2' : ''
                }`}
              />

              <span
                className={`block h-0.5 bg-black transition-all duration-300 ${
                  open ? 'opacity-0' : ''
                }`}
              />

              <span
                className={`block h-0.5 bg-black transition-all duration-300 ${
                  open ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>

        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 bg-white' : 'max-h-0'
        }`}
      >
        <div className="px-6 py-4 space-y-4 border-t border-stone-200">

          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`block text-sm tracking-wide uppercase font-normal py-1 transition-colors ${
                location.pathname === to
                  ? 'text-black'
                  : 'text-black hover:opacity-60'
              }`}
            >
              {label}
            </Link>
          ))}

          <button
            onClick={openBooking}
            className="block w-full bg-[#8B5E3C] hover:bg-[#6F4E37] text-white font-normal text-sm px-5 py-3 text-center tracking-wide uppercase mt-2 transition-colors"
          >
            Book Now
          </button>

        </div>
      </div>
    </nav>
  )
}
