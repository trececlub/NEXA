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
      <a className="skip" href="#content">
        Skip to content
      </a>
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
              <Link className="btn" href="https://wa.me/573159836331" target="_blank" rel="noopener noreferrer">
                Chat on WhatsApp
              </Link>
            </div>
          </div>
        </section>

        <section id="services">
          <div className="container">
            <h2 className="section-title">Main offers</h2>
            <p className="section-sub">Clear deliverables, realistic timelines, business-first execution.</p>
            <div className="grid-3">
              <article className="card">
                <h3>Web design</h3>
                <p>Business websites focused on conversion, trust and speed.</p>
                <ul>
                  <li>Conversion-oriented UX/UI design.</li>
                  <li>Responsive development and performance optimization.</li>
                  <li>Technical SEO setup and analytics.</li>
                  <li>SSL, domain and production deployment.</li>
                </ul>
                <p>
                  <Link className="btn" href="/en/contact?service=web-design">
                    Request proposal
                  </Link>
                </p>
              </article>

              <article className="card">
                <h3>Custom software</h3>
                <p>Operational tools that remove bottlenecks and improve scale.</p>
                <ul>
                  <li>Admin dashboards and internal tools.</li>
                  <li>Third-party API integrations.</li>
                  <li>Workflow automation.</li>
                  <li>Ongoing product improvements.</li>
                </ul>
                <p>
                  <Link className="btn" href="/en/contact?service=custom-software">
                    Request proposal
                  </Link>
                </p>
              </article>

              <article className="card">
                <h3>Branding</h3>
                <p>Identity systems that make your company look consistent and memorable.</p>
                <ul>
                  <li>Visual identity and brand system.</li>
                  <li>Color, typography and tone framework.</li>
                  <li>Brandbook and social templates.</li>
                  <li>Implementation guidelines.</li>
                </ul>
                <p>
                  <Link className="btn" href="/en/contact?service=branding">
                    Request proposal
                  </Link>
                </p>
              </article>

              <article className="card">
                <h3>Landing+</h3>
                <p>Fast launch on a NEXA subdomain with an integrated commerce flow.</p>
                <ul>
                  <li>Professional landing page.</li>
                  <li>One system: sales, bookings or digital menu.</li>
                  <li>Managed hosting and SSL included.</li>
                  <li>WhatsApp and analytics setup.</li>
                </ul>
                <p>
                  <Link className="btn" href="/en/contact?service=landing-plus">
                    Request Landing+
                  </Link>
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="process">
          <div className="container about">
            <div className="panel">
              <h2 className="section-title">How we work</h2>
              <p>You get a clear process from discovery to launch, without endless loops.</p>
              <div className="bullets">
                <span className="chip">1. Discovery</span>
                <span className="chip">2. Design</span>
                <span className="chip">3. Build</span>
                <span className="chip">4. Launch</span>
              </div>
            </div>
            <div className="panel">
              <h3>Need a hybrid setup?</h3>
              <p>
                We can combine branding, web and software into one integrated proposal based on your business
                priorities.
              </p>
              <p>
                <Link className="btn" href="/en/contact">
                  Request custom scope
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter locale="en" />
    </>
  );
}
