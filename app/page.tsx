"use client"

import Link from "next/link"
import { ArrowRight, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import HeroBanner from "@/components/hero-banner"
import FeatureCard from "@/components/feature-card"
import StatisticsCard from "@/components/statistics-card"

// Animasi untuk elemen yang muncul saat scroll
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

// Animasi untuk container dengan delay pada children
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Banner dengan Carousel */}
      <HeroBanner />

      {/* Statistik Mini */}
      <motion.section
        className="my-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <h2 className="text-3xl font-bold text-center mb-8 font-nunito text-slate-800">
          Dampak <span className="text-amber-500">Kue Cakar Ayam</span> di Tanjung pinang
        </h2>

        {/* Grid Statistik */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatisticsCard
            title="UMKM Terdaftar"
            value="15+"
            description="Usaha mikro, kecil, dan menengah yang tergabung"
            icon="ShoppingBag"
          />
          <StatisticsCard
            title="Total Donasi"
            value="Rp 25jt+"
            description="Donasi yang telah disalurkan kepada yang membutuhkan"
            icon="Wallet"
          />
          <StatisticsCard
            title="Relawan Aktif"
            value="10+"
            description="Relawan yang aktif membantu program Kue Cakar Ayam"
            icon="Users"
          />
        </div>
      </motion.section>

      {/* Layanan Unggulan */}
      <motion.section
        className="my-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <h2 className="text-3xl font-bold text-center mb-8 font-nunito text-slate-800">
          Layanan <span className="text-amber-500">Unggulan</span> Kami
        </h2>

        {/* Grid Layanan */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div variants={fadeInUp}>
            <FeatureCard
              title="Edukasi Digital"
              description="Akses artikel dan video pembelajaran untuk meningkatkan keterampilan digital Anda."
              icon="BookOpen"
              href="/education"
            />
          </motion.div>

          <motion.div variants={fadeInUp}>
            <FeatureCard
              title="Katalog UMKM"
              description="Temukan produk dan layanan dari usaha mikro, kecil, dan menengah di Tanjung Pinang."
              icon="ShoppingBag"
              href="/umkm"
            />
          </motion.div>

          <motion.div variants={fadeInUp}>
            <FeatureCard
              title="Bantuan Kemanusiaan"
              description="Ajukan atau berikan bantuan untuk warga Tanjung Pinang yang membutuhkan."
              icon="Heart"
              href="/aid"
            />
          </motion.div>

          <motion.div variants={fadeInUp}>
            <FeatureCard
              title="Wishlist Donasi"
              description="Lihat daftar barang yang dibutuhkan warga dan bantu memenuhinya."
              icon="Gift"
              href="/wishlist"
            />
          </motion.div>

          <motion.div variants={fadeInUp}>
            <FeatureCard
              title="Donasi"
              description="Berikan donasi untuk mendukung program-program Kue Cakar Ayam."
              icon="Wallet"
              href="/donation"
            />
          </motion.div>

          <motion.div variants={fadeInUp}>
            <FeatureCard
              title="Cerita Kebaikan"
              description="Baca kisah inspiratif dari komunitas Tanjung Pinang."
              icon="MessageCircle"
              href="/stories"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Telusuri Platform */}
      <motion.section
        className="my-16 bg-gradient-to-r from-amber-50 to-teal-50 p-8 rounded-2xl shadow-xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-nunito text-slate-800">
            Jelajahi <span className="text-amber-500">Kue Cakar Ayam</span> Sekarang
          </h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Temukan berbagai fitur dan layanan yang kami sediakan untuk membantu warga Tanjung Pinang. Mari bersama-sama
            membangun komunitas yang lebih baik.
          </p>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              asChild
              className="bg-amber-500 hover:bg-amber-600 text-white pulse-animation rounded-xl px-6 py-6 text-lg shadow-lg"
            >
              <Link href="/about">
                Telusuri Platform <Search className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Bergabung Sebagai Relawan */}
      <motion.section
        className="my-16 bg-gradient-to-r from-teal-50 to-amber-50 p-8 rounded-2xl shadow-xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <h2 className="text-3xl font-bold text-center mb-4 font-nunito text-slate-800">
          Bergabung Sebagai <span className="text-teal-500">Relawan</span>
        </h2>
        <p className="text-center text-slate-600 mb-6 max-w-2xl mx-auto">
          Jadilah bagian dari perubahan positif di Tanjung Pinang. Daftarkan diri Anda sebagai relawan dan bantu kami
          mewujudkan masyarakat yang lebih baik.
        </p>
        <div className="flex justify-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button asChild className="bg-teal-500 hover:bg-teal-600 rounded-xl px-6 py-6 text-lg shadow-lg">
              <Link href="/volunteer">
                Daftar Sekarang <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}
