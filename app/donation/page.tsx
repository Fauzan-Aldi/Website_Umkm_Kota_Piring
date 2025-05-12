"use client"

import { useState } from "react"
import Image from "next/image"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"
import { AlertCircle, CheckCircle2, Heart } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Nama harus minimal 2 karakter.",
  }),
  contact: z.string().min(10, {
    message: "Nomor kontak harus valid.",
  }),
  amount: z.string().min(1, {
    message: "Jumlah donasi harus diisi.",
  }),
  transferDate: z.string().min(1, {
    message: "Tanggal transfer harus diisi.",
  }),
  message: z.string().optional(),
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

export default function DonationPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [activeStep, setActiveStep] = useState("pilih")

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      contact: "",
      amount: "",
      transferDate: "",
      message: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    setError(null)

    try {
      // Dalam implementasi sebenarnya, ini akan mengirim data ke Strapi API
      // const response = await fetch('/api/donations', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(values),
      // })

      // Simulasi API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // if (!response.ok) throw new Error('Gagal mengirim konfirmasi donasi')

      setIsSubmitted(true)
      setActiveStep("terimakasih")
      toast({
        title: "Konfirmasi Terkirim",
        description: "Konfirmasi donasi Anda telah berhasil dikirim. Terima kasih atas kebaikan Anda.",
      })
    } catch (err) {
      setError("Terjadi kesalahan saat mengirim konfirmasi. Silakan coba lagi nanti.")
      toast({
        variant: "destructive",
        title: "Terjadi Kesalahan",
        description: "Gagal mengirim konfirmasi donasi. Silakan coba lagi nanti.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div className="text-center mb-12" initial="hidden" animate="visible" variants={fadeInUp}>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 font-nunito text-slate-800">
          <span className="text-amber-500">Donasi</span>
        </h1>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Dukung program-program GOCARI dengan memberikan donasi. Setiap kontribusi Anda sangat berarti bagi masyarakat
          Tangerang.
        </p>
      </motion.div>

      {/* Timeline Donasi */}
      <motion.div className="max-w-4xl mx-auto mb-12" initial="hidden" animate="visible" variants={fadeInUp}>
        <Tabs defaultValue="pilih" value={activeStep} onValueChange={setActiveStep} className="w-full">
          <TabsList className="grid w-full grid-cols-4 h-auto bg-muted/50 p-1 rounded-xl">
            <TabsTrigger
              value="pilih"
              className="data-[state=active]:bg-amber-500 data-[state=active]:text-white rounded-lg py-3"
              disabled={activeStep !== "pilih"}
            >
              1. Pilih
            </TabsTrigger>
            <TabsTrigger
              value="donasi"
              className="data-[state=active]:bg-amber-500 data-[state=active]:text-white rounded-lg py-3"
              disabled={activeStep !== "donasi" && activeStep !== "konfirmasi" && activeStep !== "terimakasih"}
            >
              2. Donasi
            </TabsTrigger>
            <TabsTrigger
              value="konfirmasi"
              className="data-[state=active]:bg-amber-500 data-[state=active]:text-white rounded-lg py-3"
              disabled={activeStep !== "konfirmasi" && activeStep !== "terimakasih"}
            >
              3. Konfirmasi
            </TabsTrigger>
            <TabsTrigger
              value="terimakasih"
              className="data-[state=active]:bg-amber-500 data-[state=active]:text-white rounded-lg py-3"
              disabled={activeStep !== "terimakasih"}
            >
              4. Terima Kasih
            </TabsTrigger>
          </TabsList>

          <TabsContent value="pilih" className="mt-6">
            <Card className="glass rounded-2xl shadow-lg border-0 overflow-hidden">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 font-nunito text-slate-800">
                  Pilih <span className="text-amber-500">Jenis Donasi</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                    <Card className="cursor-pointer h-full glass rounded-xl shadow-md border-0 overflow-hidden hover:shadow-lg transition-all">
                      <CardContent className="p-6 flex flex-col h-full">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center mb-4 shadow-md">
                          <Heart className="h-6 w-6 text-amber-500" />
                        </div>

                        <h3 className="text-xl font-semibold mb-2 font-nunito">Donasi Umum</h3>
                        <p className="text-slate-600 mb-6 flex-grow">
                          Donasi untuk mendukung seluruh program GOCARI, termasuk edukasi digital, dukungan UMKM, dan
                          bantuan kemanusiaan.
                        </p>

                        <Button
                          className="w-full bg-amber-500 hover:bg-amber-600 rounded-xl"
                          onClick={() => setActiveStep("donasi")}
                        >
                          Pilih
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                    <Card className="cursor-pointer h-full glass rounded-xl shadow-md border-0 overflow-hidden hover:shadow-lg transition-all">
                      <CardContent className="p-6 flex flex-col h-full">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-100 to-teal-200 flex items-center justify-center mb-4 shadow-md">
                          <Heart className="h-6 w-6 text-teal-500" />
                        </div>

                        <h3 className="text-xl font-semibold mb-2 font-nunito">Donasi Khusus</h3>
                        <p className="text-slate-600 mb-6 flex-grow">
                          Donasi untuk program spesifik seperti bantuan pendidikan, renovasi rumah, atau bantuan
                          bencana.
                        </p>

                        <Button
                          className="w-full bg-teal-500 hover:bg-teal-600 rounded-xl"
                          onClick={() => setActiveStep("donasi")}
                        >
                          Pilih
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="donasi" className="mt-6">
            <Card className="glass rounded-2xl shadow-lg border-0 overflow-hidden">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 font-nunito text-slate-800">
                  Cara <span className="text-amber-500">Berdonasi</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 font-nunito">Transfer Bank</h3>
                    <div className="glass rounded-xl p-6 shadow-md mb-6">
                      <p className="font-medium mb-2">Bank XYZ</p>
                      <p className="text-lg font-bold text-amber-500 mb-1">1234567890</p>
                      <p className="text-sm text-slate-600">a.n. Yayasan GOCARI</p>
                    </div>

                    <h3 className="text-xl font-semibold mb-4 font-nunito">E-Wallet</h3>
                    <div className="glass rounded-xl p-6 shadow-md">
                      <p className="font-medium mb-2">QRIS</p>
                      <div className="bg-white p-4 rounded-lg border inline-block mb-2">
                        <Image
                          src="/placeholder.svg?height=200&width=200"
                          alt="QRIS Code"
                          width={200}
                          height={200}
                          className="mx-auto"
                        />
                      </div>
                      <p className="text-sm text-slate-500">
                        Scan QR code di atas untuk melakukan pembayaran melalui aplikasi e-wallet atau mobile banking.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center">
                    <div className="glass rounded-xl p-6 shadow-md mb-6">
                      <h3 className="text-xl font-semibold mb-4 font-nunito">Petunjuk Donasi</h3>
                      <ol className="space-y-3 text-slate-700">
                        <li className="flex items-start">
                          <span className="bg-amber-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">
                            1
                          </span>
                          <span>Transfer donasi ke rekening atau scan QRIS yang tersedia</span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-amber-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">
                            2
                          </span>
                          <span>Simpan bukti transfer atau screenshot pembayaran</span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-amber-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">
                            3
                          </span>
                          <span>Isi form konfirmasi donasi pada langkah berikutnya</span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-amber-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">
                            4
                          </span>
                          <span>Admin akan menghubungi Anda untuk konfirmasi</span>
                        </li>
                      </ol>
                    </div>

                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        className="w-full bg-amber-500 hover:bg-amber-600 rounded-xl py-6 text-lg pulse-animation"
                        onClick={() => setActiveStep("konfirmasi")}
                      >
                        <Heart className="mr-2 h-5 w-5" />
                        Saya Ingin Membantu
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="konfirmasi" className="mt-6">
            <Card className="glass rounded-2xl shadow-lg border-0 overflow-hidden">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 font-nunito text-slate-800">
                  Konfirmasi <span className="text-amber-500">Donasi</span>
                </h2>

                {error && (
                  <Alert variant="destructive" className="mb-6">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nama Lengkap</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Masukkan nama lengkap Anda"
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
                        name="contact"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nomor WhatsApp</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Contoh: 08123456789"
                                className="glass rounded-xl border-0 shadow-sm focus-visible:ring-amber-500"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="amount"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Jumlah Donasi</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Contoh: Rp 100.000"
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
                        name="transferDate"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Tanggal Transfer</FormLabel>
                            <FormControl>
                              <Input
                                type="date"
                                className="glass rounded-xl border-0 shadow-sm focus-visible:ring-amber-500"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Pesan (Opsional)</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tulis pesan Anda di sini"
                              className="glass rounded-xl border-0 shadow-sm min-h-[80px] focus-visible:ring-amber-500"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        type="submit"
                        className="w-full bg-amber-500 hover:bg-amber-600 rounded-xl py-6 text-lg"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Mengirim..." : "Konfirmasi Donasi"}
                      </Button>
                    </motion.div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="terimakasih" className="mt-6">
            <Card className="glass rounded-2xl shadow-lg border-0 overflow-hidden">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center mx-auto mb-6 shadow-md">
                  <Heart className="h-10 w-10 text-amber-500" />
                </div>

                <h2 className="text-2xl font-bold mb-4 font-nunito text-slate-800">
                  Terima Kasih Atas <span className="text-amber-500">Donasi Anda</span>
                </h2>

                <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
                  Konfirmasi donasi Anda telah berhasil dikirim. Tim kami akan segera memproses dan menghubungi Anda
                  melalui WhatsApp untuk konfirmasi lebih lanjut. Donasi Anda akan sangat membantu masyarakat Tangerang
                  yang membutuhkan.
                </p>

                <Alert className="bg-amber-50 border-amber-200 mb-6 max-w-xl mx-auto">
                  <CheckCircle2 className="h-4 w-4 text-amber-600" />
                  <AlertTitle className="text-amber-800">Donasi Terkirim</AlertTitle>
                  <AlertDescription className="text-amber-700">
                    Admin akan menghubungi Anda dalam 1x24 jam untuk konfirmasi donasi.
                  </AlertDescription>
                </Alert>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
                  <Button
                    className="bg-amber-500 hover:bg-amber-600 rounded-xl px-8 py-6 text-lg"
                    onClick={() => {
                      setActiveStep("pilih")
                      setIsSubmitted(false)
                      form.reset()
                    }}
                  >
                    Kembali ke Halaman Donasi
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
      <Toaster />
    </div>
  )
}
