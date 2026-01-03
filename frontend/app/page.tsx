import Link from "next/link"
import { ArrowRight, Code, Smartphone, Zap, Check, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SectionHeader } from "@/components/section-header"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-primary px-4 py-20 sm:px-6 sm:py-32 lg:px-8">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
          <div className="relative mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-balance font-display text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl md:text-6xl">
                We Build Digital Solutions That Actually Work
              </h1>
              <p className="mt-6 text-pretty text-lg text-primary-foreground/90 sm:text-xl">
                Websites, Apps & Automation for Indian Businesses
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto">
                  <Link href="#services">
                    View Services
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="w-full border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 sm:w-auto"
                >
                  <Link href="/contact">Get Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview Section */}
        <section id="services" className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              title="Our Services"
              subtitle="Professional digital solutions tailored for Indian businesses"
              centered
              className="mb-12"
            />

            <div className="grid gap-6 md:grid-cols-3">
              {/* Website Development */}
              <Card className="group transition-shadow hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Code className="h-6 w-6" />
                  </div>
                  <CardTitle>Website Development</CardTitle>
                  <CardDescription>Professional websites that drive results</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4 text-3xl font-bold text-foreground">
                    Starting from <span className="text-primary">₹15,000</span>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start">
                      <Check className="mr-2 h-4 w-4 text-success" />
                      <span>Mobile responsive design</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-4 w-4 text-success" />
                      <span>SEO optimization</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-4 w-4 text-success" />
                      <span>Fast loading speeds</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/services/website-development">Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* App Development */}
              <Card className="group transition-shadow hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Smartphone className="h-6 w-6" />
                  </div>
                  <CardTitle>App Development</CardTitle>
                  <CardDescription>Custom mobile apps for iOS & Android</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4 text-3xl font-bold text-foreground">
                    Starting from <span className="text-primary">₹50,000</span>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start">
                      <Check className="mr-2 h-4 w-4 text-success" />
                      <span>Native & cross-platform</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-4 w-4 text-success" />
                      <span>User-friendly interface</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-4 w-4 text-success" />
                      <span>App store deployment</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/services/app-development">Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Business Automation */}
              <Card className="group transition-shadow hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Zap className="h-6 w-6" />
                  </div>
                  <CardTitle>Business Automation</CardTitle>
                  <CardDescription>Streamline operations, save time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4 text-3xl font-bold text-foreground">
                    Starting from <span className="text-primary">₹25,000</span>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start">
                      <Check className="mr-2 h-4 w-4 text-success" />
                      <span>Workflow automation</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-4 w-4 text-success" />
                      <span>System integration</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-4 w-4 text-success" />
                      <span>Process optimization</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/services/business-automation">Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Oxlate Section */}
        <section className="bg-muted px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              title="Why Choose Oxlate"
              subtitle="We understand what Indian businesses need"
              centered
              className="mb-12"
            />

            <div className="grid gap-8 md:grid-cols-3">
              <div className="space-y-3 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg
                    className="h-8 w-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Clear Pricing</h3>
                <p className="text-muted-foreground">
                  Know exactly what you'll pay upfront. No hidden costs, no surprises.
                </p>
              </div>

              <div className="space-y-3 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg
                    className="h-8 w-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Fast Delivery</h3>
                <p className="text-muted-foreground">
                  Launch in weeks, not months. We move quickly without compromising quality.
                </p>
              </div>

              <div className="space-y-3 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg
                    className="h-8 w-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Built for India</h3>
                <p className="text-muted-foreground">
                  We understand local business needs, market conditions, and customer expectations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <Card className="border-primary/20 bg-linear-to-br from-primary/5 to-accent/5">
              <CardContent className="p-8 text-center sm:p-12">
                <h2 className="mb-4 font-display text-3xl font-bold sm:text-4xl">Ready to Start Your Project?</h2>
                <p className="mb-8 text-lg text-muted-foreground">
                  Get a free consultation and discover how we can help your business grow
                </p>
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Button asChild size="lg">
                    <Link href="/contact">Get a Free Consultation</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="gap-2 bg-transparent">
                    <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="h-5 w-5" />
                      WhatsApp Us
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
