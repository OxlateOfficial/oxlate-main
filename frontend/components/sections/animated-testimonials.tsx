"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/section-header";

export function AnimatedTestimonials() {
  const testimonials = [
    {
      text: "Fast, professional, and delivered exactly what we needed. The platform handles 100+ users without any issues.",
      author: "Team Lead",
      role: "Educational Institution",
      project: "Community Platform",
    },
    {
      text: "The automation saved us 10 hours per week. Worth every rupee to have a reliable team handle this.",
      author: "Rahul K.",
      role: "Small Business Owner",
      project: "Instagram Automation",
    },
    {
      text: "Oxlate revamped our legacy systems into a modern app. Truly understood our business logic and delivered on time.",
      author: "Vikram S.",
      role: "Operations Manager",
      project: "Custom Web Application",
    }
  ];

  return (
    <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8 bg-muted/50 border-y border-border/50">
      <div className="mx-auto max-w-7xl">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
        >
          <SectionHeader
            title="What Clients Say"
            subtitle="Don't just take our word for it"
            centered
            className="mb-12"
          />
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Card className="h-full bg-background border-primary/10 hover:border-primary/30 transition-colors shadow-sm hover:shadow-md">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="flex gap-1 mb-6 text-accent">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-base text-foreground/80 leading-relaxed italic mb-8 flex-1">
                    "{testimonial.text}"
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold font-display text-sm">{testimonial.author}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                      <div className="text-xs font-medium text-secondary mt-1">{testimonial.project}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
