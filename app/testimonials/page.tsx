'use client';

import { motion } from 'framer-motion';
import { Star, Quote, ArrowRight, Sparkles } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    location: 'Edmonton, AB',
    service: 'Recurring Home Cleaning',
    rating: 5,
    text: 'B.Tech Eco Clean has been a game-changer for our family. Their team is professional, thorough, and always uses eco-friendly products. Our home has never felt cleaner or healthier!',
    date: 'March 2026',
  },
  {
    id: 2,
    name: 'Michael Chen',
    location: 'Mississauga, ON',
    service: 'Office Cleaning',
    rating: 5,
    text: 'We switched to B.Tech for our office cleaning and couldn\'t be happier. They work after hours, never disrupt our team, and the office always looks pristine in the morning.',
    date: 'February 2026',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    location: 'Brampton, ON',
    service: 'Deep Clean & Move-Out',
    rating: 5,
    text: 'I needed a move-out clean on short notice and B.Tech delivered beyond my expectations. They were flexible, efficient, and left the place spotless. Highly recommend!',
    date: 'March 2026',
  },
  {
    id: 4,
    name: 'David Thompson',
    location: 'Oakville, ON',
    service: 'Post-Construction',
    rating: 5,
    text: 'After a major renovation, our home was covered in dust. B.Tech\'s post-construction cleaning was thorough and professional. They made our home move-in ready.',
    date: 'January 2026',
  },
  {
    id: 5,
    name: 'Lisa Patel',
    location: 'Vaughan, ON',
    service: 'Recurring Home Cleaning',
    rating: 5,
    text: 'The consistency and quality from B.Tech is unmatched. Same friendly team every visit, always on time, and they remember all the little details about how we like things done.',
    date: 'March 2026',
  },
  {
    id: 6,
    name: 'James Wilson',
    location: 'Edmonton, AB',
    service: 'Green Deep Clean',
    rating: 5,
    text: 'As someone with allergies, I appreciate B.Tech\'s commitment to plant-based products. The green deep clean made a noticeable difference in air quality!',
    date: 'February 2026',
  },
  {
    id: 7,
    name: 'Amanda Foster',
    location: 'Mississauga, ON',
    service: 'Retail Cleaning',
    rating: 5,
    text: 'Our boutique needs to look perfect for customers every day. B.Tech delivers consistent, high-quality cleaning that keeps our storefront welcoming.',
    date: 'January 2026',
  },
  {
    id: 8,
    name: 'Robert Kim',
    location: 'Brampton, ON',
    service: 'Office Cleaning',
    rating: 5,
    text: 'Professional, reliable, and eco-conscious. B.Tech checks all the boxes for our coworking space. Our members constantly compliment how clean everything is.',
    date: 'March 2026',
  },
  {
    id: 9,
    name: 'Jennifer Martinez',
    location: 'Toronto, ON',
    service: 'Deep Clean & Move-Out',
    rating: 5,
    text: 'I was stressed about getting my security deposit back, but B.Tech\'s deep clean was so thorough that my landlord was impressed. Worth every penny!',
    date: 'February 2026',
  },
];

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cream-soft via-eco-muted to-cream-soft">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <motion.div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-eco/30 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-gradient-radial from-primary/20 to-transparent rounded-full blur-3xl" />
        </motion.div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block bg-gradient-to-r from-eco to-eco-sage bg-clip-text text-transparent font-semibold text-lg mb-4"
            >
              Client Testimonials
            </motion.span>
            <h1 className="text-5xl md:text-7xl font-bold text-charcoal mb-6">
              What Our Clients{' '}
              <span className="bg-gradient-to-r from-eco via-eco-sage to-eco-forest bg-clip-text text-transparent">
                Are Saying
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-charcoal/70 leading-relaxed">
              Real reviews from real clients who trust B.Tech Eco Clean
            </p>
          </motion.div>
        </div>
      </section>

      {/* Rating Summary */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto bg-white rounded-3xl p-12 shadow-2xl text-center"
          >
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Star className="w-12 h-12 fill-eco text-eco" />
                </motion.div>
              ))}
            </div>
            <div className="text-6xl font-bold bg-gradient-to-r from-eco to-eco-sage bg-clip-text text-transparent mb-4">
              5.0
            </div>
            <div className="text-xl text-charcoal/70">
              Based on <span className="font-bold text-charcoal">500+ reviews</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-eco/30 transition-all h-full flex flex-col relative overflow-hidden"
                >
                  {/* Quote icon */}
                  <div className="absolute top-4 right-4 opacity-10">
                    <Quote className="w-20 h-20 text-eco" />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4 relative z-10">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-eco text-eco" />
                    ))}
                  </div>

                  {/* Testimonial text */}
                  <p className="text-charcoal/80 leading-relaxed mb-6 flex-grow italic relative z-10">
                    "{testimonial.text}"
                  </p>

                  {/* Author info */}
                  <div className="relative z-10">
                    <div className="font-bold text-charcoal text-lg">{testimonial.name}</div>
                    <div className="text-sm text-charcoal/60">{testimonial.location}</div>
                    <div className="mt-2 inline-block bg-eco/10 text-eco px-3 py-1 rounded-full text-sm font-semibold">
                      {testimonial.service}
                    </div>
                    <div className="text-xs text-charcoal/40 mt-2">{testimonial.date}</div>
                  </div>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-eco via-eco-sage to-eco" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <motion.div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-eco/30 to-transparent rounded-full blur-3xl" />
        </motion.div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
              Join Our{' '}
              <span className="bg-gradient-to-r from-eco to-eco-sage bg-clip-text text-transparent">
                Happy Clients
              </span>
            </h2>
            <p className="text-xl text-charcoal/70 mb-8">
              Experience the B.Tech difference and see why our clients love us
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-primary via-primary-dark to-eco text-white px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-eco/40 transition-all"
            >
              <Sparkles className="w-6 h-6" />
              Book Your First Clean
              <ArrowRight className="w-6 h-6" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
