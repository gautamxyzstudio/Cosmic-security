import type { Metadata } from 'next';
import { Lato } from 'next/font/google';
import './globals.css';

import Header from '@/components/header/Header';
import Footer from '@/appComponents/footer/Footer';
import { MaterialUiThemeProvider } from '@/provider/MaterialUiThemeProvider';

const latoMono = Lato({
  variable: '--font-lato-mono',
  subsets: ['latin'],
  weight: ['400'],
});

export const metadata: Metadata = {
  title: 'Cosmic Security - Our Business is to protect yours',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${latoMono.className} bg-background antialiased`}>
        <MaterialUiThemeProvider>
          <Header />
          {children}
          <Footer />
        </MaterialUiThemeProvider>
      </body>
    </html>
  );
}
