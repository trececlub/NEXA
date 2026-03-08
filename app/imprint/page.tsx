import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "NEXA | Imprint",
  description: "Información legal y de contacto de NEXA Creative Studio.",
  alternates: {
    canonical: "/imprint",
    languages: {
      es: "/imprint",
      en: "/en/imprint"
    }
  }
};

export default function ImprintPage() {
  return (
    <LegalPage
      locale="es"
      title="Imprint"
      subtitle="Datos legales y editoriales del sitio web de NEXA."
      updatedLabel="Última actualización"
      updatedDate="8 de marzo de 2026"
      sections={[
        {
          title: "1. Titular del sitio",
          body: (
            <>
              <p>
                <strong>NEXA Creative Studio</strong>
              </p>
              <p>Servicios de diseño web, branding, software y optimización comercial digital.</p>
            </>
          )
        },
        {
          title: "2. Contacto",
          body: (
            <ul className="legal-list">
              <li>Correo: hola@nexa.studio</li>
              <li>Sitio: nexacreativestudio.com</li>
              <li>País de operación: Colombia</li>
            </ul>
          )
        },
        {
          title: "3. Responsable editorial",
          body: (
            <p>
              Equipo NEXA Creative Studio. Para reportes de contenido o solicitudes legales usa el canal oficial:{" "}
              <strong>hola@nexa.studio</strong>.
            </p>
          )
        },
        {
          title: "4. Propiedad intelectual",
          body: (
            <p>
              El diseño, código, textos, marca y elementos gráficos de este sitio pertenecen a NEXA o a sus titulares
              correspondientes y se encuentran protegidos por normativa aplicable.
            </p>
          )
        },
        {
          title: "5. Descargo de responsabilidad",
          body: (
            <p>
              NEXA revisa el contenido de este sitio con regularidad, pero no garantiza ausencia total de errores u
              omisiones. Los enlaces de terceros se ofrecen solo como referencia.
            </p>
          )
        }
      ]}
    />
  );
}
