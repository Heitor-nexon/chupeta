import React from 'react';
import { Instagram, Facebook, Linkedin, MapPin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold mb-4 tracking-tighter">NEXON <span className="text-[#FF7A00]">AGÊNCIA</span></h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Especialistas em escalar oficinas mecânicas através de tráfego pago, processos e tecnologia. Metodologia exclusiva Auto Fluxo.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#FF7A00] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#FF7A00] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#FF7A00] transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Links Rápidos</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#beneficios" className="hover:text-[#FF7A00] transition-colors">Benefícios</a></li>
              <li><a href="#metodologia" className="hover:text-[#FF7A00] transition-colors">Como Funciona</a></li>
              <li><a href="#cases" className="hover:text-[#FF7A00] transition-colors">Cases de Sucesso</a></li>
              <li><a href="#sobre" className="hover:text-[#FF7A00] transition-colors">Sobre a Nexon</a></li>
              <li><a href="#contato" className="hover:text-[#FF7A00] transition-colors">Solicitar Proposta</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Contato</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#FF7A00] mt-1 shrink-0" />
                <span>Av. Paulista, 1000 - Bela Vista<br />São Paulo - SP</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#FF7A00] shrink-0" />
                <span>contato@agencianexon.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <p>&copy; {new Date().getFullYear()} Nexon Agência. Todos os direitos reservados.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white">Política de Privacidade</a>
            <a href="#" className="hover:text-white">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;