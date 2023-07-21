import './globals.css';
import type { Metadata } from 'next';
import { Quicksand } from 'next/font/google';
import Header from '../components/Header';
import Footer from '../components/Footer';

const quicksand = Quicksand({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'rent-shield',
  description: 'rent-shield',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${quicksand.className} text-lg`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
