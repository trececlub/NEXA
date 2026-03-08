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
      <a className="skip" href="#contenido">
        Saltar al contenido
      </a>
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
            <p className="section-sub">Cada servicio se adapta a tu etapa: desde lanzamiento hasta escalamiento.</p>
            <div className="grid-3">
              <article className="card">
                <h3>Diseño web</h3>
                <p>Web corporativa o comercial enfocada en conversión y credibilidad.</p>
                <ul>
                  <li>Diseño UI/UX con enfoque comercial.</li>
                  <li>Implementación responsive y optimización de velocidad.</li>
                  <li>SEO técnico, analytics y estructura de contenidos.</li>
                  <li>Publicación con SSL y dominio configurado.</li>
                </ul>
                <p>
                  <Link className="btn" href="/contacto?servicio=diseno-web">
                    Solicitar propuesta
                  </Link>
                </p>
              </article>

              <article className="card">
                <h3>Software a medida</h3>
                <p>Herramientas internas que reducen fricción operativa y escalan procesos.</p>
                <ul>
                  <li>Dashboards y paneles administrativos.</li>
                  <li>Integraciones con APIs externas.</li>
                  <li>Automatización de tareas y flujos.</li>
                  <li>Roadmap continuo de mejoras.</li>
                </ul>
                <p>
                  <Link className="btn" href="/contacto?servicio=software-a-medida">
                    Solicitar propuesta
                  </Link>
                </p>
              </article>

              <article className="card">
                <h3>Branding</h3>
                <p>Construcción de marca para posicionarte con identidad y coherencia visual.</p>
                <ul>
                  <li>Identidad visual y sistema gráfico.</li>
                  <li>Paleta, tipografía y tono de marca.</li>
                  <li>Brandbook y piezas base para redes.</li>
                  <li>Guías de uso para implementación.</li>
                </ul>
                <p>
                  <Link className="btn" href="/contacto?servicio=branding">
                    Solicitar propuesta
                  </Link>
                </p>
              </article>

              <article className="card">
                <h3>Landing+</h3>
                <p>Presencia web rápida en subdominio NEXA con sistema comercial integrado.</p>
                <ul>
                  <li>Landing principal profesional.</li>
                  <li>Sistema a elegir: ventas, reservas o menú digital.</li>
                  <li>Hosting administrado y SSL incluido.</li>
                  <li>Conexión a WhatsApp y analítica básica.</li>
                </ul>
                <p>
                  <Link className="btn" href="/contacto?servicio=landing-plus">
                    Solicitar Landing+
                  </Link>
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="proceso">
          <div className="container about">
            <div className="panel">
              <h2 className="section-title">Nuestro proceso</h2>
              <p>Te guiamos por un flujo claro de trabajo para evitar demoras y sorpresas.</p>
              <div className="bullets">
                <span className="chip">1. Diagnóstico</span>
                <span className="chip">2. Diseño</span>
                <span className="chip">3. Desarrollo</span>
                <span className="chip">4. Lanzamiento</span>
              </div>
            </div>
            <div className="panel">
              <h3>¿Necesitas algo híbrido?</h3>
              <p>
                Podemos crear una propuesta combinando branding, web y software según tus prioridades comerciales.
              </p>
              <p>
                <Link className="btn" href="/contacto">
                  Pedir propuesta combinada
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter locale="es" />
    </>
  );
}
