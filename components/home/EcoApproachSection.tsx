'use client';

import { motion } from 'framer-motion';
import { Leaf, Heart, Sparkles, Shield } from 'lucide-react';

export default function EcoApproachSection() {
  const features = [
    { icon: Leaf, title: 'Plant-Based Products', description: 'Gentle on your home, kind to the environment' },
    { icon: Heart, title: 'HEPA Vacuuming', description: 'Advanced filtration for cleaner air' },
    { icon: Sparkles, title: 'Thoughtful Cleaning', description: 'Detailed routines that respect your space' },
    { icon: Shield, title: 'Safe for Everyone', description: 'Perfect for homes with children and pets' },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-eco-muted to-cream">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-charcoal mb-6">Our Eco-Conscious Approach</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-eco to-eco-sage rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-2">{feature.title}</h3>
              <p className="text-charcoal/70">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
