// src/HomePage.jsx
import logo from '../assets/LOGO_Principal_AF.png';
import {motion} from 'framer-motion';
export default function HomePage() {
  return (
    <>
    <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        >
      {/* Hero ou Tagline */}
        <section id="inicio" className="bg-white/50 py-20 text-center">
        
            <img
            src={logo}
            alt="Sibana Logo"
            className="
                mx-auto mb-6
            /* largura total até um máximo */
                w-full max-w-lg
                /* em desktop, ainda maior */
                md:max-w-2xl
                /* garante manter proporção */
                h-auto
                /* para não ultrapassar a viewport */
                object-contain
            "
        />
            <p className="font-cursive text-xl mb-6">
            Guias, textos e memórias que tocam o coração BAL BLA BLA
            </p>
            
        </section>

        {/* Serviços */}
        <section id="servicos" className="py-16 bg-white/50 backdrop-blur-md">
            <h2 className="text-3xl font-cursive text-petrol text-center mb-8">
            Serviços
            </h2>
            <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {["Visitas Guiadas","Textos","Património","Turismo de Saudade"].map((s) => (
                <div key={s} className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
                <h3 className="font-serif text-2xl text-petrol mb-2">{s}</h3>
                <button className="font-serif text-petrol hover:text-gold transition">
                    Saber mais
                </button>
                </div>
            ))}
            </div>
        </section>
    </motion.section>
      {/* Continua com as secções Sobre, Blog, Testemunhos e Contacto... */}
    </>
  );
}
