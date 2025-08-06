'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const infos = [
  '// À propos de moi :',
  'const profil = {',
  '  passion: "Développement Web",',
  '  qualités: ["Rigoureux", "Ponctuel", "Curieux", "Apprentissage rapide"],',
  '  aime: ["Programmation", "Algorithmique", "Résolution de problèmes"],',
  '  objectif: "Progresser chaque jour 💻",',
  '};',
  'console.log("Bienvenue dans mon univers 👨‍💻");'
]

export default function AboutTerminalCycling() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 2) % infos.length)
    }, 2500) // Affiche 2 lignes toutes les 2.5s

    return () => clearInterval(interval)
  }, [])

  const currentLines = [
    infos[index],
    infos[(index + 1) % infos.length]
  ]

  return (
    <div className="w-full max-w-2xl mx-auto bg-black border border-green-600 rounded-lg p-5 text-green-400 font-mono text-sm sm:text-base shadow-lg">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-1"
        >
          {currentLines.map((line, i) => (
            <div key={i} className="whitespace-pre">
              {line}
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}