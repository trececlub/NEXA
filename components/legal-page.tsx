import type { ReactNode } from "react";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

type Locale = "es" | "en";

type LegalSection = {
  title: string;
  body: ReactNode;
};

type LegalPageProps = {
  locale: Locale;
  title: string;
  subtitle: string;
  updatedLabel: string;
  updatedDate: string;
  sections: LegalSection[];
};

export function LegalPage({ locale, title, subtitle, updatedLabel, updatedDate, sections }: LegalPageProps) {
  const isEs = locale === "es";

  return (
    <>
      <SiteHeader locale={locale} activePage="contact" ctaLabel={isEs ? "Enviar brief" : "Send brief"} />

      <main id={isEs ? "contenido" : "content"}>
        <section className="hero">
          <div className="container">
            <span className="kicker">Legal</span>
            <h1 className="title">{title}</h1>
            <p className="subtitle">{subtitle}</p>
            <p className="legal-meta">
              {updatedLabel}: <strong>{updatedDate}</strong>
            </p>
            <div className="hero-actions">
              <Link className="btn primary" href={isEs ? "/contacto" : "/en/contact"}>
                {isEs ? "Contactar NEXA" : "Contact NEXA"}
              </Link>
              <Link className="btn" href={isEs ? "/" : "/en"}>
                {isEs ? "Volver al inicio" : "Back to home"}
              </Link>
            </div>
          </div>
        </section>

        <section>
          <div className="container legal-stack">
            {sections.map((section) => (
              <article className="panel legal-panel" key={section.title}>
                <h2>{section.title}</h2>
                {section.body}
              </article>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter locale={locale} />
    </>
  );
}
