import type { Metadata } from 'next';

import './globals.css';
import Navbar from '@/components/Nav/Navbar';
import Footer from '@/components/Nav/Footer';
import NavLarge from '@/components/Nav/NavLarge';

export const metadata: Metadata = {
  title: "Swensen's Ice Cream",
  description: 'Codediva assignment',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <main>
          <div className='relative h-auto'>
            <NavLarge />
            <Navbar />
            <div className='h-[72px] w-screen lg:hidden'></div>
            {children}
            <Footer />
          </div>
        </main>
      </body>
    </html>
  );
}
