export default function Footer() {
  return (
    <footer className="bg-palestine-green text-white py-8 mt-12 dark:bg-gray-800 dark:text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold font-jameel">ضیاء چترالی</h3>
            <p className="mt-2 text-sm">فلسطین کی خبروں، تاریخ اور اپ ڈیٹس کا ترجمان</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <p className="text-sm">© {new Date().getFullYear()} ضیاء چترالی۔ تمام حقوق محفوظ ہیں۔</p>
            <p className="text-xs mt-2">فلسطینیوں کی آواز بنیں</p>
          </div>
        </div>
      </div>
    </footer>
  );
}