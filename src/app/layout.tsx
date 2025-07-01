import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Poppins, Charm } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

const charm = Charm({
  variable: '--font-charm',
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'Portfólio',
  description: 'Frontend Developer apaixonada por experiências digitais.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          ${poppins.variable}
          ${charm.variable}
          antialiased
        `}
      >
        {children}
      </body>
    </html>
  );
}
