"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { PillNav } from "@/components/pill-nav";

type Locale = "es" | "en";
type ActivePage = "home" | "services" | "metrics" | "contact";

type SiteHeaderProps = {
  locale: Locale;
  activePage: ActivePage;
  ctaLabel?: string;
};

const routes = {
  es: {
    home: "/",
    services: "/servicios",
    metrics: "/nexa-metrics",
    contact: "/contacto"
  },
  en: {
    home: "/en",
    services: "/en/services",
    metrics: "/en/nexa-metrics",
    contact: "/en/contact"
  }
} as const;

const labels = {
  es: {
    home: "Inicio",
    services: "Servicios",
    metrics: "Metrics",
    contact: "Contacto",
    cta: "Empezar proyecto",
    lang: "Seleccionar idioma",
    homeAria: "NEXA inicio"
  },
  en: {
    home: "Home",
    services: "Services",
    metrics: "Metrics",
    contact: "Contact",
    cta: "Start project",
    lang: "Language selector",
    homeAria: "NEXA home"
  }
} as const;

export function SiteHeader({ locale, activePage, ctaLabel }: SiteHeaderProps) {
  const router = useRouter();
  const t = labels[locale];
  const currentRoutes = routes[locale];

  const targetLocale: Locale = locale === "es" ? "en" : "es";
  const targetHref = routes[targetLocale][activePage];
  const activeHref = currentRoutes[activePage];

  const renderLanguageSwitch = (id: string) => (
    <label className="switch-button" htmlFor={id} title={t.lang}>
      <div className="switch-outer">
        <input
          id={id}
          type="checkbox"
          checked={locale === "en"}
          aria-label={t.lang}
          onChange={() => {
            router.push(targetHref);
          }}
        />
        <div className="button">
          <span className="switch-text switch-text-es">ES</span>
          <span className="switch-text switch-text-en">EN</span>
          <span className="button-toggle" />
        </div>
      </div>
    </label>
  );

  return (
    <header className="pill-header">
      <div className="container pill-header-row">
        <PillNav
          items={[
            { label: t.home, href: currentRoutes.home },
            { label: t.services, href: currentRoutes.services },
            { label: t.metrics, href: currentRoutes.metrics },
            { label: t.contact, href: currentRoutes.contact }
          ]}
          homeHref={currentRoutes.home}
          homeAriaLabel={t.homeAria}
          activeHref={activeHref}
          mobileExtra={
            <div className="lang-switch pill-lang-mobile" aria-label={t.lang}>
              {renderLanguageSwitch(`lang-switch-mobile-${activePage}`)}
            </div>
          }
        />

        <div className="pill-header-actions">
          <Link className="btn primary pill-header-cta" href={currentRoutes.contact}>
            {ctaLabel ?? t.cta}
          </Link>
          <div className="lang-switch pill-lang-desktop" aria-label={t.lang}>
            {renderLanguageSwitch(`lang-switch-desktop-${activePage}`)}
          </div>
        </div>
      </div>
    </header>
  );
}
