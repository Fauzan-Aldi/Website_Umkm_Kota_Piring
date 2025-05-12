"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export default function ScrollToTop() {
  const pathname = usePathname()

  // Scroll ke atas saat rute berubah
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
