import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: 'Web Passion Marine - บริการทางทะเลมืออาชีพ',
    description: 'บริการทางทะเลครบวงจร รับรองคุณภาพและความปลอดภัย',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="th">
            <body
                className="font-sans antialiased"
                style={{
                    fontFamily:
                        "'Noto Sans Thai', 'Sarabun', 'Kanit', system-ui, sans-serif",
                }}
            >
                {children}
            </body>
        </html>
    )
}
