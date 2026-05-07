import Link from 'next/link';

type Props = {
  title: string;
  excerpt: string;
  readTime?: string;
  category?: string;
  href?: string;
  image?: string;
};

export default function ArticleCard({
  title,
  excerpt,
  readTime,
  category,
  href = '#',
  image,
}: Props) {
  return (
    <article className="group flex flex-col h-full">
      <Link href={href} className="block">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-canvasAlt border border-line">
          {image ? (
            <img
              src={image}
              alt=""
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full grid place-items-center bg-gradient-to-br from-canvasAlt via-canvas to-line/40">
              <span className="font-display text-cocoa/50 text-sm tracking-wider2 uppercase">
                Image placeholder
              </span>
            </div>
          )}
        </div>
      </Link>
      <div className="mt-5">
        {(category || readTime) && (
          <p className="text-xs uppercase tracking-wider2 text-cocoa mb-2">
            {category}
            {category && readTime && <span className="mx-2 text-muted/60">·</span>}
            {readTime && <span className="text-muted">{readTime}</span>}
          </p>
        )}
        <Link href={href}>
          <h3 className="font-display text-xl md:text-[1.4rem] text-ink leading-tight group-hover:text-cocoa transition-colors">
            {title}
          </h3>
        </Link>
        <p className="mt-2 text-muted leading-relaxed text-[15px]">{excerpt}</p>
        <Link
          href={href}
          className="mt-4 inline-flex items-center gap-2 text-sm text-ink hover:text-cocoa transition-colors"
        >
          Read article
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
