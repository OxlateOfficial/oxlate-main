"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { Code, Smartphone, Zap, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeader } from "@/components/section-header";

export function AnimatedServices() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <section id="services" className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8 bg-muted/30">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <SectionHeader
            title="What We Build"
            subtitle="Modern websites and mobile apps that drive real results"
            centered
            className="mb-12"
          />
        </motion.div>

        <motion.div 
          className="grid gap-8 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Web Development */}
          <motion.div variants={itemVariants}>
            <Card className="group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-border/50 h-full flex flex-col">
              <CardHeader>
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Code className="h-7 w-7" />
                </div>
                <CardTitle className="text-2xl">Web Development</CardTitle>
                <CardDescription className="text-base text-muted-foreground/80 text-balance">
                  Modern, responsive websites and web applications built with latest technologies.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="mb-6 text-3xl font-bold text-foreground font-display">
                  <span className="text-lg text-muted-foreground font-normal">from</span> <span className="text-primary">₹8,000</span>
                </div>
                <ul className="space-y-3 text-sm text-foreground/80">
                  <li className="flex items-start font-medium">
                    <Check className="mr-3 h-5 w-5 text-secondary shrink-0" />
                    <span>Business websites & E-commerce</span>
                  </li>
                  <li className="flex items-start font-medium">
                    <Check className="mr-3 h-5 w-5 text-secondary shrink-0" />
                    <span>Admin dashboards</span>
                  </li>
                  <li className="flex items-start font-medium">
                    <Check className="mr-3 h-5 w-5 text-secondary shrink-0" />
                    <span>Mobile-responsive design</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="pt-6">
                <Button asChild variant="outline" className="w-full bg-transparent border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all">
                  <Link href="/services#web-development">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

          {/* App Development */}
          <motion.div variants={itemVariants}>
            <Card className="group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-border/50 h-full flex flex-col relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4">
                <span className="inline-flex items-center rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-semibold text-accent border border-accent/20">
                  Popular
                </span>
              </div>
              <CardHeader>
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Smartphone className="h-7 w-7" />
                </div>
                <CardTitle className="text-2xl">App Development</CardTitle>
                <CardDescription className="text-base text-muted-foreground/80 text-balance">
                  Native iOS & Android apps that engage your users and grow your business.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="mb-6 text-3xl font-bold text-foreground font-display">
                  <span className="text-lg text-muted-foreground font-normal">from</span> <span className="text-primary">₹50,000</span>
                </div>
                <ul className="space-y-3 text-sm text-foreground/80">
                  <li className="flex items-start font-medium">
                    <Check className="mr-3 h-5 w-5 text-secondary shrink-0" />
                    <span>iOS & Android native apps</span>
                  </li>
                  <li className="flex items-start font-medium">
                    <Check className="mr-3 h-5 w-5 text-secondary shrink-0" />
                    <span>Custom UI/UX design</span>
                  </li>
                  <li className="flex items-start font-medium">
                    <Check className="mr-3 h-5 w-5 text-secondary shrink-0" />
                    <span>App store deployment</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="pt-6">
                <Button asChild variant="default" className="w-full shadow-md group-hover:shadow-lg transition-all">
                  <Link href="/services#app-development">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
