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
    <footer className="bg-footer text-cream">
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
          <p>
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
          </p>
        </div>
      </div>
    </footer>
  );
}
