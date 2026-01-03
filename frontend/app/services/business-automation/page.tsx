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
  title: "Business Automation Services | Oxlate",
  description:
    "Streamline your business operations with custom automation solutions. Save time and reduce errors. Starting from ₹25,000.",
}

export default function BusinessAutomationPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-linear-to-br from-primary/10 to-accent/10 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 font-display text-4xl font-bold sm:text-5xl">Business Automation Solutions</h1>
            <p className="text-pretty text-xl text-muted-foreground">
              Streamline operations, save time, and reduce errors with custom automation for your business
            </p>
          </div>
        </section>

        {/* What's Included Section */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              title="What's Included"
              subtitle="Complete automation from analysis to implementation"
              centered
              className="mb-12"
            />

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Process analysis & optimization",
                "Custom workflow automation",
                "System integration",
                "Data synchronization",
                "Reporting & analytics",
                "Training & documentation",
              ].map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-success" />
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Automation Solutions Section */}
        <section className="bg-muted px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader title="Automation Solutions" subtitle="Areas where we can help" centered className="mb-12" />

            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Data Entry Automation</CardTitle>
                  <CardDescription>Eliminate manual data entry</CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Automate data collection from forms, emails, and documents. Sync data across multiple systems
                  automatically.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Invoice & Billing</CardTitle>
                  <CardDescription>Automated billing workflows</CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Generate invoices automatically, send payment reminders, and reconcile payments with your accounting
                  system.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Customer Communication</CardTitle>
                  <CardDescription>Automated messaging & follow-ups</CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Send automated emails, SMS, and WhatsApp messages based on customer actions and schedules.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Inventory Management</CardTitle>
                  <CardDescription>Real-time inventory tracking</CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Track stock levels, automate reordering, and sync inventory across online and offline channels.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Report Generation</CardTitle>
                  <CardDescription>Automated business reports</CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Generate daily, weekly, or monthly reports automatically and deliver them to stakeholders.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>HR & Payroll</CardTitle>
                  <CardDescription>Employee management automation</CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Automate attendance tracking, leave management, payroll processing, and compliance reporting.
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
              subtitle="Flexible automation solutions"
              centered
              className="mb-12"
            />

            <div className="grid gap-6 lg:grid-cols-3">
              {/* Starter */}
              <Card>
                <CardHeader>
                  <CardTitle>Starter</CardTitle>
                  <CardDescription>Single process automation</CardDescription>
                  <div className="mt-4 text-4xl font-bold">₹25,000</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 shrink-0 text-success" />
                      <span className="text-sm">1 workflow automation</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 shrink-0 text-success" />
                      <span className="text-sm">Basic integrations</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 shrink-0 text-success" />
                      <span className="text-sm">Process documentation</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 shrink-0 text-success" />
                      <span className="text-sm">Basic training</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 shrink-0 text-success" />
                      <span className="text-sm">2-3 weeks delivery</span>
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
                  <CardDescription>Multiple process automation</CardDescription>
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
                      <span className="text-sm">Detailed reporting</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 shrink-0 text-success" />
                      <span className="text-sm">Comprehensive training</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 shrink-0 text-success" />
                      <span className="text-sm">4-6 weeks delivery</span>
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
                  <CardDescription>Complete business automation</CardDescription>
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
                      <span className="text-sm">Custom software development</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 shrink-0 text-success" />
                      <span className="text-sm">Ongoing optimization</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 shrink-0 text-success" />
                      <span className="text-sm">Dedicated support</span>
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
            <SectionHeader
              title="Our Process"
              subtitle="Systematic approach to automation"
              centered
              className="mb-12"
            />

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Lightbulb className="h-8 w-8" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">1. Analysis</h3>
                <p className="text-sm text-muted-foreground">Map current processes and identify opportunities</p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <PenTool className="h-8 w-8" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">2. Design</h3>
                <p className="text-sm text-muted-foreground">Create optimized workflow blueprints</p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Code className="h-8 w-8" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">3. Implementation</h3>
                <p className="text-sm text-muted-foreground">Build and test automation systems</p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Rocket className="h-8 w-8" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">4. Deploy</h3>
                <p className="text-sm text-muted-foreground">Launch with training and monitoring</p>
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
                <AccordionTrigger>What processes can be automated?</AccordionTrigger>
                <AccordionContent>
                  Almost any repetitive business process can be automated - data entry, invoice generation, customer
                  communication, inventory tracking, report generation, HR tasks, and more. During our consultation,
                  we'll identify which processes will benefit most from automation.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>How much time will automation save?</AccordionTrigger>
                <AccordionContent>
                  Time savings vary by process, but clients typically save 5-20 hours per week on automated tasks. More
                  importantly, automation reduces errors, improves consistency, and frees your team to focus on
                  high-value activities rather than repetitive work.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>Do you work with existing software?</AccordionTrigger>
                <AccordionContent>
                  Yes, we integrate with most popular business software including accounting systems, CRMs, ERPs,
                  e-commerce platforms, and communication tools. If your software has an API or supports integrations,
                  we can likely automate workflows with it.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>What if our process changes?</AccordionTrigger>
                <AccordionContent>
                  We build flexible automation that can be adjusted as your business evolves. We also provide
                  documentation and training so you can make minor adjustments yourself. For major changes, we offer
                  maintenance packages with ongoing optimization support.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>Is automation secure?</AccordionTrigger>
                <AccordionContent>
                  Yes, security is a top priority. We follow best practices for data encryption, access control, and
                  secure integrations. All automated workflows are designed to maintain or improve upon your current
                  security standards.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-muted px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 font-display text-3xl font-bold sm:text-4xl">Ready to Automate Your Business?</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Let's discuss how automation can save you time and money
            </p>
            <Button asChild size="lg">
              <Link href="/contact">
                Get Free Consultation
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
