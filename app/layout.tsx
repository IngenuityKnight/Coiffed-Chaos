import type { Metadata } from 'next';
import { Fraunces, Source_Sans_3 } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const display = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  axes: ['opsz', 'SOFT'],
});

const body = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://coiffedchaos.com'),
  title: {
    default: 'Coiffed Chaos | Black Hair Care, Styling & Education in Detroit',
    template: '%s | Coiffed Chaos',
  },
  description:
    'Coiffed Chaos offers Black hair care, styling, education, and product guidance rooted in decades of experience, Detroit legacy, and personalized care.',
  keywords: [
    'Black hair salon Detroit',
    'Black hair stylist Detroit',
    'African American hair stylist Detroit',
    'natural hair care Detroit',
    'press and curl Detroit',
    'healthy hair specialist Detroit',
    'hair education for Black women',
  ],
  openGraph: {
    title: 'Coiffed Chaos | Black Hair Care, Styling & Education in Detroit',
    description:
      'Decades of Black hair expertise, education, and personalized care from Ava Gardner in Detroit.',
    url: 'https://coiffedchaos.com',
    siteName: 'Coiffed Chaos',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Coiffed Chaos',
    description:
      'Black hair care, styling, and education rooted in Detroit. By Ava Gardner.',
  },
  icons: { icon: '/favicon.ico' },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'HairSalon',
  name: 'Coiffed Chaos',
  description:
    'Black hair care, styling, and education in Detroit. Founded by Ava Gardner.',
  url: 'https://coiffedchaos.com',
  image: 'https://coiffedchaos.com/images/hero.jpg',
  telephone: '',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Detroit',
    addressRegion: 'MI',
    postalCode: '48221',
    addressCountry: 'US',
  },
  founder: { '@type': 'Person', name: 'Ava Gardner' },
  areaServed: 'Detroit, Michigan',
  priceRange: '$$',
  sameAs: ['https://www.instagram.com/coiffedchaos'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="font-body bg-canvas text-ink antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-ink focus:text-cream focus:px-4 focus:py-2 focus:rounded"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
