'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Home, Building2, Hammer, Leaf, ArrowRight, Sparkles, Check } from 'lucide-react';

const services = [
  {
    icon: Home,
    name: 'Recurring Home Cleaning',
    category: 'Residential',
    description: 'Weekly, bi-weekly, or monthly visits from a team that learns your home.',
    price: 'from $129',
    gradient: 'from-eco to-eco-sage',
    image: '/images/services/recurring-home.jpg',
    featured: true,
    details: [
      'Customizable cleaning schedule',
      'Same team every visit',
      'Eco-friendly products',
      'Kitchen and bathroom deep clean',
      'Dusting and vacuuming',
      'Floor mopping and polishing',
    ],
  },
  {
    icon: Sparkles,
    name: 'Deep Clean & Move-Out',
    category: 'Residential',
    description: 'Top-to-bottom detailed cleaning for seasonal resets, move-ins, move-outs.',
    price: 'from $249',
    gradient: 'from-primary to-primary-dark',
    image: '/images/services/deep-clean.jpg',
    featured: false,
    details: [
      'Complete top-to-bottom cleaning',
      'Inside appliances and cabinets',
      'Baseboards and crown molding',
      'Window cleaning (interior)',
      'Carpet steam cleaning available',
      'Move-in/move-out ready',
    ],
  },
  {
    icon: Building2,
    name: 'Office & Coworking',
    category: 'Commercial',
    description: 'After-hours cleaning that keeps your team healthy and workspace professional.',
    price: 'custom quote',
    gradient: 'from-eco-sage to-eco-forest',
    image: '/images/services/office.jpg',
    featured: false,
    details: [
      'Flexible scheduling (after-hours)',
      'Desk and workstation sanitization',
      'Common area maintenance',
      'Restroom deep cleaning',
      'Floor care and vacuuming',
      'Kitchen and break room cleaning',
    ],
  },
  {
    icon: Building2,
    name: 'Retail & Storefronts',
    category: 'Commercial',
    description: 'Consistent presentation cleaning from front-of-house to stockroom.',
    price: 'custom quote',
    gradient: 'from-primary-light to-primary',
    image: '/images/services/retail.jpg',
    featured: false,
    details: [
      'Daily or weekly service',
      'Front-of-house spotless presentation',
      'Display and shelving cleaning',
      'Floor care and entrance maintenance',
      'Stockroom organization support',
      'Window and glass cleaning',
    ],
  },
  {
    icon: Hammer,
    name: 'Post-Construction Cleaning',
    category: 'Specialty',
    description: 'Removal of dust, debris, and construction residue.',
    price: 'quote',
    gradient: 'from-eco-forest to-charcoal',
    image: '/images/services/post-construction.jpg',
    featured: false,
    details: [
      'Heavy-duty dust removal',
      'Paint and residue cleanup',
      'Window and surface cleaning',
      'Floor finishing preparation',
      'Debris removal and disposal',
      'Final walk-through ready',
    ],
  },
  {
    icon: Leaf,
    name: 'Green Deep Clean',
    category: 'Eco',
    description: 'Plant-based products and HEPA vacuuming for sensitive homes and offices.',
    price: 'quote',
    gradient: 'from-eco-light to-eco',
    image: '/images/services/green-clean.jpg',
    featured: true,
    details: [
      '100% plant-based products',
      'HEPA filtration vacuuming',
      'Allergen reduction focus',
      'Safe for children and pets',
      'Chemical-free disinfection',
      'Sustainable practices',
    ],
  },
];

export default function ServicesPage() {
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
              Professional Cleaning Services
            </motion.span>
            <h1 className="text-5xl md:text-7xl font-bold text-charcoal mb-6">
              Our Cleaning{' '}
              <span className="bg-gradient-to-r from-eco via-eco-sage to-eco-forest bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-charcoal/70 leading-relaxed">
              Professional cleaning solutions for every space—residential, commercial, and specialty services tailored to your needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <motion.div
                  whileHover={{ y: -12, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="relative overflow-hidden rounded-3xl bg-white shadow-2xl hover:shadow-eco/30 transition-all duration-500 h-full flex flex-col"
                >
                  {/* Image with overlay gradient */}
                  <div className="relative h-64 overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 3 }}
                      transition={{ duration: 0.7 }}
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${service.image})` }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-70 group-hover:opacity-80 transition-opacity duration-300`} />

                    {/* Animated icon */}
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.3 }}
                      transition={{ duration: 0.8, type: 'spring' }}
                      className="absolute top-6 right-6 w-14 h-14 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl"
                    >
                      <service.icon className="w-7 h-7 text-eco" />
                    </motion.div>

                    {/* Category badge */}
                    <div className="absolute bottom-6 left-6">
                      <span className="inline-block bg-white/25 backdrop-blur-md border border-white/40 text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg">
                        {service.category}
                      </span>
                    </div>

                    {/* Featured badge */}
                    {service.featured && (
                      <div className="absolute top-6 left-6">
                        <span className="inline-flex items-center gap-2 bg-gradient-to-r from-eco to-eco-light text-white px-4 py-2 rounded-full text-xs font-bold shadow-xl">
                          <Sparkles className="w-4 h-4" />
                          Most Popular
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content section */}
                  <div className="p-8 flex-grow flex flex-col">
                    <h3 className="text-2xl font-bold text-charcoal mb-3 group-hover:text-eco transition-colors duration-300">
                      {service.name}
                    </h3>
                    <p className="text-charcoal/70 mb-6 leading-relaxed">{service.description}</p>

                    {/* Details list */}
                    <div className="mb-6 flex-grow">
                      <ul className="space-y-2">
                        {service.details.map((detail, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * i }}
                            className="flex items-start gap-2 text-charcoal/80"
                          >
                            <Check className="w-5 h-5 text-eco flex-shrink-0 mt-0.5" />
                            <span className="text-sm">{detail}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Price and CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-charcoal/10">
                      <div className="text-3xl font-bold bg-gradient-to-r from-eco to-eco-sage bg-clip-text text-transparent">
                        {service.price}
                      </div>
                      <Link
                        href={`/contact?service=${service.name.toLowerCase().replace(/ /g, '-')}`}
                        className="group/btn inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary-dark text-white px-6 py-3 rounded-full font-semibold hover:shadow-xl transition-all hover:scale-105"
                      >
                        Book Now
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>

                  {/* Bottom gradient line */}
                  <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-eco via-eco-sage to-eco" />

                  {/* Hover glow */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      boxShadow: '0 0 40px rgba(47, 143, 47, 0.3)',
                    }}
                  />
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
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
              Ready to Experience the{' '}
              <span className="bg-gradient-to-r from-eco to-eco-sage bg-clip-text text-transparent">
                B.Tech Difference?
              </span>
            </h2>
            <p className="text-xl text-charcoal/70 mb-8">
              Book your first cleaning today and discover why our clients trust us with their spaces.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-primary via-primary-dark to-eco text-white px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-eco/40 transition-all"
              >
                <Sparkles className="w-6 h-6" />
                Get a Free Quote
                <ArrowRight className="w-6 h-6" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
