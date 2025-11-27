import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { getEmailConfig } from "@/lib/env";
import { escapeHtml, isValidEmail, validateLength, sanitizeString } from "@/lib/security";
import { isProduction } from "@/lib/env";

interface ContactFormData {
    firstName: string;
    lastName: string;
    email: string;
    telephone?: string;
    subject: string;
    message: string;
}

// Input length constraints
const MAX_LENGTH = {
    firstName: 50,
    lastName: 50,
    email: 100,
    telephone: 20,
    subject: 200,
    message: 5000,
};

const MIN_LENGTH = {
    firstName: 1,
    lastName: 1,
    subject: 1,
    message: 10,
};

export async function POST(request: NextRequest) {
    const startedAt = Date.now();

    try {
        console.log("📨 Contact form submission received");

        const body: ContactFormData = await request.json();
        console.log("📝 Form data:", {
            firstName: body.firstName,
            lastName: body.lastName,
            email: body.email,
            subject: body.subject,
        });

        // ---------- validate ----------
        // Check required fields
        if (!body.firstName || !body.lastName || !body.email || !body.subject || !body.message) {
            console.log("❌ Validation failed: Missing required fields");
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        // Sanitize inputs
        body.firstName = sanitizeString(body.firstName);
        body.lastName = sanitizeString(body.lastName);
        body.email = sanitizeString(body.email);
        body.subject = sanitizeString(body.subject);
        body.message = sanitizeString(body.message);
        if (body.telephone) {
            body.telephone = sanitizeString(body.telephone);
        }

        // Validate email format
        if (!isValidEmail(body.email)) {
            console.log("❌ Validation failed: Invalid email format");
            return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
        }

        // Validate input lengths
        const firstNameValidation = validateLength(body.firstName, MIN_LENGTH.firstName, MAX_LENGTH.firstName);
        if (!firstNameValidation.valid) {
            return NextResponse.json({ error: firstNameValidation.error }, { status: 400 });
        }

        const lastNameValidation = validateLength(body.lastName, MIN_LENGTH.lastName, MAX_LENGTH.lastName);
        if (!lastNameValidation.valid) {
            return NextResponse.json({ error: lastNameValidation.error }, { status: 400 });
        }

        if (body.email.length > MAX_LENGTH.email) {
            return NextResponse.json({ error: "Email address is too long" }, { status: 400 });
        }

        if (body.telephone && body.telephone.length > MAX_LENGTH.telephone) {
            return NextResponse.json({ error: "Telephone number is too long" }, { status: 400 });
        }

        const subjectValidation = validateLength(body.subject, MIN_LENGTH.subject, MAX_LENGTH.subject);
        if (!subjectValidation.valid) {
            return NextResponse.json({ error: subjectValidation.error }, { status: 400 });
        }

        const messageValidation = validateLength(body.message, MIN_LENGTH.message, MAX_LENGTH.message);
        if (!messageValidation.valid) {
            return NextResponse.json({ error: messageValidation.error }, { status: 400 });
        }

        // ---------- email config ----------
        const emailConfig = getEmailConfig();
        console.log("📧 Email config:", emailConfig);

        if (
            !emailConfig ||
            !emailConfig.host ||
            !emailConfig.auth?.user ||
            !emailConfig.auth?.pass ||
            !emailConfig.from
        ) {
            console.error("❌ Email configuration is missing or incomplete");
            return NextResponse.json(
                {
                    error: "Email service is not configured",
                    details: "Missing SMTP_HOST / SMTP_USER / SMTP_PASS / FROM_EMAIL on server",
                },
                { status: 500 }
            );
        }

        // ---------- transporter (ใส่ timeout กันค้าง + TLS แบบ Plesk) ----------
        const transporter = nodemailer.createTransport({
            host: emailConfig.host, // เช่น mail.passionmarine.co.th
            port: emailConfig.port || 587,
            secure: emailConfig.port === 465, // true เฉพาะ 465
            auth: {
                user: emailConfig.auth.user,
                pass: emailConfig.auth.pass,
            },
            connectionTimeout: 10_000, // 10s ถ้าต่อไม่ได้ให้ error
            socketTimeout: 10_000, // 10s ถ้าส่งไม่สำเร็จให้ error
            tls: {
                // In production, should verify certificates
                // For Plesk with self-signed certs, set to false only in dev/staging
                rejectUnauthorized: isProduction(),
            },
        });

        console.log(`✅ Using SMTP: ${emailConfig.host}:${emailConfig.port}`);

        // ---------- mail content ----------
        // Escape HTML for email content (already sanitized above)
        const safeFirstName = escapeHtml(body.firstName);
        const safeLastName = escapeHtml(body.lastName);
        const safeEmail = escapeHtml(body.email);
        const safeTelephone = body.telephone ? escapeHtml(body.telephone) : "";
        const safeSubject = escapeHtml(body.subject);
        const safeMessage = escapeHtml(body.message).replace(/\n/g, "<br>");

        const mailOptions = {
            from: emailConfig.from || emailConfig.auth.user,
            to: emailConfig.from,
            replyTo: body.email,
            subject: `New Contact Form: ${body.subject}`,
            html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>New Contact Form Submission</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5; line-height: 1.6;">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f5f5f5;">
            <tr>
            <td align="center" style="padding: 60px 20px;">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08); overflow: hidden;">
        
                <!-- Header -->
                <tr>
                    <td style="background: linear-gradient(135deg, #1c4583 0%, #14315d 100%); padding: 48px 40px; text-align: center;">
                    <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 600; letter-spacing: -0.3px; line-height: 1.3;">
                        New Contact Form Submission
                    </h1>
                    <p style="margin: 12px 0 0 0; color: rgba(255, 255, 255, 0.85); font-size: 14px; font-weight: 400;">
                        Passion Marine Contact Form
                    </p>
                    </td>
                </tr>
        
                <!-- Content -->
                <tr>
                    <td style="padding: 48px 40px;">
        
                    <!-- Greeting -->
                    <p style="margin: 0 0 32px 0; color: #2f2f2f; font-size: 16px; line-height: 1.6;">
                        Hello,<br />
                        You have received a new message from the Passion Marine contact form.
                    </p>
        
                    <!-- Contact Information Card -->
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f8f9fa; border-radius: 8px; margin-bottom: 32px; border: 1px solid #e9ecef;">
                        <tr>
                        <td style="padding: 32px;">
                            <h2 style="margin: 0 0 24px 0; color: #1c4583; font-size: 16px; font-weight: 600; letter-spacing: 0.2px; text-transform: uppercase;">
                            Contact Information
                            </h2>
        
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                            <tr>
                                <td style="padding: 16px 0; border-bottom: 1px solid #e9ecef;">
                                <div style="color: #6f6f71; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 500; margin-bottom: 6px;">Full Name</div>
                                <div style="color: #2f2f2f; font-size: 16px; font-weight: 500; line-height: 1.5;">${safeFirstName} ${safeLastName}</div>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 16px 0; border-bottom: 1px solid #e9ecef;">
                                <div style="color: #6f6f71; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 500; margin-bottom: 6px;">Email Address</div>
                                <a href="mailto:${safeEmail}" style="color: #1c4583; font-size: 16px; text-decoration: none; font-weight: 500; line-height: 1.5;">${safeEmail}</a>
                                </td>
                            </tr>
                            ${
                                safeTelephone
                                    ? `
                            <tr>
                                <td style="padding: 16px 0; border-bottom: 1px solid #e9ecef;">
                                <div style="color: #6f6f71; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 500; margin-bottom: 6px;">Phone Number</div>
                                <a href="tel:${safeTelephone}" style="color: #2f2f2f; font-size: 16px; text-decoration: none; font-weight: 500; line-height: 1.5;">${safeTelephone}</a>
                                </td>
                            </tr>
                            `
                                    : ""
                            }
                            <tr>
                                <td style="padding: 16px 0; border-bottom: 1px solid #e9ecef;">
                                <div style="color: #6f6f71; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 500; margin-bottom: 6px;">Subject</div>
                                <div style="color: #2f2f2f; font-size: 16px; font-weight: 500; line-height: 1.5;">${safeSubject}</div>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 16px 0;">
                                <div style="color: #6f6f71; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 500; margin-bottom: 6px;">Message</div>
                                <div style="color: #2f2f2f; font-size: 15px; font-weight: 400; line-height: 1.8; white-space: pre-wrap;">${safeMessage}</div>
                                </td>
                            </tr>
                            </table>
                        </td>
                        </tr>
                    </table>
        
                    <!-- Action Button -->
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                        <tr>
                        <td align="center" style="padding: 8px 0 24px 0;">
                            <a href="mailto:${safeEmail}?subject=Re: ${safeSubject}" style="display: inline-block; padding: 14px 36px; background-color: #1c4583; color: #ffffff; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 15px; letter-spacing: 0.2px;">
                            Reply to ${safeFirstName}
                            </a>
                        </td>
                        </tr>
                    </table>
        
                    </td>
                </tr>
        
                <!-- Footer -->
                <tr>
                    <td style="background-color: #f8f9fa; padding: 32px 40px; text-align: center; border-top: 1px solid #e9ecef;">
                    <p style="margin: 0 0 12px 0; color: #6f6f71; font-size: 13px; line-height: 1.6;">
                        This email was sent from the <strong style="color: #1c4583; font-weight: 600;">Passion Marine</strong> contact form.<br />
                        You can reply directly to this email to respond to ${safeFirstName} ${safeLastName}.
                    </p>
                    <p style="margin: 16px 0 0 0; color: #9f9fa0; font-size: 12px; line-height: 1.5;">
                        © ${new Date().getFullYear()} Passion Marine Company Limited. All rights reserved.
                    </p>
                    </td>
                </tr>
        
                </table>
            </td>
            </tr>
        </table>
        </body>
        </html>
            `,
            text: `
        ═══════════════════════════════════════════════════════════
            NEW CONTACT FORM SUBMISSION - PASSION MARINE
        ═══════════════════════════════════════════════════════════
        
        You have received a new message from the Passion Marine contact form.
        
        CONTACT INFORMATION
        ───────────────────────────────────────────────────────────
        Full Name:    ${body.firstName} ${body.lastName}
        Email:        ${body.email}
        ${body.telephone ? `Phone:         ${body.telephone}\n` : ""}Subject:      ${body.subject}
        
        MESSAGE
        ───────────────────────────────────────────────────────────
        ${body.message}
        
        ───────────────────────────────────────────────────────────
        
        You can reply directly to this email to respond to ${body.firstName} ${body.lastName}.
        
        This email was sent from the Passion Marine contact form.
        © ${new Date().getFullYear()} Passion Marine Company Limited.
        
        ═══════════════════════════════════════════════════════════
            `,
        };

        // ---------- send mail ----------
        console.log("📤 Sending email via SMTP...");
        const info = await transporter.sendMail(mailOptions);
        console.log("📧 Email sent successfully! Message ID:", info.messageId);
        console.log("⏱ Total handler time:", Date.now() - startedAt, "ms");

        return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
    } catch (error) {
        console.error("❌ Error sending email:", error);
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        const errorDetails = error instanceof Error ? error.stack : String(error);

        const isDevMode = process.env.NODE_ENV !== "production";

        if (isDevMode) {
            // dev/stg: send error details to the client for debugging
            return NextResponse.json(
                {
                    error: "Failed to send email",
                    message: errorMessage,
                    stack: errorDetails,
                },
                { status: 500 }
            );
        }

        // prod: hide error details from the client
        return NextResponse.json(
            {
                error: "Failed to send email. Please try again later.",
            },
            { status: 500 }
        );
    }
}
