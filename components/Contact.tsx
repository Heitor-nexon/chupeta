import React, { useState } from 'react';
import Section from './Section';
import Button from './Button';
import { MessageSquare, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    revenue: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission redirect to WhatsApp
    const message = `Olá, meu nome é ${formState.name}, faturamos ${formState.revenue} e gostaria de uma análise para minha oficina.`;
    const url = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div id="contato">
      {/* Orange Strong CTA Bar */}
      <div className="bg-[#FF7A00] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
            Pronto para dobrar o faturamento da sua oficina?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Agende uma sessão estratégica gratuita. Analisamos seu negócio e te mostramos o caminho do crescimento.
          </p>
          <Button variant="whatsapp" className="mx-auto bg-white text-[#FF7A00] hover:bg-gray-100" onClick={() => window.open("https://wa.me/5511999999999", "_blank")}>
            <MessageSquare size={20} />
            Chamar no WhatsApp Agora
          </Button>
        </div>
      </div>

      {/* Form Section */}
      <Section dark className="border-t border-gray-900">
        <div className="max-w-xl mx-auto bg-nexon-gray p-8 rounded-2xl border border-gray-800 shadow-2xl">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Solicite uma Análise</h3>
            <p className="text-gray-400 text-sm">Preencha os dados abaixo para receber o contato de um especialista.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Nome Completo</label>
              <input 
                type="text" 
                id="name"
                name="name"
                required
                value={formState.name}
                onChange={handleChange}
                className="w-full bg-nexon-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#FF7A00] transition-colors"
                placeholder="Seu nome"
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-1">WhatsApp</label>
              <input 
                type="tel" 
                id="phone"
                name="phone"
                required
                value={formState.phone}
                onChange={handleChange}
                className="w-full bg-nexon-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#FF7A00] transition-colors"
                placeholder="(00) 00000-0000"
              />
            </div>

            <div>
              <label htmlFor="revenue" className="block text-sm font-medium text-gray-400 mb-1">Faturamento Mensal Atual</label>
              <select 
                id="revenue"
                name="revenue"
                required
                value={formState.revenue}
                onChange={handleChange}
                className="w-full bg-nexon-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#FF7A00] transition-colors"
              >
                <option value="" disabled>Selecione uma opção</option>
                <option value="Até 30k">Até R$ 30.000</option>
                <option value="30k a 60k">R$ 30.000 a R$ 60.000</option>
                <option value="60k a 100k">R$ 60.000 a R$ 100.000</option>
                <option value="Acima de 100k">Acima de R$ 100.000</option>
              </select>
            </div>

            <Button type="submit" fullWidth>
              Enviar Solicitação
            </Button>
            
            <p className="text-xs text-center text-gray-500 mt-4">
              Seus dados estão seguros. Entraremos em contato em até 24h.
            </p>
          </form>
        </div>
      </Section>
    </div>
  );
};

export default Contact;