import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-line bg-canvasAlt">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-14 md:py-20 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <Link href="/" className="font-display text-2xl text-ink">
            Coiffed<span className="text-cocoa flourish"> Chaos</span>
            <span className="align-top text-[0.5em] text-cocoa ml-0.5">®</span>
          </Link>
          <p className="mt-4 text-muted max-w-prose2 leading-relaxed">
            Black hair education, product guidance, and styling rooted in
            decades of experience. Teaching women to understand and love
            their hair — not just outsource it.
          </p>
          <p className="mt-6 text-sm text-muted">
            Detroit, Michigan&nbsp;&nbsp;·&nbsp;&nbsp;48221
          </p>
        </div>

        <div className="md:col-span-3">
          <h3 className="font-display text-sm uppercase tracking-wider2 text-cocoa">
            Explore
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {[
              ['Home', '/'],
              ['Hair Education', '/education'],
              ['Shop', '/shop'],
              ['About Ava', '/about'],
              ['Gallery', '/gallery'],
              ['Services', '/services'],
              ['Contact', '/contact'],
            ].map(([label, href]) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-muted hover:text-ink transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <h3 className="font-display text-sm uppercase tracking-wider2 text-cocoa">
            Connect
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <a
                href="https://www.instagram.com/coiffedchaos"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-ink transition-colors"
              >
                Instagram &nbsp;↗
              </a>
            </li>
            <li>
              <a
                href="https://www.tiktok.com/@coiffedchaos"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-ink transition-colors"
              >
                TikTok &nbsp;↗
              </a>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-muted hover:text-ink transition-colors"
              >
                Contact →
              </Link>
            </li>
          </ul>

          <div className="mt-8 p-5 bg-cream border border-line rounded-2xl">
            <p className="font-display text-base text-ink">
              Hair Education Is Coming
            </p>
            <p className="text-sm text-muted mt-1">
              Join the list for upcoming classes from Ava.
            </p>
            <Link
              href="/education#waitlist"
              className="text-sm text-cocoa hover:text-ink underline underline-offset-4 mt-3 inline-block"
            >
              Join the list →
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-6 flex flex-col md:flex-row gap-3 md:gap-0 justify-between text-xs text-muted">
          <p>© {year} Coiffed Chaos. All rights reserved.</p>
          <p>Built with love in Detroit.</p>
        </div>
      </div>
    </footer>
  );
}
