import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

// This would normally come from Strapi API
const educationArticles = [
  {
    id: 1,
    title: "umkm",
    excerpt: "umkm.",
    image: "/p7.JPG",
  },
  {
    id: 2,
    title: "umkm",
    excerpt: "umkm.",
    image: "/p4.JPG",
    
  },
  {
    id: 3,
    title: "umkm",
    excerpt: "umkm",
    image: "/p2.JPG",
   
  },
 
]

export default function EducationPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Produk Kami</h1>
        <p className="text-slate-600 max-w-2xl mx-auto">
        Kami menyediakan Kue Cakar Ayam yang lezat dan bergizi, cocok untuk camilan keluarga, oleh-oleh, maupun acara khusus.
        </p>
      </div>

      <div className="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-3 gap-10">
     
        {educationArticles.map((article) => (
          <Card key={article.id} className="card-hover-effect overflow-hidden">
            <div className="relative h-72 w-full">
              <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
            </div>
            <CardHeader>
              <h3 className="text-xl font-bold">{article.title}</h3>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">{article.excerpt}</p>
            </CardContent>

          </Card>
        ))}
      </div>
    </div>
  )
}
