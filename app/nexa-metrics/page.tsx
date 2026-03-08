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
        <section className="hero">
          <div className="container">
            <span className="kicker">NEXA Metrics</span>
            <h1 className="title">
              Tu web no necesita más intuición. <span className="grad">Necesita datos accionables.</span>
            </h1>
            <p className="subtitle">
              Servicio mensual para monitorear, entender y optimizar conversiones. Funciona para webs creadas por NEXA
              y también para sitios existentes de terceros.
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
          <div className="container about">
            <article className="panel">
              <h2 className="section-title">Qué es NEXA Metrics</h2>
              <p>
                Es un panel web con indicadores comerciales clave para saber qué está funcionando y qué está frenando
                tus resultados.
              </p>
              <div className="bullets">
                <span className="chip">Tráfico y fuentes</span>
                <span className="chip">Leads y conversiones</span>
                <span className="chip">Rendimiento técnico</span>
                <span className="chip">Alertas de oportunidad</span>
              </div>
            </article>

            <article className="panel">
              <h3>Para quién es</h3>
              <ul>
                <li>Empresas con web activa que quieren mejorar conversión.</li>
                <li>Equipos comerciales que necesitan visibilidad real del embudo.</li>
                <li>Marcas que ya invierten en tráfico y quieren medir retorno.</li>
                <li>Clientes Landing+ y clientes con web externa.</li>
              </ul>
            </article>
          </div>
        </section>

        <section id="incluye">
          <div className="container">
            <h2 className="section-title">Qué incluye el servicio mensual</h2>
            <p className="section-sub">No solo mostramos números: traducimos datos en decisiones concretas.</p>
            <div className="grid-3">
              <article className="card">
                <h3>Dashboard por etapas</h3>
                <p>KPIs por etapa del embudo para identificar rápidamente dónde se pierde oportunidad.</p>
              </article>

              <article className="card">
                <h3>Implementación de tracking</h3>
                <p>Eventos clave, conversiones y fuentes conectadas para obtener lectura comercial completa.</p>
              </article>

              <article className="card">
                <h3>Lectura mensual ejecutiva</h3>
                <p>Resumen accionable con hallazgos, cuellos de botella y prioridades para el siguiente ciclo.</p>
              </article>

              <article className="card">
                <h3>Optimización continua</h3>
                <p>Recomendaciones iterativas para mejorar claridad, flujo de usuario y rendimiento del sitio.</p>
              </article>
            </div>
          </div>
        </section>

        <section>
          <div className="container about">
            <article className="panel">
              <h2 className="section-title">Cómo lo incluimos en tu web</h2>
              <p>Onboarding simple para no interrumpir operación:</p>
              <div className="bullets">
                <span className="chip">1. Auditoría inicial</span>
                <span className="chip">2. Configuración técnica</span>
                <span className="chip">3. Dashboard activo</span>
                <span className="chip">4. Primer plan de mejora</span>
              </div>
            </article>

            <article className="panel">
              <h3>Modelo comercial</h3>
              <p>
                En <strong>Landing+</strong> puede incluirse dentro del alcance. En otros casos, se activa como
                servicio mensual independiente para sitios existentes.
              </p>
              <p>
                <Link className="btn primary" href="/contacto?servicio=nexa-metrics">
                  Quiero propuesta de NEXA Metrics
                </Link>
              </p>
            </article>
          </div>
        </section>
      </main>

      <SiteFooter locale="es" />
    </>
  );
}
