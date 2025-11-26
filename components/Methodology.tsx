import React from 'react';
import Section from './Section';
import { Step } from '../types';

const steps: Step[] = [
  {
    number: "01",
    title: "Diagnóstico + Estratégia",
    description: "Analisamos sua região, concorrentes e estrutura atual para desenhar o plano de ataque ideal."
  },
  {
    number: "02",
    title: "Construção dos Anúncios",
    description: "Criamos as campanhas no Google e Instagram com ofertas irresistíveis para atrair motoristas."
  },
  {
    number: "03",
    title: "Otimização Semanal",
    description: "Não abandonamos a conta. Ajustamos lances, públicos e criativos toda semana para baixar o custo por lead."
  },
  {
    number: "04",
    title: "Relatórios e Escala",
    description: "Você recebe relatórios claros de ROI e decidimos juntos os próximos passos para aumentar o investimento."
  }
];

const Methodology: React.FC = () => {
  return (
    <Section id="metodologia">
      <div className="text-center mb-16">
        <span className="text-[#FF7A00] font-bold uppercase tracking-wider text-sm">Passo a Passo</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          Como funciona o <span className="text-[#FF7A00]">Auto Fluxo</span>
        </h2>
      </div>

      <div className="relative">
        {/* Connector Line (Desktop) */}
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-800 -translate-y-1/2 z-0"></div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center md:items-start md:text-left group">
              <div className="w-16 h-16 bg-nexon-black border-4 border-nexon-gray rounded-full flex items-center justify-center text-2xl font-bold text-[#FF7A00] mb-6 group-hover:border-[#FF7A00] group-hover:bg-[#FF7A00] group-hover:text-white transition-all duration-300">
                {step.number}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-400 text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Methodology;