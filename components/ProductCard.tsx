type Props = {
  name: string;
  category: string;
  reason: string;
  image?: string;
};

export default function ProductCard({ name, category, reason, image }: Props) {
  return (
    <article className="group bg-cream border border-line rounded-2xl overflow-hidden hover:border-gold/60 transition-all duration-300 flex flex-col h-full">
      <div className="relative aspect-square bg-canvasAlt border-b border-line">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full grid place-items-center">
            <span className="font-display text-cocoa/40 text-xs tracking-wider2 uppercase">
              Product image
            </span>
          </div>
        )}
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <p className="text-[10px] uppercase tracking-wider2 text-cocoa">
          {category}
        </p>
        <h3 className="font-display text-lg text-ink mt-1.5 leading-tight">
          {name}
        </h3>
        <p className="mt-2 text-sm text-muted leading-relaxed flex-1">
          {reason}
        </p>
        <button
          type="button"
          className="mt-4 inline-flex items-center gap-2 text-sm text-ink hover:text-cocoa transition-colors self-start"
        >
          View product
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </article>
  );
}
