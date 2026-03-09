"use client";

import Link from "next/link";
import { useEffect, useMemo, useState, type FormEvent } from "react";

type Locale = "es" | "en";

type ContactSectionProps = {
  locale: Locale;
  sectionId: string;
};

type ServiceOption = {
  value: string;
  label: string;
};

const serviceOptionsByLocale: Record<Locale, ServiceOption[]> = {
  es: [
    { value: "diseno-web", label: "Diseño web" },
    { value: "software-a-medida", label: "Software a medida" },
    { value: "branding", label: "Branding" },
    { value: "landing-plus", label: "Landing+" },
    { value: "nexa-metrics", label: "NEXA Metrics mensual" }
  ],
  en: [
    { value: "web-design", label: "Web design" },
    { value: "custom-software", label: "Custom software" },
    { value: "branding", label: "Branding" },
    { value: "landing-plus", label: "Landing+" },
    { value: "nexa-metrics", label: "NEXA Metrics monthly" }
  ]
};

const copy = {
  es: {
    title: "Formulario de contacto",
    formIntro: "Comparte contexto, objetivo y tipo de servicio. Te respondemos con enfoque comercial, no con plantillas.",
    name: "Nombre",
    email: "Email",
    phone: "Teléfono (opcional)",
    service: "Servicio de interés",
    servicePlaceholder: "Selecciona una opción",
    message: "Mensaje",
    messagePlaceholder: "Objetivo, plazos y presupuesto aproximado",
    submit: "Enviar",
    directTitle: "Contacto directo",
    directText:
      "Si tienes urgencia, escribe por WhatsApp y te respondemos lo antes posible. También puedes enviarnos correo con tu brief.",
    emailSubject: "Contacto NEXA",
    mailtoSubjectPrefix: "Contacto NEXA",
    waIntro: "Hola NEXA, soy",
    waInterest: "Me interesa",
    waButton: "WhatsApp",
    emailButton: "Email",
    quick1: "Tiempo promedio de respuesta",
    quick2: "Para definir alcance inicial",
    quick3: "Con tiempos y entregables",
    q1v: "<24h",
    q2v: "1 llamada",
    q3v: "Propuesta clara",
    channelsTitle: "Canales disponibles",
    channel1: "WhatsApp para urgencias y coordinación rápida.",
    channel2: "Email para enviar brief, referencias y documentos.",
    channel3: "Instagram para ver estilo, casos y novedades.",
    checklistTitle: "Para cotizar mejor, incluye:",
    checklist1: "Objetivo principal del proyecto.",
    checklist2: "Plazo ideal de lanzamiento.",
    checklist3: "Rango de inversión aproximado."
  },
  en: {
    title: "Contact form",
    formIntro: "Share your context, goal and service interest. We reply with a commercial-focused approach.",
    name: "Name",
    email: "Email",
    phone: "Phone (optional)",
    service: "Service of interest",
    servicePlaceholder: "Select one",
    message: "Message",
    messagePlaceholder: "Goal, timeline and estimated budget",
    submit: "Send",
    directTitle: "Direct contact",
    directText:
      "If you have an urgent request, WhatsApp is the fastest channel. You can also send us your brief via email.",
    emailSubject: "NEXA Contact",
    mailtoSubjectPrefix: "NEXA Contact",
    waIntro: "Hi NEXA, I'm",
    waInterest: "I'm interested in",
    waButton: "WhatsApp",
    emailButton: "Email",
    quick1: "Average response time",
    quick2: "To define initial scope",
    quick3: "Timeline + deliverables",
    q1v: "<24h",
    q2v: "1 call",
    q3v: "Clear quote",
    channelsTitle: "Available channels",
    channel1: "WhatsApp for urgent coordination and quick follow-up.",
    channel2: "Email to send your brief, references and documents.",
    channel3: "Instagram to explore style, references and updates.",
    checklistTitle: "To quote better, include:",
    checklist1: "Main business goal for this project.",
    checklist2: "Ideal launch timeline.",
    checklist3: "Estimated budget range."
  }
} as const;

const WA_NUMBER = "573159836331";

export function ContactSection({ locale, sectionId }: ContactSectionProps) {
  const t = copy[locale];
  const services = serviceOptionsByLocale[locale];
  const [service, setService] = useState("");

  const paramKey = locale === "es" ? "servicio" : "service";

  useEffect(() => {
    const fromQuery = new URLSearchParams(window.location.search).get(paramKey) ?? "";
    if (services.some((option) => option.value === fromQuery)) {
      setService(fromQuery);
    }
  }, [paramKey, services]);

  const serviceLabelMap = useMemo(
    () => new Map(services.map((option) => [option.value, option.label])),
    [services]
  );

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const selectedService = String(data.get("service") ?? "");
    const serviceLabel = serviceLabelMap.get(selectedService) ?? selectedService;

    const subject = `${t.mailtoSubjectPrefix} — ${serviceLabel || "general"}`;
    const body =
      `Name: ${encodeURIComponent(String(data.get("name") ?? ""))}%0A` +
      `Email: ${encodeURIComponent(String(data.get("email") ?? ""))}%0A` +
      `Phone: ${encodeURIComponent(String(data.get("phone") ?? ""))}%0A` +
      `Service: ${encodeURIComponent(serviceLabel)}%0A` +
      `Message:%0A${encodeURIComponent(String(data.get("message") ?? ""))}`;

    window.location.href = `mailto:hola@nexa.studio?subject=${encodeURIComponent(subject)}&body=${body}`;
  };

  const openWhatsApp = (formElement: HTMLFormElement | null) => {
    const data = new FormData(formElement ?? undefined);
    const name = String(data.get("name") ?? "").trim();
    const selectedService = String(data.get("service") ?? "");
    const serviceLabel = serviceLabelMap.get(selectedService) ?? selectedService;
    const message = String(data.get("message") ?? "").trim();

    const text = encodeURIComponent(
      `${t.waIntro} ${name}. ${t.waInterest} ${serviceLabel}. ${message}`.trim()
    );

    window.open(`https://wa.me/${WA_NUMBER}?text=${text}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section id={sectionId}>
      <div className="container about contact-grid">
        <div className="panel">
          <h2 className="section-title" style={{ marginTop: 0 }}>
            {t.title}
          </h2>
          <p className="contact-form-intro">{t.formIntro}</p>

          <form id="contactForm" aria-label={t.title} onSubmit={handleSubmit}>
            <label htmlFor="name">{t.name}</label>
            <input id="name" name="name" placeholder={t.name} required />

            <label htmlFor="email">{t.email}</label>
            <input id="email" name="email" type="email" placeholder="you@company.com" required />

            <label htmlFor="phone">{t.phone}</label>
            <input id="phone" name="phone" type="tel" placeholder="+57 315 983 6331" />

            <label htmlFor="service">{t.service}</label>
            <select
              id="service"
              name="service"
              required
              value={service}
              onChange={(event) => setService(event.target.value)}
            >
              <option value="">{t.servicePlaceholder}</option>
              {services.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            <label htmlFor="message">{t.message}</label>
            <textarea id="message" name="message" placeholder={t.messagePlaceholder} required />

            <div className="contact-actions">
              <button className="btn primary" type="submit">
                {t.submit}
              </button>
              <button
                className="btn"
                type="button"
                onClick={() => openWhatsApp(document.getElementById("contactForm") as HTMLFormElement | null)}
              >
                {t.waButton}
              </button>
              <Link
                className="btn"
                href="https://www.instagram.com/nexastudio_co?igsh=bXZnNjF3cXYzYmUy&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </Link>
            </div>
          </form>
        </div>

        <div className="panel">
          <h3 style={{ marginTop: 0 }}>{t.directTitle}</h3>
          <p>{t.directText}</p>

          <h4 className="contact-subtitle">{t.channelsTitle}</h4>
          <ul className="contact-direct-list">
            <li>{t.channel1}</li>
            <li>{t.channel2}</li>
            <li>{t.channel3}</li>
          </ul>

          <div className="social-links">
            <button
              className="btn"
              type="button"
              onClick={() => openWhatsApp(document.getElementById("contactForm") as HTMLFormElement | null)}
            >
              {t.waButton}
            </button>
            <Link className="btn" href={`mailto:hola@nexa.studio?subject=${encodeURIComponent(t.emailSubject)}`}>
              {t.emailButton}
            </Link>
            <Link
              className="btn"
              href="https://www.instagram.com/nexastudio_co?igsh=bXZnNjF3cXYzYmUy&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </Link>
          </div>
          <p className="note">
            WhatsApp: <code>+57 315 983 6331</code>
          </p>

          <h4 className="contact-subtitle">{t.checklistTitle}</h4>
          <ul className="contact-checklist">
            <li>{t.checklist1}</li>
            <li>{t.checklist2}</li>
            <li>{t.checklist3}</li>
          </ul>

          <div className="stats-strip" style={{ marginTop: 18 }}>
            <div className="metric">
              <strong>{t.q1v}</strong>
              <span>{t.quick1}</span>
            </div>
            <div className="metric">
              <strong>{t.q2v}</strong>
              <span>{t.quick2}</span>
            </div>
            <div className="metric">
              <strong>{t.q3v}</strong>
              <span>{t.quick3}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
