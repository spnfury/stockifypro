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
  ArrowRight,
  Calendar,
  Tag
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
import BlogAdmin from './components/admin/BlogAdmin';
import BlogList from './components/blog/BlogList';
import BlogPost from './components/blog/BlogPost';
import { AuthProvider } from './components/auth/AuthProvider';
import Login from './components/auth/Login';
import { ProtectedRoute } from './components/auth/ProtectedRoute';
import { Article, Category } from './types/article';

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
        setSubmitStatus({ type: 'success', message: '¡Gracias! Tu mensaje ha sido enviado correctamente.' });
        formRef.current.reset();
      } else {
        throw new Error('Error al enviar el formulario');
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setSubmitStatus({ type: 'error', message: 'Lo sentimos, ha ocurrido un error al enviar el mensaje.' });
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
        <h3 className="text-2xl font-bold mb-6">Solicitar Prueba Gratuita de CRM Contrareembolso</h3>
        <p className="text-gray-600 mb-4">
          Descubre cómo nuestro CRM contrareembolso puede transformar tu negocio con automatización de envíos, gestión de CRM contrareembolso y análisis de estadísticas en tiempo real.
        </p>
        <form 
          ref={formRef}
          onSubmit={handleSubmit}
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
              >
                {isSubmitting ? 'Cargando...' : 'Enviar'}
              </button>
            </div>
            {submitStatus && (
              <div className={`mt-4 p-4 rounded-md ${
                submitStatus.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
              }`}>
                {submitStatus.message}
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const location = useLocation();
  const [articles, setArticles] = useState<Article[]>(() => {
    // Intentar cargar artículos del localStorage al inicializar
    const savedArticles = localStorage.getItem('articles');
    if (savedArticles) {
      const parsedArticles = JSON.parse(savedArticles);
      // Asegurarse de que todos los artículos tengan un contador de visitas
      return parsedArticles.map((article: Article) => ({
        ...article,
        viewCount: article.viewCount || 50 // Iniciar en 50 si no existe
      }));
    }
    return [];
  });

  // Guardar artículos en localStorage cuando cambien
  useEffect(() => {
    localStorage.setItem('articles', JSON.stringify(articles));
  }, [articles]);

  // Función para actualizar el contador de visitas
  const handleViewCountUpdate = (articleId: string) => {
    setArticles(prevArticles => 
      prevArticles.map(article => 
        article.id === articleId 
          ? { ...article, viewCount: (article.viewCount || 50) + 1 }
          : article
      )
    );
  };

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

  // Categorías disponibles
  const categories = [
    { id: '1', name: 'Gestión de Contrareembolso', slug: 'gestion-contrareembolso' },
    { id: '2', name: 'Automatización de Contrareembolso', slug: 'automatizacion-contrareembolso' },
    { id: '3', name: 'Integraciones de Contrareembolso', slug: 'integraciones-contrareembolso' },
    { id: '4', name: 'Tutoriales de Contrareembolso', slug: 'tutoriales-contrareembolso' },
    { id: '5', name: 'Noticias de Contrareembolso', slug: 'noticias-contrareembolso' }
  ];

  // Filtrar artículos publicados para mostrar en el home y blog
  const publishedArticles = articles.filter(article => article.published);

  return (
    <AuthProvider>
      <div className="min-h-screen bg-gray-50">
        <Head
          title="CRM Contrareembolso | StockifyPro - Sistema CRM Especializado en Contrareembolso para Ecommerce"
          description="CRM contrareembolso especializado para ecommerce. Automatiza la gestión de contrareembolso, seguimiento de envíos y cobros. El mejor CRM contrareembolso para tu negocio online."
          keywords="crm contrareembolso, sistema crm contrareembolso, gestión crm contrareembolso, crm contrareembolso ecommerce, crm contrareembolso online, gestión de crm contrareembolso, automatización crm contrareembolso, cobro crm contrareembolso, crm contrareembolso shopify, crm contrareembolso transportistas, crm contrareembolso automatizado, crm contrareembolso seguro, crm contrareembolso eficiente, crm contrareembolso rentable, crm contrareembolso profesional, software crm contrareembolso"
          ogTitle="CRM Contrareembolso - El Mejor Sistema CRM de Contrareembolso"
          ogDescription="Automatiza la gestión de contrareembolso con nuestro CRM contrareembolso. La solución más completa de CRM contrareembolso para tu negocio online."
        />
        <header className="bg-white shadow-sm sticky top-0 z-50">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <div className="flex items-center">
                <Link to="/" className="flex-shrink-0">
                  <img
                    className="h-10 w-auto"
                    src="https://app.stockify.pro/assets/img/logos/logo2024.png"
                    alt="StockifyPro"
                  />
                </Link>
                <div className="hidden md:ml-10 md:flex md:space-x-8">
                  <Link
                    to="/servicios"
                    className="text-gray-700 hover:text-[#0F172A] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                  >
                    Servicios
                  </Link>
                  <Link
                    to="/sobre-nosotros"
                    className="text-gray-700 hover:text-[#0F172A] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                  >
                    Sobre nosotros
                  </Link>
                  <Link
                    to="/blog"
                    className="text-gray-700 hover:text-[#0F172A] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                  >
                    Blog
                  </Link>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setIsContactOpen(true)}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#0F172A] hover:bg-[#1E293B] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0F172A] transition-colors duration-200"
                >
                  Contacto
                </button>
              </div>
            </div>
          </nav>
        </header>

        <main>
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
                        CRM Contrareembolso<br />
                        Sistema CRM Especializado en Contrareembolso para Ecommerce
                      </h1>
                      <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                        CRM contrareembolso especializado para ecommerce. Automatiza la gestión de contrareembolso, seguimiento de envíos y cobros. Plataforma integral de CRM contrareembolso con automatización de envíos, creación de etiquetas de envío, confirmación de pedidos de contrareembolso y análisis de estadísticas de ventas en tiempo real. 100% personalizable según las necesidades específicas de tu negocio de CRM contrareembolso.
                      </p>
                      <div className="flex justify-center gap-4">
                        <button 
                          onClick={() => setIsContactOpen(true)}
                          className="bg-[#0F172A] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#1E293B]"
                        >
                          Prueba Gratuita de CRM Contrareembolso
                        </button>
                      </div>
                    </div>
                    <div className="mt-16 space-y-8">
                      <img style={{ maxHeight: "400px" }}
                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
                        alt="Vista previa del Dashboard de Contrareembolso"
                        className="rounded-xl shadow-xl h-1/2 mx-auto"
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
                        Todo lo que Necesitas para Gestionar tu CRM Contrareembolso
                      </h2>
                      <p className="text-xl text-gray-600">
                        La solución más completa para la gestión de CRM contrareembolso, automatización de envíos y análisis de estadísticas. Totalmente adaptable a tus procesos de CRM contrareembolso y flujos de trabajo.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {[
                        {
                          icon: <ShoppingCart className="h-8 w-8 text-[#0F172A]" />,
                          title: "CRM Contrareembolso Eficiente",
                          description: "Software especializado en CRM contrareembolso para automatizar envíos en tiendas online y gestión eficiente de CRM contrareembolso. Configurable según tus reglas de negocio de CRM contrareembolso.",
                          benefits: [
                            "Reducción del 70% en tiempo de gestión de CRM contrareembolso",
                            "Automatización de cobros de CRM contrareembolso y confirmación de pedidos",
                            "Seguimiento en tiempo real de CRM contrareembolso y estadísticas de ventas",
                            "Personalización total de flujos de trabajo de CRM contrareembolso"
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
                          title: "Automatización de Envíos",
                          description: "Herramienta para crear etiquetas de envío automáticamente y sistema para confirmar pedidos y validar direcciones.",
                          benefits: [
                            "Seguimiento en tiempo real",
                            "Automatización de envíos",
                            "Integración con múltiples transportistas"
                          ],
                          link: "/servicios/transportistas"
                        },
                        {
                          icon: <MessageSquareText className="h-8 w-8 text-[#0F172A]" />,
                          title: "Asistente Virtual para CRM Contrareembolso",
                          description: "Sistema de confirmación y atención al cliente especializado en CRM contrareembolso con inteligencia artificial.",
                          benefits: [
                            "Respuestas instantáneas sobre CRM contrareembolso",
                            "Reducción de carga de trabajo en gestión de CRM contrareembolso",
                            "Mejora en satisfacción cliente con CRM contrareembolso"
                          ],
                          link: "/servicios/ia"
                        },
                        {
                          icon: <BarChart4 className="h-8 w-8 text-[#0F172A]" />,
                          title: "Análisis y CRM Contrareembolso Avanzado",
                          description: "Plataforma para analizar estadísticas de CRM contrareembolso en tiempo real con integración sencilla de CRM con Shopify. Dashboard personalizable según tus KPIs de CRM contrareembolso.",
                          benefits: [
                            "Informes personalizados de CRM contrareembolso y análisis predictivo",
                            "Gestión de clientes y ventas de CRM contrareembolso",
                            "Estadísticas de CRM contrareembolso en tiempo real",
                            "Paneles de control de CRM contrareembolso adaptables a tus necesidades"
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
                        Solicitar Demo Personalizada de CRM Contrareembolso
                      </button>
                    </div>
                  </div>
                </section>

                {/* Blog Section */}
                <section className="py-20">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                      <h2 className="text-3xl font-bold text-[#0F172A] mb-4">
                        Últimos Artículos sobre CRM Contrareembolso
                      </h2>
                      <p className="text-xl text-gray-600">
                        Descubre las últimas novedades, consejos y tendencias en CRM contrareembolso y ecommerce
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {publishedArticles.slice(0, 3).map((article) => (
                        <Link
                          key={article.id}
                          to={`/blog/${article.slug}`}
                          className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                        >
                          {article.imageUrl && (
                            <div className="aspect-w-16 aspect-h-9">
                              <img
                                src={article.imageUrl}
                                alt={article.title}
                                className="object-cover w-full h-full"
                              />
                            </div>
                          )}
                          <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-3">
                              {article.categories?.map((category) => (
                                <span
                                  key={category.id}
                                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#0F172A]/10 text-[#0F172A]"
                                >
                                  <Tag className="h-3 w-3 mr-1" />
                                  {category.name}
                                </span>
                              ))}
                            </div>
                            <h3 className="text-xl font-semibold text-[#0F172A] mb-3">
                              {article.title}
                            </h3>
                            <p className="text-gray-600 mb-4 line-clamp-3">
                              {article.excerpt}
                            </p>
                            <div className="flex items-center justify-between text-sm text-gray-500">
                              <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4" />
                                <span>{new Date(article.createdAt).toLocaleDateString()}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4" />
                                <span>{Math.ceil(article.content.length / 200)} min lectura</span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>

                    <div className="text-center mt-12">
                      <Link
                        to="/blog"
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#0F172A] hover:bg-[#1E293B]"
                      >
                        Ver todos los artículos
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </section>

                {/* Video Section */}
                <section className="py-20 bg-gray-50">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                      <h2 className="text-3xl font-bold text-[#0F172A] mb-4">
                        Descubre Nuestro CRM Contrareembolso en Acción
                      </h2>
                      <p className="text-xl text-gray-600">
                        Mira cómo nuestra plataforma de CRM contrareembolso puede transformar tu negocio
                      </p>
                    </div>

                    <div className="relative aspect-video max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
                      <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/hQCeq4bMSs0"
                        title="CRM Contrareembolso Demo"
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
                        Solicitar Demo Personalizada de CRM Contrareembolso
                      </button>
                    </div>
                  </div>
                </section>

                {/* Pricing Section */}
                <section id="pricing" className="py-20 bg-gradient-to-b from-white to-gray-50">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                      <h2 className="text-3xl font-bold text-[#0F172A] mb-4">
                        Planes de CRM Contrareembolso Adaptados a Tu Negocio
                      </h2>
                      <p className="text-xl text-gray-600 mb-8">
                        Soluciones flexibles de CRM contrareembolso que crecen contigo
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                      {[
                        {
                          name: "Basic",
                          price: "199",
                          limit: "Hasta 10.000 CRM contrareembolsos",
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
                          price: "299",
                          limit: "Hasta 50.000 CRM contrareembolsos",
                          features: [
                            "Soporte prioritario",
                            "Estadísticas avanzadas de CRM contrareembolso",
                            "Webhooks personalizados"
                          ],
                          isPopular: true,
                          ctaText: "Empezar ahora"
                        },
                        {
                          name: "Premium",
                          price: "399",
                          limit: "Hasta 100.000 CRM contrareembolsos",
                          features: [
                            "Integraciones avanzadas de CRM contrareembolso",
                            "Acceso anticipado a nuevas funciones",
                            "Soporte técnico directo"
                          ],
                          isPopular: false,
                          ctaText: "Empezar ahora"
                        },
                        {
                          name: "Enterprise",
                          price: "A medida",
                          limit: "CRM contrareembolsos ilimitados",
                          features: [
                            "SLA dedicado",
                            "Onboarding personalizado",
                            "Integraciones a medida de CRM contrareembolso",
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
                    {/* Comparativa de precios */}
                    <div className="mt-12">
                      <h3 className="text-2xl font-bold text-[#0F172A] mb-4 text-center">Comparativa con otros softwares de CRM contrareembolso</h3>
                      <p className="text-center text-gray-600 mb-6">
                        Otros softwares cobran una media de <span className="font-semibold">0,13 € por CRM contrareembolso</span>. Así quedaría el coste mensual equivalente:
                      </p>
                      <div className="overflow-x-auto">
                        <table className="min-w-full bg-white rounded-xl shadow-md">
                          <thead>
                            <tr>
                              <th className="px-6 py-3 border-b text-left text-sm font-semibold text-[#0F172A]">Plan</th>
                              <th className="px-6 py-3 border-b text-left text-sm font-semibold text-[#0F172A]">Coste con otros softwares</th>
                              <th className="px-6 py-3 border-b text-left text-sm font-semibold text-[#0F172A]">Coste con Stockify</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="px-6 py-4 border-b">Basic (10.000 CRM contrareembolsos)</td>
                              <td className="px-6 py-4 border-b font-bold text-red-600">1.300 €/mes</td>
                              <td className="px-6 py-4 border-b font-bold text-green-700">199 €/mes</td>
                            </tr>
                            <tr>
                              <td className="px-6 py-4 border-b">Standard (50.000 CRM contrareembolsos)</td>
                              <td className="px-6 py-4 border-b font-bold text-red-600">6.500 €/mes</td>
                              <td className="px-6 py-4 border-b font-bold text-green-700">299 €/mes</td>
                            </tr>
                            <tr>
                              <td className="px-6 py-4 border-b">Premium (100.000 CRM contrareembolsos)</td>
                              <td className="px-6 py-4 border-b font-bold text-red-600">13.000 €/mes</td>
                              <td className="px-6 py-4 border-b font-bold text-green-700">399 €/mes</td>
                            </tr>
                            <tr>
                              <td className="px-6 py-4">Enterprise (ilimitado)</td>
                              <td className="px-6 py-4 font-bold text-red-600">Aún más alto</td>
                              <td className="px-6 py-4 font-bold text-green-700">A medida</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
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
            <Route path="/blog" element={<BlogList articles={publishedArticles} />} />
            <Route path="/blog/:slug" element={
              <BlogPost 
                article={publishedArticles.find(article => article.slug === location.pathname.split('/').pop()) || publishedArticles[0]} 
                onViewCountUpdate={handleViewCountUpdate}
              />
            } />
            <Route path="/admin" element={<Login />} />
            <Route path="/admin/blog" element={
              <ProtectedRoute>
                <BlogAdmin articles={articles} setArticles={setArticles} />
              </ProtectedRoute>
            } />
          </Routes>
        </main>

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
                  La solución más completa para la gestión de CRM contrareembolso en tu negocio online.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Servicios de CRM Contrareembolso</h3>
                <ul className="space-y-2">
                  <li><Link to="/servicios/contrareembolso" className="text-gray-300 hover:text-white">Sistema de CRM Contrareembolso</Link></li>
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
    </AuthProvider>
  );
}

export default App;
