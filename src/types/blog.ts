// Types for the Palestine blog

export interface BlogPost {
  id: string;
  title: string;           // Urdu title
  content: string;         // Urdu content
  excerpt: string;         // Urdu excerpt
  date: string;            // Date in Urdu format
  author: string;          // Author name (Zia Chitrali)
  category: BlogCategory;  // Category of the post
  slug: string;            // URL-friendly identifier
  thumbnail?: string;      // Thumbnail image URL
  tags?: string[];         // Array of tags (Urdu)
  featured?: boolean;      // Whether it's a featured post
  published: boolean;      // Whether the post is published
  createdAt: Date;
  updatedAt: Date;
}

export enum BlogCategory {
  STORIES = "کہانیاں",      // Stories
  HISTORY = "تاریخ",        // History
  UPDATES = "اپ ڈیٹس",     // Updates
}

export interface BlogCategoryType {
  id: string;
  name: BlogCategory;
  description: string;     // Urdu description
  slug: string;
  icon: string;           // Icon name or class
}

export interface Author {
  id: string;
  name: string;            // Author name
  bio: string;             // Urdu bio
  avatar?: string;         // Avatar image URL or path
}