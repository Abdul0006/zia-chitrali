import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import BlogCard from "@/src/components/ui/BlogCard";
import { getAllBlogPosts } from "@/src/lib/blog-data";
import { BlogPost } from "@/src/types/blog";

export default function BlogListingPage() {
  // In a real app, this would be an API call to fetch posts
  const posts: BlogPost[] = getAllBlogPosts();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 font-jameel text-palestine-green">فلسطین کی کہانیاں</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto font-jameel">
            یہاں آپ کو فلسطین کی کہانیاں، تاریخ اور حالیہ اپ ڈیٹس ملیں گی۔ ہم فلسطینیوں کی آواز بننے کی کوشش کر رہے ہیں۔
          </p>
        </section>

        <section>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold font-jameel text-palestine-green">تمام پوسٹس</h2>
            <div className="flex space-x-2">
              <button className="px-4 py-2 bg-palestine-green text-white rounded-md hover:bg-green-700 transition-colors duration-300">
                نئی پوسٹس
              </button>
              <button className="px-4 py-2 border border-palestine-green text-palestine-green rounded-md hover:bg-palestine-green hover:text-white transition-colors duration-300">
                قدیم پوسٹس
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <BlogCard
                key={post.id}
                id={post.id}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                category={post.category}
                author={post.author}
                slug={post.slug}
                thumbnail={post.thumbnail}  // Thumbnail prop added
              />
            ))}
          </div>
          
          {posts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-gray-700 font-jameel">ابھی تک کوئی پوسٹس نہیں ہیں۔ براہ کرم بعد میں دیکھیں۔</p>
            </div>
          )}
        </section>
      </main>
      
      <Footer />
    </div>
  );
}