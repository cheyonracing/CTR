import type { Metadata } from 'next';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Chennai Turbo Riders | Official Racing Team',
  description: 'Official website of Chennai Turbo Riders - Professional Racing Team competing in the Indian Racing League',
  keywords: ['Chennai Turbo Riders', 'CTR', 'Racing', 'IRL', 'Formula 4', 'Motorsport', 'India'],
  icons: {
    icon: '/CTR_yellow.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
