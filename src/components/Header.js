'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ChevronDown, Menu, X, Home, User2, SettingsIcon,
  Sun, Moon, Airplay, FileArchive
} from 'lucide-react'
import { useTheme } from 'next-themes'
import LogoF from './LogoF'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const { theme, resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const menuItems = [
    { href: '/', label: 'Accueil', icone: <Home size={16} /> },
    { href: '/about', label: 'À propos', icone: <User2 size={16} /> },
    {
      label: 'Thème',
      icone: <SettingsIcon size={16} />,
      sub: [
        { label: 'Clair', icone: <Sun size={16} />, action: () => setTheme('light') },
        { label: 'Sombre', icone: <Moon size={16} />, action: () => setTheme('dark') },
        { label: 'Système', icone: <Airplay size={16} />, action: () => setTheme('system') },
      ],
    },
    { href: '/project', label: 'Projets', icone: <FileArchive size={16} /> },
  ]

  const dropdownVariants = {
    closed: { opacity: 0, y: -10, scale: 0.95 },
    open: { opacity: 1, y: 0, scale: 1 },
  }

  const itemHover = {
    scale: 1.05,
    x: 5,
    color: '#fffb00ff',
    transition: { type: 'spring', stiffness: 300, damping: 20 },
  }


  return (
    <header className="bg-white dark:bg-gray-800 text-gray-700 dark:text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.h1 initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-2xl font-bold">
          <LogoF size={40} />
        </motion.h1>

        <nav className="hidden md:flex gap-3 items-center">
          {menuItems.map((item, idx) => (
            item.sub ? (
              <div key={idx} className="relative group" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
                <motion.button
                  className="flex items-center text-gray-700 dark:text-white gap-1 ml-4 px-4 py-2 rounded-full dark:hover:bg-slate-200/20 hover:bg-slate-700/50 cursor-pointer"
                  whileHover={itemHover}
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  aria-expanded={dropdownOpen} 
                  type="button">
                  {item.icone}
                  <span className="w-[10px]" />
                  {item.label}
                  <motion.span animate={{ rotate: dropdownOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronDown size={16} />
                  </motion.span>
                </motion.button>

                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial="closed" animate="open" exit="closed" variants={dropdownVariants} transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 bg-white dark:bg-gray-700 rounded-lg shadow-lg p-2 w-60"
                    >
                      {item.sub.map((sub, i) => (
                        <motion.div key={i} whileHover={itemHover} className="px-4 py-2 text-gray-700 dark:text-white rounded-md cursor-pointer dark:hover:bg-slate-200/20 hover:bg-slate-700/50 "
                          onClick={sub.action}>
                          <div className="flex items-center gap-2">
                            {sub.icone}
                            {sub.label}
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <motion.div key={item.href} whileHover={itemHover} className="cursor-pointer">
                <Link href={item.href} className="flex items-center ml-4 px-4 py-2 rounded-full dark:hover:bg-slate-200/20 hover:bg-slate-700/50">
                  {item.icone}
                  <span className="w-[10px]" />
                  {item.label}
                </Link>
              </motion.div>
            )
          ))}

          {mounted && (
            <div className="pl-4">
              <span><strong>{resolvedTheme === 'light'? <Sun size={16}/>:<Moon size={16}/>}</strong></span>
            </div>
          )}
        </nav>

        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 rounded-full text-blue-600 hover:bg-blue-100 transition" aria-label="Toggle menu">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-white dark:bg-gray-800 rounded-b-2xl shadow-md px-6 py-4 space-y-3"
          >
            {menuItems.map((item, i) => (
              item.sub ? (
                <details key={i} className="group">
                  <summary className="flex items-center gap-2 py-2 px-4 rounded-full dark:hover:bg-slate-200/20 hover:bg-slate-700/50 hover:text-yellow-300 cursor-pointer">
                    {item.icone}
                    {item.label}
                    <ChevronDown size={16} className="group-open:rotate-180 transition" />
                  </summary>
                  <div className="pl-4 pt-2 space-y-2">
                    {item.sub.map((sub, si) => (
                      <motion.div key={si} whileHover={itemHover} className="flex items-center gap-2 px-4 py-2 w-full rounded-full dark:hover:bg-slate-200/20 hover:bg-slate-700/50 cursor-pointer"
                        onClick={() => { sub.action(); setMenuOpen(false) }}>
                        {sub.icone}
                        {sub.label}
                      </motion.div>
                    ))}
                  </div>
                </details>
              ) : (
                <motion.div key={i} whileHover={itemHover}>
                  <Link href={item.href} onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-2 px-4 py-2 w-full rounded-full dark:hover:bg-slate-200/20 hover:bg-slate-700/50 ">
                    {item.icone}
                    {item.label}
                  </Link>
                </motion.div>
              )
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}