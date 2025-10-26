"use client";

import { useState } from 'react';
import { BlogCategoryType } from '@/src/types/blog';
import { Pencil, Trash2, Plus, Save, X } from 'lucide-react';

// Mock data for categories
const initialCategories: BlogCategoryType[] = [
  {
    id: "1",
    name: "کہانیاں",
    description: "فلسطینیوں کی کہانیاں اور ذاتی تجربات",
    slug: "stories",
    icon: "user"
  },
  {
    id: "2",
    name: "تاریخ",
    description: "فلسطین کی تاریخ اور اہم واقعات",
    slug: "history",
    icon: "book"
  },
  {
    id: "3",
    name: "اپ ڈیٹس",
    description: "مشرق وسطی میں حالیہ تبدیلیاں اور اپ ڈیٹس",
    slug: "updates",
    icon: "newspaper"
  }
];

export default function AdminCategories() {
  const [categories, setCategories] = useState<BlogCategoryType[]>(initialCategories);
  const [newCategory, setNewCategory] = useState({
    name: '',
    description: '',
    slug: ''
  });
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingCategory, setEditingCategory] = useState<BlogCategoryType | null>(null);

  const handleAddCategory = () => {
    if (!newCategory.name || !newCategory.description || !newCategory.slug) {
      alert("براہ کرم تمام فیلڈز پُر کریں");
      return;
    }

    const newCat: BlogCategoryType = {
      id: `cat_${Date.now()}`,
      name: newCategory.name,
      description: newCategory.description,
      slug: newCategory.slug
    };

    setCategories([...categories, newCat]);
    setNewCategory({ name: '', description: '', slug: '' });
  };

  const startEditing = (category: BlogCategoryType) => {
    setEditingId(category.id);
    setEditingCategory({ ...category });
  };

  const saveEditing = () => {
    if (!editingCategory) return;

    setCategories(categories.map(cat => 
      cat.id === editingId ? editingCategory : cat
    ));
    setEditingId(null);
    setEditingCategory(null);
  };

  const cancelEditing = () => {
    setEditingId(null);
    setEditingCategory(null);
  };

  const deleteCategory = (id: string) => {
    if (categories.length <= 1) {
      alert("آپ کم از کم ایک زمرہ رکھنا چاہیں گے");
      return;
    }
    
    if (confirm("کیا آپ واقعی اس زمرے کو حذف کرنا چاہتے ہیں؟")) {
      setCategories(categories.filter(cat => cat.id !== id));
    }
  };

  return (
    <div className="dark:bg-gray-900 dark:text-white">
      <h1 className="text-2xl font-bold mb-6 text-palestine-green dark:text-palestine-gold">زمرے کا نظم کریں</h1>
      
      {/* Add Category Form */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8 dark:bg-gray-800">
        <h2 className="text-xl font-semibold mb-4 text-palestine-green dark:text-palestine-gold">نیا زمرہ شامل کریں</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-300">
              نام
            </label>
            <input
              type="text"
              id="name"
              value={newCategory.name}
              onChange={(e) => setNewCategory({...newCategory, name: e.target.value})}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-palestine-green focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
              placeholder="زمرے کا نام"
            />
          </div>
          <div>
            <label htmlFor="slug" className="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-300">
              اسلاگ
            </label>
            <input
              type="text"
              id="slug"
              value={newCategory.slug}
              onChange={(e) => setNewCategory({...newCategory, slug: e.target.value})}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-palestine-green focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
              placeholder="URL کے لیے اسلاگ"
            />
          </div>
          <div className="flex items-end">
            <button
              onClick={handleAddCategory}
              className="w-full bg-palestine-green text-white px-4 py-3 rounded-md hover:bg-green-700 transition-colors duration-300 flex items-center justify-center dark:bg-palestine-gold dark:text-palestine-green dark:hover:bg-palestine-white"
            >
              <Plus className="h-5 w-5 mr-2" />
              شامل کریں
            </button>
          </div>
        </div>
        <div className="mt-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-300">
            تفصیل
          </label>
          <textarea
            id="description"
            value={newCategory.description}
            onChange={(e) => setNewCategory({...newCategory, description: e.target.value})}
            rows={2}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-palestine-green focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
            placeholder="زمرے کی تفصیل"
          />
        </div>
      </div>

      {/* Categories List */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-800">
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-palestine-green dark:text-palestine-gold">تمام زمرے</h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">نام</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">تفصیل</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">اسلاگ</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">کارروائی</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
              {categories.map((category) => (
                <tr key={category.id} className="dark:hover:bg-gray-700/50">
                  {editingId === category.id && editingCategory ? (
                    <>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <input
                          type="text"
                          value={editingCategory.name}
                          onChange={(e) => setEditingCategory({...editingCategory, name: e.target.value})}
                          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-palestine-green focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        />
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                        <textarea
                          value={editingCategory.description}
                          onChange={(e) => setEditingCategory({...editingCategory, description: e.target.value})}
                          rows={2}
                          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-palestine-green focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                        <input
                          type="text"
                          value={editingCategory.slug}
                          onChange={(e) => setEditingCategory({...editingCategory, slug: e.target.value})}
                          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-palestine-green focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium flex space-x-2">
                        <button
                          onClick={saveEditing}
                          className="text-green-600 hover:text-green-900 dark:text-green-400 dark:hover:text-green-300"
                          title="محفوظ کریں"
                        >
                          <Save className="h-5 w-5" />
                        </button>
                        <button
                          onClick={cancelEditing}
                          className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
                          title="منسوخ کریں"
                        >
                          <X className="h-5 w-5" />
                        </button>
                      </td>
                    </>
                  ) : (
                    <>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">{category.name}</td>
                      <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">{category.description}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{category.slug}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium flex space-x-2">
                        <button
                          onClick={() => startEditing(category)}
                          className="text-palestine-green hover:text-green-700 dark:text-palestine-gold dark:hover:text-palestine-white"
                          title="تدوین"
                        >
                          <Pencil className="h-5 w-5" />
                        </button>
                        <button
                          onClick={() => deleteCategory(category.id)}
                          className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300"
                          title="حذف"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
          
          {categories.length === 0 && (
            <div className="p-6 text-center text-gray-500 dark:text-gray-400">کوئی زمرے نہیں ملے</div>
          )}
        </div>
      </div>
    </div>
  );
}