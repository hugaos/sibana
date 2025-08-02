// src/components/Navbar.jsx
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const navItems = [
    "Início",
    "Serviços",
    "Sobre mim",
    "Blog",
    "Testemunhos",
    "Contacto",
  ]
  const [visible, setVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY < 10) {
        setVisible(true)
      } else if (currentScrollY > lastScrollY) {
        setVisible(false) // scroll para baixo
      } else {
        setVisible(true) // scroll para cima
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <motion.header
        initial={{ y: -100 }}
        animate={{ y: visible ? 0 : -100 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="fixed w-full top-0 bg-beige z-50 shadow-sm transition-shadow"
      >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4 md:px-6 md:py-8">
        {/* Marca apenas em mobile */}
        <div className="md:hidden text-xl font-cursive text-petrol">Sibana</div>

        {/* Links desktop */}
        <ul className="hidden md:flex gap-8 justify-center w-full">
          {navItems.map(item => (
            <li key={item}>
              <button
                className="appearance-none bg-transparent border-none p-0
                           text-lg font-cursive text-petrol relative group
                           transition-colors duration-300 cursor-pointer"
              >
                <span className="group-hover:text-gold">{item}</span>
                <span
                  className="absolute left-0 -bottom-1 w-0 h-[1px] bg-gold
                             group-hover:w-full transition-all duration-300"
                />
              </button>
            </li>
          ))}
        </ul>

        {/* Botão hambúrguer em mobile */}
        <button
          className="md:hidden p-2 focus:outline-none"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <Menu className="h-5 w-5 text-petrol" />
        </button>
      </nav>

      {/* Painel full‑screen mobile */}
      <motion.div
        initial={{ x: "100%" }}
        animate={open ? { x: 0 } : { x: "100%" }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="fixed inset-0 bg-beige flex flex-col items-center justify-center
                  space-y-8 z-40"
      >
              {/* X de fechar no painel */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 p-2 focus:outline-none"
          aria-label="Fechar menu"
        >
          <X className="h-6 w-6 text-petrol" />
        </button>

        {/* Itens do menu com espaçamento maior */}
        {navItems.map(item => (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="appearance-none bg-transparent border-none p-0
                      text-2xl font-serif text-petrol relative group cursor-pointer"
            onClick={() => setOpen(false)}
          >
            <span className="group-hover:text-gold">{item}</span>
            <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-gold group-hover:w-full transition-all duration-300" />
          </motion.button>
        ))}
      </motion.div>
    </motion.header>
  )
}
