import Link from "next/link";

type SiteFooterProps = {
  locale: "es" | "en";
};

export function SiteFooter({ locale }: SiteFooterProps) {
  const isEs = locale === "es";

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
          <span>·</span>
          <Link href="https://wa.me/573159836331" target="_blank" rel="noopener noreferrer">
            WhatsApp
          </Link>
        </div>
      </div>
    </footer>
  );
}
