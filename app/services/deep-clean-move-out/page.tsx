'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Sparkles, Check, Clock, DollarSign, ArrowRight, Home, Droplets, Wind, Zap } from 'lucide-react';

const features = [
  'Complete top-to-bottom deep cleaning',
  'Inside all appliances (oven, fridge, microwave)',
  'Inside all cabinets and drawers',
  'Baseboards and crown molding',
  'Light fixtures and ceiling fans',
  'Window cleaning (interior)',
  'Door frames and switch plates',
  'Bathroom grout and tile deep scrubbing',
  'Kitchen degreasing and sanitization',
  'Carpet vacuuming with HEPA filtration',
  'Floor scrubbing and polishing',
  'Move-in/move-out ready certification',
];

const pricing = [
  { size: 'Studio/1BR', time: '4-5 hours', price: '$249+' },
  { size: '2BR/1BA', time: '5-6 hours', price: '$319+' },
  { size: '3BR/2BA', time: '6-8 hours', price: '$399+' },
  { size: '4BR/3BA', time: '8-10 hours', price: '$499+' },
];

const process = [
  {
    step: 1,
    title: 'Pre-Inspection',
    description: 'We assess your space and create a detailed cleaning checklist.',
  },
  {
    step: 2,
    title: 'Deep Cleaning',
    description: 'Our team performs thorough cleaning of every surface and corner.',
  },
  {
    step: 3,
    title: 'Detail Work',
    description: 'We focus on often-missed areas like baseboards and grout.',
  },
  {
    step: 4,
    title: 'Final Walkthrough',
    description: 'You inspect our work and we ensure complete satisfaction.',
  },
];

const benefits = [
  {
    icon: Home,
    title: 'Security Deposit',
    description: 'Maximize your chances of getting your full deposit back.',
  },
  {
    icon: Droplets,
    title: 'Deep Sanitization',
    description: 'Professional-grade cleaning that eliminates germs and bacteria.',
  },
  {
    icon: Wind,
    title: 'Fresh Start',
    description: 'Move into or out of a completely pristine, fresh space.',
  },
  {
    icon: Zap,
    title: 'Stress-Free',
    description: 'Let us handle the hard work while you focus on your move.',
  },
];

export default function DeepCleanMoveOutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cream-soft via-eco-muted to-cream-soft">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <motion.div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-primary/30 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-gradient-radial from-eco/20 to-transparent rounded-full blur-3xl" />
        </motion.div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <Link href="/services" className="inline-flex items-center gap-2 text-primary hover:text-primary-dark mb-6 transition-colors">
              <ArrowRight className="w-4 h-4 rotate-180" />
              Back to Services
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-dark rounded-2xl flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-6xl font-bold text-charcoal">
                  Deep Clean & Move-Out
                </h1>
                <p className="text-xl text-charcoal/70 mt-2">Thorough transformations for seasonal resets and moves</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-white px-6 py-3 rounded-full shadow-lg">
                <span className="text-2xl font-bold text-primary">from $249+</span>
                <span className="text-charcoal/70 ml-2">one-time</span>
              </div>
              <div className="bg-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-charcoal">4-10 hours</span>
              </div>
            </div>

            <p className="text-lg text-charcoal/80 leading-relaxed">
              Our deep clean service goes beyond regular maintenance to tackle every corner, crevice, and surface in your home. Perfect for move-ins, move-outs, seasonal resets, or when your space needs extra attention. We leave no detail overlooked.
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
              <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                Included
              </span>
            </h2>
            <p className="text-xl text-charcoal/70">Comprehensive deep cleaning for every surface</p>
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
              Transparent{' '}
              <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                Pricing
              </span>
            </h2>
            <p className="text-xl text-charcoal/70">Clear rates based on your space size</p>
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
              Add-ons available: carpet steam cleaning, exterior windows, and more.
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
              <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                Works
              </span>
            </h2>
            <p className="text-xl text-charcoal/70">Our proven deep cleaning process</p>
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
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-dark rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
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
              <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                Deep Cleaning
              </span>
            </h2>
            <p className="text-xl text-charcoal/70">The benefits of professional deep cleaning</p>
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
              <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                Deep Transformation?
              </span>
            </h2>
            <p className="text-xl text-charcoal/70 mb-8">
              Book your deep clean today and see the difference professional service makes
            </p>
            <Link href="/contact?service=deep-clean-move-out">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-primary via-primary-dark to-eco text-white px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-primary/40 transition-all"
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
