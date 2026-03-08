import type { Metadata } from "next";
import { Figtree, Space_Grotesk } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap"
});

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
      <body className={`${figtree.variable} ${spaceGrotesk.variable}`}>{children}</body>
    </html>
  );
}
