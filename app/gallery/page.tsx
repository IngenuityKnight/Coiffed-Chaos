'use client';

import { useState } from 'react';
import Section from '@/components/Section';
import GalleryCard from '@/components/GalleryCard';
import CTASection from '@/components/CTASection';
import {
  galleryItems,
  GALLERY_CATEGORIES,
  type GalleryCategory,
} from '@/data/gallery';

export default function GalleryPage() {
  const [filter, setFilter] = useState<'All' | GalleryCategory>('All');

  const items =
    filter === 'All'
      ? galleryItems
      : galleryItems.filter((g) => g.category === filter);

  return (
    <>
      <Section
        eyebrow="Gallery"
        title="A look at the work."
        intro="Healthy hair, careful styling, and the small details that make the difference. Filter by category to see what speaks to you."
      >
        <div className="flex flex-wrap gap-2 md:gap-3 mb-10 md:mb-14">
          {GALLERY_CATEGORIES.map((cat) => {
            const active = filter === cat;
            return (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 md:px-5 py-2 md:py-2.5 rounded-full text-sm transition-all duration-200 border ${
                  active
                    ? 'bg-ink text-cream border-ink'
                    : 'bg-transparent text-muted border-line hover:border-cocoa hover:text-ink'
                }`}
                aria-pressed={active}
              >
                {cat}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {items.map((g, i) => (
            <GalleryCard
              key={`${g.category}-${i}`}
              caption={g.caption}
              category={g.category}
              aspect={g.aspect}
              image={g.image}
            />
          ))}
        </div>

        <p className="mt-12 text-sm text-muted text-center">
          Drop real images into <code className="text-cocoa">/public/images/gallery-*.jpg</code>{' '}
          and reference them in <code className="text-cocoa">/data/gallery.ts</code>.
        </p>
      </Section>

      <CTASection
        eyebrow="See something you love?"
        title="Let&rsquo;s talk about your hair."
        copy="Every look starts with a conversation about your hair history and what you want next."
      />
    </>
  );
}
