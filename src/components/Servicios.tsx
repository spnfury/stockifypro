import React from 'react';
import { Link } from 'react-router-dom';
import Head from '../components/Head';
import { Truck, UserCog, CreditCard } from 'lucide-react';

const servicios = [
  {
    nombre: 'Contrareembolso',
    descripcion: 'Automatiza la gestión de pagos contra reembolso, seguimiento de envíos y cobros.',
    icono: <CreditCard className="h-10 w-10 text-blue-600 mb-4" />,
    ruta: 'contrareembolso',
  },
  {
    nombre: 'Transportistas',
    descripcion: 'Integración completa con las principales empresas de transporte: GLS, MRW, Correos Express, NACEX, TIPSA y más.',
    icono: <Truck className="h-10 w-10 text-blue-600 mb-4" />,
    ruta: 'transportistas',
  },
  {
    nombre: 'Perfiles',
    descripcion: 'Sistema avanzado de gestión de perfiles y roles para tu ecommerce. Control total de accesos y permisos.',
    icono: <UserCog className="h-10 w-10 text-blue-600 mb-4" />,
    ruta: 'perfiles',
  },
];

const Servicios = () => {
  // Obtener el idioma de la URL
  const lang = window.location.pathname.split('/')[1] || 'es';

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 pb-16">
      <Head
        title="Servicios | Stockify.pro"
        description="Descubre todos los servicios que ofrece Stockify.pro para optimizar tu ecommerce."
        keywords="servicios, contrareembolso, transportistas, perfiles, gestión ecommerce"
        ogTitle="Servicios de Stockify.pro"
        ogDescription="Automatiza y gestiona tu ecommerce con nuestros servicios avanzados."
      />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#0F172A]">Nuestros Servicios</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Optimiza tu negocio con nuestras soluciones integrales para ecommerce.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicios.map((servicio) => (
            <Link to={`/${lang}/servicios/${servicio.ruta}`} key={servicio.nombre} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all flex flex-col items-center text-center group">
              <div className="bg-blue-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-all">
                {servicio.icono}
              </div>
              <h2 className="text-2xl font-semibold mb-3 text-[#0F172A] group-hover:text-blue-700 transition-colors">{servicio.nombre}</h2>
              <p className="text-gray-600">{servicio.descripcion}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Servicios; 