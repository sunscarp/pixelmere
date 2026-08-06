import Logo from "./Logo";

const links = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-footer text-cream">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 left-1/2 h-64 w-[48rem] -translate-x-1/2 rounded-full bg-teal/10 blur-3xl"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-teal/60 to-transparent"
      />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-3 md:items-start">
          <div className="md:col-span-2">
            <a href="#top" className="text-cream transition-opacity hover:opacity-80">
              <Logo />
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/70">
              We build websites that work as hard as you do. Web design, development,
              e-commerce, and ongoing support — from Pune, for clients across India
              and Europe.
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="text-sm font-semibold uppercase tracking-widest text-teal">
              Explore
            </p>
            <ul className="mt-4 space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-cream/80 transition-colors hover:text-teal"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-cream/10 pt-8 text-sm text-cream/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Pixelmere. All rights reserved.</p>
          <p className="flex flex-wrap items-center gap-x-2">
            <a
              href="tel:+918007524042"
              className="transition-colors hover:text-teal"
            >
              +91 80075 24042
            </a>
            <span className="mx-2 text-cream/40">·</span>
            <a
              href="mailto:hello@pixelmere.site"
              className="transition-colors hover:text-teal"
            >
              hello@pixelmere.site
            </a>
            <span className="mx-2 text-cream/40">·</span>
            <a
              href="https://www.instagram.com/pixelmere.site/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pixelmere on Instagram (opens in a new tab)"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-teal"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              @pixelmere.site
            </a>
          </p>
        </div>
      </div>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-8 left-0 select-none whitespace-nowrap text-[19vw] font-semibold leading-none tracking-tight text-cream/[0.04]"
      >
        pixelmere
      </span>
    </footer>
  );
}
