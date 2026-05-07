import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  id?: string;
  eyebrow?: string;
  title?: string;
  intro?: string;
  align?: 'left' | 'center';
};

export default function Section({
  children,
  className = '',
  id,
  eyebrow,
  title,
  intro,
  align = 'left',
}: Props) {
  const alignment = align === 'center' ? 'text-center mx-auto' : '';
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {(eyebrow || title || intro) && (
          <div className={`max-w-3xl ${alignment} mb-12 md:mb-16`}>
            {eyebrow && (
              <p className="text-xs uppercase tracking-wider2 text-cocoa font-medium mb-4">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="font-display text-3xl md:text-5xl tracking-tightish text-ink leading-[1.1]">
                {title}
              </h2>
            )}
            {intro && (
              <p className="mt-5 text-base md:text-lg text-muted leading-relaxed">
                {intro}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
