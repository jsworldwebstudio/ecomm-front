import type { Metadata } from 'next';
import { Montserrat, Poppins } from 'next/font/google';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import './globals.css';
import { Providers } from '@/redux/Providers';
import Cart from '@/components/Cart/Cart';
import Toast from '@/components/Toast/Toast';
import { NextAuthProvider } from '@/components/AuthProvider/AuthProvider';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["italic", "normal"],
  variable: "--font-poppins",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["italic", "normal"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: 'JSWORLD Video Game Shop',
  description: 'Video Game eCommerce Shop',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${montserrat.variable}`}>
      <body suppressHydrationWarning={true}>
        <Toast />
        <Providers>
          <NextAuthProvider>
            <Cart />
            <Header />
            <main className="bg-primary-gradient min-h-screen">{children}</main>
            <Footer />
          </NextAuthProvider>
        </Providers>
      </body>
    </html>
  )
}
