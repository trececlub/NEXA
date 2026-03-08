import type { Metadata } from "next";
import DarkVeil from "@/components/dark-veil";
import { NoWidows } from "@/components/no-widows";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nexacreativestudio.com"),
  title: {
    default: "NEXA",
    template: "%s | NEXA"
  },
  description:
    "NEXA diseña y construye experiencias digitales premium: branding, desarrollo web y software a medida.",
  openGraph: {
    type: "website",
    siteName: "NEXA",
    title: "NEXA",
    description:
      "NEXA diseña y construye experiencias digitales premium: branding, desarrollo web y software a medida."
  },
  twitter: {
    card: "summary_large_image",
    title: "NEXA",
    description:
      "NEXA diseña y construye experiencias digitales premium: branding, desarrollo web y software a medida."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <NoWidows />
        <div className="veil-layer" aria-hidden="true">
          <DarkVeil />
        </div>
        <div className="site-shell">{children}</div>
      </body>
    </html>
  );
}
