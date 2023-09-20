import Layout from '@/components/layout';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Toast from '@/components/common/toast';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toast />
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: {
    template: '%s | HJINN',
    default: 'HJINN',
  },
  authors: [{ name: 'Hojun In', url: 'https://github.com/hojunin' }],
  colorScheme: 'dark',
  creator: 'Hojun In',
  publisher: 'Hojun In',
  openGraph: {
    title: 'HJINN',
    description: '내 웹사이트야',
    url: 'https://hojunin.com',
    siteName: 'hjinn',
    images: [
      {
        url: 'https://avatars.githubusercontent.com/u/18079523?v=4',
        width: 800,
        height: 800,
        alt: '내 사진',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
};
