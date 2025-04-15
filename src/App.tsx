import React, { useState, useRef } from 'react';
import { 
  Box, 
  Clock, 
  LineChart,
  Settings,
  ShieldCheck,
  Smartphone,
  Users,
  X,
  Truck,
  ShoppingCart,
  Building2,
  MessageSquareText,
  BarChart4,
  UserCog,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import emailjs from '@emailjs/browser';

function ContactForm({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      if (!formRef.current) return;

      const formData = new FormData(formRef.current);
      formData.append('to_email', 'thevega82@gmail.com,stockifypro@gmail.com');

      console.log('Enviando formulario...');
      const result = await emailjs.sendForm(
        'service_houczae',
        'template_vls5tbt',
        formRef.current,
        'FETj0WxDNoKXJI9s-'
      );

      console.log('Resultado:', result);
      if (result.text === 'OK') {
        setSubmitStatus({ type: 'success', message: '¡Gracias por contactarnos! Te responderemos pronto.' });
        formRef.current.reset();
      } else {
        throw new Error('Error al enviar el formulario');
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setSubmitStatus({ type: 'error', message: 'Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl p-8 max-w-md w-full relative">
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X className="h-6 w-6" />
        </button>
        <h3 className="text-2xl font-bold mb-6">Solicitar Prueba Gratuita</h3>
        <form 
          ref={formRef}
          onSubmit={handleSubmit}
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Nombre completo
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Tu nombre y apellidos"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                Empresa
              </label>
              <input
                type="text"
                id="company"
                name="company"
                required
                placeholder="Nombre de tu empresa"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email profesional
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="tu@empresa.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Teléfono de contacto
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                placeholder="+34 600 000 000"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                ¿Qué necesitas gestionar?
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                placeholder="Cuéntanos brevemente tus necesidades..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>
            <div className="flex items-start">
              <input
                type="checkbox"
                id="privacy"
                name="privacy"
                required
                className="mt-1 mr-2"
              />
              <label htmlFor="privacy" className="text-sm text-gray-600">
                Acepto la <a href="#" className="text-blue-600 hover:underline">política de privacidad</a> y el procesamiento de mis datos para recibir información comercial.
              </label>
            </div>
            {submitStatus && (
              <div className={`p-3 rounded-lg ${
                submitStatus.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
              }`}>
                {submitStatus.message}
              </div>
            )}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#0F172A] text-white px-6 py-3 rounded-lg hover:bg-[#1E293B] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Enviando...' : 'Solicitar Prueba Gratuita'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <img 
                src="https://app.stockify.pro/assets/img/logos/logo2024.png" 
                alt="Stockify.pro Logo" 
                className="h-8"
              />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-[#0F172A]">Características</a>
              <a href="#pricing" className="text-gray-600 hover:text-[#0F172A]">Precios</a>
              <button 
                onClick={() => setIsContactOpen(true)}
                className="text-gray-600 hover:text-[#0F172A]"
              >
                Contacto
              </button>
              <button 
                onClick={() => setIsContactOpen(true)}
                className="bg-[#0F172A] text-white px-4 py-2 rounded-lg hover:bg-[#1E293B]"
              >
                Empezar
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <img 
              src="https://app.stockify.pro/assets/img/logos/logo2024.png" 
              alt="Stockify.pro Logo" 
              className="h-32 mx-auto mb-8"
            />
            <h1 className="text-5xl font-bold text-[#0F172A] mb-6">
              La Solución #1 para<br />Gestión de tu Stock 
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              100% adaptable a tu tienda Shopify. Gestiona stock, perfiles, contrareembolsos y más. 
              La plataforma más completa para la gestión de tu negocio online.
            </p>
            <div className="flex justify-center gap-4">
              <button 
                onClick={() => setIsContactOpen(true)}
                className="bg-[#0F172A] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#1E293B]"
              >
                Prueba Gratuita
              </button>
              <button className="border border-[#0F172A] text-[#0F172A] px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#0F172A]/10">
                Ver Demo
              </button>
            </div>
          </div>
          <div className="mt-16 space-y-8">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
              alt="Vista previa del Dashboard"
              className="rounded-xl shadow-xl"
            />
            <div className="flex justify-center items-center space-x-8">
              Compatible 100%:<br></br><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/512px-Shopify_logo_2018.svg.png" alt="Shopify" className="h-12" /><br></br>
            </div>

             <div className="flex justify-center items-center space-x-8">
               <p className="text-xl text-gray-600">Compañias de transporte integradas:</p>
             </div><div className="flex justify-center items-center space-x-8">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQwAAAC8CAMAAAC672BgAAABI1BMVEX///8cEkT/SUAbE0T//v/8//8cEkUVCkExLU4XED4AADD/SD4xLVA7N1cSDjwAADI7OU77X1n9XlL6WFcAADYAACr7SDsAADj/SEIwLUsAADEZDUb+RTgAADsAAC08OFUAACUMADsTCEQIAD/+PzQdEUkAACf43dvj4+YAACGmpa/y8fSDgZFHQmG2tMDZ1939vMH8YGUdF0ApJEh4do1lY3VdWXXR0NT47O30TFHzw8f01tv1nJ/2dHT3UUfwo6SalKBzcYP81tPzZF7yhoD3vLf89e3xioz1Nzz0tqxSUGIdGDb0IifyZWb0lI/xnKAlHUjwbnXyZVf3r6+KiJ2urbX4kpg9NWCFhI73l4v208n9QCz0ioLudnH1q7H2x8I0MkLMWaRIAAAI+ElEQVR4nO2aa3PaSBaGJaSWDG1CvOaiJIIY1DYOEJvEweCsjfGNEM/YyaztrCds1vv/f8X2RYD6IE1RtaPMfjhPVWoy3U2H86r73IRhIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCPKX8F/U/fTJGN57yQAAAABJRU5ErkJggg==" alt="MRW" className="h-18" />
              <img src="https://bionsan.com/wp-content/uploads/2022/06/gls-logo-positive-rgb-download-11622.png" alt="GLS" className="h-8" />
              <img src="https://adeca.com/wp-content/sabai/File/files/l_36732be76f4086d8c47238a33ff3f05f.png" alt="Correos Express" className="h-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Todo lo que Necesitas en Una Plataforma
            </h2>
            <p className="text-xl text-gray-600">
              Gestión completa y profesional para tu negocio online
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <ShoppingCart className="h-8 w-8 text-[#0F172A]" />,
                title: "Integración Total Shopify",
                description: "Sincronización perfecta con tu tienda. Gestión de stock y pedidos en tiempo real."
              },
              {
                icon: <UserCog className="h-8 w-8 text-[#0F172A]" />,
                title: "Gestión de Perfiles",
                description: "Confirmadores, administradores y gestores de tienda con roles personalizados."
              },
              {
                icon: <Building2 className="h-8 w-8 text-[#0F172A]" />,
                title: "Multi-almacén",
                description: "Gestiona stock privado y general. Sistema de comisiones para distribuidores."
              },
              {
                icon: <Truck className="h-8 w-8 text-[#0F172A]" />,
                title: "Contrareembolso Avanzado",
                description: "La mejor solución para gestionar pagos contra reembolso."
              },
              {
                icon: <MessageSquareText className="h-8 w-8 text-[#0F172A]" />,
                title: "IA para Atención",
                description: "Sistema de confirmación y atención al cliente con inteligencia artificial."
              },
              {
                icon: <BarChart4 className="h-8 w-8 text-[#0F172A]" />,
                title: "Estadísticas y CRM",
                description: "Control total de estadísticas y contabilidad. CRM completo incluido."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-4">
              Planes Adaptados a Tu Negocio
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Soluciones flexibles que crecen contigo
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-4xl mx-auto">
            <div className="p-8 md:p-12 bg-gradient-to-r from-[#0F172A] to-[#1E293B] text-white">
              <h3 className="text-3xl font-bold mb-4">Consulta nuestros planes personalizados</h3>
              <p className="text-lg mb-6">
                Ofrecemos soluciones a medida según el volumen de pedidos y las necesidades específicas de tu negocio.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Integración completa con Shopify",
                  "Gestión avanzada de inventario",
                  "Múltiples perfiles de usuario",
                  "Sistema de contrareembolso",
                  "Atención al cliente con IA",
                  "Estadísticas y CRM incluidos"
                ].map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => setIsContactOpen(true)}
                className="mt-6 bg-white text-[#0F172A] px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 flex items-center justify-center w-full md:w-auto"
              >
                Solicitar información <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
            
            <div className="p-8 md:p-12 bg-white">
              <h4 className="text-xl font-semibold mb-6 text-[#0F172A]">¿Por qué elegir Stockify.pro?</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold mb-2 text-[#0F172A]">Escalabilidad</h5>
                  <p className="text-gray-600">Nuestros planes se adaptan al crecimiento de tu negocio, pagando solo por lo que necesitas.</p>
                </div>
                <div>
                  <h5 className="font-semibold mb-2 text-[#0F172A]">Soporte Premium</h5>
                  <p className="text-gray-600">Asistencia técnica personalizada para resolver cualquier duda o incidencia.</p>
                </div>
                <div>
                  <h5 className="font-semibold mb-2 text-[#0F172A]">Sin Sorpresas</h5>
                  <p className="text-gray-600">Precios transparentes sin costes ocultos ni comisiones adicionales.</p>
                </div>
                <div>
                  <h5 className="font-semibold mb-2 text-[#0F172A]">Prueba Gratuita</h5>
                  <p className="text-gray-600">Prueba nuestra plataforma sin compromiso y descubre todo su potencial.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0F172A] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img 
                  src="https://app.stockify.pro/assets/img/logos/logo2024.png" 
                  alt="Stockify.pro Logo" 
                  className="h-8"
                />
              </div>
              <p className="text-gray-400">
                La solución más completa para la gestión de tu negocio online
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Producto</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="text-gray-400 hover:text-white">Características</a></li>
                <li><a href="#pricing" className="text-gray-400 hover:text-white">Precios</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Sobre nosotros</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Empleo</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Privacidad</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Términos</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Seguridad</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2024-2025 Stockify.pro. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Contact Form Modal */}
      <ContactForm 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />
    </div>
  );
}

export default App;
