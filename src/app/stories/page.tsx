import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import BlogCard from "@/src/components/ui/BlogCard";
import { getBlogPostsByCategory } from "@/src/lib/blog-data";
import { BlogCategory } from "@/src/types/blog";

export default function StoriesPage() {
  // In a real app, this would be an API call to fetch posts by category
  const stories = getBlogPostsByCategory(BlogCategory.STORIES);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 font-jameel text-palestine-green">کہانیاں</h1>
          <p className="text-lg text-white max-w-2xl mx-auto font-jameel">
            فلسطینیوں کی ذاتی کہانیاں، تجربات اور زندگی کی جدوجہد
          </p>
        </section>

        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stories.map((post) => (
              <BlogCard
                key={post.id}
                id={post.id}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                category={post.category}
                author={post.author}
                slug={post.slug}
                thumbnail={post.thumbnail}
              />
            ))}
          </div>
          
          {stories.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-gray-700 font-jameel">اس زمرے میں ابھی تک کوئی کہانیاں نہیں ہیں۔ براہ کرم بعد میں دیکھیں۔</p>
            </div>
          )}
        </section>
      </main>
      
      <Footer />
    </div>
  );
}