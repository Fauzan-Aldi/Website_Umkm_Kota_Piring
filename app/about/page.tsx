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
          Tentang <span className="text-amber-500">Kue Cakar Ayam</span>
        </h1>
        <p className="text-slate-600 max-w-3xl mx-auto">

Kue Cakar Ayam adalah camilan khas Tanjung Pinang yang dibuat dengan resep tradisional turun temurun. Didirikan oleh Bapak Nasrun, usaha ini berawal dari keinginan sederhana untuk melestarikan cita rasa lokal agar tetap dikenal di tengah gempuran makanan modern.

Kini, Kue Cakar Ayam telah berkembang menjadi salah satu UMKM kebanggaan Kota Tanjung Pinang, menghadirkan produk yang tidak hanya lezat, tetapi juga menjadi simbol dukungan terhadap ekonomi masyarakat lokal.
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
                Menjadi usaha kuliner khas Tanjung Pinang yang mampu memperkenalkan cita rasa tradisional ke seluruh Indonesia sambil mendukung pertumbuhan ekonomi masyarakat lokal.
                </p>
              </div>

              <div className="glass rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-2 text-teal-500">Misi</h3>
                <ul className="text-slate-700 space-y-2">
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-2">•</span>
                    <span>
                    Menghadirkan produk camilan tradisional berkualitas dengan bahan pilihan lokal.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-2">•</span>
                    <span>Memberdayakan warga sekitar melalui lapangan kerja dan pelatihan produksi.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-2">•</span>
                    <span>Mendukung gerakan UMKM Tanjung Pinang dalam promosi dan pemasaran digital.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-2">•</span>
                    <span>Berkontribusi dalam kegiatan sosial dan kemanusiaan di lingkungan sekitar.</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
            <Image src="/about-team.jpg" alt="Kue Cakar Ayam Vision" fill className="object-cover" />
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
          Tim <span className="text-amber-500">Produksi</span>
        </h2>

        <Card className="glass rounded-2xl shadow-xl border-0 overflow-hidden">
          <CardContent className="p-8">
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-slate-700 mb-6">
              Tim Kue Cakar Ayam terdiri dari warga lokal yang bekerja dengan semangat gotong royong. Semua proses mulai dari pengadonan, penggorengan, hingga pengemasan dilakukan secara higienis dengan menjaga cita rasa asli khas Tanjung Pinang.
              Kami percaya, dari dapur kecil dapat lahir karya besar yang membawa manfaat bagi masyarakat sekitar.
              </p>
             
            </div>
          </CardContent>
        </Card>
      </motion.section>

      {/* CTA */}
      
    </div>
  )
}
