"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { BlogPost, BlogCategory } from '@/src/types/blog';

export default function NewPost() {
  const router = useRouter();
  
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    excerpt: '',
    author: 'ضیاء چترالی',
    category: BlogCategory.STORIES,
    slug: '',
    tags: '',
    featured: false,
    published: false,
  });
  
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    
    try {
      // In a real app, this would be an API call
      // const response = await fetch('/api/admin/posts', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     ...formData,
      //     tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
      //   }),
      // });
      // 
      // if (!response.ok) {
      //   throw new Error('Failed to create post');
      // }
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For this demo, we'll just simulate success
      alert('پوسٹ کامیابی سے شامل کر دی گئی!');
      router.push('/admin/posts');
    } catch (err) {
      setError('پوسٹ شامل کرنے میں ناکامی ہوئی۔ براہ کرم دوبارہ کوشش کریں۔');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-palestine-green">نئی پوسٹ شامل کریں</h1>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6 dark:bg-red-900/30 dark:border-red-700 dark:text-red-300">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-300">
              عنوان
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-palestine-green focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
              placeholder="پوسٹ کا عنوان درج کریں"
            />
          </div>
          
          <div>
            <label htmlFor="slug" className="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-300">
              اسلاگ
            </label>
            <input
              type="text"
              id="slug"
              name="slug"
              value={formData.slug}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-palestine-green focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
              placeholder="URL کے لیے اسلاگ درج کریں"
            />
          </div>
        </div>
        
        <div className="mb-6">
          <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-300">
            مختصر جائزہ
          </label>
          <textarea
            id="excerpt"
            name="excerpt"
            value={formData.excerpt}
            onChange={handleChange}
            required
            rows={3}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-palestine-green focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
            placeholder="پوسٹ کا مختصر جائزہ درج کریں"
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-300">
            مواد
          </label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
            rows={8}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-palestine-green focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
            placeholder="پوسٹ کا مکمل مواد درج کریں"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-300">
              زمرہ
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-palestine-green focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            >
              <option value={BlogCategory.STORIES} className="dark:bg-gray-700">کہانیاں</option>
              <option value={BlogCategory.HISTORY} className="dark:bg-gray-700">تاریخ</option>
              <option value={BlogCategory.UPDATES} className="dark:bg-gray-700">اپ ڈیٹس</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-300">
              مصنف
            </label>
            <input
              type="text"
              id="author"
              name="author"
              value={formData.author}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-palestine-green focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
              placeholder="مصنف کا نام"
            />
          </div>
          
          <div>
            <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-300">
              ٹیگز
            </label>
            <input
              type="text"
              id="tags"
              name="tags"
              value={formData.tags}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-palestine-green focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
              placeholder="کوما سے الگ کریں"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="featured"
              name="featured"
              checked={formData.featured}
              onChange={handleChange}
              className="h-4 w-4 text-palestine-green focus:ring-palestine-green border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600"
            />
            <label htmlFor="featured" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
              ویژہ پوسٹ
            </label>
          </div>
          
          <div className="flex items-center">
            <input
              type="checkbox"
              id="published"
              name="published"
              checked={formData.published}
              onChange={handleChange}
              className="h-4 w-4 text-palestine-green focus:ring-palestine-green border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600"
            />
            <label htmlFor="published" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
              شائع کریں
            </label>
          </div>
        </div>
        
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={() => router.push('/admin/posts')}
            className="px-6 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-palestine-green dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-600"
          >
            منسوخ کریں
          </button>
          <button
            type="submit"
            disabled={submitting}
            className="px-6 py-3 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-palestine-green hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-palestine-green disabled:opacity-50 dark:bg-palestine-gold dark:text-palestine-green dark:hover:bg-palestine-white"
          >
            {submitting ? 'جمع کر رہا ہے...' : 'جمع کریں'}
          </button>
        </div>
      </form>
    </div>
  );
}