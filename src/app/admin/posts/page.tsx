"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { BlogPost } from '@/src/types/blog';
import { getAllBlogPosts } from '@/src/lib/blog-data';
import { Pencil, Trash2 } from 'lucide-react';

export default function AdminPosts() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // In a real app, this would be an API call
    const postsData = getAllBlogPosts();
    setPosts(postsData);
    setLoading(false);
  }, []);

  // Filter posts based on search term
  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-palestine-green">تمام پوسٹس</h1>
        <Link 
          href="/admin/posts/new" 
          className="bg-palestine-green text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors duration-300"
        >
          نئی پوسٹ شامل کریں
        </Link>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="پوسٹس تلاش کریں..."
          className="w-full md:w-1/3 p-3 border border-gray-300 rounded-md mb-4 md:mb-0"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Posts Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {loading ? (
          <div className="p-6 text-center">لوڈ ہو رہا ہے...</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">عنوان</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">زمرہ</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">تاریخ</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">حالت</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">کارروائی</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredPosts.map((post) => (
                  <tr key={post.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{post.title}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{post.category}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{post.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        post.published 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {post.published ? 'شائع شدہ' : 'غیر شائع شدہ'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 flex space-x-3">
                      <Link 
                        href={`/admin/posts/edit/${post.id}`} 
                        className="text-palestine-green hover:text-green-700"
                        title="تدوین"
                      >
                        <Pencil className="h-5 w-5" />
                      </Link>
                      <button 
                        className="text-red-600 hover:text-red-900"
                        title="حذف"
                        onClick={() => {
                          if (confirm('کیا آپ واقعی اس پوسٹ کو حذف کرنا چاہتے ہیں؟')) {
                            // In a real app, this would be an API call
                            console.log('Delete post:', post.id);
                          }
                        }}
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            {filteredPosts.length === 0 && (
              <div className="p-6 text-center text-gray-500">کوئی پوسٹس نہیں ملیں</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}