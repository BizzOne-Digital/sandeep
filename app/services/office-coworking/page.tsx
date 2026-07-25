'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Building2, Check, Clock, ArrowRight, Users, Shield, Sparkles, Calendar } from 'lucide-react';

const features = [
  'Flexible after-hours scheduling',
  'Desk and workstation sanitization',
  'Common area deep cleaning',
  'Restroom sanitization and stocking',
  'Kitchen and break room maintenance',
  'Floor vacuuming and mopping',
  'Window and glass cleaning',
  'Trash and recycling removal',
  'Conference room setup',
  'Reception area maintenance',
  'Cubicle and partition cleaning',
  'Eco-friendly products safe for employees',
];

const pricing = [
  { size: 'Small Office', space: 'Up to 2,000 sq ft', price: 'Custom' },
  { size: 'Medium Office', space: '2,000 - 5,000 sq ft', price: 'Custom' },
  { size: 'Large Office', space: '5,000 - 10,000 sq ft', price: 'Custom' },
  { size: 'Enterprise', space: '10,000+ sq ft', price: 'Custom' },
];

const process = [
  {
    step: 1,
    title: 'Site Assessment',
    description: 'We visit your office to understand your space and specific needs.',
  },
  {
    step: 2,
    title: 'Custom Plan',
    description: 'We create a tailored cleaning schedule that fits your business.',
  },
  {
    step: 3,
    title: 'Regular Service',
    description: 'Our team cleans after hours without disrupting your workflow.',
  },
  {
    step: 4,
    title: 'Account Management',
    description: 'Your dedicated manager ensures consistent quality and addresses concerns.',
  },
];

const benefits = [
  {
    icon: Users,
    title: 'Healthier Team',
    description: 'Regular sanitization reduces sick days and boosts productivity.',
  },
  {
    icon: Shield,
    title: 'Professional Image',
    description: 'A clean office impresses clients and reflects your brand.',
  },
  {
    icon: Calendar,
    title: 'After-Hours Service',
    description: 'We work when you do not, ensuring zero disruption.',
  },
  {
    icon: Sparkles,
    title: 'Custom Solutions',
    description: 'Tailored plans that adapt to your changing needs.',
  },
];

export default function OfficeCoworkingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cream-soft via-eco-muted to-cream-soft">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <motion.div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-eco-sage/30 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-gradient-radial from-eco-forest/20 to-transparent rounded-full blur-3xl" />
        </motion.div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <Link href="/services" className="inline-flex items-center gap-2 text-eco-sage hover:text-eco-forest mb-6 transition-colors">
              <ArrowRight className="w-4 h-4 rotate-180" />
              Back to Services
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-eco-sage to-eco-forest rounded-2xl flex items-center justify-center">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-6xl font-bold text-charcoal">
                  Office & Coworking
                </h1>
                <p className="text-xl text-charcoal/70 mt-2">Professional cleaning for healthy, productive workspaces</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-white px-6 py-3 rounded-full shadow-lg">
                <span className="text-2xl font-bold text-eco-sage">Custom Quote</span>
              </div>
              <div className="bg-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2">
                <Clock className="w-5 h-5 text-eco-sage" />
                <span className="text-charcoal">After-hours available</span>
              </div>
            </div>

            <p className="text-lg text-charcoal/80 leading-relaxed">
              Keep your team healthy and your workspace professional with our commercial office cleaning services. We work after hours to ensure your office is pristine every morning, without disrupting your business operations.
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
              <span className="bg-gradient-to-r from-eco-sage to-eco-forest bg-clip-text text-transparent">
                Included
              </span>
            </h2>
            <p className="text-xl text-charcoal/70">Comprehensive commercial cleaning services</p>
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
                <div className="flex-shrink-0 w-6 h-6 bg-eco-sage/10 rounded-full flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-eco-sage" />
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
              <span className="bg-gradient-to-r from-eco-sage to-eco-forest bg-clip-text text-transparent">
                Pricing
              </span>
            </h2>
            <p className="text-xl text-charcoal/70">Custom quotes based on your office size and needs</p>
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
                className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-eco-sage/30 transition-all text-center"
              >
                <div className="text-3xl font-bold text-eco-sage mb-2">{tier.price}</div>
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
              * Custom pricing based on square footage, frequency, and specific requirements.
              <br />
              Contact us for a free on-site consultation and quote.
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
              <span className="bg-gradient-to-r from-eco-sage to-eco-forest bg-clip-text text-transparent">
                Works
              </span>
            </h2>
            <p className="text-xl text-charcoal/70">Simple process for commercial cleaning</p>
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
                <div className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-eco-sage/30 transition-all h-full">
                  <div className="w-12 h-12 bg-gradient-to-r from-eco-sage to-eco-forest rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-charcoal mb-3">{item.title}</h3>
                  <p className="text-charcoal/70">{item.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-8 h-0.5 bg-eco-sage/20" />
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
              <span className="bg-gradient-to-r from-eco-sage to-eco-forest bg-clip-text text-transparent">
                Our Service
              </span>
            </h2>
            <p className="text-xl text-charcoal/70">Benefits of professional office cleaning</p>
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
                className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-eco-sage/30 transition-all text-center"
              >
                <div className="w-16 h-16 bg-eco-sage/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-eco-sage" />
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
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-eco-sage/30 to-transparent rounded-full blur-3xl" />
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
              <span className="bg-gradient-to-r from-eco-sage to-eco-forest bg-clip-text text-transparent">
                Cleaner Office?
              </span>
            </h2>
            <p className="text-xl text-charcoal/70 mb-8">
              Get your free on-site consultation and custom quote today
            </p>
            <Link href="/contact?service=office-coworking">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-eco-sage via-eco-forest to-eco text-white px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-eco-sage/40 transition-all"
              >
                <Sparkles className="w-6 h-6" />
                Request Consultation
                <ArrowRight className="w-6 h-6" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
