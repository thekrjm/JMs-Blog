import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Header';
import Footer from '@/components/Footer';

const Sans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'JM의 블로그',
    template: 'JM의 블로그 | %s',
  },
  description: '전향한 개발자 JM블로그',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={Sans.className}>
      <body className="flex flex-col w-full max-w-screen-2xl mx-auto">
        <Navbar />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
