import Link from "next/link";
import { Fragment } from "react";

type SiteFooterProps = {
  locale: "es" | "en";
};

export function SiteFooter({ locale }: SiteFooterProps) {
  const isEs = locale === "es";
  const legalLinks = isEs
    ? [
        { href: "/privacy-policy", label: "Privacy Policy" },
        { href: "/terms-and-conditions", label: "Terms and Conditions" },
        { href: "/imprint", label: "Imprint" }
      ]
    : [
        { href: "/en/privacy-policy", label: "Privacy Policy" },
        { href: "/en/terms-and-conditions", label: "Terms and Conditions" },
        { href: "/en/imprint", label: "Imprint" }
      ];

  return (
    <footer>
      <div className="container footer-inner">
        <div>
          © {new Date().getFullYear()} NEXA. {isEs ? "Todos los derechos reservados." : "All rights reserved."}
        </div>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Link
            href="https://www.instagram.com/nexastudio_co?igsh=bXZnNjF3cXYzYmUy&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </Link>
          <span>·</span>
          <Link href="mailto:hola@nexa.studio">hola@nexa.studio</Link>
          {legalLinks.map((item) => (
            <Fragment key={item.href}>
              <span>·</span>
              <Link href={item.href}>{item.label}</Link>
            </Fragment>
          ))}
        </div>
      </div>
    </footer>
  );
}
