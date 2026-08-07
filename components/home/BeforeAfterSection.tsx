'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function BeforeAfterSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            <span className="text-charcoal">See the </span>
            <span className="bg-gradient-to-r from-eco to-eco-sage bg-clip-text text-transparent">
              Transformation
            </span>
          </h2>
          <p className="text-xl text-charcoal/70 max-w-2xl mx-auto mb-16">
            Real results from our professional cleaning services
          </p>
          
          <div className="flex items-center justify-center gap-4 p-12 bg-eco-muted/30 rounded-3xl">
            <Sparkles className="w-12 h-12 text-eco" />
            <p className="text-charcoal text-lg">Before/After comparison component - Interactive slider</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
