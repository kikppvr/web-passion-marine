import { LanguageProvider } from "@/contexts/LanguageContext";
import "@phosphor-icons/web/regular/style.css";
import "@phosphor-icons/web/light/style.css";
import "@phosphor-icons/web/fill/style.css";
import "@phosphor-icons/web/bold/style.css";
import type { Metadata } from "next";
import { Noto_Sans_Thai, Roboto } from "next/font/google";
import { generateMetadata as createMetadata } from "@/lib/metadata";
import "../styles/globals.css";
import "../styles/main.scss";

const roboto = Roboto({
    weight: ["400", "600", "700"],
    subsets: ["latin"],
    variable: "--font-roboto",
    display: "swap",
    adjustFontFallback: true,
    preload: true,
    fallback: ["system-ui", "arial"],
});

const notoSansThai = Noto_Sans_Thai({
    weight: ["400", "600", "700"],
    subsets: ["thai"],
    variable: "--font-noto-sans-thai",
    display: "swap",
    adjustFontFallback: true,
    preload: true,
    fallback: ["system-ui", "arial"],
});

export const metadata: Metadata = createMetadata();

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={`${roboto.variable} ${notoSansThai.variable} font-en antialiased`}>
                <LanguageProvider>{children}</LanguageProvider>
            </body>
        </html>
    );
}
