import React, { useState, useRef, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
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
import Contrareembolso from './pages/servicios/Contrareembolso';
import Perfiles from './pages/servicios/Perfiles';
import Transportistas from './pages/servicios/Transportistas';
import Privacidad from './pages/Privacidad';
import Cookies from './pages/Cookies';
import Terminos from './pages/Terminos';
import SobreNosotros from './pages/SobreNosotros';
import Almacen from './pages/Almacen';
import Head from './components/Head';

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
                Acepto la <Link to="/privacidad" className="text-blue-600 hover:underline">política de privacidad</Link> y el procesamiento de mis datos para recibir información comercial.
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
  const location = useLocation();

  // Escuchar el evento personalizado desde componentes hijos
  useEffect(() => {
    const handleOpenContactForm = () => {
      setIsContactOpen(true);
    };

    window.addEventListener('openContactForm', handleOpenContactForm);
    
    return () => {
      window.removeEventListener('openContactForm', handleOpenContactForm);
    };
  }, []);

  // Scroll al principio cuando cambia la ruta
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white text-black">
      <Head
        title="Stockify.pro - La Solución #1 para Gestión de Stock y Contrareembolso"
        description="100% adaptable a tu tienda Shopify. Gestiona stock, perfiles, contrareembolsos y más. La plataforma más completa para la gestión de tu negocio online."
        keywords="gestión de stock, contrareembolso, ecommerce, shopify, crm, gestión de pedidos, automatización, seguimiento envíos"
        ogTitle="Stockify.pro - La Plataforma Completa para tu eCommerce"
        ogDescription="Gestiona stock, contrareembolsos, perfiles y más desde una única plataforma. La solución más completa para tu negocio online."
      />
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Link to="/">
                <img 
                  src="https://app.stockify.pro/assets/img/logos/logo2024.png" 
                  alt="Stockify.pro Logo" 
                  className="h-8"
                />
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="/#features" className="text-gray-600 hover:text-[#0F172A]">Características</a>
              <a href="/#pricing" className="text-gray-600 hover:text-[#0F172A]">Precios</a>
              <button 
                onClick={() => setIsContactOpen(true)}
                className="bg-[#0F172A] text-white px-4 py-2 rounded-lg hover:bg-[#1E293B]"
              >
                Empezar ahora
              </button>
            </div>
          </div>
        </div>
      </nav>

      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <>
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
                    <a 
                      href="https://app.stockify.pro/login"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-[#0F172A] text-[#0F172A] px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#0F172A]/10"
                    >
                      Ver Demo
                    </a>
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
                   </div>
                   <div className="relative w-full overflow-hidden bg-white p-8 rounded-lg">
                     <div className="flex animate-infinite-scroll space-x-12">
                       <img src="https://www.vectorlogo.es/wp-content/uploads/2017/02/logo-vector-mrw.jpg?ezimgfmt=ng%3Awebp%2Fngcb1%2Frs%3Adevice%2Frscb1-1" alt="MRW" className="h-16 object-contain" />
                       <img src="https://www.vectorlogo.es/wp-content/uploads/2020/08/logo-vector_gls.jpg?ezimgfmt=rs:630x320/rscb1/ngcb1/notWebP" alt="GLS" className="h-16 object-contain" />
                       <img src="https://www.vectorlogo.es/wp-content/uploads/2019/04/logo-vector-correos-express.jpg?ezimgfmt=ng%3Awebp%2Fngcb1%2Frs%3Adevice%2Frscb1-1" alt="Correos Express" className="h-16 object-contain" />
                       <img src="https://images.seeklogo.com/logo-png/18/1/nacex-logo-png_seeklogo-187594.png?v=1955407053922058392" alt="NACEX" className="h-16 object-contain" />
                       <img src="https://www.vectorlogo.es/wp-content/uploads/2019/11/logo-vector-tipsa.jpg" alt="TIPSA" className="h-16 object-contain" />
                       {/* Duplicate logos for seamless scrolling */}
                       <img src="https://www.vectorlogo.es/wp-content/uploads/2017/02/logo-vector-mrw.jpg?ezimgfmt=ng%3Awebp%2Fngcb1%2Frs%3Adevice%2Frscb1-1" alt="MRW" className="h-16 object-contain" />
                       <img src="https://www.vectorlogo.es/wp-content/uploads/2020/08/logo-vector_gls.jpg?ezimgfmt=rs:630x320/rscb1/ngcb1/notWebP" alt="GLS" className="h-16 object-contain" />
                       <img src="https://www.vectorlogo.es/wp-content/uploads/2019/04/logo-vector-correos-express.jpg?ezimgfmt=ng%3Awebp%2Fngcb1%2Frs%3Adevice%2Frscb1-1" alt="Correos Express" className="h-16 object-contain" />
                       <img src="https://images.seeklogo.com/logo-png/18/1/nacex-logo-png_seeklogo-187594.png?v=1955407053922058392" alt="NACEX" className="h-16 object-contain" />
                       <img src="https://www.vectorlogo.es/wp-content/uploads/2019/11/logo-vector-tipsa.jpg" alt="TIPSA" className="h-16 object-contain" />
                     </div>
                   </div>
                </div>
              </div>
            </section>

            {/* Features & Benefits Section */}
            <section id="features" className="py-20 bg-gray-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold text-[#0F172A] mb-4">
                    Todo lo que Necesitas para Gestionar Contrareembolsos
                  </h2>
                  <p className="text-xl text-gray-600">
                    La solución más completa para optimizar tu negocio de eCommerce
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    {
                      icon: <ShoppingCart className="h-8 w-8 text-[#0F172A]" />,
                      title: "Gestión Automatizada de Contrareembolsos",
                      description: "Automatiza el proceso completo de contrareembolso, desde el pedido hasta el cobro final.",
                      benefits: [
                        "Reducción del 70% en tiempo de gestión",
                        "Automatización de cobros",
                        "Seguimiento en tiempo real"
                      ],
                      link: "/servicios/contrareembolso"
                    },
                    {
                      icon: <UserCog className="h-8 w-8 text-[#0F172A]" />,
                      title: "Gestión de Perfiles Avanzada",
                      description: "Sistema de roles personalizados para confirmadores, administradores y gestores.",
                      benefits: [
                        "Control total de accesos",
                        "Asignación de responsabilidades",
                        "Auditoría de acciones"
                      ],
                      link: "/servicios/perfiles"
                    },
                    {
                      icon: <Building2 className="h-8 w-8 text-[#0F172A]" />,
                      title: "Multi-almacén Inteligente",
                      description: "Gestiona stock privado y general con sistema de comisiones para distribuidores.",
                      benefits: [
                        "Optimización de inventario",
                        "Reducción de costes en 40%",
                        "Seguimiento multi-ubicación"
                      ],
                      link: "/servicios/almacen"
                    },
                    {
                      icon: <Truck className="h-8 w-8 text-[#0F172A]" />,
                      title: "Integración con Transportistas",
                      description: "Conecta con las principales empresas de transporte para seguimiento automático.",
                      benefits: [
                        "Seguimiento en tiempo real",
                        "Automatización de envíos",
                        "Reducción de incidencias"
                      ],
                      link: "/servicios/transportistas"
                    },
                    {
                      icon: <MessageSquareText className="h-8 w-8 text-[#0F172A]" />,
                      title: "IA para Atención al Cliente",
                      description: "Sistema de confirmación y atención al cliente con inteligencia artificial.",
                      benefits: [
                        "Respuestas instantáneas",
                        "Reducción de carga de trabajo",
                        "Mejora en satisfacción cliente"
                      ],
                      link: "/servicios/ia"
                    },
                    {
                      icon: <BarChart4 className="h-8 w-8 text-[#0F172A]" />,
                      title: "Estadísticas y CRM Avanzado",
                      description: "Control total de estadísticas y contabilidad con CRM completo incluido.",
                      benefits: [
                        "Informes personalizados",
                        "Análisis predictivo",
                        "Gestión de clientes"
                      ],
                      link: "/servicios/analitica"
                    }
                  ].map((feature, index) => (
                    <div 
                      key={index} 
                      className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all"
                    >
                      <div className="mb-4">{feature.icon}</div>
                      <h3 className="text-xl font-semibold mb-2 text-[#0F172A]">{feature.title}</h3>
                      <p className="text-gray-600 mb-4">{feature.description}</p>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-center text-sm text-gray-600">
                            <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                      <Link 
                        to={feature.link}
                        className="mt-4 flex items-center text-[#0F172A] font-medium hover:text-blue-600"
                      >
                        <span>Ver más detalles</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  ))}
                </div>

                <div className="mt-16 text-center">
                  <button 
                    onClick={() => setIsContactOpen(true)}
                    className="bg-[#0F172A] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#1E293B]"
                  >
                    Solicitar Demo Personalizada
                  </button>
                </div>
              </div>
            </section>

            {/* Video Section */}
            <section className="py-20 bg-gray-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold text-[#0F172A] mb-4">
                    Descubre Stockify en Acción
                  </h2>
                  <p className="text-xl text-gray-600">
                    Mira cómo nuestra plataforma puede transformar tu negocio
                  </p>
                </div>

                <div className="relative aspect-video max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/hQCeq4bMSs0"
                    title="Stockify Demo"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0"
                  ></iframe>
                </div>

                <div className="mt-12 text-center">
                  <button 
                    onClick={() => setIsContactOpen(true)}
                    className="bg-[#0F172A] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#1E293B]"
                  >
                    Solicitar Demo Personalizada
                  </button>
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
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                    {
                      name: "Basic",
                      price: "299",
                      limit: "Hasta 1.000 envíos",
                      features: [
                        "Soporte por email",
                        "Panel de control",
                        "Actualizaciones cada 15 min"
                      ],
                      isPopular: false,
                      ctaText: "Empezar ahora"
                    },
                    {
                      name: "Standard",
                      price: "399",
                      limit: "Hasta 10.000 envíos",
                      features: [
                        "Soporte prioritario",
                        "Estadísticas avanzadas",
                        "Webhooks personalizados"
                      ],
                      isPopular: true,
                      ctaText: "Empezar ahora"
                    },
                    {
                      name: "Premium",
                      price: "499",
                      limit: "Hasta 50.000 envíos",
                      features: [
                        "Integraciones avanzadas",
                        "Acceso anticipado a nuevas funciones",
                        "Soporte técnico directo"
                      ],
                      isPopular: false,
                      ctaText: "Empezar ahora"
                    },
                    {
                      name: "Enterprise",
                      price: "A medida",
                      limit: "Envíos ilimitados",
                      features: [
                        "SLA dedicado",
                        "Onboarding personalizado",
                        "Integraciones a medida",
                        "Soporte 24/7"
                      ],
                      isPopular: false,
                      ctaText: "Contactar"
                    }
                  ].map((plan, index) => (
                    <div key={index} className={`bg-white rounded-2xl shadow-xl overflow-hidden ${
                      plan.isPopular ? 'ring-2 ring-[#0F172A] transform scale-105' : ''
                    }`}>
                      <div className="p-8">
                        <h3 className="text-2xl font-bold text-[#0F172A] mb-2">{plan.name}</h3>
                        <div className="mb-4">
                          <span className="text-4xl font-bold text-[#0F172A]">{plan.price}</span>
                          {plan.price !== "A medida" && <span className="text-gray-600">€/mes</span>}
                        </div>
                        <p className="text-gray-600 mb-6">{plan.limit}</p>
                        <ul className="space-y-3 mb-8">
                          {plan.features.map((feature, i) => (
                            <li key={i} className="flex items-center">
                              <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                              <span className="text-gray-600">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <button 
                          onClick={() => setIsContactOpen(true)}
                          className={`w-full px-6 py-3 rounded-lg font-semibold ${
                            plan.isPopular 
                              ? 'bg-[#0F172A] text-white hover:bg-[#1E293B]' 
                              : 'border-2 border-[#0F172A] text-[#0F172A] hover:bg-[#0F172A]/5'
                          }`}
                        >
                          {plan.ctaText}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </>
        } />
        <Route path="/servicios/contrareembolso" element={<Contrareembolso />} />
        <Route path="/servicios/perfiles" element={<Perfiles />} />
        <Route path="/servicios/almacen" element={<Almacen />} />
        <Route path="/servicios/transportistas" element={<Transportistas />} />
        <Route path="/privacidad" element={<Privacidad />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/terminos" element={<Terminos />} />
        <Route path="/sobre-nosotros" element={<SobreNosotros />} />
      </Routes>

      {/* Contact Form Modal */}
      <ContactForm 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />

      {/* Footer */}
      <footer className="bg-[#0F172A] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <img 
                src="https://app.stockify.pro/assets/img/logos/logo2024.png" 
                alt="Stockify.pro Logo" 
                className="h-8 mb-4"
              />
              <p className="text-gray-300">
                La solución más completa para la gestión de tu negocio online.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Servicios</h3>
              <ul className="space-y-2">
                <li><Link to="/servicios/contrareembolso" className="text-gray-300 hover:text-white">Contrareembolso</Link></li>
                <li><Link to="/servicios/perfiles" className="text-gray-300 hover:text-white">Perfiles</Link></li>
                <li><Link to="/servicios/almacen" className="text-gray-300 hover:text-white">Almacén</Link></li>
                <li><Link to="/servicios/transportistas" className="text-gray-300 hover:text-white">Transportistas</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2">
                <li><Link to="/sobre-nosotros" className="text-gray-300 hover:text-white">Sobre Nosotros</Link></li>
                <li><button onClick={() => setIsContactOpen(true)} className="text-gray-300 hover:text-white bg-transparent border-0 p-0 cursor-pointer">Contacto</button></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link to="/privacidad" className="text-gray-300 hover:text-white">Política de Privacidad</Link></li>
                <li><Link to="/terminos" className="text-gray-300 hover:text-white">Términos y Condiciones</Link></li>
                <li><Link to="/cookies" className="text-gray-300 hover:text-white">Política de Cookies</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
            <p>&copy; {new Date().getFullYear()} Stockify.pro. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
