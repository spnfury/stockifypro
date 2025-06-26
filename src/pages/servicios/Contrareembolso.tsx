import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Clock, 
  Shield, 
  TrendingUp, 
  Zap, 
  BarChart2,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import ContactForm from '../../components/ContactForm';
import Head from '../../components/Head';

const Contrareembolso: React.FC = () => {
  const navigate = useNavigate();
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleBack = () => {
    navigate('/');
  };

  return (
    <>
      <Head
        title="CRM Contrareembolso | Sistema CRM Especializado en Contrareembolso para Ecommerce"
        description="CRM contrareembolso especializado para ecommerce. Automatiza la gestión de contrareembolso, seguimiento de envíos y cobros. La mejor solución de CRM contrareembolso para tu negocio online."
        keywords="crm contrareembolso, sistema crm contrareembolso, gestión crm contrareembolso, crm contrareembolso ecommerce, crm contrareembolso online, gestión de crm contrareembolso, automatización crm contrareembolso, cobro crm contrareembolso, crm contrareembolso shopify, crm contrareembolso transportistas, crm contrareembolso automatizado, crm contrareembolso seguro, crm contrareembolso eficiente, crm contrareembolso rentable, crm contrareembolso profesional, software crm contrareembolso"
        ogTitle="CRM Contrareembolso - El Mejor Sistema CRM de Contrareembolso"
        ogDescription="Automatiza la gestión de contrareembolso con nuestro CRM contrareembolso. La solución más completa de CRM contrareembolso para tu negocio online."
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
                CRM Contrareembolso - Gestión Eficiente de CRM Contrareembolso
              </h1>
              <p className="text-lg text-blue-100 max-w-3xl mx-auto">
                Optimiza la gestión de CRM contrareembolso con nuestra plataforma integral de CRM especializado en contrareembolso para ecommerce. 
                Automatiza procesos de CRM contrareembolso, reduce tiempos y maximiza la seguridad en cada transacción de CRM contrareembolso.
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
                <Clock className="text-blue-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold">Gestión Eficiente de CRM Contrareembolso</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Automatiza la gestión de CRM contrareembolso y reduce los tiempos de procesamiento 
                en un 70%. Nuestra plataforma de CRM contrareembolso integra todos los pasos del proceso de CRM contrareembolso en un solo lugar, incluyendo la creación automática de etiquetas de envío y confirmación de pedidos de CRM contrareembolso.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-500 mr-2" size={16} />
                  <span>Procesamiento automático de CRM contrareembolso y gestión de pagos</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-500 mr-2" size={16} />
                  <span>Integración con múltiples transportistas para CRM contrareembolso</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-500 mr-2" size={16} />
                  <span>Notificaciones en tiempo real de CRM contrareembolso y estadísticas</span>
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
                <h3 className="text-xl font-semibold">CRM Contrareembolso Seguro y Garantizado</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Protege tus transacciones de CRM contrareembolso con nuestro sistema de seguridad avanzado. 
                Cifrado de extremo a extremo y verificación de identidad en cada paso del proceso de CRM contrareembolso.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-500 mr-2" size={16} />
                  <span>Verificación de identidad para CRM contrareembolso</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-500 mr-2" size={16} />
                  <span>Cifrado de datos de CRM contrareembolso</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-500 mr-2" size={16} />
                  <span>Auditoría completa de transacciones de CRM contrareembolso</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Benefits Section */}
          <div className="bg-blue-50 rounded-xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-center mb-8">Beneficios del Sistema de CRM Contrareembolso</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <TrendingUp className="text-blue-600 mb-4" size={24} />
                <h3 className="font-semibold mb-2">CRM Contrareembolso Rentable</h3>
                <p className="text-gray-600">
                  Reduce costos operativos y aumenta la eficiencia en la gestión de CRM contrareembolso.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <Zap className="text-blue-600 mb-4" size={24} />
                <h3 className="font-semibold mb-2">CRM Contrareembolso Automatizado</h3>
                <p className="text-gray-600">
                  Elimina procesos manuales y reduce errores en la gestión de CRM contrareembolso.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <BarChart2 className="text-blue-600 mb-4" size={24} />
                <h3 className="font-semibold mb-2">Analítica de CRM Contrareembolso</h3>
                <p className="text-gray-600">
                  Accede a informes detallados y métricas clave para optimizar tu CRM contrareembolso.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">¿Por Qué Elegir Nuestro Sistema de CRM Contrareembolso?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-4 text-blue-600">CRM Contrareembolso Profesional</h3>
                <p className="text-gray-600 mb-4">
                  Nuestro sistema de CRM contrareembolso está diseñado específicamente para profesionales del ecommerce 
                  que necesitan una gestión eficiente y segura de CRM contrareembolso.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle2 className="text-green-500 mr-2" size={16} />
                    <span>CRM contrareembolso integrado con Shopify</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="text-green-500 mr-2" size={16} />
                    <span>Gestión automática de CRM contrareembolso</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="text-green-500 mr-2" size={16} />
                    <span>Seguimiento en tiempo real de CRM contrareembolso</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-4 text-blue-600">CRM Contrareembolso Eficiente</h3>
                <p className="text-gray-600 mb-4">
                  Optimiza cada aspecto de tu proceso de CRM contrareembolso con herramientas avanzadas 
                  que automatizan tareas repetitivas y mejoran la precisión.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle2 className="text-green-500 mr-2" size={16} />
                    <span>Reducción del 70% en tiempo de procesamiento de CRM contrareembolso</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="text-green-500 mr-2" size={16} />
                    <span>Eliminación de errores en CRM contrareembolso</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="text-green-500 mr-2" size={16} />
                    <span>Escalabilidad automática del CRM contrareembolso</span>
                  </li>
                </ul>
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
            <h2 className="text-3xl font-bold mb-6">¿Listo para Optimizar tu CRM Contrareembolso?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Solicita una demostración personalizada de nuestro sistema de CRM contrareembolso y descubre cómo podemos transformar 
              la gestión de tu CRM contrareembolso para maximizar la rentabilidad.
            </p>
            <motion.button
              onClick={() => setIsContactOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Solicitar Demostración de CRM Contrareembolso
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

export default Contrareembolso; 