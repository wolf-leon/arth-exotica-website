import Link from "next/link";

import { siteConfig } from "@/config/site";

export function PageHero({
  eyebrow,
  title,
  accent,
  description,
  image,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  description: string;
  image: string;
}) {
  return (
    <section className="page-hero">
      <img alt="" src={image} />
      <div className="page-hero-shade" />
      <div className="page-hero-copy">
        <p className="eyebrow">{eyebrow}</p>
        <h1>
          {title}
          {accent && (
            <>
              {" "}
              <em>{accent}</em>
            </>
          )}
        </h1>
        <p>{description}</p>
      </div>
    </section>
  );
}

export function EnquiryBand({
  title = "Let’s make it yours.",
  copy = "Share what you have in mind and our team can help with the details.",
}: {
  title?: string;
  copy?: string;
}) {
  return (
    <section className="enquiry-band">
      <div>
        <p className="eyebrow">Start a conversation</p>
        <h2>{title}</h2>
        <p>{copy}</p>
      </div>
      <Link className="button button-light" href="/contact">
        Make an enquiry <span aria-hidden="true">↗</span>
      </Link>
    </section>
  );
}

export function DetailRows({
  rows,
}: {
  rows: { label: string; value: string }[];
}) {
  return (
    <dl className="detail-rows">
      {rows.map((row) => (
        <div key={row.label}>
          <dt>{row.label}</dt>
          <dd>{row.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function LocationMap() {
  return (
    <section
      aria-labelledby="location-title"
      className="location-section section-wrap"
    >
      <div className="location-heading">
        <div>
          <p className="eyebrow dark-eyebrow">Find Arth Exotica</p>
          <h2 id="location-title">
            In the heart of
            <br />
            <em>South Goa.</em>
          </h2>
        </div>
        <a
          className="text-link"
          href={siteConfig.address.mapUrl}
          rel="noreferrer"
          target="_blank"
        >
          Open in Google Maps <span aria-hidden="true">↗</span>
        </a>
      </div>
      <iframe
        allowFullScreen
        className="location-map"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        src={siteConfig.address.mapEmbedUrl}
        title="Google Map showing Arth Exotica in Fatona, Colva"
      />
    </section>
  );
}
