import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/navbar/Navbar';
import CinematicLoading from '@/components/loading/CinematicLoading';
import CustomCursor from '@/components/cursor/CustomCursor';
import Footer from '@/components/footer/Footer';

export const metadata: Metadata = {
  title: 'Kishore | AI/ML • Full-Stack • Data',
  description: 'Portfolio of Kishore — Computer Science student focused on AI/ML, Full-Stack Development, and Data Analytics.',
  keywords: ['Kishore', 'VK Portfolio', 'AI Engineer', 'ML Engineer', 'Full-Stack Developer', 'Data Analyst', 'Next.js'],
  authors: [{ name: 'Kishore' }],
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-black min-h-screen flex flex-col antialiased">
        <CinematicLoading />
        <CustomCursor />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
