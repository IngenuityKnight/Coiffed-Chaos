type Props = {
  quote: string;
  attribution?: string;
  context?: string;
};

export default function Testimonial({ quote, attribution, context }: Props) {
  return (
    <figure className="relative bg-cream border border-line rounded-2xl p-8 md:p-12">
      <span
        aria-hidden="true"
        className="absolute -top-4 left-8 font-display text-7xl md:text-8xl text-gold leading-none select-none"
      >
        &ldquo;
      </span>
      <blockquote className="relative">
        <p className="font-display text-xl md:text-2xl text-ink leading-snug tracking-tightish">
          {quote}
        </p>
      </blockquote>
      {(attribution || context) && (
        <figcaption className="mt-6 pt-5 border-t border-line/70 text-sm">
          {attribution && (
            <span className="text-ink font-medium">{attribution}</span>
          )}
          {context && (
            <span className="text-muted">
              {attribution && <span className="mx-2 text-muted/60">·</span>}
              {context}
            </span>
          )}
        </figcaption>
      )}
    </figure>
  );
}
