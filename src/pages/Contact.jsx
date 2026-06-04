import { useBooking } from '../context/BookingContext'

export default function Contact() {
  const { openBooking } = useBooking()

  return (
    <div className="pt-16 md:pt-20">

      <section className="py-20 px-4 bg-white border-b border-stone-200">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-black text-xs tracking-[0.2em] uppercase mb-3 font-sans">Find Us</p>
          <h1 className="text-4xl sm:text-5xl text-black tracking-tight mb-4">Contact</h1>
          <div className="w-10 h-px bg-[#8B5E3C] mx-auto mb-4" />
          <p className="text-black max-w-sm mx-auto text-sm leading-relaxed">
            Call us, stop in, or book online. We're here Mon–Sun, 9 AM to 7 PM.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

          <div className="space-y-4">
            <p className="text-black text-xs tracking-[0.2em] uppercase mb-6 font-sans">Get In Touch</p>

            <div className="border border-stone-200 p-6">
              <p className="text-black text-xs uppercase tracking-wider mb-2 font-sans">Phone</p>
              <a
                href="tel:+16464363213"
                className="text-black text-2xl hover:underline underline-offset-4 block mb-4 font-sans"
              >
                (646) 436-3213
              </a>
              <a
                href="tel:+16464363213"
                className="block w-full bg-[#8B5E3C] hover:bg-[#6F4E37] text-white font-normal text-sm py-3 text-center tracking-wide uppercase transition-colors"
              >
                Tap to Call
              </a>
            </div>

            <div className="border border-stone-200 p-6">
              <p className="text-black text-xs uppercase tracking-wider mb-2 font-sans">Address</p>
              <p className="text-black text-lg mb-0.5 font-serif">36 Nathan Ln N</p>
              <p className="text-black text-sm mb-4 font-sans">Plymouth, MN 55441</p>
              <a
                href="https://maps.google.com/?q=36+Nathan+Ln+N,+Plymouth,+MN+55441"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full border border-[#8B5E3C] hover:bg-[#8B5E3C] hover:text-white text-black font-normal text-sm py-3 text-center tracking-wide uppercase transition-colors"
              >
                Open in Maps
              </a>
            </div>

            <div className="border border-stone-200 p-6">
              <p className="text-black text-xs uppercase tracking-wider mb-4 font-sans">Hours</p>
              <div className="space-y-2 text-sm font-sans">
                {[
                  { day: 'Monday', hours: '9:00 AM – 7:00 PM', open: true },
                  { day: 'Tuesday', hours: '9:00 AM – 7:00 PM', open: true },
                  { day: 'Wednesday', hours: '9:00 AM – 7:00 PM', open: true },
                  { day: 'Thursday', hours: '9:00 AM – 7:00 PM', open: true },
                  { day: 'Friday', hours: '9:00 AM – 7:00 PM', open: true },
                  { day: 'Saturday', hours: '9:00 AM – 5:00 PM', open: true },
                  { day: 'Sunday', hours: '10:00 AM – 5:00 PM', open: true },
                ].map(({ day, hours, open }) => (
                  <div key={day} className="flex justify-between items-center">
                    <span className="text-black">{day}</span>
                    <span className="text-black">{hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-black text-xs tracking-[0.2em] uppercase font-sans">Location</p>
            <div className="border border-stone-200 overflow-hidden flex-1 min-h-[400px]">
              <iframe
                title="Pristine Barber Studio Location"
                src="https://maps.google.com/maps?q=36+Nathan+Ln+N,+Plymouth,+MN+55441&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ minHeight: '400px', border: 0, display: 'block' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-[#6F4E37]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl text-white tracking-tight mb-4">Book Your Next Appointment</h2>
          <p className="text-white mb-10 text-sm font-sans">
            Appointments available online. Walk-ins welcome during shop hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openBooking}
              className="bg-white hover:bg-stone-100 text-black font-normal px-8 py-4 text-sm tracking-wide uppercase transition-colors"
            >
              Book Online
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
