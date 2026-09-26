import DefaultLayout from "@/layouts/default";
import { EnquiryBand, PageHero } from "@/components/page-blocks";

export default function MeetingsPage() {
  return (
    <DefaultLayout>
      <PageHero
        accent="people together."
        description="A considered setting for focused work, memorable occasions and everything worth celebrating."
        eyebrow="Meetings, conferences & celebrations"
        image="/meeting-room-1.jpg"
        title="Bring your"
      />
      <section className="meeting-intro section-wrap">
        <div className="section-label">Gather at Arth Exotica</div>
        <div>
          <h2>
            Good ideas
            <br />
            <em>need good rooms.</em>
          </h2>
          <p>
            Plan a business meeting, a conference or a private celebration in
            Colva. Let us know your format, guest count and preferred dates; the
            team can confirm the right space and what is available.
          </p>
        </div>
      </section>
      <section className="meeting-photo-row">
        <img
          alt="Meeting room arranged for a gathering"
          src="/meeting-room-1.jpg"
        />
        <div className="meeting-photo-note">
          <p className="eyebrow dark-eyebrow">Gather well</p>
          <h2>
            From agenda
            <br />
            <em>to occasion.</em>
          </h2>
        </div>
        <img
          alt="Terrace setting for an event"
          src="/hotel-terrace-event.jpg"
        />
      </section>
      <section className="pale-section">
        <div className="section-wrap split-heading">
          <div>
            <p className="eyebrow dark-eyebrow">Business & celebrations</p>
            <h2>
              Everything in
              <br />
              <em>its right place.</em>
            </h2>
          </div>
          <div>
            <p>
              We can help shape a smooth event from the first enquiry. Venue
              capacity, conference equipment, catering, room blocks and event
              packages depend on your requirements and require direct
              confirmation.
            </p>
          </div>
        </div>
        <div className="section-wrap event-services">
          <div>
            <span>01</span>
            <h3>Meetings</h3>
            <p>Board meetings, team sessions and business get-togethers.</p>
          </div>
          <div>
            <span>02</span>
            <h3>Conferences</h3>
            <p>
              Ask about room layouts, presentation equipment and refreshment
              options.
            </p>
          </div>
          <div>
            <span>03</span>
            <h3>Corporate stays</h3>
            <p>
              Enquire about group accommodation and tailored corporate
              arrangements.
            </p>
          </div>
        </div>
      </section>
      <EnquiryBand
        copy="Share your dates, guest count and event style. We’ll help you explore the possibilities."
        title="Tell us what you’re bringing together."
      />
    </DefaultLayout>
  );
}
