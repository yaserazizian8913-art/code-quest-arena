import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Code Quest Class',
  description: 'Private coding classroom for teacher and students.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
