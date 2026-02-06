import { businessInfo } from '@/data/businessInfo'
import { Metadata, Route } from 'next'

// Utilities for slug conversion
function slugify(text: string) {
    return text
        .toString()
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .trim()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '')
        .replace(/--+/g, '-')
}

export default function sitemap() {
    const baseUrl = 'https://chrischaves24h.com.br' // Replace with actual domain when live

    // Static routes
    const routes = [
        '',
        '/servicos',
        '/servicos/chaveiro-emergencial',
        '/sobre',
        '/contato',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString().split('T')[0],
    }))

    // Dynamic service routes
    const serviceRoutes = businessInfo.services.map((service) => ({
        url: `${baseUrl}/servicos/${slugify(service)}`,
        lastModified: new Date().toISOString().split('T')[0],
    }))

    return [...routes, ...serviceRoutes]
}
