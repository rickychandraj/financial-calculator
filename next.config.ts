import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV !== "production";

// Everything the site loads is served from its own origin; external domains
// only appear as plain links. The one exception is the calculator submission
// endpoint on Supabase, which the page posts answers to.
const SUPABASE_ORIGIN = "https://zynzbcbaobhrhmeckjrx.supabase.co";
const contentSecurityPolicy = [
    "default-src 'self'",
    // Next.js inlines its bootstrap scripts; dev mode also needs eval for fast refresh.
    `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: blob:",
    "font-src 'self' data:",
    `connect-src 'self' ${SUPABASE_ORIGIN}${isDev ? " ws:" : ""}`,
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
].join("; ");

const securityHeaders = [
    { key: "Content-Security-Policy", value: contentSecurityPolicy },
    { key: "X-Frame-Options", value: "DENY" },
    { key: "X-Content-Type-Options", value: "nosniff" },
    { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
    { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
    { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
];

const nextConfig: NextConfig = {
    poweredByHeader: false,
    async headers() {
        return [{ source: "/:path*", headers: securityHeaders }];
    },
};

export default nextConfig;
