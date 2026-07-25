'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';

export default function IntroAnimation() {
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    // Check if intro has been shown in this session
    const introShown = sessionStorage.getItem('introShown');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!introShown) {
      console.log('Starting intro animation');
      setShowIntro(true);
      sessionStorage.setItem('introShown', 'true');

      // Lock body scroll during intro
      document.body.style.overflow = 'hidden';

      // Set timeout for intro duration - 3 seconds animation + 0.5 seconds exit
      const duration = prefersReducedMotion ? 800 : 3500;
      console.log(`Intro will hide after ${duration}ms`);
      
      const timer = setTimeout(() => {
        console.log('Timer fired - hiding intro animation');
        setShowIntro(false);
        // Unlock scroll after exit animation completes
        setTimeout(() => {
          document.body.style.overflow = '';
          console.log('Scroll unlocked, intro complete');
        }, 1000); // Increased delay to ensure exit animation completes
      }, duration);

      return () => {
        clearTimeout(timer);
        document.body.style.overflow = '';
      };
    } else {
      console.log('Intro already shown');
    }
  }, []);

  useEffect(() => {
    if (showIntro && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      // GSAP animations for logo assembly
      const timeline = gsap.timeline();

      // Animate small squares appearing
      timeline.from('.intro-square', {
        scale: 0,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'back.out(1.7)',
      });

      // Draw circular outline
      timeline.from(
        '.intro-circle',
        {
          strokeDashoffset: 1000,
          duration: 1,
          ease: 'power2.inOut',
        },
        '-=0.2'
      );

      // Grow leaves
      timeline.from(
        '.intro-leaf',
        {
          scale: 0,
          rotation: -45,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'elastic.out(1, 0.5)',
        },
        '-=0.5'
      );

      // Ripple effect
      timeline.from(
        '.intro-ripple',
        {
          scale: 0,
          opacity: 1,
          duration: 1.5,
          ease: 'power2.out',
        },
        '-=0.3'
      );
    }
  }, [showIntro]);

  const handleSkip = () => {
    console.log('Skip button clicked');
    setShowIntro(false);
    setTimeout(() => {
      document.body.style.overflow = '';
    }, 1000);
  };

  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <AnimatePresence mode="wait" onExitComplete={() => console.log('Exit animation completed')}>
      {showIntro && (
        <motion.div
          initial={{ opacity: 1, x: 0 }}
          exit={{ x: '100%', opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #041E3A 0%, #062B52 50%, #0A3D6E 100%)',
          }}
        >
          {/* Skip button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            onClick={handleSkip}
            className="absolute top-8 right-8 z-50 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-6 py-3 rounded-full font-semibold transition-all"
          >
            Skip Intro
          </motion.button>

          {/* Animated background gradients */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: 0,
                ease: 'easeInOut',
              }}
              className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(47,143,47,0.2) 0%, transparent 70%)',
              }}
            />
          </div>

          {prefersReducedMotion ? (
            // Simple fade for reduced motion
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="relative z-10 text-center"
            >
              <div className="text-white">
                <h1 className="text-5xl md:text-7xl font-bold mb-4 text-[#2F8F2F]">B.Tech Eco Clean</h1>
                <p className="text-xl md:text-2xl text-cream">Clean Spaces. Calmer Living.</p>
              </div>
            </motion.div>
          ) : (
            // Full cinematic animation
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ x: 200, opacity: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative z-10 flex flex-col items-center justify-center"
            >
              {/* Logo animation container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 mb-12">
                {/* Digital squares assembling */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-40 h-40">
                    <div className="intro-square absolute top-4 left-4 w-3 h-3 bg-[#062B52] rounded-sm" />
                    <div className="intro-square absolute top-4 left-10 w-3 h-3 bg-[#2F8F2F] rounded-sm" />
                    <div className="intro-square absolute top-8 left-4 w-3 h-3 bg-[#2F8F2F] rounded-sm" />
                    <div className="intro-square absolute top-8 left-10 w-3 h-3 bg-[#062B52] rounded-sm" />
                  </div>
                </div>

                {/* Circular outline */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
                  <circle
                    className="intro-circle"
                    cx="100"
                    cy="100"
                    r="90"
                    fill="none"
                    stroke="#2F8F2F"
                    strokeWidth="4"
                    strokeDasharray="1000"
                    strokeDashoffset="0"
                    style={{ strokeLinecap: 'round' }}
                  />
                </svg>

                {/* Leaves growing */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-32 h-32" viewBox="0 0 100 100">
                    <path
                      className="intro-leaf"
                      d="M50 50 Q30 30, 20 40 T50 50"
                      fill="#2F8F2F"
                      opacity="0.8"
                      style={{ transformOrigin: '50% 50%' }}
                    />
                    <path
                      className="intro-leaf"
                      d="M50 50 Q70 30, 80 40 T50 50"
                      fill="#4CAF50"
                      opacity="0.9"
                      style={{ transformOrigin: '50% 50%' }}
                    />
                    <path
                      className="intro-leaf"
                      d="M50 50 Q50 20, 60 10 T50 50"
                      fill="#6F8E73"
                      opacity="0.7"
                      style={{ transformOrigin: '50% 50%' }}
                    />
                  </svg>
                </div>

                {/* Ripple effect */}
                <motion.div
                  className="intro-ripple absolute inset-0 rounded-full border-4 border-[#2F8F2F]"
                  animate={{
                    scale: [1, 2.5],
                    opacity: [0.8, 0],
                  }}
                  transition={{
                    duration: 2,
                    delay: 1.5,
                    ease: 'easeOut',
                  }}
                />
              </div>

              {/* Logo text reveal */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ x: 100, opacity: 0 }}
                transition={{ delay: 2, duration: 0.8 }}
                className="text-center"
              >
                <motion.h1
                  className="text-4xl md:text-6xl font-bold mb-2"
                  style={{
                    background: 'linear-gradient(135deg, #2F8F2F 0%, #6F8E73 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  B.Tech Eco Clean
                </motion.h1>
              </motion.div>

              {/* Tagline reveal */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ x: 100, opacity: 0 }}
                transition={{ delay: 2.8, duration: 0.6 }}
                className="text-center mt-8"
              >
                <p className="text-2xl md:text-3xl text-[#F6F3EA] font-light tracking-wide">
                  Clean Spaces. Calmer Living.
                </p>
              </motion.div>

              {/* Water droplet animation */}
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 200, opacity: [0, 1, 1, 0] }}
                transition={{ delay: 3.2, duration: 1 }}
                className="absolute top-1/2 left-0 w-4 h-4 bg-[#2F8F2F] rounded-full blur-sm"
              />
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
