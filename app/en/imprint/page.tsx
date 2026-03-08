import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "NEXA | Imprint",
  description: "Legal and editorial information for the NEXA Creative Studio website.",
  alternates: {
    canonical: "/en/imprint",
    languages: {
      es: "/imprint",
      en: "/en/imprint"
    }
  }
};

export default function EnImprintPage() {
  return (
    <LegalPage
      locale="en"
      title="Imprint"
      subtitle="Legal and editorial website information."
      updatedLabel="Last updated"
      updatedDate="March 8, 2026"
      sections={[
        {
          title: "1. Website owner",
          body: (
            <>
              <p>
                <strong>NEXA Creative Studio</strong>
              </p>
              <p>Digital services focused on web design, branding, software and growth optimization.</p>
            </>
          )
        },
        {
          title: "2. Contact details",
          body: (
            <ul className="legal-list">
              <li>Email: hola@nexa.studio</li>
              <li>Website: nexacreativestudio.com</li>
              <li>Operating country: Colombia</li>
            </ul>
          )
        },
        {
          title: "3. Editorial responsibility",
          body: (
            <p>
              NEXA Creative Studio team. For legal notices or content reports, contact{" "}
              <strong>hola@nexa.studio</strong>.
            </p>
          )
        },
        {
          title: "4. Intellectual property notice",
          body: (
            <p>
              The website design, code, text, brand assets and visual resources are owned by NEXA or their respective
              rights holders and are protected by applicable law.
            </p>
          )
        },
        {
          title: "5. Liability disclaimer",
          body: (
            <p>
              NEXA reviews site content regularly but does not guarantee that all information is always complete,
              current or error-free. External links are provided for convenience only.
            </p>
          )
        }
      ]}
    />
  );
}
