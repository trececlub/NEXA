import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "NEXA | NEXA Metrics",
  description:
    "NEXA Metrics is a monthly service to monitor and improve your website's commercial performance, even if your site was not built by NEXA.",
  alternates: {
    canonical: "/en/nexa-metrics",
    languages: {
      es: "/nexa-metrics",
      en: "/en/nexa-metrics"
    }
  }
};

export default function EnNEXAMetricsPage() {
  return (
    <>
      <SiteHeader locale="en" activePage="metrics" />

      <main id="content">
        <section className="hero">
          <div className="container">
            <span className="kicker">NEXA Metrics</span>
            <h1 className="title">
              Your website does not need more guesswork. <span className="grad">It needs actionable data.</span>
            </h1>
            <p className="subtitle">
              Monthly service to monitor, understand and optimize conversions. Built for NEXA websites and also
              existing third-party websites.
            </p>
            <div className="hero-actions">
              <Link className="btn primary" href="/en/contact?service=nexa-metrics">
                Activate NEXA Metrics
              </Link>
              <Link className="btn" href="/en/contact">
                Ask questions
              </Link>
            </div>
          </div>
        </section>

        <section>
          <div className="container about">
            <article className="panel">
              <h2 className="section-title">What NEXA Metrics is</h2>
              <p>
                A web dashboard with core commercial indicators so you can quickly see what drives growth and what
                blocks conversion.
              </p>
              <div className="bullets">
                <span className="chip">Traffic and channels</span>
                <span className="chip">Leads and conversions</span>
                <span className="chip">Technical performance</span>
                <span className="chip">Opportunity alerts</span>
              </div>
            </article>

            <article className="panel">
              <h3>Who it is for</h3>
              <ul>
                <li>Businesses with live websites that want stronger conversion rates.</li>
                <li>Commercial teams that need funnel visibility.</li>
                <li>Brands investing in traffic and requiring return tracking.</li>
                <li>Landing+ clients and external website owners.</li>
              </ul>
            </article>
          </div>
        </section>

        <section id="included">
          <div className="container">
            <h2 className="section-title">What the monthly service includes</h2>
            <p className="section-sub">We do not just report numbers. We convert data into practical decisions.</p>
            <div className="grid-3">
              <article className="card">
                <h3>Funnel-stage dashboard</h3>
                <p>KPIs by stage so you can identify where opportunities are being lost.</p>
              </article>

              <article className="card">
                <h3>Tracking implementation</h3>
                <p>Key events, conversion points and channel tracking for complete commercial visibility.</p>
              </article>

              <article className="card">
                <h3>Monthly executive readout</h3>
                <p>Action-focused summary with findings, bottlenecks and next priorities.</p>
              </article>

              <article className="card">
                <h3>Continuous optimization</h3>
                <p>Iterative recommendations to improve clarity, user flow and site performance.</p>
              </article>
            </div>
          </div>
        </section>

        <section>
          <div className="container about">
            <article className="panel">
              <h2 className="section-title">How we add it to your website</h2>
              <p>Simple onboarding flow with minimal disruption:</p>
              <div className="bullets">
                <span className="chip">1. Initial audit</span>
                <span className="chip">2. Technical setup</span>
                <span className="chip">3. Dashboard activation</span>
                <span className="chip">4. First optimization plan</span>
              </div>
            </article>

            <article className="panel">
              <h3>Commercial model</h3>
              <p>
                With <strong>Landing+</strong> it can be included in scope. For other websites, it is activated as an
                independent monthly service.
              </p>
              <p>
                <Link className="btn primary" href="/en/contact?service=nexa-metrics">
                  Request NEXA Metrics proposal
                </Link>
              </p>
            </article>
          </div>
        </section>
      </main>

      <SiteFooter locale="en" />
    </>
  );
}
