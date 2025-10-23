"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MessageSquare, Search } from "lucide-react"
import { motion } from "framer-motion"

// Kategori UMKM
const categories = ["Semua"]

// Data produk UMKM (biasanya dari Strapi API)
const umkmProducts = [
  {
    id: 1,
    businessName: "",
    productName: "",
    description: "",
    image: "/oke 4.JPG",
    whatsappNumber: "",
    category: "",
  },
  {
    id: 2,
    businessName: "",
    productName: "",
    description: ".",
    image: "/OKE1.png",
    whatsappNumber: "",
    category: "",
  },
  {
    id: 3,
    businessName: "",
    productName: "",
    description: ".",
    image: "/OKE2.png",
    whatsappNumber: "",
    category: "",
  },
  {
    id: 4,
    businessName: "",
    productName: "",
    description: ".",
    image: "/OKE7.jpeg",
    whatsappNumber: "",
    category: "",
  },
  {
    id: 5,
    businessName: "",
    productName: "",
    description: ".",
    image: "/OKE9.jpeg",
    whatsappNumber: "",
    category: "",
  },
  {
    id: 6,
    businessName: "",
    productName: "",
    description: ".",
    image: "/OKE8.jpeg",
    whatsappNumber: "",
    category: "",
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

export default function UMKMPage() {
  // State untuk pencarian dan filter
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("Semua")

  // Filter produk berdasarkan pencarian dan kategori
  const filteredProducts = umkmProducts.filter((product) => {
    const matchesSearch =
      product.productName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.businessName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCategory = activeCategory === "Semua" || product.category === activeCategory

    return matchesSearch && matchesCategory
  })

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div className="text-center mb-12" initial="hidden" animate="visible" variants={fadeInUp}>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 font-nunito text-slate-800">
          Galeri <span className="text-amber-500">Kue Cakar Ayam</span>
        </h1>
        <p className="text-slate-600 max-w-2xl mx-auto">
        Galeri Kue Cakar Ayam Di Tanjung Pinang
        </p>
      </motion.div>

      {/* Search & Filter */}
      <motion.div className="mb-8" initial="hidden" animate="visible" variants={fadeInUp}>
        {/* Search Bar dengan efek glass */}
        <div className="relative max-w-md mx-auto mb-8">
          
         
        </div>

       
      </motion.div>

      {/* Produk UMKM */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <motion.div key={product.id} variants={fadeInUp}>
              <Card className="card-hover-effect glass rounded-2xl shadow-lg border-0 overflow-hidden h-full">
                <div className="relative h-48 w-full">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.productName}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-amber-500 hover:bg-amber-600">{product.category}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold font-nunito">{product.productName}</h3>
                    <p className="text-sm text-amber-500 font-medium">{product.businessName}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{product.description}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full bg-amber-500 hover:bg-amber-600 rounded-xl">
                    <a
                      href={`https://wa.me/${product.whatsappNumber}?text=Halo, saya tertarik dengan produk ${product.productName} dari ${product.businessName} yang saya lihat di Kue Cakar Ayam.`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Hubungi Via WhatsApp
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-slate-500 text-lg">
              Tidak ada produk yang sesuai dengan pencarian Anda. Coba kata kunci lain atau pilih kategori yang berbeda.
            </p>
          </div>
        )}
      </motion.div>
    </div>
  )
}
