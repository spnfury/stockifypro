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
        title="Contrareembolso | Stockify.pro - CRM especializado en ecommerce con pago contra reembolso"
        description="Sistema CRM especializado en contrareembolso para ecommerce. Automatiza la gestión de pagos contra reembolso, seguimiento de envíos y cobros. Integración con Shopify y principales transportistas."
        keywords="crm contrareembolso, gestión contrareembolso, sistema contrareembolso, cobro contrareembolso, ecommerce contrareembolso, shopify contrareembolso, gestión de pagos, seguimiento envíos, automatización cobros, CRM para tiendas online, gestión de pedidos ecommerce, automatización de envíos, etiquetas de envío, confirmación de pedidos, estadísticas de ventas, integración con Shopify, gestión de contra reembolso"
        ogTitle="Sistema CRM de Contrareembolso para eCommerce"
        ogDescription="Automatiza la gestión de pagos contra reembolso, seguimiento de envíos y cobros. La solución más completa para tu negocio online."
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
                Gestión Eficiente de Contrareembolsos
              </h1>
              <p className="text-lg text-blue-100 max-w-3xl mx-auto">
                Optimiza la gestión de tus contrareembolsos con nuestra plataforma integral de CRM especializado en ecommerce. 
                Automatiza procesos, reduce tiempos y maximiza la seguridad en cada transacción.
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
                <h3 className="text-xl font-semibold">Gestión Eficiente de Pedidos</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Automatiza la gestión de contrareembolsos y reduce los tiempos de procesamiento 
                en un 70%. Nuestra plataforma integra todos los pasos del proceso en un solo lugar, incluyendo la creación automática de etiquetas de envío y confirmación de pedidos.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-500 mr-2" size={16} />
                  <span>Procesamiento automático de pagos y gestión de contra reembolso</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-500 mr-2" size={16} />
                  <span>Integración con múltiples transportistas y Shopify</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-500 mr-2" size={16} />
                  <span>Notificaciones en tiempo real y estadísticas de ventas</span>
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
                <h3 className="text-xl font-semibold">Seguridad Garantizada</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Protege tus transacciones con nuestro sistema de seguridad avanzado. 
                Cifrado de extremo a extremo y verificación de identidad en cada paso.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-500 mr-2" size={16} />
                  <span>Verificación de identidad</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-500 mr-2" size={16} />
                  <span>Cifrado de datos</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-500 mr-2" size={16} />
                  <span>Auditoría de transacciones</span>
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
                <h3 className="font-semibold mb-2">Mayor Rentabilidad</h3>
                <p className="text-gray-600">
                  Reduce costos operativos y aumenta la eficiencia en la gestión de pagos.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <Zap className="text-blue-600 mb-4" size={24} />
                <h3 className="font-semibold mb-2">Automatización Total</h3>
                <p className="text-gray-600">
                  Elimina procesos manuales y reduce errores en la gestión de contrareembolsos.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <BarChart2 className="text-blue-600 mb-4" size={24} />
                <h3 className="font-semibold mb-2">Analítica Avanzada</h3>
                <p className="text-gray-600">
                  Accede a informes detallados y métricas clave para optimizar tu negocio.
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
            <h2 className="text-3xl font-bold mb-6">¿Listo para Optimizar tus Contrareembolsos?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Solicita una demostración personalizada y descubre cómo podemos transformar 
              la gestión de tus contrareembolsos.
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

export default Contrareembolso; 