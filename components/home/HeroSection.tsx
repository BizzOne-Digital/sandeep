'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { Phone, ArrowRight, Sparkles } from 'lucide-react';

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated background with gradient */}
      <motion.div
        style={{ scale }}
        className="absolute inset-0 bg-gradient-to-br from-cream via-eco-muted to-cream-soft"
      >
        {/* Floating gradient orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-eco/20 to-eco-sage/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
          className="absolute bottom-40 left-20 w-[500px] h-[500px] bg-gradient-to-br from-primary/10 to-primary-dark/10 rounded-full blur-3xl"
        />
      </motion.div>

      {/* Hero image with parallax */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/hero-modern-interior.jpg)',
            backgroundPosition: '60% center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cream/90 via-cream/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-cream via-transparent to-transparent" />
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl">
          {/* Eyebrow with animation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-eco/10 backdrop-blur-sm border border-eco/20 rounded-full px-6 py-2 mb-8"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [1, 0.5, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="w-2 h-2 bg-eco rounded-full"
            />
            <span className="text-eco-forest font-medium text-sm md:text-base">
              Now booking for this month
            </span>
            <Sparkles className="w-4 h-4 text-eco" />
          </motion.div>

          {/* Main headline with staggered animation */}
          <div className="mb-8 overflow-hidden">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-4"
            >
              <motion.span
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="block text-charcoal"
              >
                A calmer home.
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="block bg-gradient-to-r from-eco via-eco-sage to-eco-forest bg-clip-text text-transparent"
              >
                A sharper office.
              </motion.span>
            </motion.h1>
          </div>

          {/* Supporting copy with animation */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-lg md:text-xl text-charcoal/80 mb-12 max-w-2xl leading-relaxed"
          >
            B.Tech Eco Clean is a small team of trusted cleaners using plant-based products to keep
            homes and workspaces healthy, quiet, and beautifully maintained.
          </motion.p>

          {/* CTA buttons with magnetic effect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/contact"
              className="group relative overflow-hidden bg-gradient-to-r from-eco to-eco-sage text-white px-8 py-4 rounded-full font-semibold shadow-2xl hover:shadow-eco/50 transition-all hover:scale-105 flex items-center gap-2"
            >
              <span className="relative z-10">Book a Clean</span>
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <ArrowRight className="w-5 h-5 relative z-10" />
              </motion.div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-eco-sage to-eco"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.4 }}
              />
            </Link>

            <Link
              href="/services"
              className="group bg-white/80 backdrop-blur-sm text-charcoal px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 border-2 border-eco/20 hover:border-eco flex items-center gap-2"
            >
              Explore Services
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <Sparkles className="w-5 h-5 text-eco" />
              </motion.div>
            </Link>

            <a
              href="tel:+14167105808"
              className="group bg-primary text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              +1 416-710-5808
            </a>
          </motion.div>

          {/* Floating availability panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mt-12 inline-block"
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-6 border border-eco/20"
            >
              <div className="flex items-center gap-4">
                <div className="relative">
                  <motion.div
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeOut',
                    }}
                    className="absolute inset-0 bg-eco rounded-full"
                  />
                  <div className="relative w-12 h-12 bg-gradient-to-br from-eco to-eco-sage rounded-full flex items-center justify-center text-white text-2xl">
                    ✓
                  </div>
                </div>
                <div>
                  <p className="text-sm text-charcoal/60 font-medium">Next Available</p>
                  <p className="text-lg font-bold text-charcoal">This Week</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute bottom-10 right-10 opacity-10"
      >
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="80" stroke="#2F8F2F" strokeWidth="3" />
          <path d="M100 100 Q70 70, 50 80 T100 100" fill="#2F8F2F" opacity="0.5" />
          <path d="M100 100 Q130 70, 150 80 T100 100" fill="#4CAF50" opacity="0.6" />
          <path d="M100 100 Q100 50, 120 40 T100 100" fill="#6F8E73" opacity="0.4" />
        </svg>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="flex flex-col items-center gap-2 text-charcoal/60"
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-eco rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="w-1.5 h-1.5 bg-eco rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
