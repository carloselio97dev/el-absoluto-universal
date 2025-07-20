import { Post } from './types';

export const mockPosts: Post[] = [
  {
    id: '1',
    title: 'La importancia de la respiración consciente',
    excerpt: 'Cómo la respiración profunda regula el sistema nervioso.',
    createdAt: '2025-07-18T10:00:00Z',
    status: 'published',
    author: 'Admin',
    tags: ['respiración', 'bienestar'],
    cover: '/images/placeholder/respiracion.jpg'
  },
  {
    id: '2',
    title: 'Meditación guiada para principiantes',
    excerpt: 'Pasos simples para iniciar tu práctica diaria.',
    createdAt: '2025-07-15T08:30:00Z',
    status: 'draft',
    author: 'Admin',
    tags: ['meditación']
  }
];
