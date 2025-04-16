import React from 'react';
import Head from '../components/Head';

function Privacidad() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <Head
        title="Política de Privacidad - Stockify.pro"
        description="Política de privacidad de Stockify.pro. Conoce cómo manejamos tus datos personales y protegemos tu privacidad."
        keywords="política de privacidad, protección de datos, privacidad, RGPD, LOPD"
        ogTitle="Política de Privacidad - Stockify.pro"
        ogDescription="Información sobre cómo manejamos tus datos personales y protegemos tu privacidad en Stockify.pro."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-[#0F172A]">Política de Privacidad</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg mb-6">Última actualización: {new Date().toLocaleDateString('es-ES', {year: 'numeric', month: 'long', day: 'numeric'})}</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Introducción</h2>
            <p>En Stockify.pro (en adelante, "nosotros", "nuestra", "nuestro" o "la Empresa"), respetamos tu privacidad y nos comprometemos a proteger tus datos personales. Esta política de privacidad te informará sobre cómo cuidamos tus datos personales cuando visitas nuestro sitio web y te informará sobre tus derechos de privacidad y cómo la ley te protege.</p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Datos que recopilamos</h2>
            <p>Podemos recopilar, usar, almacenar y transferir diferentes tipos de datos personales sobre ti, que hemos agrupado de la siguiente manera:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li><strong>Datos de identidad:</strong> incluye nombre, apellido, nombre de usuario o identificador similar.</li>
              <li><strong>Datos de contacto:</strong> incluye dirección de facturación, dirección de entrega, dirección de correo electrónico y números de teléfono.</li>
              <li><strong>Datos técnicos:</strong> incluye dirección de protocolo de Internet (IP), datos de inicio de sesión, tipo y versión del navegador, configuración de zona horaria y ubicación, tipos y versiones de plug-ins del navegador, sistema operativo y plataforma, y otra tecnología en los dispositivos que utilizas para acceder a este sitio web.</li>
              <li><strong>Datos de perfil:</strong> incluye tu nombre de usuario y contraseña, compras o pedidos realizados por ti, tus intereses, preferencias, comentarios y respuestas a encuestas.</li>
              <li><strong>Datos de uso:</strong> incluye información sobre cómo utilizas nuestro sitio web, productos y servicios.</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Cómo recopilamos tus datos</h2>
            <p>Utilizamos diferentes métodos para recopilar datos sobre ti, entre ellos:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li><strong>Interacciones directas:</strong> Puedes proporcionarnos tus datos de identidad, contacto y financieros al completar formularios o al comunicarte con nosotros por correo postal, teléfono, correo electrónico o de otro modo.</li>
              <li><strong>Tecnologías o interacciones automatizadas:</strong> A medida que interactúas con nuestro sitio web, podemos recopilar automáticamente datos técnicos sobre tu equipo, acciones de navegación y patrones.</li>
              <li><strong>Terceros o fuentes disponibles públicamente:</strong> Podemos recibir datos personales sobre ti de varios terceros y fuentes públicas.</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Cómo utilizamos tus datos</h2>
            <p>Solo utilizaremos tus datos personales cuando la ley nos lo permita. Más comúnmente, utilizaremos tus datos personales en las siguientes circunstancias:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Cuando necesitemos ejecutar el contrato que estamos a punto de celebrar o que hemos celebrado contigo.</li>
              <li>Cuando sea necesario para nuestros intereses legítimos (o los de un tercero) y tus intereses y derechos fundamentales no anulen esos intereses.</li>
              <li>Cuando debamos cumplir con una obligación legal o regulatoria.</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Tus derechos de protección de datos</h2>
            <p>De acuerdo con la legislación aplicable, puedes tener varios derechos en relación con tus datos, como:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li><strong>Derecho de acceso:</strong> Puedes solicitar acceso a tus datos personales.</li>
              <li><strong>Derecho de rectificación:</strong> Puedes solicitar que corrijamos cualquier información que consideres inexacta.</li>
              <li><strong>Derecho al olvido:</strong> Puedes solicitar que eliminemos tus datos personales en determinadas circunstancias.</li>
              <li><strong>Derecho a la limitación del tratamiento:</strong> Puedes solicitar que limitemos el procesamiento de tus datos personales.</li>
              <li><strong>Derecho a la portabilidad de los datos:</strong> Puedes solicitar la transferencia de tus datos personales a ti o a un tercero.</li>
              <li><strong>Derecho de oposición:</strong> Puedes oponerte al procesamiento de tus datos personales.</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Contacto</h2>
            <p>Si tienes alguna pregunta sobre esta política de privacidad o nuestras prácticas de privacidad, comunícate con nosotros a:</p>
            <p className="mt-2">
              Email: <a href="mailto:info@stockify.pro" className="text-blue-600 hover:underline">info@stockify.pro</a><br />
             
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Cambios a esta política de privacidad</h2>
            <p>Podemos actualizar nuestra política de privacidad de vez en cuando. Te notificaremos cualquier cambio publicando la nueva política de privacidad en esta página y, si los cambios son significativos, te enviaremos un aviso.</p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Privacidad; 