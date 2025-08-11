'use client'
import { useState, useEffect, useRef } from 'react'
import { Facebook, Instagram, Github, Linkedin, MessageSquare, Send, X, Mail } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Swal from 'sweetalert2'

export default function Footer() {
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [nom, setNom] = useState('')
  const [message, setMessage] = useState('')
  const [shake, setShake] = useState(false)
  const popupRef = useRef(null)
  const [status, setStatus] = useState('')

  // Valider un email simple avec RegEx
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  // Fermer si on clique en dehors ET si email/message vide
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target) &&
        message.trim() === '' &&
        email.trim() === '' &&
        nom.trim() === ''
      ) {
        setStatus('')
        setOpen(false)
      }
    }
    if (open) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [open, message, email])

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('Envoi en cours...')

    const data = {
      name: nom,
      email: email,
      message: message,
    }
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    if (res.ok) {
      setStatus('Message envoyé avec succès')      
      e.target.reset()
    } else {
      setStatus('Erreur lors de l’envoi')
    }
  }

  const icons = [
    { icon: <Facebook />, link: 'https://facebook.com/ainamirindra.rafanomanana'},
    { icon: <Mail />, link: "mailto:fihaonantsoacgm@gmail.com?subject=Demande%20de%20contact%20professionnel&body=Bonjour%20Fihaonantsoa%2C%0A%0AJe%20souhaite%20entrer%20en%20contact%20avec%20vous%20au%20sujet%20de%20votre%20portfolio%20et%20de%20vos%20compétences.%0A%0AN'hésitez%20pas%20à%20me%20recontacter.%0A%0ACordialement%2C%0A%5BVotre%20nom%5D" },
    { icon: <Github />, link: 'https://github.com/Fihaonantsoa' },
    { icon: <Linkedin />, link: 'https://linkedin.com' },
  ]

  return (
    <footer className="bg-gray-900 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] text-white light:text-gray-600 py-8 relative">
      {/* Icônes réseaux */}
      <div className="flex justify-center gap-6 mb-4">
        {icons.map((item, idx) => (
          <a
            key={idx}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:animate-bounce transform transition-all duration-300 hover:scale-110"
          >
            {item.icon}
          </a>
        ))}
      </div>
      {/* <button onClick={() => setOpen(true)} className="hover:animate-bounce messenger transition">
        <MessageSquare />
      </button> */}
      
      <div className="w-full flex justify-center items-center my-5">
        <hr className='w-78 opacity-9'/>
      </div>

      {/* Droits */}
      <p className="text-center text-sm">© 2025 RAFANOMANANA Ainamirindra Fihaonantsoa. Création originale.</p>

      {/* Pop-up */}
      <AnimatePresence>
        {open && (
          <form>
          <motion.div
            ref={popupRef}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-20 ml-6 right-6 max-w-100 dark:bg-white bg-white shadow-xl rounded-xl border border-gray-300 z-50"
          >
            <motion.div
              animate={shake ? { x: [0, 0, 0, 0, 0] } : {}}
              transition={{ duration: 0.4 }}
            >
              <div className="bg-gray-800 px-4 py-2 rounded-t-xl flex justify-between items-center">
                <span>Contact rapide</span>
                <button onClick={() => setOpen(false)} className="text-white cursor-pointer"> <X size={16}/> </button>
              </div>
              <div className="p-4 space-y-3">
                <input 
                  type="text"
                  value={nom}
                  onChange={(e) => setNom(e.target.value)}
                  placeholder="Votre Nom"
                  className="w-full border bg-white text-gray-700 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-700"
                  
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Votre adresse e-mail"
                  className="w-full border bg-white text-gray-700 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-700"
                  
                />
                <textarea
                  rows="10"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Votre message"
                  className="w-full border bg-white text-gray-700 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-700"
                  
                />
                <button
                  onClick={handleSubmit}
                  className="w-full bg-gray-800 hover:bg-gray-900 text-white py-2 rounded-md cursor-pointer transition flex justify-center items-center"
                  type='submit'
                >
                  <Send size={16} className='mx-3'/>
                  Envoyer
                </button>
                {status && <p className="text-sm text-gray-700">{status}</p>}
              </div>
            </motion.div>
          </motion.div>
          </form>
        )}
      </AnimatePresence>
    </footer>
  )
}
