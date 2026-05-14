import { businessInfo } from '@/data/businessInfo'
import { Metadata, Route } from 'next'

// Utilities for slug conversion
// Last deployment trigger: 2026-05-14

export default function sitemap() {
    const baseUrl = 'https://chrischaves.com.br' // Replace with actual domain when live

    // Static routes
    const routes = [
        '',
        '/servicos/',
        '/sobre/',
        '/contato/',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString().split('T')[0],
    }))

    // Dynamic service routes
    const serviceRoutes = businessInfo.services.map((service) => ({
        url: `${baseUrl}/servicos/${service.slug}/`,
        lastModified: new Date().toISOString().split('T')[0],
    }))

    return [...routes, ...serviceRoutes]
}
