import Link from 'next/link';
import Button from '@/components/Button';
import Section from '@/components/Section';
import ServiceCard from '@/components/ServiceCard';
import ArticleCard from '@/components/ArticleCard';
import Testimonial from '@/components/Testimonial';
import CTASection from '@/components/CTASection';
import YouTubeShortsRow from '@/components/YouTubeShortsRow';
import { services } from '@/data/services';
import { articles } from '@/data/articles';

const SHORTS = ['Y9ImZVUH5qw'];

const homeServices = services.slice(0, 6);
const homeArticles = articles.slice(0, 3);

const trustPoints = [
  { value: '37+', label: 'Years of hair experience' },
  { value: 'Detroit', label: 'Roots and community' },
  { value: 'Black Hair', label: 'Care and expertise' },
  { value: 'Edu · Shop · Salon', label: 'A complete approach' },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 md:px-8 pt-10 md:pt-16 pb-16 md:pb-24">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-7 rise rise-1">
              <p className="text-xs uppercase tracking-wider2 text-cocoa font-medium mb-5">
                Detroit · Est. on legacy
              </p>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tightish text-ink leading-[1.02]">
                Healthy hair care, wisdom, and styling for women ready to{' '}
                <span className="flourish text-cocoa">love their hair</span>{' '}
                again.
              </h1>
              <p className="mt-6 md:mt-7 text-base md:text-lg text-muted leading-relaxed max-w-prose2">
                Coiffed Chaos blends decades of Black hair expertise with
                education, storytelling, and personalized care. Whether you
                need help restoring damaged hair, maintaining your style,
                choosing the right products, or reconnecting with your crown
                — Ava helps you find the next right step.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button href="/education" variant="primary">
                  Explore Hair Education
                </Button>
                <Button href="/shop" variant="secondary">
                  Shop Ava&rsquo;s Picks
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5 rise rise-2">
              <div className="relative aspect-[9/16] rounded-3xl overflow-hidden border border-line shadow-lift">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${SHORTS[0]}`}
                  title="Coiffed Chaos on YouTube"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        {/* TRUST STRIP */}
        <div className="border-y border-line bg-canvasAlt/60">
          <div className="mx-auto max-w-7xl px-5 md:px-8 py-8 md:py-10">
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 text-center">
              {trustPoints.map((p) => (
                <li key={p.label}>
                  <p className="font-display text-2xl md:text-3xl text-ink tracking-tightish">
                    {p.value}
                  </p>
                  <p className="text-xs md:text-sm text-muted mt-1">
                    {p.label}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL — pulled high so trust lands fast */}
      <Section className="!pt-16 md:!pt-20">
        <div className="max-w-4xl mx-auto">
          <Testimonial
            quote="I have been going to Coiffed Chaos ever since I was nine years old. Now at 26, Ava continues to do a great job on my hair. After years of getting press and curls, Ava has helped my damaged hair become healthy again by keeping it natural."
            attribution="Micah W."
            context="Client of 17+ years"
          />
        </div>
      </Section>

      {/* HAIR EDUCATION PREVIEW */}
      <Section
        eyebrow="Hair education"
        title="More than product recommendations."
        intro="Practical guidance, written from decades behind the chair — for women who want to actually understand their hair."
      >
        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {homeArticles.map((a) => (
            <ArticleCard
              key={a.slug}
              title={a.title}
              excerpt={a.excerpt}
              category={a.category}
              readTime={a.readTime}
              href={`/education#${a.slug}`}
            />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button href="/education" variant="ghost">
            Browse all articles →
          </Button>
        </div>
      </Section>

      {/* YOUTUBE SHORTS */}
      <section className="py-16 md:py-24 bg-canvasAlt/50">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="max-w-2xl mb-10">
            <p className="text-xs uppercase tracking-wider2 text-cocoa font-medium mb-4">
              Watch &amp; learn
            </p>
            <h2 className="font-display text-3xl md:text-4xl tracking-tightish text-ink leading-[1.1]">
              Coiffed Chaos on YouTube
            </h2>
            <p className="mt-4 text-base md:text-lg text-muted leading-relaxed">
              Quick tips and real talk about caring for Black hair — straight from Ava.
            </p>
          </div>
          <YouTubeShortsRow ids={SHORTS} />
        </div>
      </section>

      {/* SHOP PREVIEW */}
      <section className="py-20 md:py-28 bg-canvasAlt/50">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="max-w-3xl mb-12 md:mb-16">
            <p className="text-xs uppercase tracking-wider2 text-cocoa font-medium mb-4">
              Ava recommends
            </p>
            <h2 className="font-display text-3xl md:text-5xl tracking-tightish text-ink leading-[1.1]">
              Healthy hair essentials, curated.
            </h2>
            <p className="mt-5 text-base md:text-lg text-muted leading-relaxed">
              The tools and products Ava actually reaches for — for clients,
              for the salon, and for her own routine.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              'Night Protection',
              'Moisture & Conditioning',
              'Styling Tools',
              'Scalp & Oil Care',
              'Self-Care Beyond Hair',
            ].map((cat) => (
              <Link
                key={cat}
                href="/shop"
                className="group block bg-cream border border-line rounded-2xl p-5 md:p-6 hover:border-gold/60 transition-all duration-300 hover:shadow-soft"
              >
                <p className="text-[10px] uppercase tracking-wider2 text-cocoa">
                  Category
                </p>
                <p className="font-display text-base md:text-lg text-ink leading-tight mt-2">
                  {cat}
                </p>
                <span
                  className="block mt-4 text-xs text-muted group-hover:text-cocoa transition-colors"
                  aria-hidden="true"
                >
                  Browse →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT AVA PREVIEW */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-canvas border border-line">
              <div className="absolute inset-0 bg-gradient-to-bl from-line/40 via-canvas to-cocoa/20" />
              <div className="absolute inset-0 grid place-items-center text-center px-6">
                <div>
                  <p className="font-display text-cocoa/60 text-sm tracking-wider2 uppercase">
                    Replace with
                  </p>
                  <p className="font-display text-ink text-xl mt-2">
                    /public/images/ava.jpg
                  </p>
                  <p className="text-muted text-sm mt-3 max-w-xs mx-auto">
                    Recommended: warm portrait of Ava in the salon.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <p className="text-xs uppercase tracking-wider2 text-cocoa font-medium mb-4">
              About Ava
            </p>
            <h2 className="font-display text-3xl md:text-5xl tracking-tightish text-ink leading-[1.1]">
              Nearly four decades of knowledge, now shared.
            </h2>
            <p className="mt-6 text-base md:text-lg text-muted leading-relaxed max-w-prose2">
              Ava Gardner has spent nearly four decades helping women
              understand, restore, and love their hair. Her work blends
              technical expertise with a deeper belief: hair is connected to
              identity, confidence, memory, and self-worth.
            </p>
            <p className="mt-4 text-base md:text-lg text-muted leading-relaxed max-w-prose2">
              Coiffed Chaos carries that knowledge forward through education,
              product guidance, and stories that help women reconnect with
              their crowns — wherever they are.
            </p>
            <div className="mt-8">
              <Button href="/about" variant="secondary">
                Read Ava&rsquo;s story
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES — secondary, for those who want in-person work */}
      <Section
        eyebrow="In-person services"
        title="Still doing hair. Still doing it right."
        intro="For clients in Detroit who want Ava's hands on their hair — from healthy hair consultations to press and curl, protective styling, and special occasion looks."
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {homeServices.map((s) => (
            <ServiceCard
              key={s.slug}
              number={s.number}
              title={s.title}
              description={s.description}
              forWho={s.forWho}
            />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="/services" variant="ghost">
            See all services →
          </Button>
        </div>
      </Section>

      {/* FINAL CTA */}
      <CTASection
        eyebrow="Not sure where to start?"
        title="Start with what your hair is telling you."
        copy="Browse the education library, explore Ava's product picks, or reach out directly — there's no wrong entry point."
        primaryCta={{ label: 'Explore Hair Education', href: '/education' }}
        secondaryCta={{ label: 'Shop Ava\'s Picks', href: '/shop' }}
      />
    </>
  );
}
