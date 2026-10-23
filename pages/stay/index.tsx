import DefaultLayout from "@/layouts/default";
import { DetailRows, EnquiryBand, PageHero } from "@/components/page-blocks";
import { siteConfig } from "@/config/site";

export default function StayPage() {
  return (
    <DefaultLayout>
      <PageHero
        accent="unwind."
        description="Find your own pace in a calm, considered space made for restorative nights and slow mornings."
        eyebrow="Rooms & suites"
        image="/deluxe-room.jpg"
        title="Room to"
      />
      <section className="room-intro section-wrap">
        <div className="room-photo">
          <img
            alt="Guest room with a king bed and lounge seating"
            src="/premium-deluxe-room.jpg"
          />
        </div>
        <div className="room-copy">
          <p className="eyebrow dark-eyebrow">Stay your way</p>
          <h2>
            Deluxe &<br />
            <em>Premium rooms</em>
          </h2>
          <p>
            Choose a welcoming Deluxe room or make space for a little more
            comfort in a Premium room. Room layouts, views and bedding
            configurations can vary, so let us know what matters to you when you
            book.
          </p>
          <div className="room-tags">
            <span>40 rooms</span>
            <span>Thoughtful comforts</span>
            <span>Restful interiors</span>
            <span>Goa, slow living</span>
          </div>
          <a className="text-link" href={siteConfig.bookingUrl}>
            Plan your stay
          </a>
        </div>
      </section>
      <section className="pale-section" id="room-facilities">
        <div className="section-wrap split-heading">
          <div>
            <p className="eyebrow dark-eyebrow">The room</p>
            <h2>
              Everyday comforts,
              <br />
              <em>beautifully considered.</em>
            </h2>
          </div>
          <div>
            <p>
              Our room photographs show restful bedding, bedside lighting and a
              comfortable seating area. For the current room inventory and
              accessible-room details, please confirm directly before booking.
            </p>
          </div>
        </div>

        <div className="section-wrap room-card-grid">
          <article className="room-card">
            <div className="room-card-media">
              <img alt="Deluxe room at Arth Exotica" src="/deluxe-room.jpg" />
            </div>
            <div className="room-card-body">
              <div className="room-card-header">
                <h3>Deluxe</h3>
                <span className="room-card-tag">Classic</span>
              </div>
              <p>
                A restful base for slow mornings, thoughtful downtime and easy
                city-to-coast living.
              </p>
              <ul>
                <li>King or twin bed options</li>
                <li>Private en-suite bathroom</li>
                <li>Air conditioning</li>
                <li>Complimentary Wi‑Fi</li>
                <li>Room service on request</li>
              </ul>
              <a
                className="button room-book-button"
                href={siteConfig.bookingUrl}
              >
                Book now
              </a>
            </div>
          </article>

          <article className="room-card room-card-featured">
            <div className="room-card-media">
              <img
                alt="Premium room at Arth Exotica"
                src="/premium-deluxe-room.jpg"
              />
            </div>
            <div className="room-card-body">
              <div className="room-card-header">
                <h3>Premium</h3>
                <span className="room-card-tag">Popular</span>
              </div>
              <p>
                Extra comfort and a more generous feel for guests who want room
                to stretch out and settle in.
              </p>
              <ul>
                <li>Spacious king bed setup</li>
                <li>Seating lounge area</li>
                <li>Premium bath amenities</li>
                <li>Smart TV + Wi‑Fi</li>
                <li>Soft lighting and curated interiors</li>
              </ul>
              <a
                className="button room-book-button"
                href={siteConfig.bookingUrl}
              >
                Book now
              </a>
            </div>
          </article>

          <article className="room-card">
            <div className="room-card-media">
              <img
                alt="Super Premium room at Arth Exotica"
                src="/super-premium.jpg"
              />
            </div>
            <div className="room-card-body">
              <div className="room-card-header">
                <h3>Super Premium</h3>
                <span className="room-card-tag">Signature</span>
              </div>
              <p>
                Our elevated option for longer stays, special occasions and more
                indulgent, polished comfort.
              </p>
              <ul>
                <li>Generous room footprint</li>
                <li>Luxury bedding and finishes</li>
                <li>Enhanced lounge and storage</li>
                <li>Premium bath and linen collection</li>
                <li>Priority assistance on request</li>
              </ul>
              <a
                className="button room-book-button"
                href={siteConfig.bookingUrl}
              >
                Book now
              </a>
            </div>
          </article>
        </div>
      </section>
      <section className="guest-info section-wrap" id="guest-information">
        <div>
          <p className="eyebrow dark-eyebrow">Before you arrive</p>
          <h2>Good to know.</h2>
        </div>
        <DetailRows
          rows={[
            { label: "Check-in", value: siteConfig.checkInTime },
            { label: "Check-out", value: siteConfig.checkOutTime },
            {
              label: "Hotel pickup / drop",
              value:
                "Available. Please enquire about availability, routes and charges.",
            },
            {
              label: "Pet policy",
              value: "Pets are not permitted at the hotel.",
            },
          ]}
        />
      </section>
      <section className="page-hotel-facts section-wrap">
        <div>
          <p className="eyebrow dark-eyebrow">Arth Exotica at a glance</p>
          <h2>
            Hotel
            <br />
            <em>information.</em>
          </h2>
        </div>
        <DetailRows
          rows={[
            { label: "Rooms", value: "40 rooms" },
            { label: "Dining", value: "1 food & bar venue" },
            { label: "GSTIN", value: siteConfig.gstin },
          ]}
        />
      </section>
      <EnquiryBand
        copy="Ask about room availability, rates, room features and the details that make a stay feel right."
        title="Your Goa stay starts here."
      />
    </DefaultLayout>
  );
}
