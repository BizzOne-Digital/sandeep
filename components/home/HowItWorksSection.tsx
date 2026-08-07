'use client';

import { motion } from 'framer-motion';

export default function HowItWorksSection() {
  const steps = [
    { number: '1', title: 'Select a Service', description: 'Choose the perfect cleaning service for your needs' },
    { number: '2', title: 'Tell Us About Your Space', description: 'Provide details about your property' },
    { number: '3', title: 'Choose Date & Time', description: 'Pick a convenient time for your cleaning' },
    { number: '4', title: 'Receive Confirmation', description: 'Get instant booking confirmation' },
    { number: '5', title: 'Enjoy Your Clean Space', description: 'Relax in your refreshed environment' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-charcoal mb-6">How It Works</h2>
          <p className="text-xl text-charcoal/70 max-w-2xl mx-auto">Simple steps to a cleaner space</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-eco to-eco-sage rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-lg">
                {step.number}
              </div>
              <h3 className="text-lg font-bold text-charcoal mb-2">{step.title}</h3>
              <p className="text-sm text-charcoal/70">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-eco/20" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
