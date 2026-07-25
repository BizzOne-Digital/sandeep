'use client';

import { usePathname } from 'next/navigation';
import Header from './Header';
import Footer from './Footer';
import IntroAnimation from './IntroAnimation';

export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  // Hide Header/Footer for admin and auth pages
  const isAdminOrAuth = pathname?.startsWith('/admin') || pathname?.startsWith('/auth');

  if (isAdminOrAuth) {
    // Admin/Auth pages - no header, footer, or intro
    return <>{children}</>;
  }

  // Regular pages - show header, footer, and intro
  return (
    <>
      <IntroAnimation />
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </>
  );
}
