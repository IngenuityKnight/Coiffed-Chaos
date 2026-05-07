type Props = {
  caption: string;
  category: string;
  image?: string;
  aspect?: 'tall' | 'square' | 'wide';
};

const aspects = {
  tall: 'aspect-[3/4]',
  square: 'aspect-square',
  wide: 'aspect-[4/3]',
};

export default function GalleryCard({
  caption,
  category,
  image,
  aspect = 'tall',
}: Props) {
  return (
    <figure className="group relative overflow-hidden rounded-2xl bg-canvasAlt border border-line">
      <div className={`relative ${aspects[aspect]} overflow-hidden`}>
        {image ? (
          <img
            src={image}
            alt={caption}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full grid place-items-center bg-gradient-to-br from-canvasAlt via-canvas to-line/40">
            <span className="font-display text-cocoa/40 text-xs tracking-wider2 uppercase">
              {category}
            </span>
          </div>
        )}
        <div className="absolute inset-x-0 bottom-0 p-4 md:p-5 bg-gradient-to-t from-ink/85 via-ink/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-[10px] uppercase tracking-wider2 text-gold mb-1">
            {category}
          </p>
          <p className="text-cream text-sm leading-snug">{caption}</p>
        </div>
      </div>
    </figure>
  );
}
