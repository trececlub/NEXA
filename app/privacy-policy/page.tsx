import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "NEXA | Privacy Policy",
  description: "Política de privacidad de NEXA Creative Studio para el uso del sitio web y formularios de contacto.",
  alternates: {
    canonical: "/privacy-policy",
    languages: {
      es: "/privacy-policy",
      en: "/en/privacy-policy"
    }
  }
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      locale="es"
      title="Privacy Policy"
      subtitle="Así tratamos tus datos cuando navegas, nos escribes o solicitas una propuesta."
      updatedLabel="Última actualización"
      updatedDate="8 de marzo de 2026"
      sections={[
        {
          title: "1. Responsable del tratamiento",
          body: (
            <>
              <p>
                Este sitio es operado por <strong>NEXA Creative Studio</strong>. Para temas de privacidad puedes
                escribir a <strong>hola@nexa.studio</strong>.
              </p>
              <p>
                NEXA actúa como responsable del tratamiento de los datos que recibimos a través de formularios, correo
                y canales de contacto del sitio.
              </p>
            </>
          )
        },
        {
          title: "2. Datos que recopilamos",
          body: (
            <>
              <p>Podemos recopilar: nombre, correo, teléfono, empresa, tipo de servicio de interés y mensaje.</p>
              <p>
                También se pueden generar datos técnicos de navegación como IP, tipo de dispositivo, navegador y
                eventos de uso para análisis de rendimiento.
              </p>
            </>
          )
        },
        {
          title: "3. Finalidad del uso de datos",
          body: (
            <>
              <p>Usamos tus datos para:</p>
              <ul className="legal-list">
                <li>Responder solicitudes comerciales y preparar propuestas.</li>
                <li>Gestionar la relación precontractual y contractual cuando aplique.</li>
                <li>Mejorar el desempeño del sitio, experiencia de usuario y seguridad.</li>
              </ul>
            </>
          )
        },
        {
          title: "4. Conservación y seguridad",
          body: (
            <>
              <p>
                Conservamos la información solo durante el tiempo necesario para cumplir la finalidad del tratamiento o
                mientras exista una obligación legal aplicable.
              </p>
              <p>
                Aplicamos medidas razonables de seguridad técnica y organizativa para proteger la confidencialidad e
                integridad de la información.
              </p>
            </>
          )
        },
        {
          title: "5. Herramientas y terceros",
          body: (
            <>
              <p>
                Podemos usar proveedores de infraestructura, alojamiento, analítica y formularios para operar el sitio.
                Estos terceros procesan datos según sus propias políticas y términos.
              </p>
              <p>
                NEXA procura trabajar con servicios que ofrezcan estándares adecuados de seguridad y cumplimiento.
              </p>
            </>
          )
        },
        {
          title: "6. Tus derechos",
          body: (
            <>
              <p>
                Puedes solicitar acceso, actualización, corrección o eliminación de tus datos personales escribiendo a{" "}
                <strong>hola@nexa.studio</strong>.
              </p>
              <p>
                También puedes pedir limitar el uso comercial de tus datos o retirar tu consentimiento cuando
                corresponda.
              </p>
            </>
          )
        },
        {
          title: "7. Cookies y seguimiento",
          body: (
            <>
              <p>
                El sitio puede usar cookies técnicas y de medición para recordar preferencias, analizar tráfico y
                optimizar rendimiento.
              </p>
              <p>
                Puedes gestionar o bloquear cookies desde la configuración de tu navegador, aunque algunas funciones
                pueden verse afectadas.
              </p>
            </>
          )
        },
        {
          title: "8. Cambios de esta política",
          body: (
            <p>
              Podemos actualizar esta política para reflejar cambios legales, técnicos o de servicio. La versión
              vigente será siempre la publicada en esta página.
            </p>
          )
        }
      ]}
    />
  );
}
