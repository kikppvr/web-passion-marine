import { LanguageProvider } from "@/contexts/LanguageContext";
// Optimize: โหลดเฉพาะ icon styles ที่ใช้จริง (regular และ light)
import "@phosphor-icons/web/regular/style.css";
import "@phosphor-icons/web/light/style.css";
import type { Metadata } from "next";
import { Noto_Sans_Thai, Roboto } from "next/font/google";
import "../styles/globals.css";
import "../styles/main.scss";

// Font configurations - Optimize: ลด font weights เพื่อเพิ่มความเร็ว
const roboto = Roboto({
    weight: ["400", "600", "700"], // ลดจาก 4 weights เหลือ 3
    subsets: ["latin"],
    variable: "--font-roboto",
    display: "swap",
});

const notoSansThai = Noto_Sans_Thai({
    weight: ["400", "600", "700"], // ลดจาก 4 weights เหลือ 3
    subsets: ["thai"],
    variable: "--font-noto-sans-thai",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Passion Marine - บริการทางทะเลมืออาชีพ",
    description: "บริการทางทะเลครบวงจร รับรองคุณภาพและความปลอดภัย",
    icons: {
        icon: [{ url: "/favicon.png", sizes: "any", type: "image/png" }],
        shortcut: "/favicon.png",
        apple: "/favicon.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className='font-en antialiased'>
                <LanguageProvider>{children}</LanguageProvider>
            </body>
        </html>
    );
}
