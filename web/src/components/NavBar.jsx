// src/components/Navbar.jsx
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

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

  return (
    <header className="bg-beige z-50 shadow-sm">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-8">
        {/* Marca apenas em mobile */}
        <div className="md:hidden text-2xl font-cursive text-petrol">Sibana</div>

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
          
             <Menu className="h-6 w-6 text-petrol" />
        </button>
      </nav>

      {/* Painel full‑screen mobile */}
      <div
        className={`
          fixed inset-0 bg-beige flex flex-col items-center justify-center
          space-y-8 z-40
          transform transition-transform duration-500 ease-in-out
          ${open
            ? 'translate-x-0'
            : 'translate-x-full'}
        `}
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
          <button
            key={item}
            onClick={() => setOpen(false)}
            className="appearance-none bg-transparent border-none p-0
                       text-2xl font-serif text-petrol relative group
                       transition-colors duration-300 cursor-pointer"
          >
            <span className="group-hover:text-gold">{item}</span>
            <span
              className="absolute left-0 -bottom-1 w-0 h-[1px] bg-gold
                         group-hover:w-full transition-all duration-300"
            />
          </button>
        ))}
      </div>
    </header>
  )
}
