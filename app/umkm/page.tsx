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
const categories = ["Semua", "Makanan", "Kerajinan", "Fashion", "Minuman", "Jasa", "Lainnya"]

// Data produk UMKM (biasanya dari Strapi API)
const umkmProducts = [
  {
    id: 1,
    businessName: "Batik Tangerang",
    productName: "Batik Khas Tangerang",
    description: "Batik dengan motif khas Tangerang yang dibuat dengan teknik tradisional.",
    image: "/umkm-batik.jpg",
    whatsappNumber: "6288294799116",
    category: "Fashion",
  },
  {
    id: 2,
    businessName: "Kuliner Betawi",
    productName: "Kue Cucur Tradisional",
    description: "Kue cucur tradisional dengan rasa gula aren yang khas, dibuat setiap hari.",
    image: "/umkm-kuecucur.jpg",
    whatsappNumber: "6288294799116",
    category: "Makanan",
  },
  {
    id: 3,
    businessName: "Kerajinan Bambu",
    productName: "Anyaman Bambu Dekoratif",
    description: "Kerajinan Kaca Miror anyaman bambu untuk dekorasi rumah dengan desain minimalis.",
    image: "/umkm-kerajinanbambu.jpg",
    whatsappNumber: "6288294799116",
    category: "Kerajinan",
  },
  {
    id: 4,
    businessName: "Sabun Alami",
    productName: "Sabun Herbal Homemade",
    description: "Sabun alami dengan bahan-bahan herbal pilihan yang aman untuk kulit sensitif.",
    image: "/placeholder.svg?height=200&width=400",
    whatsappNumber: "6288294799116",
    category: "Lainnya",
  },
  {
    id: 5,
    businessName: "Tas Rajut",
    productName: "Tas Rajut Handmade",
    description: "Tas rajut handmade dengan berbagai model dan warna yang trendy.",
    image: "/placeholder.svg?height=200&width=400",
    whatsappNumber: "6288294799116",
    category: "Fashion",
  },
  {
    id: 6,
    businessName: "Kopi Tangerang",
    productName: "Kopi Robusta Premium",
    description: "Kopi robusta premium yang ditanam dan diolah oleh petani lokal Tangerang.",
    image: "/placeholder.svg?height=200&width=400",
    whatsappNumber: "6288294799116",
    category: "Minuman",
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
          Katalog <span className="text-amber-500">UMKM</span>
        </h1>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Temukan produk dan layanan dari usaha mikro, kecil, dan menengah di Tangerang. Dukung ekonomi lokal dengan
          berbelanja dari UMKM di sekitar Anda.
        </p>
      </motion.div>

      {/* Search & Filter */}
      <motion.div className="mb-8" initial="hidden" animate="visible" variants={fadeInUp}>
        {/* Search Bar dengan efek glass */}
        <div className="relative max-w-md mx-auto mb-8">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-slate-400" />
          </div>
          <Input
            type="text"
            placeholder="Cari produk, kategori, atau penjual..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 py-6 glass rounded-xl shadow-md border-0 focus-visible:ring-amber-500"
          />
        </div>

        {/* Filter Kategori */}
        <Tabs defaultValue="Semua" value={activeCategory} onValueChange={setActiveCategory} className="w-full">
          <TabsList className="w-full max-w-4xl mx-auto h-auto flex flex-wrap justify-center gap-2 bg-transparent">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="data-[state=active]:bg-amber-500 data-[state=active]:text-white rounded-full px-4 py-2 shadow-sm"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
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
                      href={`https://wa.me/${product.whatsappNumber}?text=Halo, saya tertarik dengan produk ${product.productName} dari ${product.businessName} yang saya lihat di GOCARI.`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Hubungi via WhatsApp
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
