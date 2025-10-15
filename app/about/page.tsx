"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MessageSquare, Mail, ArrowRight } from "lucide-react"

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

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <motion.div className="text-center mb-16" initial="hidden" animate="visible" variants={fadeInUp}>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 font-nunito text-slate-800">
          Tentang <span className="text-amber-500">GOCARI</span>
        </h1>
        <p className="text-slate-600 max-w-3xl mx-auto">
          Mengenal lebih dekat platform digital untuk edukasi, dukungan UMKM, dan bantuan kemanusiaan bagi warga
          Tanjung Pinang.
        </p>
      </motion.div>

      {/* Visi & Misi */}
      <motion.section
        className="mb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeInUp}>
            <h2 className="text-3xl font-bold mb-6 font-nunito text-slate-800">
              Visi & <span className="text-amber-500">Misi</span>
            </h2>

            <div className="space-y-6">
              <div className="glass rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-2 text-amber-500">Visi</h3>
                <p className="text-slate-700">
                  Menjadi platform digital terdepan yang menghubungkan, memberdayakan, dan meningkatkan kualitas hidup
                  masyarakat Kota Tanjung Pinang melalui edukasi, dukungan ekonomi, dan bantuan kemanusiaan.
                </p>
              </div>

              <div className="glass rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-2 text-teal-500">Misi</h3>
                <ul className="text-slate-700 space-y-2">
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-2">•</span>
                    <span>
                      Menyediakan akses pendidikan digital yang inklusif bagi seluruh lapisan masyarakat Kota Tanjung pinang
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-2">•</span>
                    <span>Mendukung pertumbuhan UMKM lokal melalui digitalisasi dan perluasan pasar online</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-2">•</span>
                    <span>Memfasilitasi bantuan kemanusiaan yang tepat sasaran bagi warga yang membutuhkan</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-2">•</span>
                    <span>Membangun komunitas yang peduli dan aktif berpartisipasi dalam kegiatan sosial</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
            <Image src="/about-team.jpg" alt="GOCARI Vision" fill className="object-cover" />
          </motion.div>
        </div>
      </motion.section>

      {/* Tim Inisiator */}
      <motion.section
        className="mb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <h2 className="text-3xl font-bold text-center mb-10 font-nunito text-slate-800">
          Tim <span className="text-amber-500">Inisiator</span>
        </h2>

        <Card className="glass rounded-2xl shadow-xl border-0 overflow-hidden">
          <CardContent className="p-8">
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-slate-700 mb-6">
                Kue Cakar Ayam diinisiasi oleh sekelompok anak muda Kota Tanjung pinang yang peduli dengan perkembangan digital, ekonomi
                lokal, dan kesejahteraan masyarakat. Berawal dari keprihatinan terhadap kesenjangan digital dan ekonomi,
                kami membangun platform ini untuk menjembatani berbagai kebutuhan warga Kota Tanjung pinang.
              </p>
              <p className="text-slate-700">
                Tim kami terdiri dari programmer , desainer, content creator, dan relawan sosial yang bersatu dengan satu
                tujuan: membangun Tanjung pinang yang lebih baik melalui teknologi dan kepedulian sosial.
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.section>

      {/* Alur Platform */}
      <motion.section
        className="mb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <h2 className="text-3xl font-bold text-center mb-10 font-nunito text-slate-800">
          Alur <span className="text-amber-500">Platform</span>
        </h2>

        <div className="relative">
          {/* Garis penghubung */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-amber-200 -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-12 relative">
            {/* Langkah 1 */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2 md:text-right order-2 md:order-1">
                <h3 className="text-2xl font-semibold mb-2 text-amber-500 font-nunito">Belajar</h3>
                <p className="text-slate-700">
                  Akses berbagai konten edukasi digital untuk meningkatkan pengetahuan dan keterampilan Anda dalam
                  berbagai bidang.
                </p>
              </div>

              <div className="relative z-10 order-1 md:order-2">
                <div className="w-16 h-16 rounded-full bg-amber-500 flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                  1
                </div>
              </div>

              <div className="md:w-1/2 order-3">{/* Kosong untuk layout */}</div>
            </div>

            {/* Langkah 2 */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2 order-2 md:order-1">{/* Kosong untuk layout */}</div>

              <div className="relative z-10 order-1 md:order-2">
                <div className="w-16 h-16 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                  2
                </div>
              </div>

              <div className="md:w-1/2 md:text-left order-3">
                <h3 className="text-2xl font-semibold mb-2 text-teal-500 font-nunito">Dukung UMKM</h3>
                <p className="text-slate-700">
                  Temukan dan dukung produk-produk UMKM lokal Kota Tangerang untuk membantu pertumbuhan ekonomi masyarakat.
                </p>
              </div>
            </div>

            {/* Langkah 3 */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2 md:text-right order-2 md:order-1">
                <h3 className="text-2xl font-semibold mb-2 text-amber-500 font-nunito">Bantu Sesama</h3>
                <p className="text-slate-700">
                  Berikan bantuan kepada warga yang membutuhkan melalui donasi, pemenuhan wishlist, atau menjadi
                  relawan.
                </p>
              </div>

              <div className="relative z-10 order-1 md:order-2">
                <div className="w-16 h-16 rounded-full bg-amber-500 flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                  3
                </div>
              </div>

              <div className="md:w-1/2 order-3">{/* Kosong untuk layout */}</div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Hubungi Kami */}
      <motion.section
        id="contact"
        className="mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <h2 className="text-3xl font-bold text-center mb-10 font-nunito text-slate-800">
          Hubungi <span className="text-amber-500">Kami</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card className="glass rounded-2xl shadow-lg border-0 overflow-hidden h-full">
            <CardContent className="p-6 flex flex-col h-full">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center mb-4 shadow-md">
                <MessageSquare className="h-7 w-7 text-amber-500" />
              </div>

              <h3 className="text-xl font-semibold mb-2 font-nunito">WhatsApp</h3>
              <p className="text-slate-600 mb-6 flex-grow">
                Hubungi admin GOCARI melalui WhatsApp untuk pertanyaan, saran, atau informasi lebih lanjut.
              </p>

              <Button asChild className="bg-amber-500 hover:bg-amber-600 w-full rounded-xl">
                <a
                  href="https://wa.me/6288294799116?text=Halo, saya ingin bertanya tentang GOCARI."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Hubungi via WhatsApp
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="glass rounded-2xl shadow-lg border-0 overflow-hidden h-full">
            <CardContent className="p-6 flex flex-col h-full">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-teal-100 to-teal-200 flex items-center justify-center mb-4 shadow-md">
                <Mail className="h-7 w-7 text-teal-500" />
              </div>

              <h3 className="text-xl font-semibold mb-2 font-nunito">Email</h3>
              <p className="text-slate-600 mb-6 flex-grow">
                Kirim email kepada tim GOCARI untuk kerjasama, pertanyaan detail, atau hal lainnya.
              </p>

              <Button asChild className="bg-teal-500 hover:bg-teal-600 w-full rounded-xl">
                <a href="mailto:muhamadrifkifirdaus22@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Email Kami
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        className="bg-gradient-to-r from-amber-50 to-teal-50 p-8 rounded-2xl shadow-xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 font-nunito text-slate-800">
            Siap Bergabung dengan <span className="text-amber-500">GOCARI</span>?
          </h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Jelajahi platform kami dan temukan berbagai cara untuk belajar, mendukung UMKM, dan membantu sesama.
          </p>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              asChild
              className="bg-amber-500 hover:bg-amber-600 text-white pulse-animation rounded-xl px-6 py-6 text-lg shadow-lg"
            >
              <Link href="/">
                Jelajahi Sekarang <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}
