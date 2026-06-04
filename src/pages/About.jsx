import { Link } from 'react-router-dom'
import { useBooking } from '../context/BookingContext'

const values = [
  {
    icon: '✂',
    title: 'Precision Craft',
    desc: 'Every cut is executed with care — sharp lines, clean fades, and expert technique on every visit.',
  },
  {
    icon: '◆',
    title: 'Premium Experience',
    desc: 'From hot towel shaves to full grooming packages, we elevate every service to a luxury standard.',
  },
  {
    icon: '◇',
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
            About Pristine Barber Studio
          </h1>
          <div className="w-10 h-px bg-[#8B5E3C] mx-auto mb-4" />
          <p className="text-black max-w-sm mx-auto text-sm leading-relaxed">
            A modern premium barbershop serving Plymouth, Minnesota with elevated grooming and precision technique.
          </p>
        </div>
      </section>

      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl text-black tracking-tight mb-6 leading-tight">
              Elevated Grooming<br />in Plymouth, MN
            </h2>
            <div className="w-10 h-px bg-[#8B5E3C] mb-8" />
            <div className="space-y-4 text-black leading-relaxed text-sm">
              <p>
                Pristine Barber Studio is a professional barbershop located at 36 Nathan Ln N in Plymouth, Minnesota. We are dedicated to providing an elevated grooming experience that combines precision technique with a welcoming, modern atmosphere.
              </p>
              <p>
                We offer a full range of men's grooming services — precision haircuts, crisp line ups, beard trims, classic hot towel shaves, and premium grooming packages — all delivered with attention to detail and a commitment to excellence.
              </p>
              <p>
                Whether you're stopping in for a quick line up or treating yourself to our full Premium Grooming experience, every visit at Pristine is about leaving the chair looking and feeling your absolute best.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-px bg-stone-200">
            {[
              { num: 'Premium', label: 'Grooming studio' },
              { num: 'Mon–Sun', label: 'Open 7 days a week' },
              { num: '100%', label: 'Precision-focused experience' },
              { num: 'MN', label: 'Proudly serving Plymouth' },
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
                <div className="text-2xl mb-4 text-black">{v.icon}</div>
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
            36 Nathan Ln N, Plymouth, MN — Monday through Sunday, 9 AM to 7 PM.
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
