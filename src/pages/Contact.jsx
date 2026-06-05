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
            Call us, stop in, or book online. Open Tue–Sat — walk-ins always welcome.
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
                href="tel:+12053318778"
                className="text-black text-2xl hover:underline underline-offset-4 block mb-4 font-sans"
              >
                (205) 331-8778
              </a>
              <a
                href="tel:+12053318778"
                className="block w-full bg-[#8B5E3C] hover:bg-[#000000] text-white font-normal text-sm py-3 text-center tracking-wide uppercase transition-colors"
              >
                Tap to Call
              </a>
            </div>

            <div className="border border-stone-200 p-6">
              <p className="text-black text-xs uppercase tracking-wider mb-2 font-sans">Address</p>
              <p className="text-black text-lg mb-0.5 font-serif">902 Main Ave</p>
              <p className="text-black text-sm mb-4 font-sans">Northport, AL 35476</p>
              <a
                href="https://maps.google.com/?q=902+Main+Ave,+Northport,+AL+35476"
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
                  { day: 'Monday', hours: 'Closed' },
                  { day: 'Tuesday', hours: '8:00 AM – 7:00 PM' },
                  { day: 'Wednesday', hours: '8:00 AM – 7:00 PM' },
                  { day: 'Thursday', hours: '8:00 AM – 7:00 PM' },
                  { day: 'Friday', hours: '6:30 AM – 7:00 PM' },
                  { day: 'Saturday', hours: '6:00 AM – 5:00 PM' },
                  { day: 'Sunday', hours: 'Closed' },
                ].map(({ day, hours }) => (
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
                title="Cutting Station Location"
                src="https://maps.google.com/maps?q=902+Main+Ave,+Northport,+AL+35476&t=&z=15&ie=UTF8&iwloc=&output=embed"
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

      <section className="py-20 px-4 bg-[#111111]">
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
