'use client'
import Image from 'next/image'
import LogoF from '@/components/LogoF'
import { motion, AnimatePresence } from 'framer-motion'
import { AppWindowMacIcon, Download, Github, LucideCode, Terminal } from 'lucide-react'
import { useEffect, useState } from 'react'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import { useTheme } from 'next-themes'
import Swal from 'sweetalert2'
import HackerTerminalCode from '@/components/TerminalCode'
import PortfolioIntroAnimation from '@/components/Animation'

const contexts = ['Étudiant en Informatique', 'Développeur Web', 'Programmeur', 'Kali User', '']
const letters = "Fihaonantsoa".split("");
const directions = ["top", "bottom", "left", "right", "top", "bottom", "left", "right", "top", "bottom", "left"];

export default function Page() {
  const [index, setIndex] = useState(0)
  const themes = useTheme()
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % contexts.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])


  const getInitial = (dir) => {
    switch (dir) {
      case "top":
        return { y: -200, opacity: 0 };
      case "bottom":
        return { y: 200, opacity: 0 };
      case "left":
        return { x: -200, opacity: 0 };
      case "right":
        return { x: 200, opacity: 0 };
      default:
        return {};
    }
  };

  function showDev () {
    //   title: "<span class='text-blue-500'>Developpement Web</span>",
    //   html: <MenuHintDialog />,
    //   icon: 'info',
    //   showLoaderOnDeny: 'Oups !'
    // })
  }

  const octogonPoints = `
    30,0 70,0 100,30 100,70
    70,100 30,100 0,70 0,30
  `;
  
  return (
    <section className="dark:bg-gradient-to-b min-h-80 from-gray-900 bg-transparent bg-blue-500 to-gray-800 text-white bg-white px-6 py-12 flex flex-col items-center justify-center">
      <div className="relative w-[120px] h-[120px] mb-10">
        <motion.svg
          viewBox="0 0 100 100"
          className="absolute top-0 left-0 w-full h-full"
        >
          <motion.polygon
            points={octogonPoints}
            fill="none"
            stroke="#38bdf8"
            strokeWidth="4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </motion.svg>

        <motion.div
          className="absolute inset-0 flex items-center justify-center text-white text-5xl font-bold"
          style={{fontFamily: 'Monotype Corsiva', color: "#38bdf8"}}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 3, ease: "easeOut" }}
        >
          <LogoF size={120} />
        </motion.div>
      </div>
      <div className="flex flex-wrap justify-center space-x-1 text-4xl font-bold">
        {letters.map((char, i) => (
          <motion.span
            key={i}
            style={{fontFamily: 'Monotype Corsiva', color: "#38bdf8"}}
            initial={getInitial(directions[i % directions.length])}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 + i * 0.07 }}
          >
            {char}
          </motion.span>
        ))}
      </div>

      <div className=" w-full font-semibold text-xl text-blue-600 animate-bounce text-center mt-10">
        °°°°°
        <AnimatePresence mode="wait">
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.5 }}
          >
            <sup>{contexts[index]}</sup>
          </motion.span>
        </AnimatePresence>°°°°°
      </div>

      <motion.div
        className="grid grid-cols-2 mt-10 md:grid-cols-2 gap-4 mb-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 2 }}
      >
        <motion.a
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          href="/cv.pdf"
          target='_blank'
          rel='noopener noreferrer'
          className="bg-blue-400 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 transition px-5 py-2 rounded-full flex items-center gap-2"
        >
          <Download size={18} /> Télécharger CV
        </motion.a>
        <motion.a
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          href="https://github.com/FIhaonantsoa"
          className="bg-gray-400 hover:bg-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 transition px-5 py-2 rounded-full flex items-center gap-2"
        >
          <Github size={18} /> Mes Projets
        </motion.a>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-5"
        style={{fontFamily: 'Monotype Corsiva'}}
      >
        <div className='w-full flex justify-center items-center text-2xl p-5 transition-transform duration-500 bg-blue-400/70 dark:bg-blue-400/20 hover:scale-110 animate-bounce rounded-xl border-1 border-gray-300 shadow cursor-pointer dark:text-white'>
          <LucideCode size={30} className='mx-3'/> 
          Développement web
        </div>
        <div className='w-full flex justify-center items-center text-2xl p-5 transition-transform duration-500 bg-blue-400/70 dark:bg-blue-400/20 hover:scale-110 md:animate-bounce rounded-xl border-1 border-gray-300 shadow cursor-pointer dark:text-white'>
          <AppWindowMacIcon size={30} className='mx-3'/>
          Application Desktop
        </div>
        <div className='w-full flex justify-center items-center text-2xl p-5 transition-transform duration-500 bg-blue-400/70 dark:bg-blue-400/20 hover:scale-110 md:animate-bounce rounded-xl border-1 border-gray-300 shadow cursor-pointer dark:text-white'>
          <Terminal size={30} className='mx-3'/>
          Algorithme
        </div>
        <div className='w-full flex justify-center items-center text-2xl p-5 transition-transform duration-500 bg-blue-400/70 dark:bg-blue-400/20 hover:scale-110 md:animate-bounce rounded-xl border-1 border-gray-300 shadow cursor-pointer dark:text-white'>
          <Image src="/images/linux.png" width={30} height={30} alt='icone_linux' className='mx-2'/> 
          Système Unix
        </div>
      </motion.div>
      <div className="mt-10 mx-25 w-full shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] h-1">
        <hr className="bg-white opacity-9"/>
      </div>
    </section>
  )
}