import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-stone-200 text-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[#8B5E3C] text-lg">✂</span>
              <span className="font-serif text-black font-normal text-lg tracking-normal">Pristine Barber Studio</span>
            </div>
            <p className="text-sm leading-relaxed text-black">
              A premium barbershop in Plymouth, Minnesota — delivering precision cuts, expert beard work, and elevated grooming experiences.
            </p>
          </div>

          <div>
            <h4 className="font-sans font-normal text-black text-xs tracking-wider uppercase mb-4">Hours</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between gap-4">
                <span>Monday – Friday</span>
                <span className="text-black">9:00 AM – 7:00 PM</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Saturday</span>
                <span className="text-black">9:00 AM – 5:00 PM</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Sunday</span>
                <span className="text-black">10:00 AM – 5:00 PM</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans font-normal text-black text-xs tracking-wider uppercase mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:+16464363213" className="hover:opacity-60 transition-opacity flex items-center gap-2">
                  <span>📞</span> (646) 436-3213
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span>36 Nathan Ln N<br />Plymouth, MN 55441</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-stone-200 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-black">
          <span>© {new Date().getFullYear()} Pristine Barber Studio. All rights reserved.</span>
          <div className="flex gap-6">
            <Link to="/" className="hover:opacity-60 transition-opacity">Home</Link>
            <Link to="/services" className="hover:opacity-60 transition-opacity">Services</Link>
            <Link to="/about" className="hover:opacity-60 transition-opacity">About</Link>
            <Link to="/contact" className="hover:opacity-60 transition-opacity">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
