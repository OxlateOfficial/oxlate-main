"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AnimatedHero() {
  return (
    <section className="relative overflow-hidden bg-primary px-4 py-20 sm:px-6 sm:py-32 lg:px-8">
      {/* Subtle modern background gradient mesh */}
      <div className="absolute inset-0 bg-linear-to-br from-primary via-primary to-accent/20 opacity-90" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
      
      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-balance font-display text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl"
          >
            We Build AI-Powered Solutions That Save Time & Make Money
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="mt-6 text-pretty text-lg text-primary-foreground/90 sm:text-xl lg:text-2xl"
          >
            From websites to automation, we help Indian businesses work smarter with modern technology.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto h-14 text-lg px-8 shadow-xl hover:scale-105 transition-transform">
              <Link href="/contact">
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full h-14 text-lg px-8 border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 sm:w-auto shadow-lg hover:scale-105 transition-transform"
            >
              <Link href="#portfolio">View Our Work</Link>
            </Button>
          </motion.div>
          
          {/* Trust Signals */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 text-primary-foreground/80 text-sm font-medium"
          >
            <div className="flex items-center justify-center gap-2">
              <div className="h-2 w-2 rounded-full bg-secondary" />
              48-Hour MVP Delivery
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="h-2 w-2 rounded-full bg-secondary" />
              Fixed Pricing, No Hidden Costs
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="h-2 w-2 rounded-full bg-secondary" />
              Lifetime Support Included
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
