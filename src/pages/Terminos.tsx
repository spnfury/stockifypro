import React from 'react';
import Head from '../components/Head';

function Terminos() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <Head
        title="Términos y Condiciones - Stockify.pro"
        description="Términos y condiciones de uso de Stockify.pro. Conoce las reglas y normas que rigen nuestra plataforma."
        keywords="términos y condiciones, condiciones de uso, normativa, legal, servicio"
        ogTitle="Términos y Condiciones - Stockify.pro"
        ogDescription="Información sobre los términos y condiciones que rigen el uso de la plataforma Stockify.pro."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-[#0F172A]">Términos y Condiciones</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg mb-6">Última actualización: {new Date().toLocaleDateString('es-ES', {year: 'numeric', month: 'long', day: 'numeric'})}</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Introducción</h2>
            <p>
              Estos Términos y Condiciones ("Términos") rigen el uso de la plataforma web Stockify.pro ("la Plataforma") operada por Stockify.pro ("nosotros", "nuestro" o "la Empresa"). Al acceder o utilizar la Plataforma, aceptas estar legalmente obligado por estos Términos. Si no estás de acuerdo con estos Términos, no debes utilizar la Plataforma.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Definiciones</h2>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li><strong>Usuario:</strong> Cualquier persona que acceda o utilice la Plataforma.</li>
              <li><strong>Cuenta:</strong> Registro personalizado de acceso a la Plataforma.</li>
              <li><strong>Servicios:</strong> Funcionalidades y prestaciones ofrecidas a través de la Plataforma.</li>
              <li><strong>Contenido:</strong> Cualquier información, texto, gráficos, fotos, videos u otros materiales que se carguen o muestren en la Plataforma.</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Registro y cuentas de usuario</h2>
            <p>
              Para acceder a determinadas funciones de la Plataforma, debes registrarte y crear una cuenta. Al hacerlo, aceptas proporcionar información precisa, actual y completa, y actualizarla cuando sea necesario. Eres responsable de mantener la confidencialidad de tu contraseña y de todas las actividades que ocurran bajo tu cuenta. Debes notificarnos inmediatamente si sospechas cualquier uso no autorizado de tu cuenta o cualquier otra brecha de seguridad.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Uso de la plataforma</h2>
            <p>
              Al utilizar nuestra Plataforma, aceptas:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>No violar ninguna ley, reglamento o normativa aplicable.</li>
              <li>No infringir los derechos de propiedad intelectual u otros derechos de terceros.</li>
              <li>No transmitir ningún virus, malware o código dañino.</li>
              <li>No interferir con el funcionamiento de la Plataforma o servidores.</li>
              <li>No recopilar datos personales de otros usuarios sin su consentimiento.</li>
              <li>No utilizar la Plataforma para fines ilegales, fraudulentos o no autorizados.</li>
            </ul>
            <p className="mt-4">
              Nos reservamos el derecho de suspender o terminar tu acceso a la Plataforma si infringes estos Términos o si consideramos que tu comportamiento puede causar daño a nosotros, a la Plataforma o a otros usuarios.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Servicios y pagos</h2>
            <p>
              La Plataforma ofrece diversos planes de servicio con diferentes funcionalidades y precios. Los detalles de cada plan están disponibles en nuestra sección de precios. Al suscribirte a un plan de pago, aceptas pagar todas las tarifas aplicables según lo establecido. Las tarifas pueden estar sujetas a cambios, que serán notificados con antelación.
            </p>
            <p className="mt-4">
              El pago de las tarifas se realizará mediante los métodos de pago aceptados por nosotros. Autorizas a la Empresa a cargar el método de pago designado por todas las tarifas incurridas. Las tarifas no son reembolsables, excepto según lo exija la ley aplicable o se indique expresamente en estos Términos.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Propiedad intelectual</h2>
            <p>
              La Plataforma y todo su contenido, características y funcionalidades son propiedad de la Empresa, sus licenciantes u otros proveedores y están protegidos por leyes de derechos de autor, marcas registradas, patentes, secretos comerciales y otras leyes de propiedad intelectual.
            </p>
            <p className="mt-4">
              No debes reproducir, distribuir, modificar, crear obras derivadas, exhibir públicamente, ejecutar públicamente, republicar, descargar, almacenar o transmitir cualquier material de nuestra Plataforma, excepto según lo permitido por estos Términos o con nuestro consentimiento previo por escrito.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Limitación de responsabilidad</h2>
            <p>
              En la medida permitida por la ley aplicable, la Empresa no será responsable por daños indirectos, incidentales, especiales, consecuentes o punitivos, o cualquier pérdida de beneficios o ingresos, ya sea incurrida directa o indirectamente, o cualquier pérdida de datos, uso, buena voluntad, u otras pérdidas intangibles, resultantes de:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Tu acceso o uso o incapacidad para acceder o usar la Plataforma.</li>
              <li>Cualquier conducta o contenido de terceros en la Plataforma.</li>
              <li>Acceso no autorizado, uso o alteración de tus transmisiones o contenido.</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Cambios en los términos</h2>
            <p>
              Nos reservamos el derecho de modificar estos Términos en cualquier momento. Si hacemos cambios, actualizaremos la fecha de "última actualización" al principio de estos Términos. Si los cambios son sustanciales, proporcionaremos un aviso prominente o obtendremos tu consentimiento, según lo requiera la ley aplicable. Tu uso continuado de la Plataforma después de que los cambios entren en vigor constituye tu aceptación de los Términos revisados.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Ley aplicable y resolución de disputas</h2>
            <p>
              Estos Términos se regirán e interpretarán de acuerdo con las leyes de España, sin dar efecto a cualquier principio de conflictos de leyes. Cualquier disputa legal que surja de estos Términos o tu uso de la Plataforma estará sujeta a la jurisdicción exclusiva de los tribunales de Madrid, España.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Contacto</h2>
            <p>
              Si tienes alguna pregunta sobre estos Términos, contáctanos en:
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

export default Terminos; 