import Button from './Button';

type Props = {
  eyebrow?: string;
  title: string;
  copy: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export default function CTASection({
  eyebrow = 'Next step',
  title,
  copy,
  primaryCta = { label: 'Book a Hair Discovery Call', href: '/contact' },
  secondaryCta,
}: Props) {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-deep text-cream p-8 md:p-16 grain">
          <div
            className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gold/15 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-32 -left-16 w-96 h-96 rounded-full bg-cocoa/30 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative max-w-2xl">
            <p className="text-xs uppercase tracking-wider2 text-gold mb-5">
              {eyebrow}
            </p>
            <h2 className="font-display text-3xl md:text-5xl tracking-tightish leading-[1.1]">
              {title}
            </h2>
            <p className="mt-5 text-cream/80 text-base md:text-lg leading-relaxed">
              {copy}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button
                href={primaryCta.href}
                className="bg-cream text-ink hover:bg-gold hover:text-ink"
              >
                {primaryCta.label}
              </Button>
              {secondaryCta && (
                <Button
                  href={secondaryCta.href}
                  variant="ghost"
                  className="text-cream hover:text-gold"
                >
                  {secondaryCta.label}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
