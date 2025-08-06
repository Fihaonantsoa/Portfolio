'use client'
import { motion } from "framer-motion"

export default function SkillBar({ nom, pourcentage }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.4, type: 'spring' }}
      whileHover={{ scale: 1.03, boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)' }}
      viewport={{ once: true }}
      className="mb-4 p-2 rounded-lg shadow"
    >
      <h4 className="text-sm uppercase font-medium text-blue-400 mb-1 pl-2 border-l-4 border-blue-500">
        {nom} <i className="text-right text-xs text-end w-full text-gray-500"> {pourcentage}% </i>
      </h4>

      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">

        <div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-700"
          style={{ width: `${pourcentage}%` }}
        ></div>
      </div>
    </motion.div>
  )
}
