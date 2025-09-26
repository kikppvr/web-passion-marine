/**
 * Environment detection utilities
 * Provides type-safe environment variable access and validation
 */

export type Environment = "development" | "staging" | "production";

export interface EnvironmentConfig {
    NODE_ENV: Environment;
    NEXTAUTH_URL: string;
    NEXTAUTH_SECRET: string;
    DATABASE_URL: string;
    API_URL: string;
    DEBUG: boolean;
    LOG_LEVEL: "debug" | "info" | "warn" | "error";
    STRIPE_PUBLIC_KEY: string;
    STRIPE_SECRET_KEY: string;
    STRIPE_WEBHOOK_SECRET: string;
    SMTP_HOST: string;
    SMTP_PORT: number;
    SMTP_USER: string;
    SMTP_PASS: string;
    FROM_EMAIL: string;
    UPLOAD_MAX_SIZE: number;
    ALLOWED_FILE_TYPES: string;
    JWT_SECRET: string;
    ENCRYPTION_KEY: string;
    ENABLE_ANALYTICS: boolean;
    ENABLE_DEBUG_TOOLS: boolean;
    ENABLE_MAINTENANCE_MODE: boolean;
}

/**
 * Get the current environment
 */
export function getEnvironment(): Environment {
    const env = process.env.NODE_ENV as Environment;
    if (!env || !["development", "staging", "production"].includes(env)) {
        throw new Error(`Invalid NODE_ENV: ${env}`);
    }
    return env;
}

/**
 * Check if we're in development mode
 */
export function isDevelopment(): boolean {
    return getEnvironment() === "development";
}

/**
 * Check if we're in staging mode
 */
export function isStaging(): boolean {
    return getEnvironment() === "staging";
}

/**
 * Check if we're in production mode
 */
export function isProduction(): boolean {
    return getEnvironment() === "production";
}

/**
 * Get environment-specific configuration
 */
export function getEnvironmentConfig(): EnvironmentConfig {
    const env = getEnvironment();

    const config: EnvironmentConfig = {
        NODE_ENV: env,
        NEXTAUTH_URL: process.env.NEXTAUTH_URL || "",
        NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET || "",
        DATABASE_URL: process.env.DATABASE_URL || "",
        API_URL: process.env.API_URL || "",
        DEBUG: process.env.DEBUG === "true",
        LOG_LEVEL: (process.env.LOG_LEVEL as EnvironmentConfig["LOG_LEVEL"]) || "info",
        STRIPE_PUBLIC_KEY: process.env.STRIPE_PUBLIC_KEY || "",
        STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY || "",
        STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET || "",
        SMTP_HOST: process.env.SMTP_HOST || "",
        SMTP_PORT: parseInt(process.env.SMTP_PORT || "587", 10),
        SMTP_USER: process.env.SMTP_USER || "",
        SMTP_PASS: process.env.SMTP_PASS || "",
        FROM_EMAIL: process.env.FROM_EMAIL || "",
        UPLOAD_MAX_SIZE: parseInt(process.env.UPLOAD_MAX_SIZE || "10485760", 10),
        ALLOWED_FILE_TYPES:
            process.env.ALLOWED_FILE_TYPES || "image/jpeg,image/png,image/gif,image/webp",
        JWT_SECRET: process.env.JWT_SECRET || "",
        ENCRYPTION_KEY: process.env.ENCRYPTION_KEY || "",
        ENABLE_ANALYTICS: process.env.ENABLE_ANALYTICS === "true",
        ENABLE_DEBUG_TOOLS: process.env.ENABLE_DEBUG_TOOLS === "true",
        ENABLE_MAINTENANCE_MODE: process.env.ENABLE_MAINTENANCE_MODE === "true",
    };

    // Validate required environment variables
    const requiredVars = [
        "NEXTAUTH_URL",
        "NEXTAUTH_SECRET",
        "DATABASE_URL",
        "API_URL",
        "JWT_SECRET",
        "ENCRYPTION_KEY",
    ];

    const missingVars = requiredVars.filter(varName => !config[varName as keyof EnvironmentConfig]);

    if (missingVars.length > 0) {
        throw new Error(`Missing required environment variables: ${missingVars.join(", ")}`);
    }

    return config;
}

/**
 * Get the base URL for the current environment
 */
export function getBaseUrl(): string {
    const config = getEnvironmentConfig();
    return config.API_URL.replace("/api", "");
}

/**
 * Get the API URL for the current environment
 */
export function getApiUrl(): string {
    const config = getEnvironmentConfig();
    return config.API_URL;
}

/**
 * Check if analytics should be enabled
 */
export function shouldEnableAnalytics(): boolean {
    const config = getEnvironmentConfig();
    return config.ENABLE_ANALYTICS && isProduction();
}

/**
 * Check if debug tools should be enabled
 */
export function shouldEnableDebugTools(): boolean {
    const config = getEnvironmentConfig();
    return config.ENABLE_DEBUG_TOOLS || isDevelopment();
}

/**
 * Check if maintenance mode is enabled
 */
export function isMaintenanceMode(): boolean {
    const config = getEnvironmentConfig();
    return config.ENABLE_MAINTENANCE_MODE;
}

/**
 * Get environment-specific database configuration
 */
export function getDatabaseConfig() {
    const config = getEnvironmentConfig();
    const url = new URL(config.DATABASE_URL);

    return {
        host: url.hostname,
        port: parseInt(url.port || "5432", 10),
        database: url.pathname.slice(1),
        username: url.username,
        password: url.password,
        ssl: isProduction()
            ? {
                  rejectUnauthorized: false,
              }
            : false,
    };
}

/**
 * Get environment-specific email configuration
 */
export function getEmailConfig() {
    const config = getEnvironmentConfig();

    return {
        host: config.SMTP_HOST,
        port: config.SMTP_PORT,
        secure: config.SMTP_PORT === 465,
        auth: {
            user: config.SMTP_USER,
            pass: config.SMTP_PASS,
        },
        from: config.FROM_EMAIL,
    };
}
