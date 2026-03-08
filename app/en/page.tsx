import type { Metadata } from "next";
import { HomeExperience } from "@/components/home-experience";

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

export default function EnHomePage() {
  return <HomeExperience locale="en" />;
}
