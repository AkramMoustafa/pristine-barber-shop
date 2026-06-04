import { useBooking } from '../context/BookingContext'

const categories = [
  {
    title: 'Cuts',
    items: [
      { name: 'Haircut', price: '$25', desc: 'Precision cut with clippers and/or shears, finished with a style.' },
      { name: 'Kids Haircut', price: '$18', desc: 'For kids 12 and under. Friendly, clean, and stress-free.' },
      { name: 'Line Up', price: '$15', desc: 'Sharp edge work on the hairline, temples, and neckline.' },
    ],
  },
  {
    title: 'Beard & Shave Services',
    items: [
      { name: 'Beard Trim', price: '$18', desc: 'Shape, line, and detail your beard for a polished, refined look.' },
      { name: 'Hot Towel Shave', price: '$35', desc: 'A classic luxury straight-razor shave with hot towel treatment for the ultimate close finish.' },
    ],
  },
  {
    title: 'Premium Packages',
    items: [
      { name: 'Premium Grooming', price: 'From $55', desc: 'The full Pristine experience — precision haircut, beard trim, and hot towel treatment combined.' },
    ],
  },
]

export default function Services() {
  const { openBooking } = useBooking()

  return (
    <div className="pt-16 md:pt-20">

      <section className="py-20 px-4 bg-white border-b border-stone-200">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-black text-xs tracking-[0.2em] uppercase mb-3 font-sans">Menu</p>
          <h1 className="text-4xl sm:text-5xl text-black tracking-tight mb-4">
            Services & Pricing
          </h1>
          <div className="w-10 h-px bg-[#8B5E3C] mx-auto mb-4" />
          <p className="text-black max-w-sm mx-auto text-sm leading-relaxed">
            Premium services, transparent pricing. Walk in or book ahead.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto space-y-16">
          {categories.map((cat) => (
            <div key={cat.title}>
              <div className="flex items-center gap-4 mb-6">
                <h2 className="text-xs tracking-[0.2em] uppercase font-sans font-normal text-black whitespace-nowrap">{cat.title}</h2>
                <div className="flex-1 h-px bg-stone-200" />
              </div>
              <div className="divide-y divide-stone-100">
                {cat.items.map((item) => (
                  <div key={item.name} className="flex items-center justify-between gap-6 py-5">
                    <div className="flex-1">
                      <div className="font-serif text-black text-lg mb-0.5">{item.name}</div>
                      <p className="text-black text-sm font-sans">{item.desc}</p>
                    </div>
                    <span className="text-black text-2xl tabular-nums font-sans">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="border border-stone-200 p-6 text-black text-sm space-y-2 font-sans">
            <p>Walk-ins welcome — or book ahead for guaranteed availability.</p>
            <p>Prices subject to change. Check our booking page for current pricing.</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-[#111111]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl text-white tracking-tight mb-4">Book Your Appointment</h2>
          <p className="text-white mb-8 text-sm font-sans">Mon – Fri 9 AM – 7 PM &nbsp;·&nbsp; Sat 9 AM – 5 PM &nbsp;·&nbsp; Sun 10 AM – 5 PM. Walk-ins always welcome.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openBooking}
              className="bg-white hover:bg-stone-100 text-black font-normal px-8 py-4 text-sm tracking-wide uppercase transition-colors"
            >
              Book Now
            </button>
            <a
              href="tel:+16464363213"
              className="border border-white/50 hover:border-white text-white font-normal px-8 py-4 text-sm tracking-wide uppercase transition-colors"
            >
              (646) 436-3213
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
