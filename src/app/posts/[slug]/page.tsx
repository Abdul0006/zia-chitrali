import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import { getBlogPostBySlug } from "@/src/lib/blog-data";
import { BlogPost } from "@/src/types/blog";

// Generate metadata for the blog post
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  
  if (!post) {
    return {};
  }
  
  return {
    title: `${post.title} - ضیاء چترالی`,
    description: post.excerpt,
    keywords: post.tags?.join(', '),
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  // In a real app, this would be an API call to fetch the post
  const { slug } = await params;
  const post: BlogPost | undefined = getBlogPostBySlug(slug);
  
  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8 max-w-4xl">
        <article className="bg-white rounded-lg shadow-md overflow-hidden mb-8 dark:bg-gray-800">
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs font-semibold px-3 py-1 bg-palestine-gold text-palestine-green rounded-full dark:bg-palestine-gold dark:text-palestine-green">
                {post.category}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">{post.date}</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-4 font-jameel text-palestine-green dark:text-palestine-gold">{post.title}</h1>
            
            <div className="flex items-center text-gray-600 mb-6 dark:text-gray-300">
              <span className="font-semibold">مصنف:</span>
              <span className="ml-2">{post.author}</span>
            </div>
            
            <div className="prose max-w-none font-jameel text-lg text-gray-800 leading-relaxed dark:text-gray-200">
              {post.content.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-4">{paragraph}</p>
              ))}
            </div>
            
            {post.tags && post.tags.length > 0 && (
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold mb-2 text-palestine-green dark:text-palestine-gold">ٹیگز:</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm dark:bg-gray-700 dark:text-gray-300"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </article>
        
        <div className="bg-palestine-green text-white p-6 rounded-lg dark:bg-palestine-gold dark:text-palestine-green">
          <h3 className="text-xl font-bold mb-2">ضیاء چترالی کے دیگر مضامین بھی پڑھیں</h3>
          <p className="mb-4">فلسطین، اس کی تاریخ، کہانیاں اور حالات پر مزید تفصیلی مضامین کے لیے ہمارے بلاگ کو فالو کریں۔</p>
          <a 
            href="/posts" 
            className="inline-block bg-palestine-white text-palestine-green px-4 py-2 rounded-md font-semibold hover:bg-palestine-gold transition-colors duration-300 dark:bg-palestine-green dark:text-palestine-white dark:hover:bg-palestine-white dark:hover:text-palestine-green"
          >
            مزید مضامین دیکھیں
          </a>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}