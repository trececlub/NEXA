import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "NEXA | Servicios",
  description:
    "Servicios de NEXA: branding, diseño web, software a medida y Landing+ para negocios que quieren escalar.",
  alternates: {
    canonical: "/servicios",
    languages: {
      es: "/servicios",
      en: "/en/services"
    }
  }
};

export default function ServicesPage() {
  return (
    <>
      <SiteHeader locale="es" activePage="services" />

      <main id="contenido">
        <section className="hero">
          <div className="container">
            <span className="kicker">Servicios NEXA</span>
            <h1 className="title">
              Soluciones digitales <span className="grad">listas para crecer</span>
            </h1>
            <p className="subtitle">
              Escoge un servicio o combina varios para construir un ecosistema digital sólido para tu negocio.
            </p>
            <div className="hero-actions">
              <Link className="btn primary" href="/contacto">
                Recibir propuesta
              </Link>
              <Link className="btn" href="https://wa.me/573159836331" target="_blank" rel="noopener noreferrer">
                Hablar por WhatsApp
              </Link>
            </div>
          </div>
        </section>

        <section id="servicios">
          <div className="container">
            <h2 className="section-title">Paquetes principales</h2>
            <p className="section-sub">Elige una ruta clara o combina servicios para construir un sistema comercial completo.</p>
            <div className="grid-3 services-grid">
              <article className="card service-card">
                <div className="service-card-head">
                  <span className="chip service-chip">Presencia comercial</span>
                  <h3>Diseño web</h3>
                  <p>Web corporativa o comercial enfocada en conversión y credibilidad.</p>
                  <p className="service-price">
                    <span>Desde</span>
                    <strong>$2.900.000 COP</strong>
                  </p>
                </div>
                <ul>
                  <li>Arquitectura UX/UI orientada a objetivos comerciales.</li>
                  <li>Implementación responsive y optimización de velocidad.</li>
                  <li>SEO técnico, analytics y estructura de contenidos.</li>
                  <li>Publicación con SSL y dominio configurado.</li>
                </ul>
                <p className="service-card-cta">
                  <Link className="btn primary" href="/contacto?servicio=diseno-web">
                    Solicitar propuesta
                  </Link>
                </p>
              </article>

              <article className="card service-card">
                <div className="service-card-head">
                  <span className="chip service-chip">Operación digital</span>
                  <h3>Software a medida</h3>
                  <p>Herramientas internas que reducen fricción operativa y escalan procesos.</p>
                  <p className="service-price">
                    <span>Desde</span>
                    <strong>$4.500.000 COP</strong>
                  </p>
                </div>
                <ul>
                  <li>Dashboards y paneles administrativos.</li>
                  <li>Integraciones con APIs y sistemas externos.</li>
                  <li>Automatización de tareas y flujos operativos.</li>
                  <li>Roadmap continuo con mejoras priorizadas.</li>
                </ul>
                <p className="service-card-cta">
                  <Link className="btn primary" href="/contacto?servicio=software-a-medida">
                    Solicitar propuesta
                  </Link>
                </p>
              </article>

              <article className="card service-card">
                <div className="service-card-head">
                  <span className="chip service-chip">Posicionamiento</span>
                  <h3>Branding</h3>
                  <p>Construcción de marca para posicionarte con identidad y coherencia visual.</p>
                  <p className="service-price">
                    <span>Desde</span>
                    <strong>$1.800.000 COP</strong>
                  </p>
                </div>
                <ul>
                  <li>Identidad visual y sistema gráfico.</li>
                  <li>Paleta, tipografía y tono de marca.</li>
                  <li>Brandbook y piezas base para redes.</li>
                  <li>Guías de uso para implementación.</li>
                </ul>
                <p className="service-card-cta">
                  <Link className="btn primary" href="/contacto?servicio=branding">
                    Solicitar propuesta
                  </Link>
                </p>
              </article>

              <article className="card service-card is-featured">
                <div className="service-card-head">
                  <span className="chip service-chip">Oferta destacada</span>
                  <span className="service-popular-badge">Más comprado</span>
                  <h3>Landing+</h3>
                  <p>Presencia web rápida con sistema comercial integrado para captar y convertir.</p>
                  <p className="service-price is-monthly">
                    <span>Mensual</span>
                    <strong>$790.000 COP/mes</strong>
                  </p>
                </div>
                <ul>
                  <li>Landing principal profesional.</li>
                  <li>Sistema comercial: ventas, reservas o menú digital.</li>
                  <li>Hosting administrado, SSL y soporte técnico.</li>
                  <li>
                    <strong>NEXA Metrics incluido:</strong> dashboard inicial y lectura mensual de rendimiento.
                  </li>
                </ul>
                <div className="service-card-cta">
                  <Link className="btn primary" href="/contacto?servicio=landing-plus">
                    Solicitar Landing+
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter locale="es" />
    </>
  );
}
