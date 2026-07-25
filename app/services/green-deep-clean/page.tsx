'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Leaf, Check, Clock, ArrowRight, Heart, Baby, PawPrint, Sparkles } from 'lucide-react';

const features = [
  '100% plant-based cleaning products',
  'HEPA filtration vacuuming',
  'Allergen reduction focus',
  'Chemical-free disinfection',
  'Eco-friendly floor care',
  'Green bathroom sanitization',
  'Kitchen degreasing with natural products',
  'Non-toxic window cleaning',
  'Safe for children and pets',
  'Biodegradable supplies',
  'Sustainable cleaning practices',
  'Certified eco-friendly products',
];

const pricing = [
  { size: 'Studio/1BR', time: '3-4 hours', price: '$179+' },
  { size: '2BR/1BA', time: '4-5 hours', price: '$229+' },
  { size: '3BR/2BA', time: '5-6 hours', price: '$289+' },
  { size: '4BR/3BA', time: '6-8 hours', price: '$349+' },
];

const process = [
  {
    step: 1,
    title: 'Eco Assessment',
    description: 'We evaluate your space and identify eco-friendly cleaning needs.',
  },
  {
    step: 2,
    title: 'Green Deep Clean',
    description: 'Thorough cleaning using only plant-based, non-toxic products.',
  },
  {
    step: 3,
    title: 'Air Quality Focus',
    description: 'HEPA vacuuming and allergen reduction throughout your space.',
  },
  {
    step: 4,
    title: 'Healthy Home',
    description: 'You enjoy a spotless, chemical-free, healthier environment.',
  },
];

const benefits = [
  {
    icon: Heart,
    title: 'Family Safe',
    description: 'No harsh chemicals means safer spaces for everyone.',
  },
  {
    icon: Baby,
    title: 'Baby Friendly',
    description: 'Perfect for homes with infants and young children.',
  },
  {
    icon: PawPrint,
    title: 'Pet Safe',
    description: 'Plant-based products are completely safe for pets.',
  },
  {
    icon: Leaf,
    title: 'Eco Conscious',
    description: 'Sustainable practices that protect our planet.',
  },
];

export default function GreenDeepCleanPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cream-soft via-eco-muted to-cream-soft">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <motion.div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-eco-light/40 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-gradient-radial from-eco/20 to-transparent rounded-full blur-3xl" />
        </motion.div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <Link href="/services" className="inline-flex items-center gap-2 text-eco-light hover:text-eco mb-6 transition-colors">
              <ArrowRight className="w-4 h-4 rotate-180" />
              Back to Services
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-eco-light to-eco rounded-2xl flex items-center justify-center">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-6xl font-bold text-charcoal">
                  Green Deep Clean
                </h1>
                <p className="text-xl text-charcoal/70 mt-2">100% plant-based deep cleaning for sensitive homes</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-white px-6 py-3 rounded-full shadow-lg">
                <span className="text-2xl font-bold text-eco">from $179+</span>
              </div>
              <div className="bg-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2">
                <Clock className="w-5 h-5 text-eco" />
                <span className="text-charcoal">3-8 hours</span>
              </div>
              <div className="bg-white px-6 py-3 rounded-full shadow-lg">
                <span className="inline-flex items-center gap-2 text-eco font-semibold">
                  <Sparkles className="w-5 h-5" />
                  Most Popular
                </span>
              </div>
            </div>

            <p className="text-lg text-charcoal/80 leading-relaxed">
              Our Green Deep Clean service combines the thoroughness of a deep clean with the safety of 100% plant-based products. Perfect for families with children, pets, allergies, or anyone who wants a healthier home environment without compromising on cleanliness.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
              What's{' '}
              <span className="bg-gradient-to-r from-eco-light to-eco bg-clip-text text-transparent">
                Included
              </span>
            </h2>
            <p className="text-xl text-charcoal/70">Eco-friendly deep cleaning for every surface</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-3 bg-white p-4 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex-shrink-0 w-6 h-6 bg-eco/10 rounded-full flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-eco" />
                </div>
                <span className="text-charcoal/80">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
              Transparent{' '}
              <span className="bg-gradient-to-r from-eco-light to-eco bg-clip-text text-transparent">
                Pricing
              </span>
            </h2>
            <p className="text-xl text-charcoal/70">Clear rates for eco-friendly deep cleaning</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {pricing.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-eco/30 transition-all text-center"
              >
                <div className="text-3xl font-bold text-eco mb-2">{tier.price}</div>
                <div className="text-lg font-semibold text-charcoal mb-2">{tier.size}</div>
                <div className="text-sm text-charcoal/60 flex items-center justify-center gap-2">
                  <Clock className="w-4 h-4" />
                  {tier.time}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-8 text-charcoal/70"
          >
            <p className="text-sm">
              * Prices vary based on home condition and specific requirements.
              <br />
              All plant-based products included at no extra cost.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
              How It{' '}
              <span className="bg-gradient-to-r from-eco-light to-eco bg-clip-text text-transparent">
                Works
              </span>
            </h2>
            <p className="text-xl text-charcoal/70">Our green deep cleaning process</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-eco/30 transition-all h-full">
                  <div className="w-12 h-12 bg-gradient-to-r from-eco-light to-eco rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-charcoal mb-3">{item.title}</h3>
                  <p className="text-charcoal/70">{item.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-8 h-0.5 bg-eco/20" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
              Why Choose{' '}
              <span className="bg-gradient-to-r from-eco-light to-eco bg-clip-text text-transparent">
                Green Cleaning
              </span>
            </h2>
            <p className="text-xl text-charcoal/70">Benefits of plant-based deep cleaning</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-eco/30 transition-all text-center"
              >
                <div className="w-16 h-16 bg-eco/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-eco" />
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-3">{benefit.title}</h3>
                <p className="text-charcoal/70">{benefit.description}</p>
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
              Ready for a{' '}
              <span className="bg-gradient-to-r from-eco-light to-eco bg-clip-text text-transparent">
                Healthier Home?
              </span>
            </h2>
            <p className="text-xl text-charcoal/70 mb-8">
              Book your green deep clean today and breathe easier tomorrow
            </p>
            <Link href="/contact?service=green-deep-clean">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-eco-light via-eco to-eco-sage text-white px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-eco/40 transition-all"
              >
                <Sparkles className="w-6 h-6" />
                Schedule Green Clean
                <ArrowRight className="w-6 h-6" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
