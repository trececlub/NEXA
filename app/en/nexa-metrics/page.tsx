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
        <section className="hero metrics-hero">
          <div className="container">
            <span className="kicker">NEXA Metrics</span>
            <h1 className="title">
              Your website does not need more guesswork. <span className="grad">It needs actionable data.</span>
            </h1>
            <p className="subtitle">
              Monthly service to monitor, understand and optimize conversions for NEXA websites and external websites.
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
          <div className="container metrics-simple-grid">
            <div>
              <h2 className="section-title">What you get with NEXA Metrics</h2>
              <p className="section-sub">A clear commercial reading so you know what to improve and where to focus each month.</p>
              <ul className="metrics-simple-list">
                <li>Funnel-stage dashboard with core KPIs.</li>
                <li>Event, conversion and source tracking.</li>
                <li>Monthly review with prioritized actions.</li>
                <li>Continuous optimization focused on outcomes.</li>
              </ul>
            </div>

            <article className="panel metrics-price-card">
              <span className="chip">Monthly plan</span>
              <h3>NEXA Metrics</h3>
              <p className="metrics-offer">
                Intro offer: <strong>COP $299,000/month</strong> for the first 3 months
              </p>
              <p className="metrics-price">
                <strong>COP $349,000</strong>
                <span>/month</span>
              </p>
              <p>
                Includes initial implementation, live dashboard and a monthly executive readout to improve commercial
                decision-making.
              </p>
              <div className="hero-actions">
                <Link className="btn primary" href="/en/contact?service=nexa-metrics">
                  I want NEXA Metrics
                </Link>
              </div>
            </article>
          </div>
        </section>

        <section>
          <div className="container">
            <h2 className="section-title">How we integrate it</h2>
            <p className="section-sub">Fast onboarding with minimal friction so you can start measuring from cycle one.</p>
            <div className="bullets">
              <span className="chip">1. Initial audit</span>
              <span className="chip">2. Technical setup</span>
              <span className="chip">3. Live dashboard</span>
              <span className="chip">4. Improvement plan</span>
            </div>
            <div className="hero-actions">
              <Link className="btn primary" href="/en/contact?service=nexa-metrics">
                Request proposal
              </Link>
              <Link className="btn" href="/en/services">
                View Landing+
              </Link>
            </div>
          </div>
        </section>

        <section id="metrics-plan-terms">
          <div className="container">
            <h2 className="section-title">NEXA Metrics plan conditions</h2>
            <ul className="metrics-simple-list">
              <li>
                Standard plan price: <strong>COP $349,000/month</strong>.
              </li>
              <li>
                Intro offer: <strong>COP $299,000/month</strong> for the first 3 months for new clients.
              </li>
              <li>Monthly billing in advance per active project.</li>
              <li>Includes one monthly executive review and prioritized action plan.</li>
              <li>
                Full redesign, paid media management, custom development and out-of-scope integrations are not included.
              </li>
              <li>Cancellation applies to the next cycle. The billed period already consumed is non-refundable.</li>
            </ul>
            <div className="hero-actions">
              <Link className="btn" href="/en/terms-and-conditions">
                View full terms
              </Link>
              <Link className="btn" href="/en/privacy-policy">
                View privacy policy
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter locale="en" />
    </>
  );
}
