import type { Metadata } from "next"
import Link from "next/link"
import { Check, ArrowRight, Lightbulb, PenTool, Code, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SectionHeader } from "@/components/section-header"

export const metadata: Metadata = {
  title: "App Development Services | Oxlate",
  description:
    "Custom mobile app development for iOS & Android. Native and cross-platform solutions for Indian businesses. Starting from ₹50,000.",
}

export default function AppDevelopmentPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-linear-to-br from-primary/10 to-accent/10 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 font-display text-4xl font-bold sm:text-5xl">Custom App Development</h1>
            <p className="text-pretty text-xl text-muted-foreground">
              Native & cross-platform mobile apps for iOS and Android that engage your customers
            </p>
          </div>
        </section>

        {/* What's Included Section */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              title="What's Included"
              subtitle="Complete app development from concept to launch"
              centered
              className="mb-12"
            />

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "iOS & Android support",
                "User-friendly interface design",
                "Backend development & APIs",
                "App store deployment",
                "Push notifications",
                "60 days post-launch support",
              ].map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-success" />
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="bg-muted px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              title="Perfect For"
              subtitle="Apps we build for Indian businesses"
              centered
              className="mb-12"
            />

            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Business Apps</CardTitle>
                  <CardDescription>Internal tools for your team</CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Inventory management, employee tracking, sales reporting, and other business operations tools.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Customer Portals</CardTitle>
                  <CardDescription>Engage with your customers</CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Order tracking, account management, loyalty programs, and customer service interfaces.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Booking Systems</CardTitle>
                  <CardDescription>Appointment & reservation apps</CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Restaurant reservations, salon appointments, service bookings, and schedule management.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing Tiers Section */}
        <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              title="Choose Your Package"
              subtitle="Flexible pricing for every app type"
              centered
              className="mb-12"
            />

            <div className="grid gap-6 lg:grid-cols-3">
              {/* Starter */}
              <Card>
                <CardHeader>
                  <CardTitle>Starter</CardTitle>
                  <CardDescription>Simple apps with core features</CardDescription>
                  <div className="mt-4 text-4xl font-bold">₹50,000</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 shrink-0 text-success" />
                      <span className="text-sm">Single platform (iOS or Android)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 shrink-0 text-success" />
                      <span className="text-sm">Basic UI/UX design</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 shrink-0 text-success" />
                      <span className="text-sm">Core functionality</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 shrink-0 text-success" />
                      <span className="text-sm">Basic backend</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 shrink-0 text-success" />
                      <span className="text-sm">6-8 weeks delivery</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Business - Popular */}
              <Card className="border-primary shadow-lg">
                <div className=" right-4   bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  Popular
                </div>
                <CardHeader>
                  <CardTitle>Business</CardTitle>
                  <CardDescription>Feature-rich apps for growth</CardDescription>
                  <div className="mt-4 text-4xl font-bold">₹1,50,000</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 shrink-0 text-success" />
                      <span className="text-sm">Both iOS & Android</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 shrink-0 text-success" />
                      <span className="text-sm">Custom UI/UX design</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 shrink-0 text-success" />
                      <span className="text-sm">Advanced features</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 shrink-0 text-success" />
                      <span className="text-sm">Scalable backend</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 shrink-0 text-success" />
                      <span className="text-sm">Push notifications</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 shrink-0 text-success" />
                      <span className="text-sm">10-12 weeks delivery</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Enterprise */}
              <Card>
                <CardHeader>
                  <CardTitle>Enterprise</CardTitle>
                  <CardDescription>Complex apps with integrations</CardDescription>
                  <div className="mt-4 text-4xl font-bold">Custom</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 shrink-0 text-success" />
                      <span className="text-sm">Multi-platform</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 shrink-0 text-success" />
                      <span className="text-sm">Enterprise-grade security</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 shrink-0 text-success" />
                      <span className="text-sm">Third-party integrations</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 shrink-0 text-success" />
                      <span className="text-sm">Dedicated support</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 shrink-0 text-success" />
                      <span className="text-sm">Timeline based on scope</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="bg-muted px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader title="Our Process" subtitle="From idea to app store" centered className="mb-12" />

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Lightbulb className="h-8 w-8" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">1. Discovery</h3>
                <p className="text-sm text-muted-foreground">Define features and user flows</p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <PenTool className="h-8 w-8" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">2. Design</h3>
                <p className="text-sm text-muted-foreground">Create wireframes and UI mockups</p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Code className="h-8 w-8" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">3. Development</h3>
                <p className="text-sm text-muted-foreground">Build app and backend systems</p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Rocket className="h-8 w-8" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">4. Launch</h3>
                <p className="text-sm text-muted-foreground">Deploy to app stores</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <SectionHeader title="Frequently Asked Questions" centered className="mb-12" />

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How long does app development take?</AccordionTrigger>
                <AccordionContent>
                  Development timelines vary based on complexity. Simple apps take 6-8 weeks, while feature-rich
                  business apps take 10-12 weeks. Enterprise apps with complex integrations can take 4-6 months. We'll
                  provide a detailed timeline after understanding your requirements.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>Should I build native or cross-platform?</AccordionTrigger>
                <AccordionContent>
                  For most businesses, cross-platform development (React Native or Flutter) is cost-effective and allows
                  you to reach both iOS and Android users with one codebase. Native development is recommended for apps
                  requiring heavy graphics, complex animations, or platform-specific features.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>Do you handle app store submissions?</AccordionTrigger>
                <AccordionContent>
                  Yes, we handle the complete app store submission process for both Apple App Store and Google Play
                  Store. This includes creating developer accounts (if needed), preparing assets, writing descriptions,
                  and managing the review process.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>What about app maintenance?</AccordionTrigger>
                <AccordionContent>
                  All packages include 60 days of post-launch support for bug fixes and minor adjustments. After that,
                  we offer monthly maintenance plans starting from ₹5,000 that cover OS updates, security patches, bug
                  fixes, and minor feature additions.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>Can you integrate with existing systems?</AccordionTrigger>
                <AccordionContent>
                  Yes, we can integrate your app with existing systems like CRM, ERP, payment gateways, or any custom
                  APIs. Integration complexity will be assessed during the discovery phase and reflected in the final
                  quote.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-muted px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 font-display text-3xl font-bold sm:text-4xl">Ready to Build Your App?</h2>
            <p className="mb-8 text-lg text-muted-foreground">Let's discuss your app idea and turn it into reality</p>
            <Button asChild size="lg">
              <Link href="/contact">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
