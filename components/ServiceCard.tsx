import Link from 'next/link';

type Props = {
  title: string;
  description: string;
  forWho?: string;
  href?: string;
  cta?: string;
  number?: string;
};

export default function ServiceCard({
  title,
  description,
  forWho,
  href = '/contact',
  cta = 'Book a Discovery Call',
  number,
}: Props) {
  return (
    <article className="group relative bg-cream border border-line rounded-2xl p-7 md:p-8 transition-all duration-300 hover:border-gold/60 hover:shadow-soft flex flex-col h-full">
      {number && (
        <span className="font-display text-xs text-cocoa tracking-wider2 mb-4">
          {number}
        </span>
      )}
      <h3 className="font-display text-xl md:text-2xl text-ink leading-tight">
        {title}
      </h3>
      <p className="mt-3 text-muted leading-relaxed text-[15px]">
        {description}
      </p>
      {forWho && (
        <p className="mt-4 text-sm text-cocoa">
          <span className="uppercase tracking-wider2 text-xs text-muted/80 mr-2">
            For
          </span>
          {forWho}
        </p>
      )}
      <div className="mt-auto pt-5 border-t border-line/70">
        <Link
          href={href}
          className="inline-flex items-center gap-2 text-sm text-ink hover:text-cocoa transition-colors"
        >
          {cta}
          <span
            className="transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          >
            →
          </span>
        </Link>
      </div>
    </article>
  );
}
