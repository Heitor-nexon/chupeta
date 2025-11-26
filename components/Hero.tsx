import React from 'react';
import { ArrowRight, TrendingUp } from 'lucide-react';
import Button from './Button';

const Hero: React.FC = () => {
  const handleCtaClick = () => {
    window.open("https://wa.me/5511999999999?text=Ol%C3%A1,%20quero%20atrair%20mais%20clientes", "_blank");
  };

  return (
    <div className="relative min-h-screen flex items-center bg-nexon-black overflow-hidden pt-20 md:pt-0">
      {/* Background Overlay with Gradient */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black"></div>
        <img 
          src="https://picsum.photos/1920/1080?grayscale&blur=2" 
          alt="Oficina Mecânica Fundo" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-[#FF7A00]/10 border border-[#FF7A00]/30 px-4 py-1 rounded-full text-[#FF7A00] text-sm font-semibold">
            <TrendingUp size={16} />
            <span>Método Auto Fluxo Validado</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Escalamos Oficinas Mecânicas com <span className="text-[#FF7A00]">Tráfego Pago</span> e <span className="text-[#FF7A00]">CRM Inteligente</span>.
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-lg">
            Pare de depender da sorte. Implemente a metodologia Auto Fluxo e encha sua agenda de clientes qualificados em menos de 30 dias.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button onClick={handleCtaClick}>
              Quero Atrair Mais Clientes
              <ArrowRight size={20} />
            </Button>
            <Button variant="outline" onClick={() => document.getElementById('cases')?.scrollIntoView({ behavior: 'smooth'})}>
              Ver Resultados
            </Button>
          </div>
          
          <div className="pt-4 flex items-center gap-4 text-sm text-gray-500">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-gray-700 border-2 border-black"></div>
              <div className="w-8 h-8 rounded-full bg-gray-600 border-2 border-black"></div>
              <div className="w-8 h-8 rounded-full bg-gray-500 border-2 border-black"></div>
            </div>
            <p>+100 Oficinas transformadas</p>
          </div>
        </div>

        {/* Right Image/Visual */}
        <div className="relative hidden md:block">
            <div className="absolute -inset-4 bg-[#FF7A00]/20 rounded-2xl blur-xl"></div>
            <div className="relative rounded-2xl overflow-hidden border border-gray-800 shadow-2xl">
               <img 
                 src="https://picsum.photos/600/700" 
                 alt="Mecânico profissional trabalhando" 
                 className="w-full h-full object-cover"
               />
               <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-8">
                 <p className="text-[#FF7A00] font-bold text-xl">Resultado Comprovado</p>
                 <p className="text-white">+R$ 80k de faturamento extra/mês</p>
               </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;