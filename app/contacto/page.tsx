import type { Metadata } from "next";
import Link from "next/link";
import { ContactSection } from "@/components/contact-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "NEXA | Contacto",
  description: "Habla con NEXA y recibe una propuesta de diseño web, software o branding para tu negocio.",
  alternates: {
    canonical: "/contacto",
    languages: {
      es: "/contacto",
      en: "/en/contact"
    }
  }
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader locale="es" activePage="contact" ctaLabel="Enviar brief" />

      <main id="contenido">
        <section className="hero">
          <div className="container">
            <span className="kicker">Contacto</span>
            <h1 className="title">
              Cuéntanos tu proyecto y te devolvemos una <span className="grad">ruta clara</span>
            </h1>
            <p className="subtitle">
              Si prefieres ir directo, también puedes escribirnos por WhatsApp y enviarnos tu idea en menos de un
              minuto.
            </p>
            <div className="hero-actions">
              <Link className="btn primary" href="#formulario">
                Completar formulario
              </Link>
              <Link className="btn" href="https://wa.me/573159836331" target="_blank" rel="noopener noreferrer">
                Escribir por WhatsApp
              </Link>
            </div>
          </div>
        </section>

        <ContactSection locale="es" sectionId="formulario" />
      </main>

      <SiteFooter locale="es" />
    </>
  );
}
