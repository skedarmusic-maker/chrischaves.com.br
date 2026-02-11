import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import { businessInfo } from '@/data/businessInfo'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    metadataBase: new URL('https://chrischaves.com.br'),
    title: {
        default: businessInfo.seo.core[3] + " em " + "Porto Alegre" + " | " + "Chris Chaves",
        template: '%s | Chris Chaves'
    },
    description: businessInfo.description,
    // icons: {
    //     icon: '/favicon.ico',
    // },
    openGraph: {
        type: 'website',
        locale: 'pt_BR',
        url: 'https://chrischaves.com.br',
        siteName: 'Chris Chaves | Chaveiro 24h',
        title: 'Chaveiro 24 Horas em Porto Alegre | Chris Chaves',
        description: businessInfo.description,
        images: [
            {
                url: '/logo.png', // Using logo as default OG Image
                width: 1200,
                height: 630,
                alt: 'Chris Chaves Chaveiro 24h em Porto Alegre',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Chaveiro 24 Horas em Porto Alegre | Chris Chaves',
        description: businessInfo.description,
        images: ['/logo.png'], // Using logo as default
    },
    verification: {
        google: '9L8FQl83SDpT8Cn3MxWAvHYn9hnRZPLwGjahjI8_Es0',
    },
}

import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="pt-BR">
            <body className={`${inter.className} bg-black text-white antialiased selection:bg-green-500 selection:text-black`}>
                <Navbar />
                <div className="pt-20">
                    {children}
                </div>
                <Footer />
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-ME8S68TVBG"
                    strategy="afterInteractive"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', 'G-ME8S68TVBG');
                    `}
                </Script>
            </body>
        </html >
    )
}
