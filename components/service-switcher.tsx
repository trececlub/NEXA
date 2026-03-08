"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Locale = "es" | "en";

type Service = {
  key: string;
  name: string;
  outcome: string;
  timeline: string;
  focus: string;
  href: string;
  cta: string;
  deliverables: string[];
};

const servicesByLocale: Record<Locale, Service[]> = {
  es: [
    {
      key: "web",
      name: "Web de conversión",
      outcome: "Transforma visitas en oportunidades reales.",
      timeline: "2-4 semanas",
      focus: "Landing pages, arquitectura de contenido, SEO técnico y velocidad.",
      href: "/contacto?servicio=diseno-web",
      cta: "Quiero esta web",
      deliverables: [
        "UX enfocada en intención comercial",
        "Diseño visual premium y sistema reusable",
        "Desarrollo Next.js optimizado",
        "Medición con eventos y analítica base"
      ]
    },
    {
      key: "branding",
      name: "Branding estratégico",
      outcome: "Te hace reconocible y coherente en todos tus canales.",
      timeline: "10-18 días",
      focus: "Identidad visual, tono verbal y lineamientos para crecer con consistencia.",
      href: "/contacto?servicio=branding",
      cta: "Quiero mi branding",
      deliverables: [
        "Logo y sistema gráfico escalable",
        "Paleta, tipografías y reglas de uso",
        "Manual de marca práctico",
        "Templates iniciales para redes"
      ]
    },
    {
      key: "software",
      name: "Software a medida",
      outcome: "Reduce fricción operativa y acelera decisiones.",
      timeline: "4-8 semanas",
      focus: "Dashboards, automatizaciones e integraciones para procesos críticos.",
      href: "/contacto?servicio=software-a-medida",
      cta: "Quiero automatizar",
      deliverables: [
        "Mapeo de flujo y arquitectura funcional",
        "Paneles administrativos y módulos internos",
        "Integraciones con APIs y herramientas externas",
        "Roadmap de mejoras y soporte"
      ]
    },
    {
      key: "landing-plus",
      name: "Landing+",
      outcome: "Lanzas rápido con enfoque directo en ventas.",
      timeline: "5-10 días",
      focus: "Página comercial lista para capturar leads, reservas o pedidos.",
      href: "/contacto?servicio=landing-plus",
      cta: "Quiero Landing+",
      deliverables: [
        "Landing optimizada para conversión",
        "Conexión directa a WhatsApp o formulario",
        "Hosting administrado y SSL",
        "Base analítica para decisiones"
      ]
    }
  ],
  en: [
    {
      key: "web",
      name: "Conversion website",
      outcome: "Turns traffic into qualified sales opportunities.",
      timeline: "2-4 weeks",
      focus: "Landing funnels, content architecture, technical SEO and speed.",
      href: "/en/contact?service=web-design",
      cta: "I want this website",
      deliverables: [
        "Intent-driven UX structure",
        "Premium visual system",
        "Optimized Next.js implementation",
        "Event tracking and analytics baseline"
      ]
    },
    {
      key: "branding",
      name: "Strategic branding",
      outcome: "Makes your brand recognizable and consistent.",
      timeline: "10-18 days",
      focus: "Identity system, visual language and practical usage standards.",
      href: "/en/contact?service=branding",
      cta: "I want branding",
      deliverables: [
        "Scalable logo and visual identity",
        "Color, type and application rules",
        "Practical brand guideline",
        "Starter social templates"
      ]
    },
    {
      key: "software",
      name: "Custom software",
      outcome: "Removes operational bottlenecks and speeds decision-making.",
      timeline: "4-8 weeks",
      focus: "Dashboards, automations and integrations for critical operations.",
      href: "/en/contact?service=custom-software",
      cta: "I want automation",
      deliverables: [
        "Workflow mapping and product architecture",
        "Admin dashboards and internal modules",
        "API integrations",
        "Improvement roadmap and support"
      ]
    },
    {
      key: "landing-plus",
      name: "Landing+",
      outcome: "Launch fast with direct sales intent.",
      timeline: "5-10 days",
      focus: "A focused page to capture leads, bookings or orders.",
      href: "/en/contact?service=landing-plus",
      cta: "I want Landing+",
      deliverables: [
        "High-converting page layout",
        "WhatsApp or form connection",
        "Managed hosting and SSL",
        "Analytics-ready setup"
      ]
    }
  ]
};

const labelsByLocale: Record<Locale, { title: string; subtitle: string; badge: string }> = {
  es: {
    title: "Elige el sistema que más impacto te dará",
    subtitle: "No todos los negocios necesitan lo mismo. Selecciona un servicio y mira exactamente qué recibes.",
    badge: "Selector de servicios"
  },
  en: {
    title: "Choose the system that creates the highest impact",
    subtitle: "Not every business needs the same stack. Pick a service and see the exact delivery scope.",
    badge: "Service selector"
  }
};

export function ServiceSwitcher({ locale }: { locale: Locale }) {
  const services = servicesByLocale[locale];
  const [active, setActive] = useState(services[0].key);

  const selected = useMemo(() => services.find((item) => item.key === active) ?? services[0], [active, services]);
  const labels = labelsByLocale[locale];

  return (
    <section className="hp-service-switcher" id={locale === "es" ? "selector-servicios" : "service-selector"}>
      <div className="container">
        <span className="hp-badge">{labels.badge}</span>
        <h2 className="hp-section-title">{labels.title}</h2>
        <p className="hp-section-sub">{labels.subtitle}</p>

        <div className="hp-service-tabs" role="tablist" aria-label={labels.title}>
          {services.map((item) => (
            <button
              key={item.key}
              type="button"
              role="tab"
              aria-selected={selected.key === item.key}
              className={`hp-service-tab ${selected.key === item.key ? "is-active" : ""}`}
              onClick={() => setActive(item.key)}
            >
              {item.name}
            </button>
          ))}
        </div>

        <article className="hp-service-panel" role="tabpanel" aria-label={selected.name}>
          <div className="hp-service-main">
            <h3>{selected.name}</h3>
            <p className="hp-service-outcome">{selected.outcome}</p>
            <p className="hp-service-focus">{selected.focus}</p>
            <div className="hp-service-meta">
              <span>{locale === "es" ? "Tiempo estimado" : "Estimated timeline"}</span>
              <strong>{selected.timeline}</strong>
            </div>
            <Link className="btn primary" href={selected.href}>
              {selected.cta}
            </Link>
          </div>

          <ul className="hp-deliverables">
            {selected.deliverables.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
