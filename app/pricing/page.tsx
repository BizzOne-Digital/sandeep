'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Check, ArrowRight, Sparkles, Home, Building2, Hammer } from 'lucide-react';

const pricingPlans = [
  {
    icon: Home,
    name: 'Recurring Home Cleaning',
    tagline: 'Perfect for busy families',
    price: '$129',
    period: 'per visit',
    gradient: 'from-eco to-eco-sage',
    popular: true,
    features: [
      'Weekly, bi-weekly, or monthly',
      'Same team every visit',
      'Eco-friendly products included',
      'Kitchen & bathroom deep clean',
      'Dusting & vacuuming',
      'Floor mopping & polishing',
      'Flexible rescheduling',
      'Satisfaction guaranteed',
    ],
  },
  {
    icon: Sparkles,
    name: 'Deep Clean & Move-Out',
    tagline: 'For thorough transformations',
    price: '$249',
    period: 'one-time',
    gradient: 'from-primary to-primary-dark',
    popular: false,
    features: [
      'Top-to-bottom cleaning',
      'Inside appliances & cabinets',
      'Baseboards & crown molding',
      'Window cleaning (interior)',
      'Carpet steam cleaning available',
      'Move-in/move-out ready',
      'Perfect for seasonal resets',
      'Add-ons available',
    ],
  },
  {
    icon: Building2,
    name: 'Office & Commercial',
    tagline: 'Keep your workplace pristine',
    price: 'Custom',
    period: 'quote',
    gradient: 'from-eco-sage to-eco-forest',
    popular: false,
    features: [
      'Flexible scheduling (after-hours)',
      'Desk & workstation sanitization',
      'Common area maintenance',
      'Restroom deep cleaning',
      'Floor care & vacuuming',
      'Kitchen & break room cleaning',
      'Customizable service plans',
      'Dedicated account manager',
    ],
  },
];

const addOns = [
  { name: 'Interior Window Cleaning', price: '$40' },
  { name: 'Inside Fridge Deep Clean', price: '$35' },
  { name: 'Inside Oven Deep Clean', price: '$40' },
  { name: 'Carpet Steam Cleaning', price: '$80+' },
  { name: 'Laundry Fold & Put Away', price: '$30' },
  { name: 'Organize Closets/Pantry', price: '$50+' },
];

export default function PricingPage() {
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
              Transparent Pricing
            </motion.span>
            <h1 className="text-5xl md:text-7xl font-bold text-charcoal mb-6">
              Simple, Honest{' '}
              <span className="bg-gradient-to-r from-eco via-eco-sage to-eco-forest bg-clip-text text-transparent">
                Pricing
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-charcoal/70 leading-relaxed">
              Quality cleaning services at prices that make sense for your budget
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <span className="inline-flex items-center gap-2 bg-gradient-to-r from-eco to-eco-light text-white px-6 py-2 rounded-full text-sm font-bold shadow-xl">
                      <Sparkles className="w-4 h-4" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <motion.div
                  whileHover={{ y: -12, scale: 1.02 }}
                  className={`bg-white rounded-3xl shadow-2xl hover:shadow-eco/30 transition-all h-full flex flex-col relative overflow-hidden ${
                    plan.popular ? 'ring-4 ring-eco/20' : ''
                  }`}
                >
                  {/* Header */}
                  <div className={`bg-gradient-to-r ${plan.gradient} p-8 text-white`}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                        <plan.icon className="w-7 h-7" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{plan.name}</h3>
                        <p className="text-white/80 text-sm">{plan.tagline}</p>
                      </div>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-bold">{plan.price}</span>
                      <span className="text-white/80">/ {plan.period}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="p-8 flex-grow">
                    <ul className="space-y-4">
                      {plan.features.map((feature, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.05 }}
                          className="flex items-start gap-3"
                        >
                          <div className="flex-shrink-0 w-6 h-6 bg-eco/10 rounded-full flex items-center justify-center mt-0.5">
                            <Check className="w-4 h-4 text-eco" />
                          </div>
                          <span className="text-charcoal/80">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <div className="p-8 pt-0">
                    <Link
                      href={`/contact?service=${plan.name.toLowerCase().replace(/ /g, '-')}`}
                      className={`block w-full text-center bg-gradient-to-r ${plan.gradient} text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105`}
                    >
                      Get Started
                      <ArrowRight className="inline-block w-5 h-5 ml-2" />
                    </Link>
                  </div>

                  {/* Bottom accent */}
                  <div className={`h-2 bg-gradient-to-r ${plan.gradient}`} />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-Ons Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
              Optional{' '}
              <span className="bg-gradient-to-r from-eco to-eco-sage bg-clip-text text-transparent">
                Add-Ons
              </span>
            </h2>
            <p className="text-xl text-charcoal/70">Customize your cleaning experience</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {addOns.map((addon, index) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-eco/30 transition-all flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-eco/10 rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-eco" />
                  </div>
                  <span className="font-semibold text-charcoal">{addon.name}</span>
                </div>
                <span className="text-2xl font-bold text-eco">{addon.price}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ/Notes Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-white rounded-3xl p-12 shadow-2xl"
          >
            <h3 className="text-3xl font-bold text-charcoal mb-8">Pricing Notes</h3>
            <div className="space-y-6 text-charcoal/80">
              <div>
                <h4 className="font-bold text-charcoal mb-2">🏠 Recurring Home Cleaning</h4>
                <p>Starting at $129+ per visit. Final price depends on home size, frequency, and specific requirements. Discounts available for weekly service.</p>
              </div>
              <div>
                <h4 className="font-bold text-charcoal mb-2">✨ Deep Clean & Move-Out</h4>
                <p>Starting at $249+ for standard homes. Price varies based on square footage and condition. Add-ons like carpet cleaning available.</p>
              </div>
              <div>
                <h4 className="font-bold text-charcoal mb-2">🏢 Commercial Cleaning</h4>
                <p>Custom quotes based on space size, cleaning frequency, and specific needs. Free on-site consultation available.</p>
              </div>
              <div>
                <h4 className="font-bold text-charcoal mb-2">💯 Satisfaction Guaranteed</h4>
                <p>We stand behind our work. If you're not completely satisfied, we'll make it right—no questions asked.</p>
              </div>
            </div>
          </motion.div>
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
              Ready to Get{' '}
              <span className="bg-gradient-to-r from-eco to-eco-sage bg-clip-text text-transparent">
                Started?
              </span>
            </h2>
            <p className="text-xl text-charcoal/70 mb-8">
              Book your first cleaning today and experience the B.Tech difference
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-primary via-primary-dark to-eco text-white px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-eco/40 transition-all"
            >
              <Sparkles className="w-6 h-6" />
              Get Your Free Quote
              <ArrowRight className="w-6 h-6" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
