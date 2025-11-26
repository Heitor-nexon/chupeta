import React from 'react';
import Section from './Section';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <Section dark id="sobre">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 relative">
            <div className="absolute inset-0 bg-[#FF7A00] transform translate-x-4 translate-y-4 rounded-xl"></div>
            <img 
              src="https://picsum.photos/600/800" 
              alt="Marcos Alberto Fundador" 
              className="relative z-10 rounded-xl w-full h-auto grayscale hover:grayscale-0 transition-all duration-500 shadow-xl"
            />
        </div>
        
        <div className="order-1 md:order-2">
          <span className="text-[#FF7A00] font-bold uppercase tracking-wider text-sm">Sobre Nós</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
            Especialistas em fazer oficinas crescerem
          </h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Olá, sou <strong>Marcos Alberto</strong>, fundador da Nexon Agência. 
          </p>
          <p className="text-gray-300 mb-8 leading-relaxed">
            Após anos vendo oficinas mecânicas com potencial fechando as portas por falta de clientes ou má gestão, decidi criar a metodologia <strong>Auto Fluxo</strong>. Unimos o melhor do tráfego pago com processos comerciais validados para o setor automotivo.
          </p>

          <ul className="space-y-3 mb-8">
            <li className="flex items-center gap-3">
              <CheckCircle2 className="text-[#FF7A00]" size={20} />
              <span className="text-white">Expertise 100% no nicho automotivo</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle2 className="text-[#FF7A00]" size={20} />
              <span className="text-white">Mais de 100 oficinas atendidas</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle2 className="text-[#FF7A00]" size={20} />
              <span className="text-white">Foco total em ROI (Retorno sobre Investimento)</span>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default About;