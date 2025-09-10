import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Air Max 270 React',
    brand: 'Nike',
    price: 130,
    originalPrice: 160,
    images: [
      'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'The Nike Air Max 270 React combines the Air Max 270\'s largest heel Air unit with React foam technology for all-day comfort.',
    category: 'running',
    sizes: [7, 8, 9, 10, 11, 12],
    colors: ['Black', 'White', 'Red'],
    rating: 4.5,
    reviews: 128,
    inStock: true,
    isNew: true,
    isSale: true
  },
  {
    id: '2',
    name: 'Chuck Taylor All Star',
    brand: 'Converse',
    price: 75,
    images: [
      'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1280064/pexels-photo-1280064.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'The iconic Chuck Taylor All Star sneaker that started it all. Classic canvas upper with rubber toe cap.',
    category: 'casual',
    sizes: [6, 7, 8, 9, 10, 11, 12, 13],
    colors: ['Black', 'White', 'Red', 'Navy'],
    rating: 4.3,
    reviews: 256,
    inStock: true
  },
  {
    id: '3',
    name: 'Stan Smith',
    brand: 'Adidas',
    price: 85,
    images: [
      'https://images.pexels.com/photos/1456705/pexels-photo-1456705.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Clean and simple, the adidas Stan Smith shoes are a timeless icon that goes with everything.',
    category: 'casual',
    sizes: [7, 8, 9, 10, 11, 12],
    colors: ['White', 'Green'],
    rating: 4.7,
    reviews: 189,
    inStock: true,
    isNew: true
  },
  {
    id: '4',
    name: 'Air Jordan 1 Retro High',
    brand: 'Jordan',
    price: 170,
    images: [
      'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'The Air Jordan 1 Retro High OG recreates the classic that started it all.',
    category: 'basketball',
    sizes: [8, 9, 10, 11, 12, 13],
    colors: ['Black/Red', 'White/Black', 'Royal Blue'],
    rating: 4.8,
    reviews: 342,
    inStock: true
  },
  {
    id: '5',
    name: 'Old Skool',
    brand: 'Vans',
    price: 65,
    images: [
      'https://images.pexels.com/photos/1280064/pexels-photo-1280064.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1456705/pexels-photo-1456705.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'The Vans Old Skool is the original waffle outsole skate shoe and a true icon.',
    category: 'skate',
    sizes: [6, 7, 8, 9, 10, 11, 12],
    colors: ['Black', 'White', 'Navy', 'Burgundy'],
    rating: 4.4,
    reviews: 167,
    inStock: true
  },
  {
    id: '6',
    name: 'Air Force 1 Low',
    brand: 'Nike',
    price: 90,
    images: [
      'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'The Nike Air Force 1 Low retains the iconic design that made it a legend.',
    category: 'casual',
    sizes: [7, 8, 9, 10, 11, 12, 13],
    colors: ['White', 'Black', 'Triple White'],
    rating: 4.6,
    reviews: 298,
    inStock: false
  }
];