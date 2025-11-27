/**
 * Security utilities for input sanitization and validation
 */

/**
 * Sanitize HTML string to prevent XSS attacks
 * Basic implementation - for production, consider using DOMPurify
 */
export function sanitizeHtml(html: string): string {
    if (!html) return "";

    // Remove script tags and event handlers
    let sanitized = html
        .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
        .replace(/on\w+="[^"]*"/gi, "")
        .replace(/on\w+='[^']*'/gi, "")
        .replace(/javascript:/gi, "")
        .replace(/data:text\/html/gi, "");

    // Allow only safe HTML tags
    const allowedTags = [
        "p",
        "br",
        "strong",
        "em",
        "u",
        "span",
        "div",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "ul",
        "ol",
        "li",
        "a",
        "img",
    ];
    const allowedAttributes = ["href", "src", "alt", "class", "id", "style"];

    // Basic tag whitelist (simple implementation)
    // For production, use a proper HTML sanitizer like DOMPurify
    const tagPattern = new RegExp(
        `<(?!/?(${allowedTags.join("|")})\\b)[^>]*>`,
        "gi"
    );
    sanitized = sanitized.replace(tagPattern, "");

    return sanitized;
}

/**
 * Escape HTML special characters
 */
export function escapeHtml(text: string): string {
    if (!text) return "";

    const map: Record<string, string> = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
    };

    return text.replace(/[&<>"']/g, m => map[m]);
}

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Validate input length
 */
export function validateLength(
    value: string,
    min: number,
    max: number
): { valid: boolean; error?: string } {
    if (!value || value.trim().length < min) {
        return {
            valid: false,
            error: `Value must be at least ${min} characters long`,
        };
    }

    if (value.length > max) {
        return {
            valid: false,
            error: `Value must not exceed ${max} characters`,
        };
    }

    return { valid: true };
}

/**
 * Sanitize string input (remove dangerous characters)
 */
export function sanitizeString(input: string): string {
    if (!input) return "";

    return input
        .trim()
        .replace(/[<>]/g, "") // Remove angle brackets
        .replace(/javascript:/gi, "") // Remove javascript: protocol
        .replace(/on\w+=/gi, ""); // Remove event handlers
}

