const footerLinks = [
  { label: "HOME", href: "/#home" },
  { label: "SERVICES", href: "/services" },
  { label: "SALON", href: "/salon" },
  { label: "GALLERY", href: "/gallery" },
  { label: "ACADEMY", href: "/academy" },
];

export default function Footer() {
  return (
    <footer className="bg-[#000000] px-6 pb-7 pt-12 text-white sm:px-10 sm:pt-16 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-8 border-b border-white/15 pb-10 text-center md:flex-row md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <a href="#home" aria-label="The Glam Salon home">
              <img
                src="/images/logo.png"
                alt="The Glam Salon"
                className="h-16 w-auto object-contain"
              />
            </a>
            <p className="mt-4 font-heading text-xl italic text-[#F2E6CB]">
              Expert care. Personalised experiences.
            </p>

            <div className="mt-5 flex items-center gap-4">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/theglamsalon_preetvihar/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white/70 transition-colors duration-300 hover:text-[#E7C988]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="18" cy="6" r="0.8" fill="currentColor" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/theglamsalon.preetvihar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-white/70 transition-colors duration-300 hover:text-[#E7C988]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M13.5 21v-8.2h2.8l.4-3.2h-3.2V7.5c0-.9.3-1.5 1.6-1.5h1.7V3.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.3H7.3v3.2h2.8V21h3.4Z" />
              </svg>
            </a>
          </div>
          </div>

          <nav
            aria-label="Footer navigation"
            className="flex w-full flex-nowrap items-center justify-center gap-x-3 whitespace-nowrap sm:gap-x-6 md:w-auto md:max-w-md md:flex-wrap md:justify-end"
          >
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="shrink-0 text-[9px] font-medium tracking-[0.06em] text-white/70 transition hover:text-[#E7C988] sm:text-[10px] sm:tracking-[0.14em]"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-[10px] tracking-wide text-white/50">
            © 2026 The Glam Salon. All rights reserved.
          </p>

          <a
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
              className="text-[10px] font-semibold tracking-[0.15em] text-[#E7C988] transition hover:text-white"
            >
              BACK TO TOP ↑
            </a>
        </div>
      </div>
    </footer>
  );
}
