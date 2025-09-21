import { LanguageProvider } from '@/contexts/LanguageContext'
import type { Metadata } from 'next'
import { Noto_Sans_Thai, Roboto } from 'next/font/google'
import '../styles/globals.css'
import '../styles/main.scss'

// Font configurations
const roboto = Roboto({
    weight: ['400', '500', '600', '700'], // ลบ 300 ตาม CSS variables
    subsets: ['latin'],
    variable: '--font-roboto',
    display: 'swap',
})

const notoSansThai = Noto_Sans_Thai({
    weight: ['400', '500', '600', '700'], // ลบ 300 ตาม CSS variables
    subsets: ['thai'],
    variable: '--font-noto-sans-thai',
    display: 'swap',
})

export const metadata: Metadata = {
    title: 'Passion Marine - บริการทางทะเลมืออาชีพ',
    description: 'บริการทางทะเลครบวงจร รับรองคุณภาพและความปลอดภัย',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className="font-en antialiased">
                <LanguageProvider>{children}</LanguageProvider>
            </body>
        </html>
    )
}
