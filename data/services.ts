export type Service = {
  slug: string;
  title: string;
  description: string;
  forWho: string;
  number: string;
};

export const services: Service[] = [
  {
    slug: 'healthy-hair-consultation',
    number: '01',
    title: 'Healthy Hair Consultation',
    description:
      'A deeper assessment of scalp health, breakage patterns, moisture and protein balance, and styling habits, with a personalized plan to recover and maintain healthy hair.',
    forWho:
      'Women dealing with thinning, breakage, dryness, or hair recovery after a setback.',
  },
  {
    slug: 'natural-hair-care',
    number: '02',
    title: 'Natural Hair Care',
    description:
      'Cleansing, conditioning, detangling, and shaping for natural hair, with attention to moisture, curl pattern, density, and long-term maintenance.',
    forWho:
      'Women wearing their natural texture and wanting it healthy, defined, and easier to live with.',
  },
  {
    slug: 'press-and-curl',
    number: '03',
    title: 'Press & Curl',
    description:
      'Silk press and traditional press and curl with care for the integrity of your strands. Smooth, light, with movement that lasts without unnecessary heat damage.',
    forWho:
      'Women who love a polished press but refuse to sacrifice the health of their hair.',
  },
  {
    slug: 'protective-styling',
    number: '04',
    title: 'Protective Styling',
    description:
      'Braids, twists, and low-tension styles designed for both beauty and hair health. Sized, parted, and installed with scalp comfort in mind.',
    forWho:
      'Women looking for a break from daily styling without trading away edges or comfort.',
  },
  {
    slug: 'special-occasion',
    number: '05',
    title: 'Special Occasion Styling',
    description:
      'For weddings, milestones, photo days, and any moment you want to look back on and love. Styling that flatters your features and lasts the day.',
    forWho:
      'Women preparing for a moment that deserves a stylist who already knows your hair.',
  },
  {
    slug: 'hair-education',
    number: '06',
    title: 'Hair Education',
    description:
      'One-on-one guidance and upcoming classes that teach you how to actually care for your hair at home — routines, tools, products, and the why behind them.',
    forWho:
      'Women who want to understand their hair, not just outsource it.',
  },
];
