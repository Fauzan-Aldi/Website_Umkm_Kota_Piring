"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

// Data untuk carousel banner
const bannerData = [
  {
    id: 1,
    title: "Membangun Kota Tangerang Bersama",
    description:
      "GOCARI adalah platform digital untuk edukasi, dukungan UMKM, dan bantuan kemanusiaan bagi warga Kota Tangerang.",
    image: "/banner-tangerang.jpg",
    cta: {
      text: "Ajukan Bantuan",
      link: "/aid",
    },
  },
  {
    id: 2,
    title: "Dukung UMKM Lokal Warga Kota Tangerang",
    description: "Temukan dan dukung produk-produk UMKM lokal Kota Tangerang untuk memajukan ekonomi masyarakat.",
    image: "/banner-umkm.jpg",
    cta: {
      text: "Lihat Katalog",
      link: "/umkm",
    },
  },
  {
    id: 3,
    title: "Berbagi Kebaikan Untuk Masyarakat Kota Tangerang",
    description: "Salurkan donasi Anda untuk membantu warga Kota Tangerang yang membutuhkan melalui program-program GOCARI.",
    image: "/banner-donasi.png",
    cta: {
      text: "Donasi Sekarang",
      link: "/donation",
    },
  },
]

const HeroBanner = () => {
  const [current, setCurrent] = useState(0)

  // Fungsi untuk slide otomatis
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % bannerData.length)
    }, 9000)

    return () => clearInterval(interval)
  }, [])

  // Fungsi untuk slide manual
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % bannerData.length)
  }

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + bannerData.length) % bannerData.length)
  }

  return (
    <section className="relative py-12 md:py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
          {/* Carousel dengan animasi */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              {/* Background image */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 to-slate-900/30 z-10" />
              <Image
                src={bannerData[current].image || "/placeholder.svg"}
                alt={bannerData[current].title}
                fill
                className="object-cover"
                priority
              />

              {/* Content */}
              <div className="relative z-20 flex flex-col justify-center h-full text-white p-8 md:p-16 max-w-2xl">
                <motion.h1
                  className="text-4xl md:text-5xl font-bold mb-4 font-nunito"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  {bannerData[current].title}
                </motion.h1>

                <motion.p
                  className="text-lg text-white/90 mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  {bannerData[current].description}
                </motion.p>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <Button
                    asChild
                    className="bg-amber-500 hover:bg-amber-600 text-white rounded-xl px-6 py-6 text-lg shadow-lg"
                  >
                    <Link href={bannerData[current].cta.link}>
                      {bannerData[current].cta.text} <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full p-2 transition-all"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full p-2 transition-all"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </button>

          {/* Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
            {bannerData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-all ${index === current ? "bg-white w-6" : "bg-white/50"}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroBanner
