'use client'

import { useEffect } from 'react'
import { Hand } from 'lucide-react'
import { motion } from 'framer-motion'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

export default function MenuHintDialog() {
  useEffect(() => {
    MySwal.fire({
      title: 'Besoin d’aide ?',
      html: (
        <div className="flex flex-col items-center gap-4 mt-2">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="text-blue-600"
          >
            <Hand size={50} strokeWidth={2.5} color="#2563eb" />
          </motion.div>
          <p className="text-gray-700 dark:text-gray-200 text-base font-medium text-center px-2">
            Cliquez sur le bouton <b>Menu</b> en haut pour commencer.
          </p>
        </div>
      ),
      showConfirmButton: true,
      confirmButtonText: 'Compris 👍',
      background: '#f0f4ff',
      customClass: {
        popup: 'rounded-2xl shadow-xl',
        confirmButton: 'bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700',
      },
    })
  }, [])

  return null
}