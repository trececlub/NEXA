import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "NEXA | Terms and Conditions",
  description: "Terms and conditions for using the NEXA website and contracting services.",
  alternates: {
    canonical: "/en/terms-and-conditions",
    languages: {
      es: "/terms-and-conditions",
      en: "/en/terms-and-conditions"
    }
  }
};

export default function EnTermsAndConditionsPage() {
  return (
    <LegalPage
      locale="en"
      title="Terms and Conditions"
      subtitle="Website use rules and general contracting terms for NEXA services."
      updatedLabel="Last updated"
      updatedDate="March 8, 2026"
      sections={[
        {
          title: "1. Acceptance and scope",
          body: (
            <>
              <p>
                By accessing this site or submitting an inquiry, you accept these terms. If you disagree, you should
                not use this website.
              </p>
              <p>
                These terms regulate website usage and informational interactions prior to any formal service contract.
              </p>
            </>
          )
        },
        {
          title: "2. Commercial information",
          body: (
            <>
              <p>
                Service descriptions and base prices are indicative and may vary depending on project scope, timeline,
                integrations and technical complexity.
              </p>
              <p>
                Every formal proposal from NEXA defines scope, deliverables, schedule, final pricing and payment
                terms.
              </p>
            </>
          )
        },
        {
          title: "3. Intellectual property",
          body: (
            <>
              <p>
                Website content, branding, design assets and proprietary materials are protected by intellectual
                property laws.
              </p>
              <p>Copying, redistribution or reuse without written authorization is not allowed.</p>
            </>
          )
        },
        {
          title: "4. Project terms and payments",
          body: (
            <>
              <p>
                Service execution requires proposal approval and compliance with the agreed payment conditions between
                both parties.
              </p>
              <p>
                Out-of-scope requests may be quoted as additional work and may impact timeline and total cost.
              </p>
            </>
          )
        },
        {
          title: "5. NEXA Metrics specific conditions",
          body: (
            <>
              <p>
                NEXA Metrics is a monthly service billed per active project in advance, under the scope defined in the
                accepted commercial proposal.
              </p>
              <p>
                The intro offer of <strong>COP $299,000/month</strong> applies for the first 3 months to new clients.
                After that period, the plan moves to <strong>COP $349,000/month</strong>, unless otherwise agreed in
                writing.
              </p>
              <p>
                The plan includes base implementation, dashboard and one monthly review. Out-of-scope services (full
                redesigns, custom development, paid media management) are quoted separately.
              </p>
            </>
          )
        },
        {
          title: "6. Liability and availability",
          body: (
            <>
              <p>
                NEXA does not guarantee uninterrupted website availability or complete absence of technical errors,
                though reasonable operational continuity efforts are made.
              </p>
              <p>
                Except where required by law, NEXA is not liable for indirect losses arising from website use or third
                party links.
              </p>
            </>
          )
        },
        {
          title: "7. External links",
          body: (
            <p>
              This website may include links to third-party services. NEXA does not control or assume responsibility
              for external content, availability or policies.
            </p>
          )
        },
        {
          title: "8. Governing law",
          body: (
            <>
              <p>
                These terms are interpreted under applicable Colombian law, unless otherwise stated in a specific
                signed contract.
              </p>
              <p>Any dispute should first be addressed through direct communication between the parties.</p>
            </>
          )
        },
        {
          title: "9. Legal contact",
          body: (
            <p>
              For legal inquiries regarding these terms, contact <strong>hola@nexa.studio</strong>.
            </p>
          )
        }
      ]}
    />
  );
}
