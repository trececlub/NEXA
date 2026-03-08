import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Step, Stepper } from "@/components/process-stepper";
import { ServiceSwitcher } from "@/components/service-switcher";

type Locale = "es" | "en";

type Copy = {
  mainId: string;
  activePage: "home";
  hero: {
    badge: string;
    title: string;
    grad: string;
    subtitle: string;
    primary: { label: string; href: string };
    secondary: { label: string; href: string };
    trust: string[];
    highlights: { value: string; label: string }[];
  };
  stage: {
    sprintTitle: string;
    sprint: string[];
    snapshotTitle: string;
    snapshot: { label: string; value: string }[];
  };
  value: {
    badge: string;
    title: string;
    sub: string;
    pillars: { title: string; text: string }[];
    compare: {
      beforeTitle: string;
      before: string[];
      afterTitle: string;
      after: string[];
    };
    metrics: {
      chip: string;
      title: string;
      whatTitle: string;
      whatText: string;
      includesTitle: string;
      includes: string[];
      howTitle: string;
      howText: string;
      cta: { label: string; href: string };
    };
  };
  process: {
    badge: string;
    title: string;
    sub: string;
    steps: { title: string; text: string }[];
    controls: {
      back: string;
      next: string;
      complete: string;
      completedTitle: string;
      completedText: string;
      completedActionText: string;
      completedActionHref: string;
    };
    quote: { text: string; author: string; role: string };
  };
  showcase: {
    badge: string;
    title: string;
    sub: string;
    stages: { phase: string; title: string; text: string; deliverable: string }[];
    cta: { label: string; href: string };
  };
  finalCta: {
    title: string;
    text: string;
    primary: { label: string; href: string };
    secondary: { label: string; href: string };
    floating: { label: string; href: string };
  };
};

const copyByLocale: Record<Locale, Copy> = {
  es: {
    mainId: "contenido",
    activePage: "home",
    hero: {
      badge: "NEXA Growth Studio",
      title: "No necesitas otra web bonita.",
      grad: "Necesitas una máquina de conversión.",
      subtitle:
        "Diseñamos y construimos experiencias digitales premium para negocios que quieren cerrar más ventas, optimizar operación y escalar su presencia con claridad.",
      primary: { label: "Quiero propuesta estratégica", href: "/contacto" },
      secondary: { label: "Ver servicios", href: "/servicios" },
      trust: ["Estrategia + ejecución", "UX orientada a conversión", "Entrega real en semanas"],
      highlights: [
        { value: "+38%", label: "promedio en leads calificados" },
        { value: "30 días", label: "para lanzar versión comercial" },
        { value: "4.9/5", label: "satisfacción de clientes" }
      ]
    },
    stage: {
      sprintTitle: "Sprint de 30 días",
      sprint: [
        "Semana 1: diagnóstico de oferta y arquitectura de conversión.",
        "Semana 2: diseño visual + copy comercial.",
        "Semana 3: desarrollo, performance y tracking.",
        "Semana 4: QA, publicación y plan de optimización."
      ],
      snapshotTitle: "Snapshot de impacto",
      snapshot: [
        { label: "Tiempo promedio de carga", value: "< 1.8s" },
        { label: "Claridad de propuesta", value: "9/10" },
        { label: "Flujo comercial", value: "Listo" }
      ]
    },
    value: {
      badge: "De sitio web a activo comercial",
      title: "Diseñamos para que el usuario entienda, confíe y actúe",
      sub: "Dirección creativa + estructura comercial para convertir mejor.",
      pillars: [
        {
          title: "Narrativa visual estratégica",
          text: "Cada bloque guía de interés inicial a acción."
        },
        {
          title: "Arquitectura enfocada en cierre",
          text: "Ordenamos el contenido por intención de compra."
        },
        {
          title: "Optimización continua",
          text: "Medimos y mejoramos con datos reales."
        }
      ],
      compare: {
        beforeTitle: "Antes",
        before: ["Sitio estático", "Mensaje genérico", "Oferta poco clara"],
        afterTitle: "Después",
        after: ["Experiencia orientada a conversión", "Oferta y mensaje claros", "Captura y seguimiento activos"]
      },
      metrics: {
        chip: "NEXA Metrics",
        title: "Datos claros para decidir más rápido",
        whatTitle: "Qué es",
        whatText:
          "Panel web con tráfico, leads y conversiones en tiempo real.",
        includesTitle: "Qué incluye",
        includes: [
          "Dashboard de KPIs por embudo",
          "Tracking + lectura mensual accionable"
        ],
        howTitle: "Cómo incluirlo",
        howText:
          "Incluido en Landing+ o activable como servicio mensual.",
        cta: { label: "Quiero incluir NEXA Metrics", href: "/nexa-metrics" }
      }
    },
    process: {
      badge: "Proceso de ejecución",
      title: "Un flujo claro para avanzar sin perder velocidad",
      sub: "Trabajamos con hitos concretos y decisiones rápidas para mantener ritmo de entrega.",
      steps: [
        { title: "Discovery comercial", text: "Objetivos, oferta, audiencia y fricciones actuales." },
        { title: "Dirección visual", text: "Sistema de diseño y propuesta de narrativa del sitio." },
        { title: "Build & QA", text: "Desarrollo en Next.js, optimización técnica y pruebas." },
        { title: "Launch + growth", text: "Salida a producción y hoja de optimización de 90 días." }
      ],
      controls: {
        back: "Atrás",
        next: "Continuar",
        complete: "Completar",
        completedTitle: "Plan listo para ejecutar",
        completedText: "Con este flujo pasamos de idea a lanzamiento con control total.",
        completedActionText: "Empezar proyecto",
        completedActionHref: "/contacto"
      },
      quote: {
        text: "NEXA no solo mejoró nuestra web: ordenó todo nuestro sistema de captación.",
        author: "Cliente NEXA",
        role: "Dirección comercial"
      }
    },
    showcase: {
      badge: "Experiencia del servicio",
      title: "Así se siente trabajar con NEXA de principio a fin",
      sub: "Un proceso con decisiones claras, entregables concretos y control de avance en cada etapa.",
      stages: [
        {
          phase: "Fase 1",
          title: "Kickoff estratégico",
          text: "Alineamos objetivo comercial, audiencia y prioridades para que el proyecto tenga dirección desde el primer día.",
          deliverable: "Brief estratégico y mapa de foco"
        },
        {
          phase: "Fase 2",
          title: "Dirección visual + copy",
          text: "Definimos narrativa, jerarquía y mensaje comercial para que la propuesta sea clara y persuasiva.",
          deliverable: "Sistema visual y arquitectura de contenido"
        },
        {
          phase: "Fase 3",
          title: "Build + QA",
          text: "Desarrollamos en Next.js, optimizamos performance y validamos cada interacción antes de publicar.",
          deliverable: "Sitio funcional, rápido y probado"
        },
        {
          phase: "Fase 4",
          title: "Launch + plan 90 días",
          text: "Publicamos con tracking activo y una hoja de mejora continua para sostener crecimiento.",
          deliverable: "Roadmap de optimización y métricas clave"
        }
      ],
      cta: { label: "Quiero vivir esta experiencia", href: "/contacto" }
    },
    finalCta: {
      title: "Si tu web no está vendiendo, está frenando tu crecimiento",
      text: "Te proponemos una estructura visual y comercial lista para convertir desde la primera versión.",
      primary: { label: "Agendar llamada estratégica", href: "/contacto" },
      secondary: { label: "Escribir por WhatsApp", href: "https://wa.me/573159836331" },
      floating: { label: "Agenda llamada", href: "/contacto" }
    }
  },
  en: {
    mainId: "content",
    activePage: "home",
    hero: {
      badge: "NEXA Growth Studio",
      title: "You do not need another pretty website.",
      grad: "You need a conversion engine.",
      subtitle:
        "We craft premium digital experiences for companies that want stronger sales, better operational flow and a scalable online presence.",
      primary: { label: "Get strategic proposal", href: "/en/contact" },
      secondary: { label: "Explore services", href: "/en/services" },
      trust: ["Strategy + execution", "Conversion-focused UX", "Launch-ready in weeks"],
      highlights: [
        { value: "+38%", label: "average increase in qualified leads" },
        { value: "30 days", label: "to launch a commercial-ready site" },
        { value: "4.9/5", label: "client satisfaction" }
      ]
    },
    stage: {
      sprintTitle: "30-day sprint",
      sprint: [
        "Week 1: offer diagnosis and conversion architecture.",
        "Week 2: visual direction and conversion copy.",
        "Week 3: development, performance and tracking.",
        "Week 4: QA, launch and optimization plan."
      ],
      snapshotTitle: "Impact snapshot",
      snapshot: [
        { label: "Average load time", value: "< 1.8s" },
        { label: "Offer clarity", value: "9/10" },
        { label: "Commercial flow", value: "Ready" }
      ]
    },
    value: {
      badge: "From website to growth asset",
      title: "We design so users understand, trust and act",
      sub: "Creative direction + commercial structure to improve conversion.",
      pillars: [
        {
          title: "Strategic visual narrative",
          text: "Each block moves users from attention to action."
        },
        {
          title: "Closure-oriented architecture",
          text: "We structure content by buying intent."
        },
        {
          title: "Continuous optimization",
          text: "We track, iterate and improve with data."
        }
      ],
      compare: {
        beforeTitle: "Before",
        before: ["Static site", "Generic messaging", "Unclear offer"],
        afterTitle: "After",
        after: ["Conversion-led experience", "Clear offer and positioning", "Active lead capture flow"]
      },
      metrics: {
        chip: "NEXA Metrics",
        title: "Clear data for faster decisions",
        whatTitle: "What it is",
        whatText:
          "Web dashboard with real-time traffic, leads and conversions.",
        includesTitle: "What it includes",
        includes: [
          "Funnel KPI dashboard",
          "Tracking setup + monthly actionable readout"
        ],
        howTitle: "How to include it",
        howText:
          "Included in Landing+ or enabled as a monthly service.",
        cta: { label: "I want to add NEXA Metrics", href: "/en/nexa-metrics" }
      }
    },
    process: {
      badge: "Execution model",
      title: "A clear process that keeps delivery momentum",
      sub: "Defined milestones and fast decisions so your project does not stall.",
      steps: [
        { title: "Commercial discovery", text: "Goals, offer, audience and friction points." },
        { title: "Visual direction", text: "Design system and narrative framework." },
        { title: "Build & QA", text: "Next.js implementation, optimization and testing." },
        { title: "Launch + growth", text: "Production release and 90-day optimization roadmap." }
      ],
      controls: {
        back: "Back",
        next: "Continue",
        complete: "Complete",
        completedTitle: "Execution plan ready",
        completedText: "This is how we move from strategy to launch without losing momentum.",
        completedActionText: "Start project",
        completedActionHref: "/en/contact"
      },
      quote: {
        text: "NEXA did not just redesign our site. They rebuilt our acquisition system.",
        author: "NEXA client",
        role: "Commercial lead"
      }
    },
    showcase: {
      badge: "Service experience",
      title: "How it feels to work with NEXA end to end",
      sub: "A process with clear decisions, concrete deliverables and full progress visibility.",
      stages: [
        {
          phase: "Phase 1",
          title: "Strategic kickoff",
          text: "We align business goals, audience and priorities so the project starts with clear direction.",
          deliverable: "Strategic brief and focus map"
        },
        {
          phase: "Phase 2",
          title: "Visual direction + copy",
          text: "We define narrative, hierarchy and commercial messaging for clarity and persuasion.",
          deliverable: "Visual system and content architecture"
        },
        {
          phase: "Phase 3",
          title: "Build + QA",
          text: "We develop in Next.js, optimize performance and validate interactions before release.",
          deliverable: "Fast, tested and production-ready website"
        },
        {
          phase: "Phase 4",
          title: "Launch + 90-day plan",
          text: "We launch with active tracking and a practical optimization roadmap to sustain growth.",
          deliverable: "Optimization roadmap with key metrics"
        }
      ],
      cta: { label: "I want this experience", href: "/en/contact" }
    },
    finalCta: {
      title: "If your website is not selling, it is slowing your growth",
      text: "We build a visual and commercial structure designed to convert from version one.",
      primary: { label: "Book strategic call", href: "/en/contact" },
      secondary: { label: "Chat on WhatsApp", href: "https://wa.me/573159836331" },
      floating: { label: "Book a call", href: "/en/contact" }
    }
  }
};

export function HomeExperience({ locale }: { locale: Locale }) {
  const copy = copyByLocale[locale];
  const valueVisuals =
    locale === "es"
      ? {
          funnelTitle: "Embudo comercial estimado",
          funnel: [
            { label: "Visitas calificadas", value: "100%", width: "100%" },
            { label: "Interés real", value: "64%", width: "64%" },
            { label: "Leads", value: "38%", width: "38%" },
            { label: "Cierres", value: "19%", width: "19%" }
          ],
          trendTitle: "Impacto proyectado en 90 días",
          trendLegendA: "Situación actual",
          trendLegendB: "Con optimización NEXA",
          trendTicks: ["Día 0", "Día 30", "Día 60", "Día 90"],
          trendCallout: "+41% en cierres",
          trendStatLabel: "Incremento en conversiones",
          trendStatValue: "+41%"
        }
      : {
          funnelTitle: "Estimated sales funnel",
          funnel: [
            { label: "Qualified traffic", value: "100%", width: "100%" },
            { label: "Real interest", value: "64%", width: "64%" },
            { label: "Leads", value: "38%", width: "38%" },
            { label: "Closed deals", value: "19%", width: "19%" }
          ],
          trendTitle: "90-day projected impact",
          trendLegendA: "Current baseline",
          trendLegendB: "With NEXA optimization",
          trendTicks: ["Day 0", "Day 30", "Day 60", "Day 90"],
          trendCallout: "+41% in closed deals",
          trendStatLabel: "Conversion growth",
          trendStatValue: "+41%"
        };

  return (
    <>
      <SiteHeader locale={locale} activePage={copy.activePage} />

      <main id={copy.mainId}>
        <section className="hp-hero">
          <div className="container hp-hero-grid">
            <div>
              <span className="hp-badge">{copy.hero.badge}</span>
              <h1 className="hp-title">
                {copy.hero.title} <span className="grad">{copy.hero.grad}</span>
              </h1>
              <p className="hp-subtitle">{copy.hero.subtitle}</p>

              <div className="hero-actions">
                <Link className="btn primary" href={copy.hero.primary.href}>
                  {copy.hero.primary.label}
                </Link>
                <Link className="btn" href={copy.hero.secondary.href}>
                  {copy.hero.secondary.label}
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="hp-value">
          <div className="container">
            <div className="hp-value-spotlight" aria-hidden="true" />
            <span className="hp-badge">{copy.value.badge}</span>
            <h2 className="hp-section-title">{copy.value.title}</h2>
            <p className="hp-section-sub">{copy.value.sub}</p>

            <div className="hp-value-layout">
              <div className="hp-value-left">
                <div className="hp-pillar-grid">
                  {copy.value.pillars.map((item) => (
                    <article className="hp-pillar" key={item.title}>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </article>
                  ))}
                </div>

                <div className="hp-compare-grid">
                  <article className="hp-compare hp-compare-before">
                    <h3>{copy.value.compare.beforeTitle}</h3>
                    <ul>
                      {copy.value.compare.before.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </article>
                  <article className="hp-compare hp-compare-after">
                    <h3>{copy.value.compare.afterTitle}</h3>
                    <ul>
                      {copy.value.compare.after.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </article>
                </div>

                <article className="hp-metrics-card">
                  <div className="hp-metrics-head">
                    <span className="hp-metrics-chip">{copy.value.metrics.chip}</span>
                    <h3>{copy.value.metrics.title}</h3>
                  </div>
                  <div className="hp-metrics-body">
                    <div className="hp-metrics-item">
                      <h4>{copy.value.metrics.whatTitle}</h4>
                      <p>{copy.value.metrics.whatText}</p>
                    </div>
                    <div className="hp-metrics-item">
                      <h4>{copy.value.metrics.includesTitle}</h4>
                      <ul>
                        {copy.value.metrics.includes.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="hp-metrics-item">
                      <h4>{copy.value.metrics.howTitle}</h4>
                      <p>{copy.value.metrics.howText}</p>
                    </div>
                  </div>
                  <div className="hp-metrics-footer">
                    <Link className="btn primary hp-metrics-cta" href={copy.value.metrics.cta.href}>
                      {copy.value.metrics.cta.label}
                    </Link>
                  </div>
                </article>
              </div>

              <div className="hp-value-right">
                <div className="hp-value-visuals">
                  <article className="hp-funnel-card">
                    <h3>{valueVisuals.funnelTitle}</h3>
                    <div className="hp-funnel-list">
                      {valueVisuals.funnel.map((item) => (
                        <div className="hp-funnel-item" key={item.label}>
                          <div className="hp-funnel-head">
                            <span>{item.label}</span>
                            <strong>{item.value}</strong>
                          </div>
                          <div className="hp-funnel-track">
                            <span className="hp-funnel-bar" style={{ width: item.width }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </article>

                  <article className="hp-trend-card">
                    <h3>{valueVisuals.trendTitle}</h3>
                    <svg viewBox="0 0 420 205" className="hp-trend-chart" role="img" aria-label={valueVisuals.trendTitle}>
                      <defs>
                        <linearGradient id="nexaGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#71d7ff" />
                          <stop offset="100%" stopColor="#db7bff" />
                        </linearGradient>
                        <linearGradient id="nexaArea" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="rgba(113, 215, 255, 0.38)" />
                          <stop offset="100%" stopColor="rgba(113, 215, 255, 0)" />
                        </linearGradient>
                        <filter id="nexaGlow" x="-20%" y="-20%" width="140%" height="140%">
                          <feGaussianBlur stdDeviation="3" result="blur" />
                          <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>
                      </defs>
                      <rect x="20" y="30" width="380" height="120" className="hp-trend-bg" />
                      <line x1="20" y1="150" x2="400" y2="150" className="hp-trend-axis" />
                      <line x1="20" y1="30" x2="400" y2="30" className="hp-trend-grid" />
                      <line x1="20" y1="70" x2="400" y2="70" className="hp-trend-grid" />
                      <line x1="20" y1="110" x2="400" y2="110" className="hp-trend-grid" />
                      <path d="M20 138 L100 121 L180 106 L260 88 L340 68 L400 44 L400 150 L20 150 Z" className="hp-trend-area" />
                      <polyline points="20,138 100,132 180,126 260,122 340,118 400,112" className="hp-trend-line-a" />
                      <polyline
                        points="20,138 100,121 180,106 260,88 340,68 400,44"
                        className="hp-trend-line-b"
                        filter="url(#nexaGlow)"
                      />
                      <g className="hp-trend-points">
                        <circle cx="100" cy="121" r="4" className="hp-trend-point" />
                        <circle cx="180" cy="106" r="4" className="hp-trend-point" />
                        <circle cx="260" cy="88" r="4" className="hp-trend-point" />
                        <circle cx="340" cy="68" r="4" className="hp-trend-point" />
                        <circle cx="400" cy="44" r="5" className="hp-trend-point hp-trend-point-final" />
                      </g>
                      <g className="hp-trend-callout">
                        <rect x="292" y="10" rx="12" ry="12" width="118" height="24" />
                        <text x="351" y="26" textAnchor="middle">
                          {valueVisuals.trendCallout}
                        </text>
                      </g>
                      <g className="hp-trend-ticks">
                        <text x="20" y="172">{valueVisuals.trendTicks[0]}</text>
                        <text x="145" y="172">{valueVisuals.trendTicks[1]}</text>
                        <text x="270" y="172">{valueVisuals.trendTicks[2]}</text>
                        <text x="400" y="172" textAnchor="end">
                          {valueVisuals.trendTicks[3]}
                        </text>
                      </g>
                    </svg>
                    <div className="hp-trend-legends">
                      <span className="hp-legend hp-legend-a">{valueVisuals.trendLegendA}</span>
                      <span className="hp-legend hp-legend-b">{valueVisuals.trendLegendB}</span>
                    </div>
                    <div className="hp-trend-stat">
                      <span>{valueVisuals.trendStatLabel}</span>
                      <strong>{valueVisuals.trendStatValue}</strong>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ServiceSwitcher locale={locale} />

        <section className="hp-process">
          <div className="container">
            <div className="hp-process-head hp-process-head--solo">
              <div>
                <span className="hp-badge">{copy.process.badge}</span>
                <h2 className="hp-section-title">{copy.process.title}</h2>
                <p className="hp-section-sub">{copy.process.sub}</p>
              </div>
            </div>

            <Stepper
              className="hp-process-stepper"
              backButtonText={copy.process.controls.back}
              nextButtonText={copy.process.controls.next}
              completeButtonText={copy.process.controls.complete}
              completedTitle={copy.process.controls.completedTitle}
              completedText={copy.process.controls.completedText}
              completedActionText={copy.process.controls.completedActionText}
              completedActionHref={copy.process.controls.completedActionHref}
            >
              {copy.process.steps.map((item) => (
                <Step key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </Step>
              ))}
            </Stepper>
          </div>
        </section>

        <section className="hp-showcase" id={locale === "es" ? "trabajos" : "work"}>
          <div className="container">
            <span className="hp-badge">{copy.showcase.badge}</span>
            <h2 className="hp-section-title">{copy.showcase.title}</h2>
            <p className="hp-section-sub">{copy.showcase.sub}</p>

            <div className="hp-journey-shell">
              <div className="hp-journey-grid">
                {copy.showcase.stages.map((item, index) => (
                  <article className="hp-journey-step" key={item.title}>
                    <div className="hp-journey-rail" aria-hidden="true">
                      <span className="hp-journey-phase">{item.phase}</span>
                      {index < copy.showcase.stages.length - 1 ? <span className="hp-journey-arrow">↓</span> : null}
                    </div>
                    <div className="hp-journey-main">
                      <h3>{item.title}</h3>
                      <p className="hp-journey-step-text">{item.text}</p>
                      <p className="hp-journey-step-deliverable">
                        <strong>{locale === "es" ? "Entregable" : "Deliverable"}:</strong> {item.deliverable}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
              <div className="hero-actions hp-journey-actions">
                <Link className="btn primary" href={copy.showcase.cta.href}>
                  {copy.showcase.cta.label}
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="hp-final-cta">
          <div className="container">
            <div className="hp-final-content">
              <h2>{copy.finalCta.title}</h2>
              <p>{copy.finalCta.text}</p>
              <div className="hero-actions">
                <Link className="btn primary" href={copy.finalCta.primary.href}>
                  {copy.finalCta.primary.label}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter locale={locale} />

      <Link className="hp-floating-cta" href={copy.finalCta.floating.href}>
        {copy.finalCta.floating.label}
      </Link>
    </>
  );
}
