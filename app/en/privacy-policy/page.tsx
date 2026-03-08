import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "NEXA | Privacy Policy",
  description: "NEXA Creative Studio privacy policy for website usage and contact forms.",
  alternates: {
    canonical: "/en/privacy-policy",
    languages: {
      es: "/privacy-policy",
      en: "/en/privacy-policy"
    }
  }
};

export default function EnPrivacyPolicyPage() {
  return (
    <LegalPage
      locale="en"
      title="Privacy Policy"
      subtitle="How we process your data when you browse, contact us or request a proposal."
      updatedLabel="Last updated"
      updatedDate="March 8, 2026"
      sections={[
        {
          title: "1. Data controller",
          body: (
            <>
              <p>
                This website is operated by <strong>NEXA Creative Studio</strong>. For privacy matters, contact{" "}
                <strong>hola@nexa.studio</strong>.
              </p>
              <p>
                NEXA acts as the data controller for information collected through forms, email and contact channels on
                this website.
              </p>
            </>
          )
        },
        {
          title: "2. Data we collect",
          body: (
            <>
              <p>We may collect your name, email, phone number, company, requested service type and message.</p>
              <p>
                Technical browsing data may also be generated, including IP address, device/browser type and usage
                events for analytics and performance.
              </p>
            </>
          )
        },
        {
          title: "3. Why we use your data",
          body: (
            <>
              <p>We process data to:</p>
              <ul className="legal-list">
                <li>Answer inquiries and prepare commercial proposals.</li>
                <li>Manage pre-contract and contract-related communications when applicable.</li>
                <li>Improve website performance, user experience and security.</li>
              </ul>
            </>
          )
        },
        {
          title: "4. Retention and security",
          body: (
            <>
              <p>
                Data is retained only for as long as needed to fulfill its purpose or comply with legal and accounting
                obligations.
              </p>
              <p>
                We apply reasonable technical and organizational safeguards to protect confidentiality and integrity.
              </p>
            </>
          )
        },
        {
          title: "5. Third-party services",
          body: (
            <>
              <p>
                We may rely on third-party providers for hosting, infrastructure, analytics and form processing. Those
                providers process data under their own terms and privacy policies.
              </p>
              <p>NEXA works with providers that offer appropriate security and compliance standards.</p>
            </>
          )
        },
        {
          title: "6. Your rights",
          body: (
            <>
              <p>
                You may request access, correction, update or deletion of your personal data by writing to{" "}
                <strong>hola@nexa.studio</strong>.
              </p>
              <p>
                You may also request restrictions on data usage or withdraw consent when processing is consent-based.
              </p>
            </>
          )
        },
        {
          title: "7. Cookies and tracking",
          body: (
            <>
              <p>
                We may use technical and analytics cookies to remember preferences, measure traffic and improve
                performance.
              </p>
              <p>
                You can manage or block cookies from your browser settings, although some site features may be
                affected.
              </p>
            </>
          )
        },
        {
          title: "8. Data processing in NEXA Metrics",
          body: (
            <>
              <p>
                If you activate NEXA Metrics, we may process commercial performance data (events, traffic sources,
                conversions and behavioral usage signals) to provide analysis and optimization recommendations.
              </p>
              <p>
                The client is responsible for implementing proper legal notices and consent mechanisms on their own
                website when cookies or tracking technologies are used for end users.
              </p>
            </>
          )
        },
        {
          title: "9. Policy updates",
          body: (
            <p>
              We may update this policy due to legal, technical or service changes. The current version is always the
              one published on this page.
            </p>
          )
        }
      ]}
    />
  );
}
