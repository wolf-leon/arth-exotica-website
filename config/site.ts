export type SiteConfig = typeof siteConfig;

const membershipEmail = "info@arthexotica.com";
const reservationEmail = "reservations@arthexotica.com";
const membershipWhatsApp = "+919850799851";
const membershipMessage =
  "Hello Team Arth Exotica,\n\nI have a query regarding your hotel memberships. Please send me your available options.\n\nThank you in advance.\n\n[Your Name]";
const stayMessage =
  "Hello Team Arth Exotica,\n\nI have a query regarding my stay at your hotel.\n\n[Add your query]\n\nThank you in advance.\n\n[Your Name]";

export const siteConfig = {
  name: "Arth Exotica | 4 Star Luxury Hotel in Colva, Goa",
  description:
    "Discover Arth Exotica, a four-star luxury property in the heart of Colva, South Goa, with 40 rooms, intercontinental dining, a food and bar venue, and warm Goan hospitality.",
  socialImage: "/hotel-front.jpeg",
  address: {
    locality: "4th Ward, Fatona, Near Colva Church, Colva",
    region: "South Goa, Goa, India",
    latitude: 15.2807125,
    longitude: 73.9198548,
    mapUrl:
      "https://www.google.com/maps/place/Arth+Exotica+Resort,+Colva+Goa/@15.2807125,73.9198548,883m/data=!3m1!1e3!4m17!1m10!3m9!1s0x3bbfb5657d1e3da5:0xd67585be462a7ae9!2sArth+Exotica+Resort,+Colva+Goa!8m2!3d15.2807125!4d73.9198548!10e5!14m1!1BCgIgARICGAI!16s%2Fg%2F11p23bgv0d!3m5!1s0x3bbfb5657d1e3da5:0xd67585be462a7ae9!8m2!3d15.2807125!4d73.9198548!16s%2Fg%2F11p23bgv0d?entry=ttu&g_ep=EgoyMDI2MTAxOS4wIKXMDSoASAFQAw%3D%3D",
    mapEmbedUrl:
      "https://www.google.com/maps?q=15.2807125,73.9198548&z=15&output=embed",
  },
  gstin: "11101119283HYUI",
  checkInTime: "2:00 PM",
  checkOutTime: "12:00 PM",
  hrEmail: "hr@arthexotica.com",
  membershipEmail,
  reservationEmail,
  membershipWhatsApp,
  membershipMessage,
  membershipEmailUrl: `mailto:${membershipEmail}?subject=${encodeURIComponent("Membership enquiry")}&body=${encodeURIComponent(membershipMessage)}`,
  membershipWhatsAppUrl: `https://wa.me/${membershipWhatsApp.replace("+", "")}?text=${encodeURIComponent(membershipMessage)}`,
  stayMessage,
  stayEmailUrl: `mailto:${reservationEmail}?subject=${encodeURIComponent("Stay enquiry")}&body=${encodeURIComponent(stayMessage)}`,
  stayWhatsAppUrl: `https://wa.me/${membershipWhatsApp.replace("+", "")}?text=${encodeURIComponent(stayMessage)}`,
  bookingUrl: "/contact",
  googleReviewsUrl:
    "https://www.google.com/maps/search/?api=1&query=Arth+Exotica+Fatona+Colva+Goa",
  socials: [
    {
      label: "Instagram",
      url: "https://www.instagram.com/arthexoticaresortgoa/",
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/arthexoticaresortgoa/",
    },
    { label: "YouTube", url: "https://www.youtube.com/@ArthExoticaResortGoa" },
  ],
  navItems: [
    { label: "Stay", href: "/stay" },
    { label: "Memberships", href: "/memberships" },
    { label: "Experiences", href: "/experiences" },
    { label: "Dining", href: "/dining" },
    { label: "Meetings & Events", href: "/meetings" },
    { label: "Contact", href: "/contact" },
  ],
  links: {
    instagram: "",
    facebook: "",
  },
};
