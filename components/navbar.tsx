"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  // Scroll ke atas saat rute berubah
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Fungsi untuk menutup menu dan scroll ke atas
  const handleNavClick = () => {
    setIsMenuOpen(false)
    window.scrollTo(0, 0)
  }

  // Daftar tautan navigasi
  const navLinks = [
    { name: "Beranda", href: "/" },
    { name: "Tentang Kami", href: "/about" },
    { name: "Edukasi Digital", href: "/education" },
    { name: "UMKM", href: "/umkm" },
    { name: "Wishlist Donasi", href: "/wishlist" }, // Menambahkan Wishlist Donasi
  ]

  // Submenu untuk Layanan Kami
  const serviceLinks = [
    { name: "Bantuan", href: "/aid" },
    { name: "Donasi", href: "/donation" },
    { name: "Relawan", href: "/volunteer" },
    { name: "Cerita", href: "/stories" },
  ]

  return (
    <motion.nav
      className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo GOCARI dengan animasi */}
          <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
            <Link
              href="/"
              className="font-bold text-2xl text-amber-500 font-nunito flex items-center"
              onClick={handleNavClick}
            >
              {/* Logo image */}
              <div className="relative w-8 h-8 mr-2">
                <Image src="/logo-gocari.png" alt="GOCARI Logo" width={40} height={40} className="object-contain" />
              </div>
              GOCARI
            </Link>
          </motion.div>

          {/* Navigasi Desktop */}
          <div className="hidden md:flex space-x-1">
            {navLinks.map((link) => (
              <motion.div
                key={link.name}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Link
                  href={link.href}
                  className="text-slate-700 hover:text-amber-500 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  onClick={handleNavClick}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}

            {/* Dropdown Layanan Kami */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="text-slate-700 hover:text-amber-500 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
                >
                  Layanan Kami <ChevronDown className="ml-1 h-4 w-4" />
                </motion.button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 glass rounded-xl border-0 shadow-lg">
                {serviceLinks.map((service) => (
                  <DropdownMenuItem key={service.name} asChild>
                    <Link
                      href={service.href}
                      className="cursor-pointer hover:bg-amber-50 focus:bg-amber-50 rounded-md"
                      onClick={handleNavClick}
                    >
                      {service.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Tombol Navigasi Mobile */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Menu Navigasi Mobile */}
        {isMenuOpen && (
          <motion.div
            className="md:hidden py-2 pb-4 glass rounded-xl my-2"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-4 py-2 text-slate-700 hover:text-amber-500 hover:bg-amber-50/50 rounded-md text-base font-medium"
                onClick={handleNavClick}
              >
                {link.name}
              </Link>
            ))}

            {/* Submenu Layanan Kami untuk mobile */}
            <div className="px-4 py-2 text-slate-700 font-medium">Layanan Kami</div>
            {serviceLinks.map((service) => (
              <Link
                key={service.name}
                href={service.href}
                className="block px-8 py-2 text-slate-700 hover:text-amber-500 hover:bg-amber-50/50 rounded-md text-base font-medium"
                onClick={handleNavClick}
              >
                {service.name}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navbar
