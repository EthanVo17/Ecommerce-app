import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

import Header from '../components/ui/Header/Header';
import Footer from '../components/ui/Footer/Footer';

config.autoAddCss = false;

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin', 'vietnamese'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'TechStore — Mua sắm công nghệ hàng đầu',
  description:
    'Khám phá bộ sưu tập điện thoại, laptop và phụ kiện mới nhất. Cam kết chính hãng, giá tốt nhất thị trường.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-[var(--font-inter)]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
