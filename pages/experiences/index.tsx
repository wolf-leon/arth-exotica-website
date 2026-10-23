import Link from "next/link";

import DefaultLayout from "@/layouts/default";
import { DetailRows, EnquiryBand, PageHero } from "@/components/page-blocks";
import { siteConfig } from "@/config/site";

export default function ExperiencesPage() {
  return (
    <DefaultLayout>
      <PageHero
        accent="balance."
        description="A restorative pause, an unhurried meal or a celebration with your favourite people. Make the stay your own."
        eyebrow="The Arth Exotica experience"
        image="/pool.jpg"
        title="Find your"
      />
      <section className="experience-intro section-wrap">
        <div className="section-label">A stay shaped around you</div>
        <div>
          <h2>
            Ease into the
            <br />
            <em>good stuff.</em>
          </h2>
          <p>
            Take a refreshing dip, enjoy a change of scene or simply leave the
            day unscheduled. Explore the hotel’s spaces and ask our team which
            experiences are available during your dates.
          </p>
        </div>
      </section>
      <section className="experience-feature" id="amenities">
        <div className="experience-feature-image">
          <img alt="Swimming pool at Arth Exotica" src="/pool.jpg" />
        </div>
        <div className="experience-feature-copy">
          <p className="eyebrow dark-eyebrow">A moment to yourself</p>
          <h2>
            Wellness,
            <br />
            <em>your way.</em>
          </h2>
          <p>
            Pause by the pool, make time for a slower morning and let South Goa
            set the rhythm. Spa treatments, fitness facilities and wellness
            services have not yet been confirmed; please ask the team about
            current offerings.
          </p>
          <Link className="text-link" href="/contact">
            Ask about wellness
          </Link>
        </div>
      </section>
      <section className="pale-section">
        <div className="section-wrap split-heading">
          <div>
            <p className="eyebrow dark-eyebrow">At a glance</p>
            <h2>
              Hotel amenities
              <br />
              <em>& facilities.</em>
            </h2>
          </div>
          <div>
            <p>
              The property imagery features a swimming pool, guest rooms,
              restaurant seating, meeting space and an event terrace. Confirm
              opening hours, access and any fees directly with the hotel.
            </p>
          </div>
        </div>
        <div className="section-wrap feature-list">
          <div>
            <span>01</span>
            <h3>Pool</h3>
            <p>
              A pool is featured in the supplied property imagery. Ask about
              operating hours, access and child supervision requirements.
            </p>
          </div>
          <div>
            <span>02</span>
            <h3>Dining</h3>
            <p>
              Restaurant dining is pictured on site. Menu, service hours,
              dietary options and room service availability need confirmation.
            </p>
          </div>
          <div>
            <span>03</span>
            <h3>Gatherings</h3>
            <p>
              Meeting and event spaces are pictured. Layouts, capacity, AV
              equipment and availability are confirmed on enquiry.
            </p>
          </div>
        </div>
      </section>
      <section className="guest-info section-wrap" id="guest-information">
        <div>
          <p className="eyebrow dark-eyebrow">Memberships</p>
          <h2>
            A little more
            <br />
            <em>to come back to.</em>
          </h2>
          <p className="muted-copy">
            Membership plans and privileges are managed by the hotel. Contact
            hotel management for current membership details.
          </p>
          <Link className="text-link" href="/memberships">
            Explore memberships
          </Link>
        </div>
        <div className="membership-note">
          <p className="eyebrow dark-eyebrow">Guest information</p>
          <DetailRows
            rows={[
              {
                label: "Check-in / check-out",
                value: "Confirm times with the hotel before arrival.",
              },
              {
                label: "Pickup & drop",
                value:
                  "Available. Please enquire about availability, routes and charges.",
              },
              { label: "Pets", value: "Pets are not permitted at the hotel." },
              { label: "GSTIN", value: siteConfig.gstin },
            ]}
          />
        </div>
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
      <EnquiryBand title="Make room for a reset." />
    </DefaultLayout>
  );
}
