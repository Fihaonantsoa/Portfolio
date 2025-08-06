'use client'
import { useTheme } from 'next-themes'
import { Sun, Moon, Laptop } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="flex gap-2 items-center">
      <button onClick={() => setTheme('light')}>
        <Sun className={theme === 'light' ? 'text-yellow-400' : ''} />
      </button>
      <button onClick={() => setTheme('dark')}>
        <Moon className={theme === 'dark' ? 'text-blue-400' : ''} />
      </button>
      <button onClick={() => setTheme('system')}>
        <Laptop className={theme === 'system' ? 'text-green-400' : ''} />
      </button>
    </div>
  )
}