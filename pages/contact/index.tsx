import Link from "next/link";

import DefaultLayout from "@/layouts/default";
import { DetailRows, LocationMap, PageHero } from "@/components/page-blocks";
import { EmailIcon, WhatsAppIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";
import { SocialLinks } from "@/components/social-links";

export default function ContactPage() {
  return (
    <DefaultLayout>
      <PageHero
        accent="hear from you."
        description="Planning a stay, a meal or a gathering? Reach out and we’ll help you find the right next step."
        eyebrow="Contact Arth Exotica"
        image="/hotel-front-2.jpg"
        title="We’d love to"
      />
      <section className="contact-layout section-wrap">
        <div className="contact-copy">
          <p className="eyebrow dark-eyebrow">Start planning</p>
          <h2>
            Let’s talk
            <br />
            <em>about Goa.</em>
          </h2>
          <p>
            Have a question about your stay? Send your enquiry directly to the
            hotel team. Your message will be prefilled; add your query and name
            before sending.
          </p>
          <div className="membership-contact-actions">
            <a className="button button-light" href={siteConfig.stayEmailUrl}>
              <EmailIcon /> {siteConfig.membershipEmail}{" "}
              <span aria-hidden="true">↗</span>
            </a>
            <a
              className="button button-whatsapp"
              href={siteConfig.stayWhatsAppUrl}
              rel="noreferrer"
              target="_blank"
            >
              <WhatsAppIcon /> {siteConfig.membershipWhatsApp}{" "}
              <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="contact-placeholder">
            <span>GSTIN</span>
            <b>{siteConfig.gstin}</b>
          </div>
          <div className="contact-socials">
            <p className="eyebrow dark-eyebrow">Find us on social</p>
            <SocialLinks />
          </div>
          <a
            className="button button-light review-button"
            href={siteConfig.googleReviewsUrl}
            rel="noreferrer"
            target="_blank"
          >
            Google Reviews <span aria-hidden="true">↗</span>
          </a>
          <Link className="button button-light review-button" href="/faqs">
            View FAQs <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="contact-details">
          <p className="eyebrow dark-eyebrow">Find us</p>
          <h3>Arth Exotica</h3>
          <p>
            {siteConfig.address.locality}
            <br />
            {siteConfig.address.region}
          </p>
          <DetailRows
            rows={[
              { label: "Rooms", value: "40 rooms" },
              { label: "Dining", value: "1 food & bar venue" },
              { label: "GSTIN", value: siteConfig.gstin },
              {
                label: "Hotel pickup / drop",
                value: "Please enquire about availability, routes and charges.",
              },
              {
                label: "Pet policy",
                value: "Pets are not permitted at the hotel.",
              },
            ]}
          />
          <a
            className="text-link"
            href={siteConfig.address.mapUrl}
            rel="noreferrer"
            target="_blank"
          >
            Open directions <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
      <LocationMap />
      <section className="contact-image">
        <img alt="Arth Exotica in Fatona, Colva" src="/hotel-full-view.jpg" />
        <div>
          <p className="eyebrow">A South Goa address</p>
          <h2>
            Find your way
            <br />
            <em>to Arth Exotica.</em>
          </h2>
        </div>
      </section>
    </DefaultLayout>
  );
}
