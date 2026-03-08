import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "NEXA | Agencia de diseño y desarrollo web",
  description:
    "NEXA diseña y construye sitios web y software para negocios que quieren crecer con una presencia digital premium.",
  alternates: {
    canonical: "/",
    languages: {
      es: "/",
      en: "/en"
    }
  }
};

const gallery = [
  { src: "/img/proyecto-01.jpg", alt: "Proyecto de diseño web NEXA", label: "Web corporativa" },
  { src: "/img/proyecto-02.jpg", alt: "Proyecto de identidad visual NEXA", label: "Branding" },
  { src: "/img/proyecto-03.jpg", alt: "Proyecto digital NEXA", label: "UX/UI" },
  { src: "/img/proyecto-04.jpg", alt: "Proyecto comercial NEXA", label: "E-commerce" }
];

export default function HomePage() {
  return (
    <>
      <SiteHeader locale="es" activePage="home" />

      <main id="contenido">
        <section className="hero">
          <div className="container">
            <span className="kicker">Estudio digital premium</span>
            <h1 className="title">
              Webs y software que convierten. <span className="grad">Diseñado para vender.</span>
            </h1>
            <p className="subtitle">
              Creamos experiencias de alto impacto para marcas y negocios en crecimiento: diseño visual,
              desarrollo web y soluciones a medida en un solo equipo.
            </p>
            <div className="hero-actions">
              <Link className="btn primary" href="/contacto">
                Solicitar propuesta
              </Link>
              <Link className="btn" href="/servicios">
                Ver servicios
              </Link>
            </div>
            <div className="stats-strip" aria-label="Métricas de valor">
              <div className="metric">
                <strong>2-4 semanas</strong>
                <span>Lanzamiento promedio</span>
              </div>
              <div className="metric">
                <strong>100% responsive</strong>
                <span>Experiencia móvil y desktop</span>
              </div>
              <div className="metric">
                <strong>Soporte real</strong>
                <span>Acompañamiento post-entrega</span>
              </div>
            </div>
          </div>
        </section>

        <section id="quienes-somos">
          <div className="container about">
            <div className="panel">
              <h2 className="section-title">Construimos presencia digital de alto nivel</h2>
              <p>
                En NEXA combinamos estrategia, estética y tecnología para crear marcas sólidas y productos
                digitales que generan resultados reales. Nuestro enfoque es práctico: menos relleno, más impacto.
              </p>
              <div className="bullets">
                <span className="chip">Estrategia + ejecución</span>
                <span className="chip">Diseño moderno y claro</span>
                <span className="chip">Optimización SEO técnica</span>
                <span className="chip">Performance real</span>
              </div>
            </div>
            <div className="panel">
              <h3>Lo que obtienes al trabajar con NEXA</h3>
              <p>
                Un proceso ordenado, entregables listos para producción y una experiencia de colaboración
                transparente. Desde la idea hasta la publicación, tú te enfocas en vender, nosotros en construir.
              </p>
              <p>
                <Link className="btn" href="/contacto">
                  Agenda una llamada
                </Link>
              </p>
            </div>
          </div>
        </section>

        <section id="servicios-preview">
          <div className="container">
            <h2 className="section-title">Servicios principales</h2>
            <p className="section-sub">Modular, escalable y orientado a negocio.</p>
            <div className="grid-3">
              <article className="card">
                <h3>Branding</h3>
                <p>
                  Identidad visual, sistema gráfico y lineamientos para que tu marca se vea profesional en todos
                  los canales.
                </p>
                <p>
                  <Link className="btn" href="/contacto?servicio=branding">
                    Cotizar branding
                  </Link>
                </p>
              </article>
              <article className="card">
                <h3>Diseño y desarrollo web</h3>
                <p>
                  Sitios rápidos y elegantes con arquitectura clara, enfoque en conversión y base SEO técnica.
                </p>
                <p>
                  <Link className="btn" href="/contacto?servicio=diseno-web">
                    Cotizar web
                  </Link>
                </p>
              </article>
              <article className="card">
                <h3>Software a medida</h3>
                <p>
                  Herramientas internas, paneles y automatizaciones para operar mejor y crecer con control.
                </p>
                <p>
                  <Link className="btn" href="/contacto?servicio=software-a-medida">
                    Cotizar software
                  </Link>
                </p>
              </article>
              <article className="card">
                <h3>Landing+</h3>
                <p>
                  Página de inicio en subdominio NEXA con sistema comercial integrado para ventas, reservas o menú
                  digital.
                </p>
                <p>
                  <Link className="btn" href="/contacto?servicio=landing-plus">
                    Cotizar Landing+
                  </Link>
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="galeria">
          <div className="container">
            <h2 className="section-title">Trabajos recientes</h2>
            <p className="section-sub">Algunas referencias visuales de proyectos ejecutados.</p>
            <div className="gallery">
              {gallery.map((item) => (
                <figure className="tile" key={item.src}>
                  <Image src={item.src} alt={item.alt} fill sizes="(max-width: 860px) 100vw, 50vw" />
                  <figcaption className="label">{item.label}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter locale="es" />
    </>
  );
}
