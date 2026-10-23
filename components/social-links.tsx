import { siteConfig } from "@/config/site";

function SocialMark({ label }: { label: string }) {
  const common = {
    "aria-hidden": true as const,
    viewBox: "0 0 24 24",
    className: "social-mark",
  };

  if (label === "Instagram") {
    return (
      <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect height="17" rx="5" width="17" x="3.5" y="3.5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.8" fill="currentColor" r=".9" stroke="none" />
      </svg>
    );
  }
  if (label === "LinkedIn") {
    return (
      <svg {...common} fill="currentColor" viewBox="0 0 24 24">
        <path d="M5.4 8.6a1.9 1.9 0 1 0 0-3.8 1.9 1.9 0 0 0 0 3.8ZM3.8 10h3.2v10H3.8zM9 10h3.1v1.4h.1a3.4 3.4 0 0 1 3.1-1.7c3.3 0 3.9 2.2 3.9 5V20H16v-4.7c0-1.1 0-2.6-1.6-2.6s-1.9 1.2-1.9 2.5V20H9z" />
      </svg>
    );
  }
  if (label === "YouTube") {
    return (
      <svg {...common} fill="currentColor">
        <path d="M23 7.1a3 3 0 0 0-2.1-2.2C19 4.4 12 4.4 12 4.4s-7 0-8.9.5A3 3 0 0 0 1 7.1 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.9 3 3 0 0 0 2.1 2.2c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.2 31 31 0 0 0 .5-4.9 31 31 0 0 0-.5-4.9ZM9.8 15.8V8.2l6.4 3.8z" />
      </svg>
    );
  }

  return (
    <svg {...common} fill="currentColor">
      <path d="M13.4 21v-8.2h2.8l.4-3.2h-3.2v-2c0-.9.3-1.6 1.6-1.6h1.7V3.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.3H7.2v3.2H10V21z" />
    </svg>
  );
}

export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`social-links ${className}`.trim()}>
      {siteConfig.socials.map((social) => (
        <a
          key={social.label}
          href={social.url}
          rel="noreferrer"
          target="_blank"
        >
          <SocialMark label={social.label} />
          <span>{social.label}</span>
        </a>
      ))}
    </div>
  );
}
