export interface Category {
  id: string;
  name: string;
  slug: string;
}

export interface Article {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  imageUrl: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
  categories?: Category[];
  viewCount: number;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
} 