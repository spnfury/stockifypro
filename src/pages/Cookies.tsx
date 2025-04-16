import React from 'react';
import Head from '../components/Head';

function Cookies() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <Head
        title="Política de Cookies - Stockify.pro"
        description="Política de cookies de Stockify.pro. Conoce cómo utilizamos las cookies en nuestro sitio web."
        keywords="política de cookies, cookies, privacidad, navegación web, RGPD"
        ogTitle="Política de Cookies - Stockify.pro"
        ogDescription="Información sobre cómo utilizamos las cookies en nuestro sitio web para mejorar tu experiencia."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-[#0F172A]">Política de Cookies</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg mb-6">Última actualización: {new Date().toLocaleDateString('es-ES', {year: 'numeric', month: 'long', day: 'numeric'})}</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. ¿Qué son las cookies?</h2>
            <p>
              Las cookies son pequeños archivos de texto que los sitios web que visitas colocan en tu ordenador. Se utilizan ampliamente para hacer que los sitios web funcionen, o funcionen de manera más eficiente, así como para proporcionar información a los propietarios del sitio. Las cookies mejoran tu experiencia de navegación permitiendo que los sitios web te recuerden, ya sea durante la duración de tu visita (utilizando una cookie de sesión) o para visitas repetidas (usando una cookie persistente).
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Tipos de cookies que utilizamos</h2>
            <p>En Stockify.pro utilizamos los siguientes tipos de cookies:</p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">2.1. Cookies estrictamente necesarias</h3>
            <p>Estas cookies son esenciales para que puedas navegar por el sitio web y utilizar sus funcionalidades. Sin estas cookies, no podríamos proporcionar algunos servicios que has solicitado.</p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">2.2. Cookies de rendimiento</h3>
            <p>Estas cookies recopilan información sobre cómo utilizas nuestro sitio web, por ejemplo, qué páginas visitas con más frecuencia. Estos datos nos ayudan a optimizar el sitio web y facilitar tu navegación. Estas cookies no recopilan información que te identifique personalmente; toda la información es agregada y, por lo tanto, anónima.</p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">2.3. Cookies de funcionalidad</h3>
            <p>Estas cookies permiten que el sitio web recuerde las elecciones que haces y proporciona características mejoradas y más personales. Por ejemplo, estas cookies pueden recordar tus preferencias de idioma o región.</p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">2.4. Cookies de publicidad o de orientación</h3>
            <p>Estas cookies se utilizan para ofrecer anuncios más relevantes para ti y tus intereses. También se utilizan para limitar el número de veces que ves un anuncio, así como para medir la efectividad de una campaña publicitaria.</p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Cookies de terceros</h2>
            <p>
              Algunas cookies las establecen servicios de terceros que aparecen en nuestras páginas. No podemos controlar la difusión de estas cookies. Debes consultar los sitios web de estos terceros para obtener más información.
            </p>
            <p className="mt-4">
              Utilizamos servicios de análisis web como Google Analytics, que utiliza cookies para ayudarnos a analizar cómo los usuarios utilizan nuestro sitio web. La información generada por la cookie sobre tu uso del sitio web (incluyendo tu dirección IP) se transmite y almacena por Google en servidores en los Estados Unidos.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Cómo gestionar las cookies</h2>
            <p>
              Puedes gestionar las cookies a través de la configuración de tu navegador. Ten en cuenta que la eliminación o el bloqueo de cookies puede afectar a la experiencia del usuario y es posible que algunas partes del sitio web no funcionen correctamente.
            </p>
            <p className="mt-4">
              Aquí tienes enlaces a las instrucciones para gestionar las cookies en los navegadores más comunes:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Safari</a></li>
              <li><a href="https://support.microsoft.com/es-es/help/17442/windows-internet-explorer-delete-manage-cookies" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Internet Explorer</a></li>
              <li><a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Microsoft Edge</a></li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Cambios en nuestra política de cookies</h2>
            <p>
              Cualquier cambio que podamos hacer en nuestra política de cookies en el futuro se publicará en esta página. Consulta esta página con frecuencia para ver cualquier actualización o cambio en nuestra política de cookies.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Contacto</h2>
            <p>
              Si tienes alguna pregunta sobre nuestra política de cookies, no dudes en contactarnos a través de:
            </p>
            <p className="mt-2">
              Email: <a href="mailto:info@stockify.pro" className="text-blue-600 hover:underline">info@stockify.pro</a><br />

            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Cookies; 