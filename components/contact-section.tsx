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
    phoneCode: "Indicativo país",
    q1v: "Menos de 24h",
    q2v: "20-30 min",
    q3v: "24-48h",
    quick1: "Tiempo de respuesta",
    quick2: "Llamada inicial",
    quick3: "Entrega de propuesta",
    submitSuccess: "Pronto nos comunicaremos contigo! Gracias por preferirnos."
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
    phoneCode: "Country code",
    q1v: "Under 24h",
    q2v: "20-30 min",
    q3v: "24-48h",
    quick1: "Response time",
    quick2: "Discovery call",
    quick3: "Proposal delivery",
    submitSuccess: "We will contact you soon! Thanks for choosing us."
  }
} as const;

const WA_NUMBER = "573159836331";
const countryCodes = ["+57", "+1", "+34", "+52", "+54", "+51", "+56", "+55"];

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3.5a8.5 8.5 0 0 0-7.35 12.77L3.5 20.5l4.42-1.16A8.5 8.5 0 1 0 12 3.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M9.1 9.13c.2-.45.42-.46.6-.47h.51c.09 0 .24.03.37.32.12.29.45 1.12.5 1.2.04.08.07.18.01.29-.06.1-.1.18-.2.28-.1.1-.2.22-.29.29-.1.08-.2.17-.08.34.12.17.54.9 1.16 1.45.8.71 1.48.94 1.7 1.04.23.1.35.08.48-.05.13-.13.54-.63.69-.84.15-.21.3-.18.5-.11.2.07 1.27.6 1.49.7.22.11.37.16.42.26.05.1.05.6-.14 1.19-.2.58-1.15 1.11-1.57 1.16-.4.05-.9.07-1.45-.1a6.68 6.68 0 0 1-2.36-1.33 8.12 8.12 0 0 1-1.8-2.23c-.48-.83-.64-1.48-.5-2.05.13-.57.43-.87.56-1.02Z"
        fill="currentColor"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="m5 7 7 6 7-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="4.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17" cy="7" r="1" fill="currentColor" />
    </svg>
  );
}

export function ContactSection({ locale, sectionId }: ContactSectionProps) {
  const t = copy[locale];
  const services = serviceOptionsByLocale[locale];
  const [service, setService] = useState("");
  const [phoneCode, setPhoneCode] = useState(locale === "es" ? "+57" : "+1");
  const [submitMessage, setSubmitMessage] = useState("");

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

    const rawPhone = String(data.get("phone") ?? "").trim();
    const fullPhone = rawPhone ? `${phoneCode} ${rawPhone}` : "";
    const subject = `${t.mailtoSubjectPrefix} — ${serviceLabel || "general"}`;
    const body =
      `Name: ${encodeURIComponent(String(data.get("name") ?? ""))}%0A` +
      `Email: ${encodeURIComponent(String(data.get("email") ?? ""))}%0A` +
      `Phone: ${encodeURIComponent(fullPhone)}%0A` +
      `Service: ${encodeURIComponent(serviceLabel)}%0A` +
      `Message:%0A${encodeURIComponent(String(data.get("message") ?? ""))}`;

    setSubmitMessage(t.submitSuccess);
    window.location.href = `mailto:hola@nexa.studio?subject=${encodeURIComponent(subject)}&body=${body}`;
  };

  const openWhatsApp = (formElement: HTMLFormElement | null) => {
    const data = new FormData(formElement ?? undefined);
    const name = String(data.get("name") ?? "").trim();
    const selectedService = String(data.get("service") ?? "");
    const serviceLabel = serviceLabelMap.get(selectedService) ?? selectedService;
    const message = String(data.get("message") ?? "").trim();

    const rawPhone = String(data.get("phone") ?? "").trim();
    const fullPhone = rawPhone ? `${phoneCode} ${rawPhone}` : "";
    const text = encodeURIComponent(
      `${t.waIntro} ${name}. ${t.waInterest} ${serviceLabel}. ${message} ${fullPhone}`.trim()
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
            <div className="contact-phone-row">
              <select
                id="phoneCode"
                name="phoneCode"
                aria-label={t.phoneCode}
                value={phoneCode}
                onChange={(event) => setPhoneCode(event.target.value)}
              >
                {countryCodes.map((code) => (
                  <option key={code} value={code}>
                    {code}
                  </option>
                ))}
              </select>
              <input id="phone" name="phone" type="tel" placeholder="315 983 6331" />
            </div>

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
            </div>
            {submitMessage ? <p className="contact-submit-message">{submitMessage}</p> : null}
          </form>
        </div>

        <div className="panel">
          <h3 style={{ marginTop: 0 }}>{t.directTitle}</h3>
          <p>{t.directText}</p>

          <div className="social-links">
            <button
              className="btn contact-icon-btn"
              aria-label={t.waButton}
              title={t.waButton}
              type="button"
              onClick={() => openWhatsApp(document.getElementById("contactForm") as HTMLFormElement | null)}
            >
              <WhatsAppIcon />
            </button>
            <Link
              className="btn contact-icon-btn"
              aria-label={t.emailButton}
              title={t.emailButton}
              href={`mailto:hola@nexa.studio?subject=${encodeURIComponent(t.emailSubject)}`}
            >
              <MailIcon />
            </Link>
            <Link
              className="btn contact-icon-btn"
              aria-label="Instagram"
              title="Instagram"
              href="https://www.instagram.com/nexastudio_co?igsh=bXZnNjF3cXYzYmUy&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon />
            </Link>
          </div>

          <div className="contact-quick-grid">
            <div className="contact-quick-item">
              <span>{t.quick1}</span>
              <strong>{t.q1v}</strong>
            </div>
            <div className="contact-quick-item">
              <span>{t.quick2}</span>
              <strong>{t.q2v}</strong>
            </div>
            <div className="contact-quick-item">
              <span>{t.quick3}</span>
              <strong>{t.q3v}</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
