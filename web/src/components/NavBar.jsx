export default function Navbar() {
  const navLeft = ["Início", "Sobre mim"];
  const navRight = ["Serviços", "Contacto"];

  return (
    <header className="bg-beige sticky top-0 z-50 shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Esquerda */}
          <div className="flex gap-6">
            {navLeft.map((item, idx) => (
              <button
                key={idx}
                className="appearance-none bg-transparent border-none p-0 m-0 text-lg font-cursive text-petrol relative group transition-colors duration-300 cursor-pointer"
              >
                <span className="group-hover:text-gold">{item}</span>
                <span className="absolute left-0 -bottom-1 w-0 h-[1.5px] bg-gold group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>

          {/* Centro */}
          <div className="font-cursive text-[2.7rem] text-petrol tracking-wide leading-none">
            Sibana
          </div>

          {/* Direita */}
          <div className="flex gap-6">
            {navRight.map((item, idx) => (
              <button
                key={idx}
                className="appearance-none bg-transparent border-none p-0 m-0 text-lg font-cursive text-petrol relative group transition-colors duration-300 cursor-pointer"
              >
                <span className="group-hover:text-petrol">{item}</span>
                <span className="absolute left-0 -bottom-1 w-0 h-[1.5px] bg-gold group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
