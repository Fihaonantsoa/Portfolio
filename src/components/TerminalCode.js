'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

// Les lignes de code simulées
const codeLines = [
  'function hackTheSystem() {',
  '  const access = true;',
  '  const target = "mainframe";',
  '  while (access) {',
  '    console.log("Accessing " + target);',
  '    // override security',
  '    bruteForce("admin");',
  '  }',
  '}',
  'hackTheSystem();',
]

export default function HackerTerminalCode() {
  const [lines, setLines] = useState([])

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      setLines(prev => {
        // Redémarre quand toutes les lignes sont affichées
        if (index >= codeLines.length) {
          index = 0
          return []
        }
        return [...prev, codeLines[index++]]
      })
    }, 700)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full bg-black text-green-400 font-mono text-sm sm:text-base p-4 border border-green-600 rounded-lg shadow-lg max-h-[300px] overflow-y-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="space-y-1"
      >
        {lines.map((line, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="whitespace-pre"
          >
            {line}
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}