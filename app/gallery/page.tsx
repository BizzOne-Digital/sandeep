'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Home, Building2, Sparkles, ArrowRight } from 'lucide-react';

const categories = ['All', 'Residential', 'Commercial', 'Deep Clean'];

const projects = [
  {
    id: 1,
    title: 'Modern Kitchen Transformation',
    category: 'Residential',
    before: '/images/gallery/kitchen-before.jpg',
    after: '/images/gallery/kitchen-after.jpg',
    description: 'Complete kitchen deep clean with eco-friendly degreasing',
  },
  {
    id: 2,
    title: 'Office Space Refresh',
    category: 'Commercial',
    before: '/images/gallery/office-before.jpg',
    after: '/images/gallery/office-after.jpg',
    description: 'Weekly maintenance cleaning for a downtown coworking space',
  },
  {
    id: 3,
    title: 'Bathroom Restoration',
    category: 'Deep Clean',
    before: '/images/gallery/bathroom-before.jpg',
    after: '/images/gallery/bathroom-after.jpg',
    description: 'Move-out deep clean with grout restoration',
  },
  {
    id: 4,
    title: 'Living Room Revival',
    category: 'Residential',
    before: '/images/gallery/living-before.jpg',
    after: '/images/gallery/living-after.jpg',
    description: 'Recurring home cleaning with carpet refresh',
  },
  {
    id: 5,
    title: 'Retail Store Maintenance',
    category: 'Commercial',
    before: '/images/gallery/retail-before.jpg',
    after: '/images/gallery/retail-after.jpg',
    description: 'Daily cleaning service for boutique storefront',
  },
  {
    id: 6,
    title: 'Post-Construction Clean',
    category: 'Deep Clean',
    before: '/images/gallery/construction-before.jpg',
    after: '/images/gallery/construction-after.jpg',
    description: 'Complete dust and debris removal after renovation',
  },
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

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
              Our Work
            </motion.span>
            <h1 className="text-5xl md:text-7xl font-bold text-charcoal mb-6">
              Gallery of{' '}
              <span className="bg-gradient-to-r from-eco via-eco-sage to-eco-forest bg-clip-text text-transparent">
                Transformations
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-charcoal/70 leading-relaxed">
              See the B.Tech Eco Clean difference in our before-and-after gallery
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 sticky top-20 z-40 bg-cream-soft/80 backdrop-blur-lg border-b border-charcoal/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-8 py-3 rounded-full font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-eco to-eco-sage text-white shadow-xl scale-105'
                    : 'bg-white text-charcoal hover:shadow-lg'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <motion.div
                  whileHover={{ y: -12 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-eco/30 transition-all"
                >
                  {/* Before/After Image Container */}
                  <div className="relative h-80 overflow-hidden">
                    <div className="absolute inset-0 grid grid-cols-2">
                      {/* Before */}
                      <div className="relative overflow-hidden">
                        <div
                          className="absolute inset-0 bg-cover bg-center grayscale"
                          style={{ backgroundImage: `url(${project.before})` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-charcoal/50 to-transparent" />
                        <div className="absolute top-4 left-4 bg-charcoal/80 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-bold">
                          Before
                        </div>
                      </div>
                      
                      {/* After */}
                      <div className="relative overflow-hidden">
                        <div
                          className="absolute inset-0 bg-cover bg-center"
                          style={{ backgroundImage: `url(${project.after})` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-eco/30 to-transparent" />
                        <div className="absolute top-4 right-4 bg-gradient-to-r from-eco to-eco-sage text-white px-4 py-2 rounded-full text-sm font-bold">
                          After
                        </div>
                      </div>
                    </div>

                    {/* Sparkle effect */}
                    <motion.div
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    >
                      <Sparkles className="w-12 h-12 text-eco drop-shadow-lg" />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="inline-block bg-eco/10 text-eco px-3 py-1 rounded-full text-sm font-semibold">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-charcoal mb-3 group-hover:text-eco transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-charcoal/70 leading-relaxed">{project.description}</p>
                  </div>

                  {/* Bottom gradient line */}
                  <div className="h-2 bg-gradient-to-r from-eco via-eco-sage to-eco" />
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-2xl text-charcoal/50">No projects found in this category</p>
            </motion.div>
          )}
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
              Want Results Like{' '}
              <span className="bg-gradient-to-r from-eco to-eco-sage bg-clip-text text-transparent">
                These?
              </span>
            </h2>
            <p className="text-xl text-charcoal/70 mb-8">
              Book your cleaning today and see the transformation for yourself
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-primary via-primary-dark to-eco text-white px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-eco/40 transition-all"
            >
              <Sparkles className="w-6 h-6" />
              Book Your Clean
              <ArrowRight className="w-6 h-6" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
