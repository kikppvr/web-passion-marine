import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({
    weight: ['300', '400', '500', '700', '900'],
    subsets: ['latin'],
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
        <html lang="th">
            <body className={`${roboto.className} antialiased`}>
                {children}
            </body>
        </html>
    )
}
