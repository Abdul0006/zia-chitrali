'use client'
import Link from "next/link";

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  author: string;
  slug: string;
  thumbnail?: string;  // Add thumbnail prop
}

export default function BlogCard({ 
  id, 
  title, 
  excerpt, 
  date, 
  category, 
  author, 
  slug,
  thumbnail
}: BlogCardProps) {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800">
      {thumbnail ? (
        <div className="relative h-48 w-full">
          <img 
            src={thumbnail} 
            alt={title} 
            className="w-full h-full object-cover"
            onError={(e) => {
              // Fallback if image fails to load
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2NjYyIvPjx0ZXh0IHg9IjUwIiB5PSI1MCIgZm9udC1zaXplPSIxMiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iIGZpbGw9IiNmZmYiPlBIU1Q8L3RleHQ+PC9zdmc+';
            }}
          />
        </div>
      ) : (
        <div className="h-48 bg-gray-200 border-2 border-dashed rounded-t-lg w-full flex items-center justify-center">
          <span className="text-gray-500">تصویر دستیاب نہیں ہے</span>
        </div>
      )}
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <span className="text-xs font-semibold px-2 py-1 bg-palestine-red text-palestine-white rounded">
            {category}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-300">{date}</span>
        </div>
        
        <h3 className="text-xl font-bold mb-2 font-jameel text-palestine-green dark:text-palestine-gold">{title}</h3>
        
        <p className="text-gray-700 mb-4 font-jameel dark:text-gray-300">{excerpt}</p>
        
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600 dark:text-gray-300">مصنف: {author}</span>
          <Link 
            href={`/posts/${slug}`}
            className="text-palestine-green hover:text-palestine-red font-semibold transition-colors duration-300 dark:text-palestine-gold dark:hover:text-palestine-white"
          >
            مزید پڑھیں →
          </Link>
        </div>
      </div>
    </article>
  );
}