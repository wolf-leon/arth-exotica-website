import DefaultLayout from "@/layouts/default";
import { EnquiryBand, PageHero } from "@/components/page-blocks";

export default function AboutPage() {
  return (
    <DefaultLayout>
      <PageHero
        accent="more considered."
        description="Arth Exotica is a welcoming hotel in Fatona, Colva, shaped around thoughtful comfort and the pleasures of taking your time."
        eyebrow="A four-star stay in South Goa"
        image="/hotel-interior-2.jpg"
        title="A little"
      />
      <section className="about-story section-wrap">
        <div className="section-label">Our place in Colva</div>
        <div>
          <h2>
            Warm welcomes.
            <br />
            <em>Easy days.</em>
          </h2>
          <p>
            Settle into a restful room, share a meal, take a poolside pause or
            bring your people together. Arth Exotica brings stays, dining and
            gathering spaces together in one South Goa address.
          </p>
          <p>
            We are building this website with the details guests need to plan
            confidently. Information that still needs confirmation, including
            direct contact details, current services and hotel policies, is
            clearly marked throughout.
          </p>
        </div>
      </section>
      <section className="about-image">
        <img
          alt="The illuminated Arth Exotica hotel exterior"
          src="/hotel-front.jpg"
        />
        <div>
          <p className="eyebrow">Fatona · Colva · Goa</p>
          <h2>
            Come for a stay.
            <br />
            <em>Leave with a story.</em>
          </h2>
        </div>
      </section>
      <EnquiryBand title="Make yourself at home." />
    </DefaultLayout>
  );
}
