import { businessInfo } from '@/data/businessInfo'

export function LocalBusinessJsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Locksmith",
        "@id": `${businessInfo.siteUrl}/#organization`,
        "name": businessInfo.name,
        "url": businessInfo.siteUrl,
        "logo": businessInfo.logoUrl,
        "image": businessInfo.logoUrl,
        "description": businessInfo.description,
        "telephone": businessInfo.phone,
        "priceRange": businessInfo.priceRange,
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Av. Karl Iwers, 1800",
            "addressLocality": "Porto Alegre",
            "addressRegion": "RS",
            "postalCode": "91230-570",
            "addressCountry": "BR"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": businessInfo.geo.latitude,
            "longitude": businessInfo.geo.longitude
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
            ],
            "opens": "00:00",
            "closes": "23:59"
        },
        "sameAs": businessInfo.socials,
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": businessInfo.rating.value,
            "reviewCount": businessInfo.rating.count
        },
        "areaServed": businessInfo.areaServed.map(city => ({
            "@type": "City",
            "name": city
        })),
        "hasOfferCatalog": {
            "@id": `${businessInfo.siteUrl}/#catalog`,
            "@type": "OfferCatalog",
            "name": "Serviços de Chaveiro",
            "itemListElement": businessInfo.services.map((service, index) => ({
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": service
                }
            }))
        }
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    )
}

interface ServiceJsonLdProps {
    name?: string
    title?: string
    description: string
    url: string
    alternates?: {
        canonical: string
    }
}

export function ServiceJsonLd({ name, title, description, url }: ServiceJsonLdProps) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": name || title,
        "description": description,
        "provider": {
            "@id": `${businessInfo.siteUrl}/#organization`
        },
        "areaServed": businessInfo.areaServed.map(city => ({
            "@type": "City",
            "name": city
        })),
        "hasOfferCatalog": {
            "@id": `${businessInfo.siteUrl}/#catalog`
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": url
        }
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    )
}
