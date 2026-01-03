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
  title: "Website Development Services | Oxlate",
  description:
    "Professional website development for Indian businesses. Starting from ₹15,000. Mobile responsive, SEO optimized, fast loading.",
}

export default function WebsiteDevelopmentPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-linear-to-br from-primary/10 to-accent/10 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 font-display text-4xl font-bold sm:text-5xl">Professional Website Development</h1>
            <p className="text-pretty text-xl text-muted-foreground">
              Custom websites built for Indian businesses that drive results and grow your online presence
            </p>
          </div>
        </section>

        {/* What's Included Section */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              title="What's Included"
              subtitle="Everything you need for a successful website"
              centered
              className="mb-12"
            />

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Responsive design (mobile, tablet, desktop)",
                "SEO optimization for better visibility",
                "Fast loading speeds",
                "Contact forms & integrations",
                "Content management system",
                "30 days post-launch support",
              ].map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-success" />
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Tiers Section */}
        <section className="bg-muted px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              title="Choose Your Package"
              subtitle="Flexible pricing for every business size"
              centered
              className="mb-12"
            />

            <div className="grid gap-6 lg:grid-cols-3">
              {/* Starter */}
              <Card>
                <CardHeader>
                  <CardTitle>Starter</CardTitle>
                  <CardDescription>Perfect for small businesses</CardDescription>
                  <div className="mt-4 text-4xl font-bold">₹15,000</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 shrink-0 text-success" />
                      <span className="text-sm">Up to 5 pages</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 shrink-0 text-success" />
                      <span className="text-sm">Basic SEO</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 shrink-0 text-success" />
                      <span className="text-sm">Mobile responsive</span>
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
                  <CardDescription>Most popular for growing businesses</CardDescription>
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
                      <span className="text-sm">Advanced SEO</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 shrink-0 text-success" />
                      <span className="text-sm">Custom design</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 shrink-0 text-success" />
                      <span className="text-sm">CMS integration</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 shrink-0 text-success" />
                      <span className="text-sm">Analytics setup</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 shrink-0 text-success" />
                      <span className="text-sm">3-4 weeks delivery</span>
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
                  <CardDescription>Custom solutions for large businesses</CardDescription>
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
                      <span className="text-sm">E-commerce functionality</span>
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
                      <span className="text-sm">Priority delivery</span>
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
        <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              title="Our Process"
              subtitle="Simple, transparent, and effective"
              centered
              className="mb-12"
            />

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Lightbulb className="h-8 w-8" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">1. Discovery</h3>
                <p className="text-sm text-muted-foreground">We understand your business needs and goals</p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <PenTool className="h-8 w-8" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">2. Design</h3>
                <p className="text-sm text-muted-foreground">Create mockups and get your approval</p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Code className="h-8 w-8" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">3. Development</h3>
                <p className="text-sm text-muted-foreground">Build your website with clean, modern code</p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Rocket className="h-8 w-8" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">4. Launch</h3>
                <p className="text-sm text-muted-foreground">Go live with full support and training</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-muted px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <SectionHeader title="Frequently Asked Questions" centered className="mb-12" />

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How long does it take to build a website?</AccordionTrigger>
                <AccordionContent>
                  The timeline depends on the package you choose. Starter websites typically take 2 weeks, Business
                  packages 3-4 weeks, and Enterprise solutions vary based on complexity. We'll provide you with a
                  detailed timeline during our initial consultation.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>Do I need to provide content?</AccordionTrigger>
                <AccordionContent>
                  Yes, you'll need to provide text content, images, and any specific materials you want on your website.
                  However, we can assist with content writing and sourcing professional images for an additional fee.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>Will my website be mobile-friendly?</AccordionTrigger>
                <AccordionContent>
                  All our websites are built with a mobile-first approach and are fully responsive across all devices -
                  smartphones, tablets, and desktops. This is essential for reaching your Indian audience where mobile
                  usage is dominant.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>Can I update the website myself?</AccordionTrigger>
                <AccordionContent>
                  Yes, with the Business and Enterprise packages, we include a content management system (CMS) that
                  allows you to easily update text, images, and other content without technical knowledge. We'll provide
                  training on how to use it.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>What if I need changes later?</AccordionTrigger>
                <AccordionContent>
                  All packages include 30 days of post-launch support for minor adjustments. After that, we offer
                  maintenance plans starting from ₹2,000/month for ongoing updates, security patches, and technical
                  support. One-time changes can also be quoted separately.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 font-display text-3xl font-bold sm:text-4xl">Ready to Get Started?</h2>
            <p className="mb-8 text-lg text-muted-foreground">Let's build a website that helps your business grow</p>
            <Button asChild size="lg">
              <Link href="/contact">
                Contact Us Today
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
