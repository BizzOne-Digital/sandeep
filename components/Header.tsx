'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail } from 'lucide-react';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-cream-soft/95 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
        {/* Top availability strip */}
        <div className="bg-gradient-to-r from-primary to-primary-dark text-white py-2 px-4 text-center text-sm md:text-base">
          <div className="container mx-auto flex justify-center items-center gap-4 flex-wrap">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-eco rounded-full animate-pulse" />
              Now booking for this month
            </span>
            <a href="tel:+14167105808" className="hover:text-eco transition-colors flex items-center gap-1">
              <Phone className="w-4 h-4" />
              +1 416-710-5808
            </a>
            <a href="mailto:benipalsandeep03@gmail.com" className="hover:text-eco transition-colors flex items-center gap-1">
              <Mail className="w-4 h-4" />
              benipalsandeep03@gmail.com
            </a>
          </div>
        </div>

        {/* Main navigation */}
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <motion.img
                src="/images/logo-icon.png"
                alt="B.Tech Eco Clean Logo"
                className="w-12 h-12 md:w-14 md:h-14 object-contain"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              />
              <div className="hidden md:block">
                <div className="text-primary font-bold text-xl leading-tight">B.Tech Eco Clean</div>
                <div className="text-eco text-xs uppercase tracking-wider">Plant-based cleaning</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative text-sm font-medium transition-colors hover:text-eco ${
                    pathname === item.href ? 'text-eco' : 'text-charcoal'
                  }`}
                >
                  {item.name}
                  {pathname === item.href && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-2 left-0 right-0 h-0.5 bg-eco"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="hidden md:block relative overflow-hidden bg-gradient-to-r from-eco to-eco-sage text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 group"
            >
              <span className="relative z-10">Book a Clean</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-eco-sage to-eco"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-charcoal hover:text-eco transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 bg-gradient-to-br from-cream to-eco-muted pt-24 lg:hidden overflow-y-auto"
          >
            <nav className="container mx-auto px-4 py-8">
              <div className="flex flex-col gap-6">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block text-2xl font-semibold transition-colors hover:text-eco ${
                        pathname === item.href ? 'text-eco' : 'text-charcoal'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="mt-8 space-y-4"
                >
                  <Link
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full bg-gradient-to-r from-eco to-eco-sage text-white px-8 py-4 rounded-full font-semibold text-center shadow-lg"
                  >
                    Book a Clean
                  </Link>

                  <a
                    href="tel:+14167105808"
                    className="block w-full bg-primary text-white px-8 py-4 rounded-full font-semibold text-center shadow-lg"
                  >
                    Call Now
                  </a>
                </motion.div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile action bar */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white shadow-2xl border-t border-eco-muted"
      >
        <div className="grid grid-cols-3 gap-2 p-3">
          <a
            href="tel:+14167105808"
            className="flex flex-col items-center justify-center gap-1 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
          >
            <Phone className="w-5 h-5" />
            <span className="text-xs font-medium">Call</span>
          </a>

          <a
            href="sms:+14167105808"
            className="flex flex-col items-center justify-center gap-1 py-3 bg-eco-sage text-white rounded-lg hover:bg-eco transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span className="text-xs font-medium">Text</span>
          </a>

          <Link
            href="/contact"
            className="flex flex-col items-center justify-center gap-1 py-3 bg-gradient-to-r from-eco to-eco-sage text-white rounded-lg hover:shadow-lg transition-all"
          >
            <span className="text-lg">📅</span>
            <span className="text-xs font-medium">Book</span>
          </Link>
        </div>
      </motion.div>

      {/* Spacer for fixed header */}
      <div className="h-[120px] md:h-[104px]" />
    </>
  );
}
