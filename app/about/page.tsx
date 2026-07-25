'use client';

import { motion } from 'framer-motion';
import { Leaf, Heart, Shield, Users, Award, Target } from 'lucide-react';

const values = [
  {
    icon: Leaf,
    title: 'Eco-Friendly',
    description: '100% plant-based products that are safe for your family, pets, and the environment.',
    gradient: 'from-eco to-eco-sage',
  },
  {
    icon: Heart,
    title: 'Care & Attention',
    description: 'We treat every space like our own, with meticulous attention to detail.',
    gradient: 'from-primary to-primary-dark',
  },
  {
    icon: Shield,
    title: 'Trusted & Reliable',
    description: 'Fully insured, background-checked team members you can trust in your space.',
    gradient: 'from-eco-sage to-eco-forest',
  },
  {
    icon: Users,
    title: 'Client-Focused',
    description: 'Your satisfaction drives everything we do. We listen, adapt, and deliver.',
    gradient: 'from-primary-light to-primary',
  },
];

const stats = [
  { number: '500+', label: 'Happy Clients' },
  { number: '2000+', label: 'Cleanings Completed' },
  { number: '100%', label: 'Eco-Friendly' },
  { number: '5⭐', label: 'Average Rating' },
];

export default function AboutPage() {
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
              About B.Tech Eco Clean
            </motion.span>
            <h1 className="text-5xl md:text-7xl font-bold text-charcoal mb-6">
              Clean Spaces.{' '}
              <span className="bg-gradient-to-r from-eco via-eco-sage to-eco-forest bg-clip-text text-transparent">
                Calmer Living.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-charcoal/70 leading-relaxed mb-8">
              We're a Toronto-based cleaning company dedicated to creating healthier, happier spaces through eco-friendly practices and exceptional service.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-eco/30 transition-all"
                >
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-eco to-eco-sage bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-charcoal/70 font-semibold">{stat.label}</div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-3xl p-12 shadow-2xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-eco to-eco-sage rounded-full flex items-center justify-center">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-charcoal">Our Story</h2>
              </div>
              <div className="space-y-4 text-lg text-charcoal/80 leading-relaxed">
                <p>
                  B.Tech Eco Clean was founded with a simple mission: to provide exceptional cleaning services that don't compromise on environmental responsibility or quality.
                </p>
                <p>
                  Starting in Toronto, we saw a gap in the market for cleaning services that truly cared about both their clients and the planet. We built our company on the foundation of plant-based products, meticulous attention to detail, and genuine care for every space we clean.
                </p>
                <p>
                  Today, we serve homes and businesses across Toronto, Mississauga, Brampton, Oakville, and Vaughan. Our team has grown, but our commitment remains the same: deliver cleaning services that make spaces healthier, happier, and more sustainable.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
              What We{' '}
              <span className="bg-gradient-to-r from-eco to-eco-sage bg-clip-text text-transparent">
                Stand For
              </span>
            </h2>
            <p className="text-xl text-charcoal/70">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-eco/30 transition-all h-full"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${value.gradient} rounded-2xl flex items-center justify-center mb-6`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-charcoal mb-4">{value.title}</h3>
                  <p className="text-charcoal/70 leading-relaxed">{value.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 relative overflow-hidden">
        <motion.div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-eco/30 to-transparent rounded-full blur-3xl" />
        </motion.div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-gradient-to-r from-primary via-primary-dark to-eco rounded-3xl p-12 shadow-2xl text-white text-center"
          >
            <Award className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose B.Tech Eco Clean?</h2>
            <p className="text-xl leading-relaxed mb-8">
              We're more than just a cleaning service—we're your partner in creating healthier, more sustainable spaces. With our eco-friendly approach, trusted team, and commitment to excellence, we deliver results that exceed expectations every time.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-primary px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
            >
              Get Your Free Quote
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
