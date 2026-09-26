import DefaultLayout from "@/layouts/default";
import { PageHero } from "@/components/page-blocks";

export default function PrivacyPage() {
  return (
    <DefaultLayout>
      <PageHero
        accent="policy."
        description="A clear note about privacy on the Arth Exotica website."
        eyebrow="Your information"
        image="/hotel-interior.jpg"
        title="Privacy"
      />
      <article className="privacy-content section-wrap">
        <p className="privacy-updated">Last updated: September 2026</p>
        <h2>About this website</h2>
        <p>
          This website introduces Arth Exotica and its accommodation, dining and
          event offerings. Booking takes place through an external hotel booking
          engine. Contact details will be published only after they are verified
          by the hotel.
        </p>
        <h2>Information you choose to share</h2>
        <p>
          If you contact the hotel using contact information published on this
          site, the hotel may use the information you provide to respond to your
          request or manage your stay. Please avoid sending sensitive personal
          information unless it is necessary for your enquiry.
        </p>
        <h2>Cookies and analytics</h2>
        <p>
          This site may be hosted by third-party infrastructure providers that
          process basic technical information needed to deliver and secure the
          website. No analytics or advertising tools are intentionally
          configured on this site. The external booking engine and embedded map
          may process information under their own privacy notices. Review this
          statement if tracking or marketing services are added.
        </p>
        <h2>Your choices</h2>
        <p>
          For questions about how information shared directly with the hotel is
          handled, contact the hotel using its verified contact details once
          published. The hotel should replace this draft with its approved
          privacy notice and contact information before launch.
        </p>
        <p className="privacy-draft">
          This page is a website draft and is not legal advice. The hotel should
          review and approve it before publication.
        </p>
      </article>
    </DefaultLayout>
  );
}
