import { ReactNode } from 'react';

export default function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen font-jameel bg-gray-100 dark:bg-gray-900 min-h-screen">
      {/* Admin Header */}
      <header className="bg-palestine-green text-white p-4 shadow-md dark:bg-gray-800 dark:text-white">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">ایڈمن پینل</h1>
          <a 
            href="/" 
            className="bg-palestine-white text-palestine-green px-4 py-2 rounded-md font-semibold hover:bg-palestine-gold transition-colors duration-300 dark:bg-palestine-gold dark:text-palestine-green dark:hover:bg-palestine-white"
          >
            ویب سائٹ پر جائیں
          </a>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Admin Sidebar */}
        <aside className="w-64 bg-white shadow-md p-4 hidden md:block dark:bg-gray-800 dark:text-white">
          <nav>
            <ul className="space-y-2">
              <li>
                <a 
                  href="/admin" 
                  className="block py-2 px-4 rounded hover:bg-palestine-gold hover:text-palestine-green transition-colors duration-300 dark:hover:bg-gray-700 dark:text-white"
                >
                  ڈیش بورڈ
                </a>
              </li>
              <li>
                <a 
                  href="/admin/posts" 
                  className="block py-2 px-4 rounded hover:bg-palestine-gold hover:text-palestine-green transition-colors duration-300 dark:hover:bg-gray-700 dark:text-white"
                >
                  پوسٹس
                </a>
              </li>
              <li>
                <a 
                  href="/admin/posts/new" 
                  className="block py-2 px-4 rounded hover:bg-palestine-gold hover:text-palestine-green transition-colors duration-300 dark:hover:bg-gray-700 dark:text-white"
                >
                  نئی پوسٹ
                </a>
              </li>
              <li>
                <a 
                  href="/admin/categories" 
                  className="block py-2 px-4 rounded hover:bg-palestine-gold hover:text-palestine-green transition-colors duration-300 dark:hover:bg-gray-700 dark:text-white"
                >
                  زمرے
                </a>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 p-4 md:p-6 bg-white dark:bg-gray-900 dark:text-white">
          {children}
        </main>
      </div>
    </div>
  );
}