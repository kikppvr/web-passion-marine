import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { getEmailConfig, getEnvironment } from "@/lib/env";
import packageJson from "../../../../package.json";

type CheckStatus = "healthy" | "degraded" | "unconfigured";

interface CheckResult {
    status: CheckStatus;
    latency_ms?: number;
    detail?: string;
}

interface HealthResponse {
    status: "healthy" | "degraded";
    environment: string;
    version: string;
    timestamp: string;
    checks: {
        directus: CheckResult;
        smtp: CheckResult;
    };
}

async function checkDirectus(showDetail: boolean): Promise<CheckResult> {
    const cmsUrl = process.env.NEXT_PUBLIC_CMS_URL?.trim();
    if (!cmsUrl) {
        return {
            status: "unconfigured",
            detail: showDetail ? "NEXT_PUBLIC_CMS_URL not set" : undefined,
        };
    }

    const start = Date.now();
    try {
        const res = await fetch(`${cmsUrl}/server/ping`, {
            signal: AbortSignal.timeout(3000),
        });
        const latency_ms = Date.now() - start;

        if (res.ok) {
            return { status: "healthy", latency_ms };
        }
        return {
            status: "degraded",
            latency_ms,
            detail: showDetail ? `HTTP ${res.status}` : undefined,
        };
    } catch (err) {
        return {
            status: "degraded",
            latency_ms: Date.now() - start,
            detail: showDetail ? (err instanceof Error ? err.message : "unreachable") : undefined,
        };
    }
}

async function checkSmtp(showDetail: boolean): Promise<CheckResult> {
    const config = getEmailConfig();
    if (!config) {
        return {
            status: "unconfigured",
            detail: showDetail
                ? "SMTP_HOST / SMTP_USER / SMTP_PASS / FROM_EMAIL not set"
                : undefined,
        };
    }

    const start = Date.now();
    try {
        const transporter = nodemailer.createTransport({
            host: config.host,
            port: config.port || 587,
            secure: config.secure,
            auth: config.auth,
            connectionTimeout: 5000,
            socketTimeout: 5000,
            tls: { rejectUnauthorized: false },
        });
        await transporter.verify();
        return { status: "healthy", latency_ms: Date.now() - start };
    } catch (err) {
        return {
            status: "degraded",
            latency_ms: Date.now() - start,
            detail: showDetail ? (err instanceof Error ? err.message : "unreachable") : undefined,
        };
    }
}

export async function GET() {
    const env = getEnvironment();
    // detail ซ่อนใน production — ป้องกัน info leak
    const showDetail = env !== "production";

    const [directus, smtp] = await Promise.all([checkDirectus(showDetail), checkSmtp(showDetail)]);

    const allChecks = [directus, smtp];
    const overallStatus: HealthResponse["status"] = allChecks.every(c => c.status === "healthy")
        ? "healthy"
        : "degraded";

    const body: HealthResponse = {
        status: overallStatus,
        environment: env,
        version: packageJson.version,
        timestamp: new Date().toISOString(),
        checks: { directus, smtp },
    };

    // HTTP 200 เสมอ — route ตอบสนองได้ = app ยัง up
    // ให้ consumer อ่าน status field แทน
    return NextResponse.json(body, {
        status: 200,
        headers: { "Cache-Control": "no-store" },
    });
}
