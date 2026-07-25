'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function GalleryPreview() {
  return (
    <section className="py-24 bg-gradient-to-b from-cream to-eco-muted">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-charcoal mb-6">Featured Gallery</h2>
          <p className="text-xl text-charcoal/70 max-w-2xl mx-auto mb-8">See our work in action</p>
          <Link href="/gallery" className="inline-flex items-center gap-2 bg-gradient-to-r from-eco to-eco-sage text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform">
            View Full Gallery <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
