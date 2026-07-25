'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Home, Check, Clock, DollarSign, Sparkles, ArrowRight, Calendar, Shield, Leaf } from 'lucide-react';

const features = [
  'Customizable cleaning schedule (weekly, bi-weekly, monthly)',
  'Same dedicated team every visit',
  '100% eco-friendly, plant-based products',
  'Kitchen deep clean (counters, appliances, sink)',
  'Bathroom sanitization (tub, shower, toilet, sink)',
  'Dusting all surfaces and furniture',
  'Vacuuming all floors and carpets',
  'Mopping hard floors',
  'Taking out trash and recycling',
  'Making beds and organizing bedrooms',
  'Flexible rescheduling options',
  'Satisfaction guarantee - we will make it right',
];

const pricing = [
  { size: 'Studio/1BR', time: '2-3 hours', price: '$129+' },
  { size: '2BR/1BA', time: '3-4 hours', price: '$159+' },
  { size: '3BR/2BA', time: '4-5 hours', price: '$189+' },
  { size: '4BR/3BA', time: '5-6 hours', price: '$229+' },
];

const process = [
  {
    step: 1,
    title: 'Initial Consultation',
    description: 'We discuss your home, preferences, and create a custom cleaning plan.',
  },
  {
    step: 2,
    title: 'First Deep Clean',
    description: 'We start with a thorough deep clean to establish a baseline.',
  },
  {
    step: 3,
    title: 'Regular Maintenance',
    description: 'Same team visits on your schedule to maintain pristine condition.',
  },
  {
    step: 4,
    title: 'Ongoing Support',
    description: 'We adapt to your changing needs and ensure consistent quality.',
  },
];

const benefits = [
  {
    icon: Clock,
    title: 'Save Time',
    description: 'Get back 4-6 hours every week to spend with family or relax.',
  },
  {
    icon: Shield,
    title: 'Trusted Team',
    description: 'Background-checked, insured professionals you can trust.',
  },
  {
    icon: Leaf,
    title: 'Healthier Home',
    description: 'Plant-based products create a safer environment for your family.',
  },
  {
    icon: Calendar,
    title: 'Flexible Scheduling',
    description: 'Easy rescheduling and consistent service on your timeline.',
  },
];

export default function RecurringHomeCleaningPage() {
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
            className="max-w-4xl mx-auto"
          >
            <Link href="/services" className="inline-flex items-center gap-2 text-eco hover:text-eco-sage mb-6 transition-colors">
              <ArrowRight className="w-4 h-4 rotate-180" />
              Back to Services
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-eco to-eco-sage rounded-2xl flex items-center justify-center">
                <Home className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-6xl font-bold text-charcoal">
                  Recurring Home Cleaning
                </h1>
                <p className="text-xl text-charcoal/70 mt-2">Perfect for busy families who want a consistently clean home</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-white px-6 py-3 rounded-full shadow-lg">
                <span className="text-2xl font-bold text-eco">from $129+</span>
                <span className="text-charcoal/70 ml-2">per visit</span>
              </div>
              <div className="bg-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2">
                <Clock className="w-5 h-5 text-eco" />
                <span className="text-charcoal">2-6 hours</span>
              </div>
              <div className="bg-white px-6 py-3 rounded-full shadow-lg">
                <span className="inline-flex items-center gap-2 text-eco font-semibold">
                  <Sparkles className="w-5 h-5" />
                  Most Popular
                </span>
              </div>
            </div>

            <p className="text-lg text-charcoal/80 leading-relaxed">
              Our recurring home cleaning service is designed for families who value their time and want to maintain a consistently clean, healthy living space. With the same dedicated team visiting on your schedule, we get to know your home and preferences, delivering personalized service every time.
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
              <span className="bg-gradient-to-r from-eco to-eco-sage bg-clip-text text-transparent">
                Included
              </span>
            </h2>
            <p className="text-xl text-charcoal/70">Comprehensive cleaning for every room in your home</p>
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
              <span className="bg-gradient-to-r from-eco to-eco-sage bg-clip-text text-transparent">
                Pricing
              </span>
            </h2>
            <p className="text-xl text-charcoal/70">Clear rates based on your home size</p>
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
              * Prices may vary based on home condition and specific requirements.
              <br />
              Discounts available for weekly service!
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
              <span className="bg-gradient-to-r from-eco to-eco-sage bg-clip-text text-transparent">
                Works
              </span>
            </h2>
            <p className="text-xl text-charcoal/70">Simple steps to a consistently clean home</p>
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
                  <div className="w-12 h-12 bg-gradient-to-r from-eco to-eco-sage rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
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
              <span className="bg-gradient-to-r from-eco to-eco-sage bg-clip-text text-transparent">
                Recurring Service
              </span>
            </h2>
            <p className="text-xl text-charcoal/70">The benefits of regular professional cleaning</p>
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
              <span className="bg-gradient-to-r from-eco to-eco-sage bg-clip-text text-transparent">
                Cleaner Home?
              </span>
            </h2>
            <p className="text-xl text-charcoal/70 mb-8">
              Book your first recurring cleaning today and experience the B.Tech difference
            </p>
            <Link href="/contact?service=recurring-home-cleaning">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-primary via-primary-dark to-eco text-white px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-eco/40 transition-all"
              >
                <Sparkles className="w-6 h-6" />
                Schedule Your Clean
                <ArrowRight className="w-6 h-6" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
