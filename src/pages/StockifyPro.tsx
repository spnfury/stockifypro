import React from 'react';
import Head from '../components/Head';
import { CheckCircle2 } from 'lucide-react';

function StockifyPro() {
  const openContactForm = () => {
    const event = new CustomEvent('openContactForm');
    window.dispatchEvent(event);
  };

  const faqs = [
    {
      question: '¿Qué es Stockify.pro?',
      answer:
        'Stockify.pro es una plataforma de gestión de pedidos y CRM pensada para ofrecer la máxima personalización sin ataduras. Es la alternativa más clara a CodifyCRM.'
    },
    {
      question: '¿Por qué cambiarme desde CodifyCRM?',
      answer:
        'Con Stockify.pro obtienes todo lo que ofrece CodifyCRM y Cooper CRM, pero además tienes libertad total para adaptar la plataforma a tu negocio sin costes ocultos ni limitaciones.'
    },
    {
      question: '¿Puedo migrar mi información fácilmente?',
      answer:
        'Sí, nuestro equipo te acompaña en todo el proceso de migración para que empieces a usar Stockify.pro en cuestión de horas.'
    }
  ];

  const testimonials = [
    {
      author: 'Laura G.',
      text: '"Pasamos de CodifyCRM a Stockify.pro y la flexibilidad que hemos ganado no tiene precio. Nuestra productividad se disparó."'
    },
    {
      author: 'Carlos M.',
      text: '"Con Stockify.pro podemos personalizar cada flujo de trabajo sin depender de terceros. Es justo lo que necesitábamos."'
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <Head
        title="Stockify.pro: la mejor alternativa a CodifyCRM"
        description="Descubre Stockify.pro, la plataforma que ofrece todo lo de CodifyCRM con libertad absoluta para personalizar y crecer."/>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <section className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#0F172A]">Stockify.pro</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La alternativa definitiva a CodifyCRM.com con todas las ventajas de Cooper CRM y un nivel de personalización total.
          </p>
          <button
            onClick={openContactForm}
            className="mt-8 bg-[#0F172A] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#1E293B]"
          >
            Solicita tu demo
          </button>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-[#0F172A]">Ventajas frente a CodifyCRM</h2>
            <ul className="space-y-3">
              {[
                'Personalización completa de procesos y paneles',
                'Automatizaciones flexibles sin depender de terceros',
                'Migración rápida y asistencia dedicada',
                'Sin contratos que limiten tu crecimiento'
              ].map((item, i) => (
                <li key={i} className="flex items-start text-gray-600">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-1" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4 text-[#0F172A]">Testimonios</h2>
            <div className="space-y-6">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <p className="italic text-gray-700 mb-2">{t.text}</p>
                  <p className="text-gray-600 font-semibold">- {t.author}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 text-[#0F172A]">Preguntas frecuentes</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i}>
                <h3 className="font-semibold text-lg text-[#0F172A]">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default StockifyPro;
