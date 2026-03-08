import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "NEXA | NEXA Metrics",
  description:
    "NEXA Metrics es un servicio mensual para monitorear y optimizar el rendimiento comercial de tu web, incluso si no fue creada por NEXA.",
  alternates: {
    canonical: "/nexa-metrics",
    languages: {
      es: "/nexa-metrics",
      en: "/en/nexa-metrics"
    }
  }
};

export default function NEXAMetricsPage() {
  return (
    <>
      <SiteHeader locale="es" activePage="metrics" />

      <main id="contenido">
        <section className="hero metrics-hero">
          <div className="container">
            <span className="kicker">NEXA Metrics</span>
            <h1 className="title">
              Tu web no necesita más intuición. <span className="grad">Necesita datos accionables.</span>
            </h1>
            <p className="subtitle">
              Servicio mensual para monitorear, entender y optimizar conversiones en sitios de NEXA y también en webs
              de terceros.
            </p>
            <div className="hero-actions">
              <Link className="btn primary" href="/contacto?servicio=nexa-metrics">
                Activar NEXA Metrics
              </Link>
              <Link className="btn" href="/contacto">
                Resolver dudas
              </Link>
            </div>
          </div>
        </section>

        <section>
          <div className="container metrics-simple-grid">
            <div>
              <h2 className="section-title">Qué obtienes con NEXA Metrics</h2>
              <p className="section-sub">
                Una lectura comercial clara para saber qué ajustar y dónde enfocar esfuerzo cada mes.
              </p>
              <ul className="metrics-simple-list">
                <li>Dashboard con KPIs por etapa del embudo.</li>
                <li>Tracking de eventos, conversiones y fuentes.</li>
                <li>Revisión mensual con acciones priorizadas.</li>
                <li>Optimización continua con foco en resultados.</li>
              </ul>
            </div>

            <article className="panel metrics-price-card">
              <span className="chip">Plan mensual</span>
              <h3>NEXA Metrics</h3>
              <p className="metrics-price">
                <strong>$790.000 COP</strong>
                <span>/mes</span>
              </p>
              <p>
                Incluye implementación inicial, panel activo y lectura ejecutiva mensual para mejorar decisiones
                comerciales.
              </p>
              <div className="hero-actions">
                <Link className="btn primary" href="/contacto?servicio=nexa-metrics">
                  Quiero NEXA Metrics
                </Link>
              </div>
            </article>
          </div>
        </section>

        <section>
          <div className="container">
            <h2 className="section-title">Cómo lo integramos</h2>
            <p className="section-sub">Onboarding rápido y sin fricción para empezar a medir desde el primer ciclo.</p>
            <div className="bullets">
              <span className="chip">1. Auditoría inicial</span>
              <span className="chip">2. Setup técnico</span>
              <span className="chip">3. Dashboard activo</span>
              <span className="chip">4. Plan de mejora</span>
            </div>
            <div className="hero-actions">
              <Link className="btn primary" href="/contacto?servicio=nexa-metrics">
                Solicitar propuesta
              </Link>
              <Link className="btn" href="/servicios">
                Ver Landing+
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter locale="es" />
    </>
  );
}
