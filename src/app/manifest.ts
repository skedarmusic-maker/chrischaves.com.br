import { MetadataRoute } from 'next'
import { businessInfo } from '@/data/businessInfo'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: businessInfo.name,
        short_name: 'Chris Chaves',
        description: businessInfo.description,
        start_url: '/',
        display: 'standalone',
        background_color: '#000000',
        theme_color: '#22c55e',
        icons: [
            {
                src: '/icon.svg',
                sizes: 'any',
                type: 'image/svg+xml',
            },
            {
                src: '/logo.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/logo.png',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
    }
}
