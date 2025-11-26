import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp: React.FC = () => {
  return (
    <a 
      href="https://wa.me/5511999999999?text=Ol%C3%A1,%20quero%20escalar%20minha%20oficina!" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white py-3 px-5 rounded-full shadow-2xl hover:bg-[#20bd5a] transition-all hover:scale-105 animate-bounce"
      style={{ animationDuration: '2s' }}
    >
      <MessageCircle className="w-6 h-6" />
      <span className="font-bold hidden md:inline">Falar com Especialista</span>
    </a>
  );
};

export default FloatingWhatsApp;