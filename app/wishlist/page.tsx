"use client"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { MessageSquare } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

// Data wishlist (biasanya dari Strapi API)
const wishlistItems = [
  {
    id: 1,
    title: "Buku Pelajaran SD Kelas 1-6",
    description: "Dibutuhkan buku pelajaran untuk anak-anak SD di daerah Ciledug yang kurang mampu.",
    image: "/wishlist-buku.jpg",
    status: "needed",
    progress: 30, // persentase progress
    whatsappNumber: "6288294799116",
  },
  {
    id: 2,
    title: "Kursi Roda untuk Lansia",
    description: "Dibutuhkan kursi roda untuk lansia di Panti Jompo Cinta Kasih Tanjung Pinang.",
    image: "/wishlist-kursiroda.jpg",
    status: "needed",
    progress: 60,
    whatsappNumber: "6288294799116",
  },
  {
    id: 3,
    title: "Pakaian Layak Pakai Anak-anak",
    description: "Dibutuhkan pakaian layak pakai untuk anak-anak usia 5-12 tahun di daerah Karawaci.",
    image: "/wishlist-baju.jpg",
    status: "needed",
    progress: 45,
    whatsappNumber: "6288294799116",
  },
  {
    id: 4,
    title: "Laptop Bekas untuk Belajar Online",
    description: "Dibutuhkan laptop bekas yang masih berfungsi untuk siswa SMA yang belajar online.",
    image: "/wishlist-laptop.jpg",
    status: "fulfilled",
    progress: 100,
    whatsappNumber: "6288294799116",
  },
  {
    id: 5,
    title: "Sembako untuk Keluarga Terdampak Banjir",
    description: "Dibutuhkan sembako untuk 20 keluarga yang terdampak banjir di daerah Periuk.",
    image: "/wishlist-sembako.jpg",
    status: "needed",
    progress: 75,
    whatsappNumber: "6288294799116",
  },
  {
    id: 6,
    title: "Alat Tulis untuk Sekolah",
    description: "Dibutuhkan alat tulis (buku, pensil, pulpen) untuk anak-anak sekolah dari keluarga kurang mampu.",
    image: "/wishlist-alat-tulis.jpg",
    status: "fulfilled",
    progress: 100,
    whatsappNumber: "6288294799116",
  },
]

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
      staggerChildren: 0.1,
    },
  },
}

export default function WishlistPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div className="text-center mb-12" initial="hidden" animate="visible" variants={fadeInUp}>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 font-nunito text-slate-800">
          Wishlist <span className="text-amber-500">Donasi</span>
        </h1>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Berikut adalah daftar barang yang dibutuhkan oleh warga Tanjung Pinang. Anda dapat membantu memenuhi kebutuhan ini
          dengan menghubungi kami.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        {wishlistItems.map((item) => (
          <motion.div key={item.id} variants={fadeInUp}>
            <Card
              className={`card-hover-effect glass rounded-2xl shadow-lg border-0 overflow-hidden h-full ${item.status === "fulfilled" ? "opacity-75" : ""}`}
            >
              <div className="relative h-48 w-full">
                <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                <div className="absolute top-2 right-2">
                  <Badge className={item.status === "needed" ? "bg-amber-500" : "bg-teal-500"}>
                    {item.status === "needed" ? "Dibutuhkan" : "Terpenuhi"}
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <h3 className="text-xl font-bold font-nunito">{item.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">{item.description}</p>

                {/* Progress bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Progress</span>
                    <span className="font-medium text-amber-500">{item.progress}%</span>
                  </div>
                  <Progress
                    value={item.progress}
                    className="h-2 bg-slate-200"
                    indicatorClassName={item.status === "fulfilled" ? "bg-teal-500" : "bg-amber-500"}
                  />
                </div>
              </CardContent>
              <CardFooter>
                <motion.div className="w-full" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Button
                    asChild
                    className={`w-full rounded-xl ${
                      item.status === "needed"
                        ? "bg-amber-500 hover:bg-amber-600 pulse-animation"
                        : "bg-teal-500 hover:bg-teal-600"
                    }`}
                    disabled={item.status === "fulfilled"}
                  >
                    <a
                      href={`https://wa.me/${item.whatsappNumber}?text=Hi, saya ingin membantu memenuhi wishlist item: ${item.title} dari Kue Cakar Ayam.`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageSquare className="mr-2 h-4 w-4" />
                      {item.status === "needed" ? "Saya Ingin Membantu" : "Sudah Terpenuhi"}
                    </a>
                  </Button>
                </motion.div>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
