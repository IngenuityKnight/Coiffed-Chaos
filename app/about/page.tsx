import type { Metadata } from 'next';
import Section from '@/components/Section';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Meet Ava Gardner | Coiffed Chaos',
  description:
    'Ava Gardner has spent nearly four decades helping women understand, restore, and love their hair. The story of Coiffed Chaos and the legacy of Raj’s Mind Body and Soul.',
};

export default function AboutPage() {
  return (
    <>
      <section className="pt-12 md:pt-20 pb-12">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <p className="text-xs uppercase tracking-wider2 text-cocoa font-medium mb-5">
                About
              </p>
              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl tracking-tightish text-ink leading-[1.02]">
                Meet{' '}
                <span className="flourish text-cocoa">Ava Gardner</span>.
              </h1>
              <p className="mt-6 font-display text-xl md:text-2xl text-muted leading-snug">
                37+ years behind the chair. A lifetime of Black hair wisdom.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-canvasAlt border border-line shadow-lift">
                <div className="absolute inset-0 bg-gradient-to-br from-cocoa/20 via-canvasAlt to-line/40" />
                <div className="absolute inset-0 grid place-items-center text-center px-6">
                  <div>
                    <p className="font-display text-cocoa/60 text-sm tracking-wider2 uppercase">
                      Replace with
                    </p>
                    <p className="font-display text-ink text-xl mt-2">
                      /public/images/ava.jpg
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section className="!pt-12 md:!pt-16">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-7 lg:col-start-2">
            <p className="text-base md:text-lg text-muted leading-relaxed">
              Ava Gardner has spent nearly four decades helping women
              understand, restore, and love their hair. Her work blends
              technical styling expertise with a deeper belief: hair is
              connected to identity, confidence, memory, and self-worth.
            </p>

            <div className="hairline my-12" aria-hidden="true" />

            <h2 className="font-display text-3xl md:text-4xl tracking-tightish text-ink leading-[1.1]">
              From Raj&rsquo;s Mind Body and Soul to Coiffed Chaos.
            </h2>
            <p className="mt-5 text-base md:text-lg text-muted leading-relaxed">
              Coiffed Chaos was born from the spirit of Raj&rsquo;s Mind
              Body and Soul, a space rooted in beauty, care, and community.
              Today, the brand carries that legacy forward through salon
              services, education, storytelling, and product guidance.
            </p>

            <div className="hairline my-12" aria-hidden="true" />

            <h2 className="font-display text-3xl md:text-4xl tracking-tightish text-ink leading-[1.1]">
              More than styling.
            </h2>
            <p className="mt-5 text-base md:text-lg text-muted leading-relaxed">
              For Ava, hair is not just about a finished look. It is about
              how a woman feels when she sees herself clearly, confidently,
              and with care.
            </p>
          </div>
        </div>
      </Section>

      <CTASection
        eyebrow="Work with Ava"
        title="Begin with a conversation."
        copy="Whether you are recovering from damage, transitioning, or simply ready for a stylist who listens — reach out on Instagram or the contact page."
        primaryCta={{ label: 'Get in Touch', href: '/contact' }}
        secondaryCta={{ label: 'See services', href: '/services' }}
      />
    </>
  );
}
