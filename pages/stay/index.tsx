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
            <span>Goa, at your pace</span>
          </div>
          <a
            className="text-link"
            href={siteConfig.bookingUrl}
            rel="noreferrer"
            target="_blank"
          >
            Book your stay <span aria-hidden="true">↗</span>
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
        <div className="section-wrap feature-list">
          <div>
            <span>01</span>
            <h3>Deluxe</h3>
            <p>
              A comfortable base for couples and solo travellers. Ask us about
              occupancy, view and current inclusions.
            </p>
          </div>
          <div>
            <span>02</span>
            <h3>Premium</h3>
            <p>
              A little more room to settle in. We’ll confirm exact layout,
              capacity and facilities when you enquire.
            </p>
          </div>
          <div>
            <span>03</span>
            <h3>Room facilities</h3>
            <p>
              Bed, bedside lighting and seating are visible in the supplied room
              images. Please check with the hotel for the complete, current
              amenity list.
            </p>
          </div>
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
