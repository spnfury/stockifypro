import React from 'react';
import Head from '../components/Head';
import { Warehouse, Package, TruckIcon, Users, Clock, BarChart3, CheckCircle2, ArrowRight } from 'lucide-react';

function Almacen() {
  // Función para abrir el formulario de contacto en App.tsx
  const openContactForm = () => {
    // Crear un evento personalizado que será capturado en App.tsx
    const event = new CustomEvent('openContactForm');
    window.dispatchEvent(event);
  };
  
  return (
    <div className="min-h-screen pt-24 pb-16">
      <Head
        title="Servicios de Almacenamiento - Stockify.pro"
        description="Descubre nuestras soluciones de almacenamiento para tu eCommerce. Almacena tus productos con nosotros o con nuestros partners logísticos."
        keywords="almacén, logística, eCommerce, almacenamiento, fulfillment, dropshipping, stock"
        ogTitle="Servicios de Almacenamiento - Stockify.pro"
        ogDescription="Soluciones flexibles de almacenamiento para optimizar la logística de tu tienda online."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#0F172A]">Servicios de Almacenamiento</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluciones flexibles de almacenamiento para tu eCommerce. Almacena tus productos con nosotros o con nuestros partners logísticos.
          </p>
        </div>

        {/* Hero Section */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-[#0F172A] to-blue-700 rounded-2xl p-12 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Optimiza tu logística con nuestras soluciones de almacenamiento</h2>
                <p className="text-lg mb-8">
                  Olvídate de la complejidad de gestionar tu propio almacén. Con Stockify.pro, puedes almacenar tus productos con nosotros o con nuestros partners logísticos, permitiéndote centrarte en hacer crecer tu negocio.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-white text-[#0F172A] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors" onClick={openContactForm}>
                    Solicitar información
                  </button>
                  <button className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                    Ver tarifas
                  </button>
                </div>
              </div>
              <div className="flex justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=600" 
                  alt="Almacén moderno" 
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Opciones de Almacenamiento */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-[#0F172A] text-center">Nuestras Opciones de Almacenamiento</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all">
              <div className="bg-blue-50 p-8 flex justify-center">
                <Warehouse className="h-24 w-24 text-blue-600" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#0F172A] mb-4">Almacenamiento Propio</h3>
                <p className="text-gray-600 mb-6">
                  Almacena tus productos en nuestras instalaciones de última generación, con total control y visibilidad de tu inventario a través de nuestra plataforma.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Almacenes ubicados estratégicamente en España</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Monitorización del inventario en tiempo real</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Preparación y empaquetado de pedidos</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Seguridad 24/7 y control de condiciones ambientales</span>
                  </li>
                </ul>
                <button className="flex items-center font-semibold text-blue-600 hover:text-blue-800">
                  Más información <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all">
              <div className="bg-purple-50 p-8 flex justify-center">
                <TruckIcon className="h-24 w-24 text-purple-600" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#0F172A] mb-4">Red de Partners Logísticos</h3>
                <p className="text-gray-600 mb-6">
                  Accede a nuestra extensa red de partners logísticos, seleccionados rigurosamente para ofrecer el mejor servicio según tus necesidades y ubicación geográfica.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Cobertura internacional con partners especializados</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Tarifas negociadas con condiciones ventajosas</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Gestión unificada a través de nuestra plataforma</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Flexibilidad para escalar según tus necesidades</span>
                  </li>
                </ul>
                <button className="flex items-center font-semibold text-purple-600 hover:text-purple-800">
                  Ver partners <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Beneficios */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-[#0F172A] text-center">¿Por qué elegir nuestros servicios de almacenamiento?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Package className="h-10 w-10 text-[#0F172A]" />,
                title: "Flexibilidad",
                description: "Adapta el espacio de almacenamiento según tus necesidades, expandiéndolo o reduciéndolo en función de la demanda estacional."
              },
              {
                icon: <Clock className="h-10 w-10 text-[#0F172A]" />,
                title: "Ahorro de tiempo",
                description: "Delegando la gestión de almacén podrás centrarte en el crecimiento de tu negocio y otras tareas estratégicas."
              },
              {
                icon: <BarChart3 className="h-10 w-10 text-[#0F172A]" />,
                title: "Reducción de costes",
                description: "Evita la inversión en infraestructura propia y personal, convirtiendo costes fijos en variables según tu volumen de ventas."
              },
              {
                icon: <TruckIcon className="h-10 w-10 text-[#0F172A]" />,
                title: "Envíos más rápidos",
                description: "Nuestros almacenes están estratégicamente ubicados para minimizar los tiempos de entrega a tus clientes."
              },
              {
                icon: <Warehouse className="h-10 w-10 text-[#0F172A]" />,
                title: "Tecnología avanzada",
                description: "Utiliza nuestra plataforma para tener visibilidad en tiempo real de tu inventario y automatizar procesos."
              },
              {
                icon: <Users className="h-10 w-10 text-[#0F172A]" />,
                title: "Soporte especializado",
                description: "Contarás con un equipo dedicado que conoce a fondo tu negocio y necesidades específicas."
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all">
                <div className="bg-blue-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#0F172A]">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Proceso */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-[#0F172A] text-center">¿Cómo funciona nuestro servicio?</h2>
          <div className="relative">
            {/* Línea de conexión */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-blue-100 -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {[
                {
                  step: 1,
                  title: "Contáctanos",
                  description: "Cuéntanos las necesidades específicas de tu negocio para poder ofrecerte la solución más adecuada."
                },
                {
                  step: 2,
                  title: "Análisis personalizado",
                  description: "Evaluamos tus procesos actuales y proponemos la mejor solución de almacenamiento para tu caso."
                },
                {
                  step: 3,
                  title: "Integración",
                  description: "Conectamos tu tienda online con nuestra plataforma para una gestión unificada y sin fricciones."
                },
                {
                  step: 4,
                  title: "Operativa en marcha",
                  description: "¡Listo! Comenzamos a almacenar y gestionar tus productos mientras tú te centras en hacer crecer tu negocio."
                }
              ].map((step, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                  <div className="bg-[#0F172A] text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <span className="font-bold">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-[#0F172A] text-center">{step.title}</h3>
                  <p className="text-gray-600 text-center">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonios */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-[#0F172A] text-center">Lo que dicen nuestros clientes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Desde que utilizamos los servicios de almacenamiento de Stockify.pro, hemos reducido nuestros costes logísticos en un 30% y mejorado nuestros tiempos de entrega.",
                author: "María Gómez",
                position: "CEO de ModaExpress",
                image: "https://randomuser.me/api/portraits/women/75.jpg"
              },
              {
                quote: "La flexibilidad que nos ofrece su red de partners nos ha permitido expandirnos a nuevos mercados europeos sin complicaciones logísticas.",
                author: "Carlos Ramírez",
                position: "Director de Operaciones en TechGadgets",
                image: "https://randomuser.me/api/portraits/men/32.jpg"
              },
              {
                quote: "La visibilidad en tiempo real de nuestro inventario y la automatización de procesos ha sido un cambio revolucionario para nuestro eCommerce.",
                author: "Ana Martínez",
                position: "Fundadora de NaturalCare",
                image: "https://randomuser.me/api/portraits/women/45.jpg"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author} 
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-[#0F172A]">{testimonial.author}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.position}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-[#0F172A] text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Listo para optimizar tu logística?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contáctanos hoy mismo para obtener una consulta personalizada sobre las mejores opciones de almacenamiento para tu negocio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={openContactForm}
              className="bg-white text-[#0F172A] px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 inline-flex items-center"
            >
              Solicitar información
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button 
              onClick={openContactForm}
              className="border border-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white/10 inline-flex items-center"
            >
              Ver tarifas
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Almacen; 