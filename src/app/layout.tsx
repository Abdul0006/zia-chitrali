import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/src/context/ThemeContext";

// Import the Jameel Noori Nastaleeq font
const jameelNooriNastaleeq = localFont({
  src: [
    {
      path: "../fonts/Jameel-Noori-Nastaleeq.ttf", // You'll need to download this font
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-jameel-noori-nastaleeq",
});

export const metadata: Metadata = {
  title: {
    default: "ضیاء چترالی - فلسطین کی آواز",
    template: "%s | ضیاء چترالی"
  },
  description: "فلسطین کی خبروں، تاریخ اور اپ ڈیٹس کا ترجمان - ضیاء چترالی کے بلاگ میں خوش آمدید",
  keywords: "فلسطین, ضیاء چترالی, فلسطینی کہانیاں, مشرق وسطی, خبریں",
  authors: [{ name: "ضیاء چترالی" }],
  creator: "ضیاء چترالی",
  publisher: "ضیاء چترالی",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://zia-chitrali-palestine-blog.com'),
  openGraph: {
    type: 'website',
    locale: 'ur_PK',
    url: 'https://zia-chitrali-palestine-blog.com',
    title: 'ضیاء چترالی - فلسطین کی آواز',
    description: 'فلسطین کی خبروں، تاریخ اور اپ ڈیٹس کا ترجمان',
    siteName: 'ضیاء چترالی کا بلاگ',
    images: [
      {
        url: '/og-image.jpg', // You would need to create this image
        width: 1200,
        height: 630,
        alt: 'ضیاء چترالی - فلسطین کی آواز',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ضیاء چترالی - فلسطین کی آواز',
    description: 'فلسطین کی خبروں، تاریخ اور اپ ڈیٹس کا ترجمان',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code', // Add your actual Google verification code
    yandex: 'yandex-verification-code',     // Add your actual Yandex verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ur" dir="rtl">
      <body
        className={`${jameelNooriNastaleeq.variable} antialiased bg-white dark:bg-gray-900 dark:text-white`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
