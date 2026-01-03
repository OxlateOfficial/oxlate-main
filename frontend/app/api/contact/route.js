import nodemailer from "nodemailer"
import { NextResponse } from "next/server"

export async function POST(req) {
  try {
    const { name, email, phone, service, message } = await req.json()

    // Basic validation
    if (!name || !email || !phone || !service || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Mail transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    /* ===============================
       EMAIL 1: ADMIN / YOU
    =============================== */
    const adminEmailHtml = `
      <div style="font-family:Arial,sans-serif; color:#111; line-height:1.6;">
        <h2>New Contact Form Submission</h2>
        <p>A new project inquiry has been submitted.</p>

        <hr />

        <table cellpadding="6" cellspacing="0">
          <tr><td><strong>Name:</strong></td><td>${name}</td></tr>
          <tr><td><strong>Email:</strong></td><td>${email}</td></tr>
          <tr><td><strong>Phone:</strong></td><td>${phone}</td></tr>
          <tr><td><strong>Service:</strong></td><td>${service}</td></tr>
        </table>

        <hr />

        <h4>Client Message</h4>
        <div style="background:#f7f7f7; padding:12px; border-radius:6px;">
          ${message.replace(/\n/g, "<br />")}
        </div>

        <hr />

        <p style="font-size:12px;color:#666;">
          Source: Oxlate Website Contact Form
        </p>
      </div>
    `

    /* ===============================
       EMAIL 2: USER AUTO-REPLY
    =============================== */
    const userEmailHtml = `
      <div style="font-family:Arial,sans-serif; color:#111; line-height:1.6;">
        <p>Hi ${name},</p>

        <p>
          Thank you for contacting <strong>Oxlate</strong>.
          We’ve received your request regarding <strong>${service}</strong>.
        </p>

        <p>
          Our team is reviewing your message and will get back to you
          within <strong>24 hours</strong>.
        </p>

        <div style="background:#f7f7f7; padding:12px; border-radius:6px;">
          <p><strong>Your message:</strong></p>
          <p>${message.replace(/\n/g, "<br />")}</p>
        </div>

        <p>
          If your request is urgent, simply reply to this email.
        </p>

        <p>
          Regards,<br/>
          <strong>Oxlate Team</strong><br/>
          Digital Solutions & Automation
        </p>

        <hr />

        <p style="font-size:12px;color:#666;">
          This is an automated confirmation email.
        </p>
      </div>
    `

    // Send admin email
    await transporter.sendMail({
      from: `"Oxlate Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `New Project Inquiry — ${service} | ${name}`,
      html: adminEmailHtml,
    })

    // Send user confirmation email
    await transporter.sendMail({
      from: `"Oxlate" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "We’ve received your request — Oxlate",
      html: userEmailHtml,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    )
  }
}
