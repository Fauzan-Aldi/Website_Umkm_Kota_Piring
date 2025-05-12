"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { motion } from "framer-motion"
import { AlertCircle, CheckCircle2, Send } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

// Data cerita kebaikan (biasanya dari Strapi API)
const stories = [
  {
    id: 1,
    title: "Bantuan Pendidikan untuk Anak-anak Ciledug",
    story:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie.",
    date: "15 Maret 2025",
    height: 2, // Untuk layout masonry
  },
  {
    id: 2,
    title: "UMKM Batik Tangerang Bangkit Setelah Pandemi",
    story:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie.",
    image: "/placeholder.svg?height=300&width=500",
    date: "22 April 2024",
    height: 3, // Untuk layout masonry
  },
  {
    id: 3,
    title: "Renovasi Rumah untuk Lansia di Karawaci",
    story:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie.",
    image: "/placeholder.svg?height=300&width=500",
    date: "10 Juni 2024",
    height: 2, // Untuk layout masonry
  },
  {
    id: 4,
    title: "Pelatihan Digital untuk Pelaku UMKM",
    story:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie.",
    date: "5 Agustus 2024",
    height: 3, // Untuk layout masonry
  },
  {
    id: 5,
    title: "Bantuan Banjir untuk Warga Periuk",
    story:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie.",
    date: "12 Oktober 2023",
    height: 2, // Untuk layout masonry
  },
  {
    id: 6,
    title: "Taman Baca untuk Anak-anak Neglasari",
    story:
      "Berkat kolaborasi relawan dan donatur GOCARI, kini hadir Taman Baca di daerah Neglasari. Lebih dari 500 buku tersedia dan puluhan anak datang setiap hari untuk membaca dan belajar. Ini adalah langkah kecil untuk mencerdaskan generasi masa depan.",
    image: "/placeholder.svg?height=300&width=500",
    date: "30 November 2023",
    height: 3, // Untuk layout masonry
  },
]

// Schema validasi form
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Nama harus minimal 2 karakter.",
  }),
  story: z
    .string()
    .min(20, {
      message: "Cerita harus minimal 20 karakter.",
    })
    .max(500, {
      message: "Cerita maksimal 500 karakter.",
    }),
  // Dalam implementasi sebenarnya, akan ada field untuk upload gambar
})

// Animasi untuk elemen yang muncul saat scroll
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export default function StoriesPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      story: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    setError(null)

    try {
      // Dalam implementasi sebenarnya, ini akan mengirim data ke Strapi API
      // const response = await fetch('/api/stories', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(values),
      // })

      // Simulasi API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // if (!response.ok) throw new Error('Gagal mengirim cerita')

      setIsSubmitted(true)
      toast({
        title: "Cerita Terkirim",
        description: "Cerita berhasil dikirim! Terima kasih atas partisipasimu.",
      })
    } catch (err) {
      setError("Terjadi kesalahan saat mengirim cerita. Silakan coba lagi nanti.")
      toast({
        variant: "destructive",
        title: "Terjadi Kesalahan",
        description: "Gagal mengirim cerita. Silakan coba lagi nanti.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div className="text-center mb-12" initial="hidden" animate="visible" variants={fadeInUp}>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 font-nunito text-slate-800">
          Cerita <span className="text-amber-500">Kebaikan</span>
        </h1>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Kisah-kisah inspiratif tentang bagaimana GOCARI dan masyarakat Tangerang bersama-sama membuat perubahan
          positif.
        </p>
      </motion.div>

      {/* Masonry Grid untuk Cerita */}
      <div className="mb-16">
        <div className="masonry-grid">
          {stories.map((story) => (
            <motion.div
              key={story.id}
              className="masonry-item"
              style={{ "--masonry-height": `${story.height * 10}` } as React.CSSProperties}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
            >
              <Card className="card-hover-effect glass rounded-2xl shadow-lg border-0 overflow-hidden h-full">
                <div className="relative h-48 w-full">
                  <Image src={story.image || "/placeholder.svg"} alt={story.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <div className="space-y-1">
                    <p className="text-sm text-amber-500">{story.date}</p>
                    <h3 className="text-xl font-bold font-nunito">{story.title}</h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{story.story}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Form Kirim Cerita */}
      <motion.div
        className="max-w-2xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <Card className="glass rounded-2xl shadow-xl border-0 overflow-hidden">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6 font-nunito text-slate-800">
              Bagikan <span className="text-amber-500">Ceritamu</span>
            </h2>

            {isSubmitted ? (
              <Alert className="bg-emerald-50 border-emerald-200 mb-6">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                <AlertTitle className="text-emerald-800">Cerita Terkirim</AlertTitle>
                <AlertDescription className="text-emerald-700">
                  Cerita berhasil dikirim! Terima kasih atas partisipasimu.
                </AlertDescription>
              </Alert>
            ) : error ? (
              <Alert variant="destructive" className="mb-6">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            ) : (
              <p className="text-slate-600 mb-6">
                Bagikan cerita inspiratif atau pengalaman Anda bersama GOCARI. Cerita Anda dapat menginspirasi orang
                lain untuk ikut berbuat baik.
              </p>
            )}

            {!isSubmitted && (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nama</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Masukkan nama Anda"
                            className="glass rounded-xl border-0 shadow-sm focus-visible:ring-amber-500"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="story"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Cerita</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Bagikan cerita inspiratif Anda..."
                            className="glass rounded-xl border-0 shadow-sm min-h-[150px] focus-visible:ring-amber-500"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Dalam implementasi sebenarnya, akan ada field untuk upload gambar */}

                  <Button
                    type="submit"
                    className="w-full bg-amber-500 hover:bg-amber-600 rounded-xl"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Mengirim..."
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Kirim Cerita
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            )}
          </CardContent>
        </Card>
      </motion.div>
      <Toaster />
    </div>
  )
}
