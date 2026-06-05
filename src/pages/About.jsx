import { Link } from 'react-router-dom'
import { useBooking } from '../context/BookingContext'

const values = [
  {
    title: 'Precision Craft',
    desc: 'Every cut is executed with care — sharp lines, clean fades, and expert technique on every visit.',
  },
  {
    title: 'Premium Experience',
    desc: 'From hot towel shaves to full grooming packages, we elevate every service to a luxury standard.',
  },
  {
    title: 'Personal Attention',
    desc: 'Every client gets our full focus. No rush, no shortcuts — just outstanding work and genuine care.',
  },
]

export default function About() {
  const { openBooking } = useBooking()

  return (
    <div className="pt-16 md:pt-20">

      <section className="py-20 px-4 bg-white border-b border-stone-200">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-black text-xs tracking-[0.2em] uppercase mb-3 font-sans">Our Story</p>
          <h1 className="text-4xl sm:text-5xl text-black tracking-tight mb-4">
            About Cutting Station
          </h1>
          <div className="w-10 h-px bg-[#8B5E3C] mx-auto mb-4" />
          <p className="text-black max-w-sm mx-auto text-sm leading-relaxed">
            A neighborhood barber shop serving Northport, Alabama with professional cuts, fades, and grooming services.
          </p>
        </div>
      </section>

      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl text-black tracking-tight mb-6 leading-tight">
              Your Barber Shop<br />in Northport, AL
            </h2>
            <div className="w-10 h-px bg-[#8B5E3C] mb-8" />
            <div className="space-y-4 text-black leading-relaxed text-sm">
              <p>
                Cutting Station is a professional barber shop located at 902 Main Ave in Northport, Alabama. We're your neighborhood spot for quality haircuts, sharp fades, beard trims, and grooming services — all at fair prices with a welcoming atmosphere.
              </p>
              <p>
                Our barbers are skilled and attentive, taking time to understand exactly what you want. Whether it's your first visit or you've been coming for years, every client gets the same professional treatment and care.
              </p>
              <p>
                We're proud to serve the Northport community. Stop by, give us a call, or book ahead — walk-ins are always welcome during shop hours.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-px bg-stone-200">
            {[
              { num: '4.7★', label: 'Google Rating' },
              { num: 'Tue–Sat', label: 'Open 5 days a week' },
              { num: '100%', label: 'Precision-focused service' },
              { num: 'AL', label: 'Proudly serving Northport' },
            ].map(({ num, label }) => (
              <div key={num} className="bg-white p-8 text-center">
                <div className="font-serif text-black text-3xl mb-2">{num}</div>
                <div className="text-black text-xs leading-relaxed font-sans">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-white border-t border-stone-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-black text-xs tracking-[0.2em] uppercase mb-3 font-sans">What We Stand For</p>
            <h2 className="text-3xl text-black tracking-tight">Our Values</h2>
            <div className="w-10 h-px bg-[#8B5E3C] mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-stone-200">
            {values.map((v) => (
              <div key={v.title} className="bg-white p-8">
                <h3 className="text-black text-base mb-3">{v.title}</h3>
                <p className="text-black text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-[#111111]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl text-white tracking-tight mb-4">Come See Us</h2>
          <p className="text-white mb-10 text-sm font-sans">
            902 Main Ave, Northport, AL — Tue–Thu 8AM–7PM · Fri 6:30AM–7PM · Sat 6AM–5PM.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openBooking}
              className="bg-white hover:bg-stone-100 text-black font-normal px-8 py-4 text-sm tracking-wide uppercase transition-colors"
            >
              Book Now
            </button>
            <Link
              to="/contact"
              className="border border-white/50 hover:border-white text-white font-normal px-8 py-4 text-sm tracking-wide uppercase transition-colors"
            >
              Get Directions
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
