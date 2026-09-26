import DefaultLayout from "@/layouts/default";
import { PageHero } from "@/components/page-blocks";

export default function CookiePolicyPage() {
  return (
    <DefaultLayout>
      <PageHero
        accent="policy."
        description="How cookies and similar technologies may be used on this website."
        eyebrow="Your privacy choices"
        image="/hotel-interior-2.jpg"
        title="Cookie"
      />
      <article className="privacy-content section-wrap">
        <p className="privacy-updated">Last updated: September 2026</p>
        <h2>What cookies are</h2>
        <p>
          Cookies are small files stored by a website in your browser. Similar
          technologies, such as local storage and pixels, can also remember
          choices or help a service work.
        </p>
        <h2>How this website uses them</h2>
        <p>
          This website does not currently intentionally set analytics or
          advertising cookies. Hosting, security, the external booking engine
          and embedded maps may use technologies under their providers&apos; own
          policies. The Google Maps embed loads on the Contact page and may
          allow Google to receive technical data when that page is viewed.
        </p>
        <h2>Your choices and consent</h2>
        <p>
          You can manage or delete cookies through your browser settings.
          Blocking cookies may affect embedded maps or booking functionality.
          Cookie consent requirements vary by visitor location and the
          technologies in use. This site does not currently have a consent
          banner; the hotel should assess whether one is required for its
          markets and configure consent controls before adding optional tracking
          or marketing tools.
        </p>
        <h2>India and international privacy rules</h2>
        <p>
          This notice is intended to be read alongside the Privacy Policy and
          applicable requirements, including India’s Digital Personal Data
          Protection Act, 2023 and rules in force, and applicable international
          or regional e-privacy and data-protection requirements. Requirements
          depend on where visitors are located, what tools are deployed, and how
          personal data is processed.
        </p>
        <h2>Third-party services</h2>
        <p>
          Google Maps and the hotel’s booking engine are external services. When
          you use them, their providers may process information under their own
          cookie and privacy policies. Please review those policies on the
          relevant service.
        </p>
        <h2>Updates and questions</h2>
        <p>
          This policy should be updated when the site’s technology changes. The
          hotel should publish verified contact details here and in the Privacy
          Policy so visitors can submit questions or requests.
        </p>
        <p className="privacy-draft">
          This is a website draft, not legal advice or a compliance
          certification. Have the hotel’s privacy representative or legal
          adviser review it against the actual hosting, map, booking and
          analytics configuration before publication.
        </p>
      </article>
    </DefaultLayout>
  );
}
