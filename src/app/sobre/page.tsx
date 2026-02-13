import { businessInfo } from '@/data/businessInfo'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Sobre Chris Chaves | Chaveiro 24 Horas em Porto Alegre',
    description: 'Conheça a Chris Chaves 24h, especialista em chaves automotivas, residenciais e atendimento emergencial em Porto Alegre e região. Qualidade e rapidez.',
    alternates: {
        canonical: 'https://chrischaves.com.br/sobre/',
    },
}

export default function AboutPage() {
    const whatsappLink = `https://wa.me/55${businessInfo.phone.replace(/\D/g, '')}?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços.`

    return (
        <main className="min-h-screen bg-black text-white pb-20">

            {/* Header */}
            <section className="relative py-20 border-b border-neutral-800 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-800/30 via-black to-black">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                        Sobre a Chris Chaves | Chaveiro 24 horas
                    </h1>
                    <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
                        Sua segurança e tranquilidade são nossa prioridade. Atendimento especializado em toda Porto Alegre.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

                {/* About Text */}
                <div className="space-y-8">
                    <div>
                        <h2 className="text-2xl font-bold text-green-500 mb-4">Nossa História e Compromisso</h2>
                        <div className="prose prose-invert prose-lg text-neutral-300">
                            <p>
                                A <strong>Chris Chaves 24h</strong> é uma empresa consolidada, com anos de experiência e qualificação técnica no mercado. Nosso foco principal é o atendimento emergencial qualificado, garantindo que você nunca fique sem assistência quando mais precisa.
                            </p>
                            <p>
                                Especializados no segmento de chaveiro, oferecemos soluções completas para residências e veículos. Seja para uma cópia simples, uma abertura emergencial ou a confecção de uma chave automotiva importada complexa, nossa equipe está pronta para agir.
                            </p>
                            <p>
                                Nossa atuação cobre <strong>toda a região de Porto Alegre</strong>, com disponibilidade 24 horas por dia, todos os dias da semana.
                            </p>
                        </div>
                    </div>

                    <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-8">
                        <h3 className="text-xl font-bold text-white mb-6">O que realizamos</h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-neutral-400">
                            {[
                                "Atendimento emergencial 24h",
                                "Chaves automotivas nacionais e importadas",
                                "Troca de segredos",
                                "Cópias de chaves em geral",
                                "Cópias de controles",
                                "Confecção de carimbos",
                                "Conserto de fechaduras",
                                "Troca de baterias",
                                "Controle de portões"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-2">
                                    <span className="text-green-500">✓</span> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Info Card side */}
                <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-8 sticky top-8">
                    <h3 className="text-2xl font-bold text-white mb-8 border-b border-neutral-800 pb-4">
                        Informações
                    </h3>

                    <div className="space-y-8">

                        {/* Hours */}
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-green-500/10 rounded-lg text-green-500">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-bold text-white mb-1">Horário de Atendimento</h4>
                                <p className="text-green-400 font-medium text-lg">{businessInfo.hours}</p>
                                <p className="text-neutral-500 text-sm">Inclusive sábados, domingos e feriados.</p>
                            </div>
                        </div>

                        {/* Address */}
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-green-500/10 rounded-lg text-green-500">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-bold text-white mb-1">Endereço Base</h4>
                                <address className="text-neutral-400 not-italic leading-relaxed">
                                    {businessInfo.address}
                                </address>
                                <a
                                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(businessInfo.plusCode)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-green-500 text-sm hover:underline mt-2 inline-block"
                                >
                                    Ver no mapa &rarr;
                                </a>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-green-500/10 rounded-lg text-green-500">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-bold text-white mb-1">Contato</h4>
                                <a href={`tel:${businessInfo.phone.replace(/[^0-9]/g, '')}`} className="text-xl font-bold text-white hover:text-green-400 transition-colors">
                                    {businessInfo.phone}
                                </a>
                            </div>
                        </div>

                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 flex items-center justify-center gap-3 bg-green-600 hover:bg-green-500 text-white font-bold py-4 px-6 rounded-lg transition-all transform hover:scale-105 shadow-lg w-full"
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                            </svg>
                            Falar no WhatsApp
                        </a>

                    </div>
                </div>

            </section>

        </main>
    )
}
