"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"
import { AlertCircle, CheckCircle2, MessageSquare } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Card, CardContent } from "@/components/ui/card"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Nama harus minimal 2 karakter.",
  }),
  contact: z.string().min(10, {
    message: "Nomor kontak harus valid.",
  }),
  email: z.string().email({
    message: "Email harus valid.",
  }),
  skills: z.string().min(2, {
    message: "Keahlian harus diisi.",
  }),
  motivation: z.string().min(10, {
    message: "Motivasi harus minimal 10 karakter.",
  }),
})

export default function VolunteerPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      contact: "",
      email: "",
      skills: "",
      motivation: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    setError(null)

    try {
      // In a real app, this would send data to Strapi API
      // const response = await fetch('/api/volunteers', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(values),
      // })

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // if (!response.ok) throw new Error('Gagal mengirim pendaftaran')

      setIsSubmitted(true)
      toast({
        title: "Pendaftaran Terkirim",
        description: "Pendaftaran relawan Anda telah berhasil dikirim. Tim kami akan menghubungi Anda segera.",
      })
    } catch (err) {
      setError("Terjadi kesalahan saat mengirim pendaftaran. Silakan coba lagi nanti.")
      toast({
        variant: "destructive",
        title: "Terjadi Kesalahan",
        description: "Gagal mengirim pendaftaran relawan. Silakan coba lagi nanti.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Jadi Relawan</h1>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Bergabunglah dengan tim relawan GOCARI dan jadilah bagian dari perubahan positif di Tangerang. Kami
          membutuhkan bantuan Anda untuk mewujudkan masyarakat yang lebih baik.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">Mengapa Menjadi Relawan?</h2>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg">Dampak Nyata</h3>
                <p className="text-slate-600">
                  Berkontribusi langsung dalam membantu warga Tangerang yang membutuhkan.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">Pengembangan Diri</h3>
                <p className="text-slate-600">Mengembangkan keterampilan baru dan memperluas jaringan sosial Anda.</p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">Pengalaman Berharga</h3>
                <p className="text-slate-600">
                  Mendapatkan pengalaman yang berharga dalam kegiatan sosial dan kemanusiaan.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">Fleksibilitas</h3>
                <p className="text-slate-600">Jadwal yang fleksibel sesuai dengan ketersediaan waktu Anda.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div>
          <h2 className="text-2xl font-bold mb-4">Formulir Pendaftaran</h2>

          {isSubmitted ? (
            <div className="space-y-6">
              <Alert className="bg-emerald-50 border-emerald-200">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                <AlertTitle className="text-emerald-800">Pendaftaran Terkirim</AlertTitle>
                <AlertDescription className="text-emerald-700">
                  Pendaftaran relawan Anda telah berhasil dikirim. Tim kami akan menghubungi Anda segera.
                </AlertDescription>
              </Alert>

              <Button asChild className="w-full bg-emerald-600 hover:bg-emerald-700">
                <a
                  href="https://wa.me/6288294799116?text=Halo, saya baru saja mendaftar sebagai relawan GOCARI dan ingin mendapatkan informasi lebih lanjut."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Hubungi Admin via WhatsApp
                </a>
              </Button>
            </div>
          ) : error ? (
            <Alert variant="destructive" className="mb-6">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          ) : null}

          {!isSubmitted && (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nama Lengkap</FormLabel>
                      <FormControl>
                        <Input placeholder="Masukkan nama lengkap Anda" {...field} />
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
                        <Input placeholder="Contoh: 08123456789" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="email@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="skills"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Keahlian</FormLabel>
                      <FormControl>
                        <Input placeholder="Contoh: Mengajar, Desain, Fotografi" {...field} />
                      </FormControl>
                      <FormDescription>Tuliskan keahlian yang dapat Anda kontribusikan.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="motivation"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Motivasi</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Ceritakan mengapa Anda ingin menjadi relawan GOCARI"
                          className="min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700" disabled={isSubmitting}>
                  {isSubmitting ? "Mengirim..." : "Daftar Sebagai Relawan"}
                </Button>
              </form>
            </Form>
          )}
        </div>
      </div>
      <Toaster />
    </div>
  )
}
