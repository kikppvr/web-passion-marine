import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Simple in-memory rate limiting
// For production, consider using Redis or a dedicated rate limiting service
const rateLimitMap = new Map<
    string,
    { count: number; resetTime: number }
>();

const RATE_LIMIT = {
    windowMs: 15 * 60 * 1000, // 15 minutes
    maxRequests: 10, // 10 requests per window per IP
};

function getRateLimitKey(request: NextRequest): string {
    // Get IP address from headers (considering proxies)
    const forwarded = request.headers.get("x-forwarded-for");
    const realIp = request.headers.get("x-real-ip");
    const ip = forwarded 
        ? forwarded.split(",")[0].trim() 
        : realIp 
        ? realIp.trim()
        : "unknown";
    return ip;
}

function checkRateLimit(key: string): boolean {
    const now = Date.now();
    const record = rateLimitMap.get(key);

    // Clean up old entries periodically
    if (rateLimitMap.size > 1000) {
        for (const [k, v] of rateLimitMap.entries()) {
            if (now > v.resetTime) {
                rateLimitMap.delete(k);
            }
        }
    }

    if (!record || now > record.resetTime) {
        rateLimitMap.set(key, {
            count: 1,
            resetTime: now + RATE_LIMIT.windowMs,
        });
        return true;
    }

    if (record.count >= RATE_LIMIT.maxRequests) {
        return false;
    }

    record.count++;
    return true;
}

export function middleware(request: NextRequest) {
    // Apply rate limiting to API routes
    if (request.nextUrl.pathname.startsWith("/api/")) {
        const key = getRateLimitKey(request);

        if (!checkRateLimit(key)) {
            return NextResponse.json(
                {
                    error: "Too many requests. Please try again later.",
                    message: "Rate limit exceeded. Please wait before making another request.",
                },
                {
                    status: 429,
                    headers: {
                        "Retry-After": "900", // 15 minutes in seconds
                    },
                }
            );
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: "/api/:path*",
};

