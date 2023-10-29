import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { LayoutParams } from './common/layout.type';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'DevStore',
};

export default function RootLayout({ children }: LayoutParams) {
  return (
    <html className={inter.variable} lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
