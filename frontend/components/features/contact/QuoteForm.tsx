"use client"

import type React from "react"
import { useState } from "react"
import { ArrowRight, CheckCircle2, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function QuoteForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      if (!res.ok) throw new Error("Submission failed")
      setSubmitStatus("success")
      setFormData({ name: "", email: "", phone: "", service: "", message: "" })
    } catch {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleServiceChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }))
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-sm font-medium">
            Name <span className="text-destructive">*</span>
          </Label>
          <Input
            id="name"
            name="name"
            placeholder="Your full name"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            className="rounded-[var(--radius-sm)] border-border bg-surface"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium">
            Email <span className="text-destructive">*</span>
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            className="rounded-[var(--radius-sm)] border-border bg-surface"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone" className="text-sm font-medium">
          Phone <span className="text-destructive">*</span>
        </Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder="+91 98765 43210"
          value={formData.phone}
          onChange={handleChange}
          required
          disabled={isSubmitting}
          className="rounded-[var(--radius-sm)] border-border bg-surface"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="service" className="text-sm font-medium">
          Service Interest <span className="text-destructive">*</span>
        </Label>
        <Select value={formData.service} onValueChange={handleServiceChange} disabled={isSubmitting} required>
          <SelectTrigger id="service" className="rounded-[var(--radius-sm)] border-border bg-surface">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="website">Web Development</SelectItem>
            <SelectItem value="app">Mobile App Development</SelectItem>
            <SelectItem value="seo">SEO Optimization</SelectItem>
            <SelectItem value="multiple">Multiple Services</SelectItem>
            <SelectItem value="other">Other / Not Sure</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-sm font-medium">
          Tell us about your project <span className="text-destructive">*</span>
        </Label>
        <Textarea
          id="message"
          name="message"
          placeholder="What are you building? What's your timeline? Any specific requirements?"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
          disabled={isSubmitting}
          className="rounded-[var(--radius-sm)] border-border bg-surface resize-none"
        />
      </div>

      {submitStatus === "success" && (
        <div className="flex items-start gap-3 rounded-[var(--radius-sm)] bg-primary-tint p-4 text-sm text-primary">
          <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold">Message sent!</p>
            <p className="text-primary/80">We've received your request and will reply within 24 hours.</p>
          </div>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="flex items-start gap-3 rounded-[var(--radius-sm)] bg-destructive/10 p-4 text-sm text-destructive">
          <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold">Something went wrong</p>
            <p>Please try again or reach us via WhatsApp.</p>
          </div>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex w-full items-center justify-center gap-2 rounded-pill bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-150 hover:bg-[#A84923] hover:gap-3 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isSubmitting ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <ArrowRight className="h-4 w-4" />
          </>
        )}
      </button>
    </form>
  )
}
