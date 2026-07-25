'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';

export default function PricingPreview() {
  const plans = [
    {
      name: 'Recurring Home',
      price: 129,
      features: ['Kitchen & bathroom', 'Dusting & vacuuming', 'Mopping', 'Weekly/Bi-weekly/Monthly'],
    },
    {
      name: 'Deep Clean',
      price: 249,
      popular: true,
      features: ['All deep cleaning', 'Baseboards', 'Inside cabinets', 'Appliances'],
    },
    {
      name: 'Move In/Out',
      price: 289,
      features: ['Entire property', 'All surfaces', 'Cabinets & drawers', 'Move-out ready'],
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-charcoal mb-6">Transparent Pricing</h2>
          <p className="text-xl text-charcoal/70 max-w-2xl mx-auto">Simple, honest pricing for quality cleaning</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`relative bg-white rounded-2xl p-8 shadow-xl ${plan.popular ? 'border-4 border-eco' : 'border border-eco/20'}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-eco to-eco-sage text-white px-6 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-charcoal mb-4">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-eco">${plan.price}</span>
                <span className="text-charcoal/60">/visit</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-charcoal/80">
                    <Check className="w-5 h-5 text-eco flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="block w-full bg-gradient-to-r from-eco to-eco-sage text-white text-center px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
                Book Now
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/pricing" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all text-lg">
            View Full Pricing <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
