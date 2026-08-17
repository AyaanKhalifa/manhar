// ── Product Data ────────────────────────────────────────────────
export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  colors: string[];
  image: string;
  badge?: string;
}

export const products: Product[] = [
  {
    id: 'classic-runner',
    name: 'Casual Running Shoes',
    category: 'Men',
    price: 699,
    colors: ['#1a1a1a', '#F5F3EE', '#4A6741'],
    image: '/images/product-classic-runner.png',
    badge: 'Bestseller',
  },
  {
    id: 'urban-flex',
    name: 'Everyday Sneakers',
    category: 'Men',
    price: 899,
    colors: ['#1B2A4A', '#1a1a1a', '#8B4513'],
    image: '/images/product-urban-flex.png',
  },
  {
    id: 'street-luxe',
    name: 'Party Wear Loafers',
    category: 'Unisex',
    price: 999,
    colors: ['#F5F3EE', '#1a1a1a', '#C9A96E'],
    image: '/images/product-street-luxe.png',
    badge: 'New',
  },
  {
    id: 'active-pro',
    name: 'Sports Running Shoes',
    category: 'Sports',
    price: 799,
    colors: ['#B22222', '#1a1a1a', '#2E4057'],
    image: '/images/product-active-pro.png',
  },
  {
    id: 'comfort-walk',
    name: 'Comfort Slip-ons',
    category: 'Men',
    price: 599,
    colors: ['#C4A882', '#5C4033', '#1a1a1a'],
    image: '/images/product-comfort-walk.png',
  },
  {
    id: 'signature',
    name: 'Premium Formal Shoes',
    category: 'Unisex',
    price: 1299,
    colors: ['#1a1a1a', '#2C2C2C'],
    image: '/images/product-signature.png',
    badge: 'Trending',
  },
];

// ── Category Data ───────────────────────────────────────────────
export interface Category {
  id: string;
  name: string;
  tagline: string;
  image: string;
}

export const categories: Category[] = [
  {
    id: 'men',
    name: 'Men',
    tagline: 'Modern everyday footwear.',
    image: '/images/category-men.png',
  },
  {
    id: 'women',
    name: 'Women',
    tagline: 'Style designed to move with you.',
    image: '/images/category-women.png',
  },
  {
    id: 'sports',
    name: 'Sports',
    tagline: 'Performance meets comfort.',
    image: '/images/category-sports.png',
  },
  {
    id: 'kids',
    name: 'Kids',
    tagline: 'Comfort for every adventure.',
    image: '/images/category-kids.png',
  },
];

// ── Testimonial Data ────────────────────────────────────────────
export interface Testimonial {
  id: string;
  text: string;
  author: string;
  location: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    text: 'Great collection and very comfortable footwear. I always find something I love.',
    author: 'Customer',
    location: 'Chikhli',
  },
  {
    id: 't2',
    text: 'Beautiful styles and helpful service. The quality is outstanding for the price.',
    author: 'Customer',
    location: 'Navsari',
  },
  {
    id: 't3',
    text: 'My go-to store for the entire family. The kids collection is wonderful.',
    author: 'Customer',
    location: 'Chikhli',
  },
];

// ── Store Info ──────────────────────────────────────────────────
export const storeInfo = {
  name: 'Manhar Store',
  tagline: 'Step Into Your Style.',
  address: 'Bazar St, Chikhli Bazar, Chikhli, Gujarat 396521',
  phone: '099098 87906',
  whatsapp: '+919909887906', 
  whatsappMessage: 'Hi Manhar Store, I would like to know more about your footwear collection.',
  instagram: '#',
  mapUrl: 'https://maps.google.com/?q=Manhar+Store,Bazar+St,Chikhli+Bazar,Chikhli,Gujarat+396521',
  email: 'info@manharshoes.com',
  hours: 'Open today until 8:30 pm',
  hoursList: [
    { day: 'Monday', time: '9:30 am – 8:30 pm' },
    { day: 'Tuesday', time: '9:30 am – 8:30 pm' },
    { day: 'Wednesday', time: '9:30 am – 8:30 pm' },
    { day: 'Thursday', time: '9:30 am – 8:30 pm' },
    { day: 'Friday', time: '9:30 am – 8:30 pm' },
    { day: 'Saturday', time: '9:30 am – 8:30 pm' },
    { day: 'Sunday', time: '9:30 am – 4:00 pm' },
  ],
  rating: '5.0',
  reviewsCount: 'Google review'
};

// ── Feature Data ────────────────────────────────────────────────
export interface Feature {
  id: string;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    id: 'quality',
    title: 'Quality',
    description: 'Footwear selected with attention to style and comfort.',
  },
  {
    id: 'comfort',
    title: 'Comfort',
    description: 'Designed for the way you move every day.',
  },
  {
    id: 'style',
    title: 'Style',
    description: 'From everyday essentials to statement looks.',
  },
  {
    id: 'local',
    title: 'Local',
    description: 'Your footwear destination in Chikhli.',
  },
];

// ── Cinematic Features ──────────────────────────────────────────
export const cinematicFeatures = [
  'Lightweight',
  'Comfort',
  'Style',
  'Everyday Performance',
];
