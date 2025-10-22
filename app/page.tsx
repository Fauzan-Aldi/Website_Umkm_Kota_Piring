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
            title="UMKM Aktif"
            value="4+"
            description="Pelaku UMKM lokal yang memproduksi dan memasarkan Kue Cakar Ayam sebagai oleh-oleh khas daerah."
            icon="ShoppingBag"
          />
          <StatisticsCard
            title="Pemberdayaan & Sosial"
            value="Rp 25jt+"
            description="Dana dan dukungan yang telah disalurkan untuk membantu pengembangan usaha kecil dan kegiatan sosial warga."
            icon="Wallet"
          />
          <StatisticsCard
            title="Relawan & Mitra"
            value="10+"
            description="Relawan dan mitra yang aktif dalam pelatihan digital, promosi produk, serta kegiatan kemanusiaan di Tanjung Pinang."
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
          Layanan <span className="text-amber-500">Dan</span> Fitur Kami
        </h2>

        {/* Grid Layanan */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div variants={fadeInUp}>
            <FeatureCard
              title="Produk Kami"
              description="Temukan berbagai varian Kue Cakar Ayam mulai dari rasa Original, Pedas, hingga Manis Gula Aren, dibuat dari bahan berkualitas dan dijamin keasliannya."
              icon="BookOpen"
              href=""
            />
          </motion.div>

          <motion.div variants={fadeInUp}>
            <FeatureCard
              title="Cerita Kami"
              description="Pelajari kisah di balik usaha Kue Cakar Ayam, dari dapur sederhana hingga menjadi ikon UMKM kebanggaan Tanjung Pinang."
              icon="ShoppingBag"
              href="/umkm"
            />
          </motion.div>

          <motion.div variants={fadeInUp}>
            <FeatureCard
              title="Cerita Kebaikan"
              description="Sebagian hasil penjualan kami gunakan untuk mendukung kegiatan sosial dan kemanusiaan warga Tanjung Pinang."
              icon="Heart"
              href="/aid"
            />
          </motion.div>

          <motion.div variants={fadeInUp}>
            <FeatureCard
              title="Galeri"
              description="Lihat proses pembuatan, kemasan, hingga momen kegiatan sosial kami bersama masyarakat."
              icon="Gift"
              href="/wishlist"
            />
          </motion.div>

          <motion.div variants={fadeInUp}>
            <FeatureCard
              title="Hubungi Kami"
              description="Ingin memesan atau menjadi mitra penjualan? Hubungi kami melalui WhatsApp atau media sosial di bawah ini."
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
            Kenali lebih Dekat <span className="text-amber-500"> Kue Cakar Ayam</span> Sekarang
          </h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
          Pelajari visi, misi, dan perjalanan kami dalam membangun Tanjung Pinang melalui edukasi digital, dukungan UMKM, dan kegiatan kemanusiaan. Mari bersama menciptakan perubahan positif bagi masyarakat.
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
      
    </div>
  )
}
