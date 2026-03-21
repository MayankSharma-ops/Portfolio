// app/layout.tsx
import type { Metadata } from 'next';
import { Playfair_Display, DM_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { Footer } from '@/components/layout/Footer';
import { MouseGlow } from '@/components/ui/MouseGlow';
import { PageTransition } from '@/components/ui/PageTransition';
import { ScrollToTop } from '@/components/ui/ScrollToTop';
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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body
        className={`${playfair.variable} ${dmSans.variable} ${jetbrains.variable} font-body bg-[var(--bg-primary)] text-[var(--text-primary)] antialiased`}
      >
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('portfolio-theme');if(t==='light')document.documentElement.setAttribute('data-theme','light');}catch(e){}})()`
          }}
        />
        <ThemeProvider>
          {/* Skip to content — accessibility */}
          <a
            href="#main-content"
            className="skip-link"
          >
            Skip to main content
          </a>
          <div className="noise-overlay" />
          <MouseGlow />
          <Navbar />
          <main id="main-content">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
