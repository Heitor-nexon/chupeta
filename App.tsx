import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Methodology from './components/Methodology';
import Testimonials from './components/Testimonials';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import { Menu, X } from 'lucide-react';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <div className="min-h-screen bg-nexon-black text-white font-sans selection:bg-[#FF7A00] selection:text-white">
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
          <a href="#" className="text-2xl font-extrabold tracking-tighter hover:opacity-80 transition-opacity">
            NEXON <span className="text-[#FF7A00]">AGÊNCIA</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-semibold">
            <a href="#beneficios" className="hover:text-[#FF7A00] transition-colors">Diferenciais</a>
            <a href="#metodologia" className="hover:text-[#FF7A00] transition-colors">Como Funciona</a>
            <a href="#cases" className="hover:text-[#FF7A00] transition-colors">Resultados</a>
            <a href="#sobre" className="hover:text-[#FF7A00] transition-colors">Sobre</a>
            <button 
              onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#FF7A00] text-white px-6 py-2 rounded-full hover:bg-[#E66E00] transition-colors"
            >
              Falar com Especialista
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={toggleMenu}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-nexon-dark border-t border-gray-800 p-6 flex flex-col space-y-4 shadow-2xl">
            <a href="#beneficios" className="block text-lg font-medium" onClick={toggleMenu}>Diferenciais</a>
            <a href="#metodologia" className="block text-lg font-medium" onClick={toggleMenu}>Como Funciona</a>
            <a href="#cases" className="block text-lg font-medium" onClick={toggleMenu}>Resultados</a>
            <a href="#sobre" className="block text-lg font-medium" onClick={toggleMenu}>Sobre</a>
            <a href="#contato" className="block text-[#FF7A00] font-bold text-lg" onClick={toggleMenu}>Falar com Especialista</a>
          </div>
        )}
      </nav>

      <main>
        <Hero />
        <Features />
        <Methodology />
        <Testimonials />
        <Services />
        <About />
        <Contact />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;