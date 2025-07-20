export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  createdAt: string;
  updatedAt?: string;
  status: 'draft' | 'published';
  cover?: string;
  author: string;
  tags: string[];
}
