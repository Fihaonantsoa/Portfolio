'use client'

import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

export default function AnimatedBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="w-full bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] py-5 px-4 text-white shadow-md"
    >
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="flex justify-center items-center gap-3 text-lg sm:text-xl font-semibold"
      >
        <Sparkles className="text-green-400" />
        <span>Bienvenue dans mon univers numérique 👾</span>
      </motion.div>
    </motion.div>
  )
}