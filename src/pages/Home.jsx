import { Link } from 'react-router-dom'
import { useBooking } from '../context/BookingContext'
import ShopGallery from '../components/ShopGallery'
import heroPng from '../assets/hero.png'

const galleryImages = [
  '/gallery-1.png',
  '/gallery-2.png',
  '/gallery-3.png',
  '/gallery-4.png',
  '/gallery-5.jpg',
  '/barber.png',
]

const services = [
  { name: 'Haircut', price: '$25', desc: 'Precision cut with clippers and shears, finished to perfection.' },
  { name: 'Beard Trim', price: '$18', desc: 'Shape, define, and detail your beard for a polished look.' },
  { name: 'Hot Towel Shave', price: '$35', desc: 'A classic luxury shave with hot towel treatment.' },
  { name: 'Kids Haircut', price: '$18', desc: 'Clean, friendly cuts for the little ones, 12 and under.' },
  { name: 'Line Up', price: '$15', desc: 'Crisp edge work on hairline, temples, and neckline.' },
  { name: 'Premium Grooming', price: 'From $55', desc: 'Full-service package: cut, beard, and hot towel treatment.' },
]

export default function Home() {
  const { openBooking } = useBooking()

  return (
    <div>
      {/* Hero */}
      <section className="min-h-screen flex flex-col md:flex-row pt-16 md:pt-20">
        <div className="flex-1 flex items-center justify-center bg-white px-8 py-16 md:py-0">
          <div className="max-w-md w-full">
            <p className="text-black text-xs tracking-[0.2em] uppercase mb-6 font-sans">
              Northport, Alabama
            </p>
            <h1 className="text-6xl sm:text-7xl text-black leading-none tracking-tight mb-6">
              Classic<br />Cuts.<br />Modern<br />Style.
            </h1>
            <div className="w-12 h-px bg-[#8B5E3C] mb-6" />
            <p className="text-base text-black mb-10 leading-relaxed">
              Serving Northport, Alabama with professional haircuts, fades, beard trims, and grooming services.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={openBooking}
                className="bg-[#8B5E3C] hover:bg-[#000000] text-white font-normal px-8 py-4 text-sm tracking-wide uppercase transition-colors duration-200"
              >
                Book Your Appointment
              </button>
              <a
                href="tel:+12053318778"
                className="border border-[#8B5E3C] hover:bg-[#8B5E3C] hover:text-white text-black font-normal px-8 py-4 text-sm tracking-wide uppercase transition-colors duration-200 text-center"
              >
                Call (205) 331-8778
              </a>
            </div>
          </div>
        </div>

        <div className="flex-1 min-h-[50vh] md:min-h-0 overflow-hidden">
          <img
            src="/barber.png"
            alt="Cutting Station — Northport, AL"
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
          />
        </div>
      </section>

      {/* Hours Banner */}
      <section className="bg-[#111111] text-white py-4 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-6 text-sm text-center font-sans">
          <span>Tue – Thu &nbsp;·&nbsp; 8:00 AM – 7:00 PM</span>
          <span className="hidden sm:block text-white/40">|</span>
          <span>Fri &nbsp;·&nbsp; 6:30 AM – 7:00 PM</span>
          <span className="hidden sm:block text-white/40">|</span>
          <span>Sat &nbsp;·&nbsp; 6:00 AM – 5:00 PM</span>
          <span className="hidden sm:block text-white/40">|</span>
          <span>Mon &amp; Sun &nbsp;·&nbsp; Closed</span>
          <span className="hidden sm:block text-white/40">|</span>
          <a href="tel:+12053318778" className="underline underline-offset-2 hover:no-underline text-white">
            (205) 331-8778
          </a>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-black text-xs tracking-[0.2em] uppercase mb-3 font-sans">Menu</p>
            <h2 className="text-3xl sm:text-4xl text-black tracking-tight">Services & Pricing</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-100">
            {services.map((s) => (
              <div key={s.name} className="bg-white p-8 hover:bg-stone-50 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-black text-lg">{s.name}</h3>
                  <span className="text-black text-lg font-sans">{s.price}</span>
                </div>
                <p className="text-black text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
            <div className="bg-[#8B5E3C] p-8 flex flex-col justify-center items-center text-center sm:col-span-2 lg:col-span-1">
              <p className="text-white mb-4 text-sm tracking-wide font-sans">Ready for a fresh look?</p>
              <button
                onClick={openBooking}
                className="border border-white hover:bg-white hover:text-black text-white font-normal px-6 py-3 text-sm tracking-wide uppercase transition-colors"
              >
                Book Now
              </button>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link to="/services" className="text-black text-sm tracking-wide uppercase font-normal underline underline-offset-4 hover:no-underline">
              View Full Menu →
            </Link>
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-black text-xs tracking-[0.2em] uppercase mb-4 font-sans">Our Story</p>
            <h2 className="text-3xl sm:text-4xl text-black tracking-tight mb-6 leading-tight">
              Quality Cuts<br />for Northport, AL
            </h2>
            <div className="w-10 h-px bg-[#8B5E3C] mb-6" />
            <p className="text-black leading-relaxed mb-4 text-sm">
              Cutting Station is Northport's trusted neighborhood barber shop, right on Main Ave. Our barbers take pride in every cut — whether you're coming in for a quick edge-up or a full grooming session, you'll leave looking your best.
            </p>
            <p className="text-black leading-relaxed mb-8 text-sm">
              We offer professional haircuts, clean fades, beard trims, and more — all delivered with the attention and care the Northport community deserves.
            </p>
            <Link
              to="/about"
              className="inline-block border border-[#8B5E3C] text-black hover:bg-[#8B5E3C] hover:text-white font-normal px-6 py-3 text-sm tracking-wide uppercase transition-colors duration-200"
            >
              Learn More
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { num: '4.7★', label: 'Google Rating' },
              { num: 'Tue–Sat', label: 'Open 5 days a week' },
              { num: '100%', label: 'Precision craft' },
              { num: 'AL', label: 'Northport' },
            ].map(({ num, label }) => (
              <div key={num} className="border border-stone-200 p-6 text-center">
                <div className="font-serif text-black text-2xl mb-1">{num}</div>
                <div className="text-black text-xs leading-relaxed font-sans">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop Gallery */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-black text-xs tracking-[0.2em] uppercase mb-3 font-sans">Our Space</p>
            <h2 className="text-3xl sm:text-4xl text-black tracking-tight">Inside Cutting Station</h2>
            <div className="w-10 h-px bg-[#8B5E3C] mx-auto mt-6 mb-6" />
            <p className="text-black max-w-lg mx-auto text-sm leading-relaxed">
              Take a look inside our modern barber studio and see the environment where we deliver premium grooming services.
            </p>
          </div>
          <ShopGallery images={galleryImages} />
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-24 px-4 bg-[#111111]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-white text-xs tracking-[0.2em] uppercase mb-4 font-sans">Get Started</p>
          <h2 className="text-3xl sm:text-4xl text-white tracking-tight mb-4">
            Ready for Your Best Look?
          </h2>
          <div className="w-10 h-px bg-white/30 mx-auto mb-6" />
          <p className="text-white mb-10 max-w-md mx-auto text-sm">
            Book online or give us a call — we'd love to see you in the chair.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openBooking}
              className="bg-white hover:bg-stone-100 text-black font-normal px-8 py-4 text-sm tracking-wide uppercase transition-colors"
            >
              Book Online
            </button>
            <a
              href="tel:+12053318778"
              className="border border-white/50 hover:border-white text-white font-normal px-8 py-4 text-sm tracking-wide uppercase transition-colors"
            >
              (205) 331-8778
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
