import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const HeroSection = () => {
  return (
    <section className="relative py-12 md:py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
              Membangun Tangerang <span className="text-emerald-600">Bersama</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-lg">
              GOCARI adalah platform digital untuk edukasi, dukungan UMKM, dan bantuan kemanusiaan bagi warga Tangerang.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
                <Link href="/aid">
                  Ajukan Bantuan <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/donation">Berikan Donasi</Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Warga Tangerang"
                width={600}
                height={500}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
