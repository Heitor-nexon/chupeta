import React from 'react';
import { Target, Users, BarChart3, Rocket, Settings, ShieldCheck } from 'lucide-react';
import Section from './Section';
import { Feature } from '../types';

const features: Feature[] = [
  {
    title: "Resultados em 60-90 dias",
    description: "Não vendemos milagres, vendemos processos. Em até 3 meses sua oficina atinge um novo patamar de faturamento.",
    icon: BarChart3
  },
  {
    title: "Tráfego Especializado",
    description: "Dominamos Google e Meta Ads especificamente para o nicho automotivo. Atraímos quem precisa de conserto agora.",
    icon: Target
  },
  {
    title: "CRM Inteligente",
    description: "Implementamos sistemas que automatizam o follow-up e recuperam clientes inativos da sua base.",
    icon: Settings
  },
  {
    title: "Funil de Vendas",
    description: "Estruturamos toda a jornada do cliente, do primeiro clique no anúncio até o agendamento do serviço.",
    icon: Rocket
  },
  {
    title: "Gestão por Experts",
    description: "Seu gerente de conta entende de carro e de marketing. Falamos a sua língua.",
    icon: Users
  },
  {
    title: "Exclusividade de Área",
    description: "Não atendemos seu concorrente direto na mesma região. Garantimos foco total no seu crescimento.",
    icon: ShieldCheck
  }
];

const Features: React.FC = () => {
  return (
    <Section dark id="beneficios">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Por que a <span className="text-[#FF7A00]">Nexon</span> é diferente?
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Fugimos do "mais do mesmo". Nossa metodologia é desenhada exclusivamente para donos de oficina que querem parar de apagar incêndios e começar a crescer.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="group bg-nexon-gray p-8 rounded-xl border border-gray-800 hover:border-[#FF7A00] transition-colors duration-300"
          >
            <div className="w-14 h-14 bg-[#FF7A00]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#FF7A00] transition-colors duration-300">
              <feature.icon className="text-[#FF7A00] w-8 h-8 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Features;