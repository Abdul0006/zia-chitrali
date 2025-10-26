import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import BlogCard from "@/src/components/ui/BlogCard";

// Mock data for blog posts with thumbnails
const mockPosts = [
  {
    id: "1",
    title: "فلسطین کی تاریخ کا ایک اہم باب",
    excerpt: "فلسطین کی تاریخ بہت قدیم ہے اور اس میں بہت سے اہم واقعات شامل ہیں جو ہمارے لیے سبق آموز ہیں۔",
    date: "15 مئی، 2025",
    category: "تاریخ",
    author: "ضیاء چترالی",
    slug: "palestine-history",
    thumbnail: "/humanitarianaid.png"
  },
  {
    id: "2",
    title: "غزہ کے عوام کی جدوجہد",
    excerpt: "غزہ کے عوام کی روزانہ کی جدوجہد اور ان کی ہمت و بے مثال قربانیاں۔",
    date: "10 مئی، 2025",
    category: "کہانیاں",
    author: "ضیاء چترالی",
    slug: "gaza-struggle",
    thumbnail: "/standing.png"
  },
  {
    id: "3",
    title: "مشرق وسطی میں حالیہ تبدیلیاں",
    excerpt: "مشرق وسطی کے علاقے میں حالیہ تبدیلیوں اور ان کے اثرات کا جائزہ۔",
    date: "5 مئی، 2025",
    category: "اپ ڈیٹس",
    author: "ضیاء چترالی",
    slug: "middle-east-updates",
    thumbnail: "/justiceforpal.png"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-palestine-black via-palestine-green to-palestine-red py-16 md:py-24">
          <div className="absolute inset-0 opacity-10">
            <div className="pattern"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-10 md:mb-0">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-jameel text-palestine-white leading-tight">
                  فلسطین کی آواز، <span className="text-palestine-gold">ضیاء چترالی</span> کے قلم سے
                </h1>
                <p className="text-xl text-palestine-white mb-8 max-w-2xl font-jameel leading-relaxed">
                  فلسطین کی تاریخ، کہانیاں اور تازہ ترین اپ ڈیٹس کا ایک منفرد اور جامع ذریعہ جہاں حقائق کی آواز بلند ہوتی ہے
                </p>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="/posts" 
                    className="bg-palestine-gold text-palestine-green px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-400 transition-colors duration-300 shadow-lg"
                  >
                    مضامین دیکھیں
                  </a>
                  <a 
                    href="/about" 
                    className="bg-transparent border-2 border-palestine-white text-palestine-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-palestine-white hover:text-palestine-green transition-colors duration-300"
                  >
                    مزید جانیں
                  </a>
                </div>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <div className="bg-palestine-white p-2 rounded-full shadow-xl border-4 border-palestine-gold">
                  <img 
                    src="/zia.png" 
                    alt="ضیاء چترالی" 
                    className="rounded-xl w-48 h-48 md:w-56 md:h-56 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Content Section */}
        <section className="container mx-auto px-4 -mt-10 md:-mt-20 relative z-20">
          <div className="bg-white rounded-xl shadow-xl p-6 mb-12 dark:bg-gray-800">
            <h2 className="text-3xl font-bold mb-6 font-jameel text-palestine-green text-center dark:text-palestine-gold">تازہ ترین کہانیاں</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockPosts.map((post) => (
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
            
            <div className="text-center mt-8">
              <a 
                href="/posts" 
                className="inline-block bg-palestine-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300 dark:bg-palestine-gold dark:text-palestine-green dark:hover:bg-palestine-white"
              >
                مزید مضامین دیکھیں
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-10 md:mb-0 flex justify-center">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-64 h-64 overflow-hidden">
                  <img 
                    src="/zia.png" 
                    alt="ضیاء چترالی" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="md:w-2/3 md:pr-10 text-right">
                <h2 className="text-3xl font-bold mb-4 font-jameel text-palestine-green dark:text-palestine-gold">ضیاء چترالی کون ہیں؟</h2>
                <p className="text-lg text-gray-700 mb-4 font-jameel leading-relaxed dark:text-gray-300">
                  میں ضیاء چترالی ہوں، ایک صحافی، تجزیہ کار اور فلسطین کے مسئلے کا حل طلب مخالف، جو فلسطینیوں کی آواز بننے کی کوشش کر رہا ہوں۔ میرا مقصد فلسطین کی حقیقتوں کو دنیا کے سامنے لانا ہے۔
                </p>
                <p className="text-lg text-gray-700 mb-4 font-jameel leading-relaxed dark:text-gray-300">
                  میں نے فلسطین کے مسئلے پر گہرائی سے تحقیق کی ہے اور اس سلسلے میں متعدد مضامین اور کتابیں لکھی ہیں۔ میں ہر روز فلسطین کی تازہ کہانیوں، تاریخ اور حالات کے بارے میں معلومات فراہم کرتا ہوں۔
                </p>
                <a 
                  href="/about" 
                  className="inline-block mt-4 bg-palestine-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300 dark:bg-palestine-gold dark:text-palestine-green dark:hover:bg-palestine-white"
                >
                  مزید جانیں
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center font-jameel text-palestine-green dark:text-palestine-gold"> مختلف زمرے</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800">
                <div className="bg-palestine-green text-white rounded-xl w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 font-jameel text-palestine-green dark:text-palestine-gold">کہانیاں</h3>
                <p className="text-gray-600 mb-4 font-jameel dark:text-gray-300">
                  فلسطینیوں کی ذاتی کہانیاں اور ان کی روزمرہ کی زندگی کے واقعات
                </p>
                <a 
                  href="/stories" 
                  className="text-palestine-green font-semibold hover:text-palestine-red dark:text-palestine-gold dark:hover:text-palestine-white"
                >
                  مزید دیکھیں →
                </a>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800">
                <div className="bg-palestine-green text-white rounded-xl w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 font-jameel text-palestine-green dark:text-palestine-gold">تاریخ</h3>
                <p className="text-gray-600 mb-4 font-jameel dark:text-gray-300">
                  فلسطین کی تاریخ، اہم واقعات اور تاریخی پس منظر
                </p>
                <a 
                  href="/history" 
                  className="text-palestine-green font-semibold hover:text-palestine-red dark:text-palestine-gold dark:hover:text-palestine-white"
                >
                  مزید دیکھیں →
                </a>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800">
                <div className="bg-palestine-green text-white rounded-xl w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 font-jameel text-palestine-green dark:text-palestine-gold">اپ ڈیٹس</h3>
                <p className="text-gray-600 mb-4 font-jameel dark:text-gray-300">
                  مشرق وسطی میں حالیہ واقعات اور فلسطین کے بارے میں تازہ ترین خبریں
                </p>
                <a 
                  href="/updates" 
                  className="text-palestine-green font-semibold hover:text-palestine-red dark:text-palestine-gold dark:hover:text-palestine-white"
                >
                  مزید دیکھیں →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 bg-gradient-to-r from-palestine-green to-palestine-red text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-jameel">فلسطین کی آواز بنیں</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto font-jameel">
              ہمارے بلاگ کو فالو کریں تاکہ آپ کو ہمارے تازہ ترین مضامین اور اپ ڈیٹس موصول ہو سکیں
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="/subscribe" 
                className="bg-palestine-white text-palestine-green px-8 py-4 rounded-lg font-bold text-lg hover:bg-palestine-gold transition-colors duration-300 shadow-lg"
              >
                سبسکرائب کریں
              </a>
              <a 
                href="/contact" 
                className="bg-transparent border-2 border-palestine-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-palestine-white hover:text-palestine-green transition-colors duration-300"
              >
                رابطہ کریں
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}