"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { BlogPost } from '@/src/types/blog';
import { getAllBlogPosts } from '@/src/lib/blog-data';
import { Pencil, Trash2 } from 'lucide-react';

export default function AdminDashboard() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, this would be an API call
    const postsData = getAllBlogPosts();
    setPosts(postsData);
    setLoading(false);
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-palestine-green dark:text-palestine-gold">ایڈمن ڈیش بورڈ</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-800">
          <h2 className="text-lg font-semibold mb-2 dark:text-white">کل پوسٹس</h2>
          <p className="text-3xl font-bold text-palestine-green dark:text-palestine-gold">{posts.length}</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-800">
          <h2 className="text-lg font-semibold mb-2 dark:text-white">شائع شدہ</h2>
          <p className="text-3xl font-bold text-palestine-green dark:text-palestine-gold">
            {posts.filter(post => post.published).length}
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-800">
          <h2 className="text-lg font-semibold mb-2 dark:text-white">غیر شائع شدہ</h2>
          <p className="text-3xl font-bold text-palestine-green dark:text-palestine-gold">
            {posts.filter(post => !post.published).length}
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-800">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center dark:border-gray-700">
          <h2 className="text-xl font-semibold text-palestine-green dark:text-palestine-gold"> حالیہ پوسٹس</h2>
          <Link 
            href="/admin/posts/new" 
            className="bg-palestine-green text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors duration-300 dark:bg-palestine-gold dark:text-palestine-green dark:hover:bg-palestine-white"
          >
            نئی پوسٹ شامل کریں
          </Link>
        </div>
        
        {loading ? (
          <div className="p-6 text-center dark:text-white">لوڈ ہو رہا ہے...</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">عنوان</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">زمرہ</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">تاریخ</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">حالت</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">کارروائی</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                {posts.slice(0, 5).map((post) => (
                  <tr key={post.id} className="dark:hover:bg-gray-700/50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">{post.title}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{post.category}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{post.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        post.published 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' 
                          : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                      }`}>
                        {post.published ? 'شائع شدہ' : 'غیر شائع شدہ'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 flex space-x-3">
                      <Link 
                        href={`/admin/posts/edit/${post.id}`} 
                        className="text-palestine-green hover:text-green-700 dark:text-palestine-gold dark:hover:text-palestine-white"
                        title="تدوین"
                      >
                        <Pencil className="h-5 w-5" />
                      </Link>
                      <button className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300" title="حذف">
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            {posts.length === 0 && (
              <div className="p-6 text-center text-gray-500 dark:text-gray-400">کوئی پوسٹس نہیں ملیں</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}