import type { Metadata } from 'next';
import Section from '@/components/Section';
import ProductCard from '@/components/ProductCard';
import CTASection from '@/components/CTASection';
import { products, PRODUCT_CATEGORIES } from '@/data/products';

export const metadata: Metadata = {
  title: 'Ava’s Hair Care Essentials | Coiffed Chaos',
  description:
    'Ava’s curated picks for night protection, moisture, styling tools, scalp and oil care, and self-care beyond hair.',
};

export default function ShopPage() {
  return (
    <>
      <Section
        eyebrow="Ava recommends"
        title="Ava's healthy hair essentials."
        intro="Curated products and tools for women who want to protect, maintain, and care for their hair between visits."
      >
        <div className="space-y-20">
          {PRODUCT_CATEGORIES.map((cat) => {
            const items = products.filter((p) => p.category === cat);
            return (
              <div key={cat}>
                <div className="flex items-end justify-between mb-8">
                  <div>
                    <p className="text-xs uppercase tracking-wider2 text-cocoa font-medium mb-2">
                      Collection
                    </p>
                    <h2 className="font-display text-2xl md:text-4xl text-ink tracking-tightish leading-tight">
                      {cat}
                    </h2>
                  </div>
                  <p className="text-sm text-muted hidden md:block">
                    {items.length} item{items.length === 1 ? '' : 's'}
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                  {items.map((p) => (
                    <ProductCard
                      key={p.name}
                      name={p.name}
                      category={p.category}
                      reason={p.reason}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-16 text-sm text-muted text-center max-w-2xl mx-auto">
          Drop real product images into <code className="text-cocoa">/public/images/products/</code>{' '}
          and add image paths in <code className="text-cocoa">/data/products.ts</code>.
          When you&rsquo;re ready, link each &ldquo;View product&rdquo; button to your
          preferred storefront or affiliate link.
        </p>
      </Section>

      <CTASection
        eyebrow="Not sure which is right for you?"
        title="Ask Ava before you spend."
        copy="A discovery call saves you the cost of guessing. Ava will recommend exactly what your hair needs — and what you do not need to buy."
      />
    </>
  );
}
