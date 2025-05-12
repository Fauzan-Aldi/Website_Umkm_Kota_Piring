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
import { AlertCircle, CheckCircle2 } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Nama harus minimal 2 karakter.",
  }),
  contact: z.string().min(10, {
    message: "Nomor kontak harus valid.",
  }),
  description: z.string().min(10, {
    message: "Deskripsi kebutuhan harus minimal 10 karakter.",
  }),
  address: z.string().min(10, {
    message: "Alamat harus lengkap dan minimal 10 karakter.",
  }),
})

export default function AidRequestPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      contact: "",
      description: "",
      address: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    setError(null)

    try {
      // In a real app, this would send data to Strapi API
      // const response = await fetch('/api/aid-requests', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(values),
      // })

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // if (!response.ok) throw new Error('Gagal mengirim permintaan')

      setIsSubmitted(true)
      toast({
        title: "Permintaan Terkirim",
        description: "Permintaan bantuan Anda telah berhasil dikirim. Tim kami akan menghubungi Anda segera.",
      })
    } catch (err) {
      setError("Terjadi kesalahan saat mengirim permintaan. Silakan coba lagi nanti.")
      toast({
        variant: "destructive",
        title: "Terjadi Kesalahan",
        description: "Gagal mengirim permintaan bantuan. Silakan coba lagi nanti.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Ajukan Bantuan</h1>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Isi formulir di bawah ini untuk mengajukan bantuan kemanusiaan. Tim kami akan meninjau permintaan Anda dan
          menghubungi Anda segera.
        </p>
      </div>

      <div className="max-w-md mx-auto">
        {isSubmitted ? (
          <Alert className="bg-emerald-50 border-emerald-200 mb-6">
            <CheckCircle2 className="h-4 w-4 text-emerald-600" />
            <AlertTitle className="text-emerald-800">Permintaan Terkirim</AlertTitle>
            <AlertDescription className="text-emerald-700">
              Permintaan bantuan Anda telah berhasil dikirim. Tim kami akan menghubungi Anda segera.
            </AlertDescription>
          </Alert>
        ) : error ? (
          <Alert variant="destructive" className="mb-6">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        ) : null}

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
                  <FormDescription>Kami akan menghubungi Anda melalui WhatsApp.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Alamat Lengkap</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Masukkan alamat lengkap Anda" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Deskripsi Kebutuhan</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Jelaskan bantuan yang Anda butuhkan" className="min-h-[120px]" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700" disabled={isSubmitting}>
              {isSubmitting ? "Mengirim..." : "Kirim Permintaan"}
            </Button>
          </form>
        </Form>
      </div>
      <Toaster />
    </div>
  )
}
