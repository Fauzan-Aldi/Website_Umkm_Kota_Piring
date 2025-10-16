import type React from "react"
import type { Metadata } from "next"
import { Inter, Nunito } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"

// Mengimpor font Inter dan Nunito dari Google Fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Kue Cakar Ayam - Platform for anjung Pinang Citizens",
  description: "Digital education, UMKM support, and community-based humanitarian aid for anjung Pinang citizens",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className={`${inter.variable} ${nunito.variable}`}>
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          {/* Komponen untuk scroll ke atas saat navigasi */}
          <ScrollToTop />
          {/* Navbar komponen untuk navigasi utama */}
          <Navbar />
          {/* Konten utama aplikasi */}
          <main className="flex-1">{children}</main>
          {/* Footer komponen untuk bagian bawah halaman */}
          <Footer />
        </div>
      </body>
    </html>
  )
}
