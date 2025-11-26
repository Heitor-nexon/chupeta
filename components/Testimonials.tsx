import React from 'react';
import Section from './Section';
import { Star } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    name: "Ricardo Silva",
    role: "Dono da AutoCenter Premium",
    content: "Antes da Nexon eu gastava rios de dinheiro impulsionando botão no Instagram sem retorno. Hoje minha agenda tá lotada 2 semanas pra frente.",
    result: "+R$ 80.000 em 60 dias"
  },
  {
    name: "Carlos Mendes",
    role: "Proprietário da Mecânica Mendes",
    content: "O atendimento do Marcos e da equipe é diferenciado. Eles entendem de oficina, sabem o que é um ticket médio baixo e como resolver.",
    result: "Dobrou o faturamento"
  },
  {
    name: "Fernanda Oliveira",
    role: "Gestora da Garage 44",
    content: "O CRM que eles implantaram salvou nosso atendimento. Paramos de perder orçamentos no WhatsApp. Recomendo demais!",
    result: "ROI de 10x no 1º mês"
  }
];

const Testimonials: React.FC = () => {
  return (
    <Section dark id="cases">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Resultados que falam por si
          </h2>
          <p className="text-gray-400 mb-8">
            Junte-se a mais de 100 oficinas mecânicas que transformaram sua gestão e faturamento com a metodologia da Nexon Agência.
          </p>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#FF7A00] p-6 rounded-xl text-center">
              <span className="block text-3xl font-bold text-white mb-1">+15k</span>
              <span className="text-xs text-white/90 uppercase font-semibold">Leads Gerados</span>
            </div>
            <div className="bg-nexon-gray border border-gray-800 p-6 rounded-xl text-center">
              <span className="block text-3xl font-bold text-[#FF7A00] mb-1">R$ 5mi+</span>
              <span className="text-xs text-gray-400 uppercase font-semibold">Faturamento Gerado</span>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-nexon-gray p-6 rounded-xl border-l-4 border-[#FF7A00]">
              <div className="flex gap-1 text-[#FF7A00] mb-3">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#FF7A00" />)}
              </div>
              <p className="text-gray-300 italic mb-4">"{item.content}"</p>
              <div className="flex justify-between items-end">
                <div>
                  <p className="font-bold text-white">{item.name}</p>
                  <p className="text-xs text-gray-500">{item.role}</p>
                </div>
                <div className="bg-[#FF7A00]/20 px-3 py-1 rounded text-[#FF7A00] text-xs font-bold">
                  {item.result}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;