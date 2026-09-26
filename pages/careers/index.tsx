import DefaultLayout from "@/layouts/default";
import { EnquiryBand, PageHero } from "@/components/page-blocks";
import { siteConfig } from "@/config/site";

export default function CareersPage() {
  return (
    <DefaultLayout>
      <PageHero
        accent="things happen."
        description="Help create thoughtful stays, warm welcomes and memorable moments in South Goa."
        eyebrow="Careers at Arth Exotica"
        image="/hotel-interior-2.jpg"
        title="Make good"
      />
      <section className="careers-content section-wrap">
        <div>
          <p className="eyebrow dark-eyebrow">Work with us</p>
          <h2>
            Bring your
            <br />
            <em>hospitality to life.</em>
          </h2>
        </div>
        <div className="careers-copy">
          <p>
            We welcome people who care about the details and enjoy making guests
            feel at home. Email your resume to the Arth Exotica HR team:
          </p>
          <p className="careers-email">
            HR email{" "}
            <a href={`mailto:${siteConfig.hrEmail}`}>{siteConfig.hrEmail}</a>
          </p>
          <p>
            You can also look for current openings through these job platforms:
          </p>
          <div className="career-searches">
            <a
              href="https://www.indeed.com/jobs?q=Arth+Exotica+Goa"
              rel="noreferrer"
              target="_blank"
            >
              Search Indeed <span aria-hidden="true">↗</span>
            </a>
            <a
              href="https://www.linkedin.com/jobs/search/?keywords=Arth%20Exotica%20Goa"
              rel="noreferrer"
              target="_blank"
            >
              Search LinkedIn <span aria-hidden="true">↗</span>
            </a>
          </div>
          <p className="careers-note">
            Please include the role you are interested in and your contact
            details. Never send original identity or financial documents with an
            initial application.
          </p>
        </div>
      </section>
      <EnquiryBand
        copy="We look forward to hearing from you."
        title="Hospitality starts with people."
      />
    </DefaultLayout>
  );
}
