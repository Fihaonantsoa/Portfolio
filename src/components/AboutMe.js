'use client'
import { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ScanFaceIcon } from 'lucide-react'

// Texte animé au début
const displayedIntro = "cchargement du profil…"

// Contenu réel à afficher ensuite
const finalText = [
  {
    icon: <ScanFaceIcon size={16}/>,
    content: "Passionné par l'informatique et actuellement étudiant en Génie Logiciel et Base de Données."
  },
  {
    icon: <ScanFaceIcon size={16}/>,
    content: "Mon parcours m’a permis d’acquérir des compétences solides en développement web et logiciel, Programmation Orienté Objet, modélisation de données, et gestion de projet."
  },
  {
    icon: <ScanFaceIcon size={16}/>,
    content: "Ce portfolio reflète mes projets, ma progression et mon ambition constante."
  },
  {
    icon: <ScanFaceIcon size={16}/>,
    content: "Âgé de 17 ans, je suis curieux, rigoureux et toujours prêt à relever de nouveaux défis."
  }
]

const TypewriterIntro = () => {
  const [displayed, setDisplayed] = useState('')
  const [showFinal, setShowFinal] = useState(false)

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  // Effet typewriter pour intro
  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      if (i < displayedIntro.length - 1) {
        setDisplayed((prev) => prev + displayedIntro[i])
        i++
      } else {
        clearInterval(interval)
        setTimeout(() => {
            setShowFinal(true)
        }, 800)
      }
    }, 40)
    return () => clearInterval(interval)
  }, [])

  return (
    <div ref={ref} className="space-y-6 px-4 py-6 bg-blue-700/20 dark:bg-gray-700 text-white rounded-xl shadow-lg text-center lg:text-start font-[Poppins]">

      {!showFinal && (
        <div className="relative pl-4 border-l-4 border-blue-500 bg-blue-200/20 dark:bg-gray-800 p-4 rounded-md shadow-sm">
          <p className="text-sm text-gray-400 mb-1 uppercase tracking-wider">Intro</p>
          <p className="text-md md:text-lg font-light">{displayed}<span className="animate-pulse">|</span></p>
        </div>
      )}

      {showFinal && isInView && (
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {finalText.map((item, index) => (
            <motion.div
              key={index}
              className="relative pl-4 border-l-4 border-blue-500 bg-blue-200/50 dark:bg-gray-800 text-gray-700 dark:text-white p-4 rounded-md shadow-sm"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <p className="text-sm text-gray-400 mb-1 uppercase tracking-wider">Info {index + 1}</p>
              <p className="text-md md:text-lg font-light">{item.icon} {item.content}</p>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  )
}

export default TypewriterIntro