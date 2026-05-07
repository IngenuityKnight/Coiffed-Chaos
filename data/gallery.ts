export type GalleryCategory =
  | 'Natural Hair'
  | 'Press & Curl'
  | 'Protective Styles'
  | 'Healthy Hair Recovery'
  | 'Special Occasion Hair'
  | 'Gray Transition';

export type GalleryItem = {
  caption: string;
  category: GalleryCategory;
  aspect: 'tall' | 'square' | 'wide';
  image?: string;
};

export const galleryItems: GalleryItem[] = [
  {
    category: 'Press & Curl',
    caption:
      'Healthy press and curl focused on shine, movement, and low-stress maintenance.',
    aspect: 'tall',
  },
  {
    category: 'Natural Hair',
    caption:
      'Natural hair care with attention to moisture, shape, and long-term maintenance.',
    aspect: 'square',
  },
  {
    category: 'Protective Styles',
    caption:
      'Protective styling designed for beauty, comfort, and hair health.',
    aspect: 'wide',
  },
  {
    category: 'Healthy Hair Recovery',
    caption:
      'A year of patient recovery — soft, dense, and finally feeling like her own hair again.',
    aspect: 'tall',
  },
  {
    category: 'Special Occasion Hair',
    caption:
      'Wedding-day styling that holds through the ceremony, the dance floor, and the photos that follow.',
    aspect: 'tall',
  },
  {
    category: 'Gray Transition',
    caption:
      'Gray transition styled with intention — celebrating the change rather than hiding it.',
    aspect: 'square',
  },
  {
    category: 'Natural Hair',
    caption: 'Defined coils with a moisturized scalp and a shape that lasts.',
    aspect: 'wide',
  },
  {
    category: 'Press & Curl',
    caption:
      'Silk press with body and bounce, finished without unnecessary heat.',
    aspect: 'tall',
  },
  {
    category: 'Protective Styles',
    caption:
      'Knotless braids parted clean and tensioned for scalp comfort.',
    aspect: 'square',
  },
];

export const GALLERY_CATEGORIES: ('All' | GalleryCategory)[] = [
  'All',
  'Natural Hair',
  'Press & Curl',
  'Protective Styles',
  'Healthy Hair Recovery',
  'Special Occasion Hair',
  'Gray Transition',
];
