"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ThemeToggle from "@/src/components/common/ThemeToggle";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Navigation links
  const navLinks = [
    { name: "صفحۂ اول", path: "/" },
    { name: "کہانیاں", path: "/stories" },
    { name: "تاریخ", path: "/history" },
    { name: "اپ ڈیٹس", path: "/updates" },
    { name: "تمام پوسٹس", path: "/posts" },
    { name: "ہم سے رابطہ کریں", path: "/contact" },
  ];

  return (
    <header className="bg-palestine-green text-white shadow-md dark:bg-gray-800 dark:text-white">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo/Title */}
          <Link href="/" className="text-xl font-bold flex items-center">
            <span className="text-palestine-white font-jameel dark:text-palestine-gold">ضیاء چترالی</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`hover:text-palestine-gold transition-colors duration-300 ${
                  pathname === link.path ? "text-palestine-gold font-semibold" : ""
                } dark:hover:text-palestine-white`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Admin Link and Theme Toggle */}
          <div className="flex items-center space-x-4">
            <Link 
              href="/admin" 
              className="hidden md:block bg-palestine-white text-palestine-green px-4 py-2 rounded-md font-semibold hover:bg-palestine-gold transition-colors duration-300 dark:bg-palestine-gold dark:text-palestine-green dark:hover:bg-palestine-white"
            >
              ایڈمن
            </Link>

            <ThemeToggle />
            
            {/* Mobile menu button */}
            <button
              className="md:hidden text-white focus:outline-none dark:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-2 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`block px-3 py-2 rounded-md ${
                  pathname === link.path
                    ? "bg-palestine-gold text-palestine-green"
                    : "bg-[#005a2d] hover:bg-palestine-gold hover:text-palestine-green dark:bg-gray-700 dark:hover:bg-gray-600"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/admin"
              className="block px-3 py-2 rounded-md bg-palestine-white text-palestine-green hover:bg-palestine-gold mt-2 dark:bg-palestine-gold dark:text-palestine-green dark:hover:bg-palestine-white"
            >
              ایڈمن
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}