import type { Metadata } from "next";
import { HomeExperience } from "@/components/home-experience";

export const metadata: Metadata = {
  title: "NEXA | Agencia de diseño y desarrollo web",
  description:
    "NEXA diseña y construye sitios web y software para negocios que quieren crecer con una presencia digital premium.",
  alternates: {
    canonical: "/",
    languages: {
      es: "/",
      en: "/en"
    }
  }
};

export default function HomePage() {
  return <HomeExperience locale="es" />;
}
