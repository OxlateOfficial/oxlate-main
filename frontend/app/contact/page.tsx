import type { Metadata } from "next"
import { Mail, MapPin, Clock, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SectionHeader } from "@/components/section-header"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contact Us | Oxlate Digital Services",
  description:
    "Get in touch with Oxlate for website development, app development, and business automation. Located in Amritsar, Punjab. 24 hour response time.",
}

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-linear-to-br from-primary/10 to-accent/10 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 font-display text-4xl font-bold sm:text-5xl">Get in Touch</h1>
            <p className="text-pretty text-xl text-muted-foreground">
              Ready to start your project? We'd love to hear from you. We reply within 24 hours.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Contact Form */}
              <div>
                <SectionHeader title="Send Us a Message" subtitle="Fill out the form below" className="mb-8" />
                <ContactForm />
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <SectionHeader title="Contact Information" subtitle="Other ways to reach us" className="mb-8" />

                {/* WhatsApp Card */}
                <Card className="border-success/30 bg-success/5">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MessageCircle className="h-5 w-5 text-success" />
                      WhatsApp
                    </CardTitle>
                    <CardDescription>Get instant responses on WhatsApp</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild className="w-full gap-2 bg-success hover:bg-success/90">
                      <a href="https://wa.me/917508317625" target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="h-4 w-4" />
                        Chat on WhatsApp
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                {/* Email Card */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Mail className="h-5 w-5 text-primary" />
                      Email
                    </CardTitle>
                    <CardDescription>Send us an email</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <a href="mailto:oxlateofficial@gmail.com" className="text-lg font-medium text-primary hover:underline">
                      oxlateofficial@gmail.com
                    </a>
                  </CardContent>
                </Card>

                {/* Location Card */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      Location
                    </CardTitle>
                    <CardDescription>Where we're based</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Metro Station, A62, Gali Number 6, near Dwarka Mod, Block A, Sewak Park, Nawada, New Delhi, Delhi, 110059</p>
                  </CardContent>
                </Card>

                {/* Response Time Card */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-primary" />
                      Response Time
                    </CardTitle>
                    <CardDescription>How quickly we respond</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">We reply within 24 hours on business days</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* What Happens Next Section */}
        <section className="bg-muted px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <SectionHeader title="What Happens Next?" centered className="mb-12" />

            <div className="grid gap-6 sm:grid-cols-3">
              <div className="space-y-2 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="font-semibold">We Review Your Request</h3>
                <p className="text-sm text-muted-foreground">
                  We'll carefully review your requirements and prepare for our conversation
                </p>
              </div>

              <div className="space-y-2 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="font-semibold">Initial Consultation</h3>
                <p className="text-sm text-muted-foreground">
                  We'll schedule a call to discuss your project in detail and answer questions
                </p>
              </div>

              <div className="space-y-2 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="font-semibold">Proposal & Timeline</h3>
                <p className="text-sm text-muted-foreground">
                  You'll receive a detailed proposal with pricing, timeline, and next steps
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
