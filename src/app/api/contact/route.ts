import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { getEmailConfig } from "@/lib/env";

interface ContactFormData {
    firstName: string;
    lastName: string;
    email: string;
    telephone?: string;
    subject: string;
    message: string;
}

export async function POST(request: NextRequest) {
    try {
        console.log("📨 Contact form submission received");

        const body: ContactFormData = await request.json();
        console.log("📝 Form data:", {
            firstName: body.firstName,
            lastName: body.lastName,
            email: body.email,
            subject: body.subject,
        });

        // Validate required fields
        if (!body.firstName || !body.lastName || !body.email || !body.subject || !body.message) {
            console.log("❌ Validation failed: Missing required fields");
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(body.email)) {
            console.log("❌ Validation failed: Invalid email format");
            return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
        }

        let transporter;
        let emailConfig;

        // Get email configuration (won't throw error)
        try {
            emailConfig = getEmailConfig();
            console.log("📧 Email config retrieved:", {
                hasHost: !!emailConfig?.host,
                hasUser: !!emailConfig?.auth?.user,
                hasPass: !!emailConfig?.auth?.pass,
                host: emailConfig?.host || "none",
            });
        } catch (configError) {
            console.error("⚠️ Error getting email config:", configError);
            emailConfig = null;
        }

        // Check if email is configured
        const hasValidConfig =
            emailConfig && emailConfig.host && emailConfig.auth?.user && emailConfig.auth?.pass;

        if (!hasValidConfig) {
            console.error("❌ Email configuration is missing");
            const missingVars = [];
            if (!emailConfig?.host) missingVars.push("SMTP_HOST");
            if (!emailConfig?.auth?.user) missingVars.push("SMTP_USER");
            if (!emailConfig?.auth?.pass) missingVars.push("SMTP_PASS");
            if (!emailConfig?.from) missingVars.push("FROM_EMAIL");

            return NextResponse.json(
                {
                    error: "Email service is not configured",
                    details: `Missing environment variables: ${missingVars.join(", ")}. Please create a .env.local file with SMTP configuration. Example: SMTP_HOST=smtp.gmail.com, SMTP_PORT=587, SMTP_USER=your-email@gmail.com, SMTP_PASS=your-app-password, FROM_EMAIL=your-email@gmail.com`,
                },
                { status: 500 }
            );
        }

        // Use configured SMTP for all environments (dev, stg, prd)
        if (!emailConfig) {
            throw new Error("Email config is null but hasValidConfig is true");
        }

        transporter = nodemailer.createTransport({
            host: emailConfig.host,
            port: emailConfig.port,
            secure: emailConfig.secure, // true for 465, false for other ports
            auth: {
                user: emailConfig.auth.user,
                pass: emailConfig.auth.pass,
            },
        });
        console.log(`✅ Using SMTP: ${emailConfig.host}:${emailConfig.port}`);

        // Email content
        if (!emailConfig) {
            throw new Error("Email config is required but not available");
        }

        // Escape HTML to prevent XSS
        const escapeHtml = (text: string) => {
            const map: { [key: string]: string } = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#039;",
            };
            return text.replace(/[&<>"']/g, m => map[m]);
        };

        const safeFirstName = escapeHtml(body.firstName);
        const safeLastName = escapeHtml(body.lastName);
        const safeEmail = escapeHtml(body.email);
        const safeTelephone = body.telephone ? escapeHtml(body.telephone) : "";
        const safeSubject = escapeHtml(body.subject);
        const safeMessage = escapeHtml(body.message).replace(/\n/g, "<br>");

        const mailOptions = {
            from: emailConfig.from || emailConfig.auth.user,
            to: "prapavarine.c@gmail.com", // Send to company email
            replyTo: body.email, // Allow reply to customer
            subject: `New Contact Form: ${body.subject}`,
            html: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Form Submission</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f4f4f4; line-height: 1.6;">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f4f4f4;">
        <tr>
            <td align="center" style="padding: 40px 20px;">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="max-width: 600px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); overflow: hidden;">
                    
                    <!-- Header -->
                    <tr>
                        <td style="background: linear-gradient(135deg, #0066cc 0%, #004499 100%); padding: 40px 30px; text-align: center;">
                            <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 600; letter-spacing: -0.5px;">
                                📧 New Contact Form Submission
                            </h1>
                            <p style="margin: 10px 0 0 0; color: #e0f0ff; font-size: 14px; opacity: 0.9;">
                                Passion Marine Contact Form
                            </p>
                        </td>
                    </tr>

                    <!-- Content -->
                    <tr>
                        <td style="padding: 40px 30px;">
                            
                            <!-- Greeting -->
                            <p style="margin: 0 0 30px 0; color: #333333; font-size: 16px; line-height: 1.6;">
                                Hello,<br><br>
                                You have received a new message from the Passion Marine contact form.
                            </p>

                            <!-- Contact Information Card -->
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f8f9fa; border-radius: 8px; margin-bottom: 30px; overflow: hidden;">
                                <tr>
                                    <td style="padding: 25px;">
                                        <h2 style="margin: 0 0 20px 0; color: #0066cc; font-size: 18px; font-weight: 600; border-bottom: 2px solid #0066cc; padding-bottom: 10px;">
                                            👤 Contact Information
                                        </h2>
                                        
                                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                            <tr>
                                                <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0;">
                                                    <strong style="color: #666666; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 5px;">Full Name</strong>
                                                    <span style="color: #333333; font-size: 16px; font-weight: 500;">${safeFirstName} ${safeLastName}</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0;">
                                                    <strong style="color: #666666; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 5px;">Email Address</strong>
                                                    <a href="mailto:${safeEmail}" style="color: #0066cc; font-size: 16px; text-decoration: none; font-weight: 500;">${safeEmail}</a>
                                                </td>
                                            </tr>
                                            ${
                                                safeTelephone
                                                    ? `
                                            <tr>
                                                <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0;">
                                                    <strong style="color: #666666; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 5px;">Phone Number</strong>
                                                    <a href="tel:${safeTelephone}" style="color: #333333; font-size: 16px; text-decoration: none; font-weight: 500;">${safeTelephone}</a>
                                                </td>
                                            </tr>
                                            `
                                                    : ""
                                            }
                                            <tr>
                                                <td style="padding: 12px 0;">
                                                    <strong style="color: #666666; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 5px;">Subject</strong>
                                                    <span style="color: #333333; font-size: 16px; font-weight: 500;">${safeSubject}</span>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>

                            <!-- Message Card -->
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #ffffff; border-left: 4px solid #0066cc; border-radius: 4px; margin-bottom: 30px;">
                                <tr>
                                    <td style="padding: 25px;">
                                        <h2 style="margin: 0 0 15px 0; color: #0066cc; font-size: 18px; font-weight: 600;">
                                            💬 Message
                                        </h2>
                                        <div style="color: #333333; font-size: 15px; line-height: 1.8; white-space: pre-wrap;">
                                            ${safeMessage}
                                        </div>
                                    </td>
                                </tr>
                            </table>

                            <!-- Action Button -->
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                <tr>
                                    <td align="center" style="padding: 20px 0;">
                                        <a href="mailto:${safeEmail}?subject=Re: ${safeSubject}" style="display: inline-block; padding: 14px 32px; background-color: #0066cc; color: #ffffff; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 15px; box-shadow: 0 2px 4px rgba(0,102,204,0.3);">
                                            ✉️ Reply to ${safeFirstName}
                                        </a>
                                    </td>
                                </tr>
                            </table>

                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td style="background-color: #f8f9fa; padding: 25px 30px; text-align: center; border-top: 1px solid #e0e0e0;">
                            <p style="margin: 0 0 10px 0; color: #666666; font-size: 13px; line-height: 1.6;">
                                This email was sent from the <strong style="color: #0066cc;">Passion Marine</strong> contact form.<br>
                                You can reply directly to this email to respond to ${safeFirstName} ${safeLastName}.
                            </p>
                            <p style="margin: 15px 0 0 0; color: #999999; font-size: 12px;">
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

        // Send email
        const info = await transporter.sendMail(mailOptions);

        console.log("📧 Email sent successfully! Message ID:", info.messageId);

        return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
    } catch (error) {
        console.error("❌ Error sending email:", error);
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        const errorDetails = error instanceof Error ? error.stack : String(error);
        console.error("Error details:", errorDetails);

        // Check for authentication errors
        const isAuthError =
            errorMessage.includes("Invalid login") ||
            errorMessage.includes("BadCredentials") ||
            errorMessage.includes("Username and Password not accepted") ||
            errorMessage.includes("535-5.7.8");

        let userFriendlyError = "Failed to send email. Please try again later.";
        let userFriendlyDetails = errorMessage;

        if (isAuthError) {
            userFriendlyError = "SMTP Authentication Failed";
            userFriendlyDetails =
                "Invalid email credentials. For Gmail, you must use an App Password (not your regular password). Please check your SMTP_USER and SMTP_PASS in .env.local file. See: https://support.google.com/accounts/answer/185833";
        }

        // More detailed error response in development
        const isDevMode = process.env.NODE_ENV !== "production";
        if (isDevMode) {
            return NextResponse.json(
                {
                    error: userFriendlyError,
                    details: userFriendlyDetails,
                    stack: errorDetails,
                },
                { status: 500 }
            );
        }

        return NextResponse.json(
            {
                error: userFriendlyError,
                details: isAuthError ? userFriendlyDetails : undefined,
            },
            { status: 500 }
        );
    }
}
