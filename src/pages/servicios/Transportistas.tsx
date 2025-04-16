import React from 'react';
import Head from '../../components/Head';
import { Truck, Package, Globe, Clock, Shield, BarChart3, CheckCircle2, ArrowRight } from 'lucide-react';

function Transportistas() {
  // Función para abrir el formulario de contacto en App.tsx
  const openContactForm = () => {
    // Crear un evento personalizado que será capturado en App.tsx
    const event = new CustomEvent('openContactForm');
    window.dispatchEvent(event);
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <Head
        title="Conexiones con Transportistas - Stockify.pro"
        description="Integración completa con las principales empresas de transporte. GLS, MRW, Correos Express, NACEX, TIPSA y más."
        keywords="transportistas, logística, GLS, MRW, Correos Express, NACEX, TIPSA, envíos, seguimiento, integración"
        ogTitle="Conexiones con Transportistas - Stockify.pro"
        ogDescription="Integra y automatiza tus envíos con las principales empresas de transporte a través de Stockify.pro."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#0F172A]">Conexiones con Transportistas</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Automatiza completamente tus envíos con las principales empresas de transporte a través de nuestras integraciones nativas.
          </p>
        </div>

        {/* Hero Section */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-[#0F172A] to-blue-700 rounded-2xl p-12 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Envíos simplificados con integraciones avanzadas</h2>
                <p className="text-lg mb-8">
                  Gestiona todas tus expediciones desde un único panel, sin necesidad de acceder a múltiples plataformas. Genera etiquetas, realiza seguimiento y automatiza notificaciones a tus clientes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={openContactForm}
                    className="bg-white text-[#0F172A] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Solicitar demo
                  </button>
                </div>
              </div>
              <div className="flex justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?auto=format&fit=crop&q=80&w=600" 
                  alt="Logística y transportes" 
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Transportistas */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-[#0F172A] text-center">Nuestras Integraciones</h2>
          
          {/* MRW */}
          <div className="mb-16 bg-white rounded-xl shadow-md overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="p-8 bg-blue-50 flex items-center justify-center">
                <img 
                  src="https://www.vectorlogo.es/wp-content/uploads/2017/02/logo-vector-mrw.jpg" 
                  alt="MRW" 
                  className="max-h-24"
                />
              </div>
              <div className="md:col-span-2 p-8">
                <h3 className="text-2xl font-bold text-[#0F172A] mb-4">MRW</h3>
                <p className="text-gray-600 mb-6">
                  Integración completa con MRW para envíos nacionales e internacionales. Genera etiquetas automáticamente desde nuestra plataforma y ofrece a tus clientes opciones de entrega flexibles.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Generación automática de etiquetas</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Seguimiento en tiempo real</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Recogida en oficina</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Soporte para contrareembolso</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* GLS */}
          <div className="mb-16 bg-white rounded-xl shadow-md overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="p-8 bg-blue-50 flex items-center justify-center">
                <img 
                  src="https://www.vectorlogo.es/wp-content/uploads/2020/08/logo-vector_gls.jpg" 
                  alt="GLS" 
                  className="max-h-24"
                />
              </div>
              <div className="md:col-span-2 p-8">
                <h3 className="text-2xl font-bold text-[#0F172A] mb-4">GLS</h3>
                <p className="text-gray-600 mb-6">
                  Envíos a toda Europa con la integración GLS. Ideal para negocios con presencia internacional que requieren una logística eficiente y fiable.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Cobertura en más de 40 países europeos</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Puntos de recogida ParcelShop</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Notificaciones SMS a destinatarios</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Gestión de documentación aduanera</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Correos Express */}
          <div className="mb-16 bg-white rounded-xl shadow-md overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="p-8 bg-blue-50 flex items-center justify-center">
                <img 
                  src="https://www.vectorlogo.es/wp-content/uploads/2019/04/logo-vector-correos-express.jpg" 
                  alt="Correos Express" 
                  className="max-h-24"
                />
              </div>
              <div className="md:col-span-2 p-8">
                <h3 className="text-2xl font-bold text-[#0F172A] mb-4">Correos Express</h3>
                <p className="text-gray-600 mb-6">
                  Conecta con Correos Express para envíos urgentes en la península ibérica. Ideal para entregas que requieren celeridad y fiabilidad dentro de España y Portugal.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Entregas en 24-48h en península</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Entrega en sábados disponible</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Múltiples intentos de entrega</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Confirmación por email y SMS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* NACEX */}
          <div className="mb-16 bg-white rounded-xl shadow-md overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="p-8 bg-blue-50 flex items-center justify-center">
                <img 
                  src="https://images.seeklogo.com/logo-png/18/1/nacex-logo-png_seeklogo-187594.png" 
                  alt="NACEX" 
                  className="max-h-24"
                />
              </div>
              <div className="md:col-span-2 p-8">
                <h3 className="text-2xl font-bold text-[#0F172A] mb-4">NACEX</h3>
                <p className="text-gray-600 mb-6">
                  Servicio premium de transporte urgente con NACEX. Perfecto para envíos que requieren la máxima rapidez y productos de alto valor.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Entrega en el mismo día (capitales)</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Red de puntos NACEX.shop</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Máxima seguridad y trazabilidad</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Gestión de mercancía delicada</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* TIPSA */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="p-8 bg-blue-50 flex items-center justify-center">
                <img 
                  src="https://www.vectorlogo.es/wp-content/uploads/2019/11/logo-vector-tipsa.jpg" 
                  alt="TIPSA" 
                  className="max-h-24"
                />
              </div>
              <div className="md:col-span-2 p-8">
                <h3 className="text-2xl font-bold text-[#0F172A] mb-4">TIPSA</h3>
                <p className="text-gray-600 mb-6">
                  Solución integral de transporte con TIPSA. Ideal para envíos nacionales con una excelente relación calidad-precio y amplia cobertura.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Cobertura total en España y Portugal</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Entrega urgente en 24h</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Gestión de devoluciones simplificada</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Opción para envíos voluminosos</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Funcionalidades */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-[#0F172A] text-center">Funcionalidades Principales</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Package className="h-10 w-10 text-[#0F172A]" />,
                title: "Etiquetado Automático",
                description: "Genera e imprime etiquetas de envío directamente desde nuestra plataforma sin necesidad de acceder a los sistemas de cada transportista."
              },
              {
                icon: <Globe className="h-10 w-10 text-[#0F172A]" />,
                title: "Seguimiento Centralizado",
                description: "Consulta el estado de todos tus envíos en una única interfaz, independientemente del transportista que utilices."
              },
              {
                icon: <Clock className="h-10 w-10 text-[#0F172A]" />,
                title: "Notificaciones en Tiempo Real",
                description: "Mantén a tus clientes informados automáticamente sobre el estado de sus pedidos con notificaciones personalizables."
              },
              {
                icon: <Shield className="h-10 w-10 text-[#0F172A]" />,
                title: "Gestión de Incidencias",
                description: "Identifica y resuelve rápidamente cualquier problema con tus envíos gracias a nuestro sistema de alertas y gestión de incidencias."
              },
              {
                icon: <Truck className="h-10 w-10 text-[#0F172A]" />,
                title: "Comparador de Tarifas",
                description: "Compara precios entre diferentes transportistas para cada envío y elige la opción más conveniente según tus necesidades."
              },
              {
                icon: <BarChart3 className="h-10 w-10 text-[#0F172A]" />,
                title: "Informes Detallados",
                description: "Analiza el rendimiento de tus envíos con informes detallados que te ayudarán a optimizar tu logística y reducir costes."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all">
                <div className="bg-blue-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#0F172A]">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-[#0F172A] text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Listo para optimizar tus envíos?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contáctanos hoy mismo y descubre cómo nuestras integraciones con transportistas pueden transformar la logística de tu negocio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={openContactForm}
              className="bg-white text-[#0F172A] px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 inline-flex items-center"
            >
              Solicitar demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Transportistas; 