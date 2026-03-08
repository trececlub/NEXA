import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "NEXA | Services",
  description: "NEXA services: branding, web design, custom software and Landing+ for growth-focused businesses.",
  alternates: {
    canonical: "/en/services",
    languages: {
      es: "/servicios",
      en: "/en/services"
    }
  }
};

export default function EnServicesPage() {
  return (
    <>
      <SiteHeader locale="en" activePage="services" />

      <main id="content">
        <section className="hero">
          <div className="container">
            <span className="kicker">NEXA services</span>
            <h1 className="title">
              Digital solutions <span className="grad">built for growth</span>
            </h1>
            <p className="subtitle">
              Pick one service or combine several into one roadmap tailored to your business stage.
            </p>
            <div className="hero-actions">
              <Link className="btn primary" href="/en/contact">
                Get proposal
              </Link>
            </div>
          </div>
        </section>

        <section id="services">
          <div className="container">
            <h2 className="section-title">Main offers</h2>
            <p className="section-sub">Choose one clear path or combine services into a complete commercial system.</p>
            <div className="grid-3 services-grid">
              <article className="card service-card">
                <div className="service-card-head">
                  <span className="chip service-chip">Commercial presence</span>
                  <h3>Web design</h3>
                  <p>Business websites focused on conversion, trust and speed.</p>
                  <p className="service-price">
                    <span>Starting at</span>
                    <strong>USD $750</strong>
                  </p>
                </div>
                <ul>
                  <li>Business-driven UX/UI architecture.</li>
                  <li>Responsive implementation and performance optimization.</li>
                  <li>Technical SEO, analytics and content structure.</li>
                  <li>Production deployment with SSL and domain setup.</li>
                </ul>
                <div className="service-card-cta">
                  <Link className="btn primary" href="/en/contact?service=web-design">
                    Request proposal
                  </Link>
                </div>
              </article>

              <article className="card service-card">
                <div className="service-card-head">
                  <span className="chip service-chip">Digital operations</span>
                  <h3>Custom software</h3>
                  <p>Operational tools that remove bottlenecks and improve scale.</p>
                  <p className="service-price">
                    <span>Starting at</span>
                    <strong>USD $1,150</strong>
                  </p>
                </div>
                <ul>
                  <li>Admin dashboards and internal tools.</li>
                  <li>External APIs and system integrations.</li>
                  <li>Workflow and operations automation.</li>
                  <li>Prioritized ongoing improvement roadmap.</li>
                </ul>
                <div className="service-card-cta">
                  <Link className="btn primary" href="/en/contact?service=custom-software">
                    Request proposal
                  </Link>
                </div>
              </article>

              <article className="card service-card">
                <div className="service-card-head">
                  <span className="chip service-chip">Positioning</span>
                  <h3>Branding</h3>
                  <p>Identity systems that make your company look consistent and memorable.</p>
                  <p className="service-price">
                    <span>Starting at</span>
                    <strong>USD $460</strong>
                  </p>
                </div>
                <ul>
                  <li>Visual identity and brand system.</li>
                  <li>Color, typography and tone framework.</li>
                  <li>Brandbook and social media starter assets.</li>
                  <li>Implementation guidelines for consistency.</li>
                </ul>
                <div className="service-card-cta">
                  <Link className="btn primary" href="/en/contact?service=branding">
                    Request proposal
                  </Link>
                </div>
              </article>

              <article className="card service-card is-featured">
                <div className="service-card-head">
                  <span className="chip service-chip">Featured offer</span>
                  <span className="service-popular-badge">Most purchased</span>
                  <h3>Landing+</h3>
                  <p>Fast commercial web setup with an integrated lead and conversion flow.</p>
                  <p className="service-price is-monthly">
                    <span>Monthly</span>
                    <strong>USD $199/month</strong>
                  </p>
                </div>
                <ul>
                  <li>Professional primary landing page.</li>
                  <li>Commercial flow: sales, bookings or digital menu.</li>
                  <li>Managed hosting, SSL and technical support.</li>
                  <li><strong>NEXA Metrics included:</strong> starter dashboard and monthly performance review.</li>
                </ul>
                <div className="service-card-cta">
                  <Link className="btn primary" href="/en/contact?service=landing-plus">
                    Request Landing+
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter locale="en" />
    </>
  );
}
