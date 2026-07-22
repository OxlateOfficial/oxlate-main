"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, FileText, Code2, Rocket } from "lucide-react";
import { SectionHeader } from "@/components/section-header";

export function ProcessSection() {
  const steps = [
    {
      icon: MessageCircle,
      title: "Discovery Call",
      description: "We understand your goals, target audience, and business requirements. No long questionnaires—just a real conversation.",
      duration: "30 mins"
    },
    {
      icon: FileText,
      title: "Proposal & Timeline",
      description: "Clear scope, honest pricing (Starting from ₹8,000 for web), and a realistic delivery timeline you can count on.",
      duration: "24-48 hrs"
    },
    {
      icon: Code2,
      title: "Build & Iterate",
      description: "We build in sprints. You see progress weekly. Feedback shapes the final product—no surprises at launch.",
      duration: "2-8 weeks"
    },
    {
      icon: Rocket,
      title: "Launch & Support",
      description: "Live deployment, initial support, and guidance on next steps. Your project doesn't end at launch.",
      duration: "Day 1"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <SectionHeader
            title="How We Work"
            subtitle="A simple, transparent process from idea to launch"
            centered
            className="mb-16"
          />
        </motion.div>

        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <motion.div key={index} variants={itemVariants} className="relative">
                <div className="flex flex-col h-full">
                  {/* Step number badge */}
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-lg">
                      {index + 1}
                    </div>
                    {/* Arrow between steps */}
                    {index < steps.length - 1 && (
                      <div className="hidden lg:flex absolute left-full top-5 w-8 items-center justify-center text-muted-foreground/40">
                        <ArrowRight className="h-5 w-5" />
                      </div>
                    )}
                  </div>

                  {/* Icon and content */}
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/5 text-primary transition-colors hover:bg-primary/10">
                    <IconComponent className="h-8 w-8" />
                  </div>

                  <h3 className="mb-2 text-xl font-semibold font-display">{step.title}</h3>
                  <p className="mb-4 text-sm text-muted-foreground leading-relaxed flex-1">
                    {step.description}
                  </p>

                  <div className="inline-block">
                    <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary border border-primary/20">
                      {step.duration}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA below process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="mb-6 text-lg text-muted-foreground">
            Ready to start? <span className="font-semibold text-foreground">Let's talk about your project.</span>
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Schedule Discovery Call
            </a>
            <span className="hidden text-muted-foreground sm:inline">or</span>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-primary/20 bg-transparent px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-primary/5"
            >
              WhatsApp Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
