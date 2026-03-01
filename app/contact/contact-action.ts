"use server";

import nodemailer from "nodemailer";
import { contactFormSchema, type ContactFormValues } from "@/lib/contact-schema";

export type ContactFormState = {
  success: boolean;
  error?: string;
};

export async function submitContactForm(
  data: ContactFormValues
): Promise<ContactFormState> {
  // Server-side validation
  const result = contactFormSchema.safeParse(data);

  if (!result.success) {
    return {
      success: false,
      error: result.error.issues.map((e: { message: string }) => e.message).join(", "),
    };
  }

  const { name, email, role, company, useCase, deployment } = result.data;

  // Create nodemailer transporter with Gmail SMTP
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  // Build email HTML
  const htmlBody = `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background-color: #f8f9fa; border-radius: 12px;">
      <div style="background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); padding: 24px 32px; border-radius: 8px 8px 0 0;">
        <h1 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 600;">New Contact Form Submission</h1>
        <p style="color: #a0aec0; margin: 8px 0 0; font-size: 14px;">Architecture Review Request</p>
      </div>
      
      <div style="background: #ffffff; padding: 32px; border-radius: 0 0 8px 8px; border: 1px solid #e2e8f0; border-top: none;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #64748b; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; width: 140px; vertical-align: top;">Name</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #1a202c; font-size: 15px;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #64748b; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; vertical-align: top;">Email</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #1a202c; font-size: 15px;"><a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a></td>
          </tr>
          ${role ? `
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #64748b; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; vertical-align: top;">Role</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #1a202c; font-size: 15px;">${role}</td>
          </tr>` : ""}
          ${company ? `
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #64748b; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; vertical-align: top;">Company</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #1a202c; font-size: 15px;">${company}</td>
          </tr>` : ""}
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #64748b; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; vertical-align: top;">Deployment</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #1a202c; font-size: 15px;">
              <span style="display: inline-block; padding: 4px 12px; background: #eef2ff; color: #4f46e5; border-radius: 20px; font-size: 13px; font-weight: 500;">
                ${deployment === "on-premises" ? "On-Premises" : "Private Cloud"}
              </span>
            </td>
          </tr>
        </table>

        <div style="margin-top: 24px; padding: 20px; background: #f8fafc; border-radius: 8px; border: 1px solid #e2e8f0;">
          <p style="margin: 0 0 8px; color: #64748b; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Use Case Summary</p>
          <p style="margin: 0; color: #1a202c; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${useCase}</p>
        </div>
      </div>
      
      <p style="text-align: center; color: #94a3b8; font-size: 12px; margin-top: 24px;">
        Submitted via the Enterprise AI contact form
      </p>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"Enterprise AI Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `Architecture Review Request from ${name}${company ? ` — ${company}` : ""}`,
      html: htmlBody,
    });

    return { success: true };
  } catch (error) {
    console.error("Failed to send contact email:", error);
    return {
      success: false,
      error: "Failed to send your message. Please try again or email us directly.",
    };
  }
}
