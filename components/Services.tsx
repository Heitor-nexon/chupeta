import React from 'react';
import Section from './Section';
import { Search, Facebook, Layout, MapPin, Database, MessageSquare } from 'lucide-react';

const services = [
  {
    title: "Gestão de Google Ads",
    description: "Apareça exatamente quando o cliente procura por 'mecânico perto de mim'. Fundo de funil qualificado.",
    icon: Search
  },
  {
    title: "Meta Ads (Insta/Face)",
    description: "Anúncios visuais para despertar desejo e branding. Ótimo para estética automotiva e revisões.",
    icon: Facebook
  },
  {
    title: "Landing Pages",
    description: "Páginas de alta conversão focadas em agendamento, sem distrações, carregamento ultra-rápido.",
    icon: Layout
  },
  {
    title: "SEO Local (GMB)",
    description: "Otimização do seu Perfil da Empresa no Google para dominar o mapa da sua região.",
    icon: MapPin
  },
  {
    title: "CRM e Automação",
    description: "Organização dos leads e mensagens automáticas para não deixar o cliente esperando.",
    icon: Database
  },
  {
    title: "Consultoria Comercial",
    description: "Treinamos sua secretária ou consultor técnico para fechar mais orçamentos no WhatsApp.",
    icon: MessageSquare
  }
];

const Services: React.FC = () => {
  return (
    <Section id="servicos">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Nossas Soluções
        </h2>
        <p className="text-gray-400">Tudo o que sua oficina precisa em um só lugar.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-nexon-gray p-8 rounded-2xl hover:bg-gray-800 transition-all border border-transparent hover:border-gray-700">
            <service.icon className="text-[#FF7A00] w-10 h-10 mb-4" />
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <p className="text-gray-400 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Services;