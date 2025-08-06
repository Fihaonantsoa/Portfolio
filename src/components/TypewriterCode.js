'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const codeLines = [
  'function startPortfolio() {',
  '  const dev = "Fihaonantsoa";',
  '  let skills = ["Next.js", "React", "TailwindCSS", "Framer Motion"];',
  '  return dev + " is coding...";',
  '}',
]

export default function TypewriterCode() {
  const [displayedLines, setDisplayedLines] = useState([])

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      setDisplayedLines(lines => {
        if (index >= codeLines.length) {
          return []
        }
        return [...lines, codeLines[index++]]
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full min-h-[300px] bg-black bg-opacity-90 text-green-400 font-mono text-sm sm:text-base p-4 border border-green-600 rounded-lg shadow-inner overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="space-y-1"
      >
        {displayedLines.map((line, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: idx * 0.1 }}
            className="whitespace-pre"
          >
            {line}
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}