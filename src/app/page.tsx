'use client';

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
  ArrowRight,
  Package,
  CreditCard,
  TruckIcon,
  AlertCircle,
  FileText,
  BarChart2
} from 'lucide-react';
import emailjs from '@emailjs/browser';
import Image from 'next/image';

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

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const features = [
    {
      icon: <Package className="h-6 w-6" />,
      title: "Gestión Automatizada de Contrareembolsos",
      description: "Automatiza el proceso de contrareembolso desde el pedido hasta el cobro final."
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: "Seguimiento de Pagos",
      description: "Controla el estado de cada pago contrareembolso en tiempo real."
    },
    {
      icon: <TruckIcon className="h-6 w-6" />,
      title: "Integración con Transportistas",
      description: "Conecta con las principales empresas de transporte para seguimiento automático."
    },
    {
      icon: <AlertCircle className="h-6 w-6" />,
      title: "Alertas y Notificaciones",
      description: "Recibe alertas sobre incidencias y actualizaciones de estado."
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Documentación Automática",
      description: "Genera automáticamente toda la documentación necesaria."
    },
    {
      icon: <BarChart2 className="h-6 w-6" />,
      title: "Analíticas Avanzadas",
      description: "Obtén informes detallados sobre el rendimiento de tus contrareembolsos."
    }
  ];

  const stats = [
    {
      number: "10,000+",
      label: "Pedidos gestionados",
    },
    {
      number: "98%",
      label: "Satisfacción cliente",
    },
    {
      number: "500+",
      label: "Tiendas activas",
    },
    {
      number: "24/7",
      label: "Soporte técnico",
    }
  ];

  const pricingPlans = [
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
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Image 
                src="https://app.stockify.pro/assets/img/logos/logo2024.png" 
                alt="Stockify.pro Logo" 
                width={32}
                height={32}
                className="h-8"
              />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-[#0F172A]">Características</a>
              <a href="#benefits" className="text-gray-600 hover:text-[#0F172A]">Beneficios</a>
              <a href="#testimonials" className="text-gray-600 hover:text-[#0F172A]">Testimonios</a>
              <a href="#pricing" className="text-gray-600 hover:text-[#0F172A]">Precios</a>
              <button 
                onClick={() => setIsContactOpen(true)}
                className="bg-[#0F172A] text-white px-4 py-2 rounded-lg hover:bg-[#1E293B]"
              >
                Prueba Gratis 14 Días
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-4 inline-flex items-center bg-blue-50 px-4 py-2 rounded-full">
              <span className="text-blue-600 font-semibold">El CRM #1 para eCommerce</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-[#0F172A] mb-6">
              Potencia tu Negocio Online<br />con el Mejor CRM
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Gestiona pedidos, contrareembolsos, stock y clientes desde una única plataforma. 
              La solución más completa para hacer crecer tu eCommerce.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <button 
                onClick={() => setIsContactOpen(true)}
                className="bg-[#0F172A] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#1E293B] transform hover:scale-105 transition-all"
              >
                Empieza Gratis 14 Días
              </button>
              <button className="border-2 border-[#0F172A] text-[#0F172A] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#0F172A]/5 flex items-center justify-center gap-2">
                Ver Demo en Vivo <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-3xl md:text-4xl font-bold text-[#0F172A]">{stat.number}</p>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-gray-600">Empresas que confían en nosotros</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            <Image 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/512px-Shopify_logo_2018.svg.png" 
              alt="Shopify Partner" 
              width={120}
              height={40}
              className="h-8 w-auto"
            />
            {/* Add more partner logos here */}
          </div>
        </div>
      </section>

      {/* Dashboard Showcase */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-4">Panel de Control Intuitivo</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Gestiona todos tus contrareembolsos desde un único panel centralizado. Visualiza estadísticas en tiempo real, seguimiento de pedidos y estado de los pagos.
            </p>
          </div>
          <div className="relative rounded-xl shadow-2xl overflow-hidden bg-white">
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            <Image
              src="/images/dashboard.png"
              alt="Dashboard de Stockify.pro mostrando estadísticas de contrareembolso"
              width={1920}
              height={1080}
              className="w-full rounded-xl"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-gray-900/90 to-transparent text-white transform translate-y-full hover:translate-y-0 transition-transform duration-300">
              <div className="grid grid-cols-4 gap-4">
                <div>
                  <p className="text-2xl font-bold">69</p>
                  <p className="text-sm opacity-80">Pedidos hoy</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">2.605,00 €</p>
                  <p className="text-sm opacity-80">Total pedidos hoy</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">1.809,29 €</p>
                  <p className="text-sm opacity-80">Facturado hoy</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">59,41%</p>
                  <p className="text-sm opacity-80">Tasa de entrega</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">Monitorización en Tiempo Real</h3>
              <p className="text-gray-600">Visualiza el estado de tus pedidos y contrareembolsos al instante.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">Estadísticas Detalladas</h3>
              <p className="text-gray-600">Analiza el rendimiento con gráficos y métricas clave.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">Gestión de Incidencias</h3>
              <p className="text-gray-600">Resuelve problemas rápidamente con nuestro sistema de alertas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-4">Características Principales</h2>
            <p className="text-xl text-gray-600">Todo lo que necesitas para gestionar tus contrareembolsos eficientemente</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-[#0F172A] mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-4">Beneficios para tu Negocio</h2>
            <p className="text-xl text-gray-600">Optimiza tus procesos y aumenta la eficiencia</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-green-500 mt-1 mr-4" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Reducción de Errores</h3>
                  <p className="text-gray-600">Minimiza errores en la gestión de contrareembolsos con procesos automatizados.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-green-500 mt-1 mr-4" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Ahorro de Tiempo</h3>
                  <p className="text-gray-600">Automatiza tareas repetitivas y dedica más tiempo a crecer tu negocio.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-green-500 mt-1 mr-4" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Mejor Experiencia Cliente</h3>
                  <p className="text-gray-600">Ofrece un servicio más eficiente y transparente a tus clientes.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-green-500 mt-1 mr-4" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Mayor Control</h3>
                  <p className="text-gray-600">Mantén un control total sobre tus contrareembolsos en todo momento.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-green-500 mt-1 mr-4" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Integración Total</h3>
                  <p className="text-gray-600">Conecta con tu tienda Shopify y principales transportistas.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-green-500 mt-1 mr-4" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Informes Detallados</h3>
                  <p className="text-gray-600">Toma decisiones basadas en datos con informes completos.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-4">Integración Perfecta</h2>
            <p className="text-xl text-gray-600">Conecta con las herramientas que ya usas</p>
          </div>
          <div className="flex flex-col items-center space-y-8">
            <Image 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
              alt="Vista previa del Dashboard"
              width={1200}
              height={600}
              className="rounded-xl shadow-xl"
            />
            <div className="flex flex-wrap justify-center items-center gap-8">
              <div className="text-center">
                <p className="mb-4">Compatible 100% con:</p>
                <Image 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/512px-Shopify_logo_2018.svg.png" 
                  alt="Shopify" 
                  width={48}
                  height={48}
                  className="h-12"
                />
              </div>
              <div className="text-center">
                <p className="mb-4">Transportistas:</p>
                <div className="flex gap-4">
                  <Image 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/512px-Shopify_logo_2018.svg.png" 
                    alt="Transportista 1" 
                    width={48}
                    height={48}
                    className="h-12"
                  />
                  <Image 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/512px-Shopify_logo_2018.svg.png" 
                    alt="Transportista 2" 
                    width={48}
                    height={48}
                    className="h-12"
                  />
                </div>
              </div>
            </div>
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
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white rounded-2xl shadow-xl overflow-hidden ${
                plan.isPopular ? 'ring-2 ring-[#0F172A] transform scale-105' : ''
              }`}>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[#0F172A] mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-[#0F172A]">{plan.price}</span>
                    <span className="text-gray-600">€/mes</span>
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

      <ContactForm isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
} 