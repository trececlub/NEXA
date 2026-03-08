import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "NEXA | Terms and Conditions",
  description: "Términos y condiciones de uso del sitio web y contratación de servicios de NEXA.",
  alternates: {
    canonical: "/terms-and-conditions",
    languages: {
      es: "/terms-and-conditions",
      en: "/en/terms-and-conditions"
    }
  }
};

export default function TermsAndConditionsPage() {
  return (
    <LegalPage
      locale="es"
      title="Terms and Conditions"
      subtitle="Reglas de uso del sitio y lineamientos generales para servicios contratados con NEXA."
      updatedLabel="Última actualización"
      updatedDate="8 de marzo de 2026"
      sections={[
        {
          title: "1. Aceptación y alcance",
          body: (
            <>
              <p>
                Al navegar este sitio o enviarnos una solicitud aceptas estos términos. Si no estás de acuerdo, debes
                abstenerte de usar el sitio.
              </p>
              <p>
                Estos términos regulan el uso del sitio web y la etapa informativa previa a cualquier contratación.
              </p>
            </>
          )
        },
        {
          title: "2. Información comercial",
          body: (
            <>
              <p>
                Los textos, precios base y descripciones de servicios son referenciales y pueden variar según alcance,
                tiempos, integraciones y complejidad técnica.
              </p>
              <p>
                Toda propuesta formal enviada por NEXA especifica alcance, entregables, cronograma, valor final y
                condiciones de pago.
              </p>
            </>
          )
        },
        {
          title: "3. Propiedad intelectual",
          body: (
            <>
              <p>
                El contenido del sitio, marca, diseño y materiales de NEXA están protegidos por derechos de propiedad
                intelectual.
              </p>
              <p>
                No está permitido copiar, distribuir o reutilizar contenido sin autorización expresa por escrito.
              </p>
            </>
          )
        },
        {
          title: "4. Condiciones de proyecto y pagos",
          body: (
            <>
              <p>
                La ejecución de cualquier servicio requiere aceptación de propuesta y cumplimiento de condiciones de
                pago acordadas entre las partes.
              </p>
              <p>
                Cambios fuera de alcance inicial pueden presupuestarse como trabajo adicional y ajustarse en cronograma
                y costos.
              </p>
            </>
          )
        },
        {
          title: "5. Condiciones específicas de NEXA Metrics",
          body: (
            <>
              <p>
                NEXA Metrics es un servicio mensual por proyecto, con facturación anticipada y alcance definido en la
                propuesta comercial vigente.
              </p>
              <p>
                La oferta de entrada de <strong>$299.000 COP/mes</strong> aplica durante los primeros 3 meses para
                nuevos clientes. Después de ese periodo, el plan pasa a <strong>$349.000 COP/mes</strong>, salvo
                acuerdo distinto por escrito.
              </p>
              <p>
                El plan incluye implementación base, dashboard y una revisión mensual. Servicios fuera de alcance (por
                ejemplo: rediseños completos, desarrollos especiales o gestión de pauta) se cotizan por separado.
              </p>
            </>
          )
        },
        {
          title: "6. Responsabilidad y disponibilidad",
          body: (
            <>
              <p>
                NEXA no garantiza disponibilidad ininterrumpida del sitio ni ausencia absoluta de errores técnicos,
                aunque trabaja para mantener operación estable.
              </p>
              <p>
                Salvo lo exigido por ley, NEXA no responde por daños indirectos derivados del uso del sitio o de
                terceros externos enlazados.
              </p>
            </>
          )
        },
        {
          title: "7. Enlaces externos",
          body: (
            <p>
              Este sitio puede contener enlaces a plataformas de terceros. NEXA no controla ni asume responsabilidad
              por contenido, políticas o disponibilidad de esos sitios.
            </p>
          )
        },
        {
          title: "8. Ley aplicable",
          body: (
            <>
              <p>
                Estos términos se interpretan conforme a la legislación aplicable en Colombia, salvo pacto distinto en
                contrato particular.
              </p>
              <p>
                Cualquier controversia se intentará resolver primero por vía directa entre las partes.
              </p>
            </>
          )
        },
        {
          title: "9. Contacto legal",
          body: (
            <p>
              Para consultas sobre estos términos escribe a <strong>hola@nexa.studio</strong>.
            </p>
          )
        }
      ]}
    />
  );
}
