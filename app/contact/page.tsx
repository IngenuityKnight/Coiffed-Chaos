import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Coiffed Chaos',
  description:
    'Get in touch with Ava Gardner of Coiffed Chaos in Detroit. Reach out on Instagram or by phone.',
};

export default function ContactPage() {
  return (
    <section className="pt-12 md:pt-20 pb-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-wider2 text-cocoa font-medium mb-5">
            Contact
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tightish text-ink leading-[1.05]">
            Get in{' '}
            <span className="flourish text-cocoa">Touch</span>.
          </h1>
          <p className="mt-6 text-base md:text-lg text-muted leading-relaxed">
            Have a question about your hair, a service, or anything else?
            Reach out directly — Ava loves hearing from you.
          </p>

          <div className="mt-12 space-y-8">
            <div>
              <p className="text-xs uppercase tracking-wider2 text-cocoa mb-2">
                Instagram
              </p>
              <a
                href="https://www.instagram.com/coiffedchaos"
                target="_blank"
                rel="noopener noreferrer"
                className="font-display text-xl text-ink hover:text-cocoa underline-offset-4 hover:underline transition-colors"
              >
                @coiffedchaos &nbsp;↗
              </a>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider2 text-cocoa mb-2">
                Location
              </p>
              <p className="font-display text-xl text-ink">
                Detroit, Michigan
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
