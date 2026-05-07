import type { Metadata } from 'next';
import Section from '@/components/Section';
import ArticleCard from '@/components/ArticleCard';
import Button from '@/components/Button';
import { articles } from '@/data/articles';

export const metadata: Metadata = {
  title: 'Black Hair Care Education for Women | Coiffed Chaos',
  description:
    'Practical hair education for Black women — protecting natural hair, recovering from damage, press and curl maintenance, gray transition, and building a healthy hair routine.',
};

export default function EducationPage() {
  return (
    <>
      <Section
        eyebrow="Hair education"
        title="Hair education for women who want more than product recommendations."
        intro="Learn how to protect, restore, style, and understand your hair with guidance shaped by decades behind the chair."
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          {articles.map((a) => (
            <ArticleCard
              key={a.slug}
              title={a.title}
              excerpt={a.excerpt}
              category={a.category}
              readTime={a.readTime}
              href={`#${a.slug}`}
            />
          ))}
        </div>
      </Section>

      {/* CLASSES WAITLIST */}
      <section id="waitlist" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-line bg-cream p-8 md:p-16">
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <p className="text-xs uppercase tracking-wider2 text-cocoa font-medium mb-4">
                  Coming soon
                </p>
                <h2 className="font-display text-3xl md:text-5xl tracking-tightish text-ink leading-[1.1]">
                  Hair education is coming.
                </h2>
                <p className="mt-5 text-base md:text-lg text-muted leading-relaxed max-w-prose2">
                  Join the list for Ava&rsquo;s upcoming classes on caring
                  for aging natural hair, preventing breakage, press and
                  curl maintenance, building a healthy hair routine, and
                  teaching young girls to love their hair.
                </p>
              </div>
              <div className="lg:col-span-5">
                <form
                  className="bg-canvas border border-line rounded-2xl p-6"
                  action="https://formspree.io/f/your-form-id"
                  method="POST"
                  aria-label="Education waitlist signup"
                >
                  <label className="block">
                    <span className="text-sm text-ink">First name</span>
                    <input
                      type="text"
                      name="firstName"
                      required
                      className="mt-2 w-full rounded-lg border border-line bg-cream px-4 py-3 text-ink focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/30"
                    />
                  </label>
                  <label className="block mt-4">
                    <span className="text-sm text-ink">Email</span>
                    <input
                      type="email"
                      name="email"
                      required
                      className="mt-2 w-full rounded-lg border border-line bg-cream px-4 py-3 text-ink focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/30"
                    />
                  </label>
                  <input
                    type="hidden"
                    name="_subject"
                    value="Coiffed Chaos — Education waitlist signup"
                  />
                  <Button type="submit" className="mt-5 w-full">
                    Join the Education List
                  </Button>
                  <p className="mt-3 text-xs text-muted text-center">
                    No spam. We&rsquo;ll only write when classes open.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
