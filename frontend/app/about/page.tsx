import type { Metadata } from "next"
import Link from "next/link"
import { Target, Zap, Shield, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SectionHeader } from "@/components/section-header"

export const metadata: Metadata = {
  title: "About Oxlate | Digital Solutions for Indian Businesses",
  description:
    "Learn about Oxlate's mission to help Indian businesses succeed online with transparent pricing, fast delivery, and quality solutions.",
}

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 to-accent/10 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 font-display text-4xl font-bold sm:text-5xl">About Oxlate</h1>
            <p className="text-pretty text-xl text-muted-foreground">
              We help Indian businesses succeed online with digital solutions that actually work
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <SectionHeader title="Our Mission" centered className="mb-8" />
            <p className="text-center text-lg leading-relaxed text-muted-foreground">
              We believe every Indian business deserves a strong digital presence. Whether you're a shop owner in
              Amritsar, a startup founder in Bangalore, or an institute in Delhi, we're here to provide clear,
              affordable, and effective digital solutions. Our goal is simple: help you grow your business online
              without the complexity, hidden costs, or technical jargon.
            </p>
          </div>
        </section>

        {/* Approach Section */}
        <section className="bg-muted px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader title="Our Approach" subtitle="How we work with you" centered className="mb-12" />

            <div className="grid gap-8 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Target className="h-6 w-6" />
                  </div>
                  <CardTitle>Transparency</CardTitle>
                  <CardDescription>Clear communication, no hidden costs</CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  We believe in upfront pricing and honest communication. You'll always know what you're paying for, how
                  long it will take, and what you're getting. No surprises, no fine print.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Zap className="h-6 w-6" />
                  </div>
                  <CardTitle>Speed</CardTitle>
                  <CardDescription>Fast delivery without compromising quality</CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  We know you need to move fast in today's market. Our streamlined processes and experienced team allow
                  us to deliver quality solutions in weeks, not months.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Shield className="h-6 w-6" />
                  </div>
                  <CardTitle>Quality</CardTitle>
                  <CardDescription>Built to last and perform</CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  We don't cut corners. Every website, app, and automation we build is designed for performance,
                  security, and scalability. Your success is our success.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader title="Our Values" subtitle="What guides our work" centered className="mb-12" />

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="space-y-3 rounded-lg border border-border bg-card p-6">
                <h3 className="text-xl font-semibold">Clear Communication</h3>
                <p className="text-muted-foreground">
                  We explain things in plain language. No technical jargon, no confusing terms - just clear, honest
                  communication throughout your project.
                </p>
              </div>

              <div className="space-y-3 rounded-lg border border-border bg-card p-6">
                <h3 className="text-xl font-semibold">Reliable Delivery</h3>
                <p className="text-muted-foreground">
                  When we commit to a timeline, we stick to it. You can count on us to deliver what we promise, when we
                  promise it.
                </p>
              </div>

              <div className="space-y-3 rounded-lg border border-border bg-card p-6">
                <h3 className="text-xl font-semibold">Long-term Partnerships</h3>
                <p className="text-muted-foreground">
                  We're not just looking for one-time projects. We want to grow with your business and be your trusted
                  technology partner for years to come.
                </p>
              </div>

              <div className="space-y-3 rounded-lg border border-border bg-card p-6">
                <h3 className="text-xl font-semibold">Indian Business Focus</h3>
                <p className="text-muted-foreground">
                  We understand the unique challenges and opportunities of the Indian market. Our solutions are designed
                  specifically for Indian businesses.
                </p>
              </div>

              <div className="space-y-3 rounded-lg border border-border bg-card p-6">
                <h3 className="text-xl font-semibold">Customer Success</h3>
                <p className="text-muted-foreground">
                  Your success is our metric. We measure our performance by how much value we bring to your business,
                  not just by projects completed.
                </p>
              </div>

              <div className="space-y-3 rounded-lg border border-border bg-card p-6">
                <h3 className="text-xl font-semibold">Continuous Improvement</h3>
                <p className="text-muted-foreground">
                  We stay updated with the latest technologies and best practices to ensure you always get modern,
                  effective solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="bg-muted px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              title="Our Team"
              subtitle="Experienced professionals dedicated to your success"
              centered
              className="mb-8"
            />
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-8 flex justify-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Users className="h-12 w-12" />
                </div>
              </div>
              <p className="text-lg text-muted-foreground">
                Our team consists of experienced developers, designers, and business analysts who understand both
                technology and the Indian business landscape. We combine technical expertise with practical business
                knowledge to deliver solutions that truly work for your needs.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 font-display text-3xl font-bold sm:text-4xl">Ready to Work Together?</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Let's discuss how we can help your business grow online
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
