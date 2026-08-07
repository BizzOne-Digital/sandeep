'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Star, ArrowRight } from 'lucide-react';

export default function TestimonialPreview() {
  const testimonials = [
    {
      name: 'Sarah M.',
      service: 'Recurring Home Cleaning',
      rating: 5,
      review: 'Exceptional service! The team is professional, thorough, and always on time. My home has never looked better.',
    },
    {
      name: 'John D.',
      service: 'Office Cleaning',
      rating: 5,
      review: 'Great experience with B.Tech. They keep our office spotless and the eco-friendly products are a huge plus.',
    },
    {
      name: 'Emily R.',
      service: 'Deep Clean',
      rating: 5,
      review: 'Absolutely amazing deep clean before we moved in. Every corner was spotless. Highly recommend!',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-primary-dark to-primary text-white relative overflow-hidden">
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-eco/20 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">What Our Clients Say</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">Real feedback from satisfied customers</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-eco text-eco" />
                ))}
              </div>
              <p className="text-white/90 mb-6 italic">"{testimonial.review}"</p>
              <div>
                <p className="font-bold text-white">{testimonial.name}</p>
                <p className="text-sm text-eco-light">{testimonial.service}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/testimonials" className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform">
            Read More Reviews <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
