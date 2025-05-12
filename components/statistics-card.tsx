"use client"

import { BookOpen, ShoppingBag, Heart, Gift, Wallet, MessageCircle, Users, type LucideIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

interface StatisticsCardProps {
  title: string
  value: string
  description: string
  icon: string
}

const StatisticsCard = ({ title, value, description, icon }: StatisticsCardProps) => {
  // Mapping ikon Lucide ke komponen
  const iconMap: Record<string, LucideIcon> = {
    BookOpen,
    ShoppingBag,
    Heart,
    Gift,
    Wallet,
    MessageCircle,
    Users,
  }

  const IconComponent = iconMap[icon] || Users

  // Animasi untuk nilai statistik
  const valueVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      },
    },
  }

  return (
    <Card className="glass rounded-2xl shadow-lg border-0 overflow-hidden">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center shadow-md flex-shrink-0">
            <IconComponent className="h-6 w-6 text-amber-500" />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-700">{title}</h3>
            <motion.p
              className="text-3xl font-bold text-amber-500 my-2 font-nunito"
              variants={valueVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {value}
            </motion.p>
            <p className="text-sm text-slate-500">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default StatisticsCard
