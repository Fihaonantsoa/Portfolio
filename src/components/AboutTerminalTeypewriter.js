'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const infos = [
  '/// A propos de moi :',
  'coonst profil = {',
  '  nom: "RAFANOMANANA Ainamirindra Fihaonantsoa"',
  '  statut: "Etudiant à l Ecole Nationale d Informatique"',
  '  passion: "Developpement Web","Etude de montage avec DaVinci Resolve"',
  '  qualites: ["Rigoureux", "Motivé", "Curieux", "Apprentissage rapide"],',
  '  aime: ["Programmation", "Algorithmique", "Resolution de problemes"],',
  '  objectif: "Progresser chaque jour",',
  '};',
  'coonsole.log("Bienvenue dans mon univers");'
]

function TypewriterLine({ text, delay = 0 }) {
  const [displayed, setDisplayed] = useState('')

  useEffect(() => {
    let i = 0
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayed(prev => prev + text[i])
        i++
        if (i >= text.length - 1) clearInterval(interval)
      }, 40)
    }, delay)

    return () => {
      clearTimeout(timer)
    }
  }, [text, delay])

  return (
    <div className="whitespace-pre">
      {displayed}
      <span className="animate-pulse">█</span>
    </div>
  )
}

export default function AboutTerminalTypewriter() {
  const [index, setIndex] = useState(0)

  const currentLines = [
    infos[index],
    infos[(index + 1) % infos.length]
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 2) % infos.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full max-w-2xl mx-10 bg-gray-800 border border-green-600 rounded-lg p-5 text-green-400 font-mono text-sm sm:text-base shadow-lg">
      <motion.div
        key={index}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-1"
      >
        <TypewriterLine key={index} text={currentLines[0]} />
        <TypewriterLine key={index + 1} text={currentLines[1]} delay={600} />
      </motion.div>
    </div>
  )
}