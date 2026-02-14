import { businessInfo } from '@/data/businessInfo'
import type { Metadata } from 'next'
import Link from 'next/link'
import { LocalBusinessJsonLd } from '@/components/JsonLd'

export const metadata: Metadata = {
    title: 'Serviços de Chaveiro 24h em Porto Alegre | Chris Chaves',
    description: 'Confira nossos serviços de chaveiro 24 horas: cópia de chaves, abertura de portas, chaves codificadas e mais. Atendimento emergencial em Porto Alegre e região.',
    alternates: {
        canonical: 'https://chrischaves.com.br/servicos/',
    },
}

import { ServiceListJsonLd } from '@/components/JsonLd'

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

export default function ServicesPage() {
    const whatsappLink = `https://wa.me/55${businessInfo.phone.replace(/\D/g, '')}?text=Olá,%20vi%20o%20site%20e%20preciso%20de%20atendimento.`

    return (
        <main className="min-h-screen bg-black text-gray-200 selection:bg-cyan-500/30 selection:text-cyan-500 font-sans pb-20">
            {/* Semantic SEO Content */}
            <div className="sr-only">
                <h1>Serviços de Chaveiro em Porto Alegre - Lista Completa</h1>
                <p>
                    Confira a lista completa de serviços oferecidos pela Chris Chaves Chaveiro 24h.
                    Atendemos emergências, cópias de chaves automotivas, residenciais e empresariais em toda a grande Porto Alegre.
                </p>
            </div>
            <LocalBusinessJsonLd />
            <ServiceListJsonLd />
            {/* Header Section */}
            <section className="relative py-20 border-b border-neutral-800 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-green-900/20 via-black to-black">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-3xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
                        Serviços de Chaveiro 24 horas em Porto Alegre
                    </h1>

                    <p className="text-neutral-400 text-lg max-w-2xl mx-auto mb-8">
                        Atuamos em Porto Alegre e região com atendimento emergencial 24 horas.
                        Equipe qualificada para resolver seu problema com rapidez e segurança,
                        seja na sua residência ou para seu veículo.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-8 rounded-lg transition-transform hover:scale-105 shadow-[0_0_20px_rgba(34,197,94,0.3)]"
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                            </svg>
                            Chamar no WhatsApp
                        </a>

                        <a
                            href={`tel:${businessInfo.phone.replace(/[^0-9]/g, '')}`}
                            className="inline-flex items-center gap-2 text-white font-semibold hover:text-green-400 transition-colors px-6 py-3 border border-neutral-700 rounded-lg hover:border-green-500"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            {businessInfo.phone}
                        </a>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {businessInfo.services.map((service, index) => {
                        const slug = slugify(service)

                        return (
                            <div
                                key={index}
                                className="group flex flex-col justify-between p-8 rounded-xl border border-neutral-800 bg-neutral-900/30 hover:bg-neutral-800/50 hover:border-green-500/30 transition-all duration-300"
                            >
                                <div>
                                    <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-green-500/20 transition-colors">
                                        <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                                        </svg>
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                                        {service}
                                    </h3>

                                    <p className="text-neutral-500 text-sm mb-6">
                                        Solução profissional e rápida para {service.toLowerCase()}. Conte com nossa equipe especializada.
                                    </p>
                                </div>

                                <Link
                                    href={`/servicos/${slug}`}
                                    className="inline-flex items-center text-sm font-bold text-green-500 hover:text-green-400 transition-colors"
                                >
                                    Ver detalhes
                                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="container mx-auto px-4 py-8">
                <div className="bg-neutral-900 rounded-2xl p-8 md:p-12 text-center border border-neutral-800">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        Precisa de um chaveiro agora?
                    </h2>
                    <p className="text-neutral-400 mb-8 max-w-xl mx-auto">
                        Não perca tempo. Atendimento rápido e seguro em Porto Alegre e região.
                        Plantão 24 horas.
                    </p>
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold py-4 px-10 rounded-lg transition-transform hover:scale-105 shadow-lg"
                    >
                        Falar com Técnico
                    </a>
                </div>
            </section>
        </main>
    )
}
