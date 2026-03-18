// app/layout.tsx
import type { Metadata } from 'next';
import { Playfair_Display, DM_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { MouseGlow } from '@/components/ui/MouseGlow';
import { personalInfo } from '@/lib/data';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: `${personalInfo.name} — ${personalInfo.title}`,
  description: personalInfo.bio,
  keywords: ['developer', 'portfolio', 'full-stack', 'React', 'Next.js', 'Node.js'],
  authors: [{ name: personalInfo.name }],
  openGraph: {
    type: 'website',
    title: `${personalInfo.name} — Portfolio`,
    description: personalInfo.bio,
    siteName: `${personalInfo.name} Portfolio`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${dmSans.variable} ${jetbrains.variable} font-body bg-[#0a0a0a] text-[#f5f0e8] antialiased`}
      >
        <div className="noise-overlay" />
        <MouseGlow />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
