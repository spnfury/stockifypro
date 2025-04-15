import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  UserCog,
  Shield, 
  TrendingUp, 
  Zap, 
  BarChart2,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import ContactForm from '../../components/ContactForm';
import Head from '../../components/Head';

const Perfiles: React.FC = () => {
  const navigate = useNavigate();
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleBack = () => {
    navigate('/');
  };

  return (
    <>
      <Head
        title="Gestión de Perfiles | Stockify.pro - Sistema de Roles y Permisos"
        description="Sistema avanzado de gestión de perfiles y roles para tu ecommerce. Control total de accesos, auditoría de acciones y roles personalizados para confirmadores, administradores y gestores."
        keywords="gestión de perfiles, roles de usuario, control de accesos, auditoría de acciones, permisos personalizados, seguridad ecommerce, administración de usuarios"
        ogTitle="Gestión de Perfiles Avanzada para tu eCommerce"
        ogDescription="Optimiza la gestión de tu equipo con nuestro sistema de roles y permisos personalizados. Control total y seguridad garantizada."
      />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <div className="relative py-12 bg-gradient-to-r from-blue-600 to-indigo-700">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.button
              onClick={handleBack}
              className="flex items-center text-white mb-4 hover:text-blue-200 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft className="mr-2" />
              Volver
            </motion.button>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Gestión de Perfiles Avanzada
              </h1>
              <p className="text-lg text-blue-100 max-w-3xl mx-auto">
                Sistema de roles personalizados para confirmadores, administradores y gestores. 
                Control total de accesos y auditoría de acciones.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="flex items-center mb-4">
                <UserCog className="text-blue-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold">Roles Personalizados</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Crea y gestiona roles personalizados con permisos específicos para cada tipo de usuario.
                Asigna responsabilidades y controla el acceso a diferentes funcionalidades.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-500 mr-2" size={16} />
                  <span>Roles predefinidos y personalizables</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-500 mr-2" size={16} />
                  <span>Asignación granular de permisos</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-500 mr-2" size={16} />
                  <span>Gestión de equipos y departamentos</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="flex items-center mb-4">
                <Shield className="text-blue-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold">Seguridad y Auditoría</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Registro detallado de todas las acciones realizadas por los usuarios.
                Sistema de auditoría completo para garantizar la seguridad y trazabilidad.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-500 mr-2" size={16} />
                  <span>Registro de actividades</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-500 mr-2" size={16} />
                  <span>Alertas de seguridad</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-500 mr-2" size={16} />
                  <span>Informes de auditoría</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Benefits Section */}
          <div className="bg-blue-50 rounded-xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-center mb-8">Beneficios Clave</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <TrendingUp className="text-blue-600 mb-4" size={24} />
                <h3 className="font-semibold mb-2">Control Total</h3>
                <p className="text-gray-600">
                  Gestiona quién puede acceder y qué puede hacer cada usuario en tu sistema.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <Zap className="text-blue-600 mb-4" size={24} />
                <h3 className="font-semibold mb-2">Eficiencia Operativa</h3>
                <p className="text-gray-600">
                  Optimiza los flujos de trabajo asignando los permisos adecuados a cada rol.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <BarChart2 className="text-blue-600 mb-4" size={24} />
                <h3 className="font-semibold mb-2">Trazabilidad</h3>
                <p className="text-gray-600">
                  Registro completo de todas las acciones para auditoría y seguimiento.
                </p>
              </motion.div>
            </div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-6">¿Listo para Optimizar la Gestión de Perfiles?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Solicita una demostración personalizada y descubre cómo podemos transformar 
              la gestión de perfiles en tu empresa.
            </p>
            <motion.button
              onClick={() => setIsContactOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Solicitar Demostración
            </motion.button>
          </motion.div>
        </div>

        {/* Contact Form Modal */}
        <ContactForm 
          isOpen={isContactOpen} 
          onClose={() => setIsContactOpen(false)} 
        />
      </div>
    </>
  );
};

export default Perfiles; 