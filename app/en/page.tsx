import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "NEXA | Web design and software agency",
  description: "NEXA builds premium web experiences, branding, and custom software for businesses that want to scale.",
  alternates: {
    canonical: "/en",
    languages: {
      es: "/",
      en: "/en"
    }
  }
};

const gallery = [
  { src: "/img/proyecto-01.jpg", alt: "NEXA web project", label: "Corporate website" },
  { src: "/img/proyecto-02.jpg", alt: "NEXA branding project", label: "Branding" },
  { src: "/img/proyecto-03.jpg", alt: "NEXA UX project", label: "UX/UI" },
  { src: "/img/proyecto-04.jpg", alt: "NEXA ecommerce project", label: "E-commerce" }
];

export default function EnHomePage() {
  return (
    <>
      <SiteHeader locale="en" activePage="home" />

      <main id="content">
        <section className="hero">
          <div className="container">
            <span className="kicker">Premium digital studio</span>
            <h1 className="title">
              Web and software that convert. <span className="grad">Built to sell.</span>
            </h1>
            <p className="subtitle">
              We craft high-impact digital experiences for ambitious brands: visual design, web development, and
              custom software in one focused team.
            </p>
            <div className="hero-actions">
              <Link className="btn primary" href="/en/contact">
                Request proposal
              </Link>
              <Link className="btn" href="/en/services">
                Explore services
              </Link>
            </div>
            <div className="stats-strip" aria-label="Value metrics">
              <div className="metric">
                <strong>2-4 weeks</strong>
                <span>Average launch timeline</span>
              </div>
              <div className="metric">
                <strong>100% responsive</strong>
                <span>Mobile and desktop first</span>
              </div>
              <div className="metric">
                <strong>Real support</strong>
                <span>Post-launch guidance</span>
              </div>
            </div>
          </div>
        </section>

        <section id="who-we-are">
          <div className="container about">
            <div className="panel">
              <h2 className="section-title">We build digital presence that looks premium and performs</h2>
              <p>
                At NEXA, strategy meets design and engineering. We deliver websites and digital products that feel
                polished, move fast, and help you win more clients.
              </p>
              <div className="bullets">
                <span className="chip">Strategy + execution</span>
                <span className="chip">Clean modern design</span>
                <span className="chip">Technical SEO baseline</span>
                <span className="chip">Performance focused</span>
              </div>
            </div>
            <div className="panel">
              <h3>What you get with NEXA</h3>
              <p>
                A clear process, production-ready delivery, and transparent collaboration. You focus on growth while
                we build the system behind it.
              </p>
              <p>
                <Link className="btn" href="/en/contact">
                  Book a call
                </Link>
              </p>
            </div>
          </div>
        </section>

        <section id="services-preview">
          <div className="container">
            <h2 className="section-title">Core services</h2>
            <p className="section-sub">Modular, scalable and business-driven.</p>
            <div className="grid-3">
              <article className="card">
                <h3>Branding</h3>
                <p>Visual identity systems and brand foundations so your business looks consistent everywhere.</p>
                <p>
                  <Link className="btn" href="/en/contact?service=branding">
                    Get branding quote
                  </Link>
                </p>
              </article>
              <article className="card">
                <h3>Web design &amp; dev</h3>
                <p>Fast, elegant websites with conversion-oriented layouts and strong technical foundations.</p>
                <p>
                  <Link className="btn" href="/en/contact?service=web-design">
                    Get web quote
                  </Link>
                </p>
              </article>
              <article className="card">
                <h3>Custom software</h3>
                <p>Internal tools, dashboards and automations tailored to your workflow and growth stage.</p>
                <p>
                  <Link className="btn" href="/en/contact?service=custom-software">
                    Get software quote
                  </Link>
                </p>
              </article>
              <article className="card">
                <h3>Landing+</h3>
                <p>
                  Fast launch on a NEXA subdomain with a built-in commerce option for sales, bookings, or menus.
                </p>
                <p>
                  <Link className="btn" href="/en/contact?service=landing-plus">
                    Get Landing+ quote
                  </Link>
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="gallery">
          <div className="container">
            <h2 className="section-title">Recent work</h2>
            <p className="section-sub">A visual snapshot of projects we have executed.</p>
            <div className="gallery">
              {gallery.map((item) => (
                <figure className="tile" key={item.src}>
                  <Image src={item.src} alt={item.alt} fill sizes="(max-width: 860px) 100vw, 50vw" />
                  <figcaption className="label">{item.label}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter locale="en" />
    </>
  );
}
