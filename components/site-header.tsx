"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Locale = "es" | "en";
type ActivePage = "home" | "services" | "contact";

type SiteHeaderProps = {
  locale: Locale;
  activePage: ActivePage;
  ctaLabel?: string;
};

const routes = {
  es: {
    home: "/",
    services: "/servicios",
    contact: "/contacto"
  },
  en: {
    home: "/en",
    services: "/en/services",
    contact: "/en/contact"
  }
} as const;

const labels = {
  es: {
    home: "Inicio",
    services: "Servicios",
    contact: "Contacto",
    menu: "Menú",
    nav: "Principal",
    mobileNav: "Navegación móvil",
    cta: "Empezar proyecto",
    lang: "Seleccionar idioma",
    homeAria: "NEXA inicio"
  },
  en: {
    home: "Home",
    services: "Services",
    contact: "Contact",
    menu: "Menu",
    nav: "Main",
    mobileNav: "Mobile navigation",
    cta: "Start project",
    lang: "Language selector",
    homeAria: "NEXA home"
  }
} as const;

export function SiteHeader({ locale, activePage, ctaLabel }: SiteHeaderProps) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const t = labels[locale];
  const currentRoutes = routes[locale];

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  const closeMenu = () => setIsMobileOpen(false);

  return (
    <header>
      <div className="container nav">
        <Link className="brand" href={currentRoutes.home} aria-label={t.homeAria}>
          <div className="logo" aria-hidden="true" />
          <div className="wordmark">
            NE<span className="grad">XA</span>
          </div>
        </Link>

        <nav aria-label={t.nav}>
          <ul>
            <li>
              <Link className={activePage === "home" ? "active" : ""} href={currentRoutes.home}>
                {t.home}
              </Link>
            </li>
            <li>
              <Link className={activePage === "services" ? "active" : ""} href={currentRoutes.services}>
                {t.services}
              </Link>
            </li>
            <li>
              <Link className={activePage === "contact" ? "active" : ""} href={currentRoutes.contact}>
                {t.contact}
              </Link>
            </li>
          </ul>
        </nav>

        <div className="cta">
          <Link className="btn primary" href={currentRoutes.contact}>
            {ctaLabel ?? t.cta}
          </Link>
          <button
            type="button"
            className="btn menu-btn"
            id="menuBtn"
            aria-expanded={isMobileOpen}
            aria-controls="mobileNav"
            onClick={() => setIsMobileOpen((prev) => !prev)}
          >
            {t.menu}
          </button>
          <div className="lang-switch" aria-label={t.lang}>
            <Link className={`lang-btn ${locale === "es" ? "is-active" : ""}`} href={routes.es[activePage]}>
              ES
            </Link>
            <Link className={`lang-btn ${locale === "en" ? "is-active" : ""}`} href={routes.en[activePage]}>
              EN
            </Link>
          </div>
        </div>
      </div>

      <div className={`mobile-nav ${isMobileOpen ? "is-open" : ""}`} id="mobileNav" role="dialog" aria-label={t.mobileNav}>
        <Link href={currentRoutes.home} onClick={closeMenu}>
          {t.home}
        </Link>
        <Link href={currentRoutes.services} onClick={closeMenu}>
          {t.services}
        </Link>
        <Link href={currentRoutes.contact} onClick={closeMenu}>
          {t.contact}
        </Link>
        <div className="lang-switch lang-mobile" aria-label={t.lang}>
          <Link className={`lang-btn ${locale === "es" ? "is-active" : ""}`} href={routes.es[activePage]} onClick={closeMenu}>
            ES
          </Link>
          <Link className={`lang-btn ${locale === "en" ? "is-active" : ""}`} href={routes.en[activePage]} onClick={closeMenu}>
            EN
          </Link>
        </div>
      </div>
    </header>
  );
}
