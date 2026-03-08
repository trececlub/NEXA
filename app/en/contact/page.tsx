import type { Metadata } from "next";
import Link from "next/link";
import { ContactSection } from "@/components/contact-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "NEXA | Contact",
  description: "Contact NEXA and get a proposal for web design, branding, or custom software.",
  alternates: {
    canonical: "/en/contact",
    languages: {
      es: "/contacto",
      en: "/en/contact"
    }
  }
};

export default function EnContactPage() {
  return (
    <>
      <SiteHeader locale="en" activePage="contact" ctaLabel="Send brief" />

      <main id="content">
        <section className="hero">
          <div className="container">
            <span className="kicker">Contact</span>
            <h1 className="title">
              Tell us about your project and get a <span className="grad">clear execution plan</span>
            </h1>
            <p className="subtitle">
              If you prefer a faster route, message us on WhatsApp and share your idea in under one minute.
            </p>
            <div className="hero-actions">
              <Link className="btn primary" href="#form">
                Fill the form
              </Link>
              <Link className="btn" href="https://wa.me/573159836331" target="_blank" rel="noopener noreferrer">
                Chat on WhatsApp
              </Link>
            </div>
          </div>
        </section>

        <ContactSection locale="en" sectionId="form" />
      </main>

      <SiteFooter locale="en" />
    </>
  );
}
