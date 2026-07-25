'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, ChevronUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-dark text-white">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-gradient-radial-eco"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-radial from-eco-sage to-transparent"
        />
      </div>

      {/* Water ripple animation */}
      <motion.div
        animate={{
          scale: [1, 2, 1],
          opacity: [0.1, 0, 0.1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeOut',
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-2 border-eco"
      />

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Top section with statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cream via-eco-light to-cream bg-clip-text text-transparent">
            A Cleaner Space Starts Here.
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-eco to-eco-sage px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all hover:scale-105"
            >
              Book a Clean
            </Link>
            <a
              href="tel:+14167105808"
              className="bg-white text-primary px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all hover:scale-105 flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>
        </motion.div>

        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-eco to-eco-sage flex items-center justify-center">
                  <span className="text-white font-bold text-xl">B</span>
                </div>
                <div>
                  <div className="font-bold text-lg">B.Tech Eco Clean</div>
                  <div className="text-eco-light text-xs">Plant-based cleaning</div>
                </div>
              </div>
              <p className="text-cream-soft/80 text-sm leading-relaxed">
                Professional residential and commercial cleaning services using plant-based products for a healthier, calmer space.
              </p>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-eco-light">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Services', 'Gallery', 'Testimonials', 'Pricing', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-cream-soft/80 hover:text-eco-light transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-eco rounded-full group-hover:w-2 transition-all" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-eco-light">Our Services</h3>
            <ul className="space-y-2 text-sm text-cream-soft/80">
              <li>• Recurring Home Cleaning</li>
              <li>• Deep Clean & Move-Out</li>
              <li>• Office & Coworking</li>
              <li>• Retail & Storefronts</li>
              <li>• Post-Construction</li>
              <li>• Green Deep Clean</li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-eco-light">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+14167105808"
                  className="flex items-center gap-3 text-cream-soft/80 hover:text-eco-light transition-colors text-sm group"
                >
                  <Phone className="w-5 h-5 text-eco group-hover:scale-110 transition-transform" />
                  <span>+1 416-710-5808</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:benipalsandeep03@gmail.com"
                  className="flex items-center gap-3 text-cream-soft/80 hover:text-eco-light transition-colors text-sm group"
                >
                  <Mail className="w-5 h-5 text-eco group-hover:scale-110 transition-transform" />
                  <span className="break-all">benipalsandeep03@gmail.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-cream-soft/80 text-sm">
                <MapPin className="w-5 h-5 text-eco flex-shrink-0 mt-0.5" />
                <span>Serving Toronto, Mississauga, Brampton, Oakville, Vaughan</span>
              </li>
              <li className="flex items-start gap-3 text-cream-soft/80 text-sm">
                <Clock className="w-5 h-5 text-eco flex-shrink-0 mt-0.5" />
                <span>Mon-Sat: 8:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cream-soft/60 text-sm text-center md:text-left">
            © {new Date().getFullYear()} B.Tech Eco Clean. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm">
            <Link href="/privacy-policy" className="text-cream-soft/60 hover:text-eco-light transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-cream-soft/60 hover:text-eco-light transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="absolute bottom-8 right-8 bg-eco hover:bg-eco-sage text-white p-3 rounded-full shadow-lg transition-colors"
        aria-label="Back to top"
      >
        <ChevronUp className="w-6 h-6" />
      </motion.button>

      {/* Decorative leaves */}
      <motion.div
        animate={{
          y: [0, -10, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-12 right-12 opacity-20"
      >
        <svg width="60" height="60" viewBox="0 0 100 100" fill="none">
          <path d="M50 50 Q30 30, 20 40 T50 50" fill="#2F8F2F" opacity="0.8" />
          <path d="M50 50 Q70 30, 80 40 T50 50" fill="#4CAF50" opacity="0.9" />
        </svg>
      </motion.div>
    </footer>
  );
}
