import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function NotFound() {
  return (
    <>
      <a className="skip" href="#contenido">
        Saltar al contenido
      </a>
      <SiteHeader locale="es" activePage="home" />
      <main id="contenido">
        <section className="hero">
          <div className="container">
            <span className="kicker">404</span>
            <h1 className="title">Esta página no existe</h1>
            <p className="subtitle">Revisa la URL o vuelve al inicio para seguir navegando.</p>
            <div className="hero-actions">
              <Link className="btn primary" href="/">
                Volver al inicio
              </Link>
              <Link className="btn" href="/en">
                Go to English
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter locale="es" />
    </>
  );
}
