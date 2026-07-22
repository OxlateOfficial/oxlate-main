import type { Metadata } from "next"
import Link from "next/link"
import { Check, ArrowRight, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SectionHeader } from "@/components/section-header"

export const metadata: Metadata = {
  title: "Pricing | Oxlate Digital Services",
  description:
    "Transparent pricing for website development and app development. Starting from ₹8,000. No hidden costs.",
}

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-linear-to-br from-primary/10 to-accent/10 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 font-display text-4xl font-bold sm:text-5xl">Simple, Transparent Pricing</h1>
            <p className="text-pretty text-xl text-muted-foreground">
              Clear pricing for all our services. No hidden costs, no surprises.
            </p>
          </div>
        </section>

        {/* Website Development Pricing */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              title="Website Development"
              subtitle="Professional websites for your business"
              centered
              className="mb-12"
            />

            <div className="grid gap-6 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Starter</CardTitle>
                  <CardDescription>Perfect for small businesses</CardDescription>
                  <div className="mt-4 text-4xl font-bold">Starting from <span className="text-primary">₹8,000</span></div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 shrink-0 text-success" />
                      <span className="text-sm">Up to 5 pages</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 shrink-0 text-success" />
                      <span className="text-sm">Mobile responsive</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 shrink-0 text-success" />
                      <span className="text-sm">Basic SEO</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 shrink-0 text-success" />
                      <span className="text-sm">Contact form</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 shrink-0 text-success" />
                      <span className="text-sm">2 weeks delivery</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/services/website-development">Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="border-primary shadow-lg">
                <div className="absolute right-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  Popular
                </div>
                <CardHeader>
                  <CardTitle>Business</CardTitle>
                  <CardDescription>Most popular choice</CardDescription>
                  <div className="mt-4 text-4xl font-bold">₹35,000</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 shrink-0 text-success" />
                      <span className="text-sm">Up to 10 pages</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 shrink-0 text-success" />
                      <span className="text-sm">Custom design</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 shrink-0 text-success" />
                      <span className="text-sm">Advanced SEO</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 shrink-0 text-success" />
                      <span className="text-sm">CMS integration</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 shrink-0 text-success" />
                      <span className="text-sm">3-4 weeks delivery</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href="/services/website-development">Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Enterprise</CardTitle>
                  <CardDescription>Custom solutions</CardDescription>
                  <div className="mt-4 text-4xl font-bold">Custom</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 shrink-0 text-success" />
                      <span className="text-sm">Unlimited pages</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 shrink-0 text-success" />
                      <span className="text-sm">E-commerce</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 shrink-0 text-success" />
                      <span className="text-sm">Custom features</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 shrink-0 text-success" />
                      <span className="text-sm">Ongoing support</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 shrink-0 text-success" />
                      <span className="text-sm">Custom timeline</span>
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

        {/* App Development Pricing */}
        <section className="bg-muted px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              title="App Development"
              subtitle="Mobile apps for iOS & Android"
              centered
              className="mb-12"
            />

            <div className="grid gap-6 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Starter</CardTitle>
                  <CardDescription>Simple apps</CardDescription>
                  <div className="mt-4 text-4xl font-bold">₹50,000</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 shrink-0 text-success" />
                      <span className="text-sm">Single platform</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 shrink-0 text-success" />
                      <span className="text-sm">Basic UI/UX</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 shrink-0 text-success" />
                      <span className="text-sm">Core functionality</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 shrink-0 text-success" />
                      <span className="text-sm">6-8 weeks</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/services/app-development">Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="border-primary shadow-lg">
                <div className="absolute right-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  Popular
                </div>
                <CardHeader>
                  <CardTitle>Business</CardTitle>
                  <CardDescription>Feature-rich apps</CardDescription>
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
                      <span className="text-sm">Custom UI/UX</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 shrink-0 text-success" />
                      <span className="text-sm">Advanced features</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 shrink-0 text-success" />
                      <span className="text-sm">10-12 weeks</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href="/services/app-development">Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Enterprise</CardTitle>
                  <CardDescription>Complex apps</CardDescription>
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
                      <span className="text-sm">Enterprise security</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 shrink-0 text-success" />
                      <span className="text-sm">Integrations</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 shrink-0 text-success" />
                      <span className="text-sm">Custom timeline</span>
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

        {/* Business Automation Pricing */}
        <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              title="Business Automation"
              subtitle="Streamline your operations"
              centered
              className="mb-12"
            />

            <div className="grid gap-6 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Starter</CardTitle>
                  <CardDescription>Single workflow</CardDescription>
                  <div className="mt-4 text-4xl font-bold">₹25,000</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 shrink-0 text-success" />
                      <span className="text-sm">1 workflow</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 shrink-0 text-success" />
                      <span className="text-sm">Basic integrations</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 shrink-0 text-success" />
                      <span className="text-sm">Documentation</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 shrink-0 text-success" />
                      <span className="text-sm">2-3 weeks</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/services/business-automation">Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="border-primary shadow-lg">
                <div className="absolute right-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  Popular
                </div>
                <CardHeader>
                  <CardTitle>Business</CardTitle>
                  <CardDescription>Multiple workflows</CardDescription>
                  <div className="mt-4 text-4xl font-bold">₹75,000</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 shrink-0 text-success" />
                      <span className="text-sm">Up to 5 workflows</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 shrink-0 text-success" />
                      <span className="text-sm">Advanced integrations</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 shrink-0 text-success" />
                      <span className="text-sm">Custom dashboards</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 shrink-0 text-success" />
                      <span className="text-sm">4-6 weeks</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href="/services/business-automation">Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Enterprise</CardTitle>
                  <CardDescription>Complete automation</CardDescription>
                  <div className="mt-4 text-4xl font-bold">Custom</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 shrink-0 text-success" />
                      <span className="text-sm">Unlimited workflows</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 shrink-0 text-success" />
                      <span className="text-sm">ERP/CRM integration</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 shrink-0 text-success" />
                      <span className="text-sm">Custom software</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 shrink-0 text-success" />
                      <span className="text-sm">Custom timeline</span>
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

        {/* Pricing Note */}
        <section className="bg-accent/10 px-4 py-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="flex items-start space-x-4">
              <HelpCircle className="h-6 w-6 shrink-0 text-accent" />
              <div>
                <h3 className="mb-2 font-semibold">About Our Pricing</h3>
                <p className="text-sm text-muted-foreground">
                  All prices shown are starting points and may vary based on specific requirements and complexity.
                  Contact us for a detailed custom quote tailored to your exact needs. All prices are in Indian Rupees
                  (₹) and exclude GST.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <SectionHeader title="Pricing Questions" centered className="mb-12" />

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Are there any hidden costs?</AccordionTrigger>
                <AccordionContent>
                  No. The prices shown include everything needed to deliver the stated scope. Additional features,
                  third-party services (like payment gateways), domain registration, and hosting are quoted separately
                  and always discussed upfront.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>What payment terms do you offer?</AccordionTrigger>
                <AccordionContent>
                  Typically, we require 50% upfront to begin work and 50% upon completion before launch. For larger
                  projects, we can arrange milestone-based payments. All terms are clearly outlined in our contract
                  before work begins.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>Do you offer discounts?</AccordionTrigger>
                <AccordionContent>
                  We offer volume discounts for multiple services purchased together (e.g., website + app + automation).
                  We also provide special rates for non-profits and educational institutions. Contact us to discuss your
                  project and budget.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>What's included in ongoing support?</AccordionTrigger>
                <AccordionContent>
                  All packages include a support period (30-60 days) for bug fixes and minor adjustments. After that,
                  ongoing support and maintenance can be arranged starting from ₹2,000/month depending on the service
                  and level of support needed.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>Can I upgrade my package later?</AccordionTrigger>
                <AccordionContent>
                  Yes! You can start with a Starter package and upgrade to Business or Enterprise later as your needs
                  grow. We'll credit your initial investment and provide a seamless upgrade path.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-muted px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 font-display text-3xl font-bold sm:text-4xl">Ready to Get Started?</h2>
            <p className="mb-8 text-lg text-muted-foreground">Contact us for a custom quote tailored to your needs</p>
            <Button asChild size="lg">
              <Link href="/contact">
                Get Your Free Quote
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
