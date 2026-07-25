'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Phone, Mail, Calendar } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/cta-clean-interior.jpg)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/95 via-primary/90 to-eco-forest/80" />
      </div>

      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-eco/30 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">
            Ready for a space that <span className="bg-gradient-to-r from-eco-light to-eco bg-clip-text text-transparent">feels lighter?</span>
          </h2>
          <p className="text-2xl text-white/90 mb-12">
            Book your cleaning service today and experience the B.Tech Eco Clean difference
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href="/contact"
              className="group relative overflow-hidden bg-gradient-to-r from-eco to-eco-sage text-white px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-eco/50 transition-all hover:scale-105 flex items-center gap-3"
            >
              <Calendar className="w-6 h-6" />
              <span>Book a Clean</span>
              <motion.div className="absolute inset-0 bg-gradient-to-r from-eco-sage to-eco" initial={{ x: '-100%' }} whileHover={{ x: 0 }} transition={{ duration: 0.4 }} />
              <span className="relative z-10"></span>
            </Link>

            <a
              href="tel:+14167105808"
              className="bg-white text-primary px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-xl transition-all hover:scale-105 flex items-center gap-3"
            >
              <Phone className="w-6 h-6" />
              <span>Call Now</span>
            </a>

            <a
              href="mailto:benipalsandeep03@gmail.com"
              className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/20 transition-all hover:scale-105 flex items-center gap-3"
            >
              <Mail className="w-6 h-6" />
              <span>Email Us</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
