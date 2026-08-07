'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Building2, Check, Clock, ArrowRight, Store, Star, Sparkles, TrendingUp } from 'lucide-react';

const features = [
  'Daily or weekly service options',
  'Front-of-house spotless presentation',
  'Display and shelving dusting',
  'Floor care and entrance maintenance',
  'Window and glass sparkling clean',
  'Fitting room sanitization',
  'Stockroom organization support',
  'Checkout counter cleaning',
  'Restroom deep cleaning',
  'Trash and recycling service',
  'Off-hours scheduling available',
  'Eco-friendly products safe for customers',
];

const pricing = [
  { size: 'Small Retail', space: 'Up to 1,500 sq ft', price: 'Custom' },
  { size: 'Medium Store', space: '1,500 - 3,000 sq ft', price: 'Custom' },
  { size: 'Large Retail', space: '3,000 - 5,000 sq ft', price: 'Custom' },
  { size: 'Multi-Location', space: 'Multiple stores', price: 'Custom' },
];

const process = [
  {
    step: 1,
    title: 'Store Walkthrough',
    description: 'We assess your retail space and specific presentation needs.',
  },
  {
    step: 2,
    title: 'Service Plan',
    description: 'We create a schedule that maintains your store appearance.',
  },
  {
    step: 3,
    title: 'Consistent Cleaning',
    description: 'Our team keeps your store pristine before customers arrive.',
  },
  {
    step: 4,
    title: 'Quality Checks',
    description: 'Regular inspections ensure your store always looks its best.',
  },
];

const benefits = [
  {
    icon: Star,
    title: 'First Impressions',
    description: 'A clean store attracts more customers and increases sales.',
  },
  {
    icon: Store,
    title: 'Brand Image',
    description: 'Maintain the professional appearance your brand deserves.',
  },
  {
    icon: TrendingUp,
    title: 'Customer Retention',
    description: 'Clean spaces encourage customers to stay longer and return.',
  },
  {
    icon: Sparkles,
    title: 'Flexible Service',
    description: 'Daily, weekly, or custom schedules to fit your needs.',
  },
];

export default function RetailStorefrontsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cream-soft via-eco-muted to-cream-soft">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <motion.div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-primary-light/30 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-gradient-radial from-primary/20 to-transparent rounded-full blur-3xl" />
        </motion.div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <Link href="/services" className="inline-flex items-center gap-2 text-primary-light hover:text-primary mb-6 transition-colors">
              <ArrowRight className="w-4 h-4 rotate-180" />
              Back to Services
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-light to-primary rounded-2xl flex items-center justify-center">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-6xl font-bold text-charcoal">
                  Retail & Storefronts
                </h1>
                <p className="text-xl text-charcoal/70 mt-2">Pristine presentation from front-of-house to stockroom</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-white px-6 py-3 rounded-full shadow-lg">
                <span className="text-2xl font-bold text-primary">Custom Quote</span>
              </div>
              <div className="bg-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-charcoal">Before/after hours</span>
              </div>
            </div>

            <p className="text-lg text-charcoal/80 leading-relaxed">
              Your storefront is the face of your brand. Our retail cleaning services ensure your space is always presentable, welcoming, and ready for customers. We work around your business hours to maintain a spotless shopping environment.
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
              <span className="bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">
                Included
              </span>
            </h2>
            <p className="text-xl text-charcoal/70">Complete retail cleaning services</p>
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
                <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-primary" />
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
              Flexible{' '}
              <span className="bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">
                Pricing
              </span>
            </h2>
            <p className="text-xl text-charcoal/70">Custom quotes for retail spaces</p>
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
                className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-primary/30 transition-all text-center"
              >
                <div className="text-3xl font-bold text-primary mb-2">{tier.price}</div>
                <div className="text-lg font-semibold text-charcoal mb-2">{tier.size}</div>
                <div className="text-sm text-charcoal/60">
                  {tier.space}
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
              * Pricing based on store size, frequency, and specific needs.
              <br />
              Multi-location discounts available. Contact for a free quote.
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
              <span className="bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">
                Works
              </span>
            </h2>
            <p className="text-xl text-charcoal/70">Our retail cleaning process</p>
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
                <div className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-primary/30 transition-all h-full">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-light to-primary rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-charcoal mb-3">{item.title}</h3>
                  <p className="text-charcoal/70">{item.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-8 h-0.5 bg-primary/20" />
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
              <span className="bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">
                Our Service
              </span>
            </h2>
            <p className="text-xl text-charcoal/70">Benefits of professional retail cleaning</p>
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
                className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-primary/30 transition-all text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-primary" />
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
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-primary/30 to-transparent rounded-full blur-3xl" />
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
              <span className="bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">
                Spotless Store?
              </span>
            </h2>
            <p className="text-xl text-charcoal/70 mb-8">
              Get your free retail cleaning consultation today
            </p>
            <Link href="/contact?service=retail-storefronts">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-light via-primary to-eco text-white px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-primary/40 transition-all"
              >
                <Sparkles className="w-6 h-6" />
                Get Your Quote
                <ArrowRight className="w-6 h-6" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
