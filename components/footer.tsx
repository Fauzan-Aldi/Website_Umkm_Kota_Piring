import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">GOCARI</h3>
            <p className="text-slate-300">
              Platform digital untuk edukasi, dukungan UMKM, dan bantuan kemanusiaan bagi warga Tangerang.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Layanan</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/education" className="text-slate-300 hover:text-white transition-colors">
                  Edukasi Digital
                </Link>
              </li>
              <li>
                <Link href="/umkm" className="text-slate-300 hover:text-white transition-colors">
                  Katalog UMKM
                </Link>
              </li>
              <li>
                <Link href="/aid" className="text-slate-300 hover:text-white transition-colors">
                  Bantuan Kemanusiaan
                </Link>
              </li>
              <li>
                <Link href="/wishlist" className="text-slate-300 hover:text-white transition-colors">
                  Wishlist Donasi
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Tentang Kami</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/stories" className="text-slate-300 hover:text-white transition-colors">
                  Cerita Kebaikan
                </Link>
              </li>
              <li>
                <Link href="/volunteer" className="text-slate-300 hover:text-white transition-colors">
                  Jadi Relawan
                </Link>
              </li>
              <li>
                <Link href="/donation" className="text-slate-300 hover:text-white transition-colors">
                  Donasi
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Hubungi Kami</h4>
            <p className="text-slate-300 mb-4">Tangerang, Indonesia</p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; {new Date().getFullYear()} GOCARI. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
