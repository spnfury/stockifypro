import React from 'react';
import Head from '../components/Head';
import { Building2, Users, Shield, Award, Target, ArrowRight } from 'lucide-react';

function SobreNosotros() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <Head
        title="Sobre Nosotros - Stockify.pro"
        description="Conoce a Stockify.pro, la plataforma líder en gestión de stock y contrareembolsos para eCommerce. Nuestra misión, visión y equipo."
        keywords="sobre nosotros, equipo, misión, visión, valores, historia, stockify.pro"
        ogTitle="Sobre Nosotros - Stockify.pro"
        ogDescription="Descubre quiénes somos y cómo trabajamos para transformar la gestión de eCommerce con soluciones innovadoras."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#0F172A]">Sobre Nosotros</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conoce el equipo detrás de Stockify.pro y nuestra misión de transformar la gestión de eCommerce con soluciones innovadoras.
          </p>
        </div>

        {/* Historia y Visión */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#0F172A]">Nuestra Historia</h2>
              <p className="text-lg text-gray-600 mb-4">
                Stockify.pro nació en 2018 de la visión de un grupo de emprendedores con experiencia en eCommerce y desarrollo tecnológico. Identificamos un problema común: la gestión eficiente de inventario y contrareembolsos era un desafío significativo para las tiendas online.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Comenzamos con una solución sencilla para gestionar contrareembolsos, y rápidamente evolucionamos hacia una plataforma completa que aborda todos los aspectos críticos del backend de un eCommerce exitoso.
              </p>
              <p className="text-lg text-gray-600">
                Hoy, Stockify.pro es utilizado por cientos de tiendas online en toda España y pronto nos expandiremos a nuevos mercados europeos y latinoamericanos.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                alt="Equipo de Stockify.pro" 
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#0F172A] text-white p-4 rounded-xl">
                <p className="font-bold">Fundado en 2018</p>
                <p>Madrid, España</p>
              </div>
            </div>
          </div>
        </section>

        {/* Misión, Visión y Valores */}
        <section className="mb-20 bg-gray-50 rounded-2xl p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-[#0F172A] text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#0F172A]">Misión</h3>
              <p className="text-gray-600">
                Proporcionar a los negocios online las herramientas más eficientes para gestionar su operativa, permitiéndoles centrarse en lo que realmente importa: crecer y satisfacer a sus clientes.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-[#0F172A] text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#0F172A]">Visión</h3>
              <p className="text-gray-600">
                Ser la plataforma líder mundial en soluciones de gestión para eCommerce, reconocida por nuestra innovación constante, excelencia técnica y compromiso con el éxito de nuestros clientes.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-[#0F172A] text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#0F172A]">Valores</h3>
              <ul className="text-gray-600 text-left list-disc pl-5">
                <li>Innovación constante</li>
                <li>Excelencia técnica</li>
                <li>Orientación al cliente</li>
                <li>Integridad y transparencia</li>
                <li>Trabajo en equipo</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Equipo */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-[#0F172A] text-center">Nuestro Equipo</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Carlos Rodríguez",
                position: "CEO & Fundador",
                bio: "Con más de 15 años de experiencia en eCommerce y desarrollo de software. Visionario tecnológico apasionado por simplificar procesos complejos.",
                image: "https://randomuser.me/api/portraits/men/32.jpg"
              },
              {
                name: "Elena Martínez",
                position: "CTO",
                bio: "Ingeniera informática con especialización en arquitecturas cloud y sistemas de alta disponibilidad. Lidera el desarrollo técnico de Stockify.pro.",
                image: "https://randomuser.me/api/portraits/women/44.jpg"
              },
              {
                name: "Javier López",
                position: "Director de Operaciones",
                bio: "Experto en logística y cadena de suministro. Ha optimizado operaciones para algunas de las mayores tiendas online de España.",
                image: "https://randomuser.me/api/portraits/men/46.jpg"
              },
              {
                name: "Ana García",
                position: "Directora de Experiencia Cliente",
                bio: "Especialista en UX/UI y atención al cliente. Su objetivo es garantizar que cada interacción con Stockify.pro sea intuitiva y agradable.",
                image: "https://randomuser.me/api/portraits/women/65.jpg"
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0F172A]">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-4">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Por qué elegirnos */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-[#0F172A] text-center">Por Qué Elegirnos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Building2 className="h-8 w-8 text-[#0F172A]" />,
                title: "Experiencia en el Sector",
                description: "Más de 5 años especializados en soluciones para eCommerce nos dan un conocimiento profundo de los desafíos específicos que enfrentan las tiendas online."
              },
              {
                icon: <Users className="h-8 w-8 text-[#0F172A]" />,
                title: "Soporte Personalizado",
                description: "Cada cliente cuenta con un gestor dedicado que conoce su negocio y está disponible para resolver cualquier duda o incidencia."
              },
              {
                icon: <Shield className="h-8 w-8 text-[#0F172A]" />,
                title: "Tecnología de Vanguardia",
                description: "Nuestra plataforma implementa las tecnologías más avanzadas para garantizar velocidad, seguridad y escalabilidad."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-[#0F172A]">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sección Contrareembolso */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-[#0F172A] text-center">Gestión de Contrareembolsos</h2>
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-[#0F172A]">Simplificamos tus pagos contra reembolso</h3>
                <p className="text-lg text-gray-600 mb-4">
                  Nuestra plataforma automatiza todo el proceso de gestión de contrareembolsos, desde el seguimiento de envíos hasta la conciliación de pagos.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <div className="bg-green-100 p-1 rounded-full mr-2 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Control en tiempo real de todos los envíos contra reembolso</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 p-1 rounded-full mr-2 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Conciliación automática con las liquidaciones de transportistas</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 p-1 rounded-full mr-2 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Notificaciones de incidencias y estados de cobro</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 p-1 rounded-full mr-2 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Informes detallados de rendimiento financiero</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80" 
                  alt="Gestión de contrareembolsos" 
                  className="rounded-xl shadow-lg"
                />
                <div className="absolute -bottom-6 -left-6 bg-[#0F172A] text-white p-4 rounded-xl">
                  <p className="font-bold">Reducción del 95%</p>
                  <p>en incidencias de cobro</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección Perfiles */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-[#0F172A] text-center">Gestión de Perfiles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="bg-blue-50 p-8 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0F172A] mb-3">Gestión de Empleados</h3>
                <p className="text-gray-600">
                  Configura diferentes perfiles de acceso para tu equipo, asignando permisos específicos según roles y responsabilidades.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="bg-purple-50 p-8 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0F172A] mb-3">Control de Acceso</h3>
                <p className="text-gray-600">
                  Define con precisión qué puede ver y modificar cada usuario de la plataforma, garantizando la seguridad de tus datos.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="bg-green-50 p-8 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0F172A] mb-3">Registro de Actividad</h3>
                <p className="text-gray-600">
                  Monitoriza todas las acciones realizadas en el sistema, con registros detallados de quién hizo qué y cuándo.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sección Almacén */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-[#0F172A] text-center">Gestión de Almacén</h2>
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <img 
                  src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80" 
                  alt="Gestión de almacén" 
                  className="rounded-xl shadow-lg"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-2xl font-bold mb-4 text-[#0F172A]">Control total de tu inventario</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Nuestra solución de gestión de almacén te permite mantener un control preciso de tu stock en tiempo real, optimizando tu cadena de suministro.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-[#0F172A] rounded-full p-2 mr-4 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#0F172A]">Gestión multi-almacén</h4>
                      <p className="text-gray-600">Controla múltiples ubicaciones desde una sola interfaz</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-[#0F172A] rounded-full p-2 mr-4 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#0F172A]">Análisis predictivo</h4>
                      <p className="text-gray-600">Anticipa necesidades de stock basadas en tendencias históricas</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-[#0F172A] rounded-full p-2 mr-4 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8zM12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#0F172A]">Automatización de procesos</h4>
                      <p className="text-gray-600">Reposición automática, alertas de stock y gestión de lotes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección Transportistas */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-[#0F172A] text-center">Gestión de Transportistas</h2>
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <div className="text-center mb-10">
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Integra y gestiona múltiples transportistas desde una única plataforma, simplificando el proceso de envío y seguimiento.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="border border-gray-200 rounded-xl p-6 text-center hover:shadow-md transition-all">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Seur_logo.svg/320px-Seur_logo.svg.png" alt="SEUR" className="h-12 mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Integración con SEUR</h4>
                <p className="text-gray-600 text-sm">Generación automática de etiquetas y seguimiento en tiempo real</p>
              </div>
              <div className="border border-gray-200 rounded-xl p-6 text-center hover:shadow-md transition-all">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/DHL_logo.svg/320px-DHL_logo.svg.png" alt="DHL" className="h-12 mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Integración con DHL</h4>
                <p className="text-gray-600 text-sm">Envíos internacionales con documentación aduanera automatizada</p>
              </div>
              <div className="border border-gray-200 rounded-xl p-6 text-center hover:shadow-md transition-all">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/GLS_Logo.svg/320px-GLS_Logo.svg.png" alt="GLS" className="h-12 mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Integración con GLS</h4>
                <p className="text-gray-600 text-sm">Puntos de recogida y envíos a toda Europa con facilidad</p>
              </div>
              <div className="border border-gray-200 rounded-xl p-6 text-center hover:shadow-md transition-all">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Correos_logo.svg/320px-Correos_logo.svg.png" alt="Correos" className="h-12 mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Integración con Correos</h4>
                <p className="text-gray-600 text-sm">Cobertura total en España con opciones económicas</p>
              </div>
            </div>
            <div className="mt-10 bg-blue-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-[#0F172A] mb-4">Optimización de costes de envío</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-[#0F172A] mb-2">Comparador de tarifas</h4>
                  <p className="text-gray-600 text-sm">Selecciona automáticamente el transportista más económico para cada envío</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-[#0F172A] mb-2">Agrupación de pedidos</h4>
                  <p className="text-gray-600 text-sm">Reduce costes combinando múltiples pedidos en un solo envío</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-[#0F172A] mb-2">Negociación de tarifas</h4>
                  <p className="text-gray-600 text-sm">Te ayudamos a conseguir mejores condiciones con los transportistas</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-[#0F172A] text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Listo para transformar tu eCommerce?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Únete a los cientos de negocios que ya han optimizado su gestión con Stockify.pro
          </p>
          <button className="bg-white text-[#0F172A] px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 inline-flex items-center">
            Solicitar Demo Gratuita
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </section>
      </div>
    </div>
  );
}

export default SobreNosotros; 