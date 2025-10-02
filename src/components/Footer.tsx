import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaTiktok, FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-gray-100 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="h-8 w-8 rounded bg-emerald-600 inline-flex items-center justify-center text-white font-bold">Q</span>
              <div className="text-sm font-bold tracking-wide">Quickpulse Safaris</div>
            </div>
            <p className="text-sm text-gray-600">Where every journey comes alive. Tailor-made safaris, cultural immersions, and beach escapes across East Africa.</p>
            <div className="flex items-center gap-3 mt-4 text-gray-600">
              <a className="p-2 rounded hover:bg-gray-100" href="#" aria-label="Instagram"><FaInstagram /></a>
              <a className="p-2 rounded hover:bg-gray-100" href="#" aria-label="Facebook"><FaFacebookF /></a>
              <a className="p-2 rounded hover:bg-gray-100" href="#" aria-label="TikTok"><FaTiktok /></a>
              <a className="p-2 rounded hover:bg-gray-100" href="#" aria-label="Twitter/X"><FaXTwitter /></a>
            </div>
          </div>
          <div>
            <div className="font-semibold mb-3">Company</div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="/about" className="hover:text-gray-900">About</Link></li>
              <li><Link to="/destinations" className="hover:text-gray-900">Destinations</Link></li>
              <li><Link to="/experiences" className="hover:text-gray-900">Experiences</Link></li>
              <li><Link to="/contact" className="hover:text-gray-900">Contact</Link></li>
              <li><Link to="/tours" className="hover:text-gray-900">Tours</Link></li>
              <li><Link to="/gallery" className="hover:text-gray-900">Gallery</Link></li>
              <li><Link to="/faq" className="hover:text-gray-900">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-3">Services</div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Wildlife Safaris</li>
              <li>Cultural & Community Tours</li>
              <li>Trekking & Adventure</li>
              <li>Beach Escapes</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-3">Contact</div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Nairobi, Kenya</li>
              <li>info@quickpulse.africa</li>
              <li>+254 700 000 000</li>
              <li className="pt-2 text-gray-500">Policies: <Link to="/privacy" className="underline hover:text-gray-700">Privacy</Link> · <Link to="/terms" className="underline hover:text-gray-700">Terms</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 text-xs text-gray-500">© {new Date().getFullYear()} Quickpulse Safaris & Travel. All rights reserved.</div>
      </div>
    </footer>
  )
}

export default Footer


