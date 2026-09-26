export type SiteConfig = typeof siteConfig;

const membershipEmail = "info@arthexotica.com";
const membershipWhatsApp = "+918010195183";
const membershipMessage =
  "Hello Team Arth Exotica,\n\nI have a query regarding your hotel memberships. Please send me your available options.\n\nThank you in advance.\n\n[Your Name]";
const stayMessage =
  "Hello Team Arth Exotica,\n\nI have a query regarding my stay at your hotel.\n\n[Add your query]\n\nThank you in advance.\n\n[Your Name]";

export const siteConfig = {
  name: "Arth Exotica | 4 Star Luxury Hotel in Colva, Goa",
  description:
    "Discover Arth Exotica, a four-star luxury property in the heart of Colva, South Goa, with 40 rooms, intercontinental dining, a food and bar venue, and warm Goan hospitality.",
  socialImage: "/hotel-front.jpg",
  address: {
    locality: "Fatona, Colva",
    region: "South Goa, Goa, India",
    latitude: 15.280976600036865,
    longitude: 73.9203553534262,
    mapUrl: "https://www.google.com/maps?q=15.280976600036865,73.9203553534262",
    mapEmbedUrl:
      "https://www.google.com/maps?q=15.280976600036865,73.9203553534262&output=embed",
  },
  gstin: "11101119283HYUI",
  checkInTime: "2:00 PM",
  checkOutTime: "12:00 PM",
  hrEmail: "hr@arth-exotica.example",
  membershipEmail,
  membershipWhatsApp,
  membershipMessage,
  membershipEmailUrl: `mailto:${membershipEmail}?subject=${encodeURIComponent("Membership enquiry")}&body=${encodeURIComponent(membershipMessage)}`,
  membershipWhatsAppUrl: `https://wa.me/${membershipWhatsApp.replace("+", "")}?text=${encodeURIComponent(membershipMessage)}`,
  stayMessage,
  stayEmailUrl: `mailto:${membershipEmail}?subject=${encodeURIComponent("Stay enquiry")}&body=${encodeURIComponent(stayMessage)}`,
  stayWhatsAppUrl: `https://wa.me/${membershipWhatsApp.replace("+", "")}?text=${encodeURIComponent(stayMessage)}`,
  bookingUrl: "https://booking.example.com/arth-exotica",
  googleReviewsUrl:
    "https://www.google.com/maps/search/?api=1&query=Arth+Exotica+Fatona+Colva+Goa",
  socials: [
    { label: "Instagram", url: "https://www.instagram.com/arth.exotica/" },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/company/arth-exotica/",
    },
    { label: "YouTube", url: "https://www.youtube.com/@arth-exotica" },
    { label: "Facebook", url: "https://www.facebook.com/arth.exotica/" },
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
