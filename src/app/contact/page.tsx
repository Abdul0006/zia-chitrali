import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 font-jameel text-palestine-green">ہم سے رابطہ کریں</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto font-jameel">
            فلسطین کی خبروں، تاریخ اور اپ ڈیٹس کا ترجمان - ضیاء چترالی کے ساتھ رابطہ قائم کریں
          </p>
        </section>

        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-6 font-jameel text-palestine-green">رابطے کی معلومات</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-700">ای میل</h3>
                  <p className="text-gray-600 font-jameel">zia.chitrali@example.com</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-700">فون</h3>
                  <p className="text-gray-600 font-jameel">+92-XXX-XXXXXXX</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-700">ایڈریس</h3>
                  <p className="text-gray-600 font-jameel">
                    123 خبریں گلی<br />
                    میڈیا سینٹر، چترال<br />
                    خیبر پختونخواہ، پاکستان
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-6 font-jameel text-palestine-green">پیغام بھیجیں</h2>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 font-jameel">
                    آپ کا نام
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-palestine-green focus:border-transparent font-jameel"
                    placeholder="آپ کا نام"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 font-jameel">
                    ای میل
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-palestine-green focus:border-transparent font-jameel"
                    placeholder="آپ کا ای میل"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1 font-jameel">
                    موضوع
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-palestine-green focus:border-transparent font-jameel"
                    placeholder="پیغام کا موضوع"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1 font-jameel">
                    پیغام
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-palestine-green focus:border-transparent font-jameel"
                    placeholder="آپ کا پیغام"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-palestine-green text-white py-3 px-4 rounded-md hover:bg-green-700 transition-colors duration-300 font-semibold font-jameel"
                >
                  پیغام بھیجیں
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}