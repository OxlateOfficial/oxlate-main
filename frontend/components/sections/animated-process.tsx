"use client";

import { motion } from "framer-motion";

export function AnimatedProcess() {
  const steps = [
    {
      number: '1️⃣',
      title: 'Book Free Call',
      description: '15-minute discovery call to understand your needs. No commitment required.',
      duration: 'Day 1'
    },
    {
      number: '2️⃣',
      title: 'Get Custom Plan',
      description: 'Receive detailed proposal with fixed pricing, timeline, and deliverables.',
      duration: 'Day 2-3'
    },
    {
      number: '3️⃣',
      title: 'We Build It',
      description: 'Development starts with regular updates. Your feedback shapes the product.',
      duration: 'Week 1-3'
    },
    {
      number: '4️⃣',
      title: 'You Launch',
      description: 'We deploy, test, and hand over with documentation. Plus lifetime support.',
      duration: 'Week 3-4'
    }
  ];

  return (
    <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5" />
      <div className="mx-auto max-w-7xl relative">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl font-bold tracking-tight sm:text-4xl text-foreground"
          >
            Our Simple 4-Step Process
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-4 h-1 w-20 bg-primary mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-12 left-10 right-10 h-0.5 bg-border z-0">
             <motion.div 
               className="h-full bg-primary" 
               initial={{ width: "0%" }}
               whileInView={{ width: "100%" }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 1.5, ease: "easeInOut" }}
             />
          </div>

          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.2, type: "spring", stiffness: 200 }}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              <div className="h-24 w-24 rounded-full bg-background border-4 border-muted flex items-center justify-center text-4xl shadow-sm mb-6 transition-all group-hover:border-primary group-hover:scale-110">
                {step.number}
              </div>
              <h3 className="text-xl font-bold font-display mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed max-w-[250px]">
                {step.description}
              </p>
              <span className="inline-flex items-center rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary">
                {step.duration}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
