import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

// This would normally come from Strapi API
const educationArticles = [
  {
    id: 1,
    title: "Cara Memulai Bisnis Online untuk UMKM",
    excerpt: "Panduan lengkap untuk memulai bisnis online bagi pelaku UMKM di Tanjung Pinang.",
    image: "/placeholder.svg?height=200&width=400",
    videoUrl: "https://www.youtube.com/watch?v=example1",
  },
  {
    id: 2,
    title: "Pemasaran Digital untuk Pemula",
    excerpt: "Belajar strategi pemasaran digital yang efektif untuk meningkatkan penjualan produk Anda.",
    image: "/placeholder.svg?height=200&width=400",
    videoUrl: "https://www.youtube.com/watch?v=example2",
  },
  {
    id: 3,
    title: "Mengelola Keuangan Usaha Kecil",
    excerpt: "Tips dan trik mengelola keuangan usaha kecil agar tetap sehat dan berkelanjutan.",
    image: "/placeholder.svg?height=200&width=400",
    videoUrl: "https://www.youtube.com/watch?v=example3",
  },
  {
    id: 4,
    title: "Fotografi Produk dengan Smartphone",
    excerpt: "Panduan praktis untuk mengambil foto produk yang menarik hanya dengan smartphone.",
    image: "/placeholder.svg?height=200&width=400",
    videoUrl: "https://www.youtube.com/watch?v=example4",
  },
  {
    id: 5,
    title: "Membuat Konten Menarik untuk Media Sosial",
    excerpt: "Strategi membuat konten yang menarik dan viral di media sosial untuk bisnis Anda.",
    image: "/placeholder.svg?height=200&width=400",
    videoUrl: "https://www.youtube.com/watch?v=example5",
  },
  {
    id: 6,
    title: "Dasar-dasar SEO untuk Website Bisnis",
    excerpt: "Pelajari dasar-dasar SEO untuk meningkatkan peringkat website bisnis Anda di mesin pencari.",
    image: "/placeholder.svg?height=200&width=400",
    videoUrl: "https://www.youtube.com/watch?v=example6",
  },
]

export default function EducationPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Edukasi Digital</h1>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Akses artikel dan video pembelajaran untuk meningkatkan keterampilan digital Anda. Semua konten dirancang
          khusus untuk membantu warga Tanjung Pinang.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {educationArticles.map((article) => (
          <Card key={article.id} className="card-hover-effect overflow-hidden">
            <div className="relative h-48 w-full">
              <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
            </div>
            <CardHeader>
              <h3 className="text-xl font-bold">{article.title}</h3>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">{article.excerpt}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Baca Artikel</Button>
              {article.videoUrl && (
                <Button variant="ghost" className="text-emerald-600" asChild>
                  <a href={article.videoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Tonton Video
                  </a>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
