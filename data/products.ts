export type ProductCategory =
  | 'Night Protection'
  | 'Moisture & Conditioning'
  | 'Styling Tools'
  | 'Scalp & Oil Care'
  | 'Self-Care Beyond Hair';

export type Product = {
  name: string;
  category: ProductCategory;
  reason: string;
};

export const products: Product[] = [
  {
    name: 'Premium Silk Bonnet',
    category: 'Night Protection',
    reason:
      'Real silk, deep enough for big hair, with an elastic that does not snap or leave a mark on your forehead.',
  },
  {
    name: 'Silk Pillowcase',
    category: 'Night Protection',
    reason:
      'For the nights the bonnet slips off. Reduces friction, breakage, and the morning frizz halo.',
  },
  {
    name: 'Satin-Lined Hair Wrap',
    category: 'Night Protection',
    reason:
      'A soft alternative for women who hate bonnets. Lays flat, breathes, and stays put through the night.',
  },
  {
    name: 'Deep Moisture Mask',
    category: 'Moisture & Conditioning',
    reason:
      'A weekly anchor for dry, damaged, or transitioning hair. Penetrates without weighing curls down.',
  },
  {
    name: 'Leave-In Conditioner',
    category: 'Moisture & Conditioning',
    reason:
      'A daily layer of softness and slip. Pairs beautifully with oils and helps curls cooperate.',
  },
  {
    name: 'Bond-Repair Treatment',
    category: 'Moisture & Conditioning',
    reason:
      'For hair recovering from heat, color, or chemical processing. Used in salon and at home for real repair.',
  },
  {
    name: 'Wide-Tooth Detangling Comb',
    category: 'Styling Tools',
    reason:
      'The right comb makes the difference between detangling and tearing. Smooth teeth, no seam, real grip.',
  },
  {
    name: 'Ionic Blow Dryer',
    category: 'Styling Tools',
    reason:
      'Fast drying with less heat damage. The tool we reach for at the salon — worth the investment at home.',
  },
  {
    name: 'Boar-Bristle Brush',
    category: 'Styling Tools',
    reason:
      'For laying edges and distributing scalp oils through the lengths without pulling.',
  },
  {
    name: 'Cold-Pressed Castor Oil',
    category: 'Scalp & Oil Care',
    reason:
      'A salon staple for stimulating circulation, sealing in moisture, and supporting edges and crown over time.',
  },
  {
    name: 'Scalp Massage Brush',
    category: 'Scalp & Oil Care',
    reason:
      'Two minutes a day. Softens buildup, supports circulation, and feels good after a long day.',
  },
  {
    name: 'Botanical Hair & Scalp Oil',
    category: 'Scalp & Oil Care',
    reason:
      'A blend of light oils and botanicals that nourishes without leaving the scalp greasy or clogged.',
  },
  {
    name: 'Reflection Journal',
    category: 'Self-Care Beyond Hair',
    reason:
      'For writing down your hair story — and the parts of your life it carries with it.',
  },
  {
    name: 'Aromatherapy Roller',
    category: 'Self-Care Beyond Hair',
    reason:
      'A small ritual for the wash-day hour, the morning routine, or a quiet moment after work.',
  },
  {
    name: 'Body Oil — Warmth Blend',
    category: 'Self-Care Beyond Hair',
    reason:
      'Because the body that carries the crown deserves the same care.',
  },
];

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  'Night Protection',
  'Moisture & Conditioning',
  'Styling Tools',
  'Scalp & Oil Care',
  'Self-Care Beyond Hair',
];
